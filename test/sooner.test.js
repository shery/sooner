import sooner from '../sooner.js';
import test from 'ava';

test('输出格式验证', t => {
  t.is(typeof sooner(2017,4,20), 'object');
});
