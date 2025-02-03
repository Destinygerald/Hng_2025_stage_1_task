# HNG BACKEND 2025 - STAGE ONE TASK 


## TASK DESCRIPITON
An api that takes a number and returns interesting mathematical properties about it, along with a fun fact(gotten from Fun Facts API [http://numbersapi.com/#41])


## API SPECIFICATION
	Endpoint: GET <URL>/api/classify-number?number=371

	Response JSON (200):
	```
	{
		"number": 371,
		"is_prime": false,
		"is_perfect": false,
		"properties": ["armstrong", "odd"],
		"digit_sum": 11,
		"fun_fact": "371 is an armstrong number because 3^3 + 7^3 + 1^3 = 371"
	}
	```

	Response JSON (400):
	```
	{
		"number": "alphabet",
		"error": true
	}
	```