/*****************************************
*		Réalisé par : DOULADI Oussama	          
*		Date : 03/2020                            
******************************************
*/

// Fade The Scroll Top Btn
$(window).scroll(function () {
	
	//NavBar Fixed Top
	//Phone 
	if ($('body').width() < 600) {
		if ($(this).scrollTop() > 120) {
			$('.bottomnav').addClass('fixed-top');
			$('main').css('marginTop', '70px');
		}
		else {
			$('.bottomnav').removeClass('fixed-top');
			$('main').css('marginTop', '0px');
		}
	}
	else {//PC
		if ($(this).scrollTop() > 46) {
			$('.bottomnav').addClass('fixed-top');
			$('main').css('marginTop', '70px');
		}
		else {
			$('.bottomnav').removeClass('fixed-top');
			$('main').css('marginTop', '0px');
		}
	}
	//Menu Espace links & Button Scroll Top
	if ($(this).scrollTop() > 200) {
		$('.scrollTop').fadeIn();
		/*if ($(this).scrollTop() > 600) {
			if ($(this).innerWidth() > 680) {
				$('.fixed-Espace').fadeIn();
			}
			else {
				$('.fixed-Espace').fadeOut();
			}
		}*/
		if($('.fixed-Espace').hasClass('closed')==false)
		$('.fixed-Espace').fadeIn();

	}
	else {
		$('.scrollTop').fadeOut();
		$('.fixed-Espace').fadeOut();
		$('.fixed-Espace').removeClass('closed');
	}

});
$('.fermerEspaces').click(function () {
	$('.fixed-Espace').fadeOut().addClass('closed');
});
// Scroll to Top
$('.scrollTop').click(function () {
	$('body,html').animate({
		scrollTop: 0
	}, 800);
});
//slider play and pause buttons
$('#playButton').click(function () {
	$('.carousel').carousel('cycle').hover(function (e) { e.preventDefault(); });
	$(this).fadeOut(0);
	$('#pauseButton').fadeIn(0);
});
$('#pauseButton').click(function () {
	$('.carousel').carousel('pause');
	$(this).fadeOut(0);
	$('#playButton').fadeIn(0);
});

//hide collapse  navbar on click Bootstrap 4
$('.navbar-nav>li>a:not(.dropdown-toggle),.dropdown-menu a').on('click', function () {
	$('.navbar-collapse').collapse('hide');
});

//calendar
document.addEventListener('DOMContentLoaded', function () {
	var calendarEl = document.getElementById('calendar');

	var calendar = new FullCalendar.Calendar(calendarEl, {
		plugins: ['dayGrid', 'googleCalendar'],
		googleCalendarApiKey: 'AIzaSyDNIeXNPMyIAsAoVYMiOOLHjsDLC82430U',
		events: {
			googleCalendarId: 'oussama.dld.dev@gmail.com'
		}
	});
	calendar.setOption('height', 490);
	calendar.setOption('dir', 'ltr');
	calendar.render();
});

