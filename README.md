# tiny-conf-plugin-argv

Will store content of `process.argv` to the given `tiny-conf` store

### Usage
```js
const conf = require('tiny-conf');

require('tiny-conf-plugin-argv')(conf);
```


### Example
Calling your app like this:
```sh
node /path/to/your/app.js --foo=bar --no-log --one.two tree
```
With `/path/to/your/app.js`:
```js
const conf = require('tiny-conf');
require('tiny-conf-plugin-argv')(conf);

// it will load argv params in store:
conf.get('foo'); // 'bar'
conf.get('log'); // false
conf.get('one.two'); // 'three'
```
