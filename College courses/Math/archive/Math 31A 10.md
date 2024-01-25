We can get slopes of things that aren't necessarily functions.

Let us consider the circle of radius 1 center d at the origin has equation $x^2+y^2=1^2$

Question: What's the slope of the tangent line at $(\frac{1}{\sqrt{2}}, \frac{1}{\sqrt{2}})$ ?

To solve this, we could take the derivative of both sides of the equation of $x^2+y^2=1^2$

$$
(x^2+y^2)'=(1^2)'
$$

$$
(x^2)' + (y^2)' = 0
$$

$$
2x + (y^2)' = 0
$$

$$
2x + 2y * \frac{dy}{dx} = 0
$$

$$
 2y * \frac{dy}{dx} = -2x
 $$

 $$
 
 \frac{dy}{dx} = \frac{-2x}{2y}
 $$

We can plug in $\frac{1}{\sqrt{2}}$ into the x and y in order to find the slope at $(\frac{1}{\sqrt{2}},\frac{1}{\sqrt{2}})$ to find that the slope is $-1$

Example: Find the equation of the tangent of the shape given by $y^4+xy= x^3-x+2$

$$
4y^3 * \frac{dy}{dx} + \frac{dy}{dx}*x+y = 3x^2-1$$
$$\frac{dy}{dx}(4y^3+x)= 3x^2-1-y$$
$$\frac{dy}{dx} = \frac{3x^2-1-y}{4y^3+x}$$
$$\frac{dy}{dx}\Bigr\rvert_{t = 0} 
 = \frac{1}{5}$$

$$y-1 = \frac{1}{5}(x-1)$$
___

There is a number called e 

$$e\approx 2.718281828459045...$$

You can make an exponential function out of this e^x and this function has the property that $\frac{d}{dx}(e^x)=e^x$


Example:

Compute $\frac{d}{dx}7^x = \frac{d}{dx} (e^{\ln{7}*x}) = e^{\ln{7}*x}*\frac{d}{dx} (\ln{7}*x) = 7^x *\ln{7}$
___
# NEW DERIVATIVE RULE 🥳

The same logic shows that if $a$ is a positive number, $$\frac{d}{dx} a^x = a^x*\ln{a}$$
following the logic:
$$\frac{d}{dx}a^x = \frac{d}{dx} (e^{\ln{a}*x}) = e^{\ln{a}*x}*\frac{d}{dx} (\ln{a}*x) = a^x *\ln{a}$$
___

```functionplot
---
title: 
xLabel: 
yLabel: 
bounds: [-10,10,-10,10]
disableZoom: false
grid: true
---
f(x)=x^3+3x^2+2x+5
```
We see on this function that at the point -4, if we were to pour water on the graph, it would go down like a frown (Concave down) and if we were to do the same thing at the point 3, it would hold water and keep it up like a cup (concave up).

# NOTATION TIME 🥳

This is about the second derivative

$$f'(x) \text{ is the first derivative}
$$

$$f''(x) \text{ is the second derivative}$$
