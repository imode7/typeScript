/**
 * 단일연결리스트를 사용
 * => head라는 것이 있음. head에 할당된 아이들을 이용해서 아이템을 찾아감
 */
interface Stack {
  readonly size: number;
  push(value: string): void;
  pop(): string;
}

// 한단계 감싼다면 불멸성을 유지해야함(readonly)
type StackNode = {
  readonly value: string;
  readonly next?: StackNode;
};

class StackImpl implements Stack {
  private _size: number = 0;
  private head?: StackNode;

  constructor(private capacity: number) {}

  get size() {
    return this._size;
  }
  push(value: string): void {
    if (this.size === this.capacity) {
      throw new Error("Stack is full");
    }
    const node: StackNode = {
      value,
      next: this.head,
    };
    this.head = node;
    this._size++;
  }
  pop(): string {
    if (this.head == null) {
      throw new Error("Stack is empty");
    }
    const node = this.head;
    this.head = node.next;
    this._size--;
    return node.value;
  }
}

const stack = new StackImpl(10);
stack.push("Ellie 1");
stack.push("Bob 2");
stack.push("Steve 3");
while (stack.size !== 0) {
  console.log(stack.pop());
}

stack.pop();
