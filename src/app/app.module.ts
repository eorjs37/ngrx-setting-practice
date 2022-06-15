import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

//ngrx
import { StoreModule } from '@ngrx/store';
import { userInfoReducer } from "@store/userInfo/userInfo.reducers"

//ngrx dev-tools
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgrxInfoComponent } from './pages/ngrx-info/ngrx-info.component';


@NgModule({
  declarations: [
    AppComponent,
    NgrxInfoComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({userInfoState: userInfoReducer}),
    //dev-tools
    StoreDevtoolsModule.instrument({
      maxAge:25
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
