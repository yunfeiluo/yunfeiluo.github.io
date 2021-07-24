
var pos = 0;
//Prevent view source
window.onload =function(){
    //scroll to top button visibility
    pos = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    // if (pos != 0){
    //     $("#scroll_top").show();
    // }
    // else {
    //     ("#scroll_top").hide();
    // }
    // //right click
    // document.oncontextmenu = function(){
    //     return false;
    // };
    // block some shortcut keys
    document.onkeydown = function (){
        var e = window.event || arguments[0];
        // //F12
        // if(e.keyCode == 123){
        //     return false;
        // }
        //Ctrl+Shift+I
        if((e.ctrlKey) && (e.shiftKey) && (e.keyCode == 73)){
            return false;
        }
        //Shift+F10
        else if((e.shiftKey) && (e.keyCode == 121)){
            return false;
        }
        //Ctrl+U
        else if((e.ctrlKey) && (e.keyCode == 85)){
            return false;
        }
        else if((e.ctrlKey) && (e.keyCode == 83)){
            return false;
        }
    };
};

//scroll lisener (mainly for scroll-top)
window.onscroll=function(){
    pos = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    // if (pos != 0){
    //     $("#scroll_top").show();
    // }
    // else {
    //     $("#scroll_top").hide();
    // }
};

//global variables
var imgs = [
"url(static/images/slide0.jpg)", 
"url(static/images/slide1.jpg)", 
"url(static/images/slide2.jpg)"
];
var index = 0;

//function for slides
function prev(){
    //TODO
    var hbg = document.getElementById('headerBGI');
    index -= 1;
    if (index < 0){
        index = imgs.length - 1;
    }
    hbg.style.backgroundImage = imgs[index];
}

function next(){
    //TODO
    var hbg = document.getElementById('headerBGI');
    index += 1;
    if (index > (imgs.length - 1)){
        index = 0;
    }
    hbg.style.backgroundImage = imgs[index];
    //hbg[0].style.animationName = fade;
}

//function for smooth scrolling
function scroll_down(str){
    //TODO
    var header_height = document.getElementsByTagName("header")[0].offsetHeight;
    var secs = document.getElementsByTagName("section");
    if (str == 'about'){
        //TODO
        window.scrollTo(0, header_height
            + secs[0].offsetHeight);
        //alert(header_height);
    }
    else if (str == 'blogs'){
        //TODO
        window.scrollTo(0, header_height 
            + secs[0].offsetHeight
            + secs[1].offsetHeight);
    }
    else if (str == 'contact'){
        window.scrollTo(0, header_height 
            + secs[0].offsetHeight
            + secs[1].offsetHeight
            + secs[2].offsetHeight);
    }
    else if (str == 'bcontact'){
        window.scrollTo(0, header_height 
            + secs[0].offsetHeight);
    }
}

//scroll to the top
function scroll_top(){
    window.scrollTo({ 
        top: 0
    });
}

//opacity action
var button;
function opa_up(b0){
    //TODO
    if (b0 == 'p'){
        button = document.getElementsByTagName("button");
        button[0].style.opacity = 1;
    }
    else if (b0 == 'n'){
        button = document.getElementsByTagName("button");
        button[1].style.opacity = 1;
    }
    else{
        button = document.getElementById(b0);
        button.style.opacity = 1;
    }
}

function opa_down(b1){
    //TODO
    if (b1 == 'p'){
        button[0].style.opacity = 0.4;
    }
    else if (b1 == 'n'){
        button[1].style.opacity = 0.4;
    }
    else{
        button.style.opacity = 0.4;
    }
}
