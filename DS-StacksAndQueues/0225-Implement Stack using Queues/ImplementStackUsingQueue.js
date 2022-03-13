
var MyStack = function() {
  this.queue1 = new MyQueue;
  this.queue2 = new MyQueue;
};

/**
 * Queues fuction
 */
var MyQueue = function() {
  this.item = new Array;
}

MyQueue.prototype.enqueue = function(value) {
  this.item.push(value);
}

MyQueue.prototype.dequeue = function() {
  return this.item.shift();
}

MyQueue.prototype.empty = function() {
  if (this.item.length === 0) {
    return true;
  }
  return false;
}

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  this.queue1.enqueue(x);
  return this.queue1;
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
  let temp;
  while (!this.queue1.empty()) {
    temp = this.queue1.dequeue();
    if (!this.queue1.empty()) {
      this.queue2.enqueue(temp);
    }
  }
  
  // queue1 need to be back to origin
  while (!this.queue2.empty()) {
    this.queue1.enqueue(this.queue2.dequeue());
  }
    
  return temp;  
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
  let temp;
  while (!this.queue1.empty()) {
    temp = this.queue1.dequeue();
    this.queue2.enqueue(temp);
  }
  
  // queue1 need to be back to origin
  while (!this.queue2.empty()) {
    this.queue1.enqueue(this.queue2.dequeue());
  }
    
  return temp; 
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.queue1.empty();
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

