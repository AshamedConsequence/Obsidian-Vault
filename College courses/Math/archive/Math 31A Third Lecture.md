Limit Laws:

We want to know:

$$\lim_{x\to7}{f(x)} \text{ and } \lim_{x\to7}g(x)$$

The table suggests:

$$\lim_{x\to7}f(x) = 4 \text{ and } \lim_{x\to7}g(x) = 5$$

| x | f(x) | g(x) | f(x)+g(x) | f(x)\*g(x) |
	| ----- | ------ | ------ | --------- | ---------- |
	| 6.9 | 3.9 | 4.9 | 8.8 | 19.11 |
	| 6.99 | 3.99 | 4.99 | 8.98 | 19.9101 |
	| 6.99 | 3.999 | 4.9997 | 8.996 | 19.9803 |
	| 7.1 | 4.1 | 5.2 | 9.3 | 21.34 |
	| 7.01 | 4.01 | 5.01 | 9.02 | 20.09 |
	| 7.001 | 4.0001 | 5.0001 | 9.00001 | 20.00004 |

Now assume those are both true.

Then $$\lim_{x\to7}(f(x)+g(x)) =\lim_{x\to7}f(x) + \lim_{x\to7}g(x) = 9$$

Theorem: 
_**IF**_ all limits exists, then 

1) $$\lim_{x\to c}(f(x)+g(x))= \lim_{x\to c} f(x) + \lim_{x\to c} g(x)$$

2) $$\lim_{x\to c}(f(x)*g(x))= \lim_{x\to c} f(x) * \lim_{x\to c} g(x)$$

3) If a is some constant then $$ \lim_{x\to c} (a*f(x)) = a * \lim_{x\to c} f(x)$$

4) $$\lim_{x\to c} (f(x)-g(x)) = \lim_{x\to c} f(x) - \lim_{x\to c} g(x)$$

5) If lim g(x) != 0, then:

$$\lim_{x\to c}\frac{f(x)}{g(x)} = \frac{\lim_{x\to c} f(x)}{\lim_{x\to c}g(x)}$$

---
Example:

$$\lim_{t\to 3} \frac{t^2-9}{t-3} = \lim_{t\to 3} \frac{t^2-3^2}{t-3} = \lim_{t\to 3} \frac{(t-3)(t+3)}{t-3} = \lim_{t\to 3}{t+3} = 3+3 = 6$$

$$\lim_{t\to 3} \frac{t^2-9}{t-3} = \lim_{t\to 3} \frac{t^2-3^2}{t-3} = \lim_{t\to 3} \frac{(t-3)(t+3)}{t-3} = \lim_{t\to 3}(t+3) = \lim_{t\to 3} (t) + \lim_{t\to 3} (3) = 3+3 = 6$$

Notice: if you plug in t= 3 into the function above, you get 0/0. 0/0 is called an indeterminate form.

Example:

Compute $\lim_{x\to 3} \frac{x^2-4x+3}{x^2+x-12}$

Answer: $\frac{2}{7}$

$\sqrt{(\sum_{n=1}^{\infty} \frac{1}{n^2})*6}$
