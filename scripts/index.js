/*---------------------------------------------------------- DOCUMENT ----------------------------------------------------------*/

//Make images not draggable for a better user experience
$("img").prop("draggable", false)

//Load content even if the page is refreshed at any point
loadHeaders()

$(window).scroll(loadHeaders);

function loadHeaders() {
    if(($(window).scrollTop() + $(window).height()) > $("#services .section-header").offset().top + 200) {
        $("#services .section-header").removeClass("hidden")
    }
    if(($(window).scrollTop() + $(window).height()) > $("#portfolio .section-header").offset().top + 200) {
        $("#portfolio .section-header").removeClass("hidden")
    }
    if(($(window).scrollTop() + $(window).height()) > $("#about .section-header").offset().top + 200) {
        $("#about .section-header").removeClass("hidden")
    }
    if(($(window).scrollTop() + $(window).height()) > $("#contact .section-header").offset().top + 200) {
        $("#contact .section-header").removeClass("hidden")
    }
}

/*---------------------------------------------------------- NAVBAR ----------------------------------------------------------*/

//Load correct navbar appearence even if the page is refreshed at any point
loadNavigationBar()

$(window).scroll(loadNavigationBar);

function loadNavigationBar() {
    var navigationBarHeight = $("nav").height();
    var detatchedDistance = $("nav").hasClass("scrolled") ? 16 : 0;
    var triggerPoint = $("#home-buttons").offset().top + $("#home-buttons").height();
    if(($(window).scrollTop() + navigationBarHeight + detatchedDistance) > triggerPoint) {
        $("nav div a.primary").css("visibility", "visible");
        $("nav").addClass("scrolled")
        $("nav div").addClass("scrolled")
        $("nav").removeClass("frosted")
        $("nav div").addClass("frosted")
    } else {
        $("nav div a.primary").css("visibility", "hidden");
        $("nav").removeClass("scrolled")
        $("nav div").removeClass("scrolled")
        $("nav div").removeClass("frosted")
        $("nav").addClass("frosted")
    }
}

//Show the correct position of navigation selector even if the page is refreshed at any point
loadNavigationSelector()

$(window).scroll(loadNavigationSelector);

function loadNavigationSelector() {
    if($(window).scrollTop() < $("#services").offset().top - 150) {
        $("nav a").removeClass("active");
        $("#home-link").addClass("active");
    }
    if($(window).scrollTop() > $("#services").offset().top - 150) {
        $("nav a").removeClass("active");
        $("#services-link").addClass("active");
    }
    if($(window).scrollTop() > $("#portfolio").offset().top - 150) {
        $("nav a").removeClass("active");
        $("#portfolio-link").addClass("active");
    } 
    if($(window).scrollTop() > $("#about").offset().top - 150) {
        $("nav a").removeClass("active");
        $("#about-link").addClass("active");
    }
    if($(window).scrollTop() > $("#contact").offset().top - 150) {
        $("nav a").removeClass("active");
        $("#contact-link").addClass("active");
    }
}

/*---------------------------------------------------------- LANDING PAGE ----------------------------------------------------------*/

var userHasScrolled = false;

var title = "Carmine Otranto,"
var speed = 70;
var i = 0

var titleDescription1 = "Sviluppatore Web"
var conjunction = " e "
var titleDescription2 = "Mobile"
var j1 = 0;
var j2 = 0;
var c = 0;

function typeWrite() {
    if (i < title.length) {
        speed = (i === title.length-2) ? 1500 : 70
        $("h1").html(title.substring(0, i+1));
        i++;
        setTimeout(typeWrite, speed);
    } else {
        $("h1").append("<br/>" + "<span class='text-gradient'></span>")
        typeSecondPart()
    }
}

function typeSecondPart() {
    if (j1 < titleDescription1.length) {
        $("h1 span").text(titleDescription1.substring(0, j1+1));
        j1++;
        setTimeout(typeSecondPart, speed)
    } else {
        if (c < conjunction.length) {
            $("h1").append(conjunction.substring(c, c+1));
            c++;
            setTimeout(typeSecondPart, speed)
        } else {
            $("h1").append("<span class='text-gradient'></span>")
            typeLastPart();
        }
    }
}

