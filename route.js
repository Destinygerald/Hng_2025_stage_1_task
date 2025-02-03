const express = require('express')
const router = express.Router()
const Base = require('./controller.js')


class NumberController extends Base {
	constructor() {
		super()

		router.get('/classify-number', this.classifyNumber)
	}
}


new NumberController()

module.exports = router