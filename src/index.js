  let canvas = new fabric.Canvas('myCanvas');

  let firstCircle = true;
  let initPosition = true;
  

  
  canvas.setWidth(window.innerWidth)
  canvas.setHeight(window.innerHeight)

  let input = document.getElementsByTagName("input")[0]; // get the input box 


  let x1 = canvas.getWidth() / 2 + 33;
  let y1 = 18;
  let x2 = canvas.getWidth() / 2 + 33;
  let y2 = 18;
 
  let y2Position = 18;
  let leftOffset = 6;
  let level = 1;


  let binaryTreeArr = [];
  let arrayIndex = 1;

  let circ = new fabric.Circle({radius:17,fill:"white",stroke:"#000000"});
  
  canvas.add(circ);

 addFirstCircle = (num) => { //add the first circle
  let circle = new fabric.Circle({
    radius:17,
    left: canvas.getWidth() / 2,
    fill:"white",
    stroke:"#000000"
  })

  let text = new fabric.Text(
    num,{
      fontSize:20,
      left: (canvas.getWidth() / 2) + 7,
      top:7,
      fontWeight:"bold"
  })
  binaryTreeArr[1] = (num);

  canvas.add(circle)
  canvas.add(text);

 }

 addRightNode = (num) => {
    let line =  new fabric.Line([x1,y1,x2 + 300,y2 + y2Position], {
      stroke:"black",
      strokeWidth:3
    })

    let newcircle = new fabric.Circle({
      radius:17,
      left: x2 + 300,
      top: y2 + y2Position - 9,
      fill:"white",
      stroke:"#000000"
    })
  
    let newtext = new fabric.Text(
      num,{
        fontSize:20,
        left: x2 + 300 + 6,
        top: y2 + y2Position - 2,
        fontWeight:"bold"
    })

    binaryTreeArr[arrayIndex] = num; // add it in the new position of the BST

    canvas.add(line);
    canvas.add(newcircle);
    canvas.add(newtext)

    initPosition = true;
 }

 addLeftNode = (num) => {
  let line =  new fabric.Line([x1 - 34,y1,x2 - 300,y2 + y2Position], {
    stroke:"black",
    strokeWidth:3
  })

  let newcircle = new fabric.Circle({
    radius:17,
    left: x2 - 300,
    top: y2 + y2Position - 9,
    fill:"white",
    stroke:"#000000"
  })

  let newtext = new fabric.Text(
    num,{
      fontSize:20,
      left: x2  - 300 + leftOffset,
      top: y2 + y2Position - 2,
      fontWeight:"bold"
  })

  binaryTreeArr[arrayIndex] = num;

  canvas.add(line);
  canvas.add(newcircle);
  canvas.add(newtext);

  initPosition = true;
}
  
addNumber = () => { // add a number
    if (initPosition) { //reset the x and y values after you add in a node. 
     arrayIndex = 1;
     x1 = canvas.getWidth() / 2 + 33;
     y1 = 18;
     x2 = canvas.getWidth() / 2 + 33;
     y2 = 18;
     initPosition = false;
    }

    if (firstCircle) {
        addFirstCircle(input.value);
        firstCircle = false;
    } else {
      if (binaryTreeArr[arrayIndex] < input.value) { // if number is greater than current index
          debugger;
          arrayIndex = arrayIndex * 2 + 1;
          console.log("Right: " + arrayIndex);
          if (binaryTreeArr[arrayIndex] == undefined) { // if there is no value at the position, add the node 
              addRightNode(input.value)
          } else {
              x1 += x2 / 2;//put the current "point" in a new position towards the right
              y1 = y2;
              y2Position += 20;
              addNumber()
          }
      } else if (binaryTreeArr[arrayIndex] > input.value) { // if number to add is less than the current index
          debugger;
          arrayIndex = arrayIndex * 2;
          console.log("Left " + arrayIndex)
          if (binaryTreeArr[arrayIndex] == undefined) {
            addLeftNode(input.value)
        } else {
            x1 =- x2 / 2;//put the current "point" in a new position towards the right
            y1 = y2;
            y2Position += 20;
            addNumber()
        }
      }
    }
  }
 