function typeLastPart() {
    if (j2 < titleDescription2.length) {
        $("h1 span:last-child").text(titleDescription2.substring(0, j2+1));
        j2++;
        setTimeout(typeLastPart, speed)
    } else {
        setTimeout(() => {
            $("h1").addClass("type-end")
            $("#intestazione > p").removeClass("hidden")
            $("#home > img").removeClass("hidden")
            $("#home-buttons").removeClass("hidden")
            setTimeout(showScroll, 2000)
        }, 1000)
    }
}

$("#intestazione p:first-child").removeClass("hidden")
$("h1").addClass("type-start")
setTimeout(typeWrite, 500)

function showScroll() {
    if(!userHasScrolled && document.documentElement.scrollTop === 0) {
        $("#scroll-hint").animate({
            opacity: 0.5
        }, 1000)
    }
}

$(window).scroll(() => { 
    userHasScrolled = true;
    $("#scroll-hint").animate({
        opacity: 0
    }, 1000)
});

/*---------------------------------------------------------- SERVICES ----------------------------------------------------------*/

var firstServiceLoaded = false;
var secondServiceLoaded = false;
var thirdServiceLoaded = false;

var firstServicePercentage;
var secondServicePercentage;

//Load content even if the page is refreshed at any point
loadServices()

$(window).scroll(loadServices);

function loadServices() {
    var delay = window.matchMedia("(min-width: 992px)").matches ? 2400 : 600;
    if (window.matchMedia("(max-width: 991px)").matches) {
        calculatePathHeight()
    }
    if(!firstServiceLoaded && (($(window).scrollTop() + $(window).height()) > $("#first-service").offset().top + 200)) {
        $("#service-path").css("height", `${firstServicePercentage}%`)
        $("#first-service .service-title").removeClass("hidden")
        $("svg#first").addClass("animated")
        $("#first-service .service > h3").removeClass("hidden")
        setTimeout(() => {
            $("#triple-card li").removeClass("hidden")
            $("#first-service .service-description-container > img").removeClass("hidden")
            $("#first-service .service-description").removeClass("hidden")
            $("#first-service .service-technologies").removeClass("hidden")
        }, delay)
        firstServiceLoaded = true
    }
    if(!secondServiceLoaded &&(($(window).scrollTop() + $(window).height()) > $("#second-service").offset().top + 200)) {
        $("svg#second").addClass("animated")
        $("#second-service .service-title").removeClass("hidden")
        $("svg#third").addClass("animated")
        $("#second-service .service > h3").removeClass("hidden")
        setTimeout(() => {
            $("#second-service .service-card").removeClass("hidden")
            $("#second-service .service-description-container > img").removeClass("hidden")
            $("#second-service .service-description").removeClass("hidden")
            $("#second-service .service-technologies").removeClass("hidden")
        }, delay)
        secondServiceLoaded = true
        $("#service-path").css("height", `${secondServicePercentage}%`)
    }
    if(!thirdServiceLoaded && (($(window).scrollTop() + $(window).height()) > $("#third-service").offset().top + 200)) {
        $("svg#fourth").addClass("animated")
        $("#third-service .service-title").removeClass("hidden")
        $("svg#fifth").addClass("animated")
        $("#third-service .service > h3").removeClass("hidden")
        setTimeout(() => {
            $("#third-service .service-card").removeClass("hidden")
            $("#third-service .service-description-container > img").removeClass("hidden")
            $("#third-service .service-description").removeClass("hidden")
            $("#third-service .service-technologies").removeClass("hidden")
        }, delay)
        thirdServiceLoaded = true;
        $("#service-path").css("height", "100%")
    }
}

$(window.matchMedia("(max-width: 991px)")).change(() => {
    calculatePathHeight()
    setPathHeight()
})

$(window.matchMedia("(max-width: 767px)")).change(() => {
    calculatePathHeight()
    setPathHeight()
})

$(window.matchMedia("(max-width: 575px)")).change(() => {
    calculatePathHeight()
    setPathHeight()
})

