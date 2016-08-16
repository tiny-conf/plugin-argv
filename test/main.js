'use strict';

const expect = require('expect');
const conf = require('tiny-conf');
const confArgv = require('../tiny-conf-plugin-argv');

describe('main tests', function () {

  beforeEach(function () {
    conf.clear();
  });

  it('should parse common string argument from process.argv', function () {
    process.argv = ['/fake/node', '/fake/mocha'];
    process.argv.push('--foo=bar');
    confArgv(conf);

    expect(conf.get('foo')).toEqual('bar');
  });

  it('should parse multiple common string arguments from process.argv', function () {
    process.argv = ['/fake/node', '/fake/mocha'];
    process.argv.push('--foo=bar');
    process.argv.push('--baz=beep');
    process.argv.push('--bleep=bloop');
    process.argv.push('--bleep=blap');
    confArgv(conf);

    expect(conf.get('foo')).toEqual('bar');
    expect(conf.get('baz')).toEqual('beep');
    expect(conf.get('bleep')).toEqual(['bloop', 'blap']);
  });
});
