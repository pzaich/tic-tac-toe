var computerPlayer = {
	move : function () {
		if (computerPlayer.checkCenter() === false) {
			if (this.checkForDanger()) {
				console("single cell needs to be checked");
			};
		};
	},
	checkCenter : function () {
		if (board.marked()){
			if (board.isCellChecked(4) === undefined) {
				board.markCell(4, "computer");
				board.updateCell(4);
				return true;
			}
		}
		return false;
	},
	checkForDanger : function () {
		var markedACell = false;
		$.each(board.allBlocks(), function (index, block){
			if (board.howManyMarks(block) === 2) {
				computerPlayer.markFirstCellFound(block);
				// return false;
			}
		});
		return markedACell;
	},
	markFirstCellFound : function (block) {
		$.each(block, function (index, cell) {
			console.log("iterating over each cell" + index)
			if (cell.author === undefined ){
				console.log("checked the cell " + index)
				cell.author = "computer";
				board.updateCell(cell.position);
				markedACell = true;
				return false;
			}
		});
	},
	checkCorner : function (){
		$.each(board.corners(), function (index, cell) {

		});
	}
};