const fetch = require('node-fetch')

class Base {
	constructor() {

	}

	isEven = (arg) => {
		return arg % 2 == 0
	}

	isPerfect = (arg) => {
		let root = Math.sqrt(arg)
		
		return (root - Math.floor(root)) == 0
	}

	isPrime = (arg) => {
		if (arg <= 1) return false;

		for (let i = 2; i < arg; i++) {
			if (arg % i == 0) return false;

			return true
		} 
	}

	isArmstrong = (arg) => {

		if (arg < 0) return false;

		let index = arg.toString().split('')

		let initCheck = 0

		index.forEach(value => {
			let intValue = parseInt(value)

			let intCube = intValue * intValue * intValue

			initCheck += intCube
		})

	
		return arg == initCheck
	}

	digitSum = (arg) => {
		let index = Math.abs(arg).toString().split('')

		let sum = 0

		index.forEach(value => {
			let intValue = parseInt(value)
			sum += intValue
		})

		return sum
	}

	funFact = (arg) => {

		try {
			let result = fetch(`http://numbersapi.com/${arg}`)
				.then(res => res.text())
				.then(res => {
					return res
				})

			return result
			
		} catch (err) {
			return `${arg} is a number for which we're missing a fact (submit one to numbersapi at google mail!).` 
		}

	}


	classifyNumber = async(req, res) => {
		try {

			const number = req.query.number

			let number_int_format = parseInt(number)

			if (!number || isNaN(number_int_format)) {
				return res.status(400).json({
					number: number,
					error: true
				})
			}

			let property = []

			let isPrime = this.isPrime(number_int_format)

			let isPerfect = this.isPerfect(number_int_format)

			let isArmstrong = this.isArmstrong(number_int_format)

			if (isArmstrong) {
				property.push('armstrong')
			}

			let isEven = this.isEven(number_int_format)

			if (isEven) {
				property.push('even')
			} else {
				property.push('odd')
			}

			
			let digit_sum = this.digitSum(number_int_format)

			let fun_fact = await this.funFact(number_int_format)

			return res.status(200).json({
				number: number_int_format,
				is_prime: isPrime,
				is_perfect: isPerfect,
				properties: property,
				digit_sum: digit_sum,
				fun_fact: fun_fact
			})

		} catch (err) {
			return res.status(400).json({
					number: number,
					error: true
				})
		}
	}

}




module.exports = Base
