/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewspostComponent } from './newspost.component';

describe('NewspostComponent', () => {
  let component: NewspostComponent;
  let fixture: ComponentFixture<NewspostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewspostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewspostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
