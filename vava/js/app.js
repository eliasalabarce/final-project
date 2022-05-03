// Menu
var btnMenu = $('#btnMenu');
var close = $('.close');
var menuList = $('.menu');

btnMenu.on('click', slideDown);
close.on('click', slideUp);

function slideDown()
{
    menuList.slideDown(300);
    btnMenu.css('display', 'none');
	  close.css('display', 'block');
}

function slideUp()
{
	menuList.slideUp(300);
	close.css('display', 'none');
	btnMenu.css('display', 'block');
}

// Tabs
var mobile = window.matchMedia("(max-width: 600px)");
var submenu = $('#submenu li');
// var arrayDesktop = ["Discover", "Analyse", "Improve", "Measure", "Control"];
var arrayDesktop = $('main section:nth-child(3) article h3');
submenu.on('click', loadContent);

function device(mobile) {
  if (mobile.matches) {
    for (var i = 1; i < submenu.length ; i++){
		for (var li of submenu) {
			li.innerText = [i++];
		}
	}
  } else {
  	for (var i = 0; i < submenu.length ; i++) {
        for (var li of submenu) {
    		li.innerText = arrayDesktop[i++].innerHTML;
    	}
	}
  }
}

function loadContent()
{
    submenu.removeClass('active');
    $('section:nth-child(3) article').css('display', 'none');

    if (parseInt($(this).text())) {
    	var item = 'main section:nth-child(3) article:nth-child('+ $(this).text() +')';
    } else {
    	var item = '#' + $(this).text().toLowerCase();
    }

    $(this).addClass('active');
    $(item).fadeIn(1000);
}

device(mobile);
mobile.addListener(device);