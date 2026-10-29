import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthGuard } from './auth-guard';
import { AuthService } from '../services/auth.service';

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        {
          provide: AuthService,
          useValue: { hasValidToken: () => true },
        },
        {
          provide: Router,
          useValue: { createUrlTree: () => ({}) },
        },
      ],
    });
  });

  it('should allow authenticated users', () => {
    const guard = TestBed.inject(AuthGuard);

    expect(guard.canActivate({} as never, {} as never)).toBe(true);
  });

  it('should redirect unauthenticated users to login', () => {
    const router = TestBed.inject(Router);
    const loginUrlTree = {};
    vi.spyOn(router, 'createUrlTree').mockReturnValue(loginUrlTree as never);
    TestBed.inject(AuthService).hasValidToken = () => false;

    expect(
      TestBed.inject(AuthGuard).canActivate({} as never, { url: '/perfil' } as never),
    ).toBe(loginUrlTree);
    expect(router.createUrlTree).toHaveBeenCalledWith(['/login'], {
      queryParams: { returnUrl: '/perfil' },
    });
  });
});
