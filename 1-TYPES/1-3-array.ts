{
  // Array
  const fruits: string[] = ["tomato", "banana"]; // => object의 불변성을 보장하기 위해(일관성있게 코드짜기위해)
  const scores: Array<number> = [1, 3, 4];
  function printArray(fruits: readonly string[]) {}

  /**
   * Tuple (배열이긴 배열인데 서로 다른 타입을 함께 가질 수 있는 배열)
   * -> interface, type alias, class(이걸로 대체하는게 나음)
   * 추천하지않음 => 가독성이 떨어짐
   * */
  let student: [string, number];
  student = ["name", 123];
  student[0]; // name
  student[1]; // 123
  // 이걸 그나마 대체하려면
  const [name, age] = student;
}
