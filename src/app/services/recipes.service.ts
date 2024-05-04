import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private http:HttpClient) { }
  getAllRecipes()
  {
    return this.http.get('https://dummyjson.com/recipes');
  }

  getRecipeById(id:number)
  {
    return this.http.get('https://dummyjson.com/recipes/'+id)
  }
  getRecipesBySearch(searchterm:string)
  {
    return this.http.get('https://dummyjson.com/recipes/search?q='+searchterm)
  }
}
