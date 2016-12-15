/**
 * Vietlott
 * @Author      :: Kingasawa
 * @description :: wash my money
 * @help        :: See http://vnmagic.net/ for more information
 */

var moment = require('moment');
module.exports = {
	index: (req,res) => {

    // Đếm số người chơi của đại lý
    let findCountPlayers = new Promise((resolve, reject) => {
      Player.count({owner:req.session.user.phone}).exec(function(err,countPlayers) {
        if (err) {reject(err)}
        resolve(countPlayers);
      })
    });
    // Đếm số tin nhắn đến đại lý
    let findCountBets = new Promise((resolve, reject) => {
      Bet.count({owner:req.session.user.phone}).exec(function(err,countBets) {
        if (err) {reject(err)}
        resolve(countBets);
      })
    });
    // Lấy thông tin của đại lý
    let findOneUser = new Promise((resolve, reject) => {
        User.findOne({phone:req.session.user.phone}).exec(function(err,foundUser) {
          if (err) {reject(err)}
          resolve(foundUser);
        })
    });
    // Chờ tất cả query ở trên hoàn tất mới tiến hành in ra 1 lượt
    async function concurrent() {
      var [countPlayers,countBets,foundUser] = await Promise.all([
        findCountPlayers,
        findCountBets,
        findOneUser
      ]);

      return res.view("admin/index", {countPlayers,countBets,foundUser})
    }
    concurrent();
  },

  player: (req,res) => {
    Player.find({owner:req.session.user.phone})
      .exec(function(err,foundPlayers){
      if(err) return res.negotiate(err);
      res.view('admin/player',{foundPlayers})
    })
  },

  bet: (req,res) => {
    let params = req.allParams();
    if (params.ngay) {
      var getday = moment(params.ngay).format('YYYY-MM-DD');
      var getdayShow = moment(params.ngay).format('DD-MM-YYYY');
      console.log(getday);
      Bet.find({owner:req.session.user.phone,ngaytinh:{'contains':getday}})
        .populate('player')
        .exec(function(err,foundBets){
          if(err) return res.negotiate(err);
          res.view('admin/bet',{foundBets,getdayShow,getday})
        })
    } else {
      let getToday = (new Date()).toString();
      var getday = moment(getToday).format('YYYY-MM-DD');
      var getdayShow = moment(getToday).format('DD-MM-YYYY');
      Bet.find({owner:req.session.user.phone,ngaytinh:{'contains':getday}})
        .populate('player')
        .exec(function(err,foundBets){
        if(err) return res.negotiate(err);
        res.view('admin/bet',{foundBets,getdayShow,getday})
      })
    }
  },

  cal: (req,res) => {
    let params = req.allParams();
    let getday = moment(params.ngay).format('YYYY-MM-DD');
    let getdayShow = moment(params.ngay).format('DD-MM-YYYY');

      Lot.find({createdAt:{'contains':getday}}).exec(function(err,gotLot) {
        History.findOne({date:getdayShow}).exec(function(err,foundHistory){
          console.log(foundHistory);
          Bet.find({owner: req.session.user.phone,ngaytinh:{'contains':getday}})
          .populate('player')
          .exec(function (err, foundBets) {
            if (err) return res.negotiate(err);
            res.view('admin/cal', {foundBets, getdayShow, gotLot, foundHistory })
          })
        })
      })
    },
  history: (req,res) => {
    let params = req.allParams();
    History.find(params).exec(function(err,foundResult){
      if (err) return res.negotiate(err);
      else res.view('admin/history',{foundResult})
    })
  }
};
