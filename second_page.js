// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

// $.index.open();
var mean_words;
var words = Alloy.Globals.db.execute('select * from Words where ID=?', args.id);
var word = words.fieldByName('word');
$.wordLabel.setText(word);
$.favorite.setText(words.fieldByName('Favorite') == 1 ? 'favorite' : 'favorite_border');

var mean_word = Alloy.Globals.db.execute('select * from Mean_Word where Mean_ID=?', args.id);
while (mean_word.isValidRow()) {
	$.meanWordView.add(Alloy.createController('tableRow', {
		mean_words : mean_word.fieldByName('Mean_Words'),
	}).getView());

	mean_word.next();
}
//var meanWordLabel = Ti.UI.createLabel();

var favorite = words.fieldByName('Favorite');
function clickedFavorite(e) {
	if (favorite == 0) {
		Alloy.Globals.db.execute('update Words set Favorite=1 where ID=?', args.id);
		$.favorite.setText('favorite');
		favorite = 1;
	} else {
		Alloy.Globals.db.execute('update Words set Favorite=0 where ID=?', args.id);
		$.favorite.setText('favorite_border');
		favorite = 0;
	}
}

function shareItem(e) {
	var intend = Ti.Android.createIntent({
		action : Ti.Android.ACTION_SEND,
		type : 'text/plain'
	});
	intend.putExtra(Ti.Android.EXTRA_TEXT, 'Ù„ØºØª :' + '\n' + $.wordLabel.text + '\n' + 'Ù…Ø¹Ù†ÛŒ :');
	intend.addCategory(Ti.Android.CATEGORY_DEFAULT);

	var chooser = Ti.Android.createIntentChooser(intend, 'Ø§Ø´ØªØ±Ø§Ú© Ø³Ø±Ù‡');
	$.Win.activity.startActivity(chooser);
}

function openFirstWin(e) {
	Alloy.createController('favoriteItems', {
		word : word,
	}).getView().open();
}

function openAboutWin(e) {
	Alloy.createController('about_us').getView().open();
}

function closeWin(){
	$.Win.close();
}
