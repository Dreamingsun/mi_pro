<?php
	$data=$_POST['data'];
	header("Access-Control-Allow-Origin:http://japi.juhe.cn/comic/chapterContent?".$data."&key=8553f07de814fd13e17a15a2c4d8bfc8");
	header('Access-Control-Allow-Methods:GET');
	$ulr ="http://japi.juhe.cn/comic/chapterContent?".$data."&key=5876e505474b2f2f2d627b69b33f1abf";
	$html=file_get_contents($ulr);
	echo $html;
?>