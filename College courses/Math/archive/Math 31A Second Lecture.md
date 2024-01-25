

Function comes with a rule, a domain, and a codomain/range. 

Example

Let $f$ be the function with domain $\mathbb{R}\backslash\{3\}$ and codomain $\mathbb{R}$ given by the formula $$f(x) = \frac{x^2-9}{x-3}$$

Notice: $$f(4) = \frac{4^2-9}{4-3} = 7$$

 $$f(2) = \frac{2^2-9}{2-3} = 5$$

$$f(1) = \ldots = 4$$

$$f(0) = \ldots = 3$$

$f(3)$ is undefined 

```functionplot
---
title: f(x) = (x^2-9)/(x-3)
xLabel: X
yLabel: Y
bounds: [-1, 10, 0, 10]
disbaleZoom: 1
grid: true
---
f(x) = (x^2-9)/(x-3)
```

(notice the small gap at x=3)

Even though $f(3)$ is not defined, it is true that $$\lim_{x\to3}f(x)=6$$

Example 2:

Let $g$ be the function given by the formula 

$$
f(x) = \begin{cases} 
          2 & x < 31 \\
          100+x & x \geq 31
       \end{cases}
$$

Question: What is: $$\lim_{x\to31^{+}}f(x) = 131$$

What is:

$$\lim_{x\to31^{-}}f(x) = 2$$

The limit of $x\to31$ has different values depending on which direction you are approaching. 

If the limit has different values on both sides, we say that the limit does not exist.

We say that $$\lim_{x\to c} f(x) = L$$

 if $$\lim_{x\to c^{+}} f(x) = L$$

 and 

$$\lim_{x\to c^{-}} f(x) = L$$

If either of those don't exist or they aren't the same then: 

$$\lim_{x\to c^{+}} f(x) \text{ does not exist} $$

(There is a difference on whether the limit is undefined or does not exist, but it does not matter)

Example 3:

Let $q(x)$ be the function with domain and codomain $\mathbb{R}$ given by the formula: $$q(x) = x^3$$

$$\lim_{x\to2} q(x) = 8\text{ because }\lim_{x\to2^{+}}q(x) = 8 \text{ and }\lim_{x\to2^{-}}q(x) = 8 $$

```functionplot
---
title: q(x)
xLabel: x
yLabel: y
bounds: [-10,10,-10,10]
disableZoom: false
grid: true
---
q(x) = x^3
```

Example 4: 
Let p(x) be the function with domain and codomain $\mathbb{R}$ given by 

$$
p(x) = \begin{cases} 
          x+3 & x \neq 3 \\
          7 & x=3
       \end{cases}
$$

$p(4)=4+3=7$
$p(2)=2+3=5$
$p(1)=1+3=4$
$p(0)=0+3=3$
and $p(3)=7$ 

#TODO use matplotlib to graph function 

Definition: A function $f$ is continuous at a domain value $c$ if $$\lim_{x\to c} f(x)= f(c)$$

 $$ \text{In particular, if }\lim_{x\to c} f(x) \text{ does not exist, that means the function is not continuous at c}$$
