						var link = document.querySelector('.btn-form');

						var popup = document.querySelector('.feedback');
						var bg = document.querySelector('.wrap');
						var close = popup.querySelector('.feedback-close');

						link.addEventListener('click', function(event) {
							event.preventDefault();
							popup.classList.add('feedback-show');
							bg.classList.add('wrap-show');
						});
						
						close.addEventListener('click', function(event) {
							event.preventDefault();
							popup.classList.remove('feedback-show');
							bg.classList.remove('wrap-show');
						});

						window.addEventListener("keydown", function(event) {
							if (event.keyCode === 27) {
								if (popup.classList.contains("feedback-show")) {
									popup.classList.remove("feedback-show");
									bg.classList.remove('wrap-show');
								}
							}
						});

												function initialize() {
							var mapOptions = {
								zoom: 15,
								center: new google.maps.LatLng(59.9384313,30.3425057)
							}

							var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
							var image = "img/pin.png";
							var myLatLng = new google.maps.LatLng(59.9384313,30.3246357);
							var beachMarker = new google.maps.Marker({
								position: myLatLng,
								map: map,
								icon: image
							});
						}
						google.maps.event.addDomListener(window, 'load', initialize);