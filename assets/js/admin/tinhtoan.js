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
      if (betDetail[0] == 'dc') {
        var daiBet = 'đài chính'
      } else if (betDetail[0] == 'dp') {
        var daiBet = 'đài phụ'
      } else if (betDetail[0] == 'dp1') {
        var daiBet = 'đài phụ 1'
      } else if (betDetail[0] == 'mb' || betDetail[0] == 'hn') {
        var daiBet = 'đài miền bắc'
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

          $(this).find('.show-phantich').append('<tr id="tr-danh-de" class="'+timID+' collapse">' +
            '<td class="phan-tich-the-loai">' + theloaiBet + '</td>' +
            '<td class="phan-tich-dai">'+daiBet+'</td>' +
            '<td class="phan-tich-so">'+betDetail[1]+'</td>' +
            '<td class="phan-tich-loaide">đá '+betDetail[3]+'</td>' +
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
            '<td class="phan-tich-loaide">đá '+betDetail[3]+' & '+betDetail[4]+'</td>' +
            '<td class="phan-tich-tien">'+parseInt(betDetail[5])*1000+'</td>' +
            '<td class="phan-tich-von">'+parseInt(totalPay)+'đ</td>' +
            '<td class="phan-tich-thang"></td>' +
            '</tr>');
        }
      }
      // trường hợp cơ bản
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
          $(this).find('.show-phantich').append('<tr id="tr-danh-de" class="'+timID+' collapse">' +
            '<td class="phan-tich-the-loai">' + theloaiBet + '</td>' +
            '<td class="phan-tich-dai">'+daiBet+'</td>' +
            '<td class="phan-tich-so">'+betDetail[x]+'</td>' +
            '<td class="phan-tich-loaide">'+loaiSo+'</td>' +
            '<td class="phan-tich-tien">'+parseInt([detailTien])*1000+'</td>' +
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
        findLoaide = $(this).find('td.phan-tich-loai-de').text(),
        findTien = $(this).find('td.phan-tich-tien').text(),
        findVon = $(this).find('td.phan-tich-von').text();

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
