;(function(){

	let sticky = false

	$(window).scroll(function(){
		console.log("Scroll")
	})

	function isInBottom(){

		const $description = $("#description")

		const descriptionHeight = $description.height()

		return $(window).scrollTop()

	}

})()