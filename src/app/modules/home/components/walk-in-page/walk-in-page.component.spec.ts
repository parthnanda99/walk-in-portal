import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkInPageComponent } from './walk-in-page.component';

describe('WalkInPageComponent', () => {
  let component: WalkInPageComponent;
  let fixture: ComponentFixture<WalkInPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalkInPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WalkInPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
