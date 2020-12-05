# Find the Difference 
input : multiple arrays\
output: one array

# Main Idea
1. symOfTwo 
    1. input 2 arrays 
    2. convert them into obj\
     ```new Set(array1)```
    3. combine the objs into one array\
    ```[...set1,...set2]```
    4. new obj: {elements: times of appearance}
    5. if the time =1, push the element into 'output' array

2. sym
    1. all the input array into one big array [[],[],...]\
    ```[...arguments]```
    2. loop through the big array, and use the function symOfTwo

