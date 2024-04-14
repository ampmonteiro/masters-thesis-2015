
// init filters and effects
 var w = window,
            d = document,
            e = d.documentElement,
            g = d.getElementsByTagName('body')[0],
            x = w.Width || e.clientWidth || g.clientWidth;



$("#menuFilter").click(
        function () {

     

            $("li.menu").addClass("hidden");
            $("li.filters").removeClass("hidden");
            $("li.filters").addClass("fade-in");
          
            $("li.menu.filters a i").addClass("active text-primary");



            if (screen.width < 760 || x<760) {

                $(".navbar-header .feedback").removeClass("hidden");
                $(".navbar-header .feedback").addClass("fade-in");

                $(".navbar-header  .myZoom").addClass("hidden");

                $(".navbar-header  .valZoom").addClass("hidden");

            } else {

                $("nav li.feedback").removeClass("hidden");
                $("nav li.feedback").addClass("fade-in");

            }

            listFilters();

        }

);

$("#menuEffect").click(function () {

     
        
            $("li.menu").addClass("hidden");
            $("li.effects").removeClass("hidden");
            $("li.effects").addClass("fade-in");
          
            $("li.menu.effects a i").addClass("active text-primary");

            if (screen.width < 760 ||x<760) {

                $(".navbar-header .feedback").removeClass("hidden");
                $(".navbar-header .feedback").addClass("fade-in");

                $(".navbar-header  .myZoom").addClass("hidden");

                $(".navbar-header  .valZoom").addClass("hidden");

            } else {

                $("nav li.feedback").removeClass("hidden");
                $("nav li.feedback").addClass("fade-in");
                
                 
                

            }
            applyEffect("#cvs","");
            applyEffect("#cvf","#test");



        }

);







// selection of filter on list

function listFilters() {

    $("#selFilter").change(function () {

        var selVal = $("#selFilter option:selected").val();

        $(".res").removeClass("hidden");

        switch (selVal) {

            case "bri":
                $(".rang").addClass("hidden");
                $("#showF1").removeClass("hidden");

                applyFilter("bri", "#cvs","");
                applyFilter("bri", "#cvf","#test");
                break;

            case "blu":

                $(".rang").addClass("hidden");
                $("#showF2").removeClass("hidden");
                applyFilter("blu", "#cvs","");
                applyFilter("blu", "#cvf","#test");
                break;

            case "cli":

                $(".rang").addClass("hidden");
                $("#showF3").removeClass("hidden");
                applyFilter("cli", "#cvs","");
                applyFilter("cli", "#cvf","#test");
                break;

            case "contr":

                $(".rang").addClass("hidden");
                $("#showF4").removeClass("hidden");
                applyFilter("contr", "#cvs","");
                applyFilter("contr", "#cvf","#test");
                break;

            case "exp":

                $(".rang").addClass("hidden");
                $("#showF5").removeClass("hidden");
                applyFilter("exp", "#cvs","");
                applyFilter("exp", "#cvf","#test");

                break;

            case "gam":

                $(".rang").addClass("hidden");
                $("#showF6").removeClass("hidden");
                applyFilter("gam", "#cvs","");
                applyFilter("gam", "#cvf","#test");

                break;

            case "hu":

                $(".rang").addClass("hidden");
                $("#showF7").removeClass("hidden");
                applyFilter("hu", "#cvs","");
                applyFilter("hu", "#cvf","#test");

                break;

            case "noi":

                $(".rang").addClass("hidden");
                $("#showF8").removeClass("hidden");
                applyFilter("noi", "#cvs","");
                applyFilter("noi", "#cvf","#test");

                break;

            case "sat":

                $(".rang").addClass("hidden");
                $("#showF9").removeClass("hidden");
                applyFilter("sat", "#cvs","");
                applyFilter("sat", "#cvf","#test");

                break;

            case "sep":

                $(".rang").addClass("hidden");
                $("#showF10").removeClass("hidden");
                applyFilter("sep", "#cvs","");
                applyFilter("sep", "#cvf","#test");

                break;

            case "sha":

                $(".rang").addClass("hidden");
                $("#showF11").removeClass("hidden");
                applyFilter("sha", "#cvs","");
                applyFilter("sha", "#cvf","#test");

                break;

            case "vib":

                $(".rang").addClass("hidden");
                $("#showF12").removeClass("hidden");
                applyFilter("vib", "#cvs","");
                applyFilter("vib", "#cvf","#test");

                break;

            default:
                $(".rang").addClass("hidden");
                $("nav li.res").addClass("hidden");
                applyFilter("none", "#cvs","");
                applyFilter("none", "#cvf","#test");

                break;

        }
    });
};





