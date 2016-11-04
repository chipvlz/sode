$(function() {
  var socket = io.sails.connect();
  socket.get('/socket');



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

  $('#register').submit(function (r) {
    console.log('gọi hàm submit');
    r.preventDefault();
    var data = $('#register').serialize();
    socket.get('/user/register?' + data);
  });
  socket.on('user/registered', function() {
    $('#regModal p').text("Đăng ký thành công, hãy đăng nhập");
    $('#regModal').modal();
  });
  socket.on('user/exists', function() {
    $('#regModal p').text("Đã có người đăng ký tài khoản này");
    $('#regModal').modal();
  });

  // x-editable
  $.fn.editable.defaults.mode = 'inline';
  user_id = $(".user-info [static-userdata=id]").text();
  $('.user-info [userdata]').each(function(i,element){
    var keyToUpdate = $(element).attr('userdata');
    var title = ($(element).attr('title')) ? $(element).attr('title') : 'Vui lòng nhập để sửa thông tin';

    $(element).editable({
      type: 'text',
      url: '/user/' + user_id,
      pk: '',
      params: function(params) {
        var updateText = params['value'];
        delete params['pk'];
        delete params['name'];
        delete params['value'];

        params[keyToUpdate] = updateText;

        return params;
      }, title: title, ajaxOptions: {
        type: 'put'
      }
    });

  });

  // Xóa multi ID
  $("#removeid").click(function(event){
    event.preventDefault();
    var searchIDs = $("table input[type=checkbox]:checked").map(function() {
      return this.value;
    }).get().join();
    console.log("admin/userdel?id="+searchIDs);
    socket.get("/admin/userdel?id="+searchIDs)
  });

  //END USER MANAGEMENT

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

  //Edit player
  $('#edit-player-form').submit(function(a) {
    a.preventDefault();
    var data = $('#edit-player-form').serialize();
    socket.get('/player/edit?' + data);
    location.reload();
  });
  //Del player
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
        '<a class="btn btn-primary edit_bet"><i class="fa fa-pencil-square-o"></i> Sửa</a></td>' +
        '</tr>');
      $('#manage-bet tbody tr.new-bet').hide().delay(100).fadeIn(500);
      $('#manage-bet tbody tr.new-bet').css({'background':'#333','color':'#fff'});
    }



  });



    // socket.on('add/bet',function(data){
    //   alert(data);
    //   // $('table#manage-bet tbody').prepend('<tr><td class="bet_id">'+data.id+'</td>' +
    //   //   '<td class="bet_name">'+data.playerName+'</td>' +
    //   //   '<td class="bet_phone">'+data.playerPhone+'</td>' +
    //   //   '<td class="bet_message">'+data.message+'</td>' +
    //   //   '<td class="bet_msgedit">'+data.msgedit+'</td>' +
    //   //   '<td class="bet_submit">' +
    //   //   '<a class="btn btn-primary edit_bet"><i class="fa fa-pencil-square-o"></i> Sửa</a></td>' +
    //   //   '</tr>');
    // });
  // BET Manager Modal


  $('#manage-bet tbody tr').each(function() {
    $(this).click(function(){
      var bet_msgedit = $(this).find('td.bet_msgedit').text();
      var bet_id = $(this).find('td.bet_id').text();
      $('#edit-bet-form input[name=msgedit]').val(bet_msgedit);
      $('#edit-bet-form input[name=id]').val(bet_id);

    });
    $('#manage-bet tbody tr a.edit_bet').click(function(){
      $('#editBetModal').modal();
    });
  });
  //Edit bet
  $('#edit-bet-form').submit(function(a) {
    a.preventDefault();
    var data = $('#edit-bet-form').serialize();
    socket.get('/bet/edit?' + data);
    location.reload();
  });

  //Datatables
  $(document).ready(function() {
    $('#manage-bet').DataTable({
      "order": [[ 1, "desc" ]],
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


