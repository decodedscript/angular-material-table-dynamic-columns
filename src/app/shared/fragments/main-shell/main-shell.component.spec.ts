import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainShellComponent } from './main-shell.component';

describe('MainShellComponent', () => {
  let component: MainShellComponent;
  let fixture: ComponentFixture<MainShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
