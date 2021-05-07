function knapsack_dp(objChart, w_constraint) {
	let maxValue;
	const dp = [];
	for (let i = 0; i <= objectChart.length; i++) {
		let row = new Array(w_constraint+1); row.fill(0);
		dp.push(row);
	}

	for (let i = 1; i <= objChart.length; i++) {
		for (let j = 0; j <= w_constraint; j++) {
			const obj = objChart[i-1];
			if (obj[1] <= j) {
				dp[i][j] = Math.max(obj[2] + dp[i-1][j-obj[1]], dp[i-1][j]);
			} else {
				dp[i][j] = dp[i-1][j]
			}
		}
	}

	maxValue = dp[objChart.length][w_constraint]

	return maxValue;
}

const objectChart = [
	// obj_num, weight, value
	[1, 6, 13],
	[2, 4, 8],
	[3, 3, 6],
	[4, 5, 12],
]

const constraint = 8;

knapsack_dp(objectChart, constraint)
