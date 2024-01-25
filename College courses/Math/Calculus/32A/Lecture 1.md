Single variable functions don't describe everything.

We're moving from $\mathbb{R}^2$ to $\mathbb{R}^3$

Each week we either have homework or quiz.

3 quizzes, between each midterm.

Monday and Friday, after class office hours. Math science 5222 from 1 to 2. 

___
Vectors and Vector Calculus:

Vectors are used to describe motion in space.

Coordinate systems:

A point in space $\mathbb{R}^3$ is defined with 3 points (a,b,c) along 3 axis, typically x,y,z.

A point in $\mathbb{R}^n$ is represented by an n-tuple ($a_1, a_2, …, a_n)$

___
Vectors:

Definition:

A **Vector** is a quantity with magnitude and direction. 
![[Pasted image 20240108122658.png]]
2 Points P,Q $\in \mathbb{R}^n$ determine a vector $\vec{PQ}$ such if you draw PQ as an arrow that starts at P, it ends at Q.

Direction of vector $\vec{PQ}$: It points from P to Q
Magnitude: It's the distance from P to Q.

Using our coordinate systems, we can describe vectors algebraically using their components along each coordinate axis.

Example:

$$
	P=(1,2)\ and\ Q=(4,3)$$
We change the x value by 3, and the y value by one, therefore PQ is writes as 
	$$\vec{PQ}= \langle3,1\rangle$$

If $P=(P_1,P_2)$ and $Q=(Q_1,Q_2)$, then $\vec{PQ} = \langle Q_1-P_1, Q_2-P_2\rangle$, for $\mathbb{R}^2$

More generally, for $\mathbb{R}^n$, if $P=(P_1,P_2,...,P_N)$ and $Q=(Q_1,Q_2,...,Q_n)$, then $\vec{PQ} = \langle Q_1-P_1, Q_2-P_2, ..., Q_n-P_n \rangle$ 


Many pairs of points give the same vector. If the vector components you get by doing the math are identical, then we are describing the same vector using different points.


If $O$ is the origin, the $\vec{OP}$ is the position vector of the point P

We can think of $\mathbb{R}^n$ as a space of vectors, meaning we can say that $\vec{v} \in \mathbb{R}^3$, that the vector $\vec{v}$ belongs to the vector space $\mathbb{R}^3$

To find the magnitude of a vector with components $\langle a,b \rangle$ we can use the Pythagorean theorem, giving us $||\langle a,b\rangle || = \sqrt{a^2+b^2}$, but this is specifically in $\mathbb{R}^2$.

More generally, in $\mathbb{R}^n$, to find the magnitude of a vector $\langle a_1, a_2,..., a_n \rangle$, we repeatedly apply the Pythagorean formula, to find that $$||\langle a_1, a_2,..., a_n \rangle|| = \sqrt{a_1^2+a_2^2+...+ a_n^2}$$

Special Vectors:

There is a $\vec{0}$ vector with no direction or magnitude.

We can add vectors together, and multiply a vector with scalars, scaling up the length (magnitude) of the vector.

- Vector addition
	- If I have a vector $\vec{v}$ and a vector $\vec{w}$, we can add these two vectors together, by basically, moving the base point of vector $\vec{w}$ at the end of the vector $\vec{v}$ (Tu connais ca deja, c'est la relation de Chasles), and algebraically, we can do vector addition by adding the vector components
	- Basically, $\vec{v} + \vec{w} = \langle v_1+w_1, v_2+w_2, ..., v_n+w_n\rangle$  
- Scalar multiplication
	- This is scaling the length of the vector by that scalar.
	- Basically $\lambda\vec{v} = \langle \lambda v_1, \lambda v_2, ..., \lambda v_n \rangle$ 
