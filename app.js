var desktopImg = document.getElementById("desktop");

function changeImg(){
    if(window.innerWidth <= "375"){
        desktopImg.setAttribute("src", "./assets/images/image-web-3-mobile.jpg");
    }
    else if(window.innerWidth > "375"){
        desktopImg.setAttribute("src", "./assets/images/image-web-3-desktop.jpg");
    }
}

window.setInterval(changeImg, 1000);