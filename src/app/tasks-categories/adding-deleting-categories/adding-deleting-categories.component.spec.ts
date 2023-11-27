import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingDeletingCategoriesComponent } from './adding-deleting-categories.component';

describe('AddingDeletingCategoriesComponent', () => {
  let component: AddingDeletingCategoriesComponent;
  let fixture: ComponentFixture<AddingDeletingCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddingDeletingCategoriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddingDeletingCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
