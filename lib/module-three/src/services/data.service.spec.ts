import { async, TestBed } from '@angular/core/testing';
import { DataService } from './data.service';

describe('Service: DataService', () => {
  let service: DataService;

  beforeEach(() => {
    service = new DataService();
  });

  it('should be equal to 15', async(() => {
    service.getData().subscribe((r: number) => {
      expect(r).toEqual(15);
    });
  }));
});
