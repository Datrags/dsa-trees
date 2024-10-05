/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (!this.root) return 0;

    let sum = 0;
    let toVisitStack = [this.root];
    while (toVisitStack.length) {
      let curr = toVisitStack.pop();
      sum += curr.val;

      if (curr.children) {
        for (let child of curr.children)
          toVisitStack.push(child)
      }

    }
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) return 0;

    let count = 0;
    let toVisitStack = [this.root];
    while (toVisitStack.length) {
      let curr = toVisitStack.shift();
      if (curr.val % 2 == 0) count += 1;
      for (let child of curr.children)
        toVisitStack.push(child)
    }

    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) return 0;

    let count = 0;
    let toVisitStack = [this.root];
    while (toVisitStack.length) {
      let curr = toVisitStack.pop();
      if (curr.val > lowerBound) count += 1;
      for (let child of curr.children)
        toVisitStack.push(child)
    }

    return count;
  }
}

let n = new TreeNode(1);
let n2 = new TreeNode(2);
let n3 = new TreeNode(3);
let n4 = new TreeNode(4);
let n5 = new TreeNode(5);
let n6 = new TreeNode(6);
let n7 = new TreeNode(7);
let n8 = new TreeNode(8);

n.children = [n2, n3, n4];

n4.children.push(n5, n6);
n6.children.push(n7);
n7.children.push(n8);

largeTree = new Tree(n);

console.log(largeTree.sumValues())
module.exports = { Tree, TreeNode };
