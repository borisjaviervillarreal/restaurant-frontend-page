;(function (){

	//Cargar API de google maps
	google.maps.event.addDomListener(window,'load',()=>{
		const map = new google.maps.Map(
			document.getElementById('map'),
			{
				center: {
					lat: -0.180653,
					lng: -78.467838
				},
				zoom: 13
			}
		)
	})

})()