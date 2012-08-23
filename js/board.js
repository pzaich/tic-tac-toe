var board = {
	cells: [],
	row : function (rowNumber) {
		var startingCell = rowNumber * 3;
		return this.cells.slice(startingCell, startingCell + 3);
	},
	col : function (colNumber) {
		var col = [];
		for (i = 0; i < 3 ; i++) {
			var cellno = colNumber + 3 * i;
			col.push(this.cells[cellno]);
		};
		return col;
	},
	diagonal : function (topCell) {
		var diagonal = [];
		for (i = 0; i < 3; i++) {
			if (topCell === "0") {
				diagonal.push(this.cells[i * 4]);
			} else if (topCell === "2") {
				diagonal.push(this.cells[(i + 1) * 2]);
			};
		};
		return diagonal;
	},
	allBlocks : function () {
		var allBlocks = [];
		$.each([0,1,2], function (i, val) {
			allBlocks.push(board.row(i));
			allBlocks.push(board.col(i));
		});
		allBlocks.push(this.diagonal("0"));
		allBlocks.push(this.diagonal("2"));
		return allBlocks;
	},
	sides : function () {
		var edges = [];
		edges.push(this.cells[1]);
		edges.push(this.cells[3]);
		edges.push(this.cells[5]);
		edges.push(this.cells[7]);
		return edges;
	},
	marked : function () { 
		var checked = false
		$.each(this.cells, function (index, cell) {
			if (cell.author) {
				checked = true;
			};
		});
		return checked;
	},
	allChecked : function () {
		var counter = 0;
		$.each(this.cells, function (index, cell) {
			if (cell.author !== undefined) {
				counter++;
			}
		});
		if (counter === 9) {
			return true;
		} else {
			return false;
		}
	},
	isCellChecked : function (cellNo) {
		return this.cells[cellNo].author;
	},
	updateCell : function (cellNo) {
		if (this.cells[cellNo].author === "player") {
			$("#" + cellNo).addClass("crossed");
		} else {
			$("#" + cellNo).addClass("ooed");
		}
		$('#' + cellNo).removeClass("unclicked").off('click');
	},
	howManyMarks : function (blockArr, author) {
		var counter = 0;
		$.each(blockArr, function (index, cell) {
			if (cell.author === author){
				counter++;
			};
		});
		return counter;
	},
	deactivate : function () {
		$.each(this.cells, function (index, cell) {
			$("#" + cell.position).off('click').removeClass('unclicked');
		});
	}
};