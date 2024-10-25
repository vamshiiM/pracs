//generator are a type of funtion that can pause its execution and later resume it 

// generators have a syntax function*

function* gen(){
   for(let i = 0; i<10 ;i++){
    yield i
   }
}

const Gen = gen();

console.log(Gen.next());
console.log(Gen.next());
console.log(Gen.next());


/// iterators 

const createNumberIterator = (start, end) => {
   let current = start;
   return {
       next() {
           if (current <= end) {
               return { value: current++, done: false };
           } else {
               return { value: undefined, done: true };
           }
       }
   };
};

const numberIterator = createNumberIterator(1, 5);
console.log(numberIterator.next()); // { value: 1, done: false }
console.log(numberIterator.next()); // { value: 2, done: false }
console.log(numberIterator.next()); // { value: 3, done: false }
console.log(numberIterator.next()); // { value: 4, done: false }
console.log(numberIterator.next()); // { value: 5, done: false }
console.log(numberIterator.next()); // { value: undefined, done: true }

