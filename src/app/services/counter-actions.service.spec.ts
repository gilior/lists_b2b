import { TestBed } from '@angular/core/testing';

import { CounterActionsService } from './counter-actions.service';

describe('CounterActionsService', () => {
  let service: CounterActionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CounterActionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
