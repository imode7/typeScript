{
  /**
   * Type Assertions 💩
   */
  function jsStrFunc(): any {
    return 2;
  }
  const result = jsStrFunc();
  console.log((result as string).length);
  console.log((<string>result).length);

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(5)); // 😱

  function findNumbers(): number[] | undefined {
    return undefined;
  }

  // 느낌표는 아래나 위 둘다 하나에만 써도 됨
  const numbers = findNumbers()!;
  numbers!.push(2); // 장담한다는 의미

  const button = document.querySelector("class")!;
}
