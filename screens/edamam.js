
//const request = require('request')
import * as request from 'request'
import recipe from '../../recipes.json'

const APP_ID = '645196ef'
const APP_KEY = '4a5cad39372bde9f4e91112720eaf59a'

const EDAMAM_URI_BASE = `https://api.edamam.com/search` //?app_id=${APP_ID}&app_key=${APP_KEY}`

const DIET = ['balanced', 'high-protein', 'high-fiber', 'low-fat', 'low-carb', 'low-sodium']
const HEALTH_LABELS =  ['vegan', 'vegetarian', 'paleo', 'dairy-free', 'gluten-free', 
	'wheat-free', 'fat-free', 'low-sugar','egg-free', 'peanut-free', 
	'tree-nut-free', 'soy-free', 'fish-free', 'shellfish-free']
/*
CA		Calcium				mg	ENERC_KCAL	Energy			kcal
CHOCDF	Carbs				g	NIA			Niacin (B3)		mg
CHOLE	Cholesterol			mg	P			Phosphorus		mg
FAMS	Monounsaturated		g	PROCNT		Protein			g
FAPU	Polyunsaturated		g	RIBF		Riboflavin (B2)	mg
FASAT	Saturated			g	SUGAR		Sugars			g
FAT		Fat					g	THIA		Thiamin (B1)	mg
FATRN	Trans				g	TOCPHA		Vitamin E		mg
FE		Iron				mg	VITA_RAE	Vitamin A		æg
FIBTG	Fiber				g	VITB12		Vitamin B12		æg
FOLDFE	Folate (Equivalent)	æg	VITB6A		Vitamin B6		mg
K		Potassium			mg	VITC		Vitamin C		mg
MG		Magnesium			mg	VITD		Vitamin D		æg
NA		Sodium				mg	VITK1		Vitamin K		æg

*/

let range = (a, b, step = 1) => Object.keys(Array.from(Array(Math.ceil((b - a) / step)))).map(elem => a + parseInt(elem) * step)

let removeUndefinedKeys = (obj) => Object.keys(obj).forEach(key => obj[key] === undefined && delete obj[key])

const NUTRIENTS = {
	'CA': null,			//Calcium			mg
	'CHOCDF': null,		//Carbs				g
	'CHOLE': null,			//Cholesterol		mg	
	'FAMS': null,			//Monounsaturated	g	
	'FAPU': null,			//Polyunsaturated	g	
	'FASAT': null,			//Saturated			g	
	'FAT': null,			//Fat				g	
	'FATRN': null,			//Trans				g	
	'FE': null,			//Iron				mg	
	'FIBTG': null,			//Fiber				g	
	'FOLDFE': null,		//Folate 			æg	
	'K': null,				//Potassium			mg	
	'MG': null,			//Magnesium			mg	
	'NA': null,			//Sodium			mg	
	'ENERC_KCAL': null, 	//Energy			kcal
	'NIA': null,			//Niacin (B3)		mg
	'P': null,				//Phosphorus		mg'
	'PROCNT': null,		//Protein			g'
	'RIBF':	null,			//Riboflavin (B2)	mg
	'SUGAR': null,			//Sugars			g
	'THIA':	null, 			//Thiamin (B1)		mg
	'TOCPHA': null,		//Vitamin E			mg
	'VITA_RAE':	null, 		//Vitamin A			æg
	'VITB12': null,		//Vitamin B12		æg
	'VITB6A': null,		//Vitamin B6		mg
	'VITC':	null, 			//Vitamin C			mg
	'VITD':	null,			//Vitamin D			æg
	'VITK1': null			//Vitamin K			æg
}

const FETCH_NUM_RECIPES = 20

function Edamam({
	ingredients = undefined, 
	excluded = undefined, 
	ingr = undefined, 
	diet = undefined, 
	health = undefined, 
	calories = undefined, 
	time = undefined, 
	nutrients = {}} = {}) {

	this.ingredients = ingredients
	this.excluded = excluded
	this.ingr = ingr
	this.diet = diet
	this.health = health
	this.calories = calories
	this.time = time

	if(ingredients == undefined)
		throw new Error(`Need ingredients`)

	params.nutrients.filter(nutrient => nutrient).forEach( nutrient => {
		let range
		if(nutrient.low && nutrient.high)
			range = `${nutrient.low}-${nutrient.high}`
		else if (nutrient.low)
			range = `${nutrient.low}+`
		else 
			range = `${nutrient.high}`
		this.nutrients[`nutrients[${nutrient.name}]`] = `${range}`
	})

	this.recipes = []

}

async randomize() {
	// fetch N recipes and then randomize order
	async fetchRecipes(0, 100)
	this.recipes
}

async recipes(start, end) {

	if(start >= end)
		throw new Error('Start must be less then End')

	if(this.recipes.length >= end)
		return this.recipes.slice(start, end)

	if(this.recipes.length < end) {
		end = Math.ceil( end / FETCH_NUM_RECIPES ) * FETCH_NUM_RECIPES
	}

	await fetchRecipes(this.recipes.length, end)
	return this.recipes.slice(start, end)
}

async fetchRecipes(start, end) {

	this.recipes = this.recipes.concat((await _fetch(start, end)).map(recipe => this.parseRecipe(recipe)))

}

parseRecipe(recipe) {

}

//curl "https://api.edamam.com/search?q=chicken&app_id=645196ef&app_key=4a5cad39372bde9f4e91112720eaf59a&from=0&to=3&calories=591-722&health=alcohol-free"

_fetch(from, to) {

	let uri = this.EDAMAM_URI_BASE //+ `&${encodeURIComponent()}&${encodeURIComponent(this.nutrients)}` 

	let queryParams = {
		'q': this.ingredients,
		'app_id': APP_ID,
		'app_key': APP_KEY,
		'from': from, 
		'to' : to,
		'excluded':	this.excluded,
		'ingr': this.ingr,
	 	'diet': this.diet,
		'health': this.health,
		'calories':	this.calories,
		'time':	this.time,
		...this.nutrients,
	}

	removeUndefinedKeys(queryParams)

	let options = { uri : uri +  , gzip: true, qs: queryParams }
	return new Promise((resolve, reject) => {

		request.get(options, function(err, res, body) {
			if(err) 
				reject(err)
			else if(res && res.statusCode === 200) {
				resolve(body)
			} else {
				reject(`${res.statusCode} ${res.statusMessage}`)
			}
		})

	})
}

export default Edamam