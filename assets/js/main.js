$(window).ready(function () {
    setTimeout(function () {
        $('.loader').animate({
            textIndent: 0
        }, {
            step: function () {
                $(this).css("display", "none");
            }
        }, 6000);
        $('#content').fadeIn();
    }, 1000);
});

var rajDetails = false;
var screen = -1;
var functionEnum = {
    0: "aboutme",
    1: "skills",
    2: "experience",
    3: "education",
    4: "contact"
};
var skillset = ["60", "70", "50", "60", "70", "70", "80", "70", "85", "70", "60", "60"];

// about me link
$('.nav-about-link').click(aboutme);

function aboutme() {
    crossMobileMenu();
    rajDetails = true;
    screen = 0;
    $('.my-pic-about').animate({
        top: "-8%",
        // opacity: "1"
    }, 400);

    let topPosition = "8";
    if ($(window).width() <= "576") {
        topPosition = "0"
    }
    $('#about-details').animate({
        top: topPosition + "%",
        // opacity: "1"
    }, 800);

    $('.aboutme-my-pic').animate({
        textIndent: 0
    }, {
        step: function () {
            $(this).css("transform", "translateY(0%)");
            $(this).css("transition", "1.5s");
        }
    });

    let height = $('#about-details').height();
    $('.overlay').css("height", height);
    bodyHeight();
}

// skills link
$('.nav-skill-link').click(skills);

function skills() {
    crossMobileMenu()
    rajDetails = true;
    screen = 1;
    let topPosition = "8";
    if ($(window).width() <= "576") {
        topPosition = "0"
    }
    $('#skills-details').animate({
        top: topPosition + "%",
        // opacity: "1"
    }, 800);

    var tags = $('.skill-section');
    $.each(tags, function (key, value) {
        $('.skill-section').eq(key).animate({
            textIndent: 0
        }, {
            step: function () {
                $(this).css("width", skillset[key] + "%");
                $(this).css('transition', '1.5s');
                $(this).css('transition-delay', '.5s');
            }
        })
    });

    let height = $('#skills-details').height();
    $('.overlay').css("height", height);
    bodyHeight();
}

// experience link
$('.nav-experience-link').click(experience);

function experience() {
    crossMobileMenu();
    rajDetails = true;
    screen = 2;
    let topPosition = "8";
    if ($(window).width() <= "576") {
        topPosition = "0"        
    }

    $('#experience-details').animate({
        top: topPosition + "%",
        // opacity: "1"
    }, 800);

    $('.exp-left-section').animate({
        textIndent: 0
    }, {
        step: function () {
            $(this).css("transform", "translateX(0%)");
            $(this).css('transition', '0.6s');
            $(this).css('transition-delay', '.5s');
            // $(this).css('opacity', '1');
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
            // $(this).css('opacity', '1');
        }
    });
    let height = $('#experience-details').height();
    $('.overlay').css("height", height);
    bodyHeight();
}

// education link
$('.nav-education-link').click(education);

function education() {
    crossMobileMenu();
    rajDetails = true;
    screen = 3;
    let rotate;
    if ($(window).width() <= "360") {
        rotate = 'rotate(-20deg) translateY(16px)';
    }
    else{
        rotate = 'rotate(-20deg) translateY(40px)';
    }
    $('.edu-year').animate({
        textIndent: 0
    }, {
        step: function () {
            $(this).css('transform', rotate);
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
    let topPosition = "8";
    if ($(window).width() <= "576") {
        topPosition = "0"
    }
    $('#education-details').animate({
        top: topPosition + "%",
        // opacity: "1"
    }, 800);
    let height = $('#education-details').height();
    $('.overlay').css("height", height);
    bodyHeight();
}

// contact link
$('.nav-contact-link').click(contact);

function contact() {
    crossMobileMenu();
    rajDetails = true;
    screen = 4;
    let topPosition = "8";
    if ($(window).width() <= "576") {
        topPosition = "0"
    }
    $('#contact-details').animate({
        top: topPosition + "%",
        // opacity: "1"
    }, 800);
    let height = $('#contact-details').height();
    $('.overlay').css("height", height);
    bodyHeight();
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
    $('.my-pic-about').animate({
        top: "-215%",
        // opacity:"0"
    }, 800);
    $('#about-details').animate({
        top: "-215%",
        // opacity:"0"
    }, 800);

    $('.aboutme-my-pic').animate({
        textIndent: 0
    }, {
        step: function () {
            $(this).css("transform", "translateY(-215%)");
            // $(this).css("opacity", "0%");
            $(this).css("transition", "1.5s");
        }
    });


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
        top: "-250%",
        // opacity: "0"
    }, 800);
    var tags = $('.skill-section');
    $.each(tags, function (key, value) {
        $('.skill-section').eq(key).animate({
            textIndent: 0
        }, {
            step: function () {
                $(this).css("width", "0");
                $(this).css('transition', '1s');
                $(this).css('transition-delay', '0.5s');
            }
        })
    });
    $('.body-overlay').css("display", "none");


    // next
    $('#experience-details').animate({
        top: "-215%",
        // opacity: "0"
    }, 800);

    // edu
    $('.exp-left-section').animate({
        textIndent: 0
    }, {
        step: function () {
            $(this).css("transform", "rotateY(50deg) translateX(-215%)");
            $(this).css('transition', '0.6s');
            $(this).css('transition-delay', '0.5s');
            // $(this).css('opacity', '0');
        }
    }, 1500);
    $('.exp-right-section').animate({
        textIndent: 0
    }, {
        step: function () {
            $(this).css("transform", "translate3d(5em, 5em, 5em)");
            $(this).css('transition', '0.6s');
            $(this).css('transition-delay', '0.5s');
            // $(this).css('opacity', '0');
        }
    });
    $('.body-overlay').css("display", "none");

    // contact
    $('#contact-details').animate({
        top: "-215%",
        // opacity: "0"
    }, 800);
    $('.body-overlay').css("display", "none");

    // education
    $('#education-details').animate({
        top: "-215%",
        // opacity: "0"
    }, 800);

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
            $(this).css('transform', 'translateX(215%)');
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

// mobile navigation click
$('.mobile-nav-button .mobile-menu').click(function () {
    $('.mobile-menu').css("display", "none");
    $('.mobile-menu-cross').css("display", "block");
    $('.mobile-nav').slideDown();
});


$('.mobile-menu-cross').click(crossMobileMenu);

function crossMobileMenu() {
    $('.mobile-nav').slideUp();
    $('.mobile-menu-cross').css("display", "none");
    $('.mobile-menu').css("display", "block");
}

function bodyHeight(){
    let bodyHeight = document.documentElement.scrollHeight + 100;
    $('.body-overlay').css("display", "block");
    $('.body-overlay').css("height", bodyHeight);
}
