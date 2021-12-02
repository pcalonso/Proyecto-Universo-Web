import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonahttpComponent } from './donahttp.component';

describe('DonahttpComponent', () => {
  let component: DonahttpComponent;
  let fixture: ComponentFixture<DonahttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonahttpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonahttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
