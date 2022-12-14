{
  /***
   * JavaScript
   * Primitive: number, string, boolean, bigint, symbol, null, undefined
   * Object: function, array.....
   */

  // number
  const num: number = -6;

  // string
  const str: string = "hello";

  // boolean
  const boal: boolean = false;

  // undefined
  let name: undefined; // ๐ฉ
  let age: number | undefined; // => null ๋ณด๋ค๋ undefined๋ฅผ ๋ง์ด ์
  age = undefined;
  age = 1;
  function find(): number | undefined {
    return undefined;
  }

  // null
  let person: null; // ๐ฉ
  let person2: string | null;

  // unknown ๐ฉ(๊ฐ๋ฅํ๋ฉด ์ฐ์ง ์๋๊ฒ ์ข์)
  let notSure: unknown = 0;
  notSure = "he";
  notSure = true;

  // any ๐ฉ
  let anything: any = 0;
  anything = "hello";

  // void
  function print(): void {
    console.log("hello");
    return;
  }
  let unusable: void = undefined; // ๐ฉ

  // never
  function throwError(message: string): never {
    // message -> server (log)
    throw new Error(message);
    while (true) {}
  }
  let neverEnding: never; // ๐ฉ

  // object
  let obj: object; // ๐ฉ
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "ellie" });
  acceptSomeObject({ animal: "dog" });
}
