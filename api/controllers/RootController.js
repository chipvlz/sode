/**
 * RootController
 *
 * @description :: Server-side logic for managing roots
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var moment = require('moment');
module.exports = {
  index: (req,res) => {
    let getToday = (new Date()).toString();
    var getdata = {
      date:moment(getToday).format('DD-MM-YYYY'),
      time:moment(getToday).format('LT')
    };
    Lot.find().sort('id DESC').exec(function(err,foundLot){
      var latestBet = moment(foundLot[0].createdAt).format('DD-MM-YYYY');
      User.find({group:'Admin'}).exec(function(err,foundUsers){
        return res.view('root/index',{foundUsers,latestBet,getdata})
      })
    })
  },

  user: (req,res) => {

    let params = req.allParams();
    History.find({phone:params.i}).exec(function(err,foundHistory){
      User.findOne({phone:params.i})
      .populate('players')
      .populate('bets')
      .exec(function(err,foundUser) {
        if (err) return res.negotiate(err);
        return res.view('root/user',{foundUser,foundHistory})
      })
    })
  },
  giahan: (req,res) => {
    if (!req.isSocket) {return res.badRequest();}
    let params = req.allParams();
    User.update({phone:params.phone},{expired:params.expired})
      .exec(function(err) {
        if (err) return res.negotiate(err);
      })
  },

  adduser: (req,res) => {
    if (!req.isSocket) {return res.badRequest();}
    let params = req.allParams();
    User.create(params).exec(function(err) {
      if (err) return res.negotiate(err);
    })
  },

  kqxs: (req,res) => {
    let params = req.allParams();

    let mienBac = new Promise((resolve,reject) => {
      Lot.find({more:'mb'})
        .sort('id DESC')
        .limit(1)
        .exec(function(err,foundMb) {
        if (err) {reject(err)}
        resolve(foundMb);
      })
    });
    let mienNamdc = new Promise((resolve,reject) => {
      Lot.find({more:'dc'})
        .sort('id DESC')
        .limit(1)
        .exec(function(err,foundMndc) {
        if (err) {reject(err)}
        resolve(foundMndc);
      })
    });
    let mienNamdp = new Promise((resolve,reject) => {
      Lot.find({more:'dp'})
        .sort('id DESC')
        .limit(1)
        .exec(function(err,foundMndp) {
          if (err) {reject(err)}
          resolve(foundMndp);
        })
    });
    let mienNamdp1 = new Promise((resolve,reject) => {
      Lot.find({more:'dp1'})
        .sort('id DESC')
        .limit(1)
        .exec(function(err,foundMndp1) {
          if (err) {reject(err)}
          resolve(foundMndp1);
        })
    });

    async function concurrent() {
      var [foundMb,foundMndc,foundMndp,foundMndp1] = await Promise.all([mienBac,mienNamdc,mienNamdp,mienNamdp1]);
      return res.view('root/kqxs',{foundMb,foundMndc,foundMndp,foundMndp1});
    }
    concurrent();
  }

};