//MAP API
var map;
function initMap(latitude, longitude, placeName) {
	if (latitude !== undefined && longitude !== undefined) {
		console.log("lat :", latitude);
		console.log("long :", longitude);
		var infoWindow;
		map = new google.maps.Map(document.getElementById('map'), {
			center: { lat: latitude, lng: longitude },
			zoom: 17
		});
		infoWindow = new google.maps.InfoWindow;

		// Try HTML5 geolocation.
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function () {
				var pos = {
					lat: latitude,
					lng: longitude
				};
				infoWindow.setPosition(pos);
				infoWindow.setContent(placeName);
				infoWindow.open(map);
				map.setCenter(pos);
			}, function () {
				handleLocationError(true, infoWindow, map.getCenter());
			});
		} else {
			// Browser doesn't support Geolocation
			handleLocationError(false, infoWindow, map.getCenter());
		}
		var marker = new google.maps.Marker({
			position: { lat: latitude, lng: longitude },
			map: map,
			//icon: 'images/pin.png'
			icon: 'https://devdld.github.io/RADEEMA/Realisation/images/pin.png'

		});
		var infoWindow = new google.maps.InfoWindow({
			content: '<h6 class="pr-4">' + placeName + '</h6>'
		});
		marker.addListener('click', function () {
			infoWindow.open(map, marker);
		});
	}
	else {
		map = new google.maps.Map(document.getElementById('map'), {
			center: { lat: 31.6341600, lng: -7.9999400 },
			zoom: 12
		});

		//------31.627554, -8.014912

		addMarker({ lat: 31.627554, lng: -8.014912 }, 'RADEEMA,Guiliz Boulevard Mohamed VI, Marrakech');
		addMarker({ lat: 31.639546, lng: -8.002967 }, 'RADEEMA, Avenue Yacoub El Mansour, Marrakech');
		addMarker({ lat: 31.650152, lng: -7.997531 }, 'Radeema, شارع فلسطين, Marrakech');
		addMarker({ lat: 31.663865, lng: -8.002814 }, 'Radeema Al Nojoom, Marrakech');
		addMarker({ lat: 31.628599, lng: -8.060726 }, 'RADEEMA Massira, Marrakech');
		addMarker({ lat: 31.645123, lng: -7.978322 }, 'RADEEMA Zouhour Ain Itti, Marrakech');
		addMarker({ lat: 31.594585, lng: -8.029643 }, 'RADEEMA M\'hamid, Marrakech');
		addMarker({ lat: 31.619348, lng: -7.987341 }, 'RADEEMA Arset Lmaach, Marrakech');
		addMarker({ lat: 31.617783, lng: -8.052540 }, 'RADEEMA Azli, Marrakech');
		addMarker({ lat: 31.634795, lng: -7.980047 }, 'RADEEMA AL Housna, Marrakech');
		addMarker({ lat: 31.650152, lng: -7.997537 }, 'RADEEMA Daoudiate, Marrakech');
		addMarker({ lat: 31.613858, lng: -7.971785 }, 'RADEEMA Sidi Youssef Ben Ali, Marrakech');
		addMarker({ lat: 31.639356, lng: -7.983931 }, 'RADEEMA Bab Kechich, Marrakech');

	}
}
//------
function addMarker(coords, placeName) {
	var marker = new google.maps.Marker({
		position: coords,
		map: map,
		//icon: 'images/pin.png'
		icon: 'https://devdld.github.io/RADEEMA/Realisation/images/pin.png'

	});
	var infoWindow = new google.maps.InfoWindow({
		content: '<h6 class="pr-4">' + placeName + '</h6>'
	});
	marker.addListener('click', function () {
		infoWindow.open(map, marker);
	});
}
//-----
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
	infoWindow.setPosition(pos);
	infoWindow.setContent(browserHasGeolocation ?
		infoWindow.content :
		'Error: Your browser doesn\'t support geolocation.');
	infoWindow.open(map);

}
//---------
function allerA() {
	var liste = document.getElementById("listeLocation");
	var valeur = liste.options[liste.selectedIndex].value;
	var placeName = liste.options[liste.selectedIndex].textContent;
	var array = valeur.split("|", 2);
	var lat = parseFloat(array[0]);
	var long = parseFloat(array[1]);
	initMap(lat, long, placeName);
}

//Contact form

(function ($) {
	"use strict";


	/*==================================================================
   [ Focus input ]*/
	$('.input100').each(function () {
		$(this).on('blur', function () {
			if ($(this).val().trim() != "") {
				$(this).addClass('has-val');
			}
			else {
				$(this).removeClass('has-val');
			}
		})
	})


    /*==================================================================
    [ Validate Input]*/
	var input = $('.validate-input .input');

	$('.validate-form').on('submit', function () {
		var check = true;

		for (var i = 0; i < input.length; i++) {
			if (validate(input[i]) == false) {
				showValidate(input[i]);
				check = false;
			}
		}

		return check;
	});


	$('.validate-form .input').each(function () {
		$(this).focus(function () {
			hideValidate(this);
		});
	});

	function validate(input) {
		if ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
			if ($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
				return false;
			}
		}
		else {
			if ($(input).val().trim() == '') {
				return false;
			}
		}
	}

	function showValidate(input) {
		var thisAlert = $(input).parent();

		$(thisAlert).addClass('alert-validate');
	}

	function hideValidate(input) {
		var thisAlert = $(input).parent();

		$(thisAlert).removeClass('alert-validate');
	}

})(jQuery);

//Espace Client Menu
$('#btnAfficherRelation').click(function () {
	$(this).children().toggleClass('fa-angle-double-down fa-angle-double-up');
	$(this).next().slideToggle();
});

//
$(document).ready(function () {
	$('.lien').next().fadeOut(0);
	$('.lien').css('cursor', 'pointer');
});
$('.lien').click(function () {
	var dist=$(this).offset();
	$('body,html').animate({
		scrollTop: dist.top-80
	}, 800);
	$(this).next().slideToggle(500);
	$(this).children().toggleClass('fa-minus-square fa-plus-square ');
});


