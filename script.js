$(document).ready(function() {
    
    $('#welcomImg').delay(700).animate({
        left:100
    });
    $('#revealWork').delay(1000).animate({
        left:100
    });
    
    $('#hiLight').hover( function() {
        $(this).css("width", "230");
        $(this).css("height", "230");
        $(this).css("margin-top", "27px");
        $(this).css("margin-left", "27px");
        $(this).css("border", "15px solid rgb(63, 62, 62)");
    },
    function () {
        $(this).css("width", "200");
        $(this).css("height", "200");
        $(this).css("margin-top", "40px");
        $(this).css("margin-left", "40px");
        $(this).css("border", "10px solid rgb(63, 62, 62)");
    });

    $('#revealWork').hover( function() {
        $(this).css("color", "rgb(167, 89, 167)");
        $('#revealWork').animate({
            left:150
        });
    },
    function () {
        $(this).css("color", "rgb(42, 40, 42)");
        $('#revealWork').animate({
            left:100
        });
    });

    $('#welcomImg').hover( function() {
        $('#welcomImg').animate({
            left:150
        });
    },
    function () {
        $('#welcomImg').animate({
            left:100
        });
    });

    $('#project').hover( function() {
        $(this).css("border", "7px solid #ddd");
        
    },
    function () {
        $(this).css("border", "2px solid #ddd");
    });
    
    $('#greenFLink').hover( function() {
        $(this).css("color", "rgb(167, 89, 167)");       
    },
    function () {
        $(this).css("color", "#666");       
    });

    $('#project1').hover( function() {
        $(this).css("border", "7px solid #ddd");
        
    },
    function () {
        $(this).css("border", "2px solid #ddd");
    });
    
    $('#greenFLink1').hover( function() {
        $(this).css("color", "rgb(167, 89, 167)");       
    },
    function () {
        $(this).css("color", "#666");       
    });

    $('#project2').hover( function() {
        $(this).css("border", "7px solid #ddd");
        
    },
    function () {
        $(this).css("border", "2px solid #ddd");
    });
    
    $('#greenFLink2').hover( function() {
        $(this).css("color", "rgb(167, 89, 167)");       
    },
    function () {
        $(this).css("color", "#666");       
    });

    $('#project3').hover( function() {
        $(this).css("border", "7px solid #ddd");
        
    },
    function () {
        $(this).css("border", "2px solid #ddd");
    });
    
    $('#greenFLink3').hover( function() {
        $(this).css("color", "rgb(167, 89, 167)");       
    },
    function () {
        $(this).css("color", "#666");       
    });

    $('#project4').hover( function() {
        $(this).css("border", "7px solid #ddd");
        
    },
    function () {
        $(this).css("border", "2px solid #ddd");
    });
    
    $('#greenFLink4').hover( function() {
        $(this).css("color", "rgb(167, 89, 167)");       
    },
    function () {
        $(this).css("color", "#666");       
    });


    $("#hiLight").on('click', function() {
        $("#container2").css("display", "block");
    });
    



    

    $("#hidden").hover(function (){
        $(this).css("color", "rgb(47, 46, 46)");
    },
    function() {
        $(this).css("color", "hsl(261, 66%, 73%)");
    });

    $('#hidden').on('click', function(){
        alert("I hope this level of javascript is sufficent Mr Cohen. While researching these topics, I found a topic I think I really like, web development. I dove into a program I bought and veered off track from javascript for a bit. However, I will continue to learn javascript and move onto other topics even after the semester is over. I still have to finish my online program. Although I kind of veered off track on this assignment, this assignment openned up a door for me. A door I will take this summer. Ultimately, Thank you for assigning this project!")
    });

    
});