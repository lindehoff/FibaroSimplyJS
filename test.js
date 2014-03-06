var init = function(){
	simply.scrollable(true);
	simply.style('small');
	env = require('environment.js');

	simply.on('singleClick', function(e){
		if(e.button === "select"){
			getRoom();
		}
	});
	getRooms();
}

var getRooms = function(){
  simply.text({ title: 'Title', subtitle: 'Sub Tile', body: 'Body' });
}

var getRoom = function(){
	simply.text({title: "Getting Room",	body: "Wait while we fetch devices in room"}, true);

init();