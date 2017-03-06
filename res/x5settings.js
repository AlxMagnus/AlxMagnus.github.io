(function ( $, x5engine ) {
	var x = x5engine,
		s = x.settings,
		p = s.currentPath,
		b = x.boot;

	s.siteId = 'F165D489D80ABAAA1ED5EEA75F43DEF0';
	s.version = '13-0-5-27';
	b.push(function () {
		x.setupDateTime();
		x.imAccess.showLogout();
		x.utils.autoHeight();
		x.cart.ui.updateWidget();
		x.imGrid.init();
	});
	s.menu = {
		verticalScroll: false,
	};
	b.push(function () {
		x.menu({
			target: '#imMnMn',
			verticalScroll: false,
			showCurrent: false,
			showLogoOnScroll: true,
			menuHeight: 64,
			menuWidth: 120,
			submenuHeight: 22,
			submenuWidth: 160,
			opacity: 0.8,
			fullWidthScroll: false,
			type: 'singleColumn',
			effect: 'fade'
		});
	});
	b.push(function () { x.utils.imPreloadImages([p + 'menu/hor_main.png',p + 'menu/hor_main_h.png',p + 'menu/hor_main_c.png', p + 'res/imLoad.gif', p + 'res/imClose.png']); });

	// ShowBox
	$.extend(s.imShowBox, {
		"effect": "custom", "customEffect": "generic animated fadeIn",
		'shadow' : '',
		'background' : '#000000',
		'borderWidth' : {
			'top': 1,
			'right': 1,
			'bottom': 1,
			'left': 1
		},
		'borderRadius' : '5px 5px 5px 5px',
		'borderColor' : '#000000 #000000 #000000 #000000',
		'textColor' : '#000000',
		'fontFamily' : 'Tahoma',
		'fontStyle' : 'normal',
		'fontWeight' : 'normal',
		'fontSize' : '9pt',
		'textAlignment' : 'left',
		'boxColor' : '#FFFFFF',
		'opacity' : 0.7,
		'radialBg' : true // Works only in Mozilla Firefox and Google Chrome
	});

	// PopUp
	$.extend(s.imPopUp, {
		'effect' : 'websitex5.bl.templates.showboxanimation',
		'width' : 500,
		'shadow' : '',
		'background' : '#000000',
		'borderRadius' : 10,
		'textColor' : '#000000',
		'boxColor' : '#FFFFFF',
		'opacity' : 0.7
	});

	// Tip
	$.extend(s.imTip, {
		'borderRadius' : 1,
		'arrow' : true,
		'position' : 'bottom',
		'effect' : 'none',
		'showTail' : true
	});


	// BreakPoints
	s.breakPoints.push({ "hash": "0fcea89e902c6a0e9c4ca91aaa05d4f5", "name": "Desktop", "start": "max", "end": 0, "fluid": false });

	b.push(function() { x.cookielaw.showBanner({id: "cookie-law-message", text: "Этот сайт использует файлы Cookie. Просим ознакомиться с правилами обработки данных.", priority: 1, position: 'bottom'}); });

	s.loaded = true;
})( _jq, x5engine );
