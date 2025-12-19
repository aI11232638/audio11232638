// Copyright (c) 2019 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
Webcam Image Classification using a pre-trained customized model and p5.js
This example uses p5 preload function to create the classifier
=== */

// Global variable to store the classifier
let classifier;

// Label (start by showing listening)
let label = "listening";

// Teachable Machine model URL:
let soundModelURL = 'https://ai11232638.github.io/audio11232638/model.json';


function setup() {

  createCanvas(320, 320);

  

  // Create the video

    var constraints = {

    audio: false,

    video: {

      facingMode: {

        exact: "environment"

      }

    }   

    //video: {

      //facingMode: "user"

    //}

  };

  video = createCapture(constraints);

  video.size(320, 320);

  video.hide();

  flippedVideo = ml5.flipImage(video)

  // Start classifying

  classifyVideo();

// The model recognizing a sound will trigger this event
function gotResult(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  // The results are in an array ordered by confidence.
  // console.log(results[0]);
  label = results[0].label;

}
