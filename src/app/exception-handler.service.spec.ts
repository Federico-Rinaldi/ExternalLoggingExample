/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ExceptionHandlerService } from './exception-handler.service';

describe('Service: ExceptionHandler', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExceptionHandlerService]
    });
  });

  it('should ...', inject([ExceptionHandlerService], (service: ExceptionHandlerService) => {
    expect(service).toBeTruthy();
  }));
});
