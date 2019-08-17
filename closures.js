const createCounter = () => {
  let count = 0;

  return {
    increment() {
      count++;
    },
    decrement() {
      count--;
    },
    get() {
      return count;
    }
  };
};

const counter = createCounter();

counter.increment();
counter.decrement();
counter.decrement();

console.log(counter.get());

//Adder

const createAdder = a => {
  return b => {
    return a + b;
  };
};

const add10 = createAdder(10);
console.log(add10(-2)); // turns into 8
console.log(add10(20)); // turns into 30
console.log(createAdder(10)(-2));
