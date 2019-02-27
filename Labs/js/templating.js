let img1=document.getElementById("imgsrc1");
let img2=document.getElementById("imgsrc2");
let file1=document.getElementById("file1");
let file2=document.getElementById("file2");

function loadImage(e){
    alert(e);
    if(e=="file1"){
        img1=document.getElementById("imgsrc1");
        file1=document.getElementById("file1");
        img1.src=URL.createObjectURL(file1.files[0]);
    }else{
        console.log("set img2");
        img2=document.getElementById("imgsrc2");
        file2=document.getElementById("file2");
        img2.src=URL.createObjectURL(file2.files[0]);
    }
}

function findIt(){
    let src = cv.imread(img1);
    let templ = cv.imread(img2);
    let dst = new cv.Mat();
    let mask = new cv.Mat();
    cv.matchTemplate(src, templ, dst, cv.TM_CCOEFF, mask);
    let result = cv.minMaxLoc(dst, mask);
    let maxPoint = result.maxLoc;
    let color = new cv.Scalar(255, 0, 0, 255);
    let point = new cv.Point(maxPoint.x + templ.cols, maxPoint.y + templ.rows);
    cv.rectangle(src, maxPoint, point, color, 2, cv.LINE_8, 0);
    cv.imshow('out', src);
    src.delete(); dst.delete(); mask.delete();
}