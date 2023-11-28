import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditcategoriesComponent } from './create-editcategories.component';

describe('CreateEditcategoriesComponent', () => {
  let component: CreateEditcategoriesComponent;
  let fixture: ComponentFixture<CreateEditcategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateEditcategoriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateEditcategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
