"use strict";


// test of screen or orientation

$(window).resize(function () {
    var w = window,
            d = document,
            e = d.documentElement,
            g = d.getElementsByTagName('body')[0],
            x = w.Width || e.clientWidth || g.clientWidth;
    //y = w.innerHeight || e.clientHeight || g.clientHeight;
    //console.log("jquery resize event:" + x);
    Mscreen();

    var ch = new Init();

    // verfify if was load a image before the rotation of screen

    if ($("#fi").attr("src") !== "") {

            ch.loadImage($("#fi").attr("src"));

    }



});


Mscreen();


// end of test of orientation or window or sreen size

/*
 // Listen for resize changes
 window.addEventListener("resize", function () {
 // Get screen size (inner/outerWidth, inner/outerHeight)
 
 console.log("resize");
 
 // update the size screen if rotate sreenc or change the screen size -smartphone, tablets
 
 Mscreen();
 
 var ch = new Init();
 
 // verfify if was load a image before the rotation of screen
 
 if ($("#fi").attr("src") !== "") {
 
 //alert("onde esta a minha imagem");
 setTimeout(function () {
 
 // redraw image on center of canvas after change screen size with delay of a second
 
 ch.loadImage($("#test").attr("src"));
 
 
 }, 1000);
 
 }
 
 
 }, false);
 
 */

//class picture

function Picture(c) {

    var pic = new Image();

    this.upload = function (file, preview) {

        var f = document.getElementById(file).files[0]; // get only one file or the first file

        var fr = new FileReader();

        fr.onload = function (e) {
            $(preview).attr("src", e.target.result);
            $(preview).removeClass("hidden");
            pic.src = $(preview).attr("src");
        };

        fr.readAsDataURL(f);

        return true;

    };


    this.webCam = function (snap) {


        pic.src = snap;

        console.log(pic.src);


    };


    this.sample = function (original) {

        pic.src = original;

    };


    this.preview = function (output) {

        $(output).attr("src", pic.src);

    };


    this.process = function (original, inter, last) {

        var tmp = document.createElement('canvas'),
                ctmp = tmp.getContext('2d'),
                img = document.createElement('img'),
                ld;

        img.onload = function () {

            // put the same size of  image on canvas

            tmp.width = this.width;
            tmp.height = this.height;

            ctmp.drawImage(img, 0, 0); // apply image on main canvas

            $(original).attr("src", tmp.toDataURL());

            $(inter).attr("src", tmp.toDataURL());

            $(last).attr("src", tmp.toDataURL());

            ld = new Init();

            ld.loadImage($(inter).attr("src"));

            ld.lastImage("#cvf", $(original).attr("src"));

            //execute($(original).attr("src"));


        };

        img.src = pic.src; // source of image

    };

    var cv = document.querySelector(c),
            ctx = cv.getContext("2d");



    function execute(url) {



        var upimg = new Image();


        //ctx.translate(canvas.width / 2, canvas.height / 2);	

        upimg.onload = function () {


            ctx.drawImage(upimg, -upimg.width / 2, -upimg.height / 2);



        };



        upimg.src = url;


    }

    this.Change_Size = function (url) {

        execute(url);
    };



}



// methods to apply rotate, flip (horizontal, vertical)

