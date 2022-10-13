noseX=0
noseY=0

function preload(){
clown_nose=loadImage("https://i.postimg.cc/HsYwGd4X/clown-nose-png.jpg")
}

function setup(){
    canvas=createCanvas(300,300)
    canvas.center()
    video=createCapture(VIDEO)
    video.size(300,300)
    video.hide()

    poseNet=ml5.poseNet(video,modelLoaded)
    poseNet.on("pose",gotPoses)//To start the poseNet model.
}
function modelLoaded(){
    console.log("poseNet is loaded")
}

function draw(){
image(video,0,0,300,300)
fill(255,0,0)
stroke(255,0,0)
//circle(noseX,noseY,20)

//second way of drawing a circle
image(clown_nose,noseX,noseY,30,30)


}

function gotPoses(results){
if(results.length>0){
    console.log(results)
    noseX=results[0].pose.nose.x
    noseY=results[0].pose.nose.y
    console.log("Nose x="+noseX)
    console.log("Nose y="+noseY)
}
}



function takesnapshot(){
    save("my filter image.png")
}