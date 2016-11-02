/**
 * BetController
 *
 * @description :: Server-side logic for managing bets
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var WEBHOOK_SECRET = "3PX7T47T6RZ2QR6CL6KL6UU9KLGZPFQQ";

module.exports = {
	index: (req,res) => {
    var secret = req.body.secret;
    if (secret !== WEBHOOK_SECRET) {
      res.status(403).end();
      return;
    }
    res.status(200).end();
    if (req.body.event == 'incoming_message') {
      console.log('api',req.body);
      let data = {
        fromNumber: req.body.from_number,
        toNumber: req.body.to_number,
        content: req.body.content
      };
      Player.findOne({phone:data.fromNumber}).exec((err,foundPlayer) => {
        if(err) return res.negotiate(err);
        if (!foundPlayer) {
          console.log('người chơi ko tồn tại');
          return false
        } else {
          Bet.create({
            message:data.content,
            player:foundPlayer.id,
            owner:data.toNumber
          }).exec(function(err,result) {
            if (err) {
              return res.negotiate(err)
            }
            console.log(result);
            sails.sockets.blast('add/bet',{msg:result})
          });
        }
      });




    }
    // if (!req.isSocket) {
    //   return res.badRequest('Làm gì zậy pa?')
    // }
    // let params = req.allParams();

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
