Stewart, Essential Calculus. TEXT BOOK TO PIRATE

Inverse Functions:

We can have inverse functions noted as $f^{-1}(x)$ to find for example the time based on number of bacteria.

In more specific terms, inverting a function flips the domain and the range. 

Quick note, not all functions have inverses. 

To note that a function is one to one, we say that $f(x_1) \neq f(x_2)$ whenever $x_1 \neq x_2$.

We can use the horizontal line test to see if functions are one to one or not. 

**DEFINITION**:

Let $f$ be a one-to-one function with domain A and range B. Then it's inverse function $f^{-1}$ has domain B and range A and is defined by $$
f^{-1}(y) = x \Leftrightarrow f(x) = y$$

Inverse functions cancel the original function and vice versa, meaning $f(f^{-1}(x)) = f^{-1}(f(x))  = x$. 

```functionplot
---
title: X^3 and its inverse (Sofware bugs for cube root on negative but eh)
xLabel: 
yLabel: 
bounds: [-10,10,-10,10]
disableZoom: false
grid: true
---
f(x) = x^3
g(x) = x^(1/3)
```

$x = \sqrt[3]{(y-2)}$

A property of graphing these functions:

The point (a,b) appears on the graph of $f$, if and only if the point (b,a) appears on the graph $f^{-1}$ 

In other words, you can get the graph of the inverse function of $f$ if you flip the graph along the line y = x.

```functionplot
---
title: example 5
xLabel: 
yLabel: 
bounds: [-10,10,-10,10]
disableZoom: false
grid: true
---
f(x) = sqrt(-1-x)
g(x) = -(x^2+1)
```
