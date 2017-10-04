class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }

  setNext (element) {
    this.next = element;
  }
}

class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  head () {
    return this.head;
  }

  size () {
    return this.length;
  }

  add (element) {
    const node = new Node(element);

    if (this.head !== null) {
      let currentNode = head;

      while(currentNode.next){
        currentNode = currentNode.next;
      }

      currentNode.setNext(node);
    } else {
      this.head = node;
    }

    this.length += 1;
  }

  remove (element) {
    if (this.head === element) {
      this.head = this.head.next;
      return;
    }

    let currentNode = this.head;
    let previousNode;

    while (currentNode.element !== element) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    previousNode.next = currentNode.next;

    this.length -= 1;
  }

  isEmpty () {
    return this.head === null;
  }
}
