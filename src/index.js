  let canvas = new fabric.Canvas('myCanvas');

  let firstCircle = true;
  let initPosition = true;

  
  canvas.setWidth(window.innerWidth)
  canvas.setHeight(window.innerHeight)

  let input = document.getElementsByTagName("input")[0];


  let x1Right = canvas.getWidth() / 2 + 33;
  let y1Right = 18;
  let x2Right = 1000;
  let y2Right = 55;
  let x1Left = canvas.getWidth() / 2 - 1;
  let y1Left = 18;
  let x2Left = 300;
  let y2Left = 55;

  let binaryTreeArr = [];
  let arrayIndex = 1;
 


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
    let line =  new fabric.Line([x1Right,y1Right,x2Right,y2Right], {
      stroke:"black",
      strokeWidth:3
    })

    let newcircle = new fabric.Circle({
      radius:17,
      left: x2Right,
      top: y2Right - 9,
      fill:"white",
      stroke:"#000000"
    })
  
    let newtext = new fabric.Text(
      num,{
        fontSize:20,
        left: x2Right + 6,
        top: y2Right - 2,
        fontWeight:"bold"
    })

    binaryTreeArr[arrayIndex] = num;

    canvas.add(line);
    canvas.add(newcircle);
    canvas.add(newtext)

    initPosition = true;

    
 }

 addLeftNode = (num) => {
  let line =  new fabric.Line([x1Left,y1Left,x2Left,y2Left], {
    stroke:"black",
    strokeWidth:3
  })

  let newcircle = new fabric.Circle({
    radius:17,
    left: x2Left,
    top: y2Left - 9,
    fill:"white",
    stroke:"#000000"
  })

  let newtext = new fabric.Text(
    num,{
      fontSize:20,
      left: x2Left + 6,
      top: y2Left - 2,
      fontWeight:"bold"
  })

  binaryTreeArr[arrayIndex] = num;

  canvas.add(line);
  canvas.add(newcircle);
  canvas.add(newtext);

  initPosition = true;
  
}
  

  addNumber = () => { // add a number
    if (initPosition) {
      arrayIndex = 1;
     x1Right = canvas.getWidth() / 2 + 33;
     y1Right = 18;
     x2Right = 1000;
     y2Right = 55;
     x1Left = canvas.getWidth() / 2 - 1;
     y1Left = 18;
     x2Left = 300;
     y2Left = 55;
     initPosition = false;
    }


    if (firstCircle) {
        addFirstCircle(input.value);
        firstCircle = false;
    } else {
      if (binaryTreeArr[arrayIndex] < input.value) { // if number is greater than current index
          arrayIndex = arrayIndex * 2 + 1;
          console.log("Right " + arrayIndex);
          if (binaryTreeArr[arrayIndex] == undefined) {
              addRightNode(input.value)
          } else {
              addNumber()
          }
      } else if (binaryTreeArr[arrayIndex] > input.value) { // if number to add is less than the current index
          arrayIndex = arrayIndex * 2;
          console.log("Left " + arrayIndex)
          if (binaryTreeArr[arrayIndex] == undefined) {
            addLeftNode(input.value)
        } else {
            addNumber()
        }
      }
    }
  }
 



