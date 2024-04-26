import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgTableComponent } from './svg-table.component';

describe('SvgTableComponent', () => {
  let component: SvgTableComponent;
  let fixture: ComponentFixture<SvgTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgTableComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SvgTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
