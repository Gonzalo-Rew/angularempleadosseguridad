import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu-component';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuComponent],
      imports: [RouterModule.forRoot([])],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
