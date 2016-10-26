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

	//Cargar API de google maps
	google.maps.event.addDomListener(window,'load',()=>{

		UserLocation.get((coords)=>{
			let $lat = coords.lat
			let $lng = coords.lng

			console.log($lat)
			console.log($lng)

			const map = new google.maps.Map(
			document.getElementById('map'),
			{
				center: {
					lat: $lat,
					lng: $lng
				},
				zoom: 14
			}
		)
	})


})

})()