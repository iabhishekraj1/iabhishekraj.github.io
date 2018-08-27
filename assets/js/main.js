var rajDetails = false;
var screen = -1;
var functionEnum = {
    0: "aboutme",
    1: "skills",
    2: "experience",
    3: "education",
    4: "contact"
};
// about me link

$('#about-link').click(aboutme);

function aboutme() {
    rajDetails = true;
    screen = 0;
    $('#about-details').animate({
        top: "6%"
    }, 600);
    $('.body-overlay').css("display", "block");
}

// skills link
$('#skill-link').click(skills);

function skills() {
    rajDetails = true;
    screen = 1;
    $('#skills-details').animate({
        top: "6%"
    }, 600);
    $('.body-overlay').css("display", "block");
}

// experience link
$('#experience-link').click(experience);

function experience() {
    rajDetails = true;
    screen = 2;
    $('#experience-details').animate({
        top: "6%"
    }, 600);
    $('.body-overlay').css("display", "block");

    $('.exp-left-section').animate({
        textIndent: 0
    }, {
        step: function () {
            $(this).css("transform", "translateX(0%)");
            $(this).css('transition', '0.6s');
            $(this).css('transition-delay', '.5s');
            $(this).css('opacity', '1');
            $(this).css("transform", "rotateY(0deg)");

        }
    });
    $('.exp-right-section').animate({
        textIndent: 0
    }, {
        step: function () {
            $(this).css("transform", "translate3d(0, 0, 0)");
            $(this).css('transition', '0.6s');
            $(this).css('transition-delay', '0.5s');
            $(this).css('opacity', '1');
        }
    });
}

// education link
$('#education-link').click(education);

function education() {
    rajDetails = true;
    screen = 3;
    $('.edu-year').animate({
        textIndent: 0
    }, {
        step: function () {
            $(this).css('transform', 'rotate(-20deg) translateY(40px)');
            $(this).css('transition', '0.6s');
            $(this).css('transition-delay', '1s');
        }
    });

    $('.edu-right-section').animate({
        textIndent: 0
    }, {
        step: function () {
            $(this).css('transform', 'rotate(0deg)');
            $(this).css('transition', '0.6s');
            $(this).css('transition-delay', '0.3s');
        }
    });

    $('#education-details').animate({
        top: "6%"
    }, 600);
    $('.body-overlay').css("display", "block");

}

// hover in animation
// $('.education-details').hover(function () {
//     // var a = $(this).find();
//     // console.log("************", a);
//     $(this).eq(0).animate({
//         textIndent: 0
//     }, {
//         step: function () {
//             $(this).css('transform', 'rotate(0deg) translateY(0px)');
//             $(this).css('background', 'transparent');
//             $(this).css('color', 'darkgoldenrod');
//             $(this).css('transition', '0.3s');
//             $(this).css('transition-delay', '0s');
//         }
//     });
// })

// contact link
$('#contact-link').click(contact);

function contact() {
    rajDetails = true;
    screen = 4;
    $('#contact-details').animate({
        top: "6%"
    }, 600);
    $('.body-overlay').css("display", "block");
}

// conatct page
if ($('#contact-name').val()) {
    $('#contact-name-label').animate({
        left: "10px",
        bottom: "22px",
    }, 500);
}

if ($('#contact-email').val()) {
    $('#contact-email-label').animate({
        left: "10px",
        bottom: "22px",
        color: "cyan !important"
    }, 500);
}

if ($('#contact-subject').val()) {
    $('#contact-subject-label').animate({
        left: "10px",
        bottom: "22px",
        color: "cyan !important"
    }, 500);
}


if ($('#contact-message').val()) {
    $('#contact-message-label').animate({
        left: "10px",
        bottom: "156px",
        color: "cyan !important"
    }, 500);
}

// name
$('#contact-name').focus(function () {
    $('#contact-name-label').animate({
        left: "10px",
        bottom: "22px",
    }, 500);
});

