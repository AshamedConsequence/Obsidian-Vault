How to theoretically compute "0.1 radians"

First draw unit circle. 

Second, start at point $(1,0)$ and then go up counter clockwise 0.1 units of distance.

Then draw the line connecting the origin and this new point. The angle created will be by definition 0.1 rad. 

To get sin and cos of 0.1 rad, we'd read the x coordinate for cos and the y coordinate for sin.

(Radians make math formula nicer. )

We'll use this to compute $\lim\limits_{\theta\to0}\frac{\sin(\theta)}{\theta} = 1$

Conceptual understanding 1:

We can make a right triangle using $\sin\theta$ and $\cos\theta$ which has an angle of $\theta$ rad.
More generally, if $\theta$ is a small angle, then $\sin\theta \approx \theta$, so we use this fact that as $\lim\limits_{\theta\to0}\frac{\sin(\theta)}{\theta} = \lim\limits_{\theta\to0}\frac{\theta}{\theta} = \lim\limits_{\theta\to0}1 = 1$ 

Much more logically rigorous way: 
Sandwich theorem/squeeze theorem:
If $\theta$ is in the set $(\frac{-\pi}{4}, \frac{\pi}{4})$ and $\theta\neq0$, then $\cos(\theta) \leq \frac{\sin(\theta)}{\theta} \leq 1$

```functionplot
---
title: Sandwich
xLabel: x
yLabel: y
bounds: [-1,1,0,1.3]
disableZoom: false
grid: true
---
f(x) = 1
g(x) = cos(x)

```

From this graph, we see that $\lim\limits_{\theta\to0}\frac{\sin\theta}{\theta} = 1$

# WE HAVE THE RIGHT TO A 3X5 NOTECARD ON OUR MIDTERMS

Example:
Pretend you have a function $f(x)$ and you want to know $\lim\limits_{x\to3} f(x)$. Assume you know that there's a function $g(x)$ where $g(x) \leq f(x)$ when x is near 3. Also assume there's a function $h(x)$ where $f(x) \leq h(x)$ when x is near 3. Finally assume $\lim\limits_{x\to3}g(x) = \lim\limits_{x\to3}h(x)=L$

Example:

Lets compute $\lim\limits_{\theta\to0}\frac{\sin3\theta}{\theta}$

Let $t=3\theta$ 
Notice that as when t approaches 0, $\theta$ also approaches 0. Therefore

$$\lim\limits_{\theta\to0}\frac{\sin3\theta}{\theta} = \lim_{t\to0}\frac{\sin t}{\frac{t}{3}}* \frac{3}{3} = 3* \lim_{t\to 0}\frac{\sin t}{t} = 3
$$
