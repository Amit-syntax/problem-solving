
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

LinkedList.prototype.removeNode = function(node){

    if (node == this.head){
        this.head = node.next
        return 
    }

    let temp = this.head

    while(temp != null){
        if(temp.next == node){
            temp.next = node.next
            node.next = null
            delete node
        }
        temp = temp.next
    }
}

LinkedList.prototype.removeNodeByValue = function(value, recursive){
    
    let temp = this.head
    let removedFirst = false

    while(temp != null && (recursive || (!removedFirst && !recursive))){
        if(value == temp.value){
            this.removeNode(temp)
        }
        temp = temp.next
    }
}


LinkedList.prototype.printLinkedList = function (){
    let temp = this.head

    console.log('\n-----Printing Linked List-----')

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
    
    list.removeNodeByValue('value2', recursive=false)
    
    list.printLinkedList()
})()