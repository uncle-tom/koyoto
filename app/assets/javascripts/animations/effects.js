$(function(){
  init();
});

function init() {

	
	// Fixed admin-sidebar_left
	var height_admin_sidebar_left = 85;
	var width = document.body.clientWidth;
	
	$(window).on('scroll', function() {
		var scroll = getCurrentScroll();
		if ( scroll >= height_admin_sidebar_left && width > 600 ) {
			$('.admin-sidebar_left').css('position', 'fixed');
			$('.admin-sidebar_left').css('top', '0px');
		} else {
			$('.admin-sidebar_left').css('position', 'relative');
			$('.admin-sidebar_left').css('top', '0px');
		}
	});

	//Fixed admin-sidebar_right_position
	var height_admin_sidebar_right_position = 150;
	$(window).on('scroll', function() {
		var scroll = getCurrentScroll();
		if ( scroll >= height_admin_sidebar_right_position && width > 600 ) {
			$('.addproduct_cirlce_button').fadeIn()
		} else {
			$('.addproduct_cirlce_button').fadeOut()
		}
	});

	//Fixed admin-sidebar_right_position
	var height_admin_sidebar_right_position = 350;
	$(window).on('scroll', function() {
		var scroll = getCurrentScroll();
		if ( scroll >= height_admin_sidebar_right_position && width > 600 ) {
			$('.header-buy').fadeIn()
		} else {
			$('.header-buy').fadeOut()
		}
	});

	
	function getCurrentScroll() {
		return window.pageYOffset || document.documentElement.scrollTop;
	}

	// МОБИЛЬНЫЙ ХЕАДЕР

	

	// МОБИЛЬНЫЙ ХЕАДЕР ЗАКАНЧИВАЕТСЯ

	

		// ОТКРЫВАЕМ ШАПКУ ОДЕЖДЫ И АКСЕССУАРОВ



		// END ОТКРЫВАЕМ ШАПКУ ОДЕЖДЫ И АКСЕССУАРОВ

		// Скролл шапки

		var didScroll;
		var lastScrollTop = 0;
		var delta = 5;
		var navbarHeight = $('header').outerHeight();

		$(window).scroll(function(event){
		  didScroll = true;
		});

		setInterval(function() {
	    if (didScroll) {
	        hasScrolled();
	        didScroll = false;
	    }
		}, 250);

		function hasScrolled() {
		    var st = $(this).scrollTop();
		    
		    // Make sure they scroll more than delta
		    if(Math.abs(lastScrollTop - st) <= delta)
		      return;
		    
		    // If they scrolled down and are past the navbar, add class .nav-up.
		    // This is necessary so you never see what is "behind" the navbar.
		    if (st > lastScrollTop && st > navbarHeight){
		      // Scroll Down
		      $('.logo-show').fadeIn();
		      $('header').removeClass('nav-down').addClass('nav-up');
		    } else {
	        // Scroll Up
	        if(st + $(window).height() < $(document).height()) {
	          $('.logo-show').fadeOut();
            $('header').removeClass('nav-up').addClass('nav-down');
	        }
		    }
		    
		    lastScrollTop = st;
		}

		$('#nav-icon1').click(function(){
			$(this).toggleClass('open');
		});

		$('.mobile-toogle-menu').click(function(){
			$('.mobile-menu').toggleClass('menu-open');
		})

		$('.mobile-menu p').click(function(){
			$('.mobile-menu').toggleClass('menu-open');
			$('#nav-icon1').toggleClass('open')
		})

		$(window).scroll( function(){
      /* Check the location of each desired element */
      $('.promo1').each( function(i){

        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
          
        /* If the object is completely visible in the window, fade it it */
        if( bottom_of_window > bottom_of_object ){
          $(this).animate({'margin-right':'80'},500);
        }
      });
    });

    $('.counter').counterUp({
		  delay: 10,
		  time: 2000
		});
		
		// СКОЛЛ САЙДБАРА
	(function(){
		var a = document.querySelector('#aside1'), b = null, P = 0;  // если ноль заменить на число, то блок будет прилипать до того, как верхний край окна браузера дойдёт до верхнего края элемента. Может быть отрицательным числом
		window.addEventListener('scroll', Ascroll, false);
		document.body.addEventListener('scroll', Ascroll, false);
		function Ascroll() {
		  if (b == null) {
		    var Sa = getComputedStyle(a, ''), s = '';
		    for (var i = 0; i < Sa.length; i++) {
		      if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
		        s += Sa[i] + ': ' +Sa.getPropertyValue(Sa[i]) + '; '
		      }
		    }
		    b = document.createElement('div');
		    b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
		    a.insertBefore(b, a.firstChild);
		    var l = a.childNodes.length;
		    for (var i = 1; i < l; i++) {
		      b.appendChild(a.childNodes[1]);
		    }
		    a.style.height = b.getBoundingClientRect().height + 'px';
		    a.style.padding = '0';
		    a.style.border = '0';
		  }
		  var Ra = a.getBoundingClientRect(),
		      R = Math.round(Ra.top + b.getBoundingClientRect().height - document.querySelector('footer').getBoundingClientRect().top + 0);  // селектор блока, при достижении верхнего края которого нужно открепить прилипающий элемент;  Math.round() только для IE; если ноль заменить на число, то блок будет прилипать до того, как нижний край элемента дойдёт до футера
		  if ((Ra.top - P) <= 20) {
		    if ((Ra.top - P) <= R) {
		      b.className = 'stop';
		      b.style.top = - R +'px';
		    } else {
		      b.className = 'sticky';
		      b.style.top = P + 20 + 'px';
		    }
		  } else {
		    b.className = '';
		    b.style.top = '';
		  }
		  window.addEventListener('resize', function() {
		    a.children[0].style.width = getComputedStyle(a, '').width
		  }, false);
		}
		})()
		// СКРОЛЛ САЙДБАРА ЗАКАНЧИВАЕТСЯ
			
		



}