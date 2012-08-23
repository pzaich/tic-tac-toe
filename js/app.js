var generate_html = function (pos) {
	$('#board').append('<li id="' + pos + '" class="unclicked"></li>');
};

var init = function () {
	for (i = 0; i < 9; i++){
		board.cells.push(new Cell(i));
		generate_html(i);
	};
};


$(function () {
	//Initialization of the game board
	init();

	$('#board li.unclicked').click(function(){
		var clickedCell = board.cells[$(this).attr("id")];
		clickedCell.author = "player";
		board.updateCell($(this).attr("id"));
		computerPlayer.move();
	});

	$('#reset').click(function(){
		document.location.reload(true);
	});
});


