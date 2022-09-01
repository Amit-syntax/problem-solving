
class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}


function LinkedList(maxLength){
    this.head = null
    this.maxLength = maxLength
}


LinkedList.prototype.addNode = function(value){
    let node = new Node(value)

    if (this.head == null){
        this.head = node
    }else{
        this.head.next = node
    }

    return node
}


LinkedList.prototype.printLinkedList = function (){
    let temp = this.head

    while(temp != null){
        console.log(temp.value)
        temp = temp.next
    }
};



(()=>{
    let list = new LinkedList(10)

    list.addNode('value1')
    list.addNode('value2')

    list.printLinkedList()

})()