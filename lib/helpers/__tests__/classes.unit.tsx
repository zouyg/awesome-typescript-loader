import classes from "../classes";

describe('classes', () => {
  it('接受一个 className', () => {
    const result = classes('a');
    expect(result).toEqual('a')
  })
  it('接受2个 className', () => {
    const result = classes('a', 'b');
    expect(result).toEqual('a b')
  })
  it('接受undefined 返回值会过滤掉undefined', () => {
    const result = classes('a', undefined);
    expect(result).toEqual('a')
  })
})