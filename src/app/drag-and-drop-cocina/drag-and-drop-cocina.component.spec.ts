import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragAndDropCocinaComponent } from './drag-and-drop-cocina.component';

describe('DragAndDropCocinaComponent', () => {
  let component: DragAndDropCocinaComponent;
  let fixture: ComponentFixture<DragAndDropCocinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragAndDropCocinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragAndDropCocinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
