// 印出乘法表，從 3~15，從 3x1、3x2~一直到 15x15
for (let i = 3; i <= 15; i++) {
	for (let j = 1; j <= 15; j++) {
		console.log(`${i} x ${j} = ${i*j}`);
	}
}