import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeEach(() => {
    service = new AppService();
  });

  describe('getHello', () => {
    it('should return a string', () => {
      expect(service.getHello()).toBe('Hello World!');
    });
  });
});
