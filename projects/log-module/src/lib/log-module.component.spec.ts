import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogModuleComponent } from './log-module.component';

describe('LogModuleComponent', () => {
  let component: LogModuleComponent;
  let fixture: ComponentFixture<LogModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogModuleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
