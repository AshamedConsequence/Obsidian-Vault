I can get help at the student math center if I want. 

Definition of derivative:

$$\lim_{h\to0}\frac{f(x+h)-f(x)}{h}=f'(x) = \frac{df}{dx}$$

```functionplot
---
title: x^2
xLabel: 
yLabel: 
bounds: [-10,10,-10,30]
disableZoom: false
grid: true
---
f(x)=x^3

```

Notice how at x=3, we have f'(3) = 27, which means that the slope of the tangent line passing through (3,f(3)) has slope 27

#todo learn point slope form.

We just saw that if we do:

$$
\frac{d}{dx}x^2=2x
$$

$$
\frac{d}{dx}x^3=3x^2
$$

We learn the power rule:

$$
\frac{d}{dx}x^n=nx^{n-1}$$
We can prove the facts that:

$$\frac{d}{dx}(f+g) = \frac{df}{dx}+\frac{dg}{dx}$$
and 
$$

\frac{d}{dx}(cf)=c\frac{d}{dx}(f)

$$
We say a function f is __differentiable__ if:
$$\lim_{h\to0}\frac{f(x+h)-f(x)}{h}$$ always exists.

The function |x| is not differentiable because the limit on the left and on the right side are not the same
