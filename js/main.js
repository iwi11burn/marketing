$(function () {
	$('.slider-blog__inner').slick({
		dots: true,
		prevArrow:
			'<button type="button" class="slick-prev"><img src="./images/arrow-left.svg" alt="" /></button>',
		nextArrow:
			'<button type="button" class="slick-next"><img src="./images/arrow-right.svg" alt="" /></button>',
		customPaging: function (slider, i) {
			return '<button type="button"></button>'
		},
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
				},
			},
		],
	})

	$('.menu-btn, .menu a').on('click', function () {
		$('.header__top-inner').toggleClass('header__top-inner--active')
	})

	$('.menu').on('click', 'a', function (event) {
		event.preventDefault()
		var id = $(this).attr('href'),
			top = $(id).offset().top

		$('body,html').animate({ scrollTop: top }, 1500)
	})

	var mixer = mixitup('.portfolio__content')
})
