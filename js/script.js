/**
 * Created by Daria on 19-Sep-16.
 */
$(document).ready(function() {

    //preloader
    $(function () {
        $('body').addClass('loaded');
    });


    //check if "decoration" is in view
    var $animation_elements = $('section');
    var $window = $(window);

    $window.on('scroll', check_if_in_view);
    $window.trigger('scroll');

    function check_if_in_view() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);

        $.each($animation_elements, function () {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);

            //check to see if this current container is within viewport
            if ((element_bottom_position >= window_top_position) &&
                (element_top_position <= window_bottom_position)) {
                $element.addClass('in-view animated fadeIn');
            } else {
                $element.removeClass('in-view animated fadeIn');
            }
        });
    }


    //chart

    var alreadyScrolled = 0;
    $(window).scroll(function chart1() {
        if (alreadyScrolled <2) {
            alreadyScrolled++;
            var chart = new CanvasJS.Chart("chartContainer", {
                backgroundColor: "",
                title: {
                    text: "",
                    fontFamily: "Verdana",
                    fontColor: "Peru",
                    fontSize: 28

                },

                animationEnabled: true,
                axisY: {
                    tickThickness: 0,
                    lineThickness: 0,
                    valueFormatString: " ",
                    gridThickness: 0
                },
                axisX: {
                    tickThickness: 0,
                    lineThickness: 0,
                    labelFontSize: 18,
                    labelFontColor: "#102542"

                },
                data: [
                    {
                        indexLabelFontSize: 26,
                        //indexLabelOrientation: "vertical",
                        toolTipContent: "<span style='\"'color: {color};'\"'><strong>{label}</strong></span><span style='\"'font-size: 20px; color:peru '\"'></span>",

                        indexLabelPlacement: "inside",
                        indexLabelFontColor: "white",
                        indexLabelFontWeight: 200,
                        indexLabelFontFamily: "Roboto",
                        color: "#102542",
                        type: "column",
                        dataPoints: [
                            {y: 30, label: "Beginner", indexLabel: "SASS"},
                            {y: 35, label: "Beginner", indexLabel: "GIT"},
                            {y: 50, label: "Intermediate", indexLabel: "MySQL"},
                            {y: 55, label: "Intermediate", indexLabel: "PHP"},
                            {y: 60, label: "Intermediate", indexLabel: "Javascript"},
                            {y: 80, label: "Advanced", indexLabel: "CSS3"},
                            {y: 85, label: "Advanced", indexLabel: "HTML5"}


                        ]
                    }
                ]
            });


        chart.render();
        }
    });
//mobile chart
    $("#chartContainer2").css("display", "none");
    if ($(window).width() < 1024){
        $("#chartContainer2").css("display", "block");
        $("#chartContainer").css("display", "none");

    }
    $(window).load(function chart2() {
            var chart = new CanvasJS.Chart("chartContainer2", {
                backgroundColor: "",
                title: {
                    text: "",
                    fontFamily: "Verdana",
                    fontColor: "Peru",
                    fontSize: 28

                },

                animationEnabled: false,
                axisY: {
                    tickThickness: 0,
                    lineThickness: 0,
                    valueFormatString: " ",
                    gridThickness: 0
                },
                axisX: {
                    tickThickness: 0,
                    lineThickness: 0,
                    labelFontSize: 18,
                    labelFontColor: "#102542"

                },
                data: [
                    {
                        indexLabelFontSize: 26,
                        indexLabelOrientation: "vertical",
                        toolTipContent: "<span style='\"'color: {color};'\"'><strong>{label}</strong></span><span style='\"'font-size: 20px; color:peru '\"'></span>",

                        indexLabelPlacement: "inside",
                        indexLabelFontColor: "white",
                        indexLabelFontWeight: 200,
                        indexLabelFontFamily: "Roboto",
                        color: "#102542",
                        type: "column",
                        dataPoints: [
                            {y: 30, label: "Beginner", indexLabel: "SASS"},
                            {y: 35, label: "Beginner", indexLabel: "GIT"},
                            {y: 50, label: "Intermediate", indexLabel: "MySQL"},
                            {y: 55, label: "Intermediate", indexLabel: "PHP"},
                            {y: 60, label: "Intermediate", indexLabel: "Javascript"},
                            {y: 80, label: "Advanced", indexLabel: "CSS3"},
                            {y: 85, label: "Advanced", indexLabel: "HTML5"}


                        ]
                    }
                ]
            });


            chart.render();
    });

    //modals

    $(".modal-dialog").addClass("modal-lg");


    //hover contact
    $("#facebook").mouseover(function () {
        $("#facebook").attr('src', 'img/facebook-hover.png');
    }).mouseout(function () {
        $("#facebook").attr('src', 'img/facebook.png');
    });

    $("#linkedin").mouseover(function () {
        $("#linkedin").attr('src', 'img/linkedin-hover.png');
    }).mouseout(function () {
        $("#linkedin").attr('src', 'img/linkedin.png');
    });

    $("#mail").mouseover(function () {
        $("#mail").attr('src', 'img/mail-hover.png');
    }).mouseout(function () {
        $("#mail").attr('src', 'img/mail.png');
    });


//carousel restart
    $('.tint').click(function () {
        $('.carousel').carousel(0);
    });

    $('.btn-more').click(function () {
        $('.carousel').carousel(0);
    });

//drawings

    setInterval(function () {
        $("#ambitious").toggleClass("not-visible");
        setTimeout(function () {
            $("#learner").toggleClass("not-visible");
        }, 1000);
        setTimeout(function () {
            $("#organized").toggleClass("not-visible");
        }, 2000);
    }, 3000);

//vegas
    $("#main-container").vegas({
        slides: [
            {src: "img/background6.jpg" },
            {src: "img/background5.jpg"},
            {src: "img/background4.jpg"}

            // { src: "/img/slide4.jpg" }
        ],
        overlay: 'img/overlays/03.png'
    });
});

//video
var vid = $("#video");

if ($(window).width() < 1024){
    vid.get(0).pause();
}

//nav
var hght = $(window).height() / 1.4;
$(document).scroll( function(evt){
    var currentPos = $(this).scrollTop();
    if(hght < currentPos){
        document.getElementById("menu").style.display = "block";
    } else if (hght > currentPos){
        document.getElementById("menu").style.display = "none";
    }
});