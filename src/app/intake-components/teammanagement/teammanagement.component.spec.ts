import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeammanagementComponent } from './teammanagement.component';

describe('TeammanagementComponent', () => {
  let component: TeammanagementComponent;
  let fixture: ComponentFixture<TeammanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeammanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeammanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