// execute the selected filter 
function applyFilter(inp, cvs,inter) {


    var caman = Caman(cvs), x;
   
    $(".res span").html(x);

    switch (inp) {


        case "bri":

            $("#bri").change(function () {

                x = $("#bri").val();

                $(".res span").html(x);

                caman.revert();

                caman.brightness(x);
                
                    if (inter !== "") {
                    caman.render(function () {

                        $(inter).attr("src", caman.toBase64());
                        
                        console.log("inter applied");

                    });
                }
                
                else{
                    
                    caman.render();
                    
                    console.log("no inter");
                }
                
                


            });

            break;

        case "blu":
            $("#blu").change(function () {

                x = $("#blu").val();

                $(".res span").html(x);

                caman.revert();

                caman.stackBlur(x);
                
                    if (inter !== "") {
                    caman.render(function () {

                        $(inter).attr("src", caman.toBase64());
                        
                        console.log("inter applied");

                    });
                }
                
                else{
                    
                    caman.render();
                    
                    console.log("no inter");
                }
                
                

            });
            break;

        case "cli":

            $("#cli").change(function () {

                x = $("#cli").val();

                $(".res span").html(x);

                caman.revert();

                caman.clip(x);
                
                    if (inter !== "") {
                    caman.render(function () {

                        $(inter).attr("src", caman.toBase64());
                        
                        console.log("inter applied");

                    });
                }
                
                else{
                    
                    caman.render();
                    
                    console.log("no inter");
                }
                
                
                

            });

            break;


        case "contr":

            $("#contr").change(function () {

                x = $("#contr").val();

                $(".res span").html(x);

                caman.revert();

                caman.contrast(x);
                
                    if (inter !== "") {
                    caman.render(function () {

                        $(inter).attr("src", caman.toBase64());
                        
                        console.log("inter applied");

                    });
                }
                
                else{
                    
                    caman.render();
                    
                    console.log("no inter");
                }
                
                

            });

            break;


        case "exp":

            $("#exp").change(function () {

                x = $("#exp").val();

                $(".res span").html(x);

                caman.revert();

                caman.exposure(x);
                
                    if (inter !== "") {
                    caman.render(function () {

                        $(inter).attr("src", caman.toBase64());
                        
                        console.log("inter applied");

                    });
                }
                
                else{
                    
                    caman.render();
                    
                    console.log("no inter");
                }
                
                
            });

            break;

        case "gam":

            $("#gam").change(function () {

                x = $("#gam").val();

                $(".res span").html(x);

                caman.revert();

                caman.gamma(x);
                
                    if (inter !== "") {
                    caman.render(function () {

                        $(inter).attr("src", caman.toBase64());
                        
                        console.log("inter applied");

                    });
                }
                
                else{
                    
                    caman.render();
                    
                    console.log("no inter");
                }
                
                
                
                
                
                
            });
            break;

        case "hu":

            $("#hu").change(function () {

                x = $("#hu").val();

                $(".res span").html(x);

                caman.revert();

                caman.hue(x);
                
                    if (inter !== "") {
                    caman.render(function () {

                        $(inter).attr("src", caman.toBase64());
                        
                        console.log("inter applied");

                    });
                }
                
                else{
                    
                    caman.render();
                    
                    console.log("no inter");
                }
                
                
                

            });
            break;


        case "noi":

            $("#noi").change(function () {

                x = $("#noi").val();

                $(".res span").html(x);

                caman.revert();

                caman.noise(x);
                
                    if (inter !== "") {
                    caman.render(function () {

                        $(inter).attr("src", caman.toBase64());
                        
                        console.log("inter applied");

                    });
                }
                
                else{
                    
                    caman.render();
                    
                    console.log("no inter");
                }
                
                
                
                
                
            });
            break;


        case "sat":

            $("#sat").change(function () {

                x = $("#sat").val();

                $(".res span").html(x);

                caman.revert();

                caman.saturation(x);
                
                    if (inter !== "") {
                    caman.render(function () {

                        $(inter).attr("src", caman.toBase64());
                        
                        console.log("inter applied");

                    });
                }
                
                else{
                    
                    caman.render();
                    
                    console.log("no inter");
                }
                
                
                
                
                
                
            });
            
            break;


        case "sep":

            $("#sep").change(function () {

                x = $("#sep").val();

                $(".res span").html(x);

                caman.revert();

                caman.sepia(x);
                
                    if (inter !== "") {
                    caman.render(function () {

                        $(inter).attr("src", caman.toBase64());
                        
                        console.log("inter applied");

                    });
                }
                
                else{
                    
                    caman.render();
                    
                    console.log("no inter");
                }
                
                
            });
            
            break;


        case "sha":
            $("#sha").change(function () {

                x = $("#sha").val();

                $(".res span").html(x);

                caman.revert();

                caman.sharpen(x);
                
                    if (inter !== "") {
                    caman.render(function () {

                        $(inter).attr("src", caman.toBase64());
                        
                        console.log("inter applied");

                    });
                }
                
                else{
                    
                    caman.render();
                    
                    console.log("no inter");
                }
                
                
                
                
            });
            break;


        case "vib":

            $("#vib").change(function () {

                x = $("#vib").val();

                $(".res span").html(x);

                caman.revert();

                caman.vibrance(x);
                
                    if (inter !== "") {
                    caman.render(function () {

                        $(inter).attr("src", caman.toBase64());
                        
                        console.log("inter applied");

                    });
                }
                
                else{
                    
                    caman.render();
                    
                    console.log("no inter");
                }
                
                
                
                
            });
            
            break;

        default:

            caman.revert();

            $(".res").addClass("hidden");

            break;

    }



};


