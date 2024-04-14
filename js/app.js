//"use strict";


$('.collapse').collapse({
    toggle: false
});


$("#bt").click(function () {
    $(".collapse").collapse("hide");
});


// activatio of tooltip funcionality
$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

// activation of popovwe funcionality
$(function () {
    $('[data-toggle="popover"]').popover();
});



var img = new Picture("#cvs");

var bas;
//Load a sample 
$("#sample").click(function () {



    img.sample("sample/lamb.jpg");

    img.process('#original', '#icvs', '#fi');


}

);

//load image from a disk
$("#files").on("change", function () {


    var up = img.upload('files', "#preview");

    if (up) {

        $("#confirmUp").removeClass("hidden");
    }


    $("#confirmUp").click(function () {


        img.process('#original', '#icvs', '#fi');




    });


});


var w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        x = w.Width || e.clientWidth || g.clientWidth;

console.log("no upd:" + x);

$(window).resize(function () {

    w = window,
            d = document,
            e = d.documentElement,
            g = d.getElementsByTagName('body')[0],
            x = w.Width || e.clientWidth || g.clientWidth;
    //y = w.innerHeight || e.clientHeight || g.clientHeight;
    //console.log("jquery resize event:" + x);

    console.log("update:" + x);


});






$("#menuEssencial").click(function () {



    $("li.menu").addClass("hidden");
    $("li.essencials").removeClass("hidden");
    $("li.essencials").addClass("fade-in");

    $("li.essencials.cp ").addClass("hidden");

    $("li.menu.essencials a i").addClass("active text-primary");


    if (screen.width < 760 || x < 760) {



        $(".navbar-header .feedback").removeClass("hidden");
        $(".navbar-header .feedback").addClass("fade-in");

        $(".navbar-header  .myZoom").addClass("hidden");

        $(".navbar-header  .valZoom").addClass("hidden");

    } else {

        $("nav li.feedback").removeClass("hidden");
        $("nav li.feedback").addClass("fade-in");

    }

});


//  show again main menu

$(".feed").click(function () {



    $("nav li").removeClass("fade-in");
    $("nav li").addClass("hidden");

    $("nav li.menu").removeClass("hidden");

    $("li.menu.effects a i").removeClass("active text-primary");

    $("li.menu.essencials a i").removeClass("active text-primary");

    $("li.menu.filters a i").removeClass("active text-primary");

    $("nav li.menu.text").addClass("hidden");



    if (screen.width < 760 || x < 760) {

        $(".navbar-header .feedback").addClass("hidden");
        $(".navbar-header .feedback").removeClass("fade-in");



    } else {

        $("nav li.feedback").addClass("hidden");
    }

    $("nav li.res").addClass("hidden");

    $("nav li.previewCrp").addClass("hidden");
    $("nav li.feedback").removeClass("fade-in");
    $("#overlay").addClass("hidden");

    $("nav li.menu").addClass("fade-in");

});



$("li.feedback a.apl").click(function () {

    // var inter = $("#test").attr("src");

    // $("#fi").attr("src", inter);

    console.log("apl");
    var ap = new apply_Changes(true);

    // ap.onCanvas("#cvs", "#test", "#fi");

    ap.onImage("#test", "#fi");

    console.log("apply");

});

$("#menuText").click(function () {

    var canvas2 = $("#cvs").get(0);
    var context = canvas2.getContext('2d'), mt;



    mt = new TextInsert(canvas2, context);


});


$("#prep").click(function () {

    //var c = document.querySelector('#cvs');

    saveToDisk($("#fi").attr("src"), "canvas.png");


});






