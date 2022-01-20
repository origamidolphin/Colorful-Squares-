## Before Starting This Task

Watch all the following videos and skim their accompanying notes.

* Mouse Pressing ([video](https://drive.google.com/file/d/1ekM78-EFKmugSe8s51ywTXe0H64JfPKe/view?usp=sharing)|[note](https://github.com/MissStrong/ICS2O_Semester_1_2021-2022/blob/main/Notes/Unit%201/Note%2019%20-%20Mouse%20Pressing.md))
* Key Pressing ([video](https://drive.google.com/file/d/1jGu3DSze1URmfF1xC60_6E5NfGLYZTPf/view?usp=sharing)|[note](https://github.com/MissStrong/ICS2O_Semester_1_2021-2022/blob/main/Notes/Unit%201/Note%2020%20-%20Key%20Pressing.md))

**Only begin this task if you have already finished Exercise 6.**

## Instructions

Go to **script.js** under **Files** and and complete the bodies of `draw()`, `mousePressed()`, and `keyPressed()` to replicate the gif below. Here are some details:
* each square is random colour
* each square has a random width between 10 and 50
* pressing the mouse clears the screen and makes the backgound white
* pressing a key clears the screen and makes the background a random colour
![](https://raw.githubusercontent.com/MissStrong/ICS2O_Semester_1_2021-2022/main/Images/Colourful_Squares.gif)

*Do not* modify anything in **index.html**. This HTML file needs to be there in order for the sketch to display properly.

When it works, click **Submit** in the top right corner. 

## Challenge

If you'd like a challenge you can modify your program so that:
* each square is random colour
* at first, each square has one of the following random widths: 10, 20, 30, 40, or 50
* pressing the mouse changes the possible widths by increasing each possible value by 10 (e.g. after the first click the widths can be 20, 30, 40, 50, or 60)
* pressing a key clears the screen and makes the background the same random colour as the most recent square

![](https://raw.githubusercontent.com/MissStrong/ICS2O_Semester_1_2021-2022/main/Images/Colourful_Squares2.gif)

## script.js

Here is the original code in **script.js** for reference:

```javascript
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(20);
  // What else goes here?
}

function draw() {
  // What goes here?
}

function mousePressed() {
  // What goes here?
}

function keyPressed() {
  // What goes here?
}

```
