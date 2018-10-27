
import { AsyncStorage } from 'react-native'

class RecipeSearchHistory {

	constructor(num) {

		this.num = num

	}	
	
	async addRecipeSearch(search) {

		const recipeSearchesStr = await AsyncStorage.getItem('RecipeSearches')

		let recipeSearches = JSON.parse(recipesSearchesStr);
		if( !recipeSearches ) {
 			recipeSearches = []
 		}

 		recipeSearches.push(search)

 		if( recipeSearches.length > this.num )
 		recipeSearches = recipeSearches.slice( recipeSearches.length-this.num )

 		await AsyncStorage.setItem('RecipeSearches', JSON.stringify(recipeSearches))

	}

	async retrieveRecipeSearchList() {

		const recipeSearches = await AsyncStorage.getItem('RecipeSearches')
		return JSON.parse(recipeSearches)

	}

}

export default RecipeSearchHistory