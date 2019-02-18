import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule , MatCheckboxModule , MatDatepickerModule , MatFormFieldModule ,
  MatInputModule , MatRadioModule , MatSelectModule , MatSliderModule ,
  MatSlideToggleModule , MatToolbarModule , MatListModule , MatGridListModule ,
  MatCardModule , MatIconModule , MatProgressSpinnerModule , MatDialogModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

import {AppComponent} from './app.component';

import 'hammerjs';
import {MenuComponent} from './menu/menu.component';
import {DishdetailComponent} from './dishdetail/dishdetail.component';

import {DishService} from './services/dish.service';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';

import {AppRoutingModule} from './app-routing/app-routing.module';
import {PromotionService} from './services/promotion.service';
import {LeaderService} from './services/leader.service';
import {LoginComponent} from './login/login.component';
import {FormsModule , ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {baseURL} from './shared/baseurl';
import {HighlightDirective} from './directives/highlight.directive';

@NgModule({
  declarations: [
    AppComponent ,
    MenuComponent ,
    DishdetailComponent ,
    HeaderComponent ,
    FooterComponent ,
    AboutComponent ,
    HomeComponent ,
    ContactComponent ,
    LoginComponent ,
    HighlightDirective
  ] ,
  imports: [
    BrowserModule ,
    BrowserAnimationsModule ,
    FlexLayoutModule ,
    MatButtonModule , MatCheckboxModule , MatDatepickerModule , MatFormFieldModule ,
    MatInputModule , MatRadioModule , MatSelectModule , MatSliderModule ,
    MatSlideToggleModule , MatToolbarModule , MatListModule , MatGridListModule ,
    MatCardModule , MatIconModule , MatProgressSpinnerModule , MatDialogModule , FlexLayoutModule ,
    AppRoutingModule ,
    FormsModule ,
    ReactiveFormsModule ,
    HttpClientModule
  ] ,
  entryComponents: [
    LoginComponent
  ] ,
  providers: [
    DishService ,
    PromotionService ,
    LeaderService ,
    {provide: 'BaseURL' , useValue: baseURL}
  ] ,
  bootstrap: [AppComponent]
})
export class AppModule {
}
