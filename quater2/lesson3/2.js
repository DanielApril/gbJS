const basket = [
	['Ноутбук', 45000, 3],
	['Мышька', 1000, 3],
	['Клавиатура', 2000, 2]
];

let amount = 0;
function countBasketPrice() {
	for (let i = 0; i < basket.length; i++) {
		amount += basket[i][1] * basket[i][2];
	}
	console.log(amount);
}
countBasketPrice();