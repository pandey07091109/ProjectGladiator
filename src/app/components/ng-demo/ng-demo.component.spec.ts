import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDemoComponent } from './ng-demo.component';

describe('NgDemoComponent', () => {
  let component: NgDemoComponent;
  let fixture: ComponentFixture<NgDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
