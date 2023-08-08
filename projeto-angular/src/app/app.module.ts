import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/admin/header/header.component';
import { FooterComponent } from './components/admin/footer/footer.component';
import { LoginComponent } from "./components/login/login.component";
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [importProvidersFrom(HttpClientModule)],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HeaderComponent,
        FooterComponent,
        BrowserAnimationsModule,
        LoginComponent,
        MatSnackBarModule
    ]
})
export class AppModule { }
