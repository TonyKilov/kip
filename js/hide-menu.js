function initMenu() {
  $('.dropdown-menu').hide();
  $('.win-icon').click(
    function() {
        $(this).find('ul').show(); 
      }
    );
  }
$(document).ready(function() {initMenu();});
