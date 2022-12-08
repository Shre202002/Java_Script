// =>  Write a JS code to find N value in the Fibonacci series for a given number

function fibonacci_numbers(n) {
	if (n == 0) {
		return 0;
	}
	else if (n == 1) {
		return 1;
	}
	else {
		return fibonacci_numbers(n - 2) + fibonacci_numbers(n - 1);
	}
}


let n = 9;
for (let i = 0; i <= n; i++) {
	console.log(fibonacci_numbers(i) + " ");
}




