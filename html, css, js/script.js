/*--- Запрет на скачку изображений для домохозяек ---*/
var img = document.getElementsByTagName('img');

for(var i in img)
{
    img[i].oncontextmenu = function()
    {
        return false;
    }
}

$('img').mousedown(function(){
    return false;
});

/*--- Меню поиска ---*/
$('.search-ico').click(function(){
    $('.nav-wrapper-searching').fadeIn(100);
    $('.nav-list').fadeIn(100);
    $('.nav-mask').fadeIn(200);
    $('.nav').css('opacity', '100%');
    $('body').css('overflow-y', 'hidden');
});

$('.search-cancel').click(function() {
    $('.nav-wrapper-searching').fadeOut(200);
    $('.nav-list').fadeOut(100);
    $('.nav-mask').fadeOut(100);
    $('.nav').css('opacity', '98%');
    $('body').css('overflow-y', 'auto');
});

$('.nav-mask').click(function() {
    $('.nav-wrapper-searching').fadeOut(200);
    $('.nav-list').fadeOut(100);
    $('.nav-mask').fadeOut(100);
    $('.nav').css('opacity', '98%');
    $('body').css('overflow-y', 'auto');
});


/*--- Фон для textarea комментариев ---*/

$('.article-content-comments-textarea textarea')
	.focus(function() { 
		$(this).css("background", "none"); 
	})
	.blur(function() { 
		if ($(this)[0].value == '') { 
			$(this).css("background", "url(img/entercomment.jpg) center center no-repeat"); 
		} 
	});

/*--- Дата ---*/

var d = new Date();

var day=new Array("Воскресенье","Понедельник","Вторник",
"Среда","Четверг","Пятница","Суббота");

var month=new Array("января","февраля","марта","апреля","мая","июня",
"июля","августа","сентября","октября","ноября","декабря");

document.write(d.getDate());

/*--- Расшар ---*/

Share = {
	vkontakte: function(purl, ptitle, pimg, text) {
		url  = 'http://vkontakte.ru/share.php?';
		url += 'url='          + encodeURIComponent(purl);
		url += '&title='       + encodeURIComponent(ptitle);
		url += '&description=' + encodeURIComponent(text);
		url += '&image='       + encodeURIComponent(pimg);
		url += '&noparse=true';
		Share.popup(url);
	},
	facebook: function(purl, ptitle, pimg, text) {
		url  = 'http://www.facebook.com/sharer.php?s=100';
		url += '&p[title]='     + encodeURIComponent(ptitle);
		url += '&p[summary]='   + encodeURIComponent(text);
		url += '&p[url]='       + encodeURIComponent(purl);
		url += '&p[images][0]=' + encodeURIComponent(pimg);
		Share.popup(url);
	},
	twitter: function(purl, ptitle) {
		url  = 'http://twitter.com/share?';
		url += 'text='      + encodeURIComponent(ptitle);
		url += '&url='      + encodeURIComponent(purl);
		url += '&counturl=' + encodeURIComponent(purl);
		Share.popup(url);
	},
	telegram: function(purl, ptitle) {
		url  = 'https://t.me/share/url?';
		url += 'text='      + encodeURIComponent(ptitle);
		url += '&url='      + encodeURIComponent(purl);
		url += '&counturl=' + encodeURIComponent(purl);
		Share.popup(url);
	},

	popup: function(url) {
		window.open(url,'','toolbar=0,status=0,width=626,height=436');
	}
};