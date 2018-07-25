import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VwPersonalInfoComponent } from './vw-personal-info.component';

describe('VwPersonalInfoComponent', () => {
  let component: VwPersonalInfoComponent;
  let fixture: ComponentFixture<VwPersonalInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VwPersonalInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VwPersonalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
