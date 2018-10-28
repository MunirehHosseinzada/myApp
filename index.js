var items = [];

function closeDrawer(){
	$.myDrawer.toggleLeft();
}

function clearTxtField(){
	$.textField.value = '';
	items = [];
	$.section.items = items;
}

function openSecondPage(e){
	var id = items[e.itemIndex].itemId;
	Alloy.createController('second_page', {id: id}).getView().open();
}

function openFavPage(){
	Alloy.createController('favoritePage').getView().open();
}

function Exit(){
	$.index.close();
}

function openAboutPage(){
	Alloy.createController('about_us').getView().open();
}

function findWords(){
	
	items = [];
	
	var value = $.textField.getValue();
	
	var data = Alloy.Globals.db.execute("select * from words where word like '" + value + "%'");
	
	while(data.isValidRow()){
		items.push({
			itemId: data.fieldByName('ID'),
			meaning: {
				text: data.fieldByName('word')
			}
		});
		
		data.next();	
	}
	
	$.section.items = items;

}

$.index.open();
