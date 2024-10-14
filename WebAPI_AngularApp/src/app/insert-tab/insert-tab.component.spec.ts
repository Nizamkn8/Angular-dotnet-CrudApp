import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertTabComponent } from './insert-tab.component';

describe('InsertTabComponent', () => {
  let component: InsertTabComponent;
  let fixture: ComponentFixture<InsertTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsertTabComponent]
    });
    fixture = TestBed.createComponent(InsertTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
