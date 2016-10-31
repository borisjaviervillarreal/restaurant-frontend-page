;(function (){

	class UserLocation{
		static get(callback){

			//Verificar si el navegador tiene geolocalizacion
			if(navigator.geolocation){
				navigator.geolocation.getCurrentPosition((location)=>{
					callback({
						lat: location.coords.latitude,
						lng: location.coords.longitude
					})
				})
			}else{
				alert("No pudimos detectar tu ubicacion")
			}
		}
	}

	//Ubicacion del restaurante
	const my_place = {
					lat: -0.176242,
					lng: -78.485942
					}

	//Cargar API de google maps
	google.maps.event.addDomListener(window,'load',()=>{
		const map = new google.maps.Map(
			document.getElementById('map'),
			{
				center: my_place,
				zoom: 16
			}
		)


		//Marcador en el mapa
		const marker = new google.maps.Marker({
			map: map,
			position: my_place,
			title: "Restaurante Villarreal",
			visible: true

		})


		UserLocation.get((coords)=>{
			//Calcular distancia del restaurante al usuario

			let origen = new google.maps.LatLng(coords.lat, coords.lng)
			let destino = new google.maps.LatLng(my_place.lat, my_place.lng)

			let service = new google.maps.DistanceMatrixService()

			service.getDistanceMatrix({
				origins: [origen],
				destinations: [destino],
				travelMode: google.maps.TravelMode.DRIVING
			},(response, status)=>{
				if(status === google.maps.DistanceMatrixStatus.OK){
					const duration_element = response.rows[0].elements[0]
					const duracion_viaje = duration_element.duration.text
					document.querySelector('#message').innerHTML = `
														Estas a ${duracion_viaje} de visitarnos en
														<span class="dancing-script">
														Restaurante Villarreal
														</span>
														`
				}

			})

		})
	})

})()