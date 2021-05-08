// https://leetcode.com/problems/assign-cookies/

function findContentChildren(g, s) {
	const gSort = g.sort((a,b) => a-b)
	const sSort = s.sort((a,b) => a-b)
	let contentChild = 0;

	for (let i = 0; i< gSort.length; i++) {
		let popped = false;

		for (let j = 0; j < sSort.length; j++) {
			if (gSort[i] <= sSort[j]) {
				popped = true;
				sSort.splice(j, 1);
				contentChild ++;
				break;
			}
		}

		if (!popped) break;
	}

	return contentChild;
};
