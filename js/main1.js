$(document).ready(function() {
    $('.carousel').carousel({
        interval: false
    });
    $("#myInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $(".dropdown-menu li").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });

    //Search JS

    $(function() {
        $('#colorselector').change(function(){
          $('.colors').hide();
          $('#' + $(this).val()).show();
        });
      });
    
  });