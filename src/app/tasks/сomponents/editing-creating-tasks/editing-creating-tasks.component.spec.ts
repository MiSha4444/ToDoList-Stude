import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditingCreatingTasksComponent } from './editing-creating-tasks.component';

describe('EditingCreatingTasksComponent', () => {
  let component: EditingCreatingTasksComponent;
  let fixture: ComponentFixture<EditingCreatingTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditingCreatingTasksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditingCreatingTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
