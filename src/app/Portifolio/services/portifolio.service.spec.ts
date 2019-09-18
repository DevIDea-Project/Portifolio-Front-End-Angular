import { TestBed } from '@angular/core/testing';

import { LoginService } from './portifolio.service';

describe('PortifolioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginService = TestBed.get(LoginService);
    expect(service).toBeTruthy();
  });
});
