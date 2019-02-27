let img=document.getElementById("imgsrc");
let imgOrigen=document.getElementById("imagenOrigen");
//Planos de colores
let brgPlanes = new cv.MatVector();
let hsv_planes = new cv.MatVector();
function loadImage(){
    img=document.getElementById("imgsrc");
    imgOrigen=document.getElementById("imagenOrigen");
    imgOrigen.src=URL.createObjectURL(img.files[0]);;
}

function  HSVProcessing(){
    let imHSV= new cv.Mat();
    let imRGB = new cv.Mat();
   

    imRGB = cv.imread(imgOrigen);
    if(imRGB != null){
        //Convertimos al espacio de color HSV
        cv.cvtColor(srcimg,imHSV,cv.COLOR_BGR2HSV);
        //dividimos la imagen en sus canales  A, V y R
        cv.split(imHSV, hsv_planes);
        cv.split(imRGB, brgPlanes);
    }
}