function calculatePathHeight() {
    var initialPoint = $("#service-path-container").offset().top;
    var maxPathHeight = $("#service-path-container").height();

    var firstServiceHeight = $("#first-service").offset().top + $("#first-service").height();
    var firstServiceBottom = firstServiceHeight - initialPoint;
    var secondServiceHeight = $("#second-service").offset().top + $("#second-service").height();
    var secondServiceBottom = secondServiceHeight - initialPoint;

    firstServicePercentage = (firstServiceBottom / maxPathHeight) * 100
    secondServicePercentage = (secondServiceBottom / maxPathHeight) * 100
}

function setPathHeight() {
    if (firstServiceLoaded) {
        $("#service-path").css("height", `${firstServicePercentage}%`)
    }
    if (secondServiceLoaded) {
        $("#service-path").css("height", `${secondServicePercentage}%`)
    }
    if (thirdServiceLoaded) {
        $("#service-path").css("height", "100%")
    }
}

/*---------------------------------------------------------- PROJECTS ----------------------------------------------------------*/

var projectLoaded = false;

//Load content even if the page is refreshed at any point
loadProjects()

$(window).scroll(loadProjects);

function loadProjects() {
    if(!projectLoaded && (($(window).scrollTop() + $(window).height()) > $("#portfolio li").offset().top + 200)) {
        $("#portfolio li").removeClass("hidden")
        projectLoaded = true;
    }
}

/*---------------------------------------------------------- ABOUT ----------------------------------------------------------*/

var currentPage = 1
var aboutLoaded = false;

if(window.matchMedia("(min-width: 1200px)").matches) {
    $(".about-content:not(#history)").hide();
    $(".about-content").addClass("hidden");
    setDesktopAnimations()
} else {
    $(".about-content").addClass("hidden");
    setMobileAnimations()
}

function setDesktopAnimations() {
    $(".about-content").removeClass("bottom-to-top")
    $("#history").addClass("top-to-bottom")
    $(".about-content:not(#history)").addClass("bottom-to-top")
}

function setMobileAnimations() {
    $(".about-content").removeClass("top-to-bottom")
    $(".about-content").addClass("bottom-to-top")
}

$(window.matchMedia("(min-width: 1200px)")).change((e) => {
    if(e.target.matches) {
        //Resize from less to more
        setDesktopAnimations()
        $(".about-content:not(#history)").hide();
        $(".about-content:not(#history)").addClass("hidden");

        $(".about-button").removeClass("about-active");
        $("#first-about").addClass("about-active");
    } else {
        //Resize from more to less
        setMobileAnimations()
        if (aboutLoaded) {
            $(".about-content").removeClass("hidden");
        }
        $(".about-content").show();
    }
})

//Load content even if the page is refreshed at any point
loadAbout()

$(window).scroll(loadAbout);

function loadAbout() {
    if(window.matchMedia("(min-width: 1200px)").matches) {
        if(!aboutLoaded && (($(window).scrollTop() + $(window).height()) > $("#about .row").offset().top + 200)) {
            $("#about-info").removeClass("hidden")
            $("#about-description").removeClass("hidden")
            
            //Show only first tab
            $("#history").removeClass("hidden")
            
            $("#about-navigator").removeClass("hidden")
            aboutLoaded = true;
        }
    } else {
        if(!aboutLoaded && (($(window).scrollTop() + $(window).height()) > $("#about .row").offset().top + 200)) {
            $("#about-info").removeClass("hidden")
            
            //Show all tabs when it should be
            if((($(window).scrollTop() + $(window).height()) > $("#about-description").offset().top + 200)) {
                $("#about-description").removeClass("hidden")
            }
            if((($(window).scrollTop() + $(window).height()) > $("#history").offset().top + 200)) {
                $("#history").removeClass("hidden")
            }
            if((($(window).scrollTop() + $(window).height()) > $("#education").offset().top + 200)) {
                $("#education").removeClass("hidden")
            }  
            if((($(window).scrollTop() + $(window).height()) > $("#skill").offset().top + 200)) {
                $("#skill").removeClass("hidden")
            }
            if((($(window).scrollTop() + $(window).height()) > $("#hobbies").offset().top + 200)) {
                $("#hobbies").removeClass("hidden")
                aboutLoaded = true
            }  
        }
    }
}

