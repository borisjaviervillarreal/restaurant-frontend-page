;(function (){

	//$('.step:nth-child(1)').addClass('active')

	const selector = "#contact-form"

	//Events

	$(selector).find('input').on('change',(ev)=>{

		//Encontrar elemento que cambio su valor
		let $input = $(ev.target)
		//Devolver siguiente input
		let $next_input = $($input).next()

		enfocar_siguiente_input($next_input)

	})

	//Helpers

	function validar_formulario(){

	}

	function es_valido_formulario(){

	}

	function enfocar_siguiente_input($next_input){

		$next_input.focus()
	}

})()