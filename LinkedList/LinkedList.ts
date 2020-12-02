import defaultEquals from './deafultEquals'
import Node from './Node'

class LinkedList<T extends string | number = string> {

  private head: Node<T> | undefined
  private count: number
  private equalsFn: Function

  constructor(equalsFn = defaultEquals) {
    this.head = undefined
    this.count = 0
    this.equalsFn = equalsFn
  }

  insertElement(element: T) {
    const node = new Node<T>(element)
    if (this.isEmpty()) {
      this.head = node
    } else {
      let current = this.head as Node<T>
      while (current.next !== undefined) current = current.next
      current.next = node
    }
    return ++this.count
  }

  size(): number {
    return this.count
  }

  isEmpty(): boolean {
    return this.size() === 0
  }

  clear(equalsFn = defaultEquals): void {
    this.head = undefined
    this.count = 0
    this.equalsFn = equalsFn
  }

  getElementAt(index: number): Node<T> | boolean {
    if (index >= 0 && index < this.size()) {
      if (index === 0) {
        return this.head as Node<T>
      } else {
        let current = this.head as Node<T>
        for (let i = 0; i < index; i++) {
          current = current.next as Node<T>
        }
        return current
      }
    }
    return false
  }

  insetElementAt(element: T, index: number): number | boolean {
    if (index >= 0 && index <= this.size()) {
      const node = new Node<T>(element)
      let current = this.head
      if (index === 0) {
        node.next = current
        this.head = node
      } else {
        const previous = this.getElementAt(index - 1) as Node<T>
        current = previous.next
        previous.next = node
        node.next = current
      }
      return ++this.count
    } else {
      return false
    }
  }

  removeElementAt(index: number): number | boolean {
    if (index >= 0 && index < this.size()) {
      let current = this.head as Node<T>
      if (index === 0) {
        this.head = current.next
      } else {
        const previous = this.getElementAt(index - 1) as Node<T>
        current = previous.next as Node<T>
        previous.next = current.next
      }
      return --this.count
    } else {
      return false
    }
  }

  indexOf(element: string): number {
    let current = this.head as Node<T>
    for (let i = 0; i < this.size() && current !== undefined; i++) {
      if (this.equalsFn(current.element, element)) {
        return i
      }
      current = current.next as Node<T>
    }
    return -1
  }

  removeElement(element: string): boolean {
    const index = this.indexOf(element)
    return !!this.removeElementAt(index)
  }

  toString(): string {
    if (this.isEmpty()) return ''
    let list = '' + this.head?.element as string
    let current = this.head?.next as Node<T>
    while (current !== undefined) {
      list = `${list}, ${current.element}`
      current = current.next as Node<T>
    }
    return list
  }
}

const l = new LinkedList<number>()
l.insertElement(1)
l.insertElement(2)
l.insetElementAt(3, 2)
console.log(l.toString())