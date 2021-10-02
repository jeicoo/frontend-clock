import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManilaclockComponent } from './manilaclock.component';

describe('ManilaclockComponent', () => {
  let component: ManilaclockComponent;
  let fixture: ComponentFixture<ManilaclockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManilaclockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManilaclockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
