import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondChipsComponent } from './second-chips.component';

describe('SecondChipsComponent', () => {
  let component: SecondChipsComponent;
  let fixture: ComponentFixture<SecondChipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondChipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
