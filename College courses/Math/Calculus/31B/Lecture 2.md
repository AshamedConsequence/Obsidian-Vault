What we learned last time:

We learned the existence of inverse functions, whose behavior cancels out the side effects of another function. 

We note them as $f^{-1}(x)$ where $f^{-1}(f(x)) = x$ 

An important thing to note is that when creating an inverse function, the domain and range of the original function are switched. 

You can sketch an inverse function by reflecting it along the line y=x

___

How to do calculus on inverse functions:

If the original function $f$ is continuous, it makes sense that $f^{-1}$ is also continuous. 

We can predict that the slope at a point on $f^{-1}$ would be the inverse of the slope at that point on $f$, meaning that: $$(f^{-1})'(a) = \frac{\Delta y}{\Delta x} =  \frac{1}{\Delta x/\Delta y} = \frac{1}{f'(b)}$$

but $f'(b) = f^{-1}(a)$ so if f is one to one differentiable function with inverse function f^-1 and $f'(f^-1(a)) \neq 0$, then $f^{-1} \'(a) = \frac{1} {f'(f^{-1}(a))}$  

We can also find this derivative rather easily using implicit differentiation.

$$
\frac{1}{2-\sin 0}$$
___

Logarithms and their derivatives.

We define $ln\ x$ as the integral $\int_1^x \frac{1}{t}dt\ for\ x\gt0$ 


We can use this integral definition of ln to find that the properties of logarithms hold with this definition. 
