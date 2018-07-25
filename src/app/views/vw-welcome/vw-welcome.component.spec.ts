import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VwWelcomeComponent } from './vw-welcome.component';

describe('VwWelcomeComponent', () => {
  let component: VwWelcomeComponent;
  let fixture: ComponentFixture<VwWelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VwWelcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VwWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
