import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VwThanksComponent } from './vw-thanks.component';

describe('VwThanksComponent', () => {
  let component: VwThanksComponent;
  let fixture: ComponentFixture<VwThanksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VwThanksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VwThanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
