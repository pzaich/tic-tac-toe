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
	// diagonal : function (topCell) {
	// 	var diagonal = [];
	// 	for (i = 0; i < 3; i++) {
	// 		if (topCell === "0") {
	// 			diagonal.push(this.cells[i * 4]);
	// 		} else if (topCell === "2") {
	// 			diagonal.push(this.cells[(i + 1) * 2]);
	// 		};
	// 	};
	// 	return diagonal;
	// },
	allBlocks : function () {
		var allBlocks = [];
		$.each([0,1,2], function (i, val) {
			allBlocks.push(board.row(i));
			allBlocks.push(board.col(i));
		});
		// allBlocks.push(this.diagonal("0"));
		// allBlocks.push(this.diagonal("2"));
		return allBlocks;
	},
	corners : function () {
		var corners = [];
		corners.push(this.cells[0]);
		corners.push(this.cells[2]);
		corners.push(this.cells[6]);
		corners.push(this.cells[8]);
		return corners;
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
	isCellChecked : function (cellNo) {
		return this.cells[cellNo].author;
	},
	markCell : function (cellNo, author) {
		this.cells[cellNo].author = author;
	},
	updateCell : function (cellNo) {
		if (this.cells[cellNo].author === "player") {
			$("#" + cellNo).addClass("crossed");
		} else {
			$("#" + cellNo).addClass("ooed");
		}
		$('#' + cellNo).removeClass("unclicked").off('click');
	},
	howManyMarks : function (blockArr) {
		var counter = 0;
		$.each(blockArr, function (index, cell) {
			if (cell.author === "player"){
				counter++;
			};
		});
		return counter;
	}
};