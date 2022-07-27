$(document).ready(function(){
     $("#myForm").submit(function(e){
          e.preventDefault();
          var username = $.trim($("#username").val());
          var email = $.trim($("#email").val());
          var password = $.trim($("#password").val());
          var re_password = $.trim($("#re-password").val());
          var address = $.trim($("#address").val());
          var phone = $.trim($("#phone").val());

          var flag = true;

          if(username == "" || username.length < 8) {
               $("#message").text("Tên đăng nhập phải lớn hơn 8 kí tự").css({"color": "red"});
               flag = false;
          } else {
               $("#message").text("");
          }
     });
});