import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitKanbanComponent } from './split-kanban.component';

describe('SplitKanbanComponent', () => {
  let component: SplitKanbanComponent;
  let fixture: ComponentFixture<SplitKanbanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SplitKanbanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SplitKanbanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
