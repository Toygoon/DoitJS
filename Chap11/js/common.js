(function (win, $) {
    let $html = $("html");

    let deviceSize = {
        pc: 1009,
        tablet: 801,
        mobile: 800
    };

    function scrollShowHide(status) {
        $html.css({"overflow-y": status});

        return $html.width();
    }

    let scW1 = scrollShowHide("hidden"),
        scW2 = scrollShowHide("scroll"),
        scW3 = scW1 - scW2;

    if (scW3 > 0) {
        deviceSize.pc -= scW3;
        deviceSize.tablet -= scW3;
        deviceSize.mobile -= scW3;
    }

    $(win).on("resize", function() {
        let wSize = $(win).width();

        if (wSize >= deviceSize.pc && !$("html").hasClass("pc")) {
            $html.removeClass("mobile tablet").addClass("pc");
            scrollShowHide("scroll");
        } else if (wSize < deviceSize.pc && wSize >= deviceSize.tablet && !$("html").hasClass("tablet")) {
            $html.removeClass("mobile pc").addClass("tablet");
            scrollShowHide("scroll");
        } else if(wSize <= deviceSize.mobile && !$html.hasClass("mobile")) {
            $html.removeCalss("pc tablet").addClass("mobile");
            let menuPos = parseInt($(".mobile-menu-wrap").css("left"));

            if (menuPos >= 0) {
                scrollShowHide("hidden");
            }
        }
    });
})