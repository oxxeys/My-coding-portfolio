---
title: "First-Post"
date: 2024-05-15
---
This is my first post!
This is an example of what one of my completed pages will look like, though this is just an example filled with the individual  parts.

(image doesnt load on the website, not sure why)
<img src="/_images/verha_molnar_images_test.png" alt="alt text" width="200">
This is an exmaple of vera molnars work, where she uses generated boxes to create a tiling effect. 

I was influenced by this and I created my own take on the use of boxes creating a tiling pattern.
[Run my example code](_creativeCode/molnar-boxes/index.html)
(this link does not work currently, the running code does not run)


Here is an example of some of the code I used:
```
for(let k=numSquares-1;k>=0;k--){
    let amount = (1080 * sin(frameCount * 0.05) + 50)
    let r=random(amount)
    fill(random(40,180),random(0, 255),random(0, 255))
    stroke(random(0, 255),random(0, 255),random(0, 255))
    if(r<5){
      rect(0,0,step*k/numSquares)
    }
```
Here I will explain how the for loop works, some of the variables going in and how they are used to create the random boxes.

I will keep on explaining my code until the main parts are explained. Then I would talk a bit about my inspiration and how vera molnar's work inspired what I created and how I deviated from her work. 
