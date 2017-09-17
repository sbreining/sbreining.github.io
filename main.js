$(".navtext").on({
  mouseenter: function (){
    $(this).css("color", "black");
    $(this).css("background", "white");
  },
  mouseleave: function (){
    $(this).css("color", "white");
    $(this).css("background", "#222222");
    $(this).css("opacity", "0.9");
  },
  click: function (){
        // Divs will trade places with mini-divs.
  }
});