import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDeletingTasksComponent } from './display-deleting-tasks.component';

describe('DisplayDeletingTasksComponent', () => {
  let component: DisplayDeletingTasksComponent;
  let fixture: ComponentFixture<DisplayDeletingTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayDeletingTasksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplayDeletingTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
