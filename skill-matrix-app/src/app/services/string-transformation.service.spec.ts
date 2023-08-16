import { TestBed } from '@angular/core/testing';

import { StringTransformationService } from './string-transformation.service';

describe('StringTransformationService', () => {
  let service: StringTransformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StringTransformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#toUpperCase() should return string in upper case', () => {
    expect(service.toUpperCase('message')).toBe('MESSAGE');
  });

  it('#toLowerCase() should return string in lower case', () => {
    expect(service.toLowerCase('MeSsAgE')).toBe('message');
  });
});
