$(function() {
  var socket = io.sails.connect();
  socket.get('/socket');
  // Lấy dữ liệu kết quả xổ số
  $('a.get_kqxs').click(function () {
    $(this).addClass('sr-only');
    $('a.tinh-tien-coban').removeClass('sr-only');
    $('a.tinh-tien-dabaso').removeClass('sr-only');
    $('a.tinh-tien-dahaiso').removeClass('sr-only');
    var ngaybet = $('span.bet-date').text().split(', '); // ngaybet[1]
    socket.get('/lot/search?date=' + ngaybet[1]);
  });

  socket.on('got/lot', function (data) {
    for (i = 0; i <= 3; i++) {
      $('#ket-qua-xo-so').append('<div class="panel-heading">' +
        '<h5 data-toggle="collapse" href="#kqxs-dai-' + data.msg[i].more + '">' + data.msg[i].name + '<span class="pull-right ten-dai-kqxs">' + data.msg[i].more + '</span></h5></div>' +
        '<div id="kqxs-dai-' + data.msg[i].more + '" class="panel-collapse collapse">' +
        '<div class="panel-body"><table class="table table-bordered" id="sx'+data.msg[i].more+'-table">' +
        '<tbody><tr class="tr-first"><td>Giải</td><td>Xổ Số ' + data.msg[i].name + '</td></tr>' +
        '<tr><td>ĐB</td><td class="td-db">' + data.msg[i].special + '</td></tr>' +
        '<tr><td>1</td><td class="td-1">' + data.msg[i].one + '</td></tr>' +
        '<tr><td>2</td><td class="td-2">' + data.msg[i].two + '</td></tr>' +
        '<tr><td>3</td><td class="td-3">' + data.msg[i].three + '</td></tr>' +
        '<tr><td>4</td><td class="td-4">' + data.msg[i].four + '</td></tr>' +
        '<tr><td>5</td><td class="td-5">' + data.msg[i].five + '</td></tr>' +
        '<tr><td>6</td><td class="td-6">' + data.msg[i].six + '</td></tr>' +
        '<tr><td>7</td><td class="td-7">' + data.msg[i].seven + '</td></tr>' +
        '<tr><td>8</td><td class="td-8">' + data.msg[i].eight + '</td></tr></div></div></tbody></table>' +
        '');
    }
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

    $('a.tinh-tien-coban').click(function(){
      console.log('bấm vào tính tiền');
      $('table#coban-table tbody tr').each(function(){
        var loaiSo = $(this).find('.loai-bet').text(),
          tenDai = $(this).find('.dai-bet').text(),
          timSo = $(this).find('.so-bet').text(),
          loaiDe = $(this).find('.theloai-bet').text(),
          soTien = parseInt($(this).find('.tien-bet').text()) * 1000;

        //////// BEGIN - Loại 2 số ////////
        if (loaiSo == '2 số') {

          //////// BEGIN - Sắp xếp theo đài chính ////////
          if (tenDai == 'đài chính') {

            //////// BEGIN - Sắp xếp theo thể loại đề ////////
            if (loaiDe == 'đầu') {
              if (timSo == dauHaisoDC) console.log('tìm thấy số '+timSo);
              else console.log('ko thấy số '+timSo)
            }
            else if (loaiDe == 'đuôi') {
              if (timSo == dauHaisoDC) console.log('tìm thấy số '+timSo);
              else console.log('ko thấy số '+timSo)
            }
            else if (loaiDe == 'đầu đuôi') {
              var timDauduoiDC = [];
              for (f=0;f<=1;f++) {
                if(timSo == dauduoiHaisoDC[f]) timDauduoiDC.push(dauduoiHaisoDC[f]);
              }
              if (timDauduoiDC.length != 0) console.log('số '+timSo+' xuất hiện '+timDauduoiDC.length+' lần');
              else console.log('ko tìm thấy số '+timSo+' trong bao lô')
            }
            else if (loaiDe == 'bao lô') {
              var timBaoloDC = [];
              for (f=0;f<=kqxsHaisoDC.length;f++) {
                if(timSo == kqxsHaisoDC[f]) timBaoloDC.push(kqxsHaisoDC[f]);
              }
              if (timBaoloDC.length != 0) console.log('số '+timSo+' xuất hiện '+timBaoloDC.length+' lần');
              else console.log('ko tìm thấy số '+timSo+' trong bao lô')
            }
            //////// END - Sắp xếp theo thể loại đề ////////

          }
          //////// END - đài chính ////////

          //////// BEGIN - Sắp xếp theo đài phụ ////////
          if (tenDai == 'đài chính') {

            //////// BEGIN - Sắp xếp theo thể loại đề ////////
            if (loaiDe == 'đầu') {
              if (timSo == dauHaisoDC) console.log('tìm thấy số '+timSo);
              else console.log('ko thấy số '+timSo)
            }
            else if (loaiDe == 'đuôi') {
              if (timSo == dauHaisoDC) console.log('tìm thấy số '+timSo);
              else console.log('ko thấy số '+timSo)
            }
            else if (loaiDe == 'đầu đuôi') {
              var timDauduoiDC = [];
              for (f=0;f<=1;f++) {
                if(timSo == dauduoiHaisoDC[f]) timDauduoiDC.push(dauduoiHaisoDC[f]);
              }
              if (timDauduoiDC.length != 0) console.log('số '+timSo+' xuất hiện '+timDauduoiDC.length+' lần');
              else console.log('ko tìm thấy số '+timSo+' trong bao lô')
            }
            else if (loaiDe == 'bao lô') {
              var timBaoloDC = [];
              for (f=0;f<=kqxsHaisoDC.length;f++) {
                if(timSo == kqxsHaisoDC[f]) timBaoloDC.push(kqxsHaisoDC[f]);
              }
              if (timBaoloDC.length != 0) console.log('số '+timSo+' xuất hiện '+timBaoloDC.length+' lần');
              else console.log('ko tìm thấy số '+timSo+' trong bao lô')
            }
            //////// END - Sắp xếp theo thể loại đề ////////

          }
          //////// END - đài phụ ////////

          //////// BEGIN - Sắp xếp theo đài phụ 1 ////////
          if (tenDai == 'đài chính') {

            //////// BEGIN - Sắp xếp theo thể loại đề ////////
            if (loaiDe == 'đầu') {
              if (timSo == dauHaisoDC) console.log('tìm thấy số '+timSo);
              else console.log('ko thấy số '+timSo)
            }
            else if (loaiDe == 'đuôi') {
              if (timSo == dauHaisoDC) console.log('tìm thấy số '+timSo);
              else console.log('ko thấy số '+timSo)
            }
            else if (loaiDe == 'đầu đuôi') {
              var timDauduoiDC = [];
              for (f=0;f<=1;f++) {
                if(timSo == dauduoiHaisoDC[f]) timDauduoiDC.push(dauduoiHaisoDC[f]);
              }
              if (timDauduoiDC.length != 0) console.log('số '+timSo+' xuất hiện '+timDauduoiDC.length+' lần');
              else console.log('ko tìm thấy số '+timSo+' trong bao lô')
            }
            else if (loaiDe == 'bao lô') {
              var timBaoloDC = [];
              for (f=0;f<=kqxsHaisoDC.length;f++) {
                if(timSo == kqxsHaisoDC[f]) timBaoloDC.push(kqxsHaisoDC[f]);
              }
              if (timBaoloDC.length != 0) console.log('số '+timSo+' xuất hiện '+timBaoloDC.length+' lần');
              else console.log('ko tìm thấy số '+timSo+' trong bao lô')
            }
            //////// END - Sắp xếp theo thể loại đề ////////

          }
          //////// END - đài phụ 1 ////////

          //////// BEGIN - Sắp xếp theo đài miền bắc ////////
          if (tenDai == 'đài chính') {

            //////// BEGIN - Sắp xếp theo thể loại đề ////////
            if (loaiDe == 'đầu') {
              if (timSo == dauHaisoDC) console.log('tìm thấy số '+timSo);
              else console.log('ko thấy số '+timSo)
            }
            else if (loaiDe == 'đuôi') {
              if (timSo == dauHaisoDC) console.log('tìm thấy số '+timSo);
              else console.log('ko thấy số '+timSo)
            }
            else if (loaiDe == 'đầu đuôi') {
              var timDauduoiDC = [];
              for (f=0;f<=1;f++) {
                if(timSo == dauduoiHaisoDC[f]) timDauduoiDC.push(dauduoiHaisoDC[f]);
              }
              if (timDauduoiDC.length != 0) console.log('số '+timSo+' xuất hiện '+timDauduoiDC.length+' lần');
              else console.log('ko tìm thấy số '+timSo+' trong bao lô')
            }
            else if (loaiDe == 'bao lô') {
              var timBaoloDC = [];
              for (f=0;f<=kqxsHaisoDC.length;f++) {
                if(timSo == kqxsHaisoDC[f]) timBaoloDC.push(kqxsHaisoDC[f]);
              }
              if (timBaoloDC.length != 0) console.log('số '+timSo+' xuất hiện '+timBaoloDC.length+' lần');
              else console.log('ko tìm thấy số '+timSo+' trong bao lô')
            }
            //////// END - Sắp xếp theo thể loại đề ////////

          }
          //////// END - đài miền bắc ////////

        }

      })
    })

  });



});