$(".about-button").click((e) => { 
    $(".about-content").hide()
    $(".about-content").addClass("hidden")
    const buttonID = e.target.id
    $(`.about-button:not(#${buttonID})`).removeClass("about-active");
    $(`#${buttonID}`).addClass("about-active");
    switch (buttonID) {
        case "first-about": 
            currentPage = 1;
            $("#history").show();
            $("#history").removeClass("hidden");
            break;
        case "second-about": 
            clickedOnSecondPage()
            currentPage = 2;
            $("#education").show();
            $("#education").removeClass("hidden");
            break;
        case "third-about": 
            clickedOnThirdPage()
            currentPage = 3;
            $("#skill").show(); 
            $("#skill").removeClass("hidden");
            break;
        case "fourth-about":
            currentPage = 4;
            $("#hobbies").show();
            $("#hobbies").removeClass("hidden");
            break;
        default: 
            console.log(`error: ${buttonID} button doesn't exist`)
    }
});

function clickedOnSecondPage() {
    if (currentPage < 2) {
        $("#education").removeClass("top-to-bottom")
        $("#education").addClass("bottom-to-top")
    } else {
        $("#education").removeClass("bottom-to-top")
        $("#education").addClass("top-to-bottom")
    }
}

function clickedOnThirdPage() {
    if (currentPage < 3) {
        $("#skill").removeClass("top-to-bottom")
        $("#skill").addClass("bottom-to-top")
    } else {
        $("#skill").removeClass("bottom-to-top")
        $("#skill").addClass("top-to-bottom")
    }
}

/*---------------------------------------------------------- CONTACT ----------------------------------------------------------*/

var contactFirstLoad = false;

//Load content even if the page is refreshed at any point
loadContact()

$(window).scroll(loadContact);

function loadContact() {
    if(!contactFirstLoad && (($(window).scrollTop() + $(window).height()) > $("#contact .row").offset().top + 200)) {
        $("#contact-container > img").removeClass("hidden")
        $("#contact-header h3").removeClass("hidden")
        $("#contact-header > div").removeClass("hidden")
        $("#form-section").removeClass("hidden")
        $("#contact-info").removeClass("hidden")
        $("#contact-social").removeClass("hidden")
        contactFirstLoad = true;
    }
}

const userRequest = {
    service: undefined,
    serviceType: undefined,
    amount: undefined,
    time: undefined,
    name: undefined,
    email: undefined,
    note: undefined
};

$("#send-spinner").hide();
$("#retry-spinner").hide();

var secondStepTriggered = false
var thirdStepTriggered = false

$("#required-service").change(() => {
    //Make service-type radio buttons required
    $("#radio-buttons input").prop("required", true);
    
    var choice = $("#required-service").find(":selected").val()
    if (choice === "Informazioni") {
        resetFirstFormStep();
    } else {
        //Change time and amount values ​​based on choice
        adjustOptions();

        //Show next step if not triggered before
        if (!secondStepTriggered) {
            $("#second-step").slideDown(scrollToBottomOfForm);
            secondStepTriggered = true
        }
    } 
});

function resetFirstFormStep() {
    //1. Slide up any previously triggered step
    $("#third-step").slideUp();
    $("#second-step").slideUp();
    //2. Bring back secondStepTriggered and thirdStepTriggered to false
    secondStepTriggered = false;
    thirdStepTriggered = false;
    //3. Clean any previously compiled field
    $("#radio-buttons input").prop("checked", false);
    $("select#amount option[value='']").prop("selected", true);
    $("select#time option[value='']").prop("selected", true);
    //4. Remove required attribute from the fields that are no longer required
    $("#radio-buttons input").prop("required", false);
    $("select#amount").prop("required", false);
    $("select#time").prop("required", false);
}

