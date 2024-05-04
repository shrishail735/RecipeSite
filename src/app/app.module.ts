import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { HttpClientModule } from '@angular/common/http';
import { RecipeComponent } from './recipe/recipe.component';
import { FormsModule } from '@angular/forms';
import { RupeesPipe } from './rupees.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    RecipeComponent,
    RupeesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
