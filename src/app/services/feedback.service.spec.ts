import {TestBed , inject} from '@angular/core/testing';

import {FeedbackService} from './feedback.service';

describe('FeedbackService' , () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeedbackService]
    });
  });

  it('should be created' , inject([FeedbackService] , (service: FeedbackService) => {
    expect(service).toBeTruthy();
  }));
});
