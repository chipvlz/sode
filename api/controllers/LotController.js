/**
 * LotController
 *
 * @description :: Server-side logic for managing Lots
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var Feed = require('rss-to-json');
module.exports = {
  index: (req,res) => {
    Feed.load('http://kqxs.mobi/rss-feed/xsMB.rss', function(err, rss){
      console.log(rss.items[0]);
    });
  }
};

