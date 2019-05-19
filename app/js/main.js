jQuery(document).ready(function(){

  var link = $('.burger-menu');
  var link_active = $('.blockmenu__link');
  var menu = $('.blockmenu');
  var close = $('.blockmenu-close');


  link.click(function(){
    link.toggleClass('menu-link_active');
    menu.toggleClass('blockmenu_active');
    // link.css('display', 'none');
  });
  close.click(function(){
    menu.removeClass('blockmenu_active');
  });
  link_active.click(function(){
    menu.removeClass('blockmenu_active');
  });

  //Проверка form-login.tpl
  
  $('#personal-info-form').on('submit', function(event){
    event.preventDefault();

    var nameValid = true,
      emailValid = true;

    var nameValue = $('#nameValue').val();
    console.log(nameValue);

    var emailValue = $('#emailValue').val();
    console.log(emailValue);


    if (nameValue == '') {
      $('#nameError').fadeIn();
      nameValid = false;
    } else {
      nameValid = true;
    }

    if (emailValue == '') {
      $('#emailError').fadeIn();
      emailValid = false;
    } else {
      emailValid = true;
    }


    if (nameValid == true && emailValid == true) {
      console.log("ok");
      $('#personal-info-form').unbind('submit').submit();
    } else {
      console.log("fail");
    }
  });
	
});