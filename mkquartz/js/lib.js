(function(n, t) {
    typeof define == "function" && define.amd ? define(t) : typeof exports == "object" ? module.exports = t() : n.NProgress = t()
})(this, function() {
    function u(n, t, i) {
        return n < t ? t : n > i ? i : n
    }

    function r(n) {
        return (-1 + n) * 100
    }

    function l(n, i, u) {
        var f;
        return f = t.positionUsing === "translate3d" ? {
            transform: "translate3d(" + r(n) + "%,0,0)"
        } : t.positionUsing === "translate" ? {
            transform: "translate(" + r(n) + "%,0)"
        } : {
            "margin-left": r(n) + "%"
        }, f.transition = "all " + i + "ms " + u, f
    }

    function o(n, t) {
        var i = typeof n == "string" ? n : f(n);
        return i.indexOf(" " + t + " ") >= 0
    }

    function s(n, t) {
        var i = f(n),
            r = i + t;
        o(i, t) || (n.className = r.substring(1))
    }

    function h(n, t) {
        var r = f(n),
            i;
        o(n, t) && (i = r.replace(" " + t + " ", " "), n.className = i.substring(1, i.length - 1))
    }

    function f(n) {
        return (" " + (n.className || "") + " ").replace(/\s+/gi, " ")
    }

    function c(n) {
        n && n.parentNode && n.parentNode.removeChild(n)
    }
    var n = {},
        t, e, i;
    return n.version = "0.1.6", t = n.settings = {
            minimum: .08,
            easing: "ease",
            positionUsing: "",
            speed: 200,
            trickle: !0,
            trickleRate: .02,
            trickleSpeed: 800,
            showSpinner: !0,
            barSelector: '[role="bar"]',
            spinnerSelector: '[role="spinner"]',
            parent: "body",
            template: '<div class="bar" role="bar"><div class="peg"><\/div><\/div><div class="spinner" role="spinner"><div class="spinner-icon"><\/div><\/div>'
        }, n.configure = function(n) {
            var i, r;
            for (i in n) r = n[i], r !== undefined && n.hasOwnProperty(i) && (t[i] = r);
            return this
        }, n.status = null, n.set = function(r) {
            var s = n.isStarted();
            r = u(r, t.minimum, 1);
            n.status = r === 1 ? null : r;
            var f = n.render(!s),
                h = f.querySelector(t.barSelector),
                o = t.speed,
                c = t.easing;
            return f.offsetWidth, e(function(u) {
                t.positionUsing === "" && (t.positionUsing = n.getPositioningCSS());
                i(h, l(r, o, c));
                r === 1 ? (i(f, {
                    transition: "none",
                    opacity: 1
                }), f.offsetWidth, setTimeout(function() {
                    i(f, {
                        transition: "all " + o + "ms linear",
                        opacity: 0
                    });
                    setTimeout(function() {
                        n.remove();
                        u()
                    }, o)
                }, o)) : setTimeout(u, o)
            }), this
        }, n.isStarted = function() {
            return typeof n.status == "number"
        }, n.start = function() {
            n.status || n.set(0);
            var i = function() {
                setTimeout(function() {
                    n.status && (n.trickle(), i())
                }, t.trickleSpeed)
            };
            return t.trickle && i(), this
        }, n.done = function(t) {
            return !t && !n.status ? this : n.inc(.3 + .5 * Math.random()).set(1)
        }, n.inc = function(t) {
            var i = n.status;
            return i ? (typeof t != "number" && (t = (1 - i) * u(Math.random() * i, .1, .95)), i = u(i + t, 0, .994), n.set(i)) : n.start()
        }, n.trickle = function() {
            return n.inc(Math.random() * t.trickleRate)
        },
        function() {
            var i = 0,
                t = 0;
            n.promise = function(r) {
                return !r || r.state() == "resolved" ? this : (t == 0 && n.start(), i++, t++, r.always(function() {
                    t--;
                    t == 0 ? (i = 0, n.done()) : n.set((i - t) / i)
                }), this)
            }
        }(), n.render = function(u) {
            var f;
            if (n.isRendered()) return document.getElementById("nprogress");
            s(document.documentElement, "nprogress-busy");
            f = document.createElement("div");
            f.id = "nprogress";
            f.innerHTML = t.template;
            var h = f.querySelector(t.barSelector),
                l = u ? "-100" : r(n.status || 0),
                e = document.querySelector(t.parent),
                o;
            return i(h, {
                transition: "all 0 linear",
                transform: "translate3d(" + l + "%,0,0)"
            }), t.showSpinner || (o = f.querySelector(t.spinnerSelector), o && c(o)), e != document.body && s(e, "nprogress-custom-parent"), e.appendChild(f), f
        }, n.remove = function() {
            h(document.documentElement, "nprogress-busy");
            h(document.querySelector(t.parent), "nprogress-custom-parent");
            var n = document.getElementById("nprogress");
            n && c(n)
        }, n.isRendered = function() {
            return !!document.getElementById("nprogress")
        }, n.getPositioningCSS = function() {
            var n = document.body.style,
                t = "WebkitTransform" in n ? "Webkit" : "MozTransform" in n ? "Moz" : "msTransform" in n ? "ms" : "OTransform" in n ? "O" : "";
            return t + "Perspective" in n ? "translate3d" : t + "Transform" in n ? "translate" : "margin"
        }, e = function() {
            function t() {
                var i = n.shift();
                i && i(t)
            }
            var n = [];
            return function(i) {
                n.push(i);
                n.length == 1 && t()
            }
        }(), i = function() {
            function r(n) {
                return n.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(n, t) {
                    return t.toUpperCase()
                })
            }

            function u(t) {
                var u = document.body.style,
                    i, f, r;
                if (t in u) return t;
                for (i = n.length, f = t.charAt(0).toUpperCase() + t.slice(1); i--;)
                    if (r = n[i] + f, r in u) return r;
                return t
            }

            function f(n) {
                return n = r(n), t[n] || (t[n] = u(n))
            }

            function i(n, t, i) {
                t = f(t);
                n.style[t] = i
            }
            var n = ["Webkit", "O", "Moz", "ms"],
                t = {};
            return function(n, t) {
                var u = arguments,
                    r, f;
                if (u.length == 2)
                    for (r in t) f = t[r], f !== undefined && t.hasOwnProperty(r) && i(n, r, f);
                else i(n, u[1], u[2])
            }
        }(), n
});
! function() {
    var n = function(t, i) {
        function s() {
            this.q = [];
            this.add = function(n) {
                this.q.push(n)
            };
            var n, t;
            this.call = function() {
                for (n = 0, t = this.q.length; n < t; n++) this.q[n].call()
            }
        }

        function h(n, t) {
            return n.currentStyle ? n.currentStyle[t] : window.getComputedStyle ? window.getComputedStyle(n, null).getPropertyValue(t) : n.style[t]
        }

        function f(n, t) {
            var u, f;
            if (n.resizedAttached) {
                if (n.resizedAttached) return void n.resizedAttached.add(t)
            } else n.resizedAttached = new s, n.resizedAttached.add(t);
            n.resizeSensor = document.createElement("div");
            n.resizeSensor.className = "resize-sensor";
            u = "position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;";
            f = "position: absolute; left: 0; top: 0; transition: 0s;";
            n.resizeSensor.style.cssText = u;
            n.resizeSensor.innerHTML = '<div class="resize-sensor-expand" style="' + u + '"><div style="' + f + '"><\/div><\/div><div class="resize-sensor-shrink" style="' + u + '"><div style="' + f + ' width: 200%; height: 200%"><\/div><\/div>';
            n.appendChild(n.resizeSensor), {
                fixed: 1,
                absolute: 1
            } [h(n, "position")] || (n.style.position = "relative");
            var e, o, i = n.resizeSensor.childNodes[0],
                c = i.childNodes[0],
                r = n.resizeSensor.childNodes[1],
                l = (r.childNodes[0], function() {
                    c.style.width = i.offsetWidth + 10 + "px";
                    c.style.height = i.offsetHeight + 10 + "px";
                    i.scrollLeft = i.scrollWidth;
                    i.scrollTop = i.scrollHeight;
                    r.scrollLeft = r.scrollWidth;
                    r.scrollTop = r.scrollHeight;
                    e = n.offsetWidth;
                    o = n.offsetHeight
                });
            l();
            var y = function() {
                    n.resizedAttached && n.resizedAttached.call()
                },
                a = function(n, t, i) {
                    n.attachEvent ? n.attachEvent("on" + t, i) : n.addEventListener(t, i)
                },
                v = function() {
                    n.offsetWidth == e && n.offsetHeight == o || y();
                    l()
                };
            a(i, "scroll", v);
            a(r, "scroll", v)
        }
        var u = Object.prototype.toString.call(t),
            e = "[object Array]" === u || "[object NodeList]" === u || "[object HTMLCollection]" === u || "undefined" != typeof jQuery && t instanceof jQuery || "undefined" != typeof Elements && t instanceof Elements,
            r, o;
        if (e)
            for (r = 0, o = t.length; r < o; r++) f(t[r], i);
        else f(t, i);
        this.detach = function() {
            if (e)
                for (var i = 0, r = t.length; i < r; i++) n.detach(t[i]);
            else n.detach(t)
        }
    };
    n.detach = function(n) {
        n.resizeSensor && (n.removeChild(n.resizeSensor), delete n.resizeSensor, delete n.resizedAttached)
    };
    "undefined" != typeof module && "undefined" != typeof module.exports ? module.exports = n : window.ResizeSensor = n
}();
! function(n) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], n) : "undefined" != typeof exports ? module.exports = n(require("jquery")) : n(jQuery)
}(function(n) {
    "use strict";
    var t = window.Slick || {};
    t = function() {
        function t(t, r) {
            var f, u = this;
            u.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: n(t),
                appendDots: n(t),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous<\/button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next<\/button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(n, t) {
                    return '<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">' + (t + 1) + "<\/button>"
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !1,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            };
            u.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            };
            n.extend(u, u.initials);
            u.activeBreakpoint = null;
            u.animType = null;
            u.animProp = null;
            u.breakpoints = [];
            u.breakpointSettings = [];
            u.cssTransitions = !1;
            u.hidden = "hidden";
            u.paused = !1;
            u.positionProp = null;
            u.respondTo = null;
            u.rowCount = 1;
            u.shouldClick = !0;
            u.$slider = n(t);
            u.$slidesCache = null;
            u.transformType = null;
            u.transitionType = null;
            u.visibilityChange = "visibilitychange";
            u.windowWidth = 0;
            u.windowTimer = null;
            f = n(t).data("slick") || {};
            u.options = n.extend({}, u.defaults, f, r);
            u.currentSlide = u.options.initialSlide;
            u.originalSettings = u.options;
            "undefined" != typeof document.mozHidden ? (u.hidden = "mozHidden", u.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (u.hidden = "webkitHidden", u.visibilityChange = "webkitvisibilitychange");
            u.autoPlay = n.proxy(u.autoPlay, u);
            u.autoPlayClear = n.proxy(u.autoPlayClear, u);
            u.changeSlide = n.proxy(u.changeSlide, u);
            u.clickHandler = n.proxy(u.clickHandler, u);
            u.selectHandler = n.proxy(u.selectHandler, u);
            u.setPosition = n.proxy(u.setPosition, u);
            u.swipeHandler = n.proxy(u.swipeHandler, u);
            u.dragHandler = n.proxy(u.dragHandler, u);
            u.keyHandler = n.proxy(u.keyHandler, u);
            u.autoPlayIterator = n.proxy(u.autoPlayIterator, u);
            u.instanceUid = i++;
            u.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;
            u.registerBreakpoints();
            u.init(!0);
            u.checkResponsive(!0)
        }
        var i = 0;
        return t
    }();
    t.prototype.addSlide = t.prototype.slickAdd = function(t, i, r) {
        var u = this;
        if ("boolean" == typeof i) r = i, i = null;
        else if (0 > i || i >= u.slideCount) return !1;
        u.unload();
        "number" == typeof i ? 0 === i && 0 === u.$slides.length ? n(t).appendTo(u.$slideTrack) : r ? n(t).insertBefore(u.$slides.eq(i)) : n(t).insertAfter(u.$slides.eq(i)) : r === !0 ? n(t).prependTo(u.$slideTrack) : n(t).appendTo(u.$slideTrack);
        u.$slides = u.$slideTrack.children(this.options.slide);
        u.$slideTrack.children(this.options.slide).detach();
        u.$slideTrack.append(u.$slides);
        u.$slides.each(function(t, i) {
            n(i).attr("data-slick-index", t)
        });
        u.$slidesCache = u.$slides;
        u.reinit()
    };
    t.prototype.animateHeight = function() {
        var n = this,
            t;
        1 === n.options.slidesToShow && n.options.adaptiveHeight === !0 && n.options.vertical === !1 && (t = n.$slides.eq(n.currentSlide).outerHeight(!0), n.$list.animate({
            height: t
        }, n.options.speed))
    };
    t.prototype.animateSlide = function(t, i) {
        var u = {},
            r = this;
        r.animateHeight();
        r.options.rtl === !0 && r.options.vertical === !1 && (t = -t);
        r.transformsEnabled === !1 ? r.options.vertical === !1 ? r.$slideTrack.animate({
            left: t
        }, r.options.speed, r.options.easing, i) : r.$slideTrack.animate({
            top: t
        }, r.options.speed, r.options.easing, i) : r.cssTransitions === !1 ? (r.options.rtl === !0 && (r.currentLeft = -r.currentLeft), n({
            animStart: r.currentLeft
        }).animate({
            animStart: t
        }, {
            duration: r.options.speed,
            easing: r.options.easing,
            step: function(n) {
                n = Math.ceil(n);
                r.options.vertical === !1 ? (u[r.animType] = "translate(" + n + "px, 0px)", r.$slideTrack.css(u)) : (u[r.animType] = "translate(0px," + n + "px)", r.$slideTrack.css(u))
            },
            complete: function() {
                i && i.call()
            }
        })) : (r.applyTransition(), t = Math.ceil(t), u[r.animType] = r.options.vertical === !1 ? "translate3d(" + t + "px, 0px, 0px)" : "translate3d(0px," + t + "px, 0px)", r.$slideTrack.css(u), i && setTimeout(function() {
            r.disableTransition();
            i.call()
        }, r.options.speed))
    };
    t.prototype.asNavFor = function(t) {
        var r = this,
            i = r.options.asNavFor;
        i && null !== i && (i = n(i).not(r.$slider));
        null !== i && "object" == typeof i && i.each(function() {
            var i = n(this).slick("getSlick");
            i.unslicked || i.slideHandler(t, !0)
        })
    };
    t.prototype.applyTransition = function(n) {
        var t = this,
            i = {};
        i[t.transitionType] = t.options.fade === !1 ? t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : "opacity " + t.options.speed + "ms " + t.options.cssEase;
        t.options.fade === !1 ? t.$slideTrack.css(i) : t.$slides.eq(n).css(i)
    };
    t.prototype.autoPlay = function() {
        var n = this;
        n.autoPlayTimer && clearInterval(n.autoPlayTimer);
        n.slideCount > n.options.slidesToShow && n.paused !== !0 && (n.autoPlayTimer = setInterval(n.autoPlayIterator, n.options.autoplaySpeed))
    };
    t.prototype.autoPlayClear = function() {
        var n = this;
        n.autoPlayTimer && clearInterval(n.autoPlayTimer)
    };
    t.prototype.autoPlayIterator = function() {
        var n = this;
        n.options.infinite === !1 ? 1 === n.direction ? (n.currentSlide + 1 === n.slideCount - 1 && (n.direction = 0), n.slideHandler(n.currentSlide + n.options.slidesToScroll)) : (n.currentSlide - 1 == 0 && (n.direction = 1), n.slideHandler(n.currentSlide - n.options.slidesToScroll)) : n.slideHandler(n.currentSlide + n.options.slidesToScroll)
    };
    t.prototype.buildArrows = function() {
        var t = this;
        t.options.arrows === !0 && (t.$prevArrow = n(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = n(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), t.options.infinite !== !0 && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    };
    t.prototype.buildDots = function() {
        var i, r, t = this;
        if (t.options.dots === !0 && t.slideCount > t.options.slidesToShow) {
            for (r = '<ul class="' + t.options.dotsClass + '">', i = 0; i <= t.getDotCount(); i += 1) r += "<li>" + t.options.customPaging.call(this, t, i) + "<\/li>";
            r += "<\/ul>";
            t.$dots = n(r).appendTo(t.options.appendDots);
            t.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
        }
    };
    t.prototype.buildOut = function() {
        var t = this;
        t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide");
        t.slideCount = t.$slides.length;
        t.$slides.each(function(t, i) {
            n(i).attr("data-slick-index", t).data("originalStyling", n(i).attr("style") || "")
        });
        t.$slider.addClass("slick-slider");
        t.$slideTrack = 0 === t.slideCount ? n('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent();
        t.$list = t.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent();
        t.$slideTrack.css("opacity", 0);
        (t.options.centerMode === !0 || t.options.swipeToSlide === !0) && (t.options.slidesToScroll = 1);
        n("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading");
        t.setupInfinite();
        t.buildArrows();
        t.buildDots();
        t.updateDots();
        t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0);
        t.options.draggable === !0 && t.$list.addClass("draggable")
    };
    t.prototype.buildRows = function() {
        var t, i, r, f, c, u, e, n = this,
            o, s, h;
        if (f = document.createDocumentFragment(), u = n.$slider.children(), n.options.rows > 1) {
            for (e = n.options.slidesPerRow * n.options.rows, c = Math.ceil(u.length / e), t = 0; c > t; t++) {
                for (o = document.createElement("div"), i = 0; i < n.options.rows; i++) {
                    for (s = document.createElement("div"), r = 0; r < n.options.slidesPerRow; r++) h = t * e + (i * n.options.slidesPerRow + r), u.get(h) && s.appendChild(u.get(h));
                    o.appendChild(s)
                }
                f.appendChild(o)
            }
            n.$slider.html(f);
            n.$slider.children().children().children().css({
                width: 100 / n.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    };
    t.prototype.checkResponsive = function(t, i) {
        var f, u, e, r = this,
            o = !1,
            s = r.$slider.width(),
            h = window.innerWidth || n(window).width();
        if ("window" === r.respondTo ? e = h : "slider" === r.respondTo ? e = s : "min" === r.respondTo && (e = Math.min(h, s)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
            u = null;
            for (f in r.breakpoints) r.breakpoints.hasOwnProperty(f) && (r.originalSettings.mobileFirst === !1 ? e < r.breakpoints[f] && (u = r.breakpoints[f]) : e > r.breakpoints[f] && (u = r.breakpoints[f]));
            null !== u ? null !== r.activeBreakpoint ? (u !== r.activeBreakpoint || i) && (r.activeBreakpoint = u, "unslick" === r.breakpointSettings[u] ? r.unslick(u) : (r.options = n.extend({}, r.originalSettings, r.breakpointSettings[u]), t === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(t)), o = u) : (r.activeBreakpoint = u, "unslick" === r.breakpointSettings[u] ? r.unslick(u) : (r.options = n.extend({}, r.originalSettings, r.breakpointSettings[u]), t === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(t)), o = u) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, t === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(t), o = u);
            t || o === !1 || r.$slider.trigger("breakpoint", [r, o])
        }
    };
    t.prototype.changeSlide = function(t, i) {
        var f, e, o, r = this,
            u = n(t.target),
            s;
        switch (u.is("a") && t.preventDefault(), u.is("li") || (u = u.closest("li")), o = r.slideCount % r.options.slidesToScroll != 0, f = o ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, t.data.message) {
            case "previous":
                e = 0 === f ? r.options.slidesToScroll : r.options.slidesToShow - f;
                r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - e, !1, i);
                break;
            case "next":
                e = 0 === f ? r.options.slidesToScroll : f;
                r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + e, !1, i);
                break;
            case "index":
                s = 0 === t.data.index ? 0 : t.data.index || u.index() * r.options.slidesToScroll;
                r.slideHandler(r.checkNavigable(s), !1, i);
                u.children().trigger("focus");
                break;
            default:
                return
        }
    };
    t.prototype.checkNavigable = function(n) {
        var t, i, u = this,
            r;
        if (t = u.getNavigableIndexes(), i = 0, n > t[t.length - 1]) n = t[t.length - 1];
        else
            for (r in t) {
                if (n < t[r]) {
                    n = i;
                    break
                }
                i = t[r]
            }
        return n
    };
    t.prototype.cleanUpEvents = function() {
        var t = this;
        t.options.dots && null !== t.$dots && (n("li", t.$dots).off("click.slick", t.changeSlide), t.options.pauseOnDotsHover === !0 && t.options.autoplay === !0 && n("li", t.$dots).off("mouseenter.slick", n.proxy(t.setPaused, t, !0)).off("mouseleave.slick", n.proxy(t.setPaused, t, !1)));
        t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide));
        t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler);
        t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler);
        t.$list.off("touchend.slick mouseup.slick", t.swipeHandler);
        t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler);
        t.$list.off("click.slick", t.clickHandler);
        n(document).off(t.visibilityChange, t.visibility);
        t.$list.off("mouseenter.slick", n.proxy(t.setPaused, t, !0));
        t.$list.off("mouseleave.slick", n.proxy(t.setPaused, t, !1));
        t.options.accessibility === !0 && t.$list.off("keydown.slick", t.keyHandler);
        t.options.focusOnSelect === !0 && n(t.$slideTrack).children().off("click.slick", t.selectHandler);
        n(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange);
        n(window).off("resize.slick.slick-" + t.instanceUid, t.resize);
        n("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault);
        n(window).off("load.slick.slick-" + t.instanceUid, t.setPosition);
        n(document).off("ready.slick.slick-" + t.instanceUid, t.setPosition)
    };
    t.prototype.cleanUpRows = function() {
        var n, t = this;
        t.options.rows > 1 && (n = t.$slides.children().children(), n.removeAttr("style"), t.$slider.html(n))
    };
    t.prototype.clickHandler = function(n) {
        var t = this;
        t.shouldClick === !1 && (n.stopImmediatePropagation(), n.stopPropagation(), n.preventDefault())
    };
    t.prototype.destroy = function(t) {
        var i = this;
        i.autoPlayClear();
        i.touchObject = {};
        i.cleanUpEvents();
        n(".slick-cloned", i.$slider).detach();
        i.$dots && i.$dots.remove();
        i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove());
        i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove());
        i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            n(this).attr("style", n(this).data("originalStyling"))
        }), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides));
        i.cleanUpRows();
        i.$slider.removeClass("slick-slider");
        i.$slider.removeClass("slick-initialized");
        i.unslicked = !0;
        t || i.$slider.trigger("destroy", [i])
    };
    t.prototype.disableTransition = function(n) {
        var t = this,
            i = {};
        i[t.transitionType] = "";
        t.options.fade === !1 ? t.$slideTrack.css(i) : t.$slides.eq(n).css(i)
    };
    t.prototype.fadeSlide = function(n, t) {
        var i = this;
        i.cssTransitions === !1 ? (i.$slides.eq(n).css({
            zIndex: i.options.zIndex
        }), i.$slides.eq(n).animate({
            opacity: 1
        }, i.options.speed, i.options.easing, t)) : (i.applyTransition(n), i.$slides.eq(n).css({
            opacity: 1,
            zIndex: i.options.zIndex
        }), t && setTimeout(function() {
            i.disableTransition(n);
            t.call()
        }, i.options.speed))
    };
    t.prototype.fadeSlideOut = function(n) {
        var t = this;
        t.cssTransitions === !1 ? t.$slides.eq(n).animate({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }, t.options.speed, t.options.easing) : (t.applyTransition(n), t.$slides.eq(n).css({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }))
    };
    t.prototype.filterSlides = t.prototype.slickFilter = function(n) {
        var t = this;
        null !== n && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(n).appendTo(t.$slideTrack), t.reinit())
    };
    t.prototype.getCurrent = t.prototype.slickCurrentSlide = function() {
        var n = this;
        return n.currentSlide
    };
    t.prototype.getDotCount = function() {
        var n = this,
            t = 0,
            i = 0,
            r = 0;
        if (n.options.infinite === !0)
            for (; t < n.slideCount;) ++r, t = i + n.options.slidesToScroll, i += n.options.slidesToScroll <= n.options.slidesToShow ? n.options.slidesToScroll : n.options.slidesToShow;
        else if (n.options.centerMode === !0) r = n.slideCount;
        else
            for (; t < n.slideCount;) ++r, t = i + n.options.slidesToScroll, i += n.options.slidesToScroll <= n.options.slidesToShow ? n.options.slidesToScroll : n.options.slidesToShow;
        return r - 1
    };
    t.prototype.getLeft = function(n) {
        var f, r, i, t = this,
            u = 0;
        return t.slideOffset = 0, r = t.$slides.first().outerHeight(!0), t.options.infinite === !0 ? (t.slideCount > t.options.slidesToShow && (t.slideOffset = t.slideWidth * t.options.slidesToShow * -1, u = r * t.options.slidesToShow * -1), t.slideCount % t.options.slidesToScroll != 0 && n + t.options.slidesToScroll > t.slideCount && t.slideCount > t.options.slidesToShow && (n > t.slideCount ? (t.slideOffset = (t.options.slidesToShow - (n - t.slideCount)) * t.slideWidth * -1, u = (t.options.slidesToShow - (n - t.slideCount)) * r * -1) : (t.slideOffset = t.slideCount % t.options.slidesToScroll * t.slideWidth * -1, u = t.slideCount % t.options.slidesToScroll * r * -1))) : n + t.options.slidesToShow > t.slideCount && (t.slideOffset = (n + t.options.slidesToShow - t.slideCount) * t.slideWidth, u = (n + t.options.slidesToShow - t.slideCount) * r), t.slideCount <= t.options.slidesToShow && (t.slideOffset = 0, u = 0), t.options.centerMode === !0 && t.options.infinite === !0 ? t.slideOffset += t.slideWidth * Math.floor(t.options.slidesToShow / 2) - t.slideWidth : t.options.centerMode === !0 && (t.slideOffset = 0, t.slideOffset += t.slideWidth * Math.floor(t.options.slidesToShow / 2)), f = t.options.vertical === !1 ? n * t.slideWidth * -1 + t.slideOffset : n * r * -1 + u, t.options.variableWidth === !0 && (i = t.slideCount <= t.options.slidesToShow || t.options.infinite === !1 ? t.$slideTrack.children(".slick-slide").eq(n) : t.$slideTrack.children(".slick-slide").eq(n + t.options.slidesToShow), f = t.options.rtl === !0 ? i[0] ? -1 * (t.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, t.options.centerMode === !0 && (i = t.slideCount <= t.options.slidesToShow || t.options.infinite === !1 ? t.$slideTrack.children(".slick-slide").eq(n) : t.$slideTrack.children(".slick-slide").eq(n + t.options.slidesToShow + 1), f = t.options.rtl === !0 ? i[0] ? -1 * (t.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, f += (t.$list.width() - i.outerWidth()) / 2)), f
    };
    t.prototype.getOption = t.prototype.slickGetOption = function(n) {
        var t = this;
        return t.options[n]
    };
    t.prototype.getNavigableIndexes = function() {
        var i, n = this,
            t = 0,
            r = 0,
            u = [];
        for (n.options.infinite === !1 ? i = n.slideCount : (t = -1 * n.options.slidesToScroll, r = -1 * n.options.slidesToScroll, i = 2 * n.slideCount); i > t;) u.push(t), t = r + n.options.slidesToScroll, r += n.options.slidesToScroll <= n.options.slidesToShow ? n.options.slidesToScroll : n.options.slidesToShow;
        return u
    };
    t.prototype.getSlick = function() {
        return this
    };
    t.prototype.getSlideCount = function() {
        var u, i, r, t = this;
        return r = t.options.centerMode === !0 ? t.slideWidth * Math.floor(t.options.slidesToShow / 2) : 0, t.options.swipeToSlide === !0 ? (t.$slideTrack.find(".slick-slide").each(function(u, f) {
            if (f.offsetLeft - r + n(f).outerWidth() / 2 > -1 * t.swipeLeft) return (i = f, !1)
        }), u = Math.abs(n(i).attr("data-slick-index") - t.currentSlide) || 1) : t.options.slidesToScroll
    };
    t.prototype.goTo = t.prototype.slickGoTo = function(n, t) {
        var i = this;
        i.changeSlide({
            data: {
                message: "index",
                index: parseInt(n)
            }
        }, t)
    };
    t.prototype.init = function(t) {
        var i = this;
        n(i.$slider).hasClass("slick-initialized") || (n(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots());
        t && i.$slider.trigger("init", [i]);
        i.options.accessibility === !0 && i.initADA()
    };
    t.prototype.initArrowEvents = function() {
        var n = this;
        n.options.arrows === !0 && n.slideCount > n.options.slidesToShow && (n.$prevArrow.on("click.slick", {
            message: "previous"
        }, n.changeSlide), n.$nextArrow.on("click.slick", {
            message: "next"
        }, n.changeSlide))
    };
    t.prototype.initDotEvents = function() {
        var t = this;
        t.options.dots === !0 && t.slideCount > t.options.slidesToShow && n("li", t.$dots).on("click.slick", {
            message: "index"
        }, t.changeSlide);
        t.options.dots === !0 && t.options.pauseOnDotsHover === !0 && t.options.autoplay === !0 && n("li", t.$dots).on("mouseenter.slick", n.proxy(t.setPaused, t, !0)).on("mouseleave.slick", n.proxy(t.setPaused, t, !1))
    };
    t.prototype.initializeEvents = function() {
        var t = this;
        t.initArrowEvents();
        t.initDotEvents();
        t.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, t.swipeHandler);
        t.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, t.swipeHandler);
        t.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, t.swipeHandler);
        t.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, t.swipeHandler);
        t.$list.on("click.slick", t.clickHandler);
        n(document).on(t.visibilityChange, n.proxy(t.visibility, t));
        t.$list.on("mouseenter.slick", n.proxy(t.setPaused, t, !0));
        t.$list.on("mouseleave.slick", n.proxy(t.setPaused, t, !1));
        t.options.accessibility === !0 && t.$list.on("keydown.slick", t.keyHandler);
        t.options.focusOnSelect === !0 && n(t.$slideTrack).children().on("click.slick", t.selectHandler);
        n(window).on("orientationchange.slick.slick-" + t.instanceUid, n.proxy(t.orientationChange, t));
        n(window).on("resize.slick.slick-" + t.instanceUid, n.proxy(t.resize, t));
        n("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault);
        n(window).on("load.slick.slick-" + t.instanceUid, t.setPosition);
        n(document).on("ready.slick.slick-" + t.instanceUid, t.setPosition)
    };
    t.prototype.initUI = function() {
        var n = this;
        n.options.arrows === !0 && n.slideCount > n.options.slidesToShow && (n.$prevArrow.show(), n.$nextArrow.show());
        n.options.dots === !0 && n.slideCount > n.options.slidesToShow && n.$dots.show();
        n.options.autoplay === !0 && n.autoPlay()
    };
    t.prototype.keyHandler = function(n) {
        var t = this;
        n.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === n.keyCode && t.options.accessibility === !0 ? t.changeSlide({
            data: {
                message: "previous"
            }
        }) : 39 === n.keyCode && t.options.accessibility === !0 && t.changeSlide({
            data: {
                message: "next"
            }
        }))
    };
    t.prototype.lazyLoad = function() {
        function f(t) {
            n("img[data-lazy]", t).each(function() {
                var t = n(this),
                    i = n(this).attr("data-lazy"),
                    r = document.createElement("img");
                r.onload = function() {
                    t.animate({
                        opacity: 0
                    }, 100, function() {
                        t.attr("src", i).animate({
                            opacity: 1
                        }, 200, function() {
                            t.removeAttr("data-lazy").removeClass("slick-loading")
                        })
                    })
                };
                r.src = i
            })
        }
        var e, r, i, u, t = this;
        t.options.centerMode === !0 ? t.options.infinite === !0 ? (i = t.currentSlide + (t.options.slidesToShow / 2 + 1), u = i + t.options.slidesToShow + 2) : (i = Math.max(0, t.currentSlide - (t.options.slidesToShow / 2 + 1)), u = 2 + (t.options.slidesToShow / 2 + 1) + t.currentSlide) : (i = t.options.infinite ? t.options.slidesToShow + t.currentSlide : t.currentSlide, u = i + t.options.slidesToShow, t.options.fade === !0 && (i > 0 && i--, u <= t.slideCount && u++));
        e = t.$slider.find(".slick-slide").slice(i, u);
        f(e);
        t.slideCount <= t.options.slidesToShow ? (r = t.$slider.find(".slick-slide"), f(r)) : t.currentSlide >= t.slideCount - t.options.slidesToShow ? (r = t.$slider.find(".slick-cloned").slice(0, t.options.slidesToShow), f(r)) : 0 === t.currentSlide && (r = t.$slider.find(".slick-cloned").slice(-1 * t.options.slidesToShow), f(r))
    };
    t.prototype.loadSlider = function() {
        var n = this;
        n.setPosition();
        n.$slideTrack.css({
            opacity: 1
        });
        n.$slider.removeClass("slick-loading");
        n.initUI();
        "progressive" === n.options.lazyLoad && n.progressiveLazyLoad()
    };
    t.prototype.next = t.prototype.slickNext = function() {
        var n = this;
        n.changeSlide({
            data: {
                message: "next"
            }
        })
    };
    t.prototype.orientationChange = function() {
        var n = this;
        n.checkResponsive();
        n.setPosition()
    };
    t.prototype.pause = t.prototype.slickPause = function() {
        var n = this;
        n.autoPlayClear();
        n.paused = !0
    };
    t.prototype.play = t.prototype.slickPlay = function() {
        var n = this;
        n.paused = !1;
        n.autoPlay()
    };
    t.prototype.postSlide = function(n) {
        var t = this;
        t.$slider.trigger("afterChange", [t, n]);
        t.animating = !1;
        t.setPosition();
        t.swipeLeft = null;
        t.options.autoplay === !0 && t.paused === !1 && t.autoPlay();
        t.options.accessibility === !0 && t.initADA()
    };
    t.prototype.prev = t.prototype.slickPrev = function() {
        var n = this;
        n.changeSlide({
            data: {
                message: "previous"
            }
        })
    };
    t.prototype.preventDefault = function(n) {
        n.preventDefault()
    };
    t.prototype.progressiveLazyLoad = function() {
        var r, t, i = this;
        r = n("img[data-lazy]", i.$slider).length;
        r > 0 && (t = n("img[data-lazy]", i.$slider).first(), t.attr("src", null), t.attr("src", t.attr("data-lazy")).removeClass("slick-loading").load(function() {
            t.removeAttr("data-lazy");
            i.progressiveLazyLoad();
            i.options.adaptiveHeight === !0 && i.setPosition()
        }).error(function() {
            t.removeAttr("data-lazy");
            i.progressiveLazyLoad()
        }))
    };
    t.prototype.refresh = function(t) {
        var r, u, i = this;
        u = i.slideCount - i.options.slidesToShow;
        i.options.infinite || (i.slideCount <= i.options.slidesToShow ? i.currentSlide = 0 : i.currentSlide > u && (i.currentSlide = u));
        r = i.currentSlide;
        i.destroy(!0);
        n.extend(i, i.initials, {
            currentSlide: r
        });
        i.init();
        t || i.changeSlide({
            data: {
                message: "index",
                index: r
            }
        }, !1)
    };
    t.prototype.registerBreakpoints = function() {
        var u, f, i, t = this,
            r = t.options.responsive || null;
        if ("array" === n.type(r) && r.length) {
            t.respondTo = t.options.respondTo || "window";
            for (u in r)
                if (i = t.breakpoints.length - 1, f = r[u].breakpoint, r.hasOwnProperty(u)) {
                    for (; i >= 0;) t.breakpoints[i] && t.breakpoints[i] === f && t.breakpoints.splice(i, 1), i--;
                    t.breakpoints.push(f);
                    t.breakpointSettings[f] = r[u].settings
                } t.breakpoints.sort(function(n, i) {
                return t.options.mobileFirst ? n - i : i - n
            })
        }
    };
    t.prototype.reinit = function() {
        var t = this;
        t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide");
        t.slideCount = t.$slides.length;
        t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll);
        t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0);
        t.registerBreakpoints();
        t.setProps();
        t.setupInfinite();
        t.buildArrows();
        t.updateArrows();
        t.initArrowEvents();
        t.buildDots();
        t.updateDots();
        t.initDotEvents();
        t.checkResponsive(!1, !0);
        t.options.focusOnSelect === !0 && n(t.$slideTrack).children().on("click.slick", t.selectHandler);
        t.setSlideClasses(0);
        t.setPosition();
        t.$slider.trigger("reInit", [t]);
        t.options.autoplay === !0 && t.focusHandler()
    };
    t.prototype.resize = function() {
        var t = this;
        n(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function() {
            t.windowWidth = n(window).width();
            t.checkResponsive();
            t.unslicked || t.setPosition()
        }, 50))
    };
    t.prototype.removeSlide = t.prototype.slickRemove = function(n, t, i) {
        var r = this;
        return "boolean" == typeof n ? (t = n, n = t === !0 ? 0 : r.slideCount - 1) : n = t === !0 ? --n : n, r.slideCount < 1 || 0 > n || n > r.slideCount - 1 ? !1 : (r.unload(), i === !0 ? r.$slideTrack.children().remove() : r.$slideTrack.children(this.options.slide).eq(n).remove(), r.$slides = r.$slideTrack.children(this.options.slide), r.$slideTrack.children(this.options.slide).detach(), r.$slideTrack.append(r.$slides), r.$slidesCache = r.$slides, void r.reinit())
    };
    t.prototype.setCSS = function(n) {
        var r, u, t = this,
            i = {};
        t.options.rtl === !0 && (n = -n);
        r = "left" == t.positionProp ? Math.ceil(n) + "px" : "0px";
        u = "top" == t.positionProp ? Math.ceil(n) + "px" : "0px";
        i[t.positionProp] = n;
        t.transformsEnabled === !1 ? t.$slideTrack.css(i) : (i = {}, t.cssTransitions === !1 ? (i[t.animType] = "translate(" + r + ", " + u + ")", t.$slideTrack.css(i)) : (i[t.animType] = "translate3d(" + r + ", " + u + ", 0px)", t.$slideTrack.css(i)))
    };
    t.prototype.setDimensions = function() {
        var n = this,
            t;
        n.options.vertical === !1 ? n.options.centerMode === !0 && n.$list.css({
            padding: "0px " + n.options.centerPadding
        }) : (n.$list.height(n.$slides.first().outerHeight(!0) * n.options.slidesToShow), n.options.centerMode === !0 && n.$list.css({
            padding: n.options.centerPadding + " 0px"
        }));
        n.listWidth = n.$list.width();
        n.listHeight = n.$list.height();
        n.options.vertical === !1 && n.options.variableWidth === !1 ? (n.slideWidth = Math.ceil(n.listWidth / n.options.slidesToShow), n.$slideTrack.width(Math.ceil(n.slideWidth * n.$slideTrack.children(".slick-slide").length))) : n.options.variableWidth === !0 ? n.$slideTrack.width(5e3 * n.slideCount) : (n.slideWidth = Math.ceil(n.listWidth), n.$slideTrack.height(Math.ceil(n.$slides.first().outerHeight(!0) * n.$slideTrack.children(".slick-slide").length)));
        t = n.$slides.first().outerWidth(!0) - n.$slides.first().width();
        n.options.variableWidth === !1 && n.$slideTrack.children(".slick-slide").width(n.slideWidth - t)
    };
    t.prototype.setFade = function() {
        var i, t = this;
        t.$slides.each(function(r, u) {
            i = t.slideWidth * r * -1;
            t.options.rtl === !0 ? n(u).css({
                position: "relative",
                right: i,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0
            }) : n(u).css({
                position: "relative",
                left: i,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0
            })
        });
        t.$slides.eq(t.currentSlide).css({
            zIndex: t.options.zIndex - 1,
            opacity: 1
        })
    };
    t.prototype.setHeight = function() {
        var n = this,
            t;
        1 === n.options.slidesToShow && n.options.adaptiveHeight === !0 && n.options.vertical === !1 && (t = n.$slides.eq(n.currentSlide).outerHeight(!0), n.$list.css("height", t))
    };
    t.prototype.setOption = t.prototype.slickSetOption = function(t, i, r) {
        var f, e, u = this;
        if ("responsive" === t && "array" === n.type(i))
            for (e in i)
                if ("array" !== n.type(u.options.responsive)) u.options.responsive = [i[e]];
                else {
                    for (f = u.options.responsive.length - 1; f >= 0;) u.options.responsive[f].breakpoint === i[e].breakpoint && u.options.responsive.splice(f, 1), f--;
                    u.options.responsive.push(i[e])
                }
        else u.options[t] = i;
        r === !0 && (u.unload(), u.reinit())
    };
    t.prototype.setPosition = function() {
        var n = this;
        n.setDimensions();
        n.setHeight();
        n.options.fade === !1 ? n.setCSS(n.getLeft(n.currentSlide)) : n.setFade();
        n.$slider.trigger("setPosition", [n])
    };
    t.prototype.setProps = function() {
        var n = this,
            t = document.body.style;
        n.positionProp = n.options.vertical === !0 ? "top" : "left";
        "top" === n.positionProp ? n.$slider.addClass("slick-vertical") : n.$slider.removeClass("slick-vertical");
        (void 0 !== t.WebkitTransition || void 0 !== t.MozTransition || void 0 !== t.msTransition) && n.options.useCSS === !0 && (n.cssTransitions = !0);
        n.options.fade && ("number" == typeof n.options.zIndex ? n.options.zIndex < 3 && (n.options.zIndex = 3) : n.options.zIndex = n.defaults.zIndex);
        void 0 !== t.OTransform && (n.animType = "OTransform", n.transformType = "-o-transform", n.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (n.animType = !1));
        void 0 !== t.MozTransform && (n.animType = "MozTransform", n.transformType = "-moz-transform", n.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (n.animType = !1));
        void 0 !== t.webkitTransform && (n.animType = "webkitTransform", n.transformType = "-webkit-transform", n.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (n.animType = !1));
        void 0 !== t.msTransform && (n.animType = "msTransform", n.transformType = "-ms-transform", n.transitionType = "msTransition", void 0 === t.msTransform && (n.animType = !1));
        void 0 !== t.transform && n.animType !== !1 && (n.animType = "transform", n.transformType = "transform", n.transitionType = "transition");
        n.transformsEnabled = n.options.useTransform && null !== n.animType && n.animType !== !1
    };
    t.prototype.setSlideClasses = function(n) {
        var u, i, r, f, t = this;
        i = t.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true");
        t.$slides.eq(n).addClass("slick-current");
        t.options.centerMode === !0 ? (u = Math.floor(t.options.slidesToShow / 2), t.options.infinite === !0 && (n >= u && n <= t.slideCount - 1 - u ? t.$slides.slice(n - u, n + u + 1).addClass("slick-active").attr("aria-hidden", "false") : (r = t.options.slidesToShow + n, i.slice(r - u + 1, r + u + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === n ? i.eq(i.length - 1 - t.options.slidesToShow).addClass("slick-center") : n === t.slideCount - 1 && i.eq(t.options.slidesToShow).addClass("slick-center")), t.$slides.eq(n).addClass("slick-center")) : n >= 0 && n <= t.slideCount - t.options.slidesToShow ? t.$slides.slice(n, n + t.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= t.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (f = t.slideCount % t.options.slidesToShow, r = t.options.infinite === !0 ? t.options.slidesToShow + n : n, t.options.slidesToShow == t.options.slidesToScroll && t.slideCount - n < t.options.slidesToShow ? i.slice(r - (t.options.slidesToShow - f), r + f).addClass("slick-active").attr("aria-hidden", "false") : i.slice(r, r + t.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
        "ondemand" === t.options.lazyLoad && t.lazyLoad()
    };
    t.prototype.setupInfinite = function() {
        var i, r, u, t = this;
        if (t.options.fade === !0 && (t.options.centerMode = !1), t.options.infinite === !0 && t.options.fade === !1 && (r = null, t.slideCount > t.options.slidesToShow)) {
            for (u = t.options.centerMode === !0 ? t.options.slidesToShow + 1 : t.options.slidesToShow, i = t.slideCount; i > t.slideCount - u; i -= 1) r = i - 1, n(t.$slides[r]).clone(!0).attr("id", "").attr("data-slick-index", r - t.slideCount).prependTo(t.$slideTrack).addClass("slick-cloned");
            for (i = 0; u > i; i += 1) r = i, n(t.$slides[r]).clone(!0).attr("id", "").attr("data-slick-index", r + t.slideCount).appendTo(t.$slideTrack).addClass("slick-cloned");
            t.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                n(this).attr("id", "")
            })
        }
    };
    t.prototype.setPaused = function(n) {
        var t = this;
        t.options.autoplay === !0 && t.options.pauseOnHover === !0 && (t.paused = n, n ? t.autoPlayClear() : t.autoPlay())
    };
    t.prototype.selectHandler = function(t) {
        var i = this,
            u = n(t.target).is(".slick-slide") ? n(t.target) : n(t.target).parents(".slick-slide"),
            r = parseInt(u.attr("data-slick-index"));
        return r || (r = 0), i.slideCount <= i.options.slidesToShow ? (i.setSlideClasses(r), void i.asNavFor(r)) : void i.slideHandler(r)
    };
    t.prototype.slideHandler = function(n, t, i) {
        var u, f, o, e, s = null,
            r = this;
        return t = t || !1, r.animating === !0 && r.options.waitForAnimate === !0 || r.options.fade === !0 && r.currentSlide === n || r.slideCount <= r.options.slidesToShow ? void 0 : (t === !1 && r.asNavFor(n), u = n, s = r.getLeft(u), e = r.getLeft(r.currentSlide), r.currentLeft = null === r.swipeLeft ? e : r.swipeLeft, r.options.infinite === !1 && r.options.centerMode === !1 && (0 > n || n > r.getDotCount() * r.options.slidesToScroll) ? void(r.options.fade === !1 && (u = r.currentSlide, i !== !0 ? r.animateSlide(e, function() {
            r.postSlide(u)
        }) : r.postSlide(u))) : r.options.infinite === !1 && r.options.centerMode === !0 && (0 > n || n > r.slideCount - r.options.slidesToScroll) ? void(r.options.fade === !1 && (u = r.currentSlide, i !== !0 ? r.animateSlide(e, function() {
            r.postSlide(u)
        }) : r.postSlide(u))) : (r.options.autoplay === !0 && clearInterval(r.autoPlayTimer), f = 0 > u ? r.slideCount % r.options.slidesToScroll != 0 ? r.slideCount - r.slideCount % r.options.slidesToScroll : r.slideCount + u : u >= r.slideCount ? r.slideCount % r.options.slidesToScroll != 0 ? 0 : u - r.slideCount : u, r.animating = !0, r.$slider.trigger("beforeChange", [r, r.currentSlide, f]), o = r.currentSlide, r.currentSlide = f, r.setSlideClasses(r.currentSlide), r.updateDots(), r.updateArrows(), r.options.fade === !0 ? (i !== !0 ? (r.fadeSlideOut(o), r.fadeSlide(f, function() {
            r.postSlide(f)
        })) : r.postSlide(f), void r.animateHeight()) : void(i !== !0 ? r.animateSlide(s, function() {
            r.postSlide(f)
        }) : r.postSlide(f))))
    };
    t.prototype.startLoad = function() {
        var n = this;
        n.options.arrows === !0 && n.slideCount > n.options.slidesToShow && (n.$prevArrow.hide(), n.$nextArrow.hide());
        n.options.dots === !0 && n.slideCount > n.options.slidesToShow && n.$dots.hide();
        n.$slider.addClass("slick-loading")
    };
    t.prototype.swipeDirection = function() {
        var i, r, u, n, t = this;
        return i = t.touchObject.startX - t.touchObject.curX, r = t.touchObject.startY - t.touchObject.curY, u = Math.atan2(r, i), n = Math.round(180 * u / Math.PI), 0 > n && (n = 360 - Math.abs(n)), 45 >= n && n >= 0 ? t.options.rtl === !1 ? "left" : "right" : 360 >= n && n >= 315 ? t.options.rtl === !1 ? "left" : "right" : n >= 135 && 225 >= n ? t.options.rtl === !1 ? "right" : "left" : t.options.verticalSwiping === !0 ? n >= 35 && 135 >= n ? "left" : "right" : "vertical"
    };
    t.prototype.swipeEnd = function() {
        var t, n = this;
        if (n.dragging = !1, n.shouldClick = n.touchObject.swipeLength > 10 ? !1 : !0, void 0 === n.touchObject.curX) return !1;
        if (n.touchObject.edgeHit === !0 && n.$slider.trigger("edge", [n, n.swipeDirection()]), n.touchObject.swipeLength >= n.touchObject.minSwipe) switch (n.swipeDirection()) {
            case "left":
                t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount();
                n.slideHandler(t);
                n.currentDirection = 0;
                n.touchObject = {};
                n.$slider.trigger("swipe", [n, "left"]);
                break;
            case "right":
                t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount();
                n.slideHandler(t);
                n.currentDirection = 1;
                n.touchObject = {};
                n.$slider.trigger("swipe", [n, "right"])
        } else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), n.touchObject = {})
    };
    t.prototype.swipeHandler = function(n) {
        var t = this;
        if (!(t.options.swipe === !1 || "ontouchend" in document && t.options.swipe === !1 || t.options.draggable === !1 && -1 !== n.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = n.originalEvent && void 0 !== n.originalEvent.touches ? n.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, t.options.verticalSwiping === !0 && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), n.data.action) {
            case "start":
                t.swipeStart(n);
                break;
            case "move":
                t.swipeMove(n);
                break;
            case "end":
                t.swipeEnd(n)
        }
    };
    t.prototype.swipeMove = function(n) {
        var f, e, r, u, i, t = this;
        return i = void 0 !== n.originalEvent ? n.originalEvent.touches : null, !t.dragging || i && 1 !== i.length ? !1 : (f = t.getLeft(t.currentSlide), t.touchObject.curX = void 0 !== i ? i[0].pageX : n.clientX, t.touchObject.curY = void 0 !== i ? i[0].pageY : n.clientY, t.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(t.touchObject.curX - t.touchObject.startX, 2))), t.options.verticalSwiping === !0 && (t.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(t.touchObject.curY - t.touchObject.startY, 2)))), e = t.swipeDirection(), "vertical" !== e ? (void 0 !== n.originalEvent && t.touchObject.swipeLength > 4 && n.preventDefault(), u = (t.options.rtl === !1 ? 1 : -1) * (t.touchObject.curX > t.touchObject.startX ? 1 : -1), t.options.verticalSwiping === !0 && (u = t.touchObject.curY > t.touchObject.startY ? 1 : -1), r = t.touchObject.swipeLength, t.touchObject.edgeHit = !1, t.options.infinite === !1 && (0 === t.currentSlide && "right" === e || t.currentSlide >= t.getDotCount() && "left" === e) && (r = t.touchObject.swipeLength * t.options.edgeFriction, t.touchObject.edgeHit = !0), t.swipeLeft = t.options.vertical === !1 ? f + r * u : f + r * (t.$list.height() / t.listWidth) * u, t.options.verticalSwiping === !0 && (t.swipeLeft = f + r * u), t.options.fade === !0 || t.options.touchMove === !1 ? !1 : t.animating === !0 ? (t.swipeLeft = null, !1) : void t.setCSS(t.swipeLeft)) : void 0)
    };
    t.prototype.swipeStart = function(n) {
        var i, t = this;
        return 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow ? (t.touchObject = {}, !1) : (void 0 !== n.originalEvent && void 0 !== n.originalEvent.touches && (i = n.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = void 0 !== i ? i.pageX : n.clientX, t.touchObject.startY = t.touchObject.curY = void 0 !== i ? i.pageY : n.clientY, void(t.dragging = !0))
    };
    t.prototype.unfilterSlides = t.prototype.slickUnfilter = function() {
        var n = this;
        null !== n.$slidesCache && (n.unload(), n.$slideTrack.children(this.options.slide).detach(), n.$slidesCache.appendTo(n.$slideTrack), n.reinit())
    };
    t.prototype.unload = function() {
        var t = this;
        n(".slick-cloned", t.$slider).remove();
        t.$dots && t.$dots.remove();
        t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove();
        t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove();
        t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    };
    t.prototype.unslick = function(n) {
        var t = this;
        t.$slider.trigger("unslick", [t, n]);
        t.destroy()
    };
    t.prototype.updateArrows = function() {
        var t, n = this;
        t = Math.floor(n.options.slidesToShow / 2);
        n.options.arrows === !0 && n.slideCount > n.options.slidesToShow && !n.options.infinite && (n.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), n.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === n.currentSlide ? (n.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), n.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : n.currentSlide >= n.slideCount - n.options.slidesToShow && n.options.centerMode === !1 ? (n.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), n.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : n.currentSlide >= n.slideCount - 1 && n.options.centerMode === !0 && (n.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), n.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    };
    t.prototype.updateDots = function() {
        var n = this;
        null !== n.$dots && (n.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), n.$dots.find("li").eq(Math.floor(n.currentSlide / n.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
    };
    t.prototype.visibility = function() {
        var n = this;
        document[n.hidden] ? (n.paused = !0, n.autoPlayClear()) : n.options.autoplay === !0 && (n.paused = !1, n.autoPlay())
    };
    t.prototype.initADA = function() {
        var t = this;
        t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        });
        t.$slideTrack.attr("role", "listbox");
        t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function(i) {
            n(this).attr({
                role: "option",
                "aria-describedby": "slick-slide" + t.instanceUid + i
            })
        });
        null !== t.$dots && t.$dots.attr("role", "tablist").find("li").each(function(i) {
            n(this).attr({
                role: "presentation",
                "aria-selected": "false",
                "aria-controls": "navigation" + t.instanceUid + i,
                id: "slick-slide" + t.instanceUid + i
            })
        }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar");
        t.activateADA()
    };
    t.prototype.activateADA = function() {
        var n = this;
        n.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    };
    t.prototype.focusHandler = function() {
        var t = this;
        t.$slider.on("focus.slick blur.slick", "*", function(i) {
            i.stopImmediatePropagation();
            var r = n(this);
            setTimeout(function() {
                t.isPlay && (r.is(":focus") ? (t.autoPlayClear(), t.paused = !0) : (t.paused = !1, t.autoPlay()))
            }, 0)
        })
    };
    n.fn.slick = function() {
        for (var u, i = this, r = arguments[0], f = Array.prototype.slice.call(arguments, 1), e = i.length, n = 0; e > n; n++)
            if ("object" == typeof r || "undefined" == typeof r ? i[n].slick = new t(i[n], r) : u = i[n].slick[r].apply(i[n].slick, f), "undefined" != typeof u) return u;
        return i
    }
});
! function(n) {
    n.fn.theiaStickySidebar = function(t) {
        function u(t, r) {
            var u = i(t, r);
            u || (console.log("TSS: Body width smaller than options.minWidth. Init is delayed."), n(document).scroll(function(t, r) {
                return function(u) {
                    var f = i(t, r);
                    f && n(this).unbind(u)
                }
            }(t, r)), n(window).resize(function(t, r) {
                return function(u) {
                    var f = i(t, r);
                    f && n(this).unbind(u)
                }
            }(t, r)))
        }

        function i(t, i) {
            return t.initialized === !0 || !(n("body").width() < t.minWidth) && (f(t, i), !0)
        }

        function f(t, i) {
            t.initialized = !0;
            n("head").append(n('<style>.theiaStickySidebar:after {content: ""; display: table; clear: both;}<\/style>'));
            i.each(function() {
                function u() {
                    i.fixedScrollTop = 0;
                    i.sidebar.css({
                        "min-height": "1px"
                    });
                    i.stickySidebar.css({
                        position: "static",
                        width: "",
                        transform: "none"
                    })
                }

                function s(t) {
                    var i = t.height();
                    return t.children().each(function() {
                        i = Math.max(i, n(this).height())
                    }), i
                }
                var i = {},
                    o, f, e;
                (i.sidebar = n(this), i.options = t || {}, i.container = n(i.options.containerSelector), 0 == i.container.length && (i.container = i.sidebar.parent()), i.sidebar.parents().css("-webkit-transform", "none"), i.sidebar.css({
                    position: "relative",
                    overflow: "visible",
                    "-webkit-box-sizing": "border-box",
                    "-moz-box-sizing": "border-box",
                    "box-sizing": "border-box"
                }), i.stickySidebar = i.sidebar.find(".theiaStickySidebar"), 0 == i.stickySidebar.length) && (o = /(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i, i.sidebar.find("script").filter(function(n, t) {
                    return 0 === t.type.length || t.type.match(o)
                }).remove(), i.stickySidebar = n("<div>").addClass("theiaStickySidebar").append(i.sidebar.children()), i.sidebar.append(i.stickySidebar));
                i.marginBottom = parseInt(i.sidebar.css("margin-bottom"));
                i.paddingTop = parseInt(i.sidebar.css("padding-top"));
                i.paddingBottom = parseInt(i.sidebar.css("padding-bottom"));
                f = i.stickySidebar.offset().top;
                e = i.stickySidebar.outerHeight();
                i.stickySidebar.css("padding-top", 1);
                i.stickySidebar.css("padding-bottom", 1);
                f -= i.stickySidebar.offset().top;
                e = i.stickySidebar.outerHeight() - e - f;
                0 == f ? (i.stickySidebar.css("padding-top", 0), i.stickySidebarPaddingTop = 0) : i.stickySidebarPaddingTop = 1;
                0 == e ? (i.stickySidebar.css("padding-bottom", 0), i.stickySidebarPaddingBottom = 0) : i.stickySidebarPaddingBottom = 1;
                i.previousScrollTop = null;
                i.fixedScrollTop = 0;
                u();
                i.onScroll = function(i) {
                    var v, e, h, a, p, o;
                    if (i.stickySidebar.is(":visible")) {
                        if (n("body").width() < i.options.minWidth || i.options.disableOnResponsiveLayouts && (v = i.sidebar.outerWidth("none" == i.sidebar.css("float")), v + 50 > i.container.width())) return void u();
                        if (e = n(document).scrollTop(), h = "static", e >= i.sidebar.offset().top + (i.paddingTop - i.options.additionalMarginTop)) {
                            var c, w = i.paddingTop + t.additionalMarginTop,
                                b = i.paddingBottom + i.marginBottom + t.additionalMarginBottom,
                                k = i.sidebar.offset().top,
                                d = i.sidebar.offset().top + s(i.container),
                                l = 0 + t.additionalMarginTop,
                                g = i.stickySidebar.outerHeight() + w + b < n(window).height();
                            c = g ? l + i.stickySidebar.outerHeight() : n(window).height() - i.marginBottom - i.paddingBottom - t.additionalMarginBottom;
                            var nt = k - e + i.paddingTop,
                                tt = d - e - i.paddingBottom - i.marginBottom,
                                f = i.stickySidebar.offset().top - e,
                                y = i.previousScrollTop - e;
                            "fixed" == i.stickySidebar.css("position") && "modern" == i.options.sidebarBehavior && (f += y);
                            "stick-to-top" == i.options.sidebarBehavior && (f = t.additionalMarginTop);
                            "stick-to-bottom" == i.options.sidebarBehavior && (f = c - i.stickySidebar.outerHeight());
                            f = y > 0 ? Math.min(f, l) : Math.max(f, c - i.stickySidebar.outerHeight());
                            f = Math.max(f, nt);
                            f = Math.min(f, tt - i.stickySidebar.outerHeight());
                            a = i.container.height() == i.stickySidebar.outerHeight();
                            h = (a || f != l) && (a || f != c - i.stickySidebar.outerHeight()) ? e + f - i.sidebar.offset().top - i.paddingTop <= t.additionalMarginTop ? "static" : "absolute" : "fixed"
                        }
                        "fixed" == h ? (p = n(document).scrollLeft(), i.stickySidebar.css({
                            position: "fixed",
                            width: r(i.stickySidebar) + "px",
                            transform: "translateY(" + f + "px)",
                            left: i.sidebar.offset().left + parseInt(i.sidebar.css("padding-left")) - p + "px",
                            top: "0px"
                        })) : "absolute" == h ? (o = {}, "absolute" != i.stickySidebar.css("position") && (o.position = "absolute", o.transform = "translateY(" + (e + f - i.sidebar.offset().top - i.stickySidebarPaddingTop - i.stickySidebarPaddingBottom) + "px)", o.top = "0px"), o.width = r(i.stickySidebar) + "px", o.left = "", i.stickySidebar.css(o)) : "static" == h && u();
                        "static" != h && 1 == i.options.updateSidebarHeight && i.sidebar.css({
                            "min-height": i.stickySidebar.outerHeight() + i.stickySidebar.offset().top - i.sidebar.offset().top + i.paddingBottom
                        });
                        i.previousScrollTop = e
                    }
                };
                i.onScroll(i);
                n(document).scroll(function(n) {
                    return function() {
                        n.onScroll(n)
                    }
                }(i));
                n(window).resize(function(n) {
                    return function() {
                        n.stickySidebar.css({
                            position: "static"
                        });
                        n.onScroll(n)
                    }
                }(i));
                "undefined" != typeof ResizeSensor && new ResizeSensor(i.stickySidebar[0], function(n) {
                    return function() {
                        n.onScroll(n)
                    }
                }(i))
            })
        }

        function r(n) {
            var t;
            try {
                t = n[0].getBoundingClientRect().width
            } catch (n) {}
            return "undefined" == typeof t && (t = n.width()), t
        }
        t = n.extend({
            containerSelector: "",
            additionalMarginTop: 0,
            additionalMarginBottom: 0,
            updateSidebarHeight: !0,
            minWidth: 0,
            disableOnResponsiveLayouts: !0,
            sidebarBehavior: "modern"
        }, t);
        t.additionalMarginTop = parseInt(t.additionalMarginTop) || 0;
        t.additionalMarginBottom = parseInt(t.additionalMarginBottom) || 0;
        u(t, this)
    }
}(jQuery),
function(n) {
    n.module("ui.carousel.config", []).value("ui.carousel.config", {
        debug: !0
    });
    n.module("ui.carousel.providers", []);
    n.module("ui.carousel.controllers", []);
    n.module("ui.carousel.directives", []);
    n.module("ui.carousel", ["ui.carousel.config", "ui.carousel.directives", "ui.carousel.controllers", "ui.carousel.providers"])
}(angular);
angular.module("ui.carousel.controllers").controller("CarouselController", ["$scope", "$element", "$timeout", "$q", "Carousel", function(n, t, i, r, u) {
    var f = this;
    this.$onInit = function() {
        f.initOptions();
        f.initRanges();
        f.setProps();
        f.setupInfinite()
    };
    this.initOptions = function() {
        f.options = angular.extend({}, u.getOptions());
        f.initialSlide !== undefined && (f.options.initialSlide = f.initialSlide);
        f.fade !== undefined && (f.options.fade = f.fade);
        f.autoplay !== undefined && (f.options.autoplay = f.autoplay);
        f.autoplaySpeed !== undefined && (f.options.autoplaySpeed = f.autoplaySpeed);
        f.cssEase !== undefined && (f.options.cssEase = f.cssEase);
        f.speed !== undefined && (f.options.speed = f.speed);
        f.infinite !== undefined && (f.options.infinite = f.infinite);
        f.arrows !== undefined && (f.options.arrows = f.arrows);
        f.dots !== undefined && (f.options.dots = f.dots);
        f.options.fade ? (f.options.slidesToShow = 1, f.options.slidesToScroll = 1) : (f.show && (f.options.slidesToShow = f.show), f.scroll && (f.options.slidesToScroll = f.scroll))
    };
    this.initRanges = function() {
        f.slides || (f.slides = []);
        f.isCarouselReady = !1;
        f.isTrackMoving = !1;
        f.track = t.find(".track");
        f.width = 1;
        f.currentSlide = f.options.initialSlide;
        f.trackStyle = {};
        f.slideStyle = {};
        f.isVisibleDots = !1;
        f.isVisiblePrev = !1;
        f.isVisibleNext = !1;
        f.isClickablePrev = !1;
        f.isClickableNext = !1;
        f.animType = null;
        f.transformType = null;
        f.transitionType = null;
        f.slidesInTrack = angular.copy(f.slides)
    };
    this.initUI = function() {
        i(function() {
            f.width = t[0].clientWidth;
            f.updateItemStyle();
            f.initTrack()
        })
    };
    this.updateItemStyle = function() {
        f.itemWidth = f.width / f.options.slidesToShow;
        f.slideStyle = {
            width: f.itemWidth + "px"
        }
    };
    this.initTrack = function() {
        var n = f.width / f.options.slidesToShow,
            t = n * f.slidesInTrack.length;
        f.trackStyle.width = t + "px";
        f.slideHandler(f.currentSlide).finally(function() {
            f.isCarouselReady = !0;
            f.options.fade || f.refreshTrackStyle();
            f.onInit && f.onInit()
        }).catch(function() {})
    };
    this.next = function() {
        if (!f.isClickableNext) return !1;
        var n = f.getIndexOffset(),
            t = n === 0 ? f.options.slidesToScroll : n;
        f.slideHandler(f.currentSlide + t).catch(function() {})
    };
    this.prev = function() {
        if (!f.isClickablePrev) return !1;
        var n = f.getIndexOffset(),
            t = n === 0 ? f.options.slidesToScroll : f.options.slidesToShow - n;
        f.slideHandler(f.currentSlide - t).catch(function() {})
    };
    this.getIndexOffset = function() {
        var n = f.slides.length % f.options.slidesToScroll != 0;
        return n ? 0 : (f.slides.length - f.currentSlide) % f.options.slidesToScroll
    };
    this.movePage = function(n) {
        var t = f.options.slidesToScroll * n;
        f.slideHandler(t).catch(function() {})
    };
    this.slideHandler = function(n) {
        var t, o, u, e, s;
        if (!f.slides) return r.reject("Carousel not fully setup");
        if (f.isTrackMoving) return r.reject("Track is moving");
        if (t = f.slides.length, o = f.options.slidesToShow, t <= o) return r.reject("Length of slides smaller than slides to show");
        if (u = n, e = null, e = u < 0 ? t % f.options.slidesToScroll != 0 ? t - t % f.options.slidesToScroll : t + u : u >= t ? t % f.options.slidesToScroll != 0 ? 0 : u - t : u, f.onBeforeChange) f.onBeforeChange(f.currentSlide, e);
        return f.options.fade ? (f.currentSlide = e, i(function() {
            if (f.onAfterChange) f.onAfterChange(f.currentSlide)
        }, f.options.speed), r.resolve("Handler fade")) : (s = -1 * e * f.itemWidth, f.options.infinite && (s = -1 * (u + o) * f.itemWidth), f.isTrackMoving = !0, f.moveTrack(s).then(function() {
            f.isTrackMoving = !1;
            f.currentSlide = e;
            f.autoplayTrack();
            e !== u && f.correctTrack();
            f.options.infinite || (f.currentSlide === 0 ? f.isClickablePrev = !1 : f.currentSlide === f.slidesInTrack.length - 1 ? f.isClickableNext = !1 : (f.isClickablePrev = !0, f.isClickableNext = !0));
            i(function() {
                if (f.onAfterChange) f.onAfterChange(f.currentSlide)
            }, 200)
        }))
    };
    this.moveTrack = function(n) {
        var t = r.defer();
        return f.trackStyle[f.animType] = f.options.vertical === !1 ? "translate3d(" + n + "px, 0px, 0px)" : "translate3d(0px, " + n + "px, 0px)", i(function() {
            t.resolve("Track moved")
        }, f.options.speed), t.promise
    };
    this.correctTrack = function() {
        f.options.infinite && function() {
            var n = -1 * (f.currentSlide + f.options.slidesToShow) * f.itemWidth;
            f.trackStyle[f.transitionType] = f.transformType + " 0ms " + f.options.cssEase;
            f.isTrackMoving = !0;
            i(function() {
                f.trackStyle[f.animType] = "translate3d(" + n + "px, 0, 0px)";
                i(function() {
                    f.refreshTrackStyle();
                    f.isTrackMoving = !1
                }, 200)
            })
        }()
    };
    this.refreshTrackStyle = function() {
        f.trackStyle[f.transitionType] = f.transformType + " " + f.options.speed + "ms " + f.options.cssEase
    };
    this.autoplayTrack = function() {
        f.options.autoplay && (f.timeout && i.cancel(f.timeout), f.timeout = i(function() {
            f.next();
            i.cancel(f.timeout);
            f.timeout = null
        }, f.options.autoplaySpeed))
    };
    this.getSlideStyle = function(n) {
        var t = f.slideStyle,
            r, i;
        return f.options.fade && (r = -1 * n * f.itemWidth, i = {
            position: "relative",
            top: "0px",
            left: r + "px",
            "z-index": n === f.currentSlide ? 10 : 9,
            opacity: n === f.currentSlide ? 1 : 0
        }, n >= f.currentSlide - 1 && n <= f.currentSlide + 1 && (i.transition = "opacity 250ms linear"), t = angular.extend(t, i)), t
    };
    this.setupInfinite = function() {
        var i = f.slides.length,
            r = f.options.slidesToShow,
            u, n, t;
        if (f.options.infinite && f.options.fade === !1 && i > r) {
            for (u = r, n = 0; n < u; n++) f.slidesInTrack.push(angular.copy(f.slides[n]));
            for (t = i - 1; t >= i - r; t--) f.slidesInTrack.unshift(angular.copy(f.slides[t]))
        }
    };
    this.getDots = function() {
        var i, t, n;
        if (!f.slides) return [];
        for (i = Math.ceil(f.slides.length / f.options.slidesToScroll), t = [], n = 0; n < i; n++) t.push(n);
        return t
    };
    this.setProps = function() {
        var n = document.body.style;
        n.OTransform !== undefined && (f.animType = "OTransform", f.transformType = "-o-transform", f.transitionType = "OTransition");
        n.MozTransform !== undefined && (f.animType = "MozTransform", f.transformType = "-moz-transform", f.transitionType = "MozTransition");
        n.webkitTransform !== undefined && (f.animType = "webkitTransform", f.transformType = "-webkit-transform", f.transitionType = "webkitTransition");
        n.msTransform !== undefined && (f.animType = "msTransform", f.transformType = "-ms-transform", f.transitionType = "msTransition");
        n.transform !== undefined && f.animType !== !1 && (f.animType = "transform", f.transformType = "transform", f.transitionType = "transition");
        f.transformsEnabled = !0
    };
    this.refreshCarousel = function() {
        f.slides && f.slides.length && f.slides.length > f.options.slidesToShow && (f.isVisibleDots = !0, f.isVisiblePrev = !0, f.isVisibleNext = !0, f.isClickablePrev = !0, f.isClickableNext = !0);
        f.initUI()
    };
    n.$watch("ctrl.slides", function() {
        f.refreshCarousel()
    });
    angular.version.major === 1 && angular.version.minor < 5 && this.$onInit()
}]);
angular.module("ui.carousel.directives").directive("uiCarousel", ["$compile", "$templateCache", "$sce", function(n, t) {
    return {
        restrict: "AE",
        scope: !0,
        bindToController: {
            name: "=?",
            slides: "=",
            show: "=?slidesToShow",
            scroll: "=?slidesToScroll",
            classes: "@",
            fade: "=?",
            onChange: "=?",
            disableArrow: "=?",
            autoplay: "=?",
            autoplaySpeed: "=?",
            cssEase: "=?",
            speed: "=?",
            infinite: "=?",
            arrows: "=?",
            dots: "=?",
            initialSlide: "=?",
            onBeforeChange: "&",
            onAfterChange: "&",
            onInit: "&"
        },
        compile: function(i) {
            var u = angular.element(t.get("ui-carousel/carousel.template.html")),
                r = u.clone();
            return angular.forEach({
                    "carousel-item": ".carousel-item",
                    "carousel-prev": ".carousel-prev",
                    "carousel-next": ".carousel-next"
                }, function(n, t) {
                    var u = i[0].querySelector(t);
                    u && angular.element(r[0].querySelector(n)).html(u.innerHTML)
                }),
                function(t, i) {
                    var u = n(r)(t);
                    i.addClass("ui-carousel").html("").append(u)
                }
        },
        controller: "CarouselController",
        controllerAs: "ctrl"
    }
}]);
angular.module("ui.carousel.providers").provider("Carousel", function() {
        var n = this;
        this.options = {
            arrows: !0,
            autoplay: !1,
            autoplaySpeed: 3e3,
            cssEase: "ease",
            dots: !1,
            easing: "linear",
            fade: !1,
            infinite: !0,
            initialSlide: 0,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            draggable: !0,
            lazyLoad: "ondemand",
            swipe: !0,
            swipeToSlide: !1,
            touchMove: !0,
            vertical: !1,
            verticalSwiping: !1
        };
        this.$get = [function() {
            return {
                setOptions: function(t) {
                    n.options = angular.extend(n.options, t)
                },
                getOptions: function() {
                    return n.options
                }
            }
        }]
    }),
    function(n) {
        try {
            n = angular.module("ui.carousel")
        } catch (t) {
            n = angular.module("ui.carousel", [])
        }
        n.run(["$templateCache", function(n) {
            n.put("ui-carousel/carousel.template.html", '<div class="carousel-wrapper" ng-show="ctrl.isCarouselReady"><div class="track-wrapper"><div class="track" ng-style="ctrl.trackStyle"><div class="slide" ng-repeat="item in ctrl.slidesInTrack track by $index" ng-style="ctrl.getSlideStyle($index)"><div class="carousel-item"><\/div><\/div><\/div><\/div><div class="carousel-prev" ng-if="!ctrl.disableArrow" ng-show="ctrl.isVisiblePrev &amp;&amp; ctrl.options.arrows" ng-class="{\'carousel-disable\': !ctrl.isClickablePrev}" ng-click="ctrl.prev()"><button class="carousel-btn"><i class="ui-icon-prev"><\/i><\/button><\/div><div class="carousel-next" ng-if="!ctrl.disableArrow" ng-show="ctrl.isVisibleNext &amp;&amp; ctrl.options.arrows" ng-class="{\'carousel-disable\': !ctrl.isClickableNext}" ng-click="ctrl.next()"><button class="carousel-btn"><i class="ui-icon-next"><\/i><\/button><\/div><ul class="carousel-dots" ng-show="ctrl.isVisibleDots &amp;&amp; ctrl.options.dots"><li ng-repeat="dot in ctrl.getDots()" ng-class="{ \'carousel-active\': dot == ctrl.currentSlide/ctrl.options.slidesToScroll }" ng-click="ctrl.movePage(dot)"><button>{{ dot }}<\/button><\/li><\/ul><\/div>')
        }])
    }();
angular.module("xeditable", []).value("editableOptions", {
    theme: "default",
    buttons: "right",
    blurElem: "cancel",
    blurForm: "ignore",
    activate: "focus"
});
angular.module("xeditable").directive("editableBsdate", ["editableDirectiveFactory", function(n) {
    return n({
        directiveName: "editableBsdate",
        inputTpl: '<input type="text">'
    })
}]);
angular.module("xeditable").directive("editableBstime", ["editableDirectiveFactory", function(n) {
    return n({
        directiveName: "editableBstime",
        inputTpl: "<timepicker><\/timepicker>",
        render: function() {
            this.parent.render.call(this);
            var n = angular.element('<div class="well well-small" style="display:inline-block;"><\/div>');
            n.attr("ng-model", this.inputEl.attr("ng-model"));
            this.inputEl.removeAttr("ng-model");
            this.attrs.eNgChange && (n.attr("ng-change", this.inputEl.attr("ng-change")), this.inputEl.removeAttr("ng-change"));
            this.inputEl.wrap(n)
        }
    })
}]);
angular.module("xeditable").directive("editableCheckbox", ["editableDirectiveFactory", function(n) {
    return n({
        directiveName: "editableCheckbox",
        inputTpl: '<input type="checkbox">',
        render: function() {
            this.parent.render.call(this);
            this.attrs.eTitle && (this.inputEl.wrap("<label><\/label>"), this.inputEl.after(angular.element("<span><\/span>").text(this.attrs.eTitle)))
        },
        autosubmit: function() {
            var n = this;
            n.inputEl.bind("change", function() {
                setTimeout(function() {
                    n.scope.$apply(function() {
                        n.scope.$form.$submit()
                    })
                }, 500)
            })
        }
    })
}]);
angular.module("xeditable").directive("editableChecklist", ["editableDirectiveFactory", "editableNgOptionsParser", function(n, t) {
        return n({
            directiveName: "editableChecklist",
            inputTpl: "<span><\/span>",
            useCopy: !0,
            render: function() {
                this.parent.render.call(this);
                var n = t(this.attrs.eNgOptions),
                    i = '<label ng-repeat="' + n.ngRepeat + '"><input type="checkbox" checklist-model="$parent.$data" checklist-value="' + n.locals.valueFn + '"><span ng-bind="' + n.locals.displayFn + '"><\/span><\/label>';
                this.inputEl.removeAttr("ng-model");
                this.inputEl.removeAttr("ng-options");
                this.inputEl.html(i)
            }
        })
    }]),
    function() {
        var n = "text|email|tel|number|url|search|color|date|datetime|time|month|week".split("|");
        angular.forEach(n, function(n) {
            var t = "editable" + n.charAt(0).toUpperCase() + n.slice(1);
            angular.module("xeditable").directive(t, ["editableDirectiveFactory", function(i) {
                return i({
                    directiveName: t,
                    inputTpl: '<input type="' + n + '">'
                })
            }])
        });
        angular.module("xeditable").directive("editableRange", ["editableDirectiveFactory", function(n) {
            return n({
                directiveName: "editableRange",
                inputTpl: '<input type="range" id="range" name="range">',
                render: function() {
                    this.parent.render.call(this);
                    this.inputEl.after("<output>{{$data}}<\/output>")
                }
            })
        }])
    }();
angular.module("xeditable").directive("editableRadiolist", ["editableDirectiveFactory", "editableNgOptionsParser", function(n, t) {
    return n({
        directiveName: "editableRadiolist",
        inputTpl: "<span><\/span>",
        render: function() {
            this.parent.render.call(this);
            var n = t(this.attrs.eNgOptions),
                i = '<label ng-repeat="' + n.ngRepeat + '"><input type="radio" ng-model="$parent.$data" value="{{' + n.locals.valueFn + '}}"><span ng-bind="' + n.locals.displayFn + '"><\/span><\/label>';
            this.inputEl.removeAttr("ng-model");
            this.inputEl.removeAttr("ng-options");
            this.inputEl.html(i)
        },
        autosubmit: function() {
            var n = this;
            n.inputEl.bind("change", function() {
                setTimeout(function() {
                    n.scope.$apply(function() {
                        n.scope.$form.$submit()
                    })
                }, 500)
            })
        }
    })
}]);
angular.module("xeditable").directive("editableSelect", ["editableDirectiveFactory", function(n) {
    return n({
        directiveName: "editableSelect",
        inputTpl: "<select><\/select>",
        autosubmit: function() {
            var n = this;
            n.inputEl.bind("change", function() {
                n.scope.$apply(function() {
                    n.scope.$form.$submit()
                })
            })
        }
    })
}]);
angular.module("xeditable").directive("editableTextarea", ["editableDirectiveFactory", function(n) {
    return n({
        directiveName: "editableTextarea",
        inputTpl: "<textarea><\/textarea>",
        addListeners: function() {
            var n = this;
            n.parent.addListeners.call(n);
            n.single && "no" !== n.buttons && n.autosubmit()
        },
        autosubmit: function() {
            var n = this;
            n.inputEl.bind("keydown", function(t) {
                (t.ctrlKey || t.metaKey) && 13 === t.keyCode && n.scope.$apply(function() {
                    n.scope.$form.$submit()
                })
            })
        }
    })
}]);
angular.module("xeditable").factory("editableController", ["$q", "editableUtils", function(n, t) {
    function i(n, i, r, u, f, e, o, s, h) {
        var l, a, c = this;
        c.scope = n;
        c.elem = r;
        c.attrs = i;
        c.inputEl = null;
        c.editorEl = null;
        c.single = !0;
        c.error = "";
        c.theme = f[e.theme] || f["default"];
        c.parent = {};
        c.inputTpl = "";
        c.directiveName = "";
        c.useCopy = !1;
        c.single = null;
        c.buttons = "right";
        c.init = function(t) {
            if (c.single = t, c.name = i.eName || i[c.directiveName], !i[c.directiveName]) throw "You should provide value for `" + c.directiveName + "` in editable element!";
            l = u(i[c.directiveName]);
            c.buttons = c.single ? c.attrs.buttons || e.buttons : "no";
            i.eName && c.scope.$watch("$data", function(n) {
                c.scope.$form.$data[i.eName] = n
            });
            i.onshow && (c.onshow = function() {
                return c.catchError(u(i.onshow)(n))
            });
            i.onhide && (c.onhide = function() {
                return u(i.onhide)(n)
            });
            i.oncancel && (c.oncancel = function() {
                return u(i.oncancel)(n)
            });
            i.onbeforesave && (c.onbeforesave = function() {
                return c.catchError(u(i.onbeforesave)(n))
            });
            i.onaftersave && (c.onaftersave = function() {
                return c.catchError(u(i.onaftersave)(n))
            });
            n.$parent.$watch(i[c.directiveName], function() {
                c.handleEmpty()
            })
        };
        c.render = function() {
            var n = c.theme,
                u, r, f, o;
            c.inputEl = angular.element(c.inputTpl);
            c.controlsEl = angular.element(n.controlsTpl);
            c.controlsEl.append(c.inputEl);
            "no" !== c.buttons && (c.buttonsEl = angular.element(n.buttonsTpl), c.submitEl = angular.element(n.submitTpl), c.cancelEl = angular.element(n.cancelTpl), c.buttonsEl.append(c.submitEl).append(c.cancelEl), c.controlsEl.append(c.buttonsEl), c.inputEl.addClass("editable-has-buttons"));
            c.errorEl = angular.element(n.errorTpl);
            c.controlsEl.append(c.errorEl);
            c.editorEl = angular.element(c.single ? n.formTpl : n.noformTpl);
            c.editorEl.append(c.controlsEl);
            for (u in i.$attr) u.length <= 1 || (r = !1, f = u.substring(1, 2), "e" === u.substring(0, 1) && f === f.toUpperCase() && (r = u.substring(1), "Form" !== r && "NgSubmit" !== r) && (r = r.substring(0, 1).toLowerCase() + t.camelToDash(r.substring(1)), o = "" === i[u] ? r : i[u], c.inputEl.attr(r, o)));
            c.inputEl.addClass("editable-input");
            c.inputEl.attr("ng-model", "$data");
            c.editorEl.addClass(t.camelToDash(c.directiveName));
            c.single && (c.editorEl.attr("editable-form", "$form"), c.editorEl.attr("blur", c.attrs.blur || ("no" === c.buttons ? "cancel" : e.blurElem)));
            angular.isFunction(n.postrender) && n.postrender.call(c)
        };
        c.setLocalValue = function() {
            c.scope.$data = c.useCopy ? angular.copy(l(n.$parent)) : l(n.$parent)
        };
        c.show = function() {
            return c.setLocalValue(), c.render(), r.after(c.editorEl), s(c.editorEl)(n), c.addListeners(), r.addClass("editable-hide"), c.onshow()
        };
        c.hide = function() {
            return c.editorEl.remove(), r.removeClass("editable-hide"), c.onhide()
        };
        c.cancel = function() {
            c.oncancel()
        };
        c.addListeners = function() {
            c.inputEl.bind("keyup", function(n) {
                if (c.single) switch (n.keyCode) {
                    case 27:
                        c.scope.$apply(function() {
                            c.scope.$form.$cancel()
                        })
                }
            });
            c.single && "no" === c.buttons && c.autosubmit();
            c.editorEl.bind("click", function(n) {
                1 === n.which && c.scope.$form.$visible && (c.scope.$form._clicked = !0)
            })
        };
        c.setWaiting = function(n) {
            n ? (a = !c.inputEl.attr("disabled") && !c.inputEl.attr("ng-disabled") && !c.inputEl.attr("ng-enabled"), a && (c.inputEl.attr("disabled", "disabled"), c.buttonsEl && c.buttonsEl.find("button").attr("disabled", "disabled"))) : a && (c.inputEl.removeAttr("disabled"), c.buttonsEl && c.buttonsEl.find("button").removeAttr("disabled"))
        };
        c.activate = function() {
            setTimeout(function() {
                var n = c.inputEl[0];
                "focus" === e.activate && n.focus && n.focus();
                "select" === e.activate && n.select && n.select()
            }, 0)
        };
        c.setError = function(t) {
            angular.isObject(t) || (n.$error = t, c.error = t)
        };
        c.catchError = function(n, t) {
            return angular.isObject(n) && t !== !0 ? h.when(n).then(angular.bind(this, function(n) {
                this.catchError(n, !0)
            }), angular.bind(this, function(n) {
                this.catchError(n, !0)
            })) : t && angular.isObject(n) && n.status && 200 !== n.status && n.data && angular.isString(n.data) ? (this.setError(n.data), n = n.data) : angular.isString(n) && this.setError(n), n
        };
        c.save = function() {
            l.assign(n.$parent, angular.copy(c.scope.$data))
        };
        c.handleEmpty = function() {
            var t = l(n.$parent),
                i = null === t || void 0 === t || "" === t || angular.isArray(t) && 0 === t.length;
            r.toggleClass("editable-empty", i)
        };
        c.autosubmit = angular.noop;
        c.onshow = angular.noop;
        c.onhide = angular.noop;
        c.oncancel = angular.noop;
        c.onbeforesave = angular.noop;
        c.onaftersave = angular.noop
    }
    return i.$inject = ["$scope", "$attrs", "$element", "$parse", "editableThemes", "editableOptions", "$rootScope", "$compile", "$q"], i
}]);
angular.module("xeditable").factory("editableDirectiveFactory", ["$parse", "$compile", "editableThemes", "$rootScope", "$document", "editableController", "editableFormController", function(n, t, i, r, u, f, e) {
    return function(t) {
        return {
            restrict: "A",
            scope: !0,
            require: [t.directiveName, "?^form"],
            controller: f,
            link: function(i, f, o, s) {
                var c, h = s[0],
                    l = !1,
                    v, a;
                if (s[1]) c = s[1], l = !0;
                else if (o.eForm)
                    if (v = n(o.eForm)(i), v) c = v, l = !0;
                    else
                        for (a = 0; a < u[0].forms.length; a++)
                            if (u[0].forms[a].name === o.eForm) {
                                c = null;
                                l = !0;
                                break
                            } if (angular.forEach(t, function(n, t) {
                        void 0 !== h[t] && (h.parent[t] = h[t])
                    }), angular.extend(h, t), h.init(!l), i.$editable = h, f.addClass("editable"), l)
                    if (c) {
                        if (i.$form = c, !i.$form.$addEditable) throw "Form with editable elements should have `editable-form` attribute.";
                        i.$form.$addEditable(h)
                    } else r.$$editableBuffer = r.$$editableBuffer || {}, r.$$editableBuffer[o.eForm] = r.$$editableBuffer[o.eForm] || [], r.$$editableBuffer[o.eForm].push(h), i.$form = null;
                else i.$form = e(), i.$form.$addEditable(h), o.eForm && (i.$parent[o.eForm] = i.$form), o.eForm || (f.addClass("editable-click"), f.bind("click", function(n) {
                    n.preventDefault();
                    n.editable = h;
                    i.$apply(function() {
                        i.$form.$show()
                    })
                }))
            }
        }
    }
}]);
angular.module("xeditable").factory("editableFormController", ["$parse", "$document", "$rootScope", "editablePromiseCollection", "editableUtils", function(n, t, i, r, u) {
    var f = [],
        e;
    return t.bind("click", function(n) {
            if (1 === n.which) {
                for (var r = [], u = [], t = 0; t < f.length; t++) f[t]._clicked ? f[t]._clicked = !1 : f[t].$waiting || ("cancel" === f[t]._blur && r.push(f[t]), "submit" === f[t]._blur && u.push(f[t]));
                (r.length || u.length) && i.$apply(function() {
                    angular.forEach(r, function(n) {
                        n.$cancel()
                    });
                    angular.forEach(u, function(n) {
                        n.$submit()
                    })
                })
            }
        }), e = {
            $addEditable: function(n) {
                this.$editables.push(n);
                n.elem.bind("$destroy", angular.bind(this, this.$removeEditable, n));
                n.scope.$form || (n.scope.$form = this);
                this.$visible && n.catchError(n.show())
            },
            $removeEditable: function(n) {
                for (var t = 0; t < this.$editables.length; t++)
                    if (this.$editables[t] === n) return this.$editables.splice(t, 1), void 0
            },
            $show: function() {
                if (!this.$visible) {
                    this.$visible = !0;
                    var n = r();
                    n.when(this.$onshow());
                    this.$setError(null, "");
                    angular.forEach(this.$editables, function(t) {
                        n.when(t.show())
                    });
                    n.then({
                        onWait: angular.bind(this, this.$setWaiting),
                        onTrue: angular.bind(this, this.$activate),
                        onFalse: angular.bind(this, this.$activate),
                        onString: angular.bind(this, this.$activate)
                    });
                    setTimeout(angular.bind(this, function() {
                        this._clicked = !1; - 1 === u.indexOf(f, this) && f.push(this)
                    }), 0)
                }
            },
            $activate: function(n) {
                var t;
                if (this.$editables.length) {
                    if (angular.isString(n))
                        for (t = 0; t < this.$editables.length; t++)
                            if (this.$editables[t].name === n) return this.$editables[t].activate(), void 0;
                    for (t = 0; t < this.$editables.length; t++)
                        if (this.$editables[t].error) return this.$editables[t].activate(), void 0;
                    this.$editables[0].activate()
                }
            },
            $hide: function() {
                this.$visible && (this.$visible = !1, this.$onhide(), angular.forEach(this.$editables, function(n) {
                    n.hide()
                }), u.arrayRemove(f, this))
            },
            $cancel: function() {
                this.$visible && (this.$oncancel(), angular.forEach(this.$editables, function(n) {
                    n.cancel()
                }), this.$hide())
            },
            $setWaiting: function(n) {
                this.$waiting = !!n;
                angular.forEach(this.$editables, function(t) {
                    t.setWaiting(!!n)
                })
            },
            $setError: function(n, t) {
                angular.forEach(this.$editables, function(i) {
                    n && i.name !== n || i.setError(t)
                })
            },
            $submit: function() {
                function n(n) {
                    var t = r();
                    t.when(this.$onbeforesave());
                    t.then({
                        onWait: angular.bind(this, this.$setWaiting),
                        onTrue: n ? angular.bind(this, this.$save) : angular.bind(this, this.$hide),
                        onFalse: angular.bind(this, this.$hide),
                        onString: angular.bind(this, this.$activate)
                    })
                }
                if (!this.$waiting) {
                    this.$setError(null, "");
                    var t = r();
                    angular.forEach(this.$editables, function(n) {
                        t.when(n.onbeforesave())
                    });
                    t.then({
                        onWait: angular.bind(this, this.$setWaiting),
                        onTrue: angular.bind(this, n, !0),
                        onFalse: angular.bind(this, n, !1),
                        onString: angular.bind(this, this.$activate)
                    })
                }
            },
            $save: function() {
                angular.forEach(this.$editables, function(n) {
                    n.save()
                });
                var n = r();
                n.when(this.$onaftersave());
                angular.forEach(this.$editables, function(t) {
                    n.when(t.onaftersave())
                });
                n.then({
                    onWait: angular.bind(this, this.$setWaiting),
                    onTrue: angular.bind(this, this.$hide),
                    onFalse: angular.bind(this, this.$hide),
                    onString: angular.bind(this, this.$activate)
                })
            },
            $onshow: angular.noop,
            $oncancel: angular.noop,
            $onhide: angular.noop,
            $onbeforesave: angular.noop,
            $onaftersave: angular.noop
        },
        function() {
            return angular.extend({
                $editables: [],
                $visible: !1,
                $waiting: !1,
                $data: {},
                _clicked: !1,
                _blur: null
            }, e)
        }
}]);
angular.module("xeditable").directive("editableForm", ["$rootScope", "$parse", "editableFormController", "editableOptions", function(n, t, i, r) {
    return {
        restrict: "A",
        require: ["form"],
        compile: function() {
            return {
                pre: function(t, r, u, f) {
                    var e, h = f[0],
                        o, s;
                    u.editableForm ? t[u.editableForm] && t[u.editableForm].$show ? (e = t[u.editableForm], angular.extend(h, e)) : (e = i(), t[u.editableForm] = e, angular.extend(e, h)) : (e = i(), angular.extend(h, e));
                    o = n.$$editableBuffer;
                    s = h.$name;
                    s && o && o[s] && (angular.forEach(o[s], function(n) {
                        e.$addEditable(n)
                    }), delete o[s])
                },
                post: function(n, i, u, f) {
                    var e;
                    e = u.editableForm && n[u.editableForm] && n[u.editableForm].$show ? n[u.editableForm] : f[0];
                    u.onshow && (e.$onshow = angular.bind(e, t(u.onshow), n));
                    u.onhide && (e.$onhide = angular.bind(e, t(u.onhide), n));
                    u.oncancel && (e.$oncancel = angular.bind(e, t(u.oncancel), n));
                    u.shown && t(u.shown)(n) && e.$show();
                    e._blur = u.blur || r.blurForm;
                    u.ngSubmit || u.submit || (u.onbeforesave && (e.$onbeforesave = function() {
                        return t(u.onbeforesave)(n, {
                            $data: e.$data
                        })
                    }), u.onaftersave && (e.$onaftersave = function() {
                        return t(u.onaftersave)(n, {
                            $data: e.$data
                        })
                    }), i.bind("submit", function(t) {
                        t.preventDefault();
                        n.$apply(function() {
                            e.$submit()
                        })
                    }));
                    i.bind("click", function(n) {
                        1 === n.which && e.$visible && (e._clicked = !0)
                    })
                }
            }
        }
    }
}]);
angular.module("xeditable").factory("editablePromiseCollection", ["$q", function(n) {
    function t() {
        return {
            promises: [],
            hasFalse: !1,
            hasString: !1,
            when: function(t, i) {
                if (t === !1) this.hasFalse = !0;
                else if (!i && angular.isObject(t)) this.promises.push(n.when(t));
                else {
                    if (!angular.isString(t)) return;
                    this.hasString = !0
                }
            },
            then: function(t) {
                function u() {
                    i.hasString || i.hasFalse ? !i.hasString && i.hasFalse ? o() : f() : e()
                }
                t = t || {};
                var e = t.onTrue || angular.noop,
                    o = t.onFalse || angular.noop,
                    f = t.onString || angular.noop,
                    r = t.onWait || angular.noop,
                    i = this;
                this.promises.length ? (r(!0), n.all(this.promises).then(function(n) {
                    r(!1);
                    angular.forEach(n, function(n) {
                        i.when(n, !0)
                    });
                    u()
                }, function() {
                    r(!1);
                    f()
                })) : u()
            }
        }
    }
    return t
}]);
angular.module("xeditable").factory("editableUtils", [function() {
    return {
        indexOf: function(n, t) {
            if (n.indexOf) return n.indexOf(t);
            for (var i = 0; i < n.length; i++)
                if (t === n[i]) return i;
            return -1
        },
        arrayRemove: function(n, t) {
            var i = this.indexOf(n, t);
            return i >= 0 && n.splice(i, 1), t
        },
        camelToDash: function(n) {
            return n.replace(/[A-Z]/g, function(n, t) {
                return (t ? "-" : "") + n.toLowerCase()
            })
        },
        dashToCamel: function(n) {
            return n.replace(/([\:\-\_]+(.))/g, function(n, t, i, r) {
                return r ? i.toUpperCase() : i
            }).replace(/^moz([A-Z])/, "Moz$1")
        }
    }
}]);
angular.module("xeditable").factory("editableNgOptionsParser", [function() {
    function n(n) {
        var i;
        if (!(i = n.match(t))) throw "ng-options parse error";
        var r, s = i[2] || i[1],
            u = i[4] || i[6],
            f = i[5],
            h = (i[3] || "", i[2] ? i[1] : u),
            e = i[7],
            o = i[8],
            c = o ? i[8] : null;
        return void 0 === f ? (r = u + " in " + e, void 0 !== o && (r += " track by " + c)) : r = "(" + f + ", " + u + ") in " + e, {
            ngRepeat: r,
            locals: {
                valueName: u,
                keyName: f,
                valueFn: h,
                displayFn: s
            }
        }
    }
    var t = /^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+(.*?)(?:\s+track\s+by\s+(.*?))?$/;
    return n
}]);
angular.module("xeditable").factory("editableThemes", function() {
    return {
        "default": {
            formTpl: '<form class="editable-wrap"><\/form>',
            noformTpl: '<span class="editable-wrap"><\/span>',
            controlsTpl: '<span class="editable-controls"><\/span>',
            inputTpl: "",
            errorTpl: '<div class="editable-error" ng-show="$error" ng-bind="$error"><\/div>',
            buttonsTpl: '<span class="editable-buttons"><\/span>',
            submitTpl: '<button type="submit">save<\/button>',
            cancelTpl: '<button type="button" ng-click="$form.$cancel()">cancel<\/button>'
        },
        bs2: {
            formTpl: '<form class="form-inline editable-wrap" role="form"><\/form>',
            noformTpl: '<span class="editable-wrap"><\/span>',
            controlsTpl: '<div class="editable-controls controls control-group" ng-class="{\'error\': $error}"><\/div>',
            inputTpl: "",
            errorTpl: '<div class="editable-error help-block" ng-show="$error" ng-bind="$error"><\/div>',
            buttonsTpl: '<span class="editable-buttons"><\/span>',
            submitTpl: '<button type="submit" class="btn btn-primary"><span class="icon-ok icon-white"><\/span><\/button>',
            cancelTpl: '<button type="button" class="btn" ng-click="$form.$cancel()"><span class="icon-remove"><\/span><\/button>'
        },
        bs3: {
            formTpl: '<form class="form-inline editable-wrap" role="form"><\/form>',
            noformTpl: '<span class="editable-wrap"><\/span>',
            controlsTpl: '<div class="editable-controls form-group" ng-class="{\'has-error\': $error}"><\/div>',
            inputTpl: "",
            errorTpl: '<div class="editable-error help-block" ng-show="$error" ng-bind="$error"><\/div>',
            buttonsTpl: '<span class="editable-buttons"><\/span>',
            submitTpl: '<button type="submit" class="btn btn-primary"><span class="glyphicon glyphicon-ok"><\/span><\/button>',
            cancelTpl: '<button type="button" class="btn btn-default" ng-click="$form.$cancel()"><span class="glyphicon glyphicon-remove"><\/span><\/button>',
            buttonsClass: "",
            inputClass: "",
            postrender: function() {
                switch (this.directiveName) {
                    case "editableText":
                    case "editableSelect":
                    case "editableTextarea":
                    case "editableEmail":
                    case "editableTel":
                    case "editableNumber":
                    case "editableUrl":
                    case "editableSearch":
                    case "editableDate":
                    case "editableDatetime":
                    case "editableTime":
                    case "editableMonth":
                    case "editableWeek":
                        if (this.inputEl.addClass("form-control"), this.theme.inputClass) {
                            if (this.inputEl.attr("multiple") && ("input-sm" === this.theme.inputClass || "input-lg" === this.theme.inputClass)) break;
                            this.inputEl.addClass(this.theme.inputClass)
                        }
                }
                this.buttonsEl && this.theme.buttonsClass && this.buttonsEl.find("button").addClass(this.theme.buttonsClass)
            }
        }
    }
})