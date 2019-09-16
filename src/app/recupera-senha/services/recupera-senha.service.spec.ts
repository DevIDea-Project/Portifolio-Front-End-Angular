import { TestBed } from '@angular/core/testing';

import { RecuperaSenhaService } from './recupera-senha.service';

describe('RecuperaSenhaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecuperaSenhaService = TestBed.get(RecuperaSenhaService);
    expect(service).toBeTruthy();
  });
});
