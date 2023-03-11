import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpaddeditcomponentComponent } from './empaddeditcomponent.component';

describe('EmpaddeditcomponentComponent', () => {
  let component: EmpaddeditcomponentComponent;
  let fixture: ComponentFixture<EmpaddeditcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpaddeditcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpaddeditcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
