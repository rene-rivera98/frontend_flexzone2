/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Edit_userService } from './edit_user.service';

describe('Service: Edit_user', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Edit_userService]
    });
  });

  it('should ...', inject([Edit_userService], (service: Edit_userService) => {
    expect(service).toBeTruthy();
  }));
});
