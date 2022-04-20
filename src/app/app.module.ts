import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AddDebtComponent } from './components/add-debt/add-debt.component';
import { MenuComponent } from './components/menu/menu.component';
import { ErrorComponent } from './components/error/error.component';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCV8nx2wGTa_EmpG7DF11897TG8X-v1Ep8",
  authDomain: "my-devts.firebaseapp.com",
  projectId: "my-devts",
  storageBucket: "my-devts.appspot.com",
  messagingSenderId: "465561309711",
  appId: "1:465561309711:web:f61180c6a67d9bb334497a",
  measurementId: "G-C0189RMWXB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AddDebtComponent,
    MenuComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
