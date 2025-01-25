!function(s){"use strict";var e,t=localStorage.getItem("language"),a="en";function n(e){document.getElementById("header-lang-img")&&("en"==e?document.getElementById("header-lang-img").src="assets/images/flags/us.jpg":"sp"==e?document.getElementById("header-lang-img").src="assets/images/flags/spain.jpg":"gr"==e?document.getElementById("header-lang-img").src="assets/images/flags/germany.jpg":"it"==e?document.getElementById("header-lang-img").src="assets/images/flags/italy.jpg":"ru"==e&&(document.getElementById("header-lang-img").src="assets/images/flags/russia.jpg"),localStorage.setItem("language",e),null==(t=localStorage.getItem("language"))&&n(a),s.getJSON("assets/lang/"+t+".json",function(e){s("html").attr("lang",t),s.each(e,function(e,t){"head"===e&&s(document).attr("title",t.title),s("[key='"+e+"']").text(t)})}))}function r(){for(var e=document.getElementById("topnav-menu-content").getElementsByTagName("a"),t=0,s=e.length;t<s;t++)"nav-item dropdown active"===e[t].parentElement.getAttribute("class")&&(e[t].parentElement.classList.remove("active"),null!==e[t].nextElementSibling&&e[t].nextElementSibling.classList.remove("show"))}function c(e){1==s("#light-mode-switch").prop("checked")&&"light-mode-switch"===e?(s("html").removeAttr("dir"),s("#dark-mode-switch").prop("checked",!1),s("#rtl-mode-switch").prop("checked",!1),s("#dark-rtl-mode-switch").prop("checked",!1),"assets/css/bootstrap.min.css"!=s("#bootstrap-style").attr("href")&&s("#bootstrap-style").attr("href","assets/css/bootstrap.min.css"),s("html").attr("data-bs-theme","light"),"assets/css/app.min.css"!=s("#app-style").attr("href")&&s("#app-style").attr("href","assets/css/app.min.css"),sessionStorage.setItem("is_visited","light-mode-switch")):1==s("#dark-mode-switch").prop("checked")&&"dark-mode-switch"===e?(s("html").removeAttr("dir"),s("#light-mode-switch").prop("checked",!1),s("#rtl-mode-switch").prop("checked",!1),s("#dark-rtl-mode-switch").prop("checked",!1),s("html").attr("data-bs-theme","dark"),"assets/css/bootstrap.min.css"!=s("#bootstrap-style").attr("href")&&s("#bootstrap-style").attr("href","assets/css/bootstrap.min.css"),"assets/css/app.min.css"!=s("#app-style").attr("href")&&s("#app-style").attr("href","assets/css/app.min.css"),sessionStorage.setItem("is_visited","dark-mode-switch")):1==s("#rtl-mode-switch").prop("checked")&&"rtl-mode-switch"===e?(s("#light-mode-switch").prop("checked",!1),s("#dark-mode-switch").prop("checked",!1),s("#dark-rtl-mode-switch").prop("checked",!1),"assets/css/bootstrap-rtl.min.css"!=s("#bootstrap-style").attr("href")&&s("#bootstrap-style").attr("href","assets/css/bootstrap-rtl.min.css"),"assets/css/app-rtl.min.css"!=s("#app-style").attr("href")&&s("#app-style").attr("href","assets/css/app-rtl.min.css"),s("html").attr("dir","rtl"),s("html").attr("data-bs-theme","light"),sessionStorage.setItem("is_visited","rtl-mode-switch")):1==s("#dark-rtl-mode-switch").prop("checked")&&"dark-rtl-mode-switch"===e&&(s("#light-mode-switch").prop("checked",!1),s("#rtl-mode-switch").prop("checked",!1),s("#dark-mode-switch").prop("checked",!1),"assets/css/bootstrap-rtl.min.css"!=s("#bootstrap-style").attr("href")&&s("#bootstrap-style").attr("href","assets/css/bootstrap-rtl.min.css"),"assets/css/app-rtl.min.css"!=s("#app-style").attr("href")&&s("#app-style").attr("href","assets/css/app-rtl.min.css"),s("html").attr("dir","rtl"),s("html").attr("data-bs-theme","dark"),sessionStorage.setItem("is_visited","dark-rtl-mode-switch"))}function l(){document.webkitIsFullScreen||document.mozFullScreen||document.msFullscreenElement||(console.log("pressed"),s("body").removeClass("fullscreen-enable"))}s("#side-menu").metisMenu(),s("#vertical-menu-btn").on("click",function(e){e.preventDefault(),s("body").toggleClass("sidebar-enable"),992<=s(window).width()?s("body").toggleClass("vertical-collpsed"):s("body").removeClass("vertical-collpsed")}),s("#sidebar-menu a").each(function(){var e=window.location.href.split(/[?#]/)[0];this.href==e&&(s(this).addClass("active"),s(this).parent().addClass("mm-active"),s(this).parent().parent().addClass("mm-show"),s(this).parent().parent().prev().addClass("mm-active"),s(this).parent().parent().parent().addClass("mm-active"),s(this).parent().parent().parent().parent().addClass("mm-show"),s(this).parent().parent().parent().parent().parent().addClass("mm-active"))}),s(document).ready(function(){var e;0<s("#sidebar-menu").length&&0<s("#sidebar-menu .mm-active .active").length&&(300<(e=s("#sidebar-menu .mm-active .active").offset().top)&&(e-=300,s(".vertical-menu .simplebar-content-wrapper").animate({scrollTop:e},"slow")))}),s(".navbar-nav a").each(function(){var e=window.location.href.split(/[?#]/)[0];this.href==e&&(s(this).addClass("active"),s(this).parent().addClass("active"),s(this).parent().parent().addClass("active"),s(this).parent().parent().parent().addClass("active"),s(this).parent().parent().parent().parent().addClass("active"),s(this).parent().parent().parent().parent().parent().addClass("active"),s(this).parent().parent().parent().parent().parent().parent().addClass("active"))}),s('[data-bs-toggle="fullscreen"]').on("click",function(e){e.preventDefault(),s("body").toggleClass("fullscreen-enable"),document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement?document.cancelFullScreen?document.cancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen():document.documentElement.requestFullscreen?document.documentElement.requestFullscreen():document.documentElement.mozRequestFullScreen?document.documentElement.mozRequestFullScreen():document.documentElement.webkitRequestFullscreen&&document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)}),document.addEventListener("fullscreenchange",l),document.addEventListener("webkitfullscreenchange",l),document.addEventListener("mozfullscreenchange",l),s(".right-bar-toggle").on("click",function(e){s("body").toggleClass("right-bar-enabled")}),s(document).on("click","body",function(e){0<s(e.target).closest(".right-bar-toggle, .right-bar").length||s("body").removeClass("right-bar-enabled")}),function(){if(document.getElementById("topnav-menu-content")){for(var e=document.getElementById("topnav-menu-content").getElementsByTagName("a"),t=0,s=e.length;t<s;t++)e[t].onclick=function(e){"#"===e.target.getAttribute("href")&&(e.target.parentElement.classList.toggle("active"),e.target.nextElementSibling.classList.toggle("show"))};window.addEventListener("resize",r)}}(),[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map(function(e){return new bootstrap.Tooltip(e)}),[].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]')).map(function(e){return new bootstrap.Popover(e)}),[].slice.call(document.querySelectorAll(".offcanvas")).map(function(e){return new bootstrap.Offcanvas(e)}),window.sessionStorage&&((e=sessionStorage.getItem("is_visited"))?(s(".right-bar input:checkbox").prop("checked",!1),s("#"+e).prop("checked",!0)):"rtl"===s("html").attr("dir")&&"dark"===s("html").attr("data-bs-theme")?(s("#dark-rtl-mode-switch").prop("checked",!0),s("#light-mode-switch").prop("checked",!1),sessionStorage.setItem("is_visited","dark-rtl-mode-switch"),c(e)):"rtl"===s("html").attr("dir")?(s("#rtl-mode-switch").prop("checked",!0),s("#light-mode-switch").prop("checked",!1),sessionStorage.setItem("is_visited","rtl-mode-switch"),c(e)):"dark"===s("html").attr("data-bs-theme")?(s("#dark-mode-switch").prop("checked",!0),s("#light-mode-switch").prop("checked",!1),sessionStorage.setItem("is_visited","dark-mode-switch"),c(e)):sessionStorage.setItem("is_visited","light-mode-switch")),s("#light-mode-switch, #dark-mode-switch, #rtl-mode-switch, #dark-rtl-mode-switch").on("change",function(e){c(e.target.id)}),s("#password-addon").on("click",function(){0<s(this).siblings("input").length&&("password"==s(this).siblings("input").attr("type")?s(this).siblings("input").attr("type","input"):s(this).siblings("input").attr("type","password"))}),null!=t&&t!==a&&n(t),s(".language").on("click",function(e){n(s(this).attr("data-lang"))}),s(window).on("load",function(){s("#status").fadeOut(),s("#preloader").delay(350).fadeOut("slow")}),Waves.init(),s("#checkAll").on("change",function(){s(".table-check .form-check-input").prop("checked",s(this).prop("checked"))}),s(".table-check .form-check-input").change(function(){s(".table-check .form-check-input:checked").length==s(".table-check .form-check-input").length?s("#checkAll").prop("checked",!0):s("#checkAll").prop("checked",!1)})}(jQuery);
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');

    sidebar.classList.toggle('sidebar-active');
    overlay.classList.toggle('overlay-active');
}

document.getElementById('open-modal').addEventListener('click', function() {
    document.getElementById('payment-modal').style.display = 'block';
});

document.getElementById('close-modal').addEventListener('click', function() {
    document.getElementById('payment-modal').style.display = 'none';
});

window.onclick = function(event) {
    if (event.target == document.getElementById('payment-modal')) {
        document.getElementById('payment-modal').style.display = 'none';
    }
};

document.querySelector('.stat-info p').innerText = dynamicData.totalPlans;
document.querySelector('.stat-info p').innerText = dynamicData.ongoingPlans;


document.querySelector('.btn-edit-profile').addEventListener('click', function() {
    const inputs = document.querySelectorAll('.profile-form input');
    inputs.forEach(input => input.removeAttribute('readonly'));
    inputs.forEach(input => input.style.backgroundColor = '#fff');
    // You can also change the button text to "Save" and handle the save action.
});

document.querySelector('.btn-change-password').addEventListener('click', function() {
    // Logic to redirect to change password page
    window.location.href = 'change-password.html';
});

//for debit card
function openTab(evt, tabName) {
            // Hide all elements with class="tabcontent" by default
            var tabcontent = document.getElementsByClassName("tabcontent");
            for (var i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }

            // Show the specific tab content
            document.getElementById(tabName).style.display = "block";
        }

        // Form submission (optional)
        document.getElementById("debitCardForm").addEventListener("submit", function(event){
            event.preventDefault(); // Prevent the form from submitting the traditional way
            
            // Simulate card connection process
            alert("Your debit card has been connected successfully!");
            
            // Here you can add actual form submission logic (e.g., using AJAX) to your backend
        });

    function openTab(evt, tabName) {
            var i, tabcontent, tablinks;

            // Hide all tab content
            tabcontent = document.getElementsByClassName("tab-content");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }

            // Remove the active class from all buttons
            tablinks = document.getElementsByClassName("tab-button");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }
// Show the current tab and add an "active" class to the button that opened the tab
            document.getElementById(tabName).style.display = "block";
            evt.currentTarget.className += " active";
        }

 function openTab(evt, tabName) {
            var i, tabcontent, tablinks;

            // Hide all tab content
            tabcontent = document.getElementsByClassName("tab-content");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }

            // Remove the active class from all buttons
            tablinks = document.getElementsByClassName("tab-button");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }

// Show the current tab and add an "active" class to the button that opened the tab
            document.getElementById(tabName).style.display = "block";
            evt.currentTarget.className += " active";
        }

