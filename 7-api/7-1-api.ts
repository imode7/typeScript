Array;

type Student = {
  passed: boolean;
};

const students: Student[] = [
  { passed: true },
  { passed: true },
  { passed: false },
];

const result = students.every((student) => student.passed);

class Animal {}
class Cat extends Animal {
  isCat: boolean = true;
}

const animals: Animal[] = [new Cat(), new Cat(), new Cat()];
console.log("animals: ", animals);
function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isCat !== undefined;
}
animals.every<Cat>(isCat);
