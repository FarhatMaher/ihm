import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtobacklogComponent } from './addtobacklog.component';

describe('AddtobacklogComponent', () => {
  let component: AddtobacklogComponent;
  let fixture: ComponentFixture<AddtobacklogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtobacklogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtobacklogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
