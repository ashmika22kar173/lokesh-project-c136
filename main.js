status = "";
objects = [];

function preload() {

}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.position(530, 300);
    video = createCapture(VIDEO)
    video.size(300, 300)
    video.hide();

    object = ml5.objectDetector('cocossd', modelloaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

    image(video, 0, 0, 500, 500)
       
    function start(){
        if (status != "") {
            object.detect(video, gotresult);
            for (i = 0; i < objects.length; i++) {
                document.getElementById("status").innerHTML = "status: Detected Objects";
                document.getElementById("found_the_object").innerHTML = + which_object + "Found";
              
                which_object = document.getElementById("input1").value;
            }
        }
        
    
    }
    
    
    


function modelloaded() {
    console.log("model loaded");
    status = true;
}

function draw(){
image(video, 0, 0, 500, 500);

}