function adjustOptions() {
    var choice = $("#required-service").find(":selected").val();
    //Enable all time and amount choices
    $("#amount option:not(option[value=''])").prop("disabled", false);
    $("#time option:not(option[value=''])").prop("disabled", false);

    var serviceType = $("input[name='serviceType']:checked").val();
    switch (choice) {
        case "Sito Web semplice (pagina singola)":
        case "Collaborazione":
            if (serviceType === "Design & Sviluppo") {
                setMinimumAmount("500€ - 1.000€")
                setMinimumTime("Entro un mese")
            } else {
                setMinimumAmount("Fino a 500€")
                setMinimumTime("Entro un mese")
            }
            break;
        case "Applicazione Web":
        case "App mobile (iOS / iPadOS)":
            if (serviceType === "Design & Sviluppo") {
                setMinimumAmount("5.000€ - 10.000€")
                setMinimumTime("Da 3 mesi a 6 mesi")
            } else {
                setMinimumAmount("1.000€ - 5.000€")
                setMinimumTime("Da un mese a 3 mesi")
            }
            break;
        case "Sito Web complesso (multi-pagina)":
            if (serviceType === "Design & Sviluppo") {
                setMinimumAmount("1.000€ - 5.000€")
                setMinimumTime("Da un mese a 3 mesi")
            } else {
                setMinimumAmount("500€ - 1.000€")
                setMinimumTime("Entro un mese")
            }
            break;
        case "Re-design sito Web esistente":
            if (serviceType === "Design & Sviluppo") {
                setMinimumAmount("1.000€ - 5.000€")
                setMinimumTime("Da un mese a 3 mesi")
            } else {
                setMinimumAmount("Fino a 500€")
                setMinimumTime("Entro un mese")
            }
            break;
        default: console.log(`Information message: is not defined any amount/time adjustment rule for service: ${choice}`)
    }
}

function setMinimumAmount(amount) {
    var previousAmount = $("#amount").val();
    switch (amount) {
        case "Fino a 500€":
            //Do nothing. All choices are available
            break;
        case "500€ - 1.000€":
            //If previously selected value was smaller, make this selected
            if (previousAmount === "Fino a 500€") {
                $(`#amount option[value='${amount}']`).prop("selected", true);
            }
            //Remove the possibility of selecting smaller values
            $(`#amount option[value='Fino a 500€']`).prop("disabled", true);
            break;
        case "1.000€ - 5.000€":
            //If previously selected value was smaller, make this selected
            if (previousAmount === "Fino a 500€" || previousAmount === "500€ - 1.000€") {
                $(`#amount option[value='${amount}']`).prop("selected", true);
            }
            //Remove the possibility of selecting smaller values
            $(`#amount option[value='Fino a 500€']`).prop("disabled", true);
            $(`#amount option[value='500€ - 1.000€']`).prop("disabled", true);
            break;
        case "5.000€ - 10.000€":
            //If previously selected value was smaller, make this selected
            if (previousAmount === "Fino a 500€" || previousAmount === "500€ - 1.000€" || previousAmount === "1.000€ - 5.000€") {
                $(`#amount option[value='${amount}']`).prop("selected", true);
            }
            //Remove the possibility of selecting smaller values
            $(`#amount option[value='Fino a 500€']`).prop("disabled", true);
            $(`#amount option[value='500€ - 1.000€']`).prop("disabled", true);
            $(`#amount option[value='1.000€ - 5.000€']`).prop("disabled", true);
            break;
        default: console.log(`Information message: is not defined any adjustment rule for amount: ${amount}`)
    }
}

function setMinimumTime(time) {
    var previousTime = $("#time").val();
    switch (time) {
        case "Entro un mese":
            //Do nothing. All choices are available
            break;
        case "Da un mese a 3 mesi":
            //If previously selected value was smaller, make this selected
            if (previousTime === "Entro un mese") {
                $(`#time option[value='${time}']`).prop("selected", true);
            }
            //Remove the possibility of selecting smaller values
            $(`#time option[value='Entro un mese']`).prop("disabled", true);
            break;
        case "Da 3 mesi a 6 mesi":
            //If previously selected value was smaller, make this selected
            if (previousTime === "Entro un mese" || previousTime === "Da un mese a 3 mesi") {
                $(`#time option[value='${time}']`).prop("selected", true);
            }
            //Remove the possibility of selecting smaller values
            $(`#time option[value='Entro un mese']`).prop("disabled", true);
            $(`#time option[value='Da un mese a 3 mesi']`).prop("disabled", true);
            break;
        default: console.log(`Information message: is not defined any adjustment rule for time: ${time}`)
    }
}

