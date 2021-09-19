var i=0, j=0, flag=false;

while (i < 100) {
	flag = false;

	for (j=2; j <= Math.floor(Math.sqrt(i)); j++) {
		console.log(Math.floor(Math.sqrt(i)));
		console.log('i=', i,'j=',j);
		if (i % j == 0 ) {
			flag = true;
			break;
		}
	}
	if (flag == false) console.log('Result, i=',i);
	i++;
}