$('#contact-name').focusout(function () {
    if (!$('#contact-name').val()) {
        $('#contact-name-label').animate({
            left: "0",
            bottom: "0px",
            color: "white"
        }, 500);
    }
});

// email
$('#contact-email').focus(function () {
    $('#contact-email-label').animate({
        left: "10px",
        bottom: "22px",
    }, 500);
});

$('#contact-email').focusout(function () {
    if (!$('#contact-email').val()) {
        $('#contact-email-label').animate({
            left: "0px",
            bottom: "0",
            color: "white"
        }, 500);
    }
});


// subject
$('#contact-subject').focus(function () {
    $('#contact-subject-label').animate({
        left: "10px",
        bottom: "22px",
        color: "cyan !important"
    }, 500);
});

$('#contact-subject').focusout(function () {
    if (!$('#contact-subject').val()) {
        $('#contact-subject-label').animate({
            left: "0px",
            bottom: "0",
            color: "white"
        }, 500);
    }
});

// message
$('#contact-message').focus(function () {
    $('#contact-message-label').animate({
        left: "10px",
        bottom: "156px",
        color: "cyan !important"
    }, 500);
});

$('#contact-message').focusout(function () {
    if (!$('#contact-message').val()) {
        $('#contact-message-label').animate({
            left: "0px",
            bottom: "0",
            color: "white"
        }, 500);
    }
});


// outerside click 
$('.body-overlay').click(cross);

$('.cross').click(cross);

function cross() {
    rajDetails = false;
    screen = -1;
    $('#about-details').animate({
        top: "-100%"
    }, 600);
    $('.body-overlay').animate({
        textIndent: 0
    }, {
        step: function () {
            $(this).css('display', 'none');
            $(this).css('transition', '0.6s');
            $(this).css('transition-delay', '1s');
        }
    }, 1000);

    // next
    $('#skills-details').animate({
        top: "-100%",
    }, 600);
    $('.body-overlay').css("display", "none");

    // next
    $('#experience-details').animate({
        top: "-100%",
    }, 600);

    // edu
    $('.exp-left-section').animate({
        textIndent: 0
    }, {
        step: function () {
            $(this).css("transform", "rotateY(50deg) translateX(-200%)");
            $(this).css('transition', '0.6s');
            $(this).css('transition-delay', '0.5s');
            $(this).css('opacity', '0');
        }
    }, 1500);
    $('.exp-right-section').animate({
        textIndent: 0
    }, {
        step: function () {
            $(this).css("transform", "translate3d(15em, 10em, 15em)");
            $(this).css('transition', '0.6s');
            $(this).css('transition-delay', '0.5s');
            $(this).css('opacity', '0');
        }
    });
    $('.body-overlay').css("display", "none");

    // contact
    $('#contact-details').animate({
        top: "-100%",
    }, 600);
    $('.body-overlay').css("display", "none");

    // education
    $('#education-details').animate({
        top: "-100%",
    }, 600);

    $('.edu-year').animate({
        textIndent: 0
    }, {
        step: function () {
            $(this).css('transform', 'rotate(0deg) translateX(0)');
            $(this).css('transition', '0.6s');
            $(this).css('transition-delay', '1s');
        }
    });
    $('.edu-right-section').animate({
        textIndent: 0
    }, {
        step: function () {
            $(this).css('transform', 'translateX(200%)');
            $(this).css('transition', '0.6s');
            $(this).css('transition-delay', '1s');
        }
    });
    $('.body-overlay').css("display", "none");

}


// left and right arrrow button events

document.addEventListener("keyup", function (event) {
    if (rajDetails && event.keyCode == 37) {
        if (screen == 0) {
            screen = 4;
        } else {
            screen--;
        }        
        setTimeout(window[functionEnum[screen]], 800);
        cross();

    } else if (rajDetails && event.keyCode == 39) {
        if (screen == 4) {
            screen = 0;
        } else {
            screen++;
        }
        setTimeout(window[functionEnum[screen]], 800);
        cross();
    }
});