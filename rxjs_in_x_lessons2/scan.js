/*
https://github.com/rschaniel/rxjs_in_x_lessons
https://ronnieschaniel.com/tag/rxjs-lessons/

The RxJS scan operator allows to check the newest value against the current.
keep track of the current maximum:
*/
import { of, scan } from 'rxjs';

of(1,15,7,3,20,2).pipe(
    scan((acc, curr) => acc > curr ? acc : curr)
).subscribe(console.log);


/*
1
15
15
15
20
20
*/