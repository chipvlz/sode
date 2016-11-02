/**
 * BetController
 *
 * @description :: Server-side logic for managing bets
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: (req,res) => {
    // if (!req.isSocket) {
    //   return res.badRequest('Làm gì zậy pa?')
    // }
    let params = req.allParams();
    Bet.create({

    }).exec(function(err,result) {
      if (err) {
        return res.negotiate(err)
      }
      console.log(result);
      res.ok('ok rồi');
      sails.sockets.blast('add/bet',result)
    })
  },

  edit: (req,res) => {
    if (!req.isSocket) return res.badRequest('Làm gì zậy pa?')
    let params = req.allParams();
    Bet.update({id:params.id},{msgedit:params.msgedit}).exec(function(err,editBet) {
      if (err) return res.negotiate(err);
      sails.sockets.broadcast(params.owner,'edit/bet',{msg:editBet})
    })
  }
};
