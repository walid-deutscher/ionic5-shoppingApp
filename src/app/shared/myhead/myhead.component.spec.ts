import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyheadComponent } from './myhead.component';

describe('MyheadComponent', () => {
  let component: MyheadComponent;
  let fixture: ComponentFixture<MyheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyheadComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
