let img1;
function loadImage(){
    var imageFile=document.getElementById("img1");
    img1=document.getElementById("image1");
    img1.src=URL.createObjectURL(imageFile.files[0]);

}

function Averaging(){
    //canvas output
    var out=document.getElementById("imShow");
    var imSrc=cv.imread(img1);
    //Imagen destino
    let dst = new cv.Mat();
    //Creamos un kernel de 3X3
    let M = cv.Mat.eye(3, 3, cv.CV_32FC1);
    //Anchor
    let anchor = new cv.Point(-1, -1);
    //Filter
    cv.filter2D(imSrc, dst, cv.CV_8U, M, anchor, 0, cv.BORDER_DEFAULT);
    cv.imshow(out, dst);


}

function Bluring(){
    //Removes Noise of the image
    //canvas output
    var out=document.getElementById("imShow");
    var imSrc=cv.imread(img1);
    //Imagen destino
    let dst = new cv.Mat();
    //Creamos un kernel de 3X3
    let M = cv.Mat.ones(5, 5, cv.CV_32F);
    //Anchor Centro del Kernel
    let anchor = new cv.Point(-1, -1);
    //Filter byass 0
    cv.filter2D(imSrc, dst, cv.CV_8U, M, anchor, 0, cv.BORDER_DEFAULT);
    cv.imshow(out, dst);


}

function ApplyFilter(){
    var filter=document.getElementById("FilterType").value;
    switch (filter) {
        case "Average":
            Averaging();
            break;

        case "Blur":
            Bluring();
            break;
        case "GBlur":
            break;
        case "MBlure":
            break;
        case "BFilter":
            break;
        default:
            break;
    }
}