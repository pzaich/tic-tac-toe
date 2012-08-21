var board = {
	cells: [],
	row : function (rowNumber) {
		var startingCell = rowNumber * 3;
		return this.cells.slice(startingCell, startingCell + 3);
	},
	col : function (colNumber) {
		var col = [];
		for (i = 0; i < 3 ; i++){
			var cellno = colNumber + 3*i;
			console.log(cellno);
			col.push(this.cells[cellno]);
		};
		return col;
	}
};