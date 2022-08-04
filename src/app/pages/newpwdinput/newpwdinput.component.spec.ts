import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewpwdinputComponent } from './newpwdinput.component';

describe('NewpwdinputComponent', () => {
  let component: NewpwdinputComponent;
  let fixture: ComponentFixture<NewpwdinputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewpwdinputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewpwdinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
