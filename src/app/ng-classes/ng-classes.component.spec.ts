import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgClassesComponent } from './ng-classes.component';

describe('NgClassesComponent', () => {
  let component: NgClassesComponent;
  let fixture: ComponentFixture<NgClassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgClassesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
