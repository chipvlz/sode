/**
 * AdminController
 *
 * @description :: Server-side logic for managing admins
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: (req,res) => {
    Player.count({owner:req.session.user.phone})
      .exec(function(err,countPlayers){
        if(err) return res.negotiate(err);
        User.findOne({id:req.session.user_id}).exec(function(err,foundUser) {
          console.log(countPlayers);
          res.view('admin/index',{foundUser,countPlayers})
        });
      });

	 //  Bet.find({owner:req.session.user.phone}).populate('player').exec(function(err,foundBets) {
	 //    if (err) return res.negotiate(err);
    //   res.view('admin/index',{foundBets})
    // })
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

