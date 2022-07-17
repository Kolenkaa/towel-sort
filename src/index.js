
// You should implement your task here.

module.exports = function towelSort(matrix) {
	if (matrix === undefined) return [];
	for (let index = 0; index < matrix.length; index++) {
		if (index % 2 !== 0) {
			matrix[index].reverse();
		}
	}
	return matrix.flat();
}
