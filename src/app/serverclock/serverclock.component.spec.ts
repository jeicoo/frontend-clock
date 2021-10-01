import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerclockComponent } from './serverclock.component';

describe('ServerclockComponent', () => {
  let component: ServerclockComponent;
  let fixture: ComponentFixture<ServerclockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerclockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerclockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
