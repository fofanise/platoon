

// $('.bxslider').bxSlider({
//     onSlideAfter: function(){
//       // do mind-blowing JS stuff here
//       alert('A slide has finished transitioning. Bravo. Click OK to continue!');
//     }
//   });

$('.bxslider').bxSlider({
    hideControlOnEnd: true,
    slideWidth: 1250,
    infiniteLoop: true,
    hideControlOnEnd: true
  });

  // $( ".button" ).on( "click", function() {
  //   alert( "Handler for `click` called." );
  // } );

  $.fn.animate_Text = function() {
    let string = this.text();
    return this.each(function(){
     let $this = $(this);
     $this.html(string.replace(/./g, '<span class="new">$&</span>'));
     $this.find('span.new').each(function(i, el){
      setTimeout(function(){ $(el).addClass('div_opacity'); }, 20 * i);
     });
    });
   };
   $('#example').show();
   $('#example').animate_Text();