function applyEffect(cvs, inter) {

    var caman = Caman(cvs);
    var se;
    // get id of btn and respective effect


    $("#selEffect").change(function () {

        se = $("#selEffect option:selected").val();

        console.log(se);
        switch (se) {


            case "ef1":

                caman.revert();

                caman.vintage();

                if (inter !== "") {
                    caman.render(function () {

                        $(inter).attr("src", caman.toBase64());
                        
                        console.log("inter applied");

                    });
                }
                
                else{
                    
                    caman.render();
                    
                    console.log("no inter");
                }
                    
                   
                // toUrl(inter);

                console.log("ok");

                break;



            case "ef2":

                caman.revert();

                caman.lomo();
                
                    if (inter !== "") {
                    caman.render(function () {

                        $(inter).attr("src", caman.toBase64());
                        
                        console.log("inter applied");

                    });
                }
                
                else{
                    
                    caman.render();
                    
                    console.log("no inter");
                }


                break;

            case "ef3":

                caman.revert();
               
                caman.clarity();
                
                    if (inter !== "") {
                    caman.render(function () {

                        $(inter).attr("src", caman.toBase64());
                        
                        console.log("inter applied");

                    });
                }
                
                else{
                    
                    caman.render();
                    
                    console.log("no inter");
                }

                break;

            case "ef4":

                caman.revert();

                caman.sinCity();
                
                    if (inter !== "") {
                    caman.render(function () {

                        $(inter).attr("src", caman.toBase64());
                        
                        console.log("inter applied");

                    });
                }
                
                else{
                    
                    caman.render();
                    
                    console.log("no inter");
                }

                break;

            case "ef5":

                caman.revert();

                caman.sunrise();
                
                    if (inter !== "") {
                    caman.render(function () {

                        $(inter).attr("src", caman.toBase64());
                        
                        console.log("inter applied");

                    });
                }
                
                else{
                    
                    caman.render();
                    
                    console.log("no inter");
                }

                break;


            case "ef6":

                caman.revert();

                caman.crossProcess();
                
                    if (inter !== "") {
                    caman.render(function () {

                        $(inter).attr("src", caman.toBase64());
                        
                        console.log("inter applied");

                    });
                }
                
                else{
                    
                    caman.render();
                    
                    console.log("no inter");
                }

                break;


            case "ef7":

                caman.revert();

                caman.orangePeel();
                
                    if (inter !== "") {
                    caman.render(function () {

                        $(inter).attr("src", caman.toBase64());
                        
                        console.log("inter applied");

                    });
                }
                
                else{
                    
                    caman.render();
                    
                    console.log("no inter");
                }

                break;

            case "ef8":

                caman.revert();

                caman.love();
                
                    if (inter !== "") {
                    caman.render(function () {

                        $(inter).attr("src", caman.toBase64());
                        
                        console.log("inter applied");

                    });
                }
                
                else{
                    
                    caman.render();
                    
                    console.log("no inter");
                }

                break;

            case "ef9":

                caman.revert();

                caman.grungy();
                
                    if (inter !== "") {
                    caman.render(function () {

                        $(inter).attr("src", caman.toBase64());
                        
                        console.log("inter applied");

                    });
                }
                
                else{
                    
                    caman.render();
                    
                    console.log("no inter");
                }

                break;


            case "ef10":

                caman.revert();

                caman.jarques();
                
                    if (inter !== "") {
                    caman.render(function () {

                        $(inter).attr("src", caman.toBase64());
                        
                        console.log("inter applied");

                    });
                }
                
                else{
                    
                    caman.render();
                    
                    console.log("no inter");
                }

                break;

            case "ef11":

                caman.revert();

                caman.pinhole();
                
                    if (inter !== "") {
                    caman.render(function () {

                        $(inter).attr("src", caman.toBase64());
                        
                        console.log("inter applied");

                    });
                }
                
                else{
                    
                    caman.render();
                    
                    console.log("no inter");
                }

                break;


            case "ftr12":

                caman.revert();

                caman.oldBoot();
                
                    if (inter !== "") {
                    caman.render(function () {

                        $(inter).attr("src", caman.toBase64());
                        
                        console.log("inter applied");

                    });
                }
                
                else{
                    
                    caman.render();
                    
                    console.log("no inter");
                }

                break;

            case "ef13":

                caman.revert();

                caman.glowingSun();
                
                    if (inter !== "") {
                    caman.render(function () {

                        $(inter).attr("src", caman.toBase64());
                        
                        console.log("inter applied");

                    });
                }
                
                else{
                    
                    caman.render();
                    
                    console.log("no inter");
                }

                break;

            case "ef14":

                caman.revert();

                caman.hazyDays();
                
                    if (inter !== "") {
                    caman.render(function () {

                        $(inter).attr("src", caman.toBase64());
                        
                        console.log("inter applied");

                    });
                }
                
                else{
                    
                    caman.render();
                    
                    console.log("no inter");
                }

                break;


            case "ef15":

                caman.revert();

                caman.herMajesty();
                
                    if (inter !== "") {
                    caman.render(function () {

                        $(inter).attr("src", caman.toBase64());
                        
                        console.log("inter applied");

                    });
                }
                
                else{
                    
                    caman.render();
                    
                    console.log("no inter");
                }

                break;


            case "ef16":

                caman.revert();

                caman.nostalgia();
                
                    if (inter !== "") {
                    caman.render(function () {

                        $(inter).attr("src", caman.toBase64());
                        
                        console.log("inter applied");

                    });
                }
                
                else{
                    
                    caman.render();
                    
                    console.log("no inter");
                }

                break;

            case "ef17":

                caman.revert();

                caman.hemingway();
                
                    if (inter !== "") {
                    caman.render(function () {

                        $(inter).attr("src", caman.toBase64());
                        
                        console.log("inter applied");

                    });
                }
                
                else{
                    
                    caman.render();
                    
                    console.log("no inter");
                }

                break;


            case "ef18":

                caman.revert();

                caman.concentrate();
                
                    if (inter !== "") {
                    caman.render(function () {

                        $(inter).attr("src", caman.toBase64());
                        
                        console.log("inter applied");

                    });
                }
                
                else{
                    
                    caman.render();
                    
                    console.log("no inter");
                }

                break;

            case "ef19":

                caman.revert();

                caman.greyscale();
                
                    if (inter !== "") {
                    caman.render(function () {

                        $(inter).attr("src", caman.toBase64());
                        
                        console.log("inter applied");

                    });
                }
                
                else{
                    
                    caman.render();
                    
                    console.log("no inter");
                }

                break;

            default:

                caman.revert();

                break;

        }



    });








}