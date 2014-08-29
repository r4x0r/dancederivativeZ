/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */


$(function() {

  if(!($(window).width() < 560))
  {
    //-------------------------------------------------------------------------------------------//
    //                          Setting the Variables (caching)                                  //
    //-------------------------------------------------------------------------------------------//

    headersection = $('#header');
    section0 = $('#section0');
    section1 = $('#section1');
    section2 = $('#section2');
    section3 = $('#section3');
    section4 = $('#section4');

    //Calculating the windows height//
    var viewport_width = window.innerWidth;
    var viewport_height = window.innerHeight;

    //-------------------------------------------------------------------------------------------//
    //                                   Initialising fullpage                                   //
    //-------------------------------------------------------------------------------------------//

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

      //----------------------------------------------------------------------------------------//
      //                                   Handling Events                                      //
      //----------------------------------------------------------------------------------------//
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
      },

      afterRender: function()
      {
        //After rendering all the page, animate in the logo//
        headersection.find('.hideme').delay(500).velocity('transition.slideDownIn');

        // Input in inline css necessary for events to appear as they are//
        section3.find('.addheight').css('height', (viewport_height-130) );
      },

      afterLoad: function(anchorLink, index)
      {
        //----------------------------------------------------------------------------------------//
        //                          Using Velocity For Animations                                 //
        //----------------------------------------------------------------------------------------//

        //Who we are section
        if(index == '2' && section0.find('.hideme').is(':hidden'))
        {
          section0.find('.hideme').velocity('transition.bounceRightIn');
        }

        //What we do section
        if(index == '3' && section1.find('.hideme').is(':hidden'))
        {
          section1.find('.hideme').velocity('transition.slideDownIn', {stagger: 200, drag: true});
        }

        //Choreographer section
        if(index == '4' && section2.find('.hideme').is(':hidden'))
        {
          section2.find('.hideme').velocity('transition.bounceLeftIn');
        }

        //Events section
        if(index == '5' && section3.find('.hideme').is(':hidden'))
        {
          section3.find('.hideme').velocity('transition.slideUpBigIn', {stagger: 100, drag: true});
        }

      }
      // Additional events handlers not used
        // afterResize: function(){},
        // afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        // onSlideLeave: function(anchorLink, index, slideIndex, direction){}

    });
  }
});


//----------------------------------------------------------------------------------------//
//                        Highlight top nav as scrolling occurs                           //
//----------------------------------------------------------------------------------------//

$('body').scrollspy({
    target: '.navbar-fixed-top'
});



// jQuery for page scrolling feature - requires jQuery Easing plugin
  // $('a.page-scroll').bind('click', function(event) {
  //     var $anchor = $(this);
  //     $('html, body').stop().animate({
  //         scrollTop: $($anchor.attr('href')).offset().top
  //     }, 1500, 'easeInOutExpo');
  //     event.preventDefault();
  // });
