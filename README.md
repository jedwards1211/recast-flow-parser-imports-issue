`npm install` and `npm test`.

The failing test will output:

```
  1) issue with recast, flow-parser and adding import specifiers

  0 passing (185ms)
  1 failing

  1) issue with recast, flow-parser and adding import specifiers:

      AssertionError: expected 'import { foo, bar } from \'foo\';' to equal 'import { type foo, bar } from \'foo\';'
      + expected - actual

      -import { foo, bar } from 'foo';
      +import { type foo, bar } from 'foo';
      
      at Context.<anonymous> (index.js:17:37)
      at processImmediate (internal/timers.js:456:21)
```
