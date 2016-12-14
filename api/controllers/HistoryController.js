/**
 * HistoryController
 *
 * @description :: Server-side logic for managing histories
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	save: (req,res) => {
	  let params = req.allParams();
    console.log(params);
    sails.sockets.join(req,params.aPhone);
      History.create(params).exec(function(err){
          sails.sockets.broadcast(params.aPhone,'save/history',{msg:'saved'});
          return res.ok();
        })
  },

  update: (req,res) => {
    let params = req.allParams();
    console.log('params',params);
    Bet.findOne({id:params.bid}).exec(function(err,foundBet) {
      if (foundBet.result == 0) {
        Player.findOne({id:params.pid}).exec(function(err,foundPlayer){
          if (foundPlayer) {
            var newTotal = parseFloat(foundPlayer.total) + parseFloat(params.total);
            Player.update({id:foundPlayer.id},{total:newTotal}).exec(function(err){
              console.log('update player thành công');
              Bet.update({id:params.bid},{result:parseFloat(params.total)}).exec(function(err){
                console.log('update bet thành công')
              })
            })
          }
        })
      } else {
        console.log('load lại dữ liệu , ko lưu nữa');
      }
    });
  }

};