function Init() {
    var canvas = document.querySelector('#cvs');

    var upimg = new Image();
    var element = canvas.getContext("2d");
    var currentScale = 1;
    var startX, startY, isDown = false;





    //load image in canvas

    //loadImage();

    element.translate(canvas.width / 2, canvas.height / 2);


    this.loadImage = function (url) {



        //get image until terminate
        upimg.onload = function () {


            drawImage();

            //element.drawImage(upimg, -upimg.width / 2, -upimg.height / 2, upimg.width, upimg.height);


            $(".valZoom span").text(" " + $(".myZoom").val());
        };

        upimg.src = url; // source of image

    };


    this.lastImage = function (cvs, url) {

        var fnl = document.createElement('img'),
                cf = document.querySelector(cvs),
                ctx = cf.getContext("2d");


        fnl.onload = function () {

            // put the same size of  image on canvas
            ctx.clearRect(0, 0, cf.width, cf.height);

            cf.width = this.width;
            cf.height = this.height;



            ctx.drawImage(fnl, 0, 0); // apply image on main canvas

            $("#test").attr("src", cf.toDataURL());

            $("#seal").val("");


        };

        fnl.src = url;



    };





    function drawImage() {



        clear();



        element.save();

        element.scale(currentScale, currentScale);

        element.drawImage(upimg, -upimg.width / 2, -upimg.height / 2, upimg.width, upimg.height);

        element.restore();

        console.log("drawing");
    }




    function clear() {

        element.clearRect
                (
                        -upimg.width / 2 + currentScale,
                        -upimg.height / 2 + currentScale,
                        upimg.width + currentScale,
                        upimg.height + currentScale
                        );
    }

    // moviments of mouse





    canvas.onmousedown = function (e) {
        var pos = getMousePos(canvas, e);
        startX = pos.x;
        startY = pos.y;
        isDown = true;
        console.log("x:" + startX + "-" + "y" + startY);

    };

    canvas.onmousemove = function (e) {

        var pos = getMousePos(canvas, e);

        // colocado para apagar a imagem anterior
        if (isDown) {


            var x = pos.x;
            var y = pos.y;
            clear();
            element.translate(x - startX, y - startY);


            drawImage();

            startX = x;
            startY = y;

        }
    };

    canvas.onmouseup = function (e) {
        isDown = false;
    };




    function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    }
    ;

    // new  crop----------------------------------------------------------------

    $("#crp").click(function () {

        $("#overlay").removeClass("hidden");
        $("#cropimg").removeClass("hidden");
        $(".essencials").addClass("hidden");
        $(".cp").removeClass("hidden");


    });



    $("#cropimg").click(function () {

        console.log("entrei");
        var y = $("#overlay").css("top");
        var x = $("#overlay").css("left");
        var width = $("#overlay").css("width");
        var height = $("#overlay").css("height");
        console.log(x + " : " + y + " : " + width + " : " + height);
        croprectangle(parseInt(x.replace('px', '')),
                parseInt(y.replace('px', '')), parseInt(width.replace('px', '')), parseInt(height.replace('px', '')));
    });


    function croprectangle(x, y, width, height) {
        var tmp = document.createElement('canvas'),
                ctmp = tmp.getContext('2d');


        console.log("x: " + x + " Y: " + y + " W: " + width + " H: " + height + " : " + parseInt(-250 + x) + " : " + parseInt(-250 + y));
        var imageData = element.getImageData(x - 70, y - 75, width, height); //NOT translated corodinates X and Y only
        ctmp.canvas.width = width;
        ctmp.canvas.height = height;
        ctmp.putImageData(imageData, 0, 0);

        $("#prevModal").attr("src", tmp.toDataURL());
        //element.clearRect(-250, -250, 500, 500);
        //element.rect(parseInt(-800/2+x), parseInt(-400/2+y),width,height); //translated corodinates X and Y only
        //element.stroke();
        //element.clip();
        //drawImage(); 


    }


    $("#confirmCrop").click(function () {

        element.clearRect(-upimg.width / 2, -upimg.height / 2, upimg.width, upimg.height);

        //get image until terminate
        upimg.onload = function () {


            element.drawImage(upimg, -upimg.width / 2, -upimg.height / 2, upimg.width, upimg.height);
        };

        upimg.src = $("#prevModal").attr("src"); // source of image



    });

    $("#overlay").resizable({handles: "n, e, s, w, se, sw, nw, ne", containment: "#cvs"});
    $("#overlay").draggable({containment: "#cvs"});

// -----Zoom event with mouse and touch

    $(".myZoom").on('input', function () {

        currentScale = $(this).val();
        console.log(currentScale);
        $(".valZoom span").text(" " + currentScale);
        drawImage();

    });


    var touch = new Hammer.Manager(cvs);

    touch.add(new Hammer.Tap({event: 'doubletap', taps: 2}));

    touch.add(new Hammer.Tap({event: 'singletap'}));

    touch.get('doubletap').recognizeWith('singletap');
// we only want to trigger a tap, when we don't have detected a doubletap
    touch.get('singletap').requireFailure('doubletap');


    touch.on("doubletap", function (ev) {
        currentScale -= 0.3;

        drawImage();
    });


    touch.on("singletap", function (ev) {
        currentScale += 0.3;

        drawImage();
    });




//--------
    bas = new Essencials("#cvs", "#icvs");

    // events

    var degree = 0;

    $("#rot").click(function () {

        if (degree === 360) {

            degree = 90;

            bas.rotate_canvas();

            bas.rotate_img("#cvf", "#fi", "#test", degree);




        } else

        {
            degree += 90;

            bas.rotate_canvas();

            bas.rotate_img("#cvf", "#fi", "#test", degree);



        }






        console.log(degree);


    });



    $("#flipH").click(function () {



        var st = $(this).hasClass("fh");



        if (st) {
            bas.flip_horizontal_canvas(1, false, "#test");
            bas.flip_horizontal_img("#fi", "#test", false);

            $(this).removeClass("fh");
        }

        else {
            bas.flip_horizontal_canvas(1, true, "#test");

            bas.flip_horizontal_img("#fi", "#test", true);

            $(this).addClass("fh");
        }




    });


    $("#flipV").click(function () {



        var st = $(this).hasClass("fv");

        if (st) {
            bas.flip_verical_canvas(1, false, "#icvs");

            bas.flip_verical_img("#fi", "#icvs", false);

            $(this).removeClass("fv");
        }

        else {
            bas.flip_verical_canvas(1, true, "#icvs");

            bas.flip_verical_img("#fi", "#icvs", true);

            $(this).addClass("fv");

        }


    });






}
;


document.addEventListener("keydown", function (e) {
    if (e.keyCode === 13)
    {
        toggleFullScreen();
    }
},
        false);


$("#full").click(function () {
    toggleFullScreen();

}
);

// fullscreen event
function toggleFullScreen() {
    if (!document.fullscreenElement && // alternative standard method
            !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement)
    {  // current working methods

        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) {
            document.documentElement.msRequestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }

        $("#full i").removeClass("fa-expand");
        $("#full i").addClass("fa-compress");


    }
    else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }

        $("#full i").removeClass("fa-compress");
        $("#full i").addClass("fa-expand");

    }
}
            