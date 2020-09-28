  let canvas = new fabric.Canvas('myCanvas');

  let firstCircle = true;

  
  canvas.setWidth(window.innerWidth)
  canvas.setHeight(window.innerHeight)

  let input = document.getElementsByTagName("input")[0];

 
  


 addFirstCircle = (num) => { //add the ifrst circle
   console.log("Number: " + num)
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

  canvas.add(circle)
  canvas.add(text);

 }

 makeLine = (coords) => {
    let line =  new fabric.Line(coords, {
      stroke:"black",
      strokeWidth:3
    })

    canvas.add(line);
    
 }
  

  addNumber = () => { // add a number
    if (firstCircle) {
        addFirstCircle(input.value);
        firstCircle = false;
    } else {
        makeLine([100,100,300,300])
    }
  }
 



