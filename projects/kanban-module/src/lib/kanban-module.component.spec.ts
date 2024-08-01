import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanModuleComponent } from './kanban-module.component';

describe('KanbanModuleComponent', () => {
  let component: KanbanModuleComponent;
  let fixture: ComponentFixture<KanbanModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KanbanModuleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KanbanModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
