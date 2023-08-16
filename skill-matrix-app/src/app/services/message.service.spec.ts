import { TestBed } from '@angular/core/testing';

import { MessageService } from './message.service';

describe('MessageService', () => {
  let service: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be only one message after calling #add once', () => {
    const message = 'Message';
    service.add(message);
    expect(service.messages.length).toBe(1);
  });

  it('should be no messages after calling #clear', () => {
    service.add('Message#1');
    service.add('Message#2');
    service.add('Message#3');
    service.clear();
    expect(service.messages.length).toBe(0);
  });

  it('should have specific message after calling #add', () => {
    const message = 'Specific message!';
    service.add(message);
    expect(service.messages[0]).toBe(message);
  });

  it('should send notification', () => {
    const spy = spyOn(service, 'add');
    const message = 'There has been an error';
    service.add(message);
    expect(spy).toHaveBeenCalledWith(message);
  });
});