function Essencials(el, img) {


    var canvas = document.querySelector(el),
            im = new Image(),
            zoom;


    // modify on  existing canvas 

    im.src = $(img).attr("src");

    this.flip_horizontal_canvas = function (zoom, state_h, inter) {
        var context = canvas.getContext("2d");
        this.state_h = state_h;
        this.zoom = zoom;


        context.clearRect(-im.width / 2, -im.height / 2, im.width, im.height);
    
        
        
        context.scale(-1, 1);

        context.drawImage(im, -im.width / 2, -im.height / 2, im.width, im.height);
        
  
    };


    this.flip_verical_canvas = function (zoom, state_v, inter) {
        this.state_v = state_v;
        var cv = canvas.getContext("2d");
        this.zoom = zoom;

        cv.clearRect(-im.width / 2, -im.height / 2, im.width, im.height);
        
      
        cv.scale(1, -1);

        cv.drawImage(im, -im.width / 2, -im.height / 2, im.width, im.height);
      
        
    };


    // modfify image with  temporary canvas 

    this.flip_horizontal_img = function (fina, inter, state) {

        // cf = document.querySelector(cvs)

        var cf = document.createElement('canvas'),
                ct = cf.getContext("2d"), x, h,
                finas = new Image();



        finas.src = $(fina).attr("src");

        cf.width = finas.width;
        cf.height = finas.height;

        if (state)
        {

            h = -1;
            x = finas.width * -1;


        }

        else {

            h = 1;
            x = 0;

        }



        ct.scale(h, 1);

        ct.drawImage(finas, x, 0, finas.width, finas.height);
        console.log("scale:" + h + "posX:" + x);
        //ct.restore();

        $(inter).attr("src", "");
        $(inter).attr("src", cf.toDataURL());

        $("#seal").val("");

        $("#seal").val(cf.toDataURL());



    };


    this.flip_verical_img = function (fina, inter, state) {


        var cf = document.createElement('canvas'),
                ct = cf.getContext("2d"), y, v,
                finas = new Image();



        finas.src = $(fina).attr("src");

        cf.width = finas.width;
        cf.height = finas.height;

        if (state)
        {

            v = -1;
            y = finas.height * -1;


        }

        else {

            v = 1;
            y = 0;

        }

        ct.scale(1, v);

        ct.drawImage(finas, 0, y, finas.width, finas.height);
        console.log("scale:" + v + "posy:" + y);
        //ct.restore();

        $(inter).attr("src", "");
        $(inter).attr("src", cf.toDataURL());

        $("#seal").val("");

        $("#seal").val(cf.toDataURL());




    };


    this.rotate_canvas = function () {

        var dg = 0;


        var crt = canvas.getContext("2d");


        crt.clearRect(-im.width / 2, -im.height / 2, im.width, im.height);
        dg = 90;

        crt.rotate(-dg * Math.PI / 180);

        //console.log("ap:"+dg);
        crt.drawImage(im, -im.width / 2, -im.height / 2);

        dg = +90;

        //console.log("after:"+dg);

        // $(inter).attr("src", canvas.toDataURL());
    };


    this.rotate_img = function (cvs, fina, inter, degree) {

        var cf = document.querySelector(cvs),
                crt = cf.getContext("2d"),
                finas = new Image();


        finas.src = $(fina).attr("src");

        var cw = finas.width,
                ch = finas.height,
                cx = 0,
                cy = 0;

        //   Calculate new canvas size and x/y coorditates for image
        switch (degree) {

            case 270:
                cw = finas.height;
                ch = finas.width;
                cy = finas.height * (-1);
                break;
            case 180:
                cx = finas.width * (-1);
                cy = finas.height * (-1);
                break;

            case 90:
                cw = finas.height;
                ch = finas.width;
                cx = finas.width * (-1);
                break;

        }

        //  Rotate image            
        cf.setAttribute('width', cw);
        cf.setAttribute('height', ch);
        crt.rotate(-degree * Math.PI / 180);
        crt.drawImage(finas, cx, cy);


        $(inter).attr("src", cf.toDataURL());

        $("#seal").val("");

        $("#seal").val(cf.toDataURL());


    };



}

 
// function to download
function saveToDisk(fileURL, fileName) {
    // for non-IE
    if (!window.ActiveXObject) {
        var save = document.createElement('a');
        save.href = fileURL;
        save.target = '_blank';
        save.download = fileName || fileURL;
        var evt = document.createEvent('MouseEvents');
        evt.initMouseEvent('click', true, true, window, 1, 0, 0, 0, 0,
                false, false, false, false, 0, null);
        save.dispatchEvent(evt);
        (window.URL || window.webkitURL).revokeObjectURL(save.href);
    }

    // for IE
    else if (window.ActiveXObject && document.execCommand) {
        var _window = window.open(fileURL, "_blank");
        _window.document.close();
        _window.document.execCommand('SaveAs', true, fileName || fileURL);
        _window.close();
    }
};




