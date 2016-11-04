/**
 * RootController
 *
 * @description :: Server-side logic for managing roots
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  index: (req,res) => {
    User.find({group:'Admin'}).exec(function(err,foundUsers){
      return res.view('root/index',{foundUsers})
    })
  },

  user: (req,res) => {
    // // Đếm tổng số đại lý
    // let findCountUsers = new Promise((resolve, reject) => {
    //   User.count({group:'Admin'}).exec(function(err,countUsers) {
    //     if (err) {reject(err)}
    //     resolve(countUsers);
    //   })
    // });
    // // Lấy dữ liệu tất cả đại lý
    // let findUsers = new Promise((resolve, reject) => {
    //   User.find({group:'Admin'})
    //     .populate('players')
    //     .populate('bets')
    //     .exec(function(err,foundUsers) {
    //       if (err) {reject(err)}
    //       resolve(foundUsers);
    //     })
    // });
    // // Chờ tất cả query ở trên hoàn tất mới tiến hành in ra 1 lượt
    // async function concurrent() {
    //   var [countUsers,foundUsers] = await Promise.all([
    //     findCountUsers,
    //     findUsers
    //   ]);
    //   console.log(foundUsers);
    //   return res.view("root/user", {countUsers,foundUsers})
    // }
    // concurrent();
    let params = req.allParams();
    User.findOne({phone:params.i})
    .populate('players')
    .populate('bets')
      .exec(function(err,foundUser) {
        if (err) return res.negotiate(err);
        return res.view('root/user',foundUser)
      })
  }
};

