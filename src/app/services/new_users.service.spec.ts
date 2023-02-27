/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { New_usersService } from './new_users.service';

describe('Service: New_users', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [New_usersService]
    });
  });

  it('should ...', inject([New_usersService], (service: New_usersService) => {
    expect(service).toBeTruthy();
  }));
});
