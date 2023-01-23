import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogShowComponent } from './dog-show.component';

describe('DogShowComponent', () => {
  let component: DogShowComponent;
  let fixture: ComponentFixture<DogShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogShowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
