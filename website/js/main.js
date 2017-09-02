$(document).ready(function(){
  var openModal;

  $("#triangle").on("click", function(){
    $("html,body").animate({
      scrollTop: $("#my-work").offset().top,
    },'slow');
  });

  $(".see-more-button").on("click", function(){
    if($(this).hasClass("1")){
      $("#modal-1").css("display", "flex");
      openModal = document.getElementById('modal-1');
    } else if($(this).hasClass("2")){
      $("#modal-1").css("display", "flex");
      openModal = document.getElementById('modal-1');
    } else if($(this).hasClass("3")){
      $("#modal-1").css("display", "flex");
      openModal = document.getElementById('modal-1');
    } else if($(this).hasClass("4")){
      $("#modal-1").css("display", "flex");
      openModal = document.getElementById('modal-1');
    } else if($(this).hasClass("5")){
      $("#modal-1").css("display", "flex");
      openModal = document.getElementById('modal-1');
    } else if($(this).hasClass("6")){
      $("#modal-1").css("display", "flex");
      openModal = document.getElementById('modal-1');
    }
  });

  $(window).on("click", function(event){
      if (event.target == openModal) {
      openModal.style.display = "none";
      }
  });

  $(".close").on("click", function(){
    $(".modal").css("display", "none");
  });

  $(".tab").on("click", function(){
    $(".tab").removeClass("active");
    if($(this).hasClass("tab-1")){
      $(".frame-1").fadeIn(500);
      $(".frame-2").hide();
      $(".frame-3").hide();
      $(this).addClass("active");
    } else if($(this).hasClass("tab-2")){
      $(".frame-2").fadeIn(500);
      $(".frame-1").hide();
      $(".frame-3").hide();
      $(this).addClass("active");
    } if($(this).hasClass("tab-3")){
      $(".frame-3").fadeIn(500);
      $(".frame-1").hide();
      $(".frame-2").hide();
      $(this).addClass("active");
    }
  });

});
