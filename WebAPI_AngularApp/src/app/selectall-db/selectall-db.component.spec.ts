import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectallDBComponent } from './selectall-db.component';

describe('SelectallDBComponent', () => {
  let component: SelectallDBComponent;
  let fixture: ComponentFixture<SelectallDBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectallDBComponent]
    });
    fixture = TestBed.createComponent(SelectallDBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
