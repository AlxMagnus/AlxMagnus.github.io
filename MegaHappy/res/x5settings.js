(function ( $, x5engine ) {
	var x = x5engine,
		s = x.settings,
		p = s.currentPath,
		b = x.boot;

	s.siteId = 'BD3AD254FE810CAB5CE303E99E0E827D';
	s.version = '13-1-5-16';
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
			menuHeight: 59,
			menuWidth: 140,
			submenuHeight: 34,
			submenuWidth: 170,
			opacity: 0.8,
			fullWidthScroll: false,
			type: 'singleColumn',
			effect: 'fade'
		});
	});
	b.push(function () { x.utils.imPreloadImages([p + 'menu/hor_main.png',p + 'menu/hor_main_h.png',p + 'menu/hor_main_c.png', p + 'res/imClose.png']); });

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
		'borderRadius' : '3px 3px 3px 3px',
		'borderColor' : '#000000 #000000 #000000 #000000',
		'textColor' : '#000000',
		'fontFamily' : 'Trebuchet MS',
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
		'effect' : 'fade',
		'showTail' : true
	});


	// BreakPoints
	s.breakPoints.push({ "hash": "71b14e2b2a5121661fb7ddae017bdbf6", "name": "Desktop", "start": "max", "end": 0, "fluid": false });

	b.push(function () { x.cookielaw.activateScripts() });

	s.loaded = true;
})( _jq, x5engine );
