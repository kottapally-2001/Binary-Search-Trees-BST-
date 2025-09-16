//Node
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

//BST
class BST {
  constructor() {
    this.root = null;
  }

  //Build
  build(arr) {
    const sorted = [...new Set(arr.sort((a, b) => a - b))];
    this.root = this._build(sorted);
  }

  _build(arr) {
    if (!arr.length) return null;
    const mid = Math.floor(arr.length / 2);
    const node = new Node(arr[mid]);
    node.left = this._build(arr.slice(0, mid));
    node.right = this._build(arr.slice(mid + 1));
    return node;
  }

  //Add
  add(value, node = this.root) {
    if (!node) return (this.root = new Node(value));
    if (value < node.value) {
      node.left ? this.add(value, node.left) : (node.left = new Node(value));
    } else if (value > node.value) {
      node.right ? this.add(value, node.right) : (node.right = new Node(value));
    }
  }

  //Traversals
  inOrder(node = this.root) {
    if (!node) return [];
    return [...this.inOrder(node.left), node.value, ...this.inOrder(node.right)];
  }

  preOrder(node = this.root) {
    if (!node) return [];
    return [node.value, ...this.preOrder(node.left), ...this.preOrder(node.right)];
  }

  postOrder(node = this.root) {
    if (!node) return [];
    return [...this.postOrder(node.left), ...this.postOrder(node.right), node.value];
  }

  levelOrder() {
    if (!this.root) return [];
    const res = [], q = [this.root];
    while (q.length) {
      const n = q.shift();
      res.push(n.value);
      if (n.left) q.push(n.left);
      if (n.right) q.push(n.right);
    }
    return res;
  }
}

//Print 
const bst = new BST();
bst.build([7, 3, 1, 5, 9, 2, 8, 5, 3, 12]);
bst.add(14);
bst.add(13);
bst.add(15);

console.log("In-order:", bst.inOrder());
console.log("Pre-order:", bst.preOrder());
console.log("Post-order:", bst.postOrder());
console.log("Level-order:", bst.levelOrder());
