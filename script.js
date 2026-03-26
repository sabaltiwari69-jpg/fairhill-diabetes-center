// jQuery JavaScript for Assignment 2
// Requirement: Use jQuery for interactivity (4 points in rubric)

$(document).ready(function() {
    
    // Toggle information boxes on service pages using jQuery
    $("#toggle-info-1").click(function() {
        $("#hidden-info-1").slideToggle("slow");
    });
    
    $("#toggle-info-2").click(function() {
        $("#hidden-info-2").slideToggle("slow");
    });
    
    $("#toggle-info-3").click(function() {
        $("#hidden-info-3").slideToggle("slow");
    });
    
    $("#toggle-info-4").click(function() {
        $("#hidden-info-4").slideToggle("slow");
    });
    
    $("#toggle-info-5").click(function() {
        $("#hidden-info-5").slideToggle("slow");
    });
    
    // Smooth scrolling for anchor links
    $("a[href^='#']").on('click', function(e) {
        e.preventDefault();
        var target = $($(this).attr('href'));
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 80
            }, 800);
        }
    });
    
    // Add active navigation highlighting
    var currentPage = window.location.pathname.split("/").pop();
    $(".nav-links a").each(function() {
        if ($(this).attr("href") === currentPage) {
            $(this).addClass("active");
        }
    });
    
    // Hover effects using jQuery
    $(".service-card").hover(
        function() {
            $(this).css("box-shadow", "0 10px 25px rgba(0,0,0,0.2)");
        },
        function() {
            $(this).css("box-shadow", "0 4px 6px rgba(0,0,0,0.1)");
        }
    );
    
    console.log("Fairhill Diabetes Center - Assignment 2 Loaded");
});