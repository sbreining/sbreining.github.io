$(".navtext").on({
  mouseenter: function (){
    $(this).css("color", "blue");
  },
  mouseleave: function (){
    $(this).css("color", "white");
  },
  click: function (){
        // here is where div slids and disappears.
        // Here we'll use show and hide I think.
        // Just need to implement the slide effects.
        // Or maybe we'll just use the toggle lol.
        
        //fadeTo(speed,opacity,callback);
            //Where the callback function will swap
            //two divs (on faded on the side of the
            //page, and the other that was the focus)
        
        // The jQuery animate() is good too. Allow me
        // to adust the css properties of the div elmts
        // that I want to move around. Example:
            // $("div").animate({
            //     left: '250px',       Adjust position
            //     opacity: '0.5',      Adust opacity
            //     height: '150px',     Change height
            //     width: '150px'       Change width
            // });
        // Can use += in the height and width adjustments
        // Or can use 'toggle' for height or width
        // height retracts from bottom to top
        // width retracts from right to left
        // Can also line up a queue of animations:
            // $("button").click(function(){
            // var div = $("div");
            // div.animate({height: '300px', opacity: '0.4'}, "slow");
            // div.animate({width: '300px', opacity: '0.8'}, "slow");
            // div.animate({height: '100px', opacity: '0.4'}, "slow");
            // div.animate({width: '100px', opacity: '0.8'}, "slow");
            // });
        
        // ---------------------------------------------------------
        // As it stands right now, I think what I want to do is shrink
        // the focused element down, and move it to the left and right
        // sides of the page. To the bottom of the line.
  }
});