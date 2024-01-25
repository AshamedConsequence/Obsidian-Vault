What we learned last time: 

Distance, vectors, and started work on vector operations.

___
Vector addition is commutative, meaning you can switch around the values and get the same result. $\vec{v}+\vec{w}=\vec{w}+\vec{v}$ 

Algebraically, $\langle v_1, v_2 \rangle + \langle w_1, w_2 \rangle = \langle v_1+w_1, v_2 + w_2 \rangle$ and you can generalize for any vector belonging to $\mathbb{R}^n$ 
___
Properties of vector addition:

Vector addition is commutative, meaning you can switch around the values and get the same result. $\vec{v}+\vec{w}=\vec{w}+\vec{v}$ 

Vector addition is associative, meaning you can switch around the values and get the same result. $(\vec{v}+\vec{u})+\vec{w}=(\vec{u}+\vec{w})+\vec{v}$ 

Anything plus the $\vec{0}$ is itself, $\vec{v} + \vec{0}= \vec{v}$

For any $\vec{v} \in \mathbb{R}^n$ there is a vector $\vec{-v}$ such that $\vec{v}+(\vec{-v}) = \vec{0}$. $\vec{-v}$ has the same length as v but points in the opposite direction. $\vec{-v} = \langle -v_1, -v_2, …, -v_n \rangle$ 

___
Scalar multiplication:

Scalar multiplication scales the length of the vector by a factor of the scalar. 

Negative scalars flip the direction. 

In algebraic terms, $$\lambda \langle v_1, v_2, …, v_n \rangle  = \langle \lambda v_1, \lambda v_2, …, \lambda v_n \rangle$$

___
Properties of of scalar multiplication:

Scalar multiplication is distributive: 
$\lambda (\vec{u}+\vec{v}) = \lambda \vec{v} + \lambda \vec{u}$ 
$(\lambda + \mu) \vec{v} = \lambda \vec{v} + \mu \vec{v}$ 
$\lambda (\mu \vec{v}) = (\lambda \mu) \vec{v}$
$1 \vec{v} = \vec{v}$ 
$-1 \vec{v} = -\vec{v}$ 
$0 \vec{v} = \vec{0}$ 

___
We say that $\vec{v} \parallel \vec{w}$ if $\vec{v} = \lambda \vec{w}\ for \lambda \neq 0$. If $\lambda \gt 0$ then v and w point in the same direction, and if $\lambda \lt 0$, then v and w point in opposite directions. 

A unit vector is a vector $\vec{v}$ with $||\vec{v}|| = 1$. 

For all $\vec{v} \neq 0,$ we can define a unit vector $\frac{\vec{v}}{||\vec{v}||}$ in the direction of $\vec{v}$ 

Definition:

A linear combination of vectors $\vec{u}, \vec{w}, \vec{v}$ is a vector $c_1\vec{u} + c_2\vec{w} + c_3\vec{v}$

$\hat{i} = \langle 1,0,0\rangle, \hat{j} = \langle 0,1,0\rangle , \hat{k}=\langle 0,0,1\rangle$ are the standard basis vectors for $\mathbb{R}^3$ 
____

To describe position as a funciton of time t in $\mathbb{R}^3$, we need functions x(t), y(t), z(t).

We can combine these functions into a vector valued function:

$$\vec{r}(t) = \langle x(t), y(t), z(t) \rangle $$

___
To define a line in $\mathbb{R}^2$ we need a point, and the slope of the line. 

We can get the position vector of any point on this line using vector addition of the position vector of the original point, and a scaled vector.

To define a line in $\mathbb{R}^3$ we need a point and a non 0 vector parallel to the line. 
