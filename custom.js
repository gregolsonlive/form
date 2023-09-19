$(document).ready(function() {
    $(window).scroll(function() {
        const scrolled = $(this).scrollTop();
        const speed = 2; // adjust this to change the scroll speed
        const offset = scrolled / speed; // divide by speed instead of multiplying
        $('#heroBanerImage').css('top', offset + 'px'); // use positive offset value
    });

    // Add click event handler to button
    $('#heroButton').on('click', function(event) {
        // Prevent default button behavior
        event.preventDefault();

        // Get target element's ID and offset value
        var target = $('#campaignForm');
        var offset = 150;

        // Animate scroll to target element
        $('html, body').animate({
        scrollTop: target.offset().top - offset
        }, 1000, function() {
        // After scroll animation is complete, focus on the first form input field
        target.find('input[type="text"]').eq(0).focus();
        });
    });
});