import { IsNullValuePipe } from './is-website.pipe';

describe('IsWebsitePipe', () => {
  it('create an instance', () => {
    const pipe = new IsNullValuePipe();
    expect(pipe).toBeTruthy();
  });
});
