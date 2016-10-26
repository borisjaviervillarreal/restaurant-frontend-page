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
		const map = new google.maps.Map(
			document.getElementById('map'),
			{
				center: {
					lat: -0.2576842,
					lng: -78.5509023
				},
				zoom: 14
			}
		)

		UserLocation.get((coords)=>{
			console.log(coords)
		})
	})

})()