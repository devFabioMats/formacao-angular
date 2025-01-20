import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { CursosGuard } from './cursos.guard';

describe('CursosGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => CursosGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
