var generate_html = function (pos) {
	$('#board').append('<li id="' + pos + '" class="unclicked"></li>');
};

var init = function () {
	for (i = 0; i < 9; i++){
		board.cells.push(new Cell(i));
		generate_html(i);
	};
};

var firstClick = true;


var checkForGameOver = function () {
	$.each(board.allBlocks(), function(index, block) {
		if (board.howManyMarks(block, "computer") === 3) {
			$.each(block, function (index, cell) {
				$('#' + cell.position).addClass("winner");
			});
			board.deactivate();
			alert("Game over, You Lose!");
		} 
	});
	if (board.allChecked()) {
			alert("Cats game, Rematch!");
	}
};


$(function () {
	//Initialization of the game board
	init();

	$('#board li.unclicked').click(function(){
		var clickedCell = board.cells[$(this).attr("id")];
		clickedCell.author = "player";
		board.updateCell($(this).attr("id"));
		computerPlayer.move();
		checkForGameOver();
	});

	$('#reset').click(function(){
		document.location.reload(true);
	});
});


