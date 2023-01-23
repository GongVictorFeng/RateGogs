import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkBoardComponent } from './mark-board.component';

describe('MarkBoardComponent', () => {
  let component: MarkBoardComponent;
  let fixture: ComponentFixture<MarkBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarkBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarkBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
