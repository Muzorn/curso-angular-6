import { TestBed } from '@angular/core/testing';

import { ResultadosServiceService } from './resultados-service.service';

describe('ResultadosServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResultadosServiceService = TestBed.get(ResultadosServiceService);
    expect(service).toBeTruthy();
  });
});
