/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node(value) {
    this.value = value;
    this.next = null;
}

function reverseLinkedList(head) {
    if (!head) {return} //if 0 elements in LL
    let save = head;
    if (!head.next) { //if 1 element in LL
        head = null;
        return save
    }
    //first pass
    save = head;
    let curr = head.next;
    save.next = null; //head now points to null
    if (!curr.next) { //if only two elements in LL
        curr.next = save;
        return curr;
    }
    let future; //else if 3+ elementes in LL
    while (curr.next) {
        future = curr.next; //save future
        curr.next = save; //curr's next is now the saved node
        save = curr; //save is now the curr node (which points to the previous save)
        curr = future; //curr finds the future
    }
    curr.next = save;
    head = head.next
    return curr;
}

// const LL = new Node(1);
// let curr = LL;
// for (let i=2; i<6; i++) {
//     curr.next = new Node(i)
//     curr = curr.next;    
// }
// console.log(LL)
// curr = LL;
// while (curr.next) {
//     console.log(curr.next)
//     curr = curr.next
// }

// reverseLinkedList(LL)


module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
