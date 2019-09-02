/* You are given a tree. Write a function to check if it is a valid binary search tree. A tree is
 * a valid binary search tree if it satisfies the following constraints:
 *      at any given node, the value of all the nodes in its left tree must be < its value
 *      at any given node, the value of all the nodes in its right tree must be > its value
 * Assume that each value in the tree is unique.
 */


function BinaryTree(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}

function validBST(tree) {
    if (tree.left !== null && tree.left.value >= tree.value) return false;
    if (tree.right !== null && tree.right.value <= tree.value) return false;
    if (tree.left === null && tree.right !== null) {
        if (tree.right.value > tree.value) return validBST(tree.right)
        else return false
    }
    if (tree.right === null && tree.left !== null) {
        if (tree.left.value < tree.value) return validBST(tree.left)
        else return false
    }
    else if (tree.right === null && tree.left === null) { return true }
    else {
        if (tree.left.value < tree.value && tree.right.value > tree.value) {
            return validBST(tree.left) && validBST(tree.right)
        }
    }
}


// const bst = new BinaryTree(10);
// const goodleft = new BinaryTree(8);
// bst.left = goodleft;
// bst.right = new BinaryTree(12);
// goodleft.left = new BinaryTree(100)

// const badbst = new BinaryTree(10);
// badbst.left = new BinaryTree(13);
// badbst.right = new BinaryTree(12);

// console.log(validBST(bst))
// console.log(validBST(badbst))

module.exports = { BinaryTree: BinaryTree, validBST: validBST };
