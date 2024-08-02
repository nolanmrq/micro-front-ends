import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitKanbanItemComponent } from './split-kanban-item.component';

describe('SplitKanbanItemComponent', () => {
  let component: SplitKanbanItemComponent;
  let fixture: ComponentFixture<SplitKanbanItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SplitKanbanItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SplitKanbanItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
