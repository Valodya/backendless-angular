import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionsCounterComponent } from './connections-counter.component';

describe('ConnectionsCounterComponent', () => {
  let component: ConnectionsCounterComponent;
  let fixture: ComponentFixture<ConnectionsCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectionsCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectionsCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