// JavaScript to handle tab switching and modal functionality for change bank details

function openTab(event, tabName) {
    var i, tabcontent, tabbuttons;
    
    // Hide all tab contents
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        tabcontent[i].classList.remove("active");
    }

    // Remove the active class from all buttons
    tabbuttons = document.getElementsByClassName("tab-button");
    for (i = 0; i < tabbuttons.length; i++) {
        tabbuttons[i].classList.remove("active");
    }

    // Show the current tab content and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    document.getElementById(tabName).classList.add("active");
    event.currentTarget.classList.add("active");
}

// Modal functionality
var modal = document.getElementById("payment-modal");
var btn = document.getElementById("open-modal");
var span = document.getElementById("close-modal");

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Optional: Validate form inputs and show confirmation in "Confirm Changes" tab
document.getElementById("bank-account-form").addEventListener("submit", function(e) {
    e.preventDefault();
    
    var bankName = document.getElementById("bank-name").value;
    var accountNumber = document.getElementById("account-number").value;
    var accountName = document.getElementById("account-name").value;

    document.getElementById("confirm-bank-name").textContent = bankName;
    document.getElementById("confirm-account-number").textContent = accountNumber;
    document.getElementById("confirm-account-name").textContent = accountName;

    // Switch to Confirm Changes tab
    document.querySelector(".tab-button.active").classList.remove("active");
    document.querySelector(".tab-content.active").classList.remove("active");
    document.getElementById("ConfirmChanges").classList.add("active");
    document.querySelector("[onclick='openTab(event, \"ConfirmChanges\")']").classList.add("active");
});

