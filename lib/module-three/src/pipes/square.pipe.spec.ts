import { async, TestBed } from '@angular/core/testing';
import { SquarePipe } from './square.pipe';

describe('Pipe: SquarePipe', () => {
    let pipe: SquarePipe;

    beforeEach(() => {
      pipe = new SquarePipe();
    });

    it('should be equal to 121', async(() => {
        expect(pipe.transform(11)).toEqual(121);
    }));
});
