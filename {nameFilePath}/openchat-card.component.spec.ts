import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloTestComponent } from './hello-test.component';

describe('HelloTestComponent', () => {
  let component: HelloTestComponent;
  let fixture: ComponentFixture<HelloTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});