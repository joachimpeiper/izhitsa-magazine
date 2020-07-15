/*--- Слайдер для подкастов ---*/

jQuery('document').ready(function() {
	
	jQuery('.next').click(function() {
		var currentImage = $('.slider-container.curry');
		var currentImageIndex = $('.slider-container.curry').index();
		var nextImageIndex = currentImageIndex + 1;
		var nextImage = $('.slider-container').eq(nextImageIndex);
 
		currentImage.removeClass('curry');

		if(nextImageIndex == ($('.slider-container:last').index()+1)) {
			$('.slider-container').eq(0).fadeIn();
			$('.slider-container').eq(0).addClass('curry');
		} else {
			nextImage.fadeIn();
			nextImage.addClass('curry');
		}
	});

	jQuery('.prev').click(function() {
		var currentImage = $('.slider-container.curry');
		var currentImageIndex = $('.slider-container.curry').index();
		var prevImageIndex = currentImageIndex - 1;
		var prevImage = $('.slider-container').eq(prevImageIndex);
		currentImage.fadeIn();
		currentImage.removeClass('curry');
		prevImage.fadeOut();
		prevImage.addClass('curry');
	});
});

/*--- Слайдер для картинок в статьях ---*/

///

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
	showSlides(slideIndex += n);
}

function currentSlide(n){
	showSlides(slideIndex = n);
}

function showSlides(n){
	var i;
	var slides = document.getElementsByClassName("article-content-text-slider-container-slide");
	var dots = document.getElementsByClassName("dot");
	
	if(n > slides.length){
		slideIndex = 1;	
	}	
	if(n < 1){
		slideIndex = slides.length;
	}	
	for(i=0; i < slides.length; i++){
		slides[i].style.display = "none";
	}	
	for(i=0; i < dots.length; i++){
		dots[i].className = dots[i].className.replace("active","");
	}
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className+= " active";	
}