// adapt  canvas to size of screen
function Mscreen() {

    var w = window,
            d = document,
            e = d.documentElement,
            g = d.getElementsByTagName('body')[0],
            x = w.Width || e.clientWidth || g.clientWidth;



    if (screen.width < 330 || x < 330)
    {
        $("#cvs").attr("width", 200);
        $("#cvs").attr("height", 400);
        
      
        $(".navbar-collapse .myZoom").addClass("hidden");

        $(".navbar-collapse .valZoom").addClass("hidden");
        
        
    }

    else if (screen.width < 362 || x < 362)
    {
        $("#cvs").attr("width", 300);
        $("#cvs").attr("height", 420);

        $(".navbar-collapse .myZoom").addClass("hidden");

        $(".navbar-collapse .valZoom").addClass("hidden");


    }
    
    
    
    
      else if (screen.width < 452 || x < 362)
    {
        $("#cvs").attr("width", 300);
        $("#cvs").attr("height", 420);

        $(".navbar-collapse .myZoom").addClass("hidden");

        $(".navbar-collapse .valZoom").addClass("hidden");


    }

    else if (screen.width < 520 || x < 520)
    {
        $("#cvs").attr("width", 450);
        $("#cvs").attr("height", 450);

        
          $(".navbar-collapse .myZoom").addClass("hidden");

        $(".navbar-collapse .valZoom").addClass("hidden");
    


    }
    
   
    
    

    else if (screen.width < 642 || x < 642)
    {
        $("#cvs").attr("width", 500);
        $("#cvs").attr("height", 450);

        $(".navbar-collapse .myZoom").addClass("hidden");

        $(".navbar-collapse .valZoom").addClass("hidden");


    }

    else if (screen.width < 680 || x < 680)
    {
        $("#cvs").attr("width", 600);
        $("#cvs").attr("height", 350);

          $(".navbar-collapse .myZoom").addClass("hidden");

        $(".navbar-collapse .valZoom").addClass("hidden");
      

    }
    
    
     else if (screen.width <  765 || x < 765)
    {
        $("#cvs").attr("width", 650 );
        $("#cvs").attr("height", 450);
        
        $(".navbar-collapse .myZoom").addClass("hidden");

        $(".navbar-collapse .valZoom").addClass("hidden");
      
        $("h5").removeClass("hidden");
    }
    
    
    


    else if (screen.width < 990 || x < 990){
        $("#cvs").attr("width", 720);
        $("#cvs").attr("height", 420);
        
          
        $(".navbar-collapse .myZoom").removeClass("hidden");

        $(".navbar-collapse .valZoom").removeClass("hidden");
     
        $("h5").addClass("hidden");

    }

    else {

        $("#cvs").attr("width", 800);
        $("#cvs").attr("height", 400);
        
        $("h5").addClass("hidden");
     

    }


    //if (screen.width < 760 || x < 760) {


    // $(".navbar-header .myZoom").removeClass("hidden");

    // $(".navbar-header .valZoom").removeClass("hidden");

    //$(".navbar-collapse .myZoom").addClass("hidden");

    //$(".navbar-collapse .valZoom").addClass("hidden");

    //}
    //else
    //{
    //$(".navbar-collapse .myZoom").removeClass("hidden");

    //$(".navbar-collapse .valZoom").removeClass("hidden");



    // $(".navbar-header  .myZoom").addClass("hidden");

    //$(".navbar-header  .valZoom").addClass("hidden");
    //}





    //console.log(x);

}



function apply_Changes(type) {



    //apply on main and visible canvas
    this.onCanvas = function (cv, inter, final) {

        console.log("entrou apply");

        var ch = new Init();
        
        var c= document.querySelector(cv),
                ctx = c.getContext("2d");
        
     
        //type as boolean
        
                        // gets reference to canvas context
   
        // clear existing drawing paths
      
  // Use the identity matrix while clearing the canvas


   

            
        

        if (type) {

            
            //alert("onde esta a minha imagem");
           // setTimeout(function () {

                // redraw image on center of canvas after change screen size with delay of a second

                ch.loadImage($("#test").attr("src"));


           // }, 1000);



        }
        else {



            // verfify if was load a image before the rotation of screen



            //alert("onde esta a minha imagem");
            setTimeout(function () {

                // redraw image on center of canvas after change screen size with delay of a second

                ch.loadImage($("#fi").attr("src"));


            }, 1000);

        }



    };


    // apply on image 
    this.onImage = function (inter, final) {


        //type as boolean

        if (type) {


            $(final).attr("src", $(inter).attr("src"));


        }
    };

}







