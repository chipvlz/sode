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

  var getLink = window.location.href.substr().split("/");
  var currentLink = getLink[3] + '/' + getLink[4];

  var socket = io.sails.connect();
  socket.get('/socket');

  // Lấy thông số kết quả xổ số để kiểm tra
  var kqxsHaisoMB = [];
  var laysodb = $('#sxmb-table td.td-db').text().split('');
  kqxsHaisoMB.push(laysodb[laysodb.length - 2]+''+laysodb[laysodb.length - 1]);
  for (l=1;l<=7;l++) {
    layso_1 = $('#sxmb-table td.td-'+l+'').text().split(' - ');
    for (k=0;k<layso_1.length;k++) {
      var layso_2 = layso_1[k].split('');
      kqxsHaisoMB.push(layso_2[layso_2.length - 2]+''+layso_2[layso_2.length - 1]);
      var dauHaisoMB = kqxsHaisoMB[0];
      var duoiHaisoMB = kqxsHaisoMB[kqxsHaisoMB.length-1];
      var dauduoiHaisoMB = [dauHaisoMB,duoiHaisoMB];
    }
  }

  var kqxsHaisoDC = [];
  var laysodb = $('#sxdc-table td.td-db').text().split('');
  kqxsHaisoDC.push(laysodb[laysodb.length - 2]+''+laysodb[laysodb.length - 1]);
  for (l=1;l<=8;l++) {
    layso_1 = $('#sxdc-table td.td-'+l+'').text().split(' - ');
    for (k=0;k<layso_1.length;k++) {
      var layso_2 = layso_1[k].split('');
      kqxsHaisoDC.push(layso_2[layso_2.length - 2]+''+layso_2[layso_2.length - 1]);
      var dauHaisoDC = kqxsHaisoDC[0];
      var duoiHaisoDC = kqxsHaisoDC[kqxsHaisoDC.length-1];
      var dauduoiHaisoDC = [dauHaisoDC,duoiHaisoDC];
    }
  }

  var kqxsHaisoDP = [];
  var laysodb = $('#sxdp-table td.td-db').text().split('');
  kqxsHaisoDP.push(laysodb[laysodb.length - 2]+''+laysodb[laysodb.length - 1]);
  for (l=1;l<=8;l++) {
    layso_1 = $('#sxdp-table td.td-'+l+'').text().split(' - ');
    for (k=0;k<layso_1.length;k++) {
      var layso_2 = layso_1[k].split('');
      kqxsHaisoDP.push(layso_2[layso_2.length - 2]+''+layso_2[layso_2.length - 1]);
      var dauHaisoDP = kqxsHaisoDP[0];
      var duoiHaisoDP = kqxsHaisoDP[kqxsHaisoDP.length-1];
      var dauduoiHaisoDP = [dauHaisoDP,duoiHaisoDP];
    }
  }

  var kqxsHaisoDD = kqxsHaisoDC.concat(kqxsHaisoDP);

  var kqxsHaisoDP1 = [];
  var laysodb = $('#sxdp1-table td.td-db').text().split('');
  kqxsHaisoDP1.push(laysodb[laysodb.length - 2]+''+laysodb[laysodb.length - 1]);
  for (l=1;l<=8;l++) {
    layso_1 = $('#sxdp1-table td.td-'+l+'').text().split(' - ');
    for (k=0;k<layso_1.length;k++) {
      var layso_2 = layso_1[k].split('');
      kqxsHaisoDP1.push(layso_2[layso_2.length - 2]+''+layso_2[layso_2.length - 1]);
      var dauHaisoDP1 = kqxsHaisoDP1[0];
      var duoiHaisoDP1 = kqxsHaisoDP1[kqxsHaisoDP.length-1];
      var dauduoiHaisoDP1 = [dauHaisoDP1,duoiHaisoDP1];
    }
  }

  var kqxsBasoMB = [];
  var laysodb = $('#sxmb-table td.td-db').text().split('');
  kqxsBasoMB.push(laysodb[laysodb.length - 3]+''+laysodb[laysodb.length - 2]+''+laysodb[laysodb.length - 1]);
  for (l=1;l<=6;l++) {
    layso_1 = $('#sxmb-table td.td-'+l+'').text().split(' - ');
    for (k=0;k<layso_1.length;k++) {
      var layso_2 = layso_1[k].split('');
      kqxsBasoMB.push(layso_2[layso_2.length - 3]+''+layso_2[layso_2.length - 2]+''+layso_2[layso_2.length - 1]);
      var dauBasoMB = kqxsBasoMB[0];
      var duoiBasoMB = kqxsBasoMB[kqxsBasoMB.length-1];
    }
  }
  var giaibasoMB = $('#sxmb-table td.td-6').text(),
      xiuChubasoMB = [kqxsBasoMB[0],giaibasoMB];

  var kqxsBasoDC = [];
  var laysodb = $('#sxdc-table td.td-db').text().split('');
  kqxsBasoDC.push(laysodb[laysodb.length - 3]+''+laysodb[laysodb.length - 2]+''+laysodb[laysodb.length - 1]);
  for (l=1;l<=7;l++) {
    layso_1 = $('#sxdc-table td.td-'+l+'').text().split(' - ');
    for (k=0;k<layso_1.length;k++) {
      var layso_2 = layso_1[k].split('');
      kqxsBasoDC.push(layso_2[layso_2.length - 3]+''+layso_2[layso_2.length - 2]+''+layso_2[layso_2.length - 1]);
      var dauBasoDC = kqxsBasoDC[0];
      var duoiBasoDC = kqxsBasoDC[kqxsBasoDC.length-1];
    }
  }
  var giaibasoDC = $('#sxdc-table td.td-7').text(),
      xiuChubasoDC = [kqxsBasoDC[0],giaibasoDC];

  var kqxsBasoDP = [];
  var laysodb = $('#sxdp-table td.td-db').text().split('');
  kqxsBasoDP.push(laysodb[laysodb.length - 3]+''+laysodb[laysodb.length - 2]+''+laysodb[laysodb.length - 1]);
  for (l=1;l<=7;l++) {
    layso_1 = $('#sxdp-table td.td-'+l+'').text().split(' - ');
    for (k=0;k<layso_1.length;k++) {
      var layso_2 = layso_1[k].split('');
      kqxsBasoDP.push(layso_2[layso_2.length - 3]+''+layso_2[layso_2.length - 2]+''+layso_2[layso_2.length - 1]);
      var dauBasoDP = kqxsBasoDP[0];
      var duoiBasoDP = kqxsBasoDP[kqxsBasoDP.length-1];
    }
  }
  var giaibasoDP = $('#sxdp-table td.td-7').text(),
      xiuChubasoDP = [kqxsBasoDP[0],giaibasoDP];

  var kqxsBasoDD = kqxsBasoDC.concat(kqxsBasoDP);

  var kqxsBasoDP1 = [];
  var laysodb = $('#sxdp1-table td.td-db').text().split('');
  kqxsBasoDP1.push(laysodb[laysodb.length - 3]+''+laysodb[laysodb.length - 2]+''+laysodb[laysodb.length - 1]);
  for (l=1;l<=7;l++) {
    layso_1 = $('#sxdp1-table td.td-'+l+'').text().split(' - ');
    for (k=0;k<layso_1.length;k++) {
      var layso_2 = layso_1[k].split('');
      kqxsBasoDP1.push(layso_2[layso_2.length - 3]+''+layso_2[layso_2.length - 2]+''+layso_2[layso_2.length - 1]);
      var dauBasoDP1 = kqxsBasoDP1[0];
      var duoiBasoDP1 = kqxsBasoDP1[kqxsBasoDP1.length-1];
    }
  }
  var giaibasoDP1 = $('#sxdp1-table td.td-7').text(),
      xiuChubasoDP1 = [kqxsBasoDP1[0],giaibasoDP1];

  var kqxsBonsoMB = [];
  var laysodb = $('#sxmb-table td.td-db').text().split('');
  kqxsBonsoMB.push(laysodb[laysodb.length - 4]+''+laysodb[laysodb.length - 3]+''+laysodb[laysodb.length - 2]+''+laysodb[laysodb.length - 1]);
  for (l=1;l<=5;l++) {
    layso_1 = $('#sxmb-table td.td-'+l+'').text().split(' - ');
    for (k=0;k<layso_1.length;k++) {
      var layso_2 = layso_1[k].split('');
      kqxsBonsoMB.push(layso_2[layso_2.length - 4]+''+layso_2[layso_2.length - 3]+''+layso_2[layso_2.length - 2]+''+layso_2[layso_2.length - 1]);
      var dauBonsoMB = kqxsBonsoMB[0];
      var duoiBonsoMB = kqxsBonsoMB[kqxsBonsoMB.length-1];
    }
  }

  var kqxsBonsoDC = [];
  var laysodb = $('#sxdc-table td.td-db').text().split('');
  kqxsBonsoDC.push(laysodb[laysodb.length - 4]+''+laysodb[laysodb.length - 3]+''+laysodb[laysodb.length - 2]+''+laysodb[laysodb.length - 1]);
  for (l=1;l<=6;l++) {
    layso_1 = $('#sxdc-table td.td-'+l+'').text().split(' - ');
    for (k=0;k<layso_1.length;k++) {
      var layso_2 = layso_1[k].split('');
      kqxsBonsoDC.push(layso_2[layso_2.length - 4]+''+layso_2[layso_2.length - 3]+''+layso_2[layso_2.length - 2]+''+layso_2[layso_2.length - 1]);
      var dauBonsoDC = kqxsBonsoDC[0];
      var duoiBonsoDC = kqxsBonsoDC[kqxsBonsoDC.length-1];
    }
  }

  var kqxsBonsoDP = [];
  var laysodb = $('#sxdp-table td.td-db').text().split('');
  kqxsBonsoDP.push(laysodb[laysodb.length - 4]+''+laysodb[laysodb.length - 3]+''+laysodb[laysodb.length - 2]+''+laysodb[laysodb.length - 1]);
  for (l=1;l<=6;l++) {
    layso_1 = $('#sxdp-table td.td-'+l+'').text().split(' - ');
    for (k=0;k<layso_1.length;k++) {
      var layso_2 = layso_1[k].split('');
      kqxsBonsoDP.push(layso_2[layso_2.length - 4]+''+layso_2[layso_2.length - 3]+''+layso_2[layso_2.length - 2]+''+layso_2[layso_2.length - 1]);
      var dauBonsoDP = kqxsBonsoDP[0];
      var duoiBonsoDP = kqxsBonsoDP[kqxsBonsoDP.length-1];
    }
  }

  var kqxsBonsoDP1 = [];
  var laysodb = $('#sxdp1-table td.td-db').text().split('');
  kqxsBonsoDP1.push(laysodb[laysodb.length - 4]+''+laysodb[laysodb.length - 3]+''+laysodb[laysodb.length - 2]+''+laysodb[laysodb.length - 1]);
  for (l=1;l<=6;l++) {
    layso_1 = $('#sxdp1-table td.td-'+l+'').text().split(' - ');
    for (k=0;k<layso_1.length;k++) {
      var layso_2 = layso_1[k].split('');
      kqxsBonsoDP1.push(layso_2[layso_2.length - 4]+''+layso_2[layso_2.length - 3]+''+layso_2[layso_2.length - 2]+''+layso_2[layso_2.length - 1]);
      var dauBonsoDP1 = kqxsBonsoDP1[0];
      var duoiBonsoDP1 = kqxsBonsoDP1[kqxsBonsoDP1.length-1];
    }
  }
  // Kết thúc lấy thông số kết quả xổ số để kiểm tra

  // Tính toán riêng cho mỗi Table trong trang
  $('#phan-tich-tung-table table').each(function(){
    var bonus = $(this).find('.tien-co').text(),
      timID = $(this).find('input[name=tim-id]').val();
      var tinNhan = $(this).find('.noi-dung-tin-nhan').text();
    var betValues = tinNhan.toLowerCase().split('.'); // Chia tin nhắn ra thành nhiều bet , phân biệt giữa các bet bằng dấu chấm
    for (i=0;i<betValues.length;i++) {
      y = i + 1;
      var firstBet = betValues[0].split(' ');
      var daiDauTien = firstBet[0];

      // Chia mỗi bet ra từng chỉ số riêng biệt để dễ tính , cách nhau bằng khoảng trắng
      var betDetail = betValues[i].split(' ');

      if(isNaN(parseInt(betDetail[1]))) {
        betDetail.unshift(daiDauTien);

      } else {  }
      // Chia mỗi bet ra từng chỉ số riêng biệt để dễ tính , cách nhau bằng khoảng trắng
      var betDetail = betValues[i].split(' ');

      // Nhận biết tên đài - dùng cho cả 2 trường hợp
      if (betDetail[0] == 'dc' || betDetail[0] == 'tp' || betDetail[0] == 'dn' || betDetail[0] == 'đn' || betDetail[0] == 'tn' || betDetail[0] == 'vl' || betDetail[0] == 'tg')
        var daiBet = 'đài chính';
      else if (betDetail[0] == 'dp' || betDetail[0] == 'đt' || betDetail[0] == 'dt' || betDetail[0] == 'vt' || betDetail[0] == 'ct' || betDetail[0] == 'ag' || betDetail[0] == 'bd' || betDetail[0] == 'la' || betDetail[0] == 'kg')
        var daiBet = 'đài phụ';
      else if (betDetail[0] == 'dp1' || betDetail[0] == 'cm' || betDetail[0] == 'bl' || betDetail[0] == 'st' || betDetail[0] == 'tv' || betDetail[0] == 'bp' || betDetail[0] == 'hg' || betDetail[0] == 'dl' || betDetail[0] == 'đl')
        var daiBet = 'đài phụ 1';
      else if (betDetail[0] == 'mb' || betDetail[0] == 'hn')
        var daiBet = 'đài miền bắc';
      else if (betDetail[0] == '2d' || betDetail[0] == 'dd' || betDetail[0] == '2đ' || betDetail[0] == 'đđ' || betDetail == 'đd')
        var daiBet = '2 đài';
      else if (betDetail[0] == 'bt' && homNay == 'Thứ 3')
        var daiBet = 'đài chính';
      else if (betDetail[0] == 'bt' && homNay == 'Thứ 5')
        var daiBet = 'đài phụ 1';

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

          $(this).find('.show-phantich').append('<tr id="tr-danh-de" class="'+timID+' collapse">' +
            '<td class="phan-tich-the-loai">' + theloaiBet + '</td>' +
            '<td class="phan-tich-dai">'+daiBet+'</td>' +
            '<td class="phan-tich-so">'+betDetail[1]+'</td>' +
            '<td class="phan-tich-loaide">đá 2</td>' +
            '<td colspan="2" class="phan-tich-soda">'+betDetail[3]+'</td>' +
            '<td class="phan-tich-tien">'+parseInt(betDetail[4])*1000+'</td>' +
            '<td class="phan-tich-von">'+parseInt(totalPay)+'đ</td>' +
            '<td class="phan-tich-thang"></td>' +
            '</tr>');
        } else if (betDetail.length == 6 ) {
          var totalPay = 3 * hesoDai * bonus * parseInt(betDetail[5]) * 1000;

          $(this).find('.show-phantich').append('<tr id="tr-danh-de" class="'+timID+' collapse">' +
            '<td class="phan-tich-the-loai">' + theloaiBet + '</td>' +
            '<td class="phan-tich-dai">'+daiBet+'</td>' +
            '<td class="phan-tich-so">'+betDetail[1]+'</td>' +
            '<td class="phan-tich-loaide">đá 3</td>' +
            '<td class="phan-tich-soda1">'+betDetail[3]+'</td>' +
            '<td class="phan-tich-soda2">'+betDetail[4]+'</td>' +
            '<td class="phan-tich-tien">'+parseInt(betDetail[5])*1000+'</td>' +
            '<td class="phan-tich-von">'+parseInt(totalPay)+'đ</td>' +
            '<td class="phan-tich-thang"></td>' +
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
        } else if (betDetail[detailTheLoai] == 'xc' || betDetail[detailTheLoai] == 'xiu') {
          var theloaiBet = 'xỉu chủ';
        } else if (betDetail[detailTheLoai] == 'xd' || betDetail[detailTheLoai] == 'dxc') {
          var theloaiBet = 'xỉu đảo';
        } else if (betDetail[detailTheLoai] == 'bd' || betDetail[detailTheLoai] == 'bđ' || betDetail[detailTheLoai] == 'baodao') {
          var theloaiBet = 'bao đảo';
        } else if (betDetail[detailTheLoai] == 'đl' || betDetail[detailTheLoai] == 'dl' || betDetail[detailTheLoai] == 'daolo') {
          var theloaiBet = 'đảo lô';
        }

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
                var totalPay = parseInt(betDetail[detailTien]) * 6 * 2 * bonus * 1000;
              } else if (n1 == n2 || n2 == n3 || n1 == n3) {
                var totalPay = parseInt(betDetail[detailTien]) * 4 * 2 * bonus * 1000;
              }
            } else if (theloaiBet == 'bao đảo' || theloaiBet == 'đảo lô') {
              if (n1 != n2 && n1 != n3 && n2 != n3) {
                var totalPay = parseInt(betDetail[detailTien]) * 6 * 17 * bonus * 1000;
              } else if (n1 == n2 || n2 == n3 || n1 == n3) {
                var totalPay = parseInt(betDetail[detailTien]) * 4 * 17 * bonus * 1000;
              }
            }
          } else {
            var loaiSo = '4 số';
            if (theloaiBet == 'bao lô') {
              var totalPay = parseInt(betDetail[detailTien]) * 16 * bonus * 1000;
            }
          }
          $(this).find('.show-phantich').append('<tr id="tr-danh-de" class="'+timID+' collapse">' +
            '<td class="phan-tich-the-loai">' + theloaiBet + '</td>' +
            '<td class="phan-tich-dai">'+daiBet+'</td>' +
            '<td class="phan-tich-so">'+betDetail[x]+'</td>' +
            '<td colspan="3" class="phan-tich-loaide">'+loaiSo+'</td>' +
            '<td class="phan-tich-tien">'+parseInt(betDetail[detailTien])*1000+'</td>' +
            '<td class="phan-tich-von">'+parseInt(totalPay)+'đ</td>' +
            '<td class="phan-tich-thang"></td>' +
            '</tr>');
        }
      }
    }
  });

  // Mỗi <tr> là 1 bet riêng biệt
  $('tr#tr-danh-de').each(function() {
    var findTheloai = $(this).find('td.phan-tich-the-loai').text(),
        findDai = $(this).find('td.phan-tich-dai').text(),
        findSo = $(this).find('td.phan-tich-so').text(),
        findLoaide = $(this).find('td.phan-tich-loaide').text(),
        findTien = $(this).find('td.phan-tich-tien').text(),
        findVon = $(this).find('td.phan-tich-von').text(),
        findKetqua = $(this).find('td.phan-tich-thang');
    // Khai báo xong những cái dùng chung

    if (findLoaide == '2 số') {
      if (findDai == 'đài chính') {
        if (findTheloai == 'bao lô') {
          var timBaolohaisoDC = [];
          for (f=0;f<=kqxsHaisoDC.length;f++) { if (findSo==kqxsHaisoDC[f]) timBaolohaisoDC.push(kqxsHaisoDC[f]) }
          if (timBaolohaisoDC.length != 0) findKetqua.text(timBaolohaisoDC.length*75*parseInt(findTien)+'đ');
          else findKetqua.text('ko trúng');
        }
        else if (findTheloai == 'đầu đuôi') {
          var timDauduoihaisoDC = [];
          for (f=0;f<=dauduoiHaisoDC.length;f++) { if (findSo==dauduoiHaisoDC[f]) timDauduoihaisoDC.push(dauduoiHaisoDC[f]) }
          if (timDauduoihaisoDC.length != 0) findKetqua.text(timDauduoihaisoDC.length*75*parseInt(findTien)+'đ');
          else findKetqua.text('ko trúng');
        }
        else if (findTheloai == 'đầu') {
          if (findSo == dauHaisoDC) findKetqua.text(75*parseInt(findTien)+'đ');
          else findKetqua.text('ko trúng');
        }
        else if (findTheloai == 'đuôi') {
          if (findSo == duoiHaisoDC) findKetqua.text(75*parseInt(findTien)+'đ');
          else findKetqua.text('ko trúng');
        }

      }
      else if (findDai == 'đài phụ') {
        if (findTheloai == 'bao lô') {
          var timBaolohaisoDP = [];
          for (f=0;f<=kqxsHaisoDP.length;f++) { if (findSo==kqxsHaisoDP[f]) timBaolohaisoDP.push(kqxsHaisoDP[f]) }
          if (timBaolohaisoDP.length != 0) findKetqua.text(timBaolohaisoDP.length*75*parseInt(findTien)+'đ');
          else findKetqua.text('ko trúng');
        }
        else if (findTheloai == 'đầu đuôi') {
          var timDauduoihaisoDP = [];
          for (f=0;f<=dauduoiHaisoDP.length;f++) { if (findSo==dauduoiHaisoDP[f]) timDauduoihaisoDP.push(dauduoiHaisoDP[f]) }
          if (timDauduoihaisoDP.length != 0) findKetqua.text(timDauduoihaisoDP.length*75*parseInt(findTien)+'đ');
          else findKetqua.text('ko trúng');
        }
        else if (findTheloai == 'đầu') {
          if (findSo == dauHaisoDP) findKetqua.text(75*parseInt(findTien)+'đ');
          else findKetqua.text('ko trúng');
        }
        else if (findTheloai == 'đuôi') {
          if (findSo == duoiHaisoDP) findKetqua.text(75*parseInt(findTien)+'đ');
          else findKetqua.text('ko trúng');
        }
      }
      else if (findDai == 'đài phụ 1') {
        if (findTheloai == 'bao lô') {
          var timBaolohaisoDP1 = [];
          for (f=0;f<=kqxsHaisoDP1.length;f++) { if (findSo==kqxsHaisoDP1[f]) timBaolohaisoDP1.push(kqxsHaisoDP1[f]) }
          if (timBaolohaisoDP1.length != 0) findKetqua.text(timBaolohaisoDP1.length*75*parseInt(findTien)+'đ');
          else findKetqua.text('ko trúng');
        }
        else if (findTheloai == 'đầu đuôi') {
          var timDauduoihaisoDP1 = [];
          for (f=0;f<=dauduoiHaisoDP1.length;f++) { if (findSo==dauduoiHaisoDP1[f]) timDauduoihaisoDP1.push(dauduoiHaisoDP1[f]) }
          if (timDauduoihaisoDP1.length != 0) findKetqua.text(timDauduoihaisoDP1.length*75*parseInt(findTien)+'đ');
          else findKetqua.text('ko trúng');
        }
        else if (findTheloai == 'đầu') {
          if (findSo == dauHaisoDP1) findKetqua.text(75*parseInt(findTien)+'đ');
          else findKetqua.text('ko trúng');
        }
        else if (findTheloai == 'đuôi') {
          if (findSo == duoiHaisoDP1) findKetqua.text(75*parseInt(findTien)+'đ');
          else findKetqua.text('ko trúng');
        }
      }
      else if (findDai == 'đài miền bắc') {
        if (findTheloai == 'bao lô') {
          var timBaolohaisoMB = [];
          for (f=0;f<=kqxsHaisoMB.length;f++) { if (findSo==kqxsHaisoMB[f]) timBaolohaisoMB.push(kqxsHaisoMB[f]) }
          if (timBaolohaisoMB.length != 0) findKetqua.text(timBaolohaisoMB.length*75*parseInt(findTien)+'đ');
          else findKetqua.text('ko trúng');
        }
        else if (findTheloai == 'đầu đuôi') {
          var timDauduoihaisoMB = [];
          for (f=0;f<=dauduoiHaisoMB.length;f++) { if (findSo==dauduoiHaisoMB[f]) timDauduoihaisoMB.push(dauduoiHaisoMB[f]) }
          if (timDauduoihaisoMB.length != 0) findKetqua.text(timDauduoihaisoMB.length*75*parseInt(findTien)+'đ');
          else findKetqua.text('ko trúng');
        }
        else if (findTheloai == 'đầu') {
          if (findSo == dauHaisoMB) findKetqua.text(75*parseInt(findTien)+'đ');
          else findKetqua.text('ko trúng');
        }
        else if (findTheloai == 'đuôi') {
          if (findSo == duoiHaisoMB) findKetqua.text(75*parseInt(findTien)+'đ');
          else findKetqua.text('ko trúng');
        }
      }
    }
    else if (findLoaide == '3 số') {
      // trường hợp đảo số , đảo xiên
      var chiaSo = findSo.split('');
      if (chiaSo[0] != chiaSo[1] && chiaSo[0] != chiaSo[2] && chiaSo[1] != chiaSo[2]) {
        var soDao1 = chiaSo[0]+''+chiaSo[1]+''+chiaSo[2],soDao2 = chiaSo[2]+''+chiaSo[1]+''+chiaSo[0],
          soDao3 = chiaSo[0]+''+chiaSo[2]+''+chiaSo[1],soDao4 = chiaSo[1]+''+chiaSo[0]+''+chiaSo[2],
          soDao5 = chiaSo[2]+''+chiaSo[0]+''+chiaSo[1],soDao6 = chiaSo[1]+''+chiaSo[2]+''+chiaSo[0];
        var findSodao = [soDao1,soDao2,soDao3,soDao4,soDao5,soDao6];
      }
      else if (chiaSo[0] == chiaSo[1]) {
        var soDao1 = chiaSo[0]+''+chiaSo[0]+''+chiaSo[2],soDao2 = chiaSo[2]+''+chiaSo[0]+''+chiaSo[0],
          soDao3 = chiaSo[2]+''+chiaSo[0]+''+chiaSo[2],soDao4 = chiaSo[0]+''+chiaSo[2]+''+chiaSo[0];
        var findSodao = [soDao1,soDao2,soDao3,soDao4];
      }
      else if (chiaSo[1] == chiaSo[2]) {
        var soDao1 = chiaSo[0]+''+chiaSo[2]+''+chiaSo[2],soDao2 = chiaSo[2]+''+chiaSo[2]+''+chiaSo[0],
          soDao3 = chiaSo[2]+''+chiaSo[0]+''+chiaSo[2],soDao4 = chiaSo[0]+''+chiaSo[2]+''+chiaSo[0];
        var findSodao = [soDao1,soDao2,soDao3,soDao4];
      }
      else if (chiaSo[1] == chiaSo[3]) {
        var soDao1 = chiaSo[0]+''+chiaSo[1]+''+chiaSo[0],soDao2 = chiaSo[1]+''+chiaSo[0]+''+chiaSo[1],
          soDao3 = chiaSo[0]+''+chiaSo[1]+''+chiaSo[1],soDao4 = chiaSo[1]+''+chiaSo[1]+''+chiaSo[0];
        var findSodao = [soDao1,soDao2,soDao3,soDao4];
      }

      if (findDai == 'đài chính') {
        var timXiudaobasoDC = [];
        if (findTheloai == 'bao lô') {
          var timBaolobasoDC = [];
          for (f=0;f<=kqxsBasoDC.length;f++) { if (findSo==kqxsBasoDC[f]) timBaolobasoDC.push(kqxsBasoDC[f]) }
          if (timBaolobasoDC.length != 0) findKetqua.text(timBaolobasoDC.length*650*parseInt(findTien)+'đ');
          else findKetqua.text('ko trúng');
        }
        else if (findTheloai == 'xỉu chủ') {
          var timXiuchubasoDC = [];
          for (f=0;f<=xiuChubasoDC.length;f++) { if (findSo==xiuChubasoDC[f]) timXiuchubasoDC.push(xiuChubasoDC[f]) }
          if (timXiuchubasoDC.length != 0) findKetqua.text(timXiuchubasoDC.length*650*parseInt(findTien)+'đ');
          else findKetqua.text('ko trúng');
        }
        else if (findTheloai == 'xỉu đảo') {
          for (a=0;a<findSodao.length;a++) {
            var findSomoi = findSodao[a];
            for (f=0;f<=xiuChubasoDC.length;f++) { if (findSomoi == xiuChubasoDC[f]) timXiudaobasoDC.push(xiuChubasoDC[f]); }
          }
          if (timXiudaobasoDC.length!=0) findKetqua.text(timXiudaobasoDC.length*650*parseInt(findTien)+'đ');
          else findKetqua.text('ko trúng');
        }
        else if (findTheloai == 'đảo lô' || findTheloai == 'bao đảo') {
          for (a=0;a<findSodao.length;a++) {
            var findSomoi = findSodao[a];
            for (f=0;f<=kqxsBasoDC.length;f++) { if (findSomoi == kqxsBasoDC[f]) timXiudaobasoDC.push(kqxsBasoDC[f]); }
          }
          if (timXiudaobasoDC.length!=0) findKetqua.text(timXiudaobasoDC.length*650*parseInt(findTien)+'đ');
          else findKetqua.text('ko trúng');
        }
      }
      else if (findDai == 'đài phụ') {
        var timXiudaobasoDP = [];
        if (findTheloai == 'bao lô') {
          var timBaolobasoDP = [];
          for (f=0;f<=kqxsBasoDP.length;f++) { if (findSo==kqxsBasoDP[f]) timBaolobasoDP.push(kqxsBasoDP[f]) }
          if (timBaolobasoDP.length != 0) findKetqua.text(timBaolobasoDP.length*650*parseInt(findTien)+'đ');
          else findKetqua.text('ko trúng');
        }
        else if (findTheloai == 'xỉu chủ') {
          var timXiuchubasoDP = [];
          for (f=0;f<=xiuChubasoDP.length;f++) { if (findSo==xiuChubasoDP[f]) timXiuchubasoDP.push(xiuChubasoDP[f]) }
          if (timXiuchubasoDP.length != 0) findKetqua.text(timXiuchubasoDP.length*650*parseInt(findTien)+'đ');
          else findKetqua.text('ko trúng');
        }
        else if (findTheloai == 'xỉu đảo') {
          for (a=0;a<findSodao.length;a++) {
            var findSomoi = findSodao[a];
            for (f=0;f<=xiuChubasoDP.length;f++) { if (findSomoi == xiuChubasoDP[f]) timXiudaobasoDP.push(xiuChubasoDP[f]); }
          }
          if (timXiudaobasoDP.length!=0) findKetqua.text(timXiudaobasoDP.length*650*parseInt(findTien)+'đ');
          else findKetqua.text('ko trúng');
        }
        else if (findTheloai == 'đảo lô' || findTheloai == 'bao đảo') {
          for (a=0;a<findSodao.length;a++) {
            var findSomoi = findSodao[a];
            for (f=0;f<=kqxsBasoDP.length;f++) { if (findSomoi == kqxsBasoDP[f]) timXiudaobasoDP.push(kqxsBasoDP[f]); }
          }
          if (timXiudaobasoDP.length!=0) findKetqua.text(timXiudaobasoDP.length*650*parseInt(findTien)+'đ');
          else findKetqua.text('ko trúng');
        }
      }
      else if (findDai == 'đài phụ 1') {
        var timXiudaobasoDP1 = [];
        if (findTheloai == 'bao lô') {
          var timBaolobasoDP1 = [];
          for (f=0;f<=kqxsBasoDP1.length;f++) { if (findSo==kqxsBasoDP1[f]) timBaolobasoDP1.push(kqxsBasoDP1[f]) }
          if (timBaolobasoDP1.length != 0) findKetqua.text(timBaolobasoDP1.length*650*parseInt(findTien)+'đ');
          else findKetqua.text('ko trúng');
        }
        else if (findTheloai == 'xỉu chủ') {
          var timXiuchubasoDP1 = [];
          for (f=0;f<=xiuChubasoDP1.length;f++) { if (findSo==xiuChubasoDP1[f]) timXiuchubasoDP1.push(xiuChubasoDP1[f]) }
          if (timXiuchubasoDP1.length != 0) findKetqua.text(timXiuchubasoDP1.length*650*parseInt(findTien)+'đ');
          else findKetqua.text('ko trúng');
        }
        else if (findTheloai == 'xỉu đảo') {
          for (a=0;a<findSodao.length;a++) {
            var findSomoi = findSodao[a];
            for (f=0;f<=xiuChubasoDP1.length;f++) { if (findSomoi == xiuChubasoDP1[f]) timXiudaobasoDP1.push(xiuChubasoDP1[f]); }
          }
          if (timXiudaobasoDP1.length!=0) findKetqua.text(timXiudaobasoDP1.length*650*parseInt(findTien)+'đ');
          else findKetqua.text('ko trúng');
        }
        else if (findTheloai == 'đảo lô' || findTheloai == 'bao đảo') {
          for (a=0;a<findSodao.length;a++) {
            var findSomoi = findSodao[a];
            for (f=0;f<=kqxsBasoDP1.length;f++) { if (findSomoi == kqxsBasoDP1[f]) timXiudaobasoDP1.push(kqxsBasoDP1[f]); }
          }
          if (timXiudaobasoDP1.length!=0) findKetqua.text(timXiudaobasoDP1.length*650*parseInt(findTien)+'đ');
          else findKetqua.text('ko trúng');
        }
      }
      else if (findDai == 'đài miền bắc') {
        var timXiudaobasoMB = [];
        if (findTheloai == 'bao lô') {
          var timBaolobasoMB = [];
          for (f=0;f<=kqxsBasoMB.length;f++) { if (findSo==kqxsBasoMB[f]) timBaolobasoMB.push(kqxsBasoMB[f]) }
          if (timBaolobasoMB.length != 0) findKetqua.text(timBaolobasoMB.length*650*parseInt(findTien)+'đ');
          else findKetqua.text('ko trúng');
        }
        else if (findTheloai == 'xỉu chủ') {
          var timXiuchubasoMB = [];
          for (f=0;f<=xiuChubasoMB.length;f++) { if (findSo==xiuChubasoMB[f]) timXiuchubasoMB.push(xiuChubasoMB[f]) }
          if (timXiuchubasoMB.length != 0) findKetqua.text(timXiuchubasoMB.length*650*parseInt(findTien)+'đ');
          else findKetqua.text('ko trúng');
        }
        else if (findTheloai == 'xỉu đảo') {
          for (a=0;a<findSodao.length;a++) {
            var findSomoi = findSodao[a];
            for (f=0;f<=xiuChubasoMB.length;f++) { if (findSomoi == xiuChubasoMB[f]) timXiudaobasoMB.push(xiuChubasoMB[f]); }
          }
          if (timXiudaobasoMB.length!=0) findKetqua.text(timXiudaobasoMB.length*650*parseInt(findTien)+'đ');
          else findKetqua.text('ko trúng');
        }
        else if (findTheloai == 'đảo lô' || findTheloai == 'bao đảo') {
          for (a=0;a<findSodao.length;a++) {
            var findSomoi = findSodao[a];
            for (f=0;f<=kqxsBasoMB.length;f++) { if (findSomoi == kqxsBasoMB[f]) timXiudaobasoMB.push(kqxsBasoMB[f]); }
          }
          if (timXiudaobasoMB.length!=0) findKetqua.text(timXiudaobasoMB.length*650*parseInt(findTien)+'đ');
          else findKetqua.text('ko trúng');
        }
      }
    }
    else if (findLoaide == 'đá 2') {
      if (findTheloai == 'đá') {
        if (findDai == 'đài chính') {
          var timsoDa0 = [];
          for (f = 0; f <= kqxsHaisoDC.length; f++) {
            if (findSo == kqxsHaisoDC[f]) timsoDa0.push(kqxsHaisoDC[f])
          }
          if (timsoDa0.length != 0) {
            var timsoDa1 = [], soDa1 = $(this).find('td.phan-tich-soda').text();
            for (f = 0; f <= kqxsHaisoDC.length; f++) {
              if (soDa1 == kqxsHaisoDC[f]) timsoDa1.push(kqxsHaisoDC[f])
            }
            var findMin = Math.min(timsoDa0.length, timsoDa1.length);
            findKetqua.text(findMin*750*parseInt(findTien)+'đ');
          }

          else if (timsoDa0.length == 0) findKetqua.text('ko trúng')
        }
        else if (findDai == 'đài phụ') {
          var timsoDa0 = [];
          for (f = 0; f <= kqxsHaisoDP.length; f++) {
            if (findSo == kqxsHaisoDP[f]) timsoDa0.push(kqxsHaisoDP[f])
          }
          if (timsoDa0.length != 0) {
            var timsoDa1 = [], soDa1 = $(this).find('td.phan-tich-soda').text();
            for (f = 0; f <= kqxsHaisoDP.length; f++) {
              if (soDa1 == kqxsHaisoDP[f]) timsoDa1.push(kqxsHaisoDP[f])
            }
            var findMin = Math.min(timsoDa0.length, timsoDa1.length);
            findKetqua.text(findMin*750*parseInt(findTien)+'đ');
          }

          else if (timsoDa0.length == 0) findKetqua.text('ko trúng')
        }
        else if (findDai == 'đài phụ 1') {
          var timsoDa0 = [];
          for (f = 0; f <= kqxsHaisoDP1.length; f++) {
            if (findSo == kqxsHaisoDP1[f]) timsoDa0.push(kqxsHaisoDP1[f])
          }
          if (timsoDa0.length != 0) {
            var timsoDa1 = [], soDa1 = $(this).find('td.phan-tich-soda').text();
            for (f = 0; f <= kqxsHaisoDP1.length; f++) {
              if (soDa1 == kqxsHaisoDP1[f]) timsoDa1.push(kqxsHaisoDP1[f])
            }
            var findMin = Math.min(timsoDa0.length, timsoDa1.length);
            findKetqua.text(findMin*750*parseInt(findTien)+'đ');
          }

          else if (timsoDa0.length == 0) findKetqua.text('ko trúng')
        }
        else if (findDai == 'đài miền bắc') {
          var timsoDa0 = [];
          for (f = 0; f <= kqxsHaisoMB.length; f++) {
            if (findSo == kqxsHaisoMB[f]) timsoDa0.push(kqxsHaisoMB[f])
          }
          if (timsoDa0.length != 0) {
            var timsoDa1 = [], soDa1 = $(this).find('td.phan-tich-soda').text();
            for (f = 0; f <= kqxsHaisoMB.length; f++) {
              if (soDa1 == kqxsHaisoMB[f]) timsoDa1.push(kqxsHaisoMB[f])
            }
            var findMin = Math.min(timsoDa0.length, timsoDa1.length);
            findKetqua.text(findMin*750*parseInt(findTien)+'đ');
          }

          else if (timsoDa0.length == 0) findKetqua.text('ko trúng')
        }
      }
      else if (findTheloai == 'đá xiên') {
        if(findDai == '2 đài' || findDai == 'đài chính') {
          var timsoDa0 = [];
          for (f = 0; f <= kqxsHaisoDD.length; f++) {
            if (findSo == kqxsHaisoDD[f]) timsoDa0.push(kqxsHaisoDD[f])
          }
          if (timsoDa0.length == 0) {
            findKetqua.text('ko trúng');
          } else if (findLoaide == 'đá 2' && timsoDa0.length != 0) {
            var timsoDa1 = [], soDa1 = $(this).find('td.phan-tich-soda').text();
            for (f = 0; f <= kqxsHaisoDD.length; f++) {
              if (soDa1 == kqxsHaisoDD[f]) timsoDa1.push(kqxsHaisoDD[f])
            }
            var findMin = Math.min(timsoDa0.length, timsoDa1.length);
            if (findMin == 0) findKetqua.text('ko trúng'); else findKetqua.text(findMin*580*parseInt(findTien)+'đ');
          }
        } else { findKetqua.text('sai cú pháp'); }
      }
    }
    else if (findLoaide == 'đá 3') {
      if (findTheloai == 'đá') {
        if(findDai == '2 đài' || findDai == 'đài chính') {
          var timsoDa0 = [];
          for (f = 0; f <= kqxsHaisoDC.length; f++) {
            if (findSo == kqxsHaisoDC[f]) timsoDa0.push(kqxsHaisoDC[f])
          }
          if (timsoDa0.length != 0) {
            var timsoDa1 = [];
            var timsoDa2 = [], soDa1 = $(this).find('td.phan-tich-soda1').text(), soDa2 = $(this)
              .find('td.phan-tich-soda2')
              .text();
            for (f = 0; f <= kqxsHaisoDC.length; f++) {
              if (soDa1 == kqxsHaisoDC[f]) timsoDa1.push(kqxsHaisoDC[f])
            }
            for (f = 0; f <= kqxsHaisoDC.length; f++) {
              if (soDa2 == kqxsHaisoDC[f]) timsoDa2.push(kqxsHaisoDC[f])
            }
            var findMin = Math.min(timsoDa0.length, timsoDa1.length, timsoDa2.length);
            findKetqua.text(findMin*3500*parseInt(findTien)+'đ');
          }
        }
        else if(findDai == 'đài phụ') {
          var timsoDa0 = [];
          for (f = 0; f <= kqxsHaisoDP.length; f++) {
            if (findSo == kqxsHaisoDP[f]) timsoDa0.push(kqxsHaisoDP[f])
          }
          if (timsoDa0.length != 0) {
            var timsoDa1 = [];
            var timsoDa2 = [], soDa1 = $(this).find('td.phan-tich-soda1').text(), soDa2 = $(this)
              .find('td.phan-tich-soda2')
              .text();
            for (f = 0; f <= kqxsHaisoDP.length; f++) {
              if (soDa1 == kqxsHaisoDP[f]) timsoDa1.push(kqxsHaisoDP[f])
            }
            for (f = 0; f <= kqxsHaisoDP.length; f++) {
              if (soDa2 == kqxsHaisoDP[f]) timsoDa2.push(kqxsHaisoDP[f])
            }
            var findMin = Math.min(timsoDa0.length, timsoDa1.length, timsoDa2.length);
            findKetqua.text(findMin*3500*parseInt(findTien)+'đ');
          }
        }
        else if(findDai == 'đài phụ 1') {
          var timsoDa0 = [];
          for (f = 0; f <= kqxsHaisoDP1.length; f++) {
            if (findSo == kqxsHaisoDP1[f]) timsoDa0.push(kqxsHaisoDP1[f])
          }
          if (timsoDa0.length != 0) {
            var timsoDa1 = [];
            var timsoDa2 = [], soDa1 = $(this).find('td.phan-tich-soda1').text(), soDa2 = $(this)
              .find('td.phan-tich-soda2')
              .text();
            for (f = 0; f <= kqxsHaisoDP1.length; f++) {
              if (soDa1 == kqxsHaisoDP1[f]) timsoDa1.push(kqxsHaisoDP1[f])
            }
            for (f = 0; f <= kqxsHaisoDP1.length; f++) {
              if (soDa2 == kqxsHaisoDP1[f]) timsoDa2.push(kqxsHaisoDP1[f])
            }
            var findMin = Math.min(timsoDa0.length, timsoDa1.length, timsoDa2.length);
            findKetqua.text(findMin*3500*parseInt(findTien)+'đ');
          }
        }
        else if(findDai == 'đài miền bắc') {
          var timsoDa0 = [];
          for (f = 0; f <= kqxsHaisoMB.length; f++) {
            if (findSo == kqxsHaisoMB[f]) timsoDa0.push(kqxsHaisoMB[f])
          }
          if (timsoDa0.length != 0) {
            var timsoDa1 = [];
            var timsoDa2 = [], soDa1 = $(this).find('td.phan-tich-soda1').text(), soDa2 = $(this)
              .find('td.phan-tich-soda2')
              .text();
            for (f = 0; f <= kqxsHaisoMB.length; f++) {
              if (soDa1 == kqxsHaisoMB[f]) timsoDa1.push(kqxsHaisoMB[f])
            }
            for (f = 0; f <= kqxsHaisoMB.length; f++) {
              if (soDa2 == kqxsHaisoDP[f]) timsoDa2.push(kqxsHaisoDP[f])
            }
            var findMin = Math.min(timsoDa0.length, timsoDa1.length, timsoDa2.length);
            findKetqua.text(findMin*3500*parseInt(findTien)+'đ');
          }
        }
      }
      else if (findTheloai == 'đá xiên') {
        if (findDai == 'đài chính'){
        var timsoDa0 = [];
        for (f=0;f<=kqxsHaisoDD.length;f++) { if (findSo==kqxsHaisoDD[f]) timsoDa0.push(kqxsHaisoDD[f]) }
        if (timsoDa0.length!=0) {
          // console.log(kqxsHaisoDD);
          var timsoDa1 = [];
          var timsoDa2 = [],
            soDa1 = $(this).find('td.phan-tich-soda1').text(),
            soDa2 = $(this).find('td.phan-tich-soda2').text();
          for (f=0;f<=kqxsHaisoDD.length;f++) { if (soDa1==kqxsHaisoDD[f]) timsoDa1.push(kqxsHaisoDD[f]) }
          for (f=0;f<=kqxsHaisoDD.length;f++) { if (soDa2==kqxsHaisoDD[f]) timsoDa2.push(kqxsHaisoDD[f]) }
          var findMin = Math.min(timsoDa0.length,timsoDa1.length,timsoDa2.length);
          if (findMin == 0) findKetqua.text('ko trúng');
          else findKetqua.text(findMin*580*3*parseInt(findTien)+'đ');
        }
        } else { findKetqua.text('sai cú pháp'); }
      }
    }

  });

  $('#phan-tich-tung-table .table').each(function() {
    var vonArray = [];
    var thangArray = [];
    $(this).find('td.phan-tich-von').each(function() {
      var tongvon = parseInt($(this).text());
      vonArray.push(tongvon);
    });
    $(this).find('td.phan-tich-thang').each(function() {
      var tongthang = parseInt($(this).text()) || 0;
      thangArray.push(tongthang);
    });
    var sumVon = vonArray.reduce((a,b) => a+b,0);
    var sumThang = thangArray.reduce((a,b) => a+b,0);
    $(this).find('td.tong-von').text(sumVon.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")+'đ');
    $(this).find('td.tong-an').text(sumThang.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")+'đ');

    var newVon = $(this).find('td.tong-von').text();
    var newThang = $(this).find('td.tong-an').text();
    var ketQua = parseInt(String(newThang).replace(/\./g,''))-parseInt(String(newVon).replace(/\./g,''));
    if (ketQua < 0) { $(this).find('td.tinh-tien-thang').css("color","#a94442") }
    $(this).find('td.tinh-tien-thang').text(ketQua.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")+'đ');
  });


});


// String(newVon).replace(/\./g,'');
