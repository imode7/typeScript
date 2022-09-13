{
  /**
   * Type Inference
   * => 엘리는 좋지 않다고 생각함 => 간단한 코드만 쓰이는 일은 거의 없으므로
   */
  let text = "hello";
  function print(message = "hello") {
    console.log(message);
  }

  print("hello");

  function add(x: number, y: number) {
    return x + y;
  }
  const result = add(1, 2);
}
