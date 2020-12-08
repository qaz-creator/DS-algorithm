// 1. construct nodeList
class nodeList {
    constructor(val = null, next = null) {
      this.val = val
      this.next = next
    }
  }
  
  const mergeTwoLists = (l1, l2) => {
    let head = new nodeList(-1)
    let dummy = head
  
    while (l1 !== null && l2 !== null) {
      if (l1.val <= l2.val) {
        dummy.next = l1
        l1 = l1.next
      } else {
        dummy.next = l2
        l2 = l2.next
      }
      dummy = dummy.next
    }
    if (l1 == null) {
      dummy.next = l2
    } else {
      dummy.next = l1
    }
  
    head = head.next
    return head
  }
  console.log(
    mergeTwoLists(
      { val: 1, next: { val: 2, next: { val: 4, next: null } } },
      { val: 1, next: { val: 3, next: { val: 4, next: null } } },
    ).next.next.next,
  )
  