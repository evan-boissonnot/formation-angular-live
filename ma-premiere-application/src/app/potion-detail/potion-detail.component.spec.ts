import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PotionDetailComponent } from './potion-detail.component';

describe('PotionDetailComponent', () => {
  let component: PotionDetailComponent;
  let fixture: ComponentFixture<PotionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PotionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PotionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
