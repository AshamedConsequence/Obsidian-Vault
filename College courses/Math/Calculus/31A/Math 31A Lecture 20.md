What we learned last week:
Sigma notation for compactly writing lots of sums.

____
MILDLY INTERESTING FACTS:

Sigma notation can be distributed over sums. 
Constants factor out of sums
Repeated sum of only a constant is just multiplication

Theorem:
If $a_m,\ a_{m+1},\ …,\ a_k$ and $b_m,\ b_{m+1},\ …,\ b_k$ are numbers, the summation of these two series is distributed. and if c is a constant, the constant can be factored out and if we just add a consntant 

The area of the four rectangles drawn at the time of writing gives a right Rieman sum on the interval [1,5] with 4 rectangles.

We can right this sum in a more awkward way.

$$
(\frac{5-1}{4})*f(1+1*(\frac{5-1}{4}))+(\frac{5-1}{4})*f(1+2*(\frac{5-1}{4}))+(\frac{5-1}{4})*f(1+3*(\frac{5-1}{4}))
$$

or in sigmatnotation

$$\sum_{n=1}^{4}(\frac{5-1}{4})*f(1+n(\frac{5-1}{4}))$$

and the left Remann sum is 

$$\sum_{n=1}^{3}(\frac{5-1}{4})*f(1+n(\frac{5-1}{4}))$$

theorem: The right Riemann sum on an interval [a,b] with N rectangles for a ufnction f is:

$$\sum_{n=1}^N=(\frac{b-a}{N})*f(a+n*(\frac{b-a}{N}))$$

and the left Riemann sum on [a,b$] with N rectangles is 

$$\sum_{n=0}^{N-1}=(\frac{b-a}{N})*f(a+n*(\frac{b-a}{N}))$$

Notice that if f(x) is negative, the right Riemann sum on [3,7] with 2 rectangels is negative, in other words, the riemann sums treat rectangles under the x axis as if they were negative.

DEFINITION:
The signed area under a curve is area above x-axis minus area under x-axis.

Theorem:

If f is a continuous function, then the signed area under the curve is $$\lim_{N\to\infty}
\sum_{n=0}^{N-1}=(\frac{b-a}{N})*f(a+n*(\frac{b-a}{N}))$$
