Let's take the function $f(x) = x^2$

$$
F(t) = \int_1^tx^2\ dx

$$

Question:
Whats the derivative of this function F?

Expanding F(t), we get:

$$
F(t) = \frac{t^3}{3} -\frac{1}{3}
$$

Part two of the fundamental theorem of calculus:

Theorem:

$$
\frac{d}{dt}\int_{number}^t f(x)\ dx = f(t)
$$

Do note that if the t up top isn't literally a t, you should use the chain rule. 

___
Area under curve:

Below, we sketch the graphs of the functions $f(x) = x^2-4x+10$ and $g(x) = 4x-x^2$

```functionplot
---
title: 
xLabel: 
yLabel: 
bounds: [-10,10,-10,10]
disableZoom: false
grid: true
---
f(x) = x^2-4x+10
g(x) = 4x-x^2

```

Question:
What is the area between these curves from x=1 to x=4

We know the area under f(x) from these x values.

We also know the area of g(x) from these x values.

The area between curves is:

$$
\int_1^4f(x)dx - \int_1^4g(x)dx
$$

Theorem:

If f and g are functions and f(x) $\geq$ g(x) (i.e. the graph of f is above or touching the graph of g) then the area between the two curves from x=a to x=b = 

$$
\int_a^bf(x) - g(x)\ dx
$$

x^2 = x^3 when x = 0 and x=1

$$
	\int_0^1x^2-x^3dx = \frac{1}{3}-\frac{1}{4} = \frac{1}{12}
$$

___
Differential equations:

Find f such that 

f'(x) = $3x^2$ and f(1) = 7

f(x) = $x^3+6$

Solve the differential equation f'(x) = 2x^3 and f(2) = 1

$$f(x) = \frac{x^4}{2} -7$$
