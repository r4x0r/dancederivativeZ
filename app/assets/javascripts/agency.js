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

        // else if (index == '2')
        // {
        //   $('#section0 .hideme').css('display','none');
        // }
      },

      afterRender: function()
      {
        //After rendering all the page, animate in the logo//
        $('.center').delay(500).velocity('transition.slideDownIn', {stagger: 100, drag:true});
      },

      afterLoad: function(anchorLink, index)
      {
        //Who we are section
        if(index == '2' && $('#section0').find('.hideme').is(':hidden'))
        {
          $('#section0').find('.hideme').velocity('transition.bounceRightIn');
        }

        //What we do section
        if(index == '3' && $('#section1').find('.hideme').is(':hidden'))
        {
          $('#section1').find('.hideme').velocity('transition.slideDownIn', {stagger: 200, drag: true});
        }

        //Choreographer section
        if(index == '4' && $('#section2').find('.hideme').is(':hidden'))
        {
          $('#section2').find('.hideme').velocity('transition.bounceLeftIn');
        }

        //Events section
        if(index == '5' && $('#section3').find('.hideme').is(':hidden'))
        {
          $('#section3').find('.hideme').velocity('transition.slideUpBigIn', {stagger: 100, drag: true});
        }

      }

    });
  }




  //------------------------------------------------------------------------------------------------//
  //                          Using Velocity For Animations                                         //
  //------------------------------------------------------------------------------------------------//


});


// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
});



