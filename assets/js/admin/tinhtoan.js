$(function() {
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

  var kqxsBasohaidai = kqxsBasoDC.concat(kqxsBasoDP);

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

  $('#phan-tich-tung-table table').each(function(){
    var bonus = $(this).find('.tien-co').text(),
      timID = $(this).find('input[name=tim-id]').val();
      var tinNhan = $(this).find('.noi-dung-tin-nhan').text();
    var betValues = tinNhan.toLowerCase().split('.'); // Chia tin nhắn ra thành nhiều bet , phân biệt giữa các bet bằng dấu chấm
    for (i=0;i<betValues.length;i++) {
      y = i + 1;
      // Chia mỗi bet ra từng chỉ số riêng biệt để dễ tính , cách nhau bằng khoảng trắng
      var betDetail = betValues[i].split(' ');

      // Nhận biết tên đài - dùng cho cả 2 trường hợp
      if (betDetail[0] == 'dc') var daiBet = 'đài chính';
      else if (betDetail[0] == 'dp') var daiBet = 'đài phụ';
      else if (betDetail[0] == 'dp1') var daiBet = 'đài phụ 1';
      else if (betDetail[0] == 'mb' || betDetail[0] == 'hn') var daiBet = 'đài miền bắc';
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

  $('tr#tr-danh-de').each(function() {
    var findTheloai = $(this).find('td.phan-tich-the-loai').text(),
        findDai = $(this).find('td.phan-tich-dai').text(),
        findSo = $(this).find('td.phan-tich-so').text(),
        findLoaide = $(this).find('td.phan-tich-loaide').text(),
        findTien = $(this).find('td.phan-tich-tien').text(),
        findVon = $(this).find('td.phan-tich-von').text(),
        findKetqua = $(this).find('td.phan-tich-thang');

    if (findLoaide == '2 số') {

      if (findDai == 'đài chính') {
        if (findTheloai == 'bao lô') {
          var timBaolohaisoDC = [];
          for (f=0;f<=kqxsHaisoDC.length;f++) { if (findSo==kqxsHaisoDC[f]) timBaolohaisoDC.push(kqxsHaisoDC[f]) }
          if (timBaolohaisoDC.length != 0) findKetqua.text('trúng');
          else findKetqua.text('ko trúng');
        }
        else if (findTheloai == 'đầu đuôi') {
          var timDauduoihaisoDC = [];
          for (f=0;f<=dauduoiHaisoDC.length;f++) { if (findSo==dauduoiHaisoDC[f]) timDauduoihaisoDC.push(dauduoiHaisoDC[f]) }
          if (timDauduoihaisoDC.length != 0) findKetqua.text('trúng');
          else findKetqua.text('ko trúng');
        }
        else if (findTheloai == 'đầu') {
          if (findSo == dauHaisoDC) findKetqua.text('trúng');
          else findKetqua.text('ko trúng');
        }
        else if (findTheloai == 'đuôi') {
          if (findSo == duoiHaisoDC) findKetqua.text('trúng');
          else findKetqua.text('ko trúng');
        }

      }
      else if (findDai == 'đài phụ') {
        if (findTheloai == 'bao lô') {
          var timBaolohaisoDP = [];
          for (f=0;f<=kqxsHaisoDP.length;f++) { if (findSo==kqxsHaisoDP[f]) timBaolohaisoDP.push(kqxsHaisoDP[f]) }
          if (timBaolohaisoDP.length != 0) findKetqua.text('trúng');
          else findKetqua.text('ko trúng');
        }
        else if (findTheloai == 'đầu đuôi') {
          var timDauduoihaisoDP = [];
          for (f=0;f<=dauduoiHaisoDP.length;f++) { if (findSo==dauduoiHaisoDP[f]) timDauduoihaisoDP.push(dauduoiHaisoDP[f]) }
          if (timDauduoihaisoDP.length != 0) findKetqua.text('trúng');
          else findKetqua.text('ko trúng');
        }
        else if (findTheloai == 'đầu') {
          if (findSo == dauHaisoDP) findKetqua.text('trúng');
          else findKetqua.text('ko trúng');
        }
        else if (findTheloai == 'đuôi') {
          if (findSo == duoiHaisoDP) findKetqua.text('trúng');
          else findKetqua.text('ko trúng');
        }
      }
      else if (findDai == 'đài phụ 1') {
        if (findTheloai == 'bao lô') {
          var timBaolohaisoDP1 = [];
          for (f=0;f<=kqxsHaisoDP1.length;f++) { if (findSo==kqxsHaisoDP1[f]) timBaolohaisoDP1.push(kqxsHaisoDP1[f]) }
          if (timBaolohaisoDP1.length != 0) findKetqua.text('trúng');
          else findKetqua.text('ko trúng');
        }
        else if (findTheloai == 'đầu đuôi') {
          var timDauduoihaisoDP1 = [];
          for (f=0;f<=dauduoiHaisoDP1.length;f++) { if (findSo==dauduoiHaisoDP1[f]) timDauduoihaisoDP1.push(dauduoiHaisoDP1[f]) }
          if (timDauduoihaisoDP1.length != 0) findKetqua.text('trúng');
          else findKetqua.text('ko trúng');
        }
        else if (findTheloai == 'đầu') {
          if (findSo == dauHaisoDP1) findKetqua.text('trúng');
          else findKetqua.text('ko trúng');
        }
        else if (findTheloai == 'đuôi') {
          if (findSo == duoiHaisoDP1) findKetqua.text('trúng');
          else findKetqua.text('ko trúng');
        }
      }
      else if (findDai == 'đài miền bắc') {
        if (findTheloai == 'bao lô') {
          var timBaolohaisoMB = [];
          for (f=0;f<=kqxsHaisoMB.length;f++) { if (findSo==kqxsHaisoMB[f]) timBaolohaisoMB.push(kqxsHaisoMB[f]) }
          if (timBaolohaisoMB.length != 0) findKetqua.text('trúng');
          else findKetqua.text('ko trúng');
        }
        else if (findTheloai == 'đầu đuôi') {
          var timDauduoihaisoMB = [];
          for (f=0;f<=dauduoiHaisoMB.length;f++) { if (findSo==dauduoiHaisoMB[f]) timDauduoihaisoMB.push(dauduoiHaisoMB[f]) }
          if (timDauduoihaisoMB.length != 0) findKetqua.text('trúng');
          else findKetqua.text('ko trúng');
        }
        else if (findTheloai == 'đầu') {
          if (findSo == dauHaisoMB) findKetqua.text('trúng');
          else findKetqua.text('ko trúng');
        }
        else if (findTheloai == 'đuôi') {
          if (findSo == duoiHaisoMB) findKetqua.text('trúng');
          else findKetqua.text('ko trúng');
        }
      }
    }
    else if (findLoaide == '3 số') {

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
          if (timBaolobasoDC.length != 0) findKetqua.text('trúng');
          else findKetqua.text('ko trúng');
        }
        else if (findTheloai == 'xỉu chủ') {
          var timXiuchubasoDC = [];
          for (f=0;f<=xiuChubasoDC.length;f++) { if (findSo==xiuChubasoDC[f]) timXiuchubasoDC.push(xiuChubaso[f]) }
          if (timXiuchubasoDC.length != 0) findKetqua.text('trúng');
          else findKetqua.text('ko trúng');
        }
        else if (findTheloai == 'xỉu đảo') {
          for (a=0;a<findSodao.length;a++) {
            var findSomoi = findSodao[a];
            for (f=0;f<=xiuChubasoDC.length;f++) { if (findSomoi == xiuChubasoDC[f]) timXiudaobasoDC.push(xiuChubasoDC[f]); }
          }
          if (timXiudaobasoDC.length!=0) findKetqua.text('trúng');
          else findKetqua.text('ko trúng');
        }
        else if (findTheloai == 'đảo lô' || findTheloai == 'bao đảo') {
          for (a=0;a<findSodao.length;a++) {
            var findSomoi = findSodao[a];
            for (f=0;f<=kqxsBasoDC.length;f++) { if (findSomoi == kqxsBasoDC[f]) timXiudaobasoDC.push(kqxsBasoDC[f]); }
          }
          if (timXiudaobasoDC.length!=0) findKetqua.text('trúng');
          else findKetqua.text('ko trúng');
        }
      }
      else if (findDai == 'đài phụ') {
        if (findTheloai == 'bao lô') {
          var timBaolohaisoDP = [];
          for (f=0;f<=kqxsHaisoDP.length;f++) { if (findSo==kqxsHaisoDP[f]) timBaolohaisoDP.push(kqxsHaisoDP[f]) }
          if (timBaolohaisoDP.length != 0) findKetqua.text('trúng');
          else findKetqua.text('ko trúng');
        }
        else if (findTheloai == 'đầu đuôi') {
          var timDauduoihaisoDP = [];
          for (f=0;f<=dauduoiHaisoDP.length;f++) { if (findSo==dauduoiHaisoDP[f]) timDauduoihaisoDP.push(dauduoiHaisoDP[f]) }
          if (timDauduoihaisoDP.length != 0) findKetqua.text('trúng');
          else findKetqua.text('ko trúng');
        }
        else if (findTheloai == 'đầu') {
          if (findSo == dauHaisoDP) findKetqua.text('trúng');
          else findKetqua.text('ko trúng');
        }
        else if (findTheloai == 'đuôi') {
          if (findSo == duoiHaisoDP) findKetqua.text('trúng');
          else findKetqua.text('ko trúng');
        }
      }
      else if (findDai == 'đài phụ 1') {
        if (findTheloai == 'bao lô') {
          var timBaolohaisoDP1 = [];
          for (f=0;f<=kqxsHaisoDP1.length;f++) { if (findSo==kqxsHaisoDP1[f]) timBaolohaisoDP1.push(kqxsHaisoDP1[f]) }
          if (timBaolohaisoDP1.length != 0) findKetqua.text('trúng');
          else findKetqua.text('ko trúng');
        }
        else if (findTheloai == 'đầu đuôi') {
          var timDauduoihaisoDP1 = [];
          for (f=0;f<=dauduoiHaisoDP1.length;f++) { if (findSo==dauduoiHaisoDP1[f]) timDauduoihaisoDP1.push(dauduoiHaisoDP1[f]) }
          if (timDauduoihaisoDP1.length != 0) findKetqua.text('trúng');
          else findKetqua.text('ko trúng');
        }
        else if (findTheloai == 'đầu') {
          if (findSo == dauHaisoDP1) findKetqua.text('trúng');
          else findKetqua.text('ko trúng');
        }
        else if (findTheloai == 'đuôi') {
          if (findSo == duoiHaisoDP1) findKetqua.text('trúng');
          else findKetqua.text('ko trúng');
        }
      }
      else if (findDai == 'đài miền bắc') {
        if (findTheloai == 'bao lô') {
          var timBaolohaisoMB = [];
          for (f=0;f<=kqxsHaisoMB.length;f++) { if (findSo==kqxsHaisoMB[f]) timBaolohaisoMB.push(kqxsHaisoMB[f]) }
          if (timBaolohaisoMB.length != 0) findKetqua.text('trúng');
          else findKetqua.text('ko trúng');
        }
        else if (findTheloai == 'đầu đuôi') {
          var timDauduoihaisoMB = [];
          for (f=0;f<=dauduoiHaisoMB.length;f++) { if (findSo==dauduoiHaisoMB[f]) timDauduoihaisoMB.push(dauduoiHaisoMB[f]) }
          if (timDauduoihaisoMB.length != 0) findKetqua.text('trúng');
          else findKetqua.text('ko trúng');
        }
        else if (findTheloai == 'đầu') {
          if (findSo == dauHaisoMB) findKetqua.text('trúng');
          else findKetqua.text('ko trúng');
        }
        else if (findTheloai == 'đuôi') {
          if (findSo == duoiHaisoMB) findKetqua.text('trúng');
          else findKetqua.text('ko trúng');
        }
      }
    }

    else if (findLoaide == 'đá 2') {
      if (findTheloai == 'đá') {
      var timsoDa0 = [];
      for (f=0;f<=kqxsHaisoDC.length;f++) { if (findSo==kqxsHaisoDC[f]) timsoDa0.push(kqxsHaisoDC[f]) }
      if (findLoaide == 'đá 2' && timsoDa0.length!=0) {
        var timsoDa1 = [],
            soDa1 = $(this).find('td.phan-tich-soda').text();
        for (f=0;f<=kqxsHaisoDC.length;f++) { if (soDa1==kqxsHaisoDC[f]) timsoDa1.push(kqxsHaisoDC[f]) }
        var findMin = Math.min(timsoDa0.length,timsoDa1.length);
        findKetqua.text('trúng '+findMin+' cặp');
      }
      else if (findLoaide == 'đá 3' && timsoDa0.length!=0) {
        var timsoDa1 = [],
            timsoDa2 = [],
            soDa1 = $(this).find('td.phan-tich-soda1').text(),
            soDa2 = $(this).find('td.phan-tich-soda2').text();
        for (f=0;f<=kqxsHaisoDC.length;f++) { if (soDa1==kqxsHaisoDC[f]) timsoDa1.push(kqxsHaisoDC[f]) }
        for (f=0;f<=kqxsHaisoDC.length;f++) { if (soDa2==kqxsHaisoDC[f]) timsoDa2.push(kqxsHaisoDC[f]) }
        var findMin = Math.min(timsoDa0.length,timsoDa1.length,timsoDa2.length);
        findKetqua.text('trúng '+findMin+' cặp');
      }
      else if (timsoDa0.length==0) findKetqua.text('ko trúng')
      }
      else if (findTheloai == 'đá xiên') {
        var timsoDa0 = [];
        for (f=0;f<=kqxsHaisoDD.length;f++) { if (findSo==kqxsHaisoDD[f]) timsoDa0.push(kqxsHaisoDD[f]) }
        if (timsoDa0.length==0) {console.log('ko trúng')}
        else if (findLoaide == 'đá 2' && timsoDa0.length!=0) {
          var timsoDa1 = [],
            soDa1 = $(this).find('td.phan-tich-soda').text();
          for (f=0;f<=kqxsHaisoDD.length;f++) { if (soDa1==kqxsHaisoDD[f]) timsoDa1.push(kqxsHaisoDD[f]) }
          var findMin = Math.min(timsoDa0.length,timsoDa1.length);
          findKetqua.text('trúng '+findMin+' cặp');
        }
        else if (findLoaide == 'đá 3' && timsoDa0.length!=0) {
          console.log('đá 3 số');
          var timsoDa1 = [],
            timsoDa2 = [],
            soDa1 = $(this).find('td.phan-tich-soda1').text(),
            soDa2 = $(this).find('td.phan-tich-soda2').text();
          for (f=0;f<=kqxsHaisoDD.length;f++) { if (soDa1==kqxsHaisoDD[f]) timsoDa1.push(kqxsHaisoDD[f]) }
          for (f=0;f<=kqxsHaisoDD.length;f++) { if (soDa2==kqxsHaisoDD[f]) timsoDa2.push(kqxsHaisoDD[f]) }
          var findMin = Math.min(timsoDa0.length,timsoDa1.length,timsoDa2.length);
          findKetqua.text('trúng '+findMin+' cặp');
        }
      }
    }
  });

  $('#phan-tich-tung-table .table').each(function() {
    var vonArray = [];
    $(this).find('td.phan-tich-von').each(function() {
      var tongvon = parseInt($(this).text());
      vonArray.push(tongvon);
    });
    var sumVon = vonArray.reduce((a,b) => a+b,0);
    $(this).find('td.tong-von').text(sumVon.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")+'đ');
  });

});
