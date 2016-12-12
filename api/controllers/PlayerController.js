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
    sails.sockets.join(req,params.owner);
	  Player.create(params).exec(function(err,addPlayer) {
      if(err) return res.negotiate(err);
      console.log('add player',addPlayer);
      sails.sockets.broadcast(params.owner,'add/player',{msg:addPlayer})
    })
  },
  edit: (req,res) => {
    if (!req.isSocket) return res.badRequest('bậy zồi, ahihi');
    let params = req.allParams();
    sails.sockets.join(req,params.owner);
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

      if (err) return res.negotiate(err);
      if (foundPlayer.owner.phone != req.session.user.phone ) return res.negotiate('bạn ko có quyền xem người chơi này');
      else return res.view('admin/history',foundPlayer);
    })
  },
  search: (req,res) => {
    let params = req.allParams();
    sails.sockets.join(req,params.phone);
    Player.findOne({phone:params.phone}).exec(function(err,foundPlayer){
      if (!foundPlayer) console.log('ko tìm thấy số '+params.phone+' trong dữ liệu');
      else {
        if (foundPlayer.password == params.password) {
          sails.sockets.broadcast(params.phone,'search/player',{pid:foundPlayer.phone})
        }
        else { console.log('sai mật khẩu rồi') }
      }
    })
  },
  view: (req,res) => {
    let params = req.allParams();
    Player.findOne({phone:params.id})
      .populate('bets')
      .exec(function(err,foundPlayer){
        res.view('player',{foundPlayer});
        console.log(foundPlayer);
      })
  }
};
