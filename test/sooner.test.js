import sooner from '../sooner.js';
import test from 'ava';

test('输出格式验证', t => {
  t.is(typeof sooner(2017,4,20), 'object');
});

test('输出含有天', t => {
  t.truthy(Object.keys(sooner(2017,4,20)).includes('rday'));
});

test('输出含有小时', t => {
  t.truthy(Object.keys(sooner(2017,4,20)).includes('rhour'));
});

test('输出含有分钟', t => {
  t.truthy(Object.keys(sooner(2017,4,20)).includes('rmin'));
});

test('输出含有秒', t => {
  t.truthy(Object.keys(sooner(2017,4,20)).includes('rsecs'));
});
