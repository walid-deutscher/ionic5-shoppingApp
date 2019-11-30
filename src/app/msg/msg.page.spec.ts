import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgPage } from './msg.page';

describe('MsgPage', () => {
  let component: MsgPage;
  let fixture: ComponentFixture<MsgPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsgPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