$("#radio-buttons").change(() => {
    //Make the last 2 fields required
    $("select#amount").prop("required", true);
    $("select#time").prop("required", true);

    //Change time and amount values ​​based on choice
    adjustOptions();

    //Show next step if not triggered before
    if (!thirdStepTriggered) {
        $("#third-step").slideDown(scrollToBottomOfForm);
        thirdStepTriggered = true
    }
})

$("#note").keyup(() => {
    if($("#note").val().length == 400) {
        $("#note+small output").css("color", "red")
    } else {
        $("#note+small output").css("color", "#C8CACC")
    }
    $("#note+small output").text(`${400 - $("#note").val().length}`)
})

//Automatically scroll to fit the form into screen window
function scrollToBottomOfForm() {
    if (($("form").offset().top + $("form").height()) > (window.scrollY + window.innerHeight)) {
        window.scrollBy({
            top: ($("form").offset().top + $("form").height()) - (window.scrollY + window.innerHeight) + 100,
            left: 0,
            behavior: "smooth"
        })
    }
}

$("#first-form-step input[type='button']").click(() => {
    if(document.querySelector("#required-service").checkValidity() && document.querySelectorAll("#radio-buttons input")[0].checkValidity() && document.querySelector("#amount").checkValidity() && document.querySelector("#time").checkValidity()) {
        userRequest.service = $("#required-service").find(":selected").val();
        userRequest.serviceType = $("input[name='serviceType']:checked").val();
        userRequest.amount = $("#amount").val();
        userRequest.time = $("#time").val()
        $("#first-form-step").addClass("moved-forward")
        setTimeout(() => {
            $("#first-form-step").hide()
            //Initialize remaining textarea characters
            $("#note+small output").text(`${400 - $("#note").val().length}`)

            $("#second-form-step").show()
            $("#second-form-step").removeClass("hidden")
        }, 600)
        
        //Make second form step fields required
        $("#name").prop("required", true);
        $("#email").prop("required", true);
    } else {
        document.querySelector("form").reportValidity()
    }
})

$("#second-form-step button.back").click(() => {
    $("#second-form-step").addClass("hidden")
    setTimeout(() => {
        $("#second-form-step").hide();
        $("#first-form-step").show()
        $("#first-form-step").removeClass("moved-forward")

        //Remove required from second form step fields
        $("#name").prop("required", false);
        $("#email").prop("required", false);
    }, 600)
})

$("#second-form-step input[type='button']").click(() => {
    if(document.querySelector("#name").checkValidity() && document.querySelector("#email").checkValidity()) {
        userRequest.name = $("#name").val();
        userRequest.email = $("#email").val();
        userRequest.note = $("#note").val();
        $("#service-name-summary span").text(`${userRequest.service}`);
        if (userRequest.serviceType) {
            $("#service-type-summary").show();
            $("#service-type-summary span").text(`${userRequest.serviceType}`);
        } else {
            $("#service-type-summary").hide();
        }
        if (userRequest.amount) {
            $("#budget-summary").show();
            $("#budget-summary span").text(`${userRequest.amount}`);
        } else {
            $("#budget-summary").hide();
        }
        if (userRequest.time) {
            $("#time-summary").show();
            $("#time-summary span").text(`${userRequest.time}`);
        } else {
            $("#time-summary").hide();
        }
        if (userRequest.note) {
            $("#note-container-content").show();
            $("#note-summary span").text("");
            $("#note-container-content p").text(`${userRequest.note}`)
        } else {
            $("#note-container-content").hide();
            $("#note-summary span").text("Nessuna");
        }
        $("#name-summary span").text(`${userRequest.name}`);
        $("#email-summary span").text(`${userRequest.email}`);
        $("#second-form-step").addClass("moved-forward")
        setTimeout(() => {
            $("#second-form-step").hide();
            $("#summary").show();
            $("#summary").removeClass("hidden")
        }, 600)
    } else {
        document.querySelector("form").reportValidity()
    }
})

