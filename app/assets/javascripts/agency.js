/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
  // $('a.page-scroll').bind('click', function(event) {
  //     var $anchor = $(this);
  //     $('html, body').stop().animate({
  //         scrollTop: $($anchor.attr('href')).offset().top
  //     }, 1500, 'easeInOutExpo');
  //     event.preventDefault();
  // });
  if(!($(window).width() < 560))
  {
    $('#fullpage').fullpage(
    {
      verticalCentered: false,
      resize : true,
      // sectionsColor : ['#ccc', '#fff'],
      anchors:['home', 'whoweare', 'whatwedo', 'instructor', 'events' , 'contact'],
      scrollingSpeed: 1000,
      easing: 'easeOutExpo',
      menu: '#menu',
      // navigation: false,
      // navigationPosition: 'right',
      // navigationTooltips: ['firstSlide', 'secondSlide'],
      // slidesNavigation: true,
      // slidesNavPosition: 'bottom',
      loopBottom: false,
      loopTop: false,
      loopHorizontal: true,
      autoScrolling: true,
      scrollOverflow: false,
      css3: false,
      paddingTop: '8em',
      paddingBottom: 0,
      // normalScrollElements: '#element1, .element2',
      // normalScrollElementTouchThreshold: 5,
      keyboardScrolling: true,
      touchSensitivity: 15,
      continuousVertical: false,
      animateAnchor: true,
      sectionSelector: 'section',
      // slideSelector: '.slide',

      // //events
      // onLeave: function(index, nextIndex, direction){},
      // afterLoad: function(anchorLink, index){},
      // afterRender: function(){},
      // afterResize: function(){},
      // afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
      // onSlideLeave: function(anchorLink, index, slideIndex, direction){}


      //events
      afterLoad: function(anchorLink, index)
      {
        if (index == 1)
        {
          verticalCentered = true;
          alert ("haha");
        }
      },

      onLeave: function(index, nextIndex, direction)
      {
        //initialise header variable
        header = document.querySelector( '.navbar-default' );

        //after leaving section header, put in a class of navbar shrink
        if(index == '1' && direction =='down'){

          classie.add(header, 'navbar-shrink');

        }

        //if going back to section header, remove navbar shrink class
        else if(index != '1' && nextIndex == '1'){
            classie.remove(header, 'navbar-shrink');
        }
      }


              //using anchorLink
              // if(anchorLink == 'secondSlide'){
              //     alert("Section 2 ended loading");
              // }

    });
  }
  // $(window).resize(function()
  // {
  //   var viewwidth = $(window).width()
  //   {
  //     if (viewwidth < 560)
  //     {
  //       //destroy any plugin event and any plugin modification done over your original HTML markup.
  //       console.log('oh hi there');
  //       $.fn.fullpage.destroy('all');
  //     }
  //     else
  //     {
  //       console.log('oh no there');
  //       $.fn.fullpage.reBuild();
  //     }
  //   }
  // })

});


// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
});



