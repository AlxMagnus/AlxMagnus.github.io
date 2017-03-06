<?php

/*
|-------------------------------
|	GENERAL SETTINGS
|-------------------------------
*/

$imSettings['general'] = array(
	'url' => 'http://c8m.github.io/',
	'homepage_url' => 'http://c8m.github.io/index.html',
	'icon' => 'http://c8m.github.io/admin/images/logo.png',
	'version' => '13.0.5.27',
	'sitename' => 'c8m',
	'public_folder' => '',
	'salt' => 'hf5fvjp8biaq7wq8qjr5ro1jro2uvh9i61uqveypx8werob6',
);


$imSettings['admin'] = array(
	'icon' => 'admin/images/logo.png',
	'theme' => 'orange'
);
ImTopic::$captcha_code = "		<div class=\"x5captcha-wrap\">
			<label>Проверочное слово:</label><br />
			<input type=\"text\" class=\"imCpt\" name=\"imCpt\" maxlength=\"5\" />
		</div>
";

// End of file x5settings.php