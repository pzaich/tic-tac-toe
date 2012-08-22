var Cell = function (pos, author) {
	this.author = typeof author !== "underfined" ? author : author;
	this.position = pos;
};