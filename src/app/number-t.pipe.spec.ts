import { NumberTPipe } from './number-t.pipe';

describe('NumberTPipe', () => {
  it('create an instance', () => {
    const pipe = new NumberTPipe();
    expect(pipe).toBeTruthy();
  });
});
