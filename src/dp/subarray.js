function subArray(nums) {
	const table = new Array(nums.length);
	let max = Math.max(...nums);

	for (let i = 0; i < nums.length; i++) {
		const temp = new Array(nums.length);
		temp[i] = nums[i];
		table[i] = temp;
	}

	for (let i = 0; i < nums.length; i++) {
		for (let j = i+1; j < nums.length; j++) {
			let val = getVal(i,j);
			if (val > max) max = val;
		}
	}

	function getVal(x,y) {
		if (table[x][y] === undefined) {
			table[x][y] = getVal(x, y-1) + getVal(y,y);
		}

		return table[x][y];
	}

	return max
};

const a = [-2,1,-3,4,-1,2,1,-5,4];
