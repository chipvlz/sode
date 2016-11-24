$(function() {
  var weekdays = new Array(7);
  weekdays[0] = "Chủ Nhật";
  weekdays[1] = "Thứ 2";
  weekdays[2] = "Thứ 3";
  weekdays[3] = "Thứ 4";
  weekdays[4] = "Thứ 5";
  weekdays[5] = "Thứ 6";
  weekdays[6] = "Thứ 7";

  var current_date = new Date();
  weekday_value = current_date.getDay();
  var homNay = weekdays[weekday_value];

  // dịch ngày tháng
  var vietDate = $('.ngay-nhan-tin').text().split(' ');
  if (vietDate.length != 1) {
    // Chỉ lấy 1 số , ko lấy số 0
    var getDate = vietDate[2].split('');
    if (getDate[0]==0) {
      newDate = getDate[1]
    } else {
      newDate = getDate[0]+''+getDate[1];
    }
    if (vietDate[0] == 'Mon') { var adate = 'Thứ Hai'}
    else if (vietDate[0] == 'Tue') { var adate = 'Thứ Ba'}
    else if (vietDate[0] == 'Wed') { var adate = 'Thứ Tư'}
    else if (vietDate[0] == 'Thu') { var adate = 'Thứ Năm'}
    else if (vietDate[0] == 'Fri') { var adate = 'Thứ Sáu'}
    else if (vietDate[0] == 'Sat') { var adate = 'Thứ Bảy'}
    else { var adate = 'Chủ Nhật'}

    if (vietDate[1] == 'Jan') { var amonth = '1'}
    else if (vietDate[1] == 'Feb') { var amonth = '2'}
    else if (vietDate[1] == 'Mar') { var amonth = '3'}
    else if (vietDate[1] == 'Apr') { var amonth = '4'}
    else if (vietDate[1] == 'May') { var amonth = '5'}
    else if (vietDate[1] == 'Jun') { var amonth = '6'}
    else if (vietDate[1] == 'Jul') { var amonth = '7'}
    else if (vietDate[1] == 'Aug') { var amonth = '8'}
    else if (vietDate[1] == 'Sep') { var amonth = '9'}
    else if (vietDate[1] == 'Oct') { var amonth = '10'}
    else if (vietDate[1] == 'Nov') { var amonth = '11'}
    else { var amonth = '12'}
    var newDate = adate +' , ' + newDate +'-'+ amonth + '-'+ vietDate[3];
    $('span.bet-hour').text(vietDate[4]);
    $('span.bet-date').text(newDate);
  }

  var bonus = parseFloat($('span.bonus-player').text()); // lấy giá trị tiền cò để tính toán
  var msgBetContent = $('.msg-bet-content').text(), // lấy nội dung tin nhắn gốc
    msgContent = msgBetContent.toLowerCase(), // chuyển tất cả ký tự của tin nhắn thành chữ thường ( ko viết hoa )
    betValues = msgContent.split('.'), // Chia tin nhắn ra thành nhiều bet , phân biệt giữa các bet bằng dấu chấm
    countMsg = betValues.length - 1; // đếm xem có bao nhiêu bet trong 1 tin nhắn
  $('span.count-msg').text(betValues.length); // in giá trị ra web để nhìn cho dễ

  // Tính toán cho mỗi bet
  for(i=0 ; i <= countMsg ; i++) {
    y = i + 1;
    var firstBet = betValues[0].split(' ');
    var daiDauTien = firstBet[0];

    // Chia mỗi bet ra từng chỉ số riêng biệt để dễ tính , cách nhau bằng khoảng trắng
    var betDetail = betValues[i].split(' ');

    if(isNaN(parseInt(betDetail[1]))) {
      betDetail.unshift(daiDauTien);

    } else {  }

    // Nhận biết tên đài - dùng cho cả 2 trường hợp
    if (betDetail[0] == 'dc' || betDetail[0] == 'tp' || betDetail[0] == 'dn' || betDetail[0] == 'đn' || betDetail[0] == 'tn' || betDetail[0] == 'vl' || betDetail[0] == 'tg') {
      var daiBet = 'đài chính'
    } else if (betDetail[0] == 'dp' || betDetail[0] == 'đt' || betDetail[0] == 'dt' || betDetail[0] == 'vt' || betDetail[0] == 'ct' || betDetail[0] == 'ag' || betDetail[0] == 'bd' || betDetail[0] == 'la' || betDetail[0] == 'kg') {
      var daiBet = 'đài phụ'
    } else if (betDetail[0] == 'dp1' || betDetail[0] == 'cm' || betDetail[0] == 'bl' || betDetail[0] == 'st' || betDetail[0] == 'tv' || betDetail[0] == 'bp' || betDetail[0] == 'hg' || betDetail[0] == 'dl' || betDetail[0] == 'đl' ) {
      var daiBet = 'đài phụ 1'
    } else if (betDetail[0] == 'mb' || betDetail[0] == 'hn') {
      var daiBet = 'đài miền bắc'
    } else if (betDetail[0] == 'bt') {
      var daiBet = 'đài chính'
    }

    // trường hợp đặc biệt
    if (betDetail[2] == 'da' || betDetail[2] == 'đa' || betDetail[2] == 'đá' || betDetail[2] == 'dx' || betDetail[2] == 'dv' || betDetail[2] == 'đx' || betDetail[2] == 'đv') {
      var numberBet = betDetail[1]; // vì là đá số nên nó luôn nằm ở vị trí này
      if (betDetail[2] == 'da' || betDetail[2] == 'đa' || betDetail[2] == 'đá') {
        var theloaiBet = 'đá';
        var hesoDai = 36;
      } else {
        var theloaiBet = 'đá xiên';
        var hesoDai = 72;}

      if (betDetail.length == 5 ) {
        var totalPay = 1 * hesoDai * bonus * parseInt(betDetail[4]) * 1000;

      $('#dahaiso-table tbody').append('<tr><td class="dai-bet">' + daiBet + '</td>' +
        '<td class="so-bet">'+numberBet+'</td>' +
        '<td class="theloai-bet">'+theloaiBet+'</td>' +
        '<td class="soda1-bet">'+betDetail[3]+'</td>' +
        '<td class="tien-bet">'+betDetail[4]+'</td>' +
        '<td class="von-bet">'+parseInt(totalPay)+'</td>' +
        '</tr>');
      } else if (betDetail.length == 6 ) {
        var totalPay = 3 * hesoDai * bonus * parseInt(betDetail[5]) * 1000;

        $('#dabaso-table tbody').append('<tr><td class="dai-bet">' + daiBet + '</td>' +
          '<td class="so-bet">'+numberBet+'</td>' +
          '<td class="theloai-bet">'+theloaiBet+'</td>' +
          '<td class="soda1-bet">'+betDetail[3]+'</td>' +
          '<td class="soda2-bet">'+betDetail[4]+'</td>' +
          '<td class="tien-bet">'+betDetail[5]+'</td>' +
          '<td class="von-bet">'+parseInt(totalPay)+'</td>' +
          '</tr>');
      }
    }
    // trường hợp cơ bản
    else {
      var detailTien = betDetail.length - 1,
        detailTheLoai = betDetail.length - 2,
        xTo = betDetail.length - 3;

      if (betDetail[detailTheLoai] == 'dau' || betDetail[detailTheLoai] == 'đầu') {
        var theloaiBet = 'đầu';
        var totalPay = parseInt(betDetail[detailTien]) * bonus * 1000;
      } else if (betDetail[detailTheLoai] == 'duoi' || betDetail[detailTheLoai] == 'đuôi') {
        var theloaiBet = 'đuôi';
        var totalPay = parseInt(betDetail[detailTien]) * bonus * 1000;
      } else if (betDetail[detailTheLoai] == 'dd' || betDetail[detailTheLoai] == 'đđ') {
        var theloaiBet = 'đầu đuôi';
        var totalPay = parseInt(betDetail[detailTien]) * 2 * bonus * 1000;
      } else if (betDetail[detailTheLoai] == 'bl' || betDetail[detailTheLoai] == 'b') {
        var theloaiBet = 'bao lô';
      } else if (betDetail[detailTheLoai] == 'xc' || betDetail[detailTheLoai] == 'xiu' || betDetail[detailTheLoai] == 'x') {
        var theloaiBet = 'xỉu chủ';
      } else if (betDetail[detailTheLoai] == 'xd' || betDetail[detailTheLoai] == 'dxc') {
        var theloaiBet = 'xỉu đảo';
      } else if (betDetail[detailTheLoai] == 'bd' || betDetail[detailTheLoai] == 'bđ' || betDetail[detailTheLoai] == 'baodao') {
        var theloaiBet = 'bao đảo';
      } else if (betDetail[detailTheLoai] == 'đl' || betDetail[detailTheLoai] == 'dl' || betDetail[detailTheLoai] == 'daolo') {
        var theloaiBet = 'đảo lô';
      }
      // document.write(betDetail+'</br>');
      $('ul.phantich1').append('<li class="list-group-item">' + betDetail + '' +
        '<span class="pull-right">' + betDetail.length + '</span></li>');
      for (x = 1; x <= xTo; x++) {
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
        $('#coban-table tbody').append('<tr><td class="loai-bet">' + loaiSo + '</td>' +
          '<td class="dai-bet">' + daiBet + '</td>' +
          '<td class="so-bet">' + betDetail[x] + '</td>' +
          '<td class="theloai-bet">' + theloaiBet + '</td>' +
          '<td class="tien-bet">' + betDetail[detailTien] + '</td>' +
          '<td class="von-bet">' + parseInt(totalPay) + 'đ</td>' +
          '</tr>');
      }
    }
  }

  $('.table').each(function() {
    var vonArray = [];
    $(this).find('td.von-bet').each(function() {
      var tongvon = parseInt($(this).text());
      vonArray.push(tongvon);
    });
    var sumVon = vonArray.reduce((a,b) => a+b,0);
    $(this).find('td.tong-von').text(sumVon+'đ');
  });
});
