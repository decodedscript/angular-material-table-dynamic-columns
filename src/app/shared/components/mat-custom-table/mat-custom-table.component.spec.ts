import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatCustomTableComponent } from './mat-custom-table.component';

describe('MatCustomTableComponent', () => {
  let component: MatCustomTableComponent;
  let fixture: ComponentFixture<MatCustomTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatCustomTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatCustomTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
