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
    let getToday = (new Date()).toString();
    var todayDate = moment(getToday).format('D-MM-YYYY');
    Bet.find({owner:req.session.user.phone})
      .populate('player')
      .exec(function(err,foundBets){
      if(err) return res.negotiate(err);
      res.view('admin/bet',{foundBets,todayDate})
    })
  },

  cal: (req,res) => {
    let getToday = (new Date()).toString();
    var todayDate = moment(getToday).format('D-MM-YYYY');
    Lot.find({ngay:'9-11-2016'}).exec(function(err,gotLot) {
      Bet.find({owner: req.session.user.phone})
        .populate('player')
        .exec(function (err, foundBets) {
          if (err) return res.negotiate(err);
          console.log(gotLot);
          res.view('admin/cal', {foundBets, todayDate, gotLot})
        })
    })
  }
};
