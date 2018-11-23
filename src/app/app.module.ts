import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { ApiService } from './services/api.service';

import { AppComponent } from './app.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchPipe } from './search.pipe';
import { HttpClientModule } from '@angular/common/http';
import { DisplayContactComponent } from './display-contact/display-contact.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    ViewContactComponent,
    AddContactComponent, 
    HeaderComponent,
    FooterComponent,
    SearchPipe,
    DisplayContactComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(
      [
        { path: '', component: ViewContactComponent },
        { path: 'view-contact', component: ViewContactComponent },
        { path: 'add-contact', component: AddContactComponent },
        { path: 'add-contact/:id', component: AddContactComponent },
        { path: 'display-contact', component: DisplayContactComponent },
        { path: 'display-contact/:id', component: DisplayContactComponent },
        { path: '**', component: NotFoundComponent }
      ]
    )
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
