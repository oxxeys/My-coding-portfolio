---
title: "Machine Learning"
date: 2024-05-29
---

This experiment started with the exploration of teachable machine through a class demo. Teachable machine is a website provided by google that allows you to teach a machine learning model your own data through images, live webcam footage and audio. For this experiment I decided to teach the model using images provided by my webcam. An example of this process of teaching can be seen below.


<img src="/My-coding-portfolio/images/MachineLearning.png" alt="machine learning workflow example" width="200">
<img src="/My-coding-portfolio/images/MachineLearning.png" alt="machine learning workflow example" width="200"> <br>

After teaching the model, it is added into a p5 project through this code:
```
<div>Teachable Machine Image Model - p5.js and ml5.js</div>
<script src="https://cdn.jsdelivr.net/npm/p5@latest/lib/p5.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/p5@latest/lib/addons/p5.dom.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/ml5@latest/dist/ml5.min.js"></script>
```
This goes in the html file and below goes into the javascript file.
```
  // Classifier Variable
  let classifier;
  // Model URL
  let imageModelURL = './my_model/';
  
  // Video
  let video;
  let flippedVideo;
  // To store the classification
  let label = "";

  // Load the model first
  function preload() {
    classifier = ml5.imageClassifier(imageModelURL + 'model.json');
  }

  function setup() {
    createCanvas(320, 260);
    // Create the video
    video = createCapture(VIDEO);
    video.size(320, 240);
    video.hide();

    flippedVideo = ml5.flipImage(video);
    // Start classifying
    classifyVideo();
  }

  function draw() {
    background(0);
    // Draw the video
    image(flippedVideo, 0, 0);

    // Draw the label
    fill(255);
    textSize(16);
    textAlign(CENTER);
    text(label, width / 2, height - 4);
  }

  // Get a prediction for the current video frame
  function classifyVideo() {
    flippedVideo = ml5.flipImage(video)
    classifier.classify(flippedVideo, gotResult);
    flippedVideo.remove();

  }

  // When we get a result
  function gotResult(error, results) {
    // If there is an error
    if (error) {
      console.error(error);
      return;
    }
    // The results are in an array ordered by confidence.
    // console.log(results[0]);
    label = results[0].label;
    // Classifiy again!
    classifyVideo();
  }
```
The above code creates a square that reflects what is shown on the web cam feed and then changes the label based on what the machine learning model predicts to be on the screen. In my code it will predict if the web cam is showing myself, jean or nothing. 


<img src="/My-coding-portfolio/images/first-example.png" alt="picture of my first example" width="200">



The first experiment I wanted to try to achive was to create a changing colour label when the user changes between billy, jean or no-one. I accomplished this with a simple if statment that changed the background as after looking into it, I realised that the default code was drawing a general background but using the web cam screen to make it look like the label had a background.
```
    if (label == 'Billy'){
      background(115,191,135);
    } else if (label == "Jean"){
      background(252,159,184);  
    }else{
      background(200,159,252)
    }
```
This may be a very simple experiment, but I like it as I found it really challenging to change the label background colour as I made numerous attempts to change the colour thinking that the label had its own background colour / box. 

[Run the first experiment](/My-coding-portfolio/creativeCode/Cube\Default/index.html)


From here, for my next experiment I wanted to play around with filters. For this experiment I decided to keep the label changing colours from the previous experiment. From here I added to the if statment above as so I could later on easily refer to each person by using an intiger.
```
      //person correlates to 0- no-one, 1 - Billy, 2 - Jean
    let person = 0;
    if (label == 'Billy'){
      background(115,191,135);
      person = 1
    } else if (label == "Jean"){
      background(252,159,184);  
      person = 2;
    }else{
      background(200,159,252)
      person = 0;
    }
    
```
Then below the if statment I added in another if statment that added a filter depending on the person the model predicted was showing. This lead to a level of interactivity I did not expect as whenever the program detected person 1, it would turn the screen completly dark 
```
if (person == 1){
      filter(THRESHOLD)
    } else if (person == 2){
      filter(BLUR, 3)
    } else {
      filter(POSTERIZE, 2)
    }
```
Two examples of the filters in action:

<img src="/My-coding-portfolio/images/black-and-white.png" alt="Filter 1" width="200">
<img src="/My-coding-portfolio/images/blur.png" alt="Filter 2" width="200">


[Run the first experiment](/My-coding-portfolio/creativeCode/Cube\Filters/index.html)



For the third and final experiment, I decided to add in some 3d objects as well as a panorama to make intresting camera effects. To accomplish this I went to the if statment I used in my filters experiment and I changed out the filters for other effects. I also added in rotateZ,X and Y as to make the box rotate. (box is the 3d version of cube in p5)
```
    normalMaterial();
    push();
    rotateZ(frameCount * 0.01)
    rotateX(frameCount * 0.01)
    rotateY(frameCount * 0.01)
    
    if (person == 1){
      texture(flippedVideo)
    } else if (person == 2){
      panorama(flippedVideo)
      metalness(200)
      shininess(200)
    } else {
      ambientLight(255,255,255)
      emissiveMaterial(255,0,0)
    }
    box(70,70,70)
    pop();
```



<img src="/My-coding-portfolio/images/ellpise.png" alt="Filter 2" width="200">
<img src="/My-coding-portfolio/images/cube-camera.png" alt="Filter 2" width="200">


[Run the third experiment](/My-coding-portfolio/creativeCode/Cube\cool-version/index.html)
