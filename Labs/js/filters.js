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
    let src = cv.imread(img1);
    let dst = new cv.Mat();
    let ksize = new cv.Size(5, 5);
    let anchor = new cv.Point(-1, -1);
    // You can try more different parameters
    cv.blur(src, dst, ksize, anchor, cv.BORDER_DEFAULT);
    // cv.boxFilter(src, dst, -1, ksize, anchor, true, cv.BORDER_DEFAULT)
    cv.imshow('imShow', dst);
    src.delete(); dst.delete();

}

function GaussianBlur(){
    let src = cv.imread(img1);
    let dst = new cv.Mat();
    let ksize = new cv.Size(5, 5);
    // You can try more different parameters
    cv.GaussianBlur(src, dst, ksize, 0, 0, cv.BORDER_DEFAULT);
    cv.imshow('imShow', dst);
    src.delete(); dst.delete();
}
function MedianBlur(){
    let src = cv.imread(img1);
    let dst = new cv.Mat();
    // You can try more different parameters
    cv.medianBlur(src, dst, 5);
    cv.imshow('imShow', dst);
    src.delete(); dst.delete();
}

function BilateralFilter(){
    let src = cv.imread(img1);
    let dst = new cv.Mat();
    cv.cvtColor(src, src, cv.COLOR_RGBA2RGB, 0);
    // You can try more different parameters
    cv.bilateralFilter(src, dst, 15, 80, 80, cv.BORDER_DEFAULT);
    cv.imshow('imShow', dst);
    src.delete(); dst.delete();
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
            GaussianBlur();
            break;
        case "MBlur":
            MedianBlur();
            break;
        case "BFilter":
            BilateralFilter();
            break;
        default:
            break;
    }
}