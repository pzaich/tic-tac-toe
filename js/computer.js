var computerPlayer = {
	move : function () {
		if (this.checkCenter()) {
		} else if (this.checkForDangerOrWinner("player")) {
		} else if (this.checkForDangerOrWinner("computer")) {
		} else { 
			if (firstClick) {
				this.checkCorners();
			} else {
				this.checkSides();
			}
		}
		firstClick = false;
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
	checkForDangerOrWinner : function (author) {
		var markedACell = false;
		$.each(board.allBlocks(), function (index, block){
			if (board.howManyMarks(block, author) === 2) {
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
	checkSides : function (){
		$.each(board.sides(), function (index, cell) {
			if (cell.author === undefined) {
				cell.author = "computer";
				board.updateCell(cell.position);
				return false;
			}
		});
	},
	checkCorners : function () {
		$.each(board.corners(), function (index, cell) {
			if (cell.author === undefined) {
				cell.author = "computer";
				board.updateCell(cell.position);
				return false;
			}
		});
	}
};