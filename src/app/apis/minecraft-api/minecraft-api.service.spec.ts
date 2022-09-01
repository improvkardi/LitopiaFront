import { TestBed } from '@angular/core/testing';

import { MinecraftApiService } from './minecraft-api.service';

describe('MinecraftApiService', () => {
  let service: MinecraftApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MinecraftApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
