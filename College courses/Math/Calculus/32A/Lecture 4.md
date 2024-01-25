Important notice: Quiz 1 is next week in discussion section.

Recap:
We did dot products, its relation to angles, and how it's used for vector projection.

Cross product:
$\vec{v} \times \vec{w}$ is it's notation. It produces a vector which is orthoganl to both $\vec{v}$ and $\vec{w}$

This operation produces a vector as it's output, instead of a scalar like the dot product.

To define the cross product of v and w algebraically, we need basic matrices and determinants.

Definition:

An $n\times n$ matrix is an $n\times n$ array of real numbers 

$$
\begin{bmatrix}
a_{11} & a_2 & ... & a_n\\
b\\
...\\
n

\end{bmatrix}
$$

Definition:
The determinant of a 2x2 matrix is defined as follows

$$\begin{vmatrix}
a & b\\
c & d
\end{vmatrix} = ad-bc
$$

Example

$$\begin{vmatrix}
1 & 0\\
3 & 2
\end{vmatrix} = 2(1)-3(0) = 2
$$

The determinant of a 3x3 matrix is defined as follows

$$
\begin{vmatrix}
a & b & c\\
d & e & f\\
q & r & s
\end{vmatrix} = a \begin{vmatrix}
e & f\\
r & s
\end{vmatrix} - b\begin{vmatrix}
d & f\\
q & s
\end{vmatrix} + c \begin{vmatrix}
d & e\\
q & r
\end{vmatrix}
$$

This can be remember a bit more easily by thinking of this as determinant as $$
a_{1,1}M_{1,1}-a_{1,2}M_{1,2}+a_{1,3}M_{1,3}

$$

Definition: 
The (i,j)-minor of a matrix M is the determinant of a matrix given by deleting row i and column j of a matrix M.

Example:
$$\begin{vmatrix}
1 & 3 & 5\\
1 & 0 & 2\\
0 & 1 & 4
\end{vmatrix} = 1 \begin{vmatrix}
0 & 2\\
1 & 4
\end{vmatrix} - 3\begin{vmatrix}
1 & 2\\
0 & 4
\end{vmatrix} + 5 \begin{vmatrix}
1 & 0\\
0 & 1
\end{vmatrix} = -9$$
___

Definition:

Given $\vec{v}= \langle v_1, v_2, v_3 \rangle$, $\vec{w} = \langle w_1,w_2,w_3 \rangle$, $$\vec{v} \times \vec{w}=
\begin{vmatrix}
\hat{i} & \hat{j} & \hat{k}\\
v_1 & v_2 & v_3\\
w_1 & w_2 & w_3
\end{vmatrix} 
$$

The reason we need the vectors in the top part of the matrix is because we want a vector at the end, and doing this will give us a linear combination of vectors based on the unit vectors. Basically, its giving us the vector components-ish, with a little math needed to 

The reason that this vector is provably orthoganal, is that if we were to do the dot product of one of the vectors in this cross product with the resulting vector, the vector components of the vector would multiply with the unit vectors we use. #TODO finish explaining this. 
___
Properties of cross product:

1) $\vec{v} \times \vec{w} = -\vec{w} \times \vec{v}$ 
2) $\vec{v} \times \vec{v} = \vec{0}$
3) $\vec{v} \times \vec{w} = \vec{0} \Leftrightarrow \vec{v} = \lambda \vec{w}$ 
4) $(\lambda \vec{v}) \times \vec{w} =(\lambda \vec{w}) \times \vec{v} = \lambda(\vec{v} \times \vec{w})$
5) $(\vec{v}+\vec{w})\times \vec{u} = \vec{v}\times\vec{u}+\vec{w}\times\vec{u}$ & $\vec{u} \times (\vec{v}+\vec{w}) = \vec{u}\times\vec{v}+\vec{u}\times\vec{w}$ 

Definition:

$\{ \vec{u},\vec{v},\vec{w}\}$ is right handed if it satisfies the right hand rule. 

$\vec{u} \times \vec{v}$ is the unique vector such that:
1) $\vec{u} \times \vec{v}$ is perpendicular to $\vec{u}$ and $\vec{v}$
2) $\{ \vec{u}, \vec{v}, \vec{u} \times \vec{v}\}$ is right handed
3) $||\vec{u} \times \vec{v}|| = ||\vec{u}|| ||\vec{v}||\sin \theta$
