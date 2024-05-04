import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { RecipesService } from '../services/recipes.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent {
 recipe:any;
  constructor(private route:ActivatedRoute,private recipeService:RecipesService){}

  ngOnInit()
  {
    const recipeId=this.route.snapshot.params["id"]
    this.recipeService.getRecipeById(recipeId).subscribe((data:any)=>{
      this.recipe=data;
      console.log(this.recipe)
    })
  }
}
