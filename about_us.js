// // Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args=$.args;

function closeWin(){
	$.aboutWin.close();
}

function email(){
	emailDiolog.open();
}

function tweet(e){
	if(Ti.Platform.openURL('twitter://user?user_id=715432034366263296')){
		
	}else {
		Ti.Platform.openURL('http://www.twitter.com/HosnaNoorzai');
	}
}

function facebook(){
	if(Ti.Platform.openURL('http://www.facebook.com/profile.php?id=100009508103504')){
		
	}else {
		("can't access to facebook program on your device");
	}
}

var emailDiolog = Ti.UI.createEmailDialog({
	toRecipients: ['creativestudentscs@gmail.com'],
	subject: 'د پښتو دیکښنری په اړه نظرونه'
});
