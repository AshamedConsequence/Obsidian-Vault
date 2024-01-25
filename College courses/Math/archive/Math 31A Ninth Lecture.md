Today we will learn about:
* The chain rule
* Why the derivatives of trig functions are the way they are (NEED TO KNOW SIN/COS)

Know the special angles of trig functions.
___
Chain rule:

$$\frac{dy}{dx} = \frac{dy}{du}*\frac{du}{dx}$$

Example:

$$\frac{d}{dx} (3x^2+1)^2, y=(3x^2+1)^2, u=3x^2+1$$

$$\frac{du}{du}*\frac{d(3x^2+1)}{x} = 2u * 6x = 2*(3x^2+1)*6x$$

Example:

$$\frac{d}{dx}ln(8x^4+7x^2)$$

$$\frac{32x^3+14x}{8x^4+7x^2}$$

Example:

$$\frac{d}{dx}ln(ln(x)*(x^2+4))$$

$$\frac{1}{ln(x)*(x^2+4)}*(\frac{x^2+4}{x}+ln(x)*2x)$$

$$=\frac{(\frac{x^2+4}{x}+ln(x)*2x)}{ln(x)*(x^2+4)}= \frac{x^2+4}{x*ln(x)*(x^2+4)}+\frac{ln(x)*2x}{ln(x)*(x^2+4)}== \frac{1}{x*ln(x)}+\frac{2x}{(x^2+4)}$$

```functionplot
---
title: 
xLabel: 
yLabel: 
bounds: [-10,10,-1.5,1.5]
disableZoom: false
grid: true
---
f(x)=sin(x)

```
