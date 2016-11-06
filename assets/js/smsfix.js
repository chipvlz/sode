$(function() {

  var bonus = parseFloat($('span.bonus-player').text());
  var msgBetContent = $('.msg-bet-content').text(),
    msgContent = msgBetContent.toLowerCase(),
    betValues = msgContent.split('.'),
    countMsg = betValues.length - 1;
  $('span.count-msg').text(betValues.length);

  for(i=0 ; i <= countMsg ; i++) {
    y = i+1;
    var betDetail = betValues[i].split(' ');
    var detailTien = betDetail.length -1,
      detailTheLoai = betDetail.length -2,

      xTo = betDetail.length -3;

    if (betDetail[0]=='dc') {
      var daiBet = 'Đài chính'
    } else if (betDetail[0]=='dp') {
      var daiBet = 'Đài phụ'
    } else if (betDetail[0]=='dp1') {
      var daiBet = 'Đài phụ 1'
    } else if (betDetail[0]=='mb' || betDetail[0]=='hn') {
      var daiBet = 'Đài miền bắc'
    }

    if (betDetail[detailTheLoai]=='dau' || betDetail[detailTheLoai]=='đầu') {
      var theloaiBet = 'đầu';
      var totalPay = parseInt(betDetail[detailTien]) * bonus * 1000;
    } else if (betDetail[detailTheLoai]=='duoi' || betDetail[detailTheLoai]=='đuôi') {
      var theloaiBet = 'đuôi';
      var totalPay = parseInt(betDetail[detailTien]) * bonus * 1000;
    } else if (betDetail[detailTheLoai]=='dd' || betDetail[detailTheLoai]=='đđ') {
      var theloaiBet = 'đầu đuôi';
      var totalPay = parseInt(betDetail[detailTien]) * 2 * bonus * 1000;
    } else if (betDetail[detailTheLoai]=='bl' || betDetail[detailTheLoai]=='b') {
      var theloaiBet = 'bao lô';
    } else if (betDetail[detailTheLoai]=='xc' || betDetail[detailTheLoai]=='xiu') {
      var theloaiBet = 'xỉu chủ';
    } else if (betDetail[detailTheLoai]=='xd' || betDetail[detailTheLoai]=='dxc') {
      var theloaiBet = 'xỉu đảo';
    } else if (betDetail[detailTheLoai]=='bd' || betDetail[detailTheLoai]=='bđ' || betDetail[detailTheLoai]=='baodao') {
      var theloaiBet = 'bao đảo';
    } else if (betDetail[detailTheLoai]=='đl' || betDetail[detailTheLoai]=='dl' || betDetail[detailTheLoai]=='daolo') {
      var theloaiBet = 'đảo lô';
    }
    // document.write(betDetail+'</br>');
    $('ul.phantich1').append('<li class="list-group-item">'+betDetail+'' +
      '<span class="pull-right">'+betDetail.length+'</span></li>');
    for (x=1; x<=xTo; x++) {
      var number = betDetail[x],
        output = [],
        sNumber = number.toString();

      for (var a = 0, len = sNumber.length; a < len; a += 1) {
        output.push(+sNumber.charAt(a));
      }
      var n1 = output[0],
          n2 = output[1],
          n3 = output[2];

      if (betDetail[x].length == 2) {
        var loaiSo = '2 số';
        if (theloaiBet == 'bao lô') {
          var totalPay = parseInt(betDetail[detailTien]) * 18 * bonus * 1000;
        }
      } else if (betDetail[x].length == 3) {
        var loaiSo = '3 số';
        if (theloaiBet == 'bao lô') {
          var totalPay = parseInt(betDetail[detailTien]) * 17 * bonus * 1000;
        } else if (theloaiBet == 'xỉu đảo') {
          if (n1 != n2 && n1 != n3 && n2 != n3) {
            console.log('3 số khác nhau');
            var totalPay = parseInt(betDetail[detailTien]) * 6 * 2 * bonus * 1000;
          } else if (n1 == n2 || n2 == n3 || n1 == n3) {
            console.log('có số giống nhau');
            var totalPay = parseInt(betDetail[detailTien]) * 4 * 2 * bonus * 1000;
          }
        }
      } else {
        var loaiSo = '4 số';
        if (theloaiBet == 'bao lô') {
          var totalPay = parseInt(betDetail[detailTien]) * 16 * bonus * 1000;
        }
      }

    $('#msg-bet tbody').append('<tr><td class="loai-bet">'+loaiSo+'</td>' +
      '<td class="dai-bet">'+daiBet+'</td>' +
      '<td class="so-bet">'+betDetail[x]+'</td>' +
      '<td class="theload-bet">'+theloaiBet+'</td>' +
      '<td class="tien-bet">'+betDetail[detailTien]+'</td>' +
      '<td class="von-bet">'+parseInt(totalPay)+'đ</td>' +
      '</tr>');

      // $('#msg-bet .msgbet'+i+' td.so-bet').append('<span>'+betDetail[x]+',</span>')
    }
  }

});
