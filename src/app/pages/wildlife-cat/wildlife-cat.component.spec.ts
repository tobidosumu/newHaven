import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WildlifeCatComponent } from './wildlife-cat.component';

describe('WildlifeCatComponent', () => {
  let component: WildlifeCatComponent;
  let fixture: ComponentFixture<WildlifeCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WildlifeCatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WildlifeCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
