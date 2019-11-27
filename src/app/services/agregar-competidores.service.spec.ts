import { TestBed } from '@angular/core/testing';

import { AgregarCompetidoresService } from './agregar-competidores.service';

describe('AgregarCompetidoresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AgregarCompetidoresService = TestBed.get(AgregarCompetidoresService);
    expect(service).toBeTruthy();
  });
});
