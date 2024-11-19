import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SilviaComponent } from './silvia.component';

describe('SilviaComponent', () => {
  let component: SilviaComponent;
  let fixture: ComponentFixture<SilviaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SilviaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SilviaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
