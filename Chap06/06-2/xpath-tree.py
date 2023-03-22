"""
    This is a Python implementation of a binary tree data structure, 
    which provides a way to store hierarchical data.

    Author: Toygoon
"""


class Node:
    def __init__(self, data):
        """
        Initializes a new node with the given data

        Args:
            data (Any): the data to be stored in the node
        """
        self.data = data
        self.left = None
        self.right = None

    def __repr__(self):
        """
        Returns a string representation of the node

        Returns:
            str: representation of the data expected for the string
        """
        return self.data


class BinaryTree:
    def __init__(self, root):
        """
        Initializes a new binary tree with the given root node

        Args:
            root (Any): the data of root node for the binary tree
        """
        self.root = Node(root)

    def preorder(self, root: Node, prefix: str = '', is_left: bool = True):
        """
        Preorder traversal to print the binary tree

        Args:
            root (Node): the root node of the binary tree
            prefix (str): a string containing characters for formatting the output
            is_left (bool): a boolean value indicating whether the node is the left child of its parent
        """
        if root:
            # print(prefix, end='')
            # print('|-- ' if is_left else '`-- ', end='')

            # print(root.data)
            label = f"{prefix}|-- " if is_left else f"{prefix}`-- "
            print(f'{label}{root.data}')
            
            p = prefix + '   '
            
            self.preorder(root.left, p, True)
            self.preorder(root.right, p, False)


if __name__ == '__main__':
    tree = BinaryTree('html')

    tree.root.left = Node('head')
    tree.root.right = Node('body')

    tree.root.left.left = Node('meta')
    tree.root.left.right = Node('title (text)')
    tree.root.right.left = Node('h1')
    tree.root.right.right = Node('section')

    tree.root.right.right.left = Node('section (#food_1)')
    tree.root.right.right.right = Node('section (#food_2)')

    tree.root.right.right.left.left = Node('h2 (text)')
    tree.root.right.right.left.right = Node('ul')
    tree.root.right.right.right.left = Node('h2 (text)')
    tree.root.right.right.right.right = Node('ul')

    tree.root.right.right.left.right.left = Node('li (text)')
    tree.root.right.right.left.right.right = Node('li (text)')
    tree.root.right.right.right.right.left = Node('li (text)')
    tree.root.right.right.right.right.right = Node('li (text)')

    tree.preorder(tree.root)
