Implicit Derivation is a technique that can be used on equations that aren't functions, where the variables depend on the variable being derived. The reason this is possible is because we are treating this other variable like a function that depends on x, which lets us use the chain rule. 
___
Example:

Let us consider the circle of radius 1 center d at the origin has equation $x^2+y^2=1^2$

Question: What's the slope of the tangent line at $(\frac{1}{\sqrt{2}}, \frac{1}{\sqrt{2}})$ ?

To solve this, we could take the derivative of both sides of the equation of $x^2+y^2=1^2$

$$
(x^2+y^2)'=(1^2)'
$$

We use the fact that the [[Sum of Derivatives|derivative of a sum is the sum of derivatives]]  

$$
(x^2)' + (y^2)' = 0
$$

We then use the [[Power Rule]] on the first part of the sum.

$$
2x + (y^2)' = 0
$$

Then we use the [[Chain Rule]] on the second part with y

$$
2x + 2y * \frac{dy}{dx} = 0
$$

We do some basic algebra to isolate $\frac{dy}{dx}$ 

$$
 2y * \frac{dy}{dx} = -2x
 $$

 $$
 
 \frac{dy}{dx} = \frac{-2x}{2y}
 $$

We can plug in $\frac{1}{\sqrt{2}}$ into the x and y in order to find the slope at $(\frac{1}{\sqrt{2}},\frac{1}{\sqrt{2}})$ to find that the slope is $-1$

All the same [[Derivative rules]] apply in this situation, we just need to make sure we treat the second variable by using the chain rule.
