
Differentiable: A function f is differentiable at some domain value a if 

$$\lim_{h\to0}\frac{f(a+h)-f(a)}{h}$$

exists.
 
We talked about a function 

$$|x|=
\begin{cases}
x \text{ if } x\geq0 \\
-x \text{ if }x<0
\end{cases}$$ is not differentiable at 0. It's graph is:

```functionplot
---
title: 
xLabel: 
yLabel: 
bounds: [-10,10,-10,10]
disableZoom: false
grid: true
---
f(x) = abs(x)
```

Lets calculate:
$$\lim_{h\to0^+}\frac{|0+h|-0}{h} = \lim_{h\to0^+}\frac{|h|}{h} = \lim_{h\to0^+}\frac{h}{h}=1$$
$$\lim_{h\to0^-}\frac{|0+h|-0}{h}=\lim_{h\to0^-}\frac{|h|}{h} = \lim_{h\to0^-}\frac{-h}{h} = -1$$

There exist continuous functions which are not differentiable.

If a function is differentiable, then it is continuous. #TODO remember why

Fact:
$$\frac{d}{dx}(ln(x)) = \frac{1}{x}$$
Product rule: 

$$\frac{d}{dx}(f(x)*g(x)) = \frac{d}{dx}(f(x))*g(x)+ f(x)*\frac{d}{dx}(g(x))$$
Example:
Compute the derivative of:
$$(x^3+1)ln(x)$$
___
Quotient rule:
$$\frac{d}{dx}\frac{u(x)}{v(x)} = \frac{v(x)\frac{d}{dx}u(x) - u(x)\frac{d}{dx}v(x)}{v(x)^2}$$
$$\frac{(x^2+1)-2x^2}{(x^2+1)^2}=\frac{1-x^2}{(x^2+1)^2}$$

___
Chain rule:

$$\frac{d}{dx}f(g(x)) = \frac{df}{dx}(g(x))*\frac{dg}{dx}$$
