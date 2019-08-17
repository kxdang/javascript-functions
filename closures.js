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

// console.log(counter.get());

//Adder
const add = (a, b) => a + b; //standard version curried version

const createAdder = a => {
  return b => {
    return a + b;
  };
};

const add10 = createAdder(10);
// console.log(add10(-2)); // turns into 8
// console.log(add10(20)); // turns into 30
// console.log(createAdder(10)(-2)); //turns into 8

// Tipper

const createTipper = baseTip => {
  return billAmount => {
    return billAmount * baseTip;
  };
};

const tip15 = createTipper(0.15);
const tip20 = createTipper(0.2);

console.log(tip15(100));
console.log(tip20(200));
