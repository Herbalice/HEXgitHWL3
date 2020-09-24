// 印出乘法表，從 3~15，從 3x1、3x2~一直到 15x15
for (let i = 3; i <= 15; i++) {
	for (let j = 1; j <= 15; j++) {
		console.log(`${i} x ${j} = ${i*j}`);
	}
}

// BMI 函式，裡頭有兩個參數(身高,體重)，執行時會印出對應 BMI，並取小數點後一位
function BMI(height, weight) {
	const h = height / 100;
	const w = weight;
	const bmi = (w / (h * h)).toFixed(1);
	console.log(`BMI: ${bmi}`);
}
BMI(178,70);
BMI(180,65);