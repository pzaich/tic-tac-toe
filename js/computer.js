var computerPlayer = {
	move : function () {
		if (this.checkCenter()){
			return
		} else if (this.checkForDanger()){
			return
		}
		console.log("made it to check corner");
		this.checkCorner();
	},
	checkCenter : function () {
		var centerOpen = false;
		if (board.isCellChecked(4) === undefined) {
			board.cells[4].author = "computer";
			board.updateCell(4);
			centerOpen = true;
		}
		return centerOpen;
	},
	checkForDanger : function () {
		var markedACell = false;
		$.each(board.allBlocks(), function (index, block){
			if (board.howManyMarks(block, "player") === 2) {
				markedACell = computerPlayer.markFirstCellFound(block);
				if (markedACell === true) {
					return false;
				} 
			}
		});
		return markedACell;
	},
	markFirstCellFound : function (block) {
		var cellMarked = false;
		$.each(block, function (index, cell) {
			if (cell.author === undefined ){
				cell.author = "computer";
				board.updateCell(cell.position);
				cellMarked = true;
			}
		});
		return cellMarked;
	},
	checkCorner : function (){
		$.each(board.corners(), function (index, cell) {
			if (cell.author === undefined) {
				cell.author = "computer";
				board.updateCell(cell.position);
				return false;
			}
		});
	},
	checkEdges : function (){
		$.each(board.corners(), function (index, cell) {
			if (cell.author === undefined) {
				cell.author = "computer";
				board.updateCell(cell.position);
				return false;
			}
		});
	},
	checkforWinner : function () {
		$.each(this.allBlocks(), function (index, block){
				//check for 2 === "computer", mark if there is undefined
		});	
	}
};