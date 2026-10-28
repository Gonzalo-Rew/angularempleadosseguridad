import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubordinadosComponent } from './subordinados-component';
import { EmpleadosService } from '../../services/empleados.service';

describe('SubordinadosComponent', () => {
  let component: SubordinadosComponent;
  let fixture: ComponentFixture<SubordinadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubordinadosComponent],
      providers: [EmpleadosService],
    }).compileComponents();

    fixture = TestBed.createComponent(SubordinadosComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
