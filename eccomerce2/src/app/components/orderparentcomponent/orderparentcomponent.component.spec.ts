import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderparentcomponentComponent } from './orderparentcomponent.component';

describe('OrderparentcomponentComponent', () => {
  let component: OrderparentcomponentComponent;
  let fixture: ComponentFixture<OrderparentcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderparentcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderparentcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
