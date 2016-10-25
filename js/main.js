;(function(){

	let sticky = false
	let currentPosition = 0

	$('#sticky-navigation').removeClass('hidden')
	$('#sticky-navigation').slideUp(0)

	setInterval(()=>{
		currentPosition++

		$('#gallery .inner').css({
			left:"-"+currentPosition*100+"%"
		})
	},4000)

	$(window).scroll(function(){
		const inBottom = isInBottom()

		if(inBottom && !sticky){
			//Mostrar la navegacion
			sticky = true
			stickyNavigation()

		}

		if(!inBottom && sticky){
			//Ocultar la navegacion sticky
			sticky = false
			unStickNavigation()
		}
	})

	function stickyNavigation(){
		$('#description').addClass('fixed').removeClass('absolute')
		$('#navigation').slideUp('fast')
		$('#sticky-navigation').slideDown('fast')
	}

	function unStickNavigation(){
		$('#description').removeClass('fixed').addClass('absolute')
		$('#navigation').slideDown('fast')
		$('#sticky-navigation').slideUp('fast')
	}

	function isInBottom(){

		const $description = $("#description")

		const descriptionHeight = $description.height()

		return $(window).scrollTop() > $(window).height() - (descriptionHeight * 2)

	}

})()