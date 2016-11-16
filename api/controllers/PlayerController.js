/**
 * PlayerController
 *
 * @description :: Server-side logic for managing players
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	add: (req,res) => {
    if (!req.isSocket) return res.badRequest('bậy zồi, ahihi');
    let params = req.allParams();
	  Player.create(params).exec(function(err,addPlayer) {
      if(err) return res.negotiate(err);
      console.log('add player',addPlayer);
      sails.sockets.broadcast(params.owner,'add/player',{msg:addPlayer})
    })
  },
  edit: (req,res) => {
    if (!req.isSocket) return res.badRequest('bậy zồi, ahihi');
    let params = req.allParams();
    Player.update({id:params.id},params).exec(function(err,editPlayer) {
      if(err) return res.negotiate(err);
      sails.sockets.broadcast(params.owner,'edit/player',{msg:editPlayer})
    })
  },
  del: (req,res) => {
    if (!req.isSocket) return res.badRequest('bậy zồi, ahihi');
    let params = req.allParams();
    Player.destroy({id:params.id}).exec(function(err,delPlayer) {
      if(err) return res.negotiate(err);
      sails.sockets.broadcast(params.owner,'edit/player',{msg:delPlayer})
    })
  },
  history: (req,res) => {
    let params = req.allParams();
    Player.findOne({id:params.id})
      .populate('owner')
      .populate('bets')
      .exec(function(err,foundPlayer){
        console.log(foundPlayer);
      if (err) return res.negotiate(err);
      if (foundPlayer.owner.phone != req.session.user.phone ) return res.negotiate('bạn ko có quyền xem người chơi này');
      else return res.view('admin/history',foundPlayer);
    })
  }
};
