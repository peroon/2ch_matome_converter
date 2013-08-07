function p(v){
	console.log(v);
}

function convert(){
	var output_text = '';
	var user_text_buffer = '';

	var splitted = getTextArray('input_textarea')
	for(var i=0; i<splitted.length; i++){
		var s = splitted[i];
		var _isUserData = isUserData(s);

		if(_isUserData){
			//ユーザテキストをまとめて追加
			if(output_text!=''){
				output_text += '<span style="color: blue;"><b>' + "\n" + user_text_buffer + '</b></span>' + "" + '<br>' + "\n<br>";
			}

			//そのまま追加
			s = filterUserData(s);
			output_text += (s+"\n<br>");
			user_text_buffer = ''; //reset

		}else{
			user_text_buffer += (s+"\n");
		}
	}
	//最後
	output_text += '<span style="color: blue;"><b>' + "\n" + user_text_buffer + '</b></span>' + "" + '<br>' + "\n<br>";

	//最後に出力に反映
	$('#output_textarea').val(output_text);
	$('#html_view_test').html(output_text);
}

//改行で分割して配列で返す
function getTextArray(id){
	var textAll = $('#'+id).val();
	return textAll.split("\n");
}


//ユーザーで他の行か判定
function isUserData(s){
	var sign = 'ID:';
	if(s.indexOf(sign)==-1){
		return false;
	}else{
		return true;
	}
}

// 全ての文字列 s1 を s2 に置き換える
function replaceAll(expression, org, dest){
    return expression.split(org).join(dest);
}

function filterUserData(s){
	var wordArray = getTextArray('swap_textarea');
	for(var i=0; i<wordArray.length; i++){
		var word = wordArray[i];
		s = s.replace(word, '');
	}
	return s;
}