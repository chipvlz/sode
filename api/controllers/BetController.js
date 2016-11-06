/**
 * BetController
 *
 * @description :: Server-side logic for managing bets
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
// telerivet.com/p/5e34e37b
var WEBHOOK_SECRET = "3PX7T47T6RZ2QR6CL6KL6UU9KLGZPFQQ";

module.exports = {
	index: (req,res) => {
	  // Khai báo key cho ứng dụng
    var secret = req.body.secret;
    // Phản hồi lỗi nếu key không đúng
    if (secret !== WEBHOOK_SECRET) {
      res.status(403).end();
      return;
    }
    // Phản hồi 1 status 200 để server không gửi tiếp tin nhắn
    res.status(200).end();
    if (req.body.event == 'incoming_message') {
      let data = {
        fromNumber: req.body.from_number,
        toNumber: req.body.to_number,
        content: req.body.content
      };
      // Tìm xem với số điện thoại gửi đến có được đăng ký để chơi chưa
      Player.findOne({phone:data.fromNumber}).exec((err,foundPlayer) => {
        if (err) return res.negotiate(err);
        if (!foundPlayer) {
          console.log(data.fromNumber+' vừa nhắn: '+data.content);
          console.log('số điện thoại '+data.fromNumber+' chưa được đăng ký, nên sẽ không lưu lại dữ liệu');
          return false
        } else {
        // Nếu số điện thoại này đã đăng ký rồi thì mới lưu vào database
          Bet.create({
            message:data.content,
            msgedit:data.content,
            player:foundPlayer.id,
            owner:data.toNumber
          }).exec(function(err,result) {
            if (err) {
              return res.negotiate(err)
            }
            result.playerName = foundPlayer.name;
            result.playerPhone = foundPlayer.phone;
            result.ownerPhone = data.toNumber;
            console.log(result);
            // Realtime notification
            sails.sockets.blast('add/bet',{msg:result})
          });
        }
      });
      }
  },

  view: (req,res) => {
    let params = req.allParams();
    Bet.findOne({id:params.id}).populate('player').exec(function(err,foundBet){
      if (req.session.user.phone == foundBet.owner) {
        return res.view('admin/view_bet',foundBet)
      } else {
        return res.negotiate('Bạn không có quyền xem bet này')
      }
    })
  },

  edit: (req,res) => {
    if (!req.isSocket) return res.badRequest('Làm gì zậy pa?');
    let params = req.allParams();
    Bet.update({id:params.id},{msgedit:params.msgedit}).exec(function(err,editBet) {
      if (err) return res.negotiate(err);
      sails.sockets.broadcast(params.owner,'edit/bet',{msg:editBet})
    })
  }
};
