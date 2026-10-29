import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EjemploSignalComponent } from './ejemplo-signal-component';

describe('EjemploSignalComponent', () => {
  let component: EjemploSignalComponent;
  let fixture: ComponentFixture<EjemploSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EjemploSignalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EjemploSignalComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
