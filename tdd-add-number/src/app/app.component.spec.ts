
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppComponent
      ],
    }).compileComponents();
  });


  it('should return 0 for an empty string', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.add('')).toBe(0);
  });

  it('should return the number itself for a single number', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.add('1')).toBe(1);
  });

  it('should return the sum of two numbers', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.add('1,2')).toBe(3);
  });

  it('should return the sum of multiple numbers', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.add('1,2,3,4')).toBe(10);
  });

  it('should handle new lines between numbers', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.add('1\n2,3')).toBe(6);
  });

  it('should support different delimiters', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.add('//;\n1;2')).toBe(3);
  });

  it('should throw an exception for negative numbers', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(() => app.add('1,-2,3')).toThrow(new Error('negative numbers not allowed -2'));
  });

  it('should throw an exception for multiple negative numbers', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(() => app.add('1,-2,-3')).toThrow(new Error('negative numbers not allowed -2,-3'));
  });
});