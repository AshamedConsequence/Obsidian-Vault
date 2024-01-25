Last Time:

area under the curve can be approximated using a right riemann sum.

The signed area under the curve of a function f(x) from [a,b] is 

$$
\lim_{N\to\infty}(\text{Left or Right riemann sum with N-Rectangles from a to b})
$$

Definition:

The definite integral of a function f(x) is 

$$
\int_{a}^{b}f(x)dx
$$

is the signed area under the curve of f(x) from a to b.

Example: Compute $\int_{-3}^{3}\sqrt{9-x^2}dx$ 

Definition:
The circle of radius r centered at the origin is all the points (x,y) with distance r from the origin, i.e, $\sqrt{(x-0)^2+(y-0)^2}$ 

The top half of the circle has equation y = $\sqrt{r^2-x^2}$.

So

$$
\int_{-3}^{3}\sqrt{9-x^2}dx = \frac{\text{Area of a circle of radius 3}}{2} = \frac{3^2\pi}{2}
$$

That is the area under the curve which is also the signed area, since $\sqrt{9-x^2}$ never goes below the x-axis.

It's alsways true that:

$$
\int_{a}^c f(x)dx = \int_a^bf(x)dx+\int_b^cf(x)dx
$$

We shuold use thi sproperty to figure out how we should define things like $\int_5^1f(x)dx$ should mean.

We know that 

$$
\int_5^1f(x)dx+\int_1^5f(x)dx=\int_5^5f(x)dx = 0$$


Therefore, 
$$

\int_5^1f(x)dx = -\int_1^5f(x)dx

$$
and more generally
$$\int_a^bf(x)dx = -\int_b^af(x)dx$$
