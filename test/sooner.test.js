import sooner from '../sooner.js';
import { expect } from 'chai';

describe('倒计时函数测试', function() {
  it('输出格式验证', function() {
    expect(sooner(2017, 4, 16)).to.be.an('object');
  });
});
