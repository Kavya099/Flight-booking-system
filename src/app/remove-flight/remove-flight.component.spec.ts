import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveFlightComponent } from './remove-flight.component';

describe('RemoveFlightComponent', () => {
  let component: RemoveFlightComponent;
  let fixture: ComponentFixture<RemoveFlightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RemoveFlightComponent]
    });
    fixture = TestBed.createComponent(RemoveFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
