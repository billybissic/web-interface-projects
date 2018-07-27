/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BlogManagerComponent } from './blog_manager.component';
import { AuthService } from './../auth/auth.service';

describe('BlogManagerComponent', () => {
  let component: BlogManagerComponent;
  let fixture: ComponentFixture<BlogManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogManagerComponent ],
      providers: [
        { provide: AuthService, useValue: { isAuthenticated: () => false }}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
