You need a const reference of the class to do copy assignment.

cpp creates a default copy constructor which does a shallow copy of the bytes.

We must define a copy constructor if the class points to any external objects/array.
