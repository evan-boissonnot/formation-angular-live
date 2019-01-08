import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PotionsComponent } from './potions/potions.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { PotionResumeComponent } from './potion-resume/potion-resume.component';
import { PotionDetailComponent } from './potion-detail/potion-detail.component';
import { PotionsService } from './services/potions.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PotionsComponent,
    IngredientsComponent,
    PotionResumeComponent,
    PotionDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    PotionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
