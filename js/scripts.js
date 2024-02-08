window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }
    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    const redirectButton = document.getElementById('redirectToSite');
    if (redirectButton) {
    redirectButton.addEventListener('click', function() {
        window.location.href = "http://harjoitustyo2.makjes22.treok.io/";
    });
    }

    const redirectButton2 = document.getElementById('redirectToSite2');
    if (redirectButton2) {
    redirectButton2.addEventListener('click', function() {
        window.location.href = "http://harjoitustyo1.makjes22.treok.io/";
    });
    }

    const redirectButton3 = document.getElementById('redirectToSite3');
    if (redirectButton3) {  // Changed from redirectButton2 to redirectButton3
    redirectButton3.addEventListener('click', function() {
        window.location.href = "/fanikauppa";
    });
    }
});
