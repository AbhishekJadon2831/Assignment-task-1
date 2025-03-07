//// Q=1

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

let a = new Node(1);
let b = new Node(2);
let c = new Node(2);
let d = new Node(1);

a.next = b;
b.next = c;
c.next = d;

let head = a;

function isPalindrome(head) {
    if (!head || !head.next) return true;

    let slow = head, fast = head;

    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }

    let prev = null;
    while (slow) {
        let nextNode = slow.next;
        slow.next = prev;
        prev = slow;
        slow = nextNode;
    }
    let left = head, right = prev;
    while (right) {  
        if (left.data !== right.data) return false;
        left = left.next;
        right = right.next;
    }

    return true;
}

console.log(isPalindrome(head)); 



////Q=2

// class ListNode {
//     constructor(val) {
//         this.val = val;
//         this.next = null;
//     }
// }

// function getIntersectionNode(headA, headB) {
//     if (!headA || !headB) return null;

//     let p1 = headA, p2 = headB;

//     while (p1 !== p2) {
//         p1 = p1 ? p1.next : headB; 
//         p2 = p2 ? p2.next : headA; 
//     }

//     return p1.val; 
// }

// let a1 = new ListNode(4);
// let a2 = new ListNode(1);
// let c1 = new ListNode(8);
// let c2 = new ListNode(4);
// let c3 = new ListNode(5);

// a1.next = a2;
// a2.next = c1;
// c1.next = c2;
// c2.next = c3;

// let b1 = new ListNode(5);
// let b2 = new ListNode(6);
// let b3 = new ListNode(1);

// b1.next = b2;
// b2.next = b3;
// b3.next = c1;

// console.log(getIntersectionNode(a1, b1)); 