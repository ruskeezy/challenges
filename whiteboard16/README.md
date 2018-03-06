![CF](https://camo.githubusercontent.com/70edab54bba80edb7493cad3135e9606781cbb6b/687474703a2f2f692e696d6775722e636f6d2f377635415363382e706e67) 16: Whiteboard Challenge
===

## Requirements
Create a function that accepts a queue and an "add" as it's input.  Your function should enqueue the provided value. The length property on your queue should also be updated to reflect the addition.

```javascript
// given the following:

const queue = {
  0: 'apple',
  1: 'pear',
  2: 'banana',
  next: 0,
  length: 3
}

addItem(queue, 'kiwi');

// return the following:

{
  0: 'apple',
  1: 'pear',
  2: 'banana',
  3: 'kiwi'
  next: 0,
  length: 4
}
```
