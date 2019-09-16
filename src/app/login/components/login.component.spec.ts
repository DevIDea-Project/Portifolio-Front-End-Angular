import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortifolioComponent } from './login.component';

describe('PortifolioComponent', () => {
  let component: PortifolioComponent;
  let fixture: ComponentFixture<PortifolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortifolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortifolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
