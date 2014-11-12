(function($, url) {
    $(function() {
        var pathname = url.pathname;

        var addActiveClass = function(idStr) {
            $(idStr).addClass("active");
        }

        if(pathname === "/" || pathname === "/aboutus/" || pathname === "/ourservices/" || pathname === "/aboutus/partners/" ) {

            addActiveClass("#ricston-home-nav-menu");

        } else if(pathname.lastIndexOf("/industries/", 0) === 0) {

            addActiveClass("#ricston-industries-nav-menu");

        } else if(pathname.lastIndexOf("/tech/", 0) === 0) {

            addActiveClass("#ricston-tech-nav-menu");

        } else if(pathname.lastIndexOf("/casestudies/", 0) === 0) {

            addActiveClass("#ricston-casestudies-nave-menu");

        } else if(pathname.lastIndexOf("/integration/", 0) === 0) {

            addActiveClass("#ricston-integration-nav-menu");

        } else if(pathname.lastIndexOf("/contactus/", 0) === 0) {

            addActiveClass("#ricston-contactus-nav-menu");

        }

        
    });
})(jQuery, location);
