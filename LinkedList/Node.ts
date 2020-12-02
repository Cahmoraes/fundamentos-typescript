export default class Node<T = string> {
  public next: Node<T> | undefined
  constructor(public element: T) {
    this.next = undefined
  }
}