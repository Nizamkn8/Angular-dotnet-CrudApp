import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDetailsWithIdComponent } from './select-details-with-id.component';

describe('SelectDetailsWithIdComponent', () => {
  let component: SelectDetailsWithIdComponent;
  let fixture: ComponentFixture<SelectDetailsWithIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectDetailsWithIdComponent]
    });
    fixture = TestBed.createComponent(SelectDetailsWithIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
