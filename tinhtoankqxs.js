$(function() {
  var socket = io.sails.connect();
  socket.get('/socket');

  var getLink = window.location.href.substr().split("/");
  var currentLink = getLink[3]+'/'+getLink[4];
  if (currentLink == 'admin/cal') {
  $(document).ready(function() {
    console.log('ok')
  });
  }

  // gửi request lấy dữ liệu kết quả xổ số từ client đến server
  $('a.get_kqxs').click(function () {
    $(this).addClass('sr-only');
    $('a.tinh-tien-coban').removeClass('sr-only');
    $('a.tinh-tien-dabaso').removeClass('sr-only');
    $('a.tinh-tien-dahaiso').removeClass('sr-only');
    var ngaybet = $('span.bet-date').text().split(', '); // ngaybet[1]
    socket.get('/lot/search?date=' + ngaybet[1]);
  });

  // Nhận dữ liệu kết quả xổ số từ server trả lại
  socket.on('got/lot', function (data) {
    // In kết quả xổ số ra website
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
    // kết thúc in kết quả xổ số

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

    // Kích hoạt chức năng tìm kiếm số để tính tiền -TRƯỜNG HỢP CƠ BẢN
    $('a.tinh-tien-coban').click(function(){
      $(this).addClass('sr-only');
      // xử lý riêng biệt từng table
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
              var timDauduoihaisodc = [];
              for (f=0;f<=1;f++) {
                if(timSo == dauduoiHaisoDC[f]) timDauduoihaisodc.push(dauduoiHaisoDC[f]);
              }
              if (timDauduoihaisodc.length != 0)
                $('.show-result').append('<div class="alert alert-success"><strong>số '+timSo+'</strong> xuất hiện '+timDauduoihaisodc.length+' lần</div>');
              else $('.show-result').append('<div class="alert alert-danger"><strong>rất tiếc</strong> không tìm thấy số '+timSo+' trong đầu và đuôi</div>');
            }
            else if (loaiDe == 'bao lô') {
              var timBaolohaisodc = [];
              for (f=0;f<=kqxsHaisoDC.length;f++) {
                if(timSo == kqxsHaisoDC[f]) timBaolohaisodc.push(kqxsHaisoDC[f]);
              }
              if (timBaolohaisodc.length != 0)
                $('.show-result').append('<div class="alert alert-success"><strong>số '+timSo+'</strong> xuất hiện '+timBaolohaisodc.length+' lần trong lô</div>');
              else $('.show-result').append('<div class="alert alert-danger"><strong>rất tiếc</strong> không tìm thấy <strong>số '+timSo+'</strong> trong lô</div>');
            }
            //////// END - Sắp xếp theo thể loại đề ////////
          }
          //////// END - đài chính ////////

          //////// BEGIN - Sắp xếp theo đài phụ ////////
          if (tenDai == 'đài phụ') {
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
              var timDauduoihaisodp = [];
              for (f=0;f<=1;f++) {
                if(timSo == dauduoiHaisoDC[f]) timDauduoihaisodp.push(dauduoiHaisoDC[f]);
              }
              if (timDauduoihaisodp.length != 0) console.log('số '+timSo+' xuất hiện '+timDauduoihaisodp.length+' lần');
              else console.log('ko tìm thấy số '+timSo+' trong bao lô')
            }
            else if (loaiDe == 'bao lô') {
              var timBaolohaisodp = [];
              for (f=0;f<=kqxsHaisoDC.length;f++) {
                if(timSo == kqxsHaisoDC[f]) timBaolohaisodp.push(kqxsHaisoDC[f]);
              }
              if (timBaolohaisodp.length != 0) console.log('số '+timSo+' xuất hiện '+timBaolohaisodp.length+' lần');
              else console.log('ko tìm thấy số '+timSo+' trong bao lô')
            }
            //////// END - Sắp xếp theo thể loại đề ////////
          }
          //////// END - đài phụ ////////

          //////// BEGIN - Sắp xếp theo đài phụ 1 ////////
          if (tenDai == 'đài phụ 1') {
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
              var timDauduoihaisodp1 = [];
              for (f=0;f<=1;f++) {
                if(timSo == dauduoiHaisoDC[f]) timDauduoihaisodp1.push(dauduoiHaisoDC[f]);
              }
              if (timDauduoihaisodp1.length != 0) console.log('số '+timSo+' xuất hiện '+timDauduoihaisodp1.length+' lần');
              else console.log('ko tìm thấy số '+timSo+' trong bao lô')
            }
            else if (loaiDe == 'bao lô') {
              var timBaolohaisodp1 = [];
              for (f=0;f<=kqxsHaisoDC.length;f++) {
                if(timSo == kqxsHaisoDC[f]) timBaolohaisodp1.push(kqxsHaisoDC[f]);
              }
              if (timBaolohaisodp1.length != 0) console.log('số '+timSo+' xuất hiện '+timBaolohaisodp1.length+' lần');
              else console.log('ko tìm thấy số '+timSo+' trong bao lô')
            }
            //////// END - Sắp xếp theo thể loại đề ////////
          }
          //////// END - đài phụ 1 ////////

          //////// BEGIN - Sắp xếp theo đài miền bắc ////////
          if (tenDai == 'đài miền bắc') {
            //////// BEGIN - Sắp xếp theo thể loại đề ////////
            if (loaiDe == 'đầu') {
              if (timSo == dauHaisoMB) console.log('tìm thấy số '+timSo);
              else console.log('ko thấy số '+timSo)
            }
            else if (loaiDe == 'đuôi') {
              if (timSo == dauHaisoMB) console.log('tìm thấy số '+timSo);
              else console.log('ko thấy số '+timSo)
            }
            else if (loaiDe == 'đầu đuôi') {
              var timDauduoihaisomb = [];
              for (f=0;f<=1;f++) {
                if(timSo == dauduoiHaisoMB[f]) timDauduoihaisomb.push(dauduoiHaisoMB[f]);
              }
              if (timDauduoihaisomb.length != 0) console.log('số '+timSo+' xuất hiện '+timDauduoihaisomb.length+' lần');
              else console.log('ko tìm thấy số '+timSo+' trong bao lô')
            }
            else if (loaiDe == 'bao lô') {
              var timBaolohaisomb = [];
              for (f=0;f<=kqxsHaisoMB.length;f++) {
                if(timSo == kqxsHaisoMB[f]) timBaolohaisomb.push(kqxsHaisoMB[f]);
              }
              if (timBaolohaisomb.length != 0) console.log('số '+timSo+' xuất hiện '+timBaolohaisomb.length+' lần');
              else console.log('ko tìm thấy số '+timSo+' trong bao lô')
            }
            //////// END - Sắp xếp theo thể loại đề ////////
          }
          //////// END - đài miền bắc ////////
        }
        //////// END - Loại 2 số ////////

      })
    });

    // Kích hoạt chức năng tìm kiếm số để tính tiền -TRƯỜNG HỢP ĐÁ 2 SỐ
    $('a.tinh-tien-dahaiso').click(function(){
      $(this).addClass('sr-only');
      var tenDai = $(this).find('.dai-bet').text(),
          timSo = $(this).find('.so-bet').text(),
          loaiDe = $(this).find('.theloai-bet').text(),
          soDa = $(this).find('.soda1-bet').text(),
          soTien = parseInt($(this).find('.tien-bet').text()) * 1000;
      // BEGIN tính toán - tìm số thứ nhất
      if (tenDai == 'đài chính') {
        if (loaiDe == 'đá') {

        } else { }
      }

      else if (tenDai == 'đài phụ') {
        if (loaiDe == 'đá') {

        } else { }
      }

      else if (tenDai == 'đài phụ 1') {
        if (loaiDe == 'đá') {

        } else { }
      }

      else if (tenDai == 'đài miền bắc') {
        if (loaiDe == 'đá') {

        } else { }
      }

    });

    $('a.tinh-tien-dabaso').click(function(){

    })

  });



});
