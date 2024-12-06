$(document).ready(function() {
    // Loading external HTML files into the main document (header, meta, and footer)
    $(function() {
        $("#head").load("meta.html");  // Load meta information into the element with ID "head"
        $("#header").load("header.html");  // Load header content into the element with ID "header"
        $("#footer").load("footer.html");  // Load footer content into the element with ID "footer"
    });

    // Initialize image sliders (for product images) by calling the show() function for each slider
    var index = 0;   // Index for the first image slider
    var index1 = 0;  // Index for the second image slider
    show();          // Calls the function to display images in the first slider
    show1();         // Calls the function to display images in the second slider

    // Function to cycle through product images (Polaroid images)
    function show() {
        var i;
        var slides = document.getElementsByClassName("slide");  // Get all elements with the class "slide"
        
        // Hide all slides initially
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        
        // Increment the index to show the next slide
        index = index + 1;
        
        // If the index exceeds the number of slides, reset to the first slide
        if (index > slides.length) {
            index = 1;
        }

        // Show the current slide based on the updated index
        slides[index - 1].style.display = "block";
        
        // Call the show function again after 1.5 seconds to create a continuous cycle
        setTimeout(show, 1500); // Change image every 1.5 seconds
    }

    // Function to cycle through a second set of product images
    function show1() {
        var j;
        var slides1 = document.getElementsByClassName("slide1"); // Get all elements with class "slide1"
        
        // Hide all slides initially
        for (j = 0; j < slides1.length; j++) {
            slides1[j].style.display = "none";
        }
        
        // Increment the index to show the next slide
        index1 = index1 + 1;
        
        // If the index exceeds the number of slides, reset to the first slide
        if (index1 > slides1.length) {
            index1 = 1;
        }

        // Show the current slide based on the updated index
        slides1[index1 - 1].style.display = "block";
        
        // Call the show1 function again after 1.5 seconds to create a continuous cycle
        setTimeout(show1, 1500); // Change image every 1.5 seconds
    }

    // Mobile menu toggle on button click
    $("#mobile-menu-button").on("click", function() {
        $("#mobile-menu").toggleClass("show");  // Toggle the visibility of the mobile menu
    });

    // Smooth scroll for anchor links
    $("a[href^='#']").on("click", function(event) {
        event.preventDefault();  // Prevent default anchor link behavior
        
        var target = $($(this).attr("href"));  // Get the target element based on href attribute (e.g., #section1)
        
        // Animate smooth scrolling to the target element
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);  // Scroll duration of 1000ms (1 second)
    });

    // Show back-to-top button when the user scrolls down
    $(window).on("scroll", function() {
        if ($(this).scrollTop() > 200) {  // If the page is scrolled more than 200px from the top
            $("#back-to-top").fadeIn();  // Show the back-to-top button
        } else {
            $("#back-to-top").fadeOut();  // Hide the back-to-top button
        }
    });

    // Back-to-top button functionality
    $("#back-to-top").on("click", function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);  // Scroll duration of 800ms
    });

    // Lazy Loading for Images (images are only loaded when they come into the viewport)
    $(window).on("scroll", function() {
        $(".lazy").each(function() {
            if ($(this).offset().top < $(window).scrollTop() + $(window).height()) {
                $(this).attr("src", $(this).data("src"));  // Load the image when it comes into view
            }
        });
    });

    // Image Slider Navigation (Manual Controls)
    $(".next").on("click", function() {
        index = (index + 1) > $(".slide").length ? 1 : index + 1;
        show();  // Show the next slide
    });

    $(".prev").on("click", function() {
        index = (index - 1) < 1 ? $(".slide").length : index - 1;
        show();  // Show the previous slide
    });

});
