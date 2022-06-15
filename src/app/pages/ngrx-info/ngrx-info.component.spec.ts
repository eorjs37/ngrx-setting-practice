import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxInfoComponent } from './ngrx-info.component';

describe('NgrxInfoComponent', () => {
  let component: NgrxInfoComponent;
  let fixture: ComponentFixture<NgrxInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgrxInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
