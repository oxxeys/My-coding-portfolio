  // Classifier Variable
  let classifier;
  // Model URL
  let imageModelURL = 'https://teachablemachine.withgoogle.com/models/GCtMnX9Mx/';
  
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
    createCanvas(320, 260, WEBGL);
    // Create the video
    video = createCapture(VIDEO);
    video.size(320, 240);
    video.hide();

    flippedVideo = ml5.flipImage(video);
    // Start classifying
    classifyVideo();
  }

  function draw() {
//     person correlates to 0- noone, 1 - Billy, 2 - Jean
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
    
    // Draw the video
    // image(flippedVideo, 0, 0);

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