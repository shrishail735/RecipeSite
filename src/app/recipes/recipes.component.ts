import { Component, OnChanges, OnInit } from '@angular/core';
import { RecipesService } from '../services/recipes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit, OnChanges {
  recipes:any=[]
  searchterm="";
constructor(private recipesService:RecipesService, private router:Router){}

 ngOnInit(): void {
     this.recipesService.getAllRecipes().subscribe((data:any)=>{
      this.recipes=data.recipes;
      // this.recipes=this.recipes.recipes;
     })
 }
 navigateToRecipe(id:number)
 {
    this.router.navigate(["/recipe/",id])
 }
 ngOnChanges()
 {
  // console.log(this.searchterm)
  //  this.recipesService.getRecipesBySearch(this.searchterm).subscribe((data:any)=>{
  //   this.recipes=data;
  //  })
 }
 handleChange()
 {
  this.recipesService.getRecipesBySearch(this.searchterm).subscribe((data:any)=>{
    this.recipes=data.recipes;
   })
 }
}