// JavaScript to handle referral link copy functionality for referral

document.getElementById("copy-link-button").addEventListener("click", function() {
    // Get the referral link input field
    var referralLink = document.getElementById("referral-link");
    
    // Select the text field
    referralLink.select();
    referralLink.setSelectionRange(0, 99999); // For mobile devices
    
    // Copy the text inside the text field
    document.execCommand("copy");
    
    // Show the success message
    var successMessage = document.getElementById("copy-success-message");
    successMessage.classList.remove("hidden");
    
    // Hide the success message after 3 seconds
    setTimeout(function() {
        successMessage.classList.add("hidden");
    }, 3000);
});


//Javascript for change of password

 document.getElementById('change-password-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        const newPassword = document.getElementById('new-password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        const errorMessage = document.getElementById('error-message');

        if (newPassword !== confirmPassword) {
            errorMessage.style.display = 'block'; // Show error message
        } else {
            errorMessage.style.display = 'none';
            // Proceed with form submission or password change logic
            alert('Password changed successfully!');
        }
    });

// Set a timer for 3 minutes of inactivity
                        let timeoutTimer;
                        let countdownTimer;

                        function resetTimers() {
                            clearTimeout(timeoutTimer);
                            clearInterval(countdownTimer);
                            document.getElementById('timeout-notification').style.display = 'none';

                            timeoutTimer = setTimeout(showTimeoutWarning, 3 * 60 * 1000); // 3 minutes
                        }

                        function showTimeoutWarning() {
                            document.getElementById('timeout-notification').style.display = 'block';
                            let timeLeft = 20; // 20 seconds countdown

                            countdownTimer = setInterval(() => {
                                document.getElementById('countdown-timer').textContent = timeLeft;
                                if (timeLeft <= 0) {
                                    clearInterval(countdownTimer);
                                    window.location.href = '/logout'; // Redirect to logout
                                }
                                timeLeft--;
                            }, 1000);
                        }

                        // Call resetTimers on user activity (click, keypress, etc.)
                        document.addEventListener('click', resetTimers);
                        document.addEventListener('keypress', resetTimers);
                        document.addEventListener('mousemove', resetTimers);
                        document.addEventListener('scroll', resetTimers);

                        // Initialize timers
                        resetTimers();

// JS for ongoing plans
                        document.addEventListener('DOMContentLoaded', function () {
    const rolloverButtons = document.querySelectorAll('.rollover-btn');
    const withdrawButtons = document.querySelectorAll('.withdraw-btn');

    rolloverButtons.forEach(button => {
        button.addEventListener('click', function () {
            alert('Rollover functionality will be implemented here.');
        });
    });

    withdrawButtons.forEach(button => {
        button.addEventListener('click', function () {
            alert('Withdraw functionality will be implemented here.');
        });
    });
});

                        
