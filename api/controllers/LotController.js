/**
 * LotController
 *
 * @description :: Server-side logic for managing Lots
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var Feed = require('rss-to-json');
module.exports = {
  xsmb: (req,res) => {
    Feed.load('http://kqxs.mobi/rss-feed/xsMB.rss', function(err, rss){
      var timngay = rss.items[0].link.split('http://kqxs.mobi/ngay/-xsmb-'),
          ngaythang = timngay[1].split('/');
      var mienbac = rss.items[0].description.split('\n'),
          dacbiet = mienbac[0].split(': '),
          giainhat = mienbac[1].split(': '),
          giainhi = mienbac[2].split(': '),
          giaiba = mienbac[3].split(': '),
          giaitu = mienbac[4].split(': '),
          giainam = mienbac[5].split(': '),
          giaisau = mienbac[6].split(': '),
          giaibay = mienbac[7].split(': ');

      Lot.create({
        name: 'Miền Bắc',
        more: 'mb',
        special: dacbiet[1],
        one: giainhat[1],
        two: giainhi[1],
        three: giaiba[1],
        four: giaitu[1],
        five: giainam[1],
        six: giaisau[1],
        seven: giaibay[1],
        ngay: ngaythang[0],
      }).exec(function(err,addLot){
        res.json(addLot);
      });
    });
  },

  xsmn: (req,res) => {
    Feed.load('http://kqxs.mobi/rss-feed/xsMN.rss', function (err, rss) {
      var timngay = rss.items[0].link.split('http://kqxs.mobi/ngay/-xsmn-'),
        ngaythang = timngay[1].split('/');
      var miennam = rss.items[0].description.split('\n');
      var dacbiet_dc = miennam[1].split(': '),
        giainhat_dc = miennam[2].split(': '),
        giainhi_dc = miennam[3].split(': '),
        giaiba_dc = miennam[4].split(': '),
        giaitu_dc = miennam[5].split(': '),
        giainam_dc = miennam[6].split(': '),
        giaisau_dc = miennam[7].split(': '),
        giaitam_dc = miennam[8].split('8: '),
        giaibay_dc = giaitam_dc[0].split(': '),
        dacbiet_dp = miennam[10].split(': '),
        giainhat_dp = miennam[11].split(': '),
        giainhi_dp = miennam[12].split(': '),
        giaiba_dp = miennam[13].split(': '),
        giaitu_dp = miennam[14].split(': '),
        giainam_dp = miennam[15].split(': '),
        giaisau_dp = miennam[16].split(': '),
        giaitam_dp = miennam[17].split('8: '),
        giaibay_dp = giaitam_dp[0].split(': '),
        dacbiet_dp1 = miennam[19].split(': '),
        giainhat_dp1 = miennam[20].split(': '),
        giainhi_dp1 = miennam[21].split(': '),
        giaiba_dp1 = miennam[22].split(': '),
        giaitu_dp1 = miennam[23].split(': '),
        giainam_dp1 = miennam[24].split(': '),
        giaisau_dp1 = miennam[25].split(': '),
        giaitam_dp1 = miennam[26].split('8: '),
        giaibay_dp1 = giaitam_dp1[0].split(': ');
      // Xong màn khai báo rồi , mệt mỏi :(

      let addDaichinh = new Promise((resolve, reject) => {
        Lot.create({
          name: miennam[0],
          more: 'dc',
          special: dacbiet_dc[1],
          one: giainhat_dc[1],
          two: giainhi_dc[1],
          three: giaiba_dc[1],
          four: giaitu_dc[1],
          five: giainam_dc[1],
          six: giaisau_dc[1],
          seven: giaibay_dc[1],
          eight: giaitam_dc[1],
          ngay: ngaythang[0]
        }).exec(function(err,daichinh) {
          if (err) {reject(err)}
          resolve(daichinh);
        })
      });

      let addDaiphu = new Promise((resolve, reject) => {
        Lot.create({
          name: miennam[9],
          more: 'dp',
          special: dacbiet_dp[1],
          one: giainhat_dp[1],
          two: giainhi_dp[1],
          three: giaiba_dp[1],
          four: giaitu_dp[1],
          five: giainam_dp[1],
          six: giaisau_dp[1],
          seven: giaibay_dp[1],
          eight: giaitam_dp[1],
          ngay: ngaythang[0]
        }).exec(function(err,daiphu) {
          if (err) {reject(err)}
          resolve(daiphu);
        })
      });

      let addDaiphu1 = new Promise((resolve, reject) => {
        Lot.create({
          name: miennam[18],
          more: 'dp1',
          special: dacbiet_dp1[1],
          one: giainhat_dp1[1],
          two: giainhi_dp1[1],
          three: giaiba_dp1[1],
          four: giaitu_dp1[1],
          five: giainam_dp1[1],
          six: giaisau_dp1[1],
          seven: giaibay_dp1[1],
          eight: giaitam_dp1[1],
          ngay: ngaythang[0]
        }).exec(function(err,daiphu1) {
          if (err) {reject(err)}
          resolve(daiphu1);
        })
      });

      // Chờ tất cả query ở trên hoàn tất mới tiến hành in ra 1 lượt
      async function concurrent() {
        var [daichinh,daiphu,daiphu1] = await Promise.all([
          addDaichinh,
          addDaiphu,
          addDaiphu1
        ]);
        return res.json({daichinh,daiphu,daiphu1})
      }
      concurrent();

    })
  },

  search: (req,res) => {
    if (!req.isSocket) return res.badRequest('bậy zồi, ahihi');
    let params = req.allParams();
    console.log(params);
    Lot.find({ngay:params.date}).exec(function(err,gotLot) {
      sails.sockets.blast('got/lot',{msg:gotLot});
    })
  }

};

