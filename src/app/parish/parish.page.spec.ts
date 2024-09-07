import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParishPage } from './parish.page';

describe('ParishPage', () => {
  let component: ParishPage;
  let fixture: ComponentFixture<ParishPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ParishPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
