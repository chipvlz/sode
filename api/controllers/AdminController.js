/**
 * AdminController
 *
 * @description :: Server-side logic for managing admins
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

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
        User.findOne({id:req.session.user_id}).exec(function(err,foundUser) {
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
    Bet.find({owner:req.session.user.phone})
      .populate('player')
      .exec(function(err,foundBets){
      if(err) return res.negotiate(err);
      res.view('admin/bet',{foundBets})
    })
  }
};

