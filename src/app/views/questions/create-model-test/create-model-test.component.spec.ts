import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateModelTestComponent } from './create-model-test.component';

describe('CreateModelTestComponent', () => {
  let component: CreateModelTestComponent;
  let fixture: ComponentFixture<CreateModelTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateModelTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateModelTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
