import add from './add';
import multiply from './multiply';

const addAll = (a: number, b: number): void => {
  console.log(a + b);
};

addAll(add(1, 4), multiply(3, 4));
