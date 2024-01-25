The quiz will open at 8 PM tonight.

Due at Monday at 8 PM.

---
Question:
What is:

$$\lim_{x\to 0}\frac{1}{x^2}$$

 We could check by computer and get something that looks like this:

```functionplot
---
title: 1/x^2
xLabel: x
yLabel: x
bounds: [-10,10,-10,10]
disableZoom: false
grid: true
---
f(x)=1/x^2

```

The graph of this function has a vertical asymtote, meaning the graph gets closer to this line without ever touching it. 

Further proof:

To compute the limit of $\frac{1}{x^2}$, we can make a table of values.

| x             | $\frac{1}{x^2}$ |
| ------------- | --------------- |
| 1             | $\frac{1}{1^2}$ |
| $\frac{1}{2}$ | 4               |
| $\frac{1}{3}$ | 9               |
| $\frac{1}{4}$   | 16                |

So $\lim \frac{1}{x^2} = \infty$

Question: What's:

$$\lim_{x\to \infty} \frac{1}{x^2}$$

Theorem: If $P$ is a positive number, then $$\lim_{x\to \infty}\frac{1}{x^p} = 0$$

****:danger:****

$$\lim_{x\to -\infty}\frac{1}{x^p} = 0$$

works when $p \in \mathbb{N}$ because there are some cases where I'd be taking the square root of a negative number.

End of class:

$$\frac{\infty}{\infty}$$

 is an indeterminate form. 

The indeterminate forms are:

	$$\frac{0}{0}, \frac{\infty}{\infty}, 0*\infty, 1^{\infty}, \infty-\infty,\text{ } \infty^{0}, 0^0$$
