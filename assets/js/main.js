$(function() {
  var socket = io.sails.connect();
  socket.get('/socket');

  function testS() {
    alert('ok')
  }
  // format ngày tháng
  $(document).ready(function(){
    var aDate = $("abbr.timeago").attr('title'),
        newaDate = moment(aDate).format('YYYY-MM-DD hh:mm:ss');
    $("abbr.timeago").prop('title', newaDate);
    $("abbr.timeago").timeago();

    $('#manage-user tbody tr').each(function() {
      var bDate = $(this).find("td.user_created").text(),
        newbDate = moment(bDate).format('DD/MM/YYYY');
      $(this).find("td.user_created").text(newbDate);
    });

    // var cDate = $('.ngay-hom-nay').text(),
    // ngayHomNay = moment(cDate).format('D-MM-YYYY');
    //   $('.ngay-hom-nay').text(ngayHomNay);

  });
  //USER MANAGEMENT
  // Khi submit script này sẽ chuyển data sang dạng socket và gửi đến server
  // UserController sẽ xử lý phần tiếp theo
  $('#login').submit(function (e) {
    console.log('gọi hàm submit');
    e.preventDefault();
    var data = $('#login').serialize();
    socket.get('/user/login?' + data);
    socket.get('/bet/index?'+data);
  });
  // Khi client nhận thông báo login-success từ server sẽ chuyển user sang trang home
  socket.on('user/login-success', function() {
    window.location = '/trangchu';
  });

  $('#add-player-form').submit(function(a) {
    a.preventDefault();
    var data = $('#add-player-form').serialize();
    socket.get('/player/add?' + data);
    location.reload();
  });

  // PLAYER Manager Modal
  $('#manage-player tbody tr').each(function() {

    $(this).click(function(){
      var player_name = $(this).find('td.player_name').text();
      var player_id = $(this).find('td.player_id').text();
      var player_phone = $(this).find('td.player_phone').text();
      var player_count = $(this).find('td.player_count').text();
      var player_income = $(this).find('td.player_income').text();
      var player_outcome = $(this).find('td.player_outcome').text();
      $('#edit-player-form input[name=name]').val(player_name);
      $('#edit-player-form input[name=id]').val(player_id);
      $('#edit-player-form input[name=phone]').val(player_phone);
      $('#edit-player-form input[name=count]').val(player_count);
      $('#edit-player-form input[name=income]').val(player_income);
      $('#edit-player-form input[name=outcome]').val(player_outcome);
      $('#del-player-form input[name=id]').val(player_id);
      $('#delPlayerModal span.player_name').html('<strong>'+player_name+'</strong>');
    });

    $('#manage-player tbody tr a.edit_player').click(function(){
      $('#editPlayerModal').modal();
    });
    $('#manage-player tbody tr a.del_player').click(function(){
      $('#delPlayerModal').modal();
    })
  });

  // Thêm đại lý
  $('#add-user-form').submit(function(e) {
    e.preventDefault();
    var data = $('#add-user-form').serialize();
    socket.get('/root/adduser?' + data);
    location.reload();
  });

  // Nhập dữ liệu gia hạn cho đại lý
  $('#expired-user-form').submit(function(e) {
    e.preventDefault();
    var data = $('#expired-user-form').serialize();
    socket.get('/root/giahan?' + data);
    location.reload();
  });

  // Sửa đại lý
  $('#edit-player-form').submit(function(a) {
    a.preventDefault();
    var data = $('#edit-player-form').serialize();
    socket.get('/player/edit?' + data);
    location.reload();
  });
  // Xóa đại lý
  $('#del-player-form').submit(function(a) {
    a.preventDefault();
    var data = $('#del-player-form').serialize();
    socket.get('/player/del?' + data);
    location.reload();
  });

  socket.on('add/bet', function(data) {
    console.log(data.msg.ownerPhone);
    var phoneDaily = $('.phone-daily').text();
    if (data.msg.ownerPhone == phoneDaily) {
      $("#manage-bet tbody").prepend('<tr class="new-bet"><td class="bet_id">'+data.msg.id+'</td>' +
        '<td class="bet_name">'+data.msg.playerName+'</td>' +
        '<td class="bet_phone">'+data.msg.playerPhone+'</td>' +
        '<td class="bet_message">'+data.msg.message+'</td>' +
        '<td class="bet_msgedit">'+data.msg.msgedit+'</td>' +
        '<td class="bet_submit">' +
        '<a class="btn btn-warning new_bet"><i class="fa fa-envelope"></i> Tin mới</a></td>' +
        '</tr>');
      $('#manage-bet tbody tr.new-bet').hide().delay(100).fadeIn(500);
      $('#manage-bet tbody tr.new-bet').css({'background':'#333','color':'#fff'});
    }
    setTimeout(function() {
      window.location.reload(true)
    },3000)
  });
  // BET Manager Modal

  $('#manage-bet tbody tr').each(function() {
    $(this).click(function(){
      var bet_msgedit = $(this).find('td.bet_msgedit').text();
      var bet_id = $(this).find('td.bet_id').text();
      var oldmsg = $(this).find('td.bet_message').text();
      $('#edit-bet-form input[name=msgedit]').val(bet_msgedit);
      $('#edit-bet-form input[name=id]').val(bet_id);
      $('#del-bet-form input[name=id]').val(bet_id);
      $('#edit-bet-form input#oldmsg').val(oldmsg);
    });
    $('#manage-bet tbody tr a.edit_bet').click(function(){
      $('#editBetModal').modal();
    });
    $('#manage-bet tbody tr a.del_bet').click(function(){
      $('#delBetModal').modal();
    });
  });
  //Edit bet
  $('#edit-bet-form').submit(function(a) {
    a.preventDefault();
    var data = $('#edit-bet-form').serialize();
    socket.get('/bet/edit?' + data);
    $('#editBetModal').modal('hide');
    setTimeout("location.reload(true);",1000);
  });
  //Del Bet
  $('#del-bet-form').submit(function(a) {
    a.preventDefault();
    var data = $('#del-bet-form').serialize();
    console.log(data);
    socket.get('/bet/del?' + data);
  });

  //Edit MSGEDIT
  $('#page-view-bet a.edit_msg').click(function(){
    $('#editMsgModal').modal();
  });

  //Datatables
  $(document).ready(function() {
    $('#manage-bet').DataTable({
      "order": [[ 0, "desc" ]],
      "language": {
        "lengthMenu": "Hiển thị _MENU_ tin nhắn trong 1 trang",
        "zeroRecords": "Không tìm thấy - sorry",
        "info": "Hiển thị trang _PAGE_ trên tổng số _PAGES_ trang",
        "infoEmpty": "No records available",
        "infoFiltered": "(filtered from _MAX_ total records)",
        "search":         "Tìm:",
        "paginate": {
          "first":      "Đầu",
          "last":       "Cuối",
          "next":       "Tiếp",
          "previous":   "Trở lại"
        },
      }
    });
    $('#manage-player').DataTable({
      "language": {
        "lengthMenu": "Hiển thị _MENU_ người chơi trong 1 trang",
        "zeroRecords": "Không tìm thấy - sorry",
        "info": "Hiển thị trang _PAGE_ trên tổng số _PAGES_ trang",
        "infoEmpty": "No records available",
        "infoFiltered": "(filtered from _MAX_ total records)",
        "search":         "Tìm:",
        "paginate": {
          "first":      "Đầu",
          "last":       "Cuối",
          "next":       "Tiếp",
          "previous":   "Trở lại"
        },
      }
    });
  } );

});
