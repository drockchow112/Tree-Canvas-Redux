let canvas = new fabric.Canvas('myCanvas');

let firstCircle = true;
let initPosition = true;

canvas.setWidth(window.innerWidth)
canvas.setHeight(window.innerHeight)

let input = document.getElementsByTagName("input")[0]; // get the input box 


let y2Position = 18;
let leftOffset = 6;
let level = 1;

let x = 20;
let y = 50;

let binaryTreeArr = [];
let arrayIndex = 1;

let leftCircleCornerX;
let leftCircleCornerY;
let rightCircleCornerX;
let rightCircleCornerY;

let currentLineOffset = 300;
let lineOffsetVal = 200;
let yValue = 80; 



let circle = new fabric.Circle({
  radius:17,
  fill:"white",
  stroke:"#000000"
})

addFirstCircle = (num) => { //add the first circle
let circle = new fabric.Circle({
  radius:17,
  fill:"white",
  stroke:"#000000"
})

let text = new fabric.Text(
  num,{
    fontSize:20,
    top:7,
    fontWeight:"bold"
})
binaryTreeArr[1] = (num);

canvas.add(circle)
canvas.add(text);

circle.centerH();
text.centerH();

leftCircleCornerX = circle.getCoords()[3].x;
leftCircleCornerY = circle.getCoords()[3].y;
rightCircleCornerX = circle.getCoords()[2].x;
rightCircleCornerY = circle.getCoords()[2].y;

}

addRightNode = (num) => {
    let newLine =  new fabric.Line([rightCircleCornerX - 5, //x1
    rightCircleCornerY - 9, //y1
    rightCircleCornerX + currentLineOffset, //x2 
    yValue], { //y2 
        stroke:"black",
        strokeWidth:3
      })


  let newcircle = new fabric.Circle({
    radius:17,
    fill:"white",
    stroke:"#000000",
    left: newLine.x2 - 2,
    top: newLine.y2 - 6
  })

  console.log(newcircle);

  let newtext = new fabric.Text(
    num,{
      fontSize:20,
      left: newLine.x2 + 5,
      top: newLine.y2,
      fontWeight:"bold"
  })

  let group = new fabric.Group([newcircle,newtext])

  binaryTreeArr[arrayIndex] = num; // add it in the new position of the BST

  canvas.add(newLine);
  canvas.add(group);


  initPosition = true;
}

addLeftNode = (num) => {
  let newLine =  new fabric.Line([leftCircleCornerX + 2, //x1
    leftCircleCornerY - 9, //y1
    leftCircleCornerX - currentLineOffset, //x2 
    yValue], { //y2 
        stroke:"black",
        strokeWidth:3
      })

  let newcircle = new fabric.Circle({
    radius:17,
    fill:"white",
    stroke:"#000000",
    left: newLine.x2 - 2,
    top: newLine.y2 - 6
  })


  let newtext = new fabric.Text(
    num,{
      fontSize:20,
      left: newLine.x2 + 5,
      top: newLine.y2,
      fontWeight:"bold"
  })

  let group = new fabric.Group([newcircle,newtext])

  binaryTreeArr[arrayIndex] = num; // add it in the new position of the BST

  canvas.add(newLine);
  canvas.add(group);

  initPosition = true;
}

addNumber = () => { // add a number
  if (initPosition) { //reset the x and y values after you add in a node. 
   arrayIndex = 1;
   initPosition = false;
   currentLineOffset = 300;
   yValue = 80;
  }

  if (firstCircle) {
      addFirstCircle(input.value);
      firstCircle = false;
  } else {
    if (binaryTreeArr[arrayIndex] < input.value) { // if number is greater than current index
        arrayIndex = arrayIndex * 2 + 1;
        if (binaryTreeArr[arrayIndex] == undefined) { // if there is no value at the position, add the node 
            addRightNode(input.value)
        } else {
          currentLineOffset -= lineOffsetVal
          yValue += yValue

          let circle = canvas.getObjects("group")
          .filter((group) =>  // get group of objects 
            group._objects[1].text == binaryTreeArr[arrayIndex]
          )

          console.log("Right");
          console.log(circle[0].getCoords());
          

          leftCircleCornerX = circle[0].getCoords()[3].x;
          leftCircleCornerY = circle[0].getCoords()[3].y;
          rightCircleCornerX = circle[0].getCoords()[2].x;
          rightCircleCornerY = circle[0].getCoords()[2].y;
          
          addNumber();
        }
    } else if (binaryTreeArr[arrayIndex] > input.value) { // if number to add is less than the current index
        arrayIndex = arrayIndex * 2;
        if (binaryTreeArr[arrayIndex] == undefined) {
          addLeftNode(input.value)
      } else {
          currentLineOffset -= lineOffsetVal;
          yValue += yValue;


          let circle = canvas.getObjects("group")
          circle.filter((group) =>  // get group of objects 
            group._objects[1].text == binaryTreeArr[arrayIndex]
          );

          console.log("Left");
          console.log(circle[0].getCoords());

          leftCircleCornerX = circle[0].getCoords()[3].x;
          leftCircleCornerY = circle[0].getCoords()[3].y;
          rightCircleCornerX = circle[0].getCoords()[2].x;
          rightCircleCornerY = circle[0].getCoords()[2].y;

          addNumber();
      }
    }
  }
}




