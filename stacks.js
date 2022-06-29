class Stack {
    constructor() {
        this.data = [];
    }

    push(value) {
        this.data.push(value);
    }

    pop() {
        return this.data.pop();
    }

    size() {
        return this.data.length;
    }
}

const stackOfPlates = new Stack();

stackOfPlates.push('plate 1');
stackOfPlates.push('plate 2');
stackOfPlates.push('plate 3');

stackOfPlates.pop();  // 'plate 3'
stackOfPlates.pop();  // 'plate 2'

stackOfPlates.push('plate 4');

stackOfPlates.pop();  // 'plate 4'
stackOfPlates.pop();  // 'plate 1'

stackOfPlates.pop();  // undefined
