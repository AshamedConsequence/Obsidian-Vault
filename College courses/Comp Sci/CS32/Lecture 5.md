A traversal is when yuo iterate through one or more nodes of an ADT.

When adding an item to the end of a linked list, there are two cases to consider:
1) When the list is empty: IN this case, it's identical to adding a value to the top.
2) The list isn't empty: 

Basic algorithm to ading to middle:

If list is empty, add to the top.

else if the item belongs at the top of the list, add it to the top.

else

- We need to traverse the list to find the node above where we want to insert the new node.
- We need to allocate and fill our new node with the item
- We then link the nodes. 

___
How to delete nodes:

It has many steps

First check if it's empty, and if it is return.
Then we check if the first node holds the item we want to delete, then:
	- We create a temp pointer which points to the head,
	- We make the head pointer to point to the second item of the list
	- Finally we delete the target node and then return.
Then do this do delete an item in the middle of the list:
	- We traverse until we reach the node before the one we want to delete
	- We check if we found our target node, then we do the same thing as above, only linking the node above and the node below.

```cpp
bool findItem(string v) {
	for (Node *p = head; p!=nullptr; p = p->next) {
		if (p->value == v)
			return true;
	}
		return false;

}
```