$("#summary button.back").click(() => {
    $("#summary").addClass("hidden")
    setTimeout(() => {
        $("#summary").hide();
        $("#second-form-step").show()
        $("#second-form-step").removeClass("moved-forward")
    }, 600)
})

$("#summary button[type='submit']").click(() => {

    //try to send request - add loading spinner to button
    $("#send-spinner").show()
    //disable back and send buttons
    $("#summary button").prop("disabled", true)

    //Send request
    var url = $("form").attr("action");
    $.ajax({
        type: "POST",
        dataType: "json",
        url: url,
        data: $("form").serialize(),
        success: (response) => {
            //result arrived
            $("#summary").addClass("moved-forward");

            setTimeout(() => {
                $("#summary").hide()
                //reset button state for a probable next request
                $("#send-spinner").hide()
                $("#summary button").prop("disabled", false)
                
                if(response.status == "success") { //Server successfully handled request
                    //reset form
                    resetForm();
                    //present confirmation message
                    $("#confirmation").show()
                    $("#confirmation").removeClass("hidden")
                } else { //Server error
                    //present error message
                    $("#error").show()
                    $("#error").removeClass("hidden")
                }
            }, 600)

        },
        error: () => { //Client error
            $("#summary").addClass("moved-forward");

            setTimeout(() => {
                $("#summary").hide()
                //reset button state for a probable next request
                $("#send-spinner").hide()
                $("#summary button").prop("disabled", false)
                //present error message
                $("#error").show()
                $("#error").removeClass("hidden")
            }, 600)
        }
    });
  
})

$("#confirmation button").click(() => {
    $("#confirmation").addClass("hidden")
    setTimeout(() => {
        $("#confirmation").hide()
        $("#first-form-step").show()
        $("#first-form-step").removeClass("moved-forward")
        $("#second-form-step").addClass("hidden")
        $("#second-form-step").removeClass("moved-forward")
        $("#summary").addClass("hidden")
        $("#summary").removeClass("moved-forward")
        $("#error").addClass("hidden")
        $("#error").removeClass("moved-forward")
    }, 600)
})

$("#error button[type='submit']").click(() => {
    //try to re-send request - add loading spinner to button
    $("#retry-spinner").show()
    //disable back and retry buttons
    $("#error button").prop("disabled", true)

    //Send request
    var url = $("form").attr("action");
    $.ajax({
        type: "POST",
        dataType: "json",
        url: url,
        data: $("form").serialize(),
        success: (response) => {
            //result arrived
            setTimeout(() => {
                //reset button state for a probable next request
                $("#retry-spinner").hide()
                $("#error button").prop("disabled", false)
            
                if(response.status == "success") { //Server successfully handled request
                    $("#error").addClass("moved-forward")
                    setTimeout(() => {
                        $("#error").hide()
                        //reset form
                        resetForm();
                        //present confirmation message
                        $("#confirmation").show()
                        $("#confirmation").removeClass("hidden")
                    }, 600)
                } else { //Server error
                    //Do nothing
                }
            }, 600)

        },
        error: () => { //Client error
            setTimeout(() => {
                //reset button state for a probable next request
                $("#retry-spinner").hide()
                $("#error button").prop("disabled", false)
            }, 600)
        }
    });

})

$("#error button.back").click(() => {
    $("#error").addClass("hidden")
    setTimeout(() => {
        $("#error").hide()
        $("#summary").show()
        $("#summary").removeClass("moved-forward")
    }, 600)
})

function resetForm() {
    $("form")[0].reset()
    $("input#develoment-only").prop("checked", true)

    //make required first form step fields (not necessary)
    $("#radio-buttons input").prop("required", true);
    $("select#amount").prop("required", true);
    $("select#time").prop("required", true);

    //remove required from second form step fields
    $("#name").prop("required", false);
    $("#email").prop("required", false);

    //clean userRequest object
    for (const i in userRequest) {
        userRequest[i] = undefined;
    }
}