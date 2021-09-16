// Common ancestor (60 mins)

// Write a function that takes two nodes of a tree and returns the
// closest common ancestor, or returns null if there isn't any.
// It should also handle edge cases, for example when either of the
// nodes is the tree itself, or both nodes are the same. For example:
//


function Tree (value) {
  this.children = [];
  this.value = value;
}

Tree.prototype.addChild = function (node) {
  if (!this.isDescendant(node)) this.children.push(node);
  else throw new Error(`The node "${node.value}" already exists in this tree`);
  return this;
};

Tree.prototype.isDescendant = function (node) {
  if (this.children.indexOf(node) !== -1) return true; // "node" is an immediate child of this tree
  else {
    for (let i = 0; i < this.children.length; i++) {
      if (this.children[i].isDescendant(node)) return true; // "node" is descendant of this tree
    }
    return false;
  }
};

Tree.prototype.commonAncestor = function (node1, node2) {
  if (this.isDescendant(node1) && this.isDescendant(node2)) {
    for (let i in this.children) {
      let nodeParent= this.children[i].commonAncestor(node1, node2);

      if (nodeParent) {
        return nodeParent;
      } else {
        return this.value;
      }
    }
  } else {
    return null;
  }
};

let grandma = new Tree('grandma');
let me= new Tree('me');
let son= new Tree('son');
let mom = new Tree('mom');
let aunt = new Tree('ant');
grandma.addChild(mom);
grandma.addChild(aunt);
mom.addChild(me);
me.addChild(son);

console.log(grandma.commonAncestor(mom, aunt))
