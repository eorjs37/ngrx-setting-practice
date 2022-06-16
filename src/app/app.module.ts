import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

//ngrx
import { StoreModule } from '@ngrx/store';
import { userInfoReducer } from "@store/userInfo/userInfo.reducers"

//ngrx dev-tools
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgrxInfoComponent } from './pages/ngrx-info/ngrx-info.component';

//bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PagingComponent } from './pages/paging/paging.component';


@NgModule({
  declarations: [
    AppComponent,
    NgrxInfoComponent,
    PagingComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({userInfoState: userInfoReducer}),
    //dev-tools
    StoreDevtoolsModule.instrument({
      maxAge:25
    }),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
