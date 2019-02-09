<?php

/*
|-------------------------------
|	GENERAL SETTINGS
|-------------------------------
*/

$imSettings['general'] = array(
	'url' => 'http://megahappy.ml/',
	'homepage_url' => 'http://megahappy.ml/index.html',
	'icon' => 'http://megahappy.ml/admin/images/logo_iy1rraqj.png',
	'version' => '13.1.5.16',
	'sitename' => 'MegaHappy',
	'public_folder' => '',
	'salt' => 'mak2ejshwl5wvrf3kcflgqzacei706b672n9kktpnshuljg9ucdmrrgvb9pz',
);


$imSettings['admin'] = array(
	'icon' => 'admin/images/logo_iy1rraqj.png',
	'theme' => 'orange'
);
ImTopic::$captcha_code = "		<div class=\"x5captcha-wrap\">
			<label>Проверочное слово:</label><br />
			<input type=\"text\" class=\"imCpt\" name=\"imCpt\" maxlength=\"5\" />
		</div>
";

// End of file x5settings.php