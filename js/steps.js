;(function (){

	//$('.step:nth-child(1)').addClass('active')

	const selector = "#contact-form"

	$('.step textarea').on('keydown',(ev)=>{
		if(ev.keyCode == 13){
			ev.preventDefault()
			$(ev.target).blur()
		}
	})

	//Events

	$('.path-step').on('click',(ev)=>{
		const $current_circle = $(ev.target)

		$('.path-step.active').removeClass('active')
		$current_circle.addClass('active')

		const posicion = $current_circle.index('.path-step') + 1

		let $test = $('.step:nth-child('+posicion+')')

		siguiente($test)


	})
 
	$(selector).find('.input').on('change',(ev)=>{

		//Encontrar elemento que cambio su valor
		const $input = $(ev.target)
		//Devolver siguiente step
		const $next_step = $input.parent().next('.step')

		const is_form_valid = es_valido_formulario()

		if(!is_form_valid && $next_step.length > 0){
			siguiente($next_step)	
		}else{
			validar_formulario()
		}
	})

	//Helpers

	function validar_formulario(){
		if(es_valido_formulario()){
			enviar_formulario()
		}else{
			let $fieldset_invalido = $(selector).find('.input:invalid').first().parent()
			siguiente($fieldset_invalido)
		}

	}

	function es_valido_formulario(){
		return document.querySelector(selector).checkValidity()

	}

	function siguiente($next_step){
		$('.step.active').removeClass('active')
		$next_step.addClass('active')
		$next_step.find('.input').focus()
		//$next_step.focus()

		//Coordinar circulos
		const posicion = ($next_step.index('.step') * 2) + 1

		$('.path-step.active').removeClass('active')

		$('.path-step:nth-child('+posicion+')').addClass('active')
	}


	function enviar_formulario(){
		//console.log($form.formObject())
		const $form = $(selector)
		$.ajax({
			url: $form.attr("action"),
			method:"POST",
			data: $form.formObject(),
			dataType:"json",
			success: function(){
				$form.slideUp()
				$('#info-contacto').html('Mensaje enviado, nos pondremos en contacto contigo pronto. Gracias!')
			}
		})
		
	}

})()