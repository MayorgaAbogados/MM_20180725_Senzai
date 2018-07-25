import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VwExamComponent } from './vw-exam.component';

describe('VwExamComponent', () => {
  let component: VwExamComponent;
  let fixture: ComponentFixture<VwExamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VwExamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VwExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
