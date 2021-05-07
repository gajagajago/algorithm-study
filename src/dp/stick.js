function stick(wholePrice, length) {
	let memo = new Array(wholePrice.length)

	for(let i = 0; i <= length; i++) {
		getMaxPrice(i);
	}

	function getMaxPrice(n) {
		let price = 0;

		if (memo[n] === undefined) {
			for (let i = 0; i < n; i++) {
				price = Math.max(price, wholePrice[n-i] + memo[i]);
			}
			memo[n] = price;
		}
	}

	return memo[length]
}

const whole_price = [0, 1, 5, 8, 9, 10, 17, 17, 20, 24, 30];
