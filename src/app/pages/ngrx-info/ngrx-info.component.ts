import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserInfoState } from "@store/state/userInfoState"
import { getUserInfo } from "@store/userInfo/useInfo.selectors";
import { Observable } from 'rxjs';
@Component({
  selector: 'app-ngrx-info',
  templateUrl: './ngrx-info.component.html',
  styleUrls: ['./ngrx-info.component.scss']
})
export class NgrxInfoComponent implements OnInit {
  userInfoState$!: Observable<UserInfoState>;
  constructor(private store:Store<{userInfoState:UserInfoState}>) { }

  ngOnInit(): void {
    this.userInfoState$ = this.store.select(getUserInfo);
  }

}
