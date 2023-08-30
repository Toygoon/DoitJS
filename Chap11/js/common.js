(function (win, $) {
    let $html = $("html");

    let deviceSize = {
        pc: 1009,
        tablet: 801,
        mobile: 800,
    };

    function scrollShowHide(status) {
        $html.css({ "overflow-y": status });

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

    $(win).on("resize", function () {
        let wSize = $(win).width();

        if (wSize >= deviceSize.pc && !$("html").hasClass("pc")) {
            $html.removeClass("mobile tablet").addClass("pc");
            scrollShowHide("scroll");
        } else if (
            wSize < deviceSize.pc &&
            wSize >= deviceSize.tablet &&
            !$("html").hasClass("tablet")
        ) {
            $html.removeClass("mobile pc").addClass("tablet");
            scrollShowHide("scroll");
        } else if (wSize <= deviceSize.mobile && !$html.hasClass("mobile")) {
            $html.removeCalss("pc tablet").addClass("mobile");
            let menuPos = parseInt($(".mobile-menu-wrap").css("left"));

            if (menuPos >= 0) {
                scrollShowHide("hidden");
            }
        }
    });

    $(function () {
        $(win).trigger("resize");
        $(document).on("mouseover focus", ".pc #gnb>ul>li>a, .tablet #gnb>ul>li>a", gnbPlay);
        $(document).on("click", ".mobile #gnb>ul>li:not(.no-sub)>a", gnbPlay);

        function gnbPlay() {
            let $ts = $(this);
            if ($("html").hasClass("mobile")) {
                $(".mobile #gnb>ul>li>a").removeClass("on");
                $("#gnb ul ul:visible").slideUp(300);

                if ($ts.next().is(":hidden")) {
                    $ts.addClass("on");
                    $ts.next().stop(true, true).slideDown(300);
                } else {
                    $("#gnb ul ul:visible").slideUp(300);
                    $ts.next().stop(true, true).slideDown(300);
                }
            }

            $(document).on("mouseleave", ".pc #gnb, .tablet #gnb", gnbleave);
            function gnbleave() {
                $("#gnb ul ul:visible").slideUp(300);
                $("#gnb>ul>li>a").removeClass("on");
            }

            $(".mobile-menu-open button").on("click", function () {
                $(".mobile-menu-wrap").animate({ "left": 0 }, 200);
                scrollShowHide("hidden");
            });

            $(".mobile-menu-close button").on("click", function () {
                $(".mobile-menu-wrap").animate({ "left": "-1000px" }, 200);
                scrollShowHide("scroll");
                gnbleave();
            });
        }
    });
}(window, jQuery));
