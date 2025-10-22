import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateAliPage } from './create-ali.page';

describe('CreateAliPage', () => {
  let component: CreateAliPage;
  let fixture: ComponentFixture<CreateAliPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAliPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
