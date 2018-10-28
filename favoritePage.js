// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

var items = [];

function openSecondPage(e) {
	var id = items[e.itemIndex].itemId;
	Alloy.createController('second_page', {
		id : id
	}).getView().open();
}

function closeWin(){
	$.favoriteWin.close();
}

function findFavorites() {
	
	items = [];

	var rawData = Alloy.Globals.db.execute('select * from Words where Favorite=1');

	while (rawData.isValidRow()) {

		items.push({
			itemId : rawData.fieldByName('ID'),
			meaning : {
				text : rawData.fieldByName('word')
			}
		});

		rawData.next();
	}

	$.section.items = items;

}
