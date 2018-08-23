import { async, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';

// do not import any other than you test. For others, mock it
import { ThreeComponent } from './three.component';
import { DataService } from '../services';
import { MockComponent, MockPipe } from '../../../test-mock';

describe('ThreeComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ThreeComponent,
        MockPipe('square')
      ],
      providers: [{provide: DataService, useValue: {getData: () => Observable.of(15)}}]
    }).compileComponents();
  }));

  it('should create ThreeComponent instance', async(done => {
    const fixture = TestBed.createComponent(ThreeComponent);
    const comp = fixture.debugElement.componentInstance;

    expect(comp).toBeTruthy();
  }));

  it('public property "value" should be equal to 15', async(() => {
    const fixture = TestBed.createComponent(ThreeComponent);
    fixture.detectChanges();
    const instance = fixture.componentInstance;

    expect(instance.value).toEqual(15);
  }));

  it('should have a value 15 rendered in the UI', async(() => {
    const fixture = TestBed.createComponent(ThreeComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('#data-container').textContent).toContain('15');
  }));
});
