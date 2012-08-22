var computerPlayer = {
	move : function () {
		if (computerPlayer.checkCenter() === false) {
			if (this.checkForDanger() === false) {
				console.log("single cell needs to be checked");
				// this.checkCorner();
			};
		};
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
			if (board.howManyMarks(block) === 2) {
				computerPlayer.markFirstCellFound(block);
				return false;
			}
		});
		console.log(markedACell);
		return markedACell;
	},
	markFirstCellFound : function (block) {
		$.each(block, function (index, cell) {
			console.log(index);
			if (cell.author === undefined ){
				cell.author = "computer";
				console.log("checked");
				board.updateCell(cell.position);
				//return true;
			}
		});
	},
	checkCorner : function (){
		$.each(board.corners(), function (index, cell) {
			if (cell.author === undefined) {
				cell.author = "computer";
				board.updateCell(cell.position)
				// return false;
			}
		});
	}
};