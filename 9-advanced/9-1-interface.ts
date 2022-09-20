type PositionType = {
  x: number;
  y: number;
};
interface PositionInterface {
  x: number;
  y: number;
}

interface PositionInterface {
  z: number;
}

// 둘다 가능한것(object 형태) 🎇
const obj1: PositionType = {
  x: 1,
  y: 1,
};

const obj2: PositionInterface = {
  x: 1,
  y: 1,
  z: 9,
};

// class(클래스에서 구현가능) 🎇
class Pos1 implements PositionType {
  x: number;
  y: number;
}
class Pos2 implements PositionInterface {
  x: number;
  y: number;
  z: number;
}

// Extends
interface ZpositionInterface extends PositionInterface {
  z: number;
}
type ZpositionType = PositionType & { z: number };

// 😆 only interfaces can be merged.
interface PositionInterface {
  z: number;
}

// type PositionType {}

// 😆 Type aliases can use computed properties
type Person = {
  name: string;
  age: number;
};
type Name = Person["name"]; // string

type NumberType = number;
type Direction = "left" | "right";
