! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "47b7f521-3fe8-4ab0-a5b1-2a31a9080040", e._sentryDebugIdIdentifier = "sentry-dbid-47b7f521-3fe8-4ab0-a5b1-2a31a9080040")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7041], {
        56873: function(e, t) {
            "use strict";
            var r, n, o = {
                    update: null,
                    begin: null,
                    loopBegin: null,
                    changeBegin: null,
                    change: null,
                    changeComplete: null,
                    loopComplete: null,
                    complete: null,
                    loop: 1,
                    direction: "normal",
                    autoplay: !0,
                    timelineOffset: 0
                },
                a = {
                    duration: 1e3,
                    delay: 0,
                    endDelay: 0,
                    easing: "easeOutElastic(1, .5)",
                    round: 0
                },
                l = ["translateX", "translateY", "translateZ", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "scaleZ", "skew", "skewX", "skewY", "perspective", "matrix", "matrix3d"],
                i = {},
                s = {};

            function d(e, t, r) {
                return Math.min(Math.max(e, t), r)
            }

            function u(e, t) {
                return e.indexOf(t) > -1
            }

            function c(e, t) {
                return e.apply(null, t)
            }
            var f = {
                arr: function(e) {
                    return Array.isArray(e)
                },
                obj: function(e) {
                    return u(Object.prototype.toString.call(e), "Object")
                },
                pth: function(e) {
                    return f.obj(e) && e.hasOwnProperty("totalLength")
                },
                svg: function(e) {
                    return e instanceof SVGElement
                },
                inp: function(e) {
                    return e instanceof HTMLInputElement
                },
                dom: function(e) {
                    return e.nodeType || f.svg(e)
                },
                str: function(e) {
                    return "string" == typeof e
                },
                fnc: function(e) {
                    return "function" == typeof e
                },
                und: function(e) {
                    return void 0 === e
                },
                nil: function(e) {
                    return f.und(e) || null === e
                },
                hex: function(e) {
                    return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)
                },
                rgb: function(e) {
                    return /^rgb/.test(e)
                },
                hsl: function(e) {
                    return /^hsl/.test(e)
                },
                col: function(e) {
                    return f.hex(e) || f.rgb(e) || f.hsl(e)
                },
                key: function(e) {
                    return !o.hasOwnProperty(e) && !a.hasOwnProperty(e) && "targets" !== e && "keyframes" !== e
                }
            };

            function g(e) {
                var t = /\(([^)]+)\)/.exec(e);
                return t ? t[1].split(",").map(function(e) {
                    return parseFloat(e)
                }) : []
            }

            function p(e, t) {
                var r = g(e),
                    n = d(f.und(r[0]) ? 1 : r[0], .1, 100),
                    o = d(f.und(r[1]) ? 100 : r[1], .1, 100),
                    a = d(f.und(r[2]) ? 10 : r[2], .1, 100),
                    l = d(f.und(r[3]) ? 0 : r[3], .1, 100),
                    i = Math.sqrt(o / n),
                    u = a / (2 * Math.sqrt(o * n)),
                    c = u < 1 ? i * Math.sqrt(1 - u * u) : 0,
                    p = u < 1 ? (u * i + -l) / c : -l + i;

                function b(e) {
                    var r = t ? t * e / 1e3 : e;
                    return (r = u < 1 ? Math.exp(-r * u * i) * (1 * Math.cos(c * r) + p * Math.sin(c * r)) : (1 + p * r) * Math.exp(-r * i), 0 === e || 1 === e) ? e : 1 - r
                }
                return t ? b : function() {
                    var t = s[e];
                    if (t) return t;
                    for (var r = 1 / 6, n = 0, o = 0;;)
                        if (1 === b(n += r)) {
                            if (++o >= 16) break
                        } else o = 0;
                    var a = n * r * 1e3;
                    return s[e] = a, a
                }
            }

            function b(e) {
                return void 0 === e && (e = 10),
                    function(t) {
                        return Math.ceil(d(t, 1e-6, 1) * e) * (1 / e)
                    }
            }
            var m = function() {
                    function e(e, t, r) {
                        return (((1 - 3 * r + 3 * t) * e + (3 * r - 6 * t)) * e + 3 * t) * e
                    }

                    function t(e, t, r) {
                        return 3 * (1 - 3 * r + 3 * t) * e * e + 2 * (3 * r - 6 * t) * e + 3 * t
                    }
                    return function(r, n, o, a) {
                        if (0 <= r && r <= 1 && 0 <= o && o <= 1) {
                            var l = new Float32Array(11);
                            if (r !== n || o !== a)
                                for (var i = 0; i < 11; ++i) l[i] = e(.1 * i, r, o);
                            return function(i) {
                                return r === n && o === a || 0 === i || 1 === i ? i : e(function(n) {
                                    for (var a = 0, i = 1; 10 !== i && l[i] <= n; ++i) a += .1;
                                    var s = a + (n - l[--i]) / (l[i + 1] - l[i]) * .1,
                                        d = t(s, r, o);
                                    return d >= .001 ? function(r, n, o, a) {
                                        for (var l = 0; l < 4; ++l) {
                                            var i = t(n, o, a);
                                            if (0 === i) break;
                                            var s = e(n, o, a) - r;
                                            n -= s / i
                                        }
                                        return n
                                    }(n, s, r, o) : 0 === d ? s : function(t, r, n, o, a) {
                                        var l, i, s = 0;
                                        do(l = e(i = r + (n - r) / 2, o, a) - t) > 0 ? n = i : r = i; while (Math.abs(l) > 1e-7 && ++s < 10);
                                        return i
                                    }(n, a, a + .1, r, o)
                                }(i), n, a)
                            }
                        }
                    }
                }(),
                h = (r = {
                    linear: function() {
                        return function(e) {
                            return e
                        }
                    }
                }, n = {
                    Sine: function() {
                        return function(e) {
                            return 1 - Math.cos(e * Math.PI / 2)
                        }
                    },
                    Expo: function() {
                        return function(e) {
                            return e ? Math.pow(2, 10 * e - 10) : 0
                        }
                    },
                    Circ: function() {
                        return function(e) {
                            return 1 - Math.sqrt(1 - e * e)
                        }
                    },
                    Back: function() {
                        return function(e) {
                            return e * e * (3 * e - 2)
                        }
                    },
                    Bounce: function() {
                        return function(e) {
                            for (var t, r = 4; e < ((t = Math.pow(2, --r)) - 1) / 11;);
                            return 1 / Math.pow(4, 3 - r) - 7.5625 * Math.pow((3 * t - 2) / 22 - e, 2)
                        }
                    },
                    Elastic: function(e, t) {
                        void 0 === e && (e = 1), void 0 === t && (t = .5);
                        var r = d(e, 1, 10),
                            n = d(t, .1, 2);
                        return function(e) {
                            return 0 === e || 1 === e ? e : -r * Math.pow(2, 10 * (e - 1)) * Math.sin(2 * Math.PI * (e - 1 - n / (2 * Math.PI) * Math.asin(1 / r)) / n)
                        }
                    }
                }, ["Quad", "Cubic", "Quart", "Quint"].forEach(function(e, t) {
                    n[e] = function() {
                        return function(e) {
                            return Math.pow(e, t + 2)
                        }
                    }
                }), Object.keys(n).forEach(function(e) {
                    var t = n[e];
                    r["easeIn" + e] = t, r["easeOut" + e] = function(e, r) {
                        return function(n) {
                            return 1 - t(e, r)(1 - n)
                        }
                    }, r["easeInOut" + e] = function(e, r) {
                        return function(n) {
                            return n < .5 ? t(e, r)(2 * n) / 2 : 1 - t(e, r)(-2 * n + 2) / 2
                        }
                    }, r["easeOutIn" + e] = function(e, r) {
                        return function(n) {
                            return n < .5 ? (1 - t(e, r)(1 - 2 * n)) / 2 : (t(e, r)(2 * n - 1) + 1) / 2
                        }
                    }
                }), r);

            function y(e, t) {
                if (f.fnc(e)) return e;
                var r = e.split("(")[0],
                    n = h[r],
                    o = g(e);
                switch (r) {
                    case "spring":
                        return p(e, t);
                    case "cubicBezier":
                        return c(m, o);
                    case "steps":
                        return c(b, o);
                    default:
                        return c(n, o)
                }
            }

            function v(e) {
                try {
                    return document.querySelectorAll(e)
                } catch (e) {
                    return
                }
            }

            function x(e, t) {
                for (var r = e.length, n = arguments.length >= 2 ? arguments[1] : void 0, o = [], a = 0; a < r; a++)
                    if (a in e) {
                        var l = e[a];
                        t.call(n, l, a, e) && o.push(l)
                    }
                return o
            }

            function w(e) {
                return e.reduce(function(e, t) {
                    return e.concat(f.arr(t) ? w(t) : t)
                }, [])
            }

            function k(e) {
                return f.arr(e) ? e : (f.str(e) && (e = v(e) || e), e instanceof NodeList || e instanceof HTMLCollection) ? [].slice.call(e) : [e]
            }

            function E(e, t) {
                return e.some(function(e) {
                    return e === t
                })
            }

            function N(e) {
                var t = {};
                for (var r in e) t[r] = e[r];
                return t
            }

            function j(e, t) {
                var r = N(e);
                for (var n in e) r[n] = t.hasOwnProperty(n) ? t[n] : e[n];
                return r
            }

            function C(e, t) {
                var r = N(e);
                for (var n in t) r[n] = f.und(e[n]) ? t[n] : e[n];
                return r
            }

            function T(e) {
                var t = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e);
                if (t) return t[1]
            }

            function M(e, t) {
                return f.fnc(e) ? e(t.target, t.id, t.total) : e
            }

            function S(e, t) {
                return e.getAttribute(t)
            }

            function R(e, t, r) {
                if (E([r, "deg", "rad", "turn"], T(t))) return t;
                var n = i[t + r];
                if (!f.und(n)) return n;
                var o = document.createElement(e.tagName),
                    a = e.parentNode && e.parentNode !== document ? e.parentNode : document.body;
                a.appendChild(o), o.style.position = "absolute", o.style.width = 100 + r;
                var l = 100 / o.offsetWidth;
                a.removeChild(o);
                var s = l * parseFloat(t);
                return i[t + r] = s, s
            }

            function I(e, t, r) {
                if (t in e.style) {
                    var n = t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
                        o = e.style[t] || getComputedStyle(e).getPropertyValue(n) || "0";
                    return r ? R(e, o, r) : o
                }
            }

            function O(e, t) {
                return f.dom(e) && !f.inp(e) && (!f.nil(S(e, t)) || f.svg(e) && e[t]) ? "attribute" : f.dom(e) && E(l, t) ? "transform" : f.dom(e) && "transform" !== t && I(e, t) ? "css" : null != e[t] ? "object" : void 0
            }

            function P(e) {
                if (f.dom(e)) {
                    for (var t, r = e.style.transform || "", n = /(\w+)\(([^)]*)\)/g, o = new Map; t = n.exec(r);) o.set(t[1], t[2]);
                    return o
                }
            }

            function D(e, t, r, n) {
                switch (O(e, t)) {
                    case "transform":
                        var o, a;
                        return o = u(t, "scale") ? 1 : 0 + (u(t, "translate") || "perspective" === t ? "px" : u(t, "rotate") || u(t, "skew") ? "deg" : void 0), a = P(e).get(t) || o, n && (n.transforms.list.set(t, a), n.transforms.last = t), r ? R(e, a, r) : a;
                    case "css":
                        return I(e, t, r);
                    case "attribute":
                        return S(e, t);
                    default:
                        return e[t] || 0
                }
            }

            function L(e, t) {
                var r = /^(\*=|\+=|-=)/.exec(e);
                if (!r) return e;
                var n = T(e) || 0,
                    o = parseFloat(t),
                    a = parseFloat(e.replace(r[0], ""));
                switch (r[0][0]) {
                    case "+":
                        return o + a + n;
                    case "-":
                        return o - a + n;
                    case "*":
                        return o * a + n
                }
            }

            function A(e, t) {
                if (f.col(e)) {
                    var r, n, o, a;
                    return r = e, f.rgb(r) ? (n = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(r)) ? "rgba(" + n[1] + ",1)" : r : f.hex(r) ? (o = r.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(e, t, r, n) {
                        return t + t + r + r + n + n
                    }), "rgba(" + parseInt((a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(o))[1], 16) + "," + parseInt(a[2], 16) + "," + parseInt(a[3], 16) + ",1)") : f.hsl(r) ? function(e) {
                        var t, r, n, o = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),
                            a = parseInt(o[1], 10) / 360,
                            l = parseInt(o[2], 10) / 100,
                            i = parseInt(o[3], 10) / 100,
                            s = o[4] || 1;

                        function d(e, t, r) {
                            return (r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6) ? e + (t - e) * 6 * r : r < .5 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
                        }
                        if (0 == l) t = r = n = i;
                        else {
                            var u = i < .5 ? i * (1 + l) : i + l - i * l,
                                c = 2 * i - u;
                            t = d(c, u, a + 1 / 3), r = d(c, u, a), n = d(c, u, a - 1 / 3)
                        }
                        return "rgba(" + 255 * t + "," + 255 * r + "," + 255 * n + "," + s + ")"
                    }(r) : void 0
                }
                if (/\s/g.test(e)) return e;
                var l = T(e),
                    i = l ? e.substr(0, e.length - l.length) : e;
                return t ? i + t : i
            }

            function F(e, t) {
                return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
            }

            function z(e) {
                for (var t, r = e.points, n = 0, o = 0; o < r.numberOfItems; o++) {
                    var a = r.getItem(o);
                    o > 0 && (n += F(t, a)), t = a
                }
                return n
            }

            function B(e) {
                var t;
                if (e.getTotalLength) return e.getTotalLength();
                switch (e.tagName.toLowerCase()) {
                    case "circle":
                        return 2 * Math.PI * S(e, "r");
                    case "rect":
                        return 2 * S(e, "width") + 2 * S(e, "height");
                    case "line":
                        return F({
                            x: S(e, "x1"),
                            y: S(e, "y1")
                        }, {
                            x: S(e, "x2"),
                            y: S(e, "y2")
                        });
                    case "polyline":
                        return z(e);
                    case "polygon":
                        return t = e.points, z(e) + F(t.getItem(t.numberOfItems - 1), t.getItem(0))
                }
            }

            function _(e, t) {
                var r = t || {},
                    n = r.el || function(e) {
                        for (var t = e.parentNode; f.svg(t) && f.svg(t.parentNode);) t = t.parentNode;
                        return t
                    }(e),
                    o = n.getBoundingClientRect(),
                    a = S(n, "viewBox"),
                    l = o.width,
                    i = o.height,
                    s = r.viewBox || (a ? a.split(" ") : [0, 0, l, i]);
                return {
                    el: n,
                    viewBox: s,
                    x: s[0] / 1,
                    y: s[1] / 1,
                    w: l,
                    h: i,
                    vW: s[2],
                    vH: s[3]
                }
            }

            function H(e, t) {
                var r = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,
                    n = A(f.pth(e) ? e.totalLength : e, t) + "";
                return {
                    original: n,
                    numbers: n.match(r) ? n.match(r).map(Number) : [0],
                    strings: f.str(e) || t ? n.split(r) : []
                }
            }

            function W(e) {
                return x(e ? w(f.arr(e) ? e.map(k) : k(e)) : [], function(e, t, r) {
                    return r.indexOf(e) === t
                })
            }

            function Y(e) {
                var t = W(e);
                return t.map(function(e, r) {
                    return {
                        target: e,
                        id: r,
                        total: t.length,
                        transforms: {
                            list: P(e)
                        }
                    }
                })
            }
            var G = {
                css: function(e, t, r) {
                    return e.style[t] = r
                },
                attribute: function(e, t, r) {
                    return e.setAttribute(t, r)
                },
                object: function(e, t, r) {
                    return e[t] = r
                },
                transform: function(e, t, r, n, o) {
                    if (n.list.set(t, r), t === n.last || o) {
                        var a = "";
                        n.list.forEach(function(e, t) {
                            a += t + "(" + e + ") "
                        }), e.style.transform = a
                    }
                }
            };

            function q(e, t) {
                Y(e).forEach(function(e) {
                    for (var r in t) {
                        var n = M(t[r], e),
                            o = e.target,
                            a = T(n),
                            l = D(o, r, a, e),
                            i = L(A(n, a || T(l)), l);
                        G[O(o, r)](o, r, i, e.transforms, !0)
                    }
                })
            }

            function U(e, t) {
                var r = e.length,
                    n = function(e) {
                        return e.timelineOffset ? e.timelineOffset : 0
                    },
                    o = {};
                return o.duration = r ? Math.max.apply(Math, e.map(function(e) {
                    return n(e) + e.duration
                })) : t.duration, o.delay = r ? Math.min.apply(Math, e.map(function(e) {
                    return n(e) + e.delay
                })) : t.delay, o.endDelay = r ? o.duration - Math.max.apply(Math, e.map(function(e) {
                    return n(e) + e.duration - e.endDelay
                })) : t.endDelay, o
            }
            var V = 0,
                K = [],
                X = function() {
                    var e;

                    function t(r) {
                        for (var n = K.length, o = 0; o < n;) {
                            var a = K[o];
                            a.paused ? (K.splice(o, 1), n--) : (a.tick(r), o++)
                        }
                        e = o > 0 ? requestAnimationFrame(t) : void 0
                    }
                    return "undefined" != typeof document && document.addEventListener("visibilitychange", function() {
                            Z.suspendWhenDocumentHidden && ($() ? e = cancelAnimationFrame(e) : (K.forEach(function(e) {
                                return e._onDocumentVisibility()
                            }), X()))
                        }),
                        function() {
                            e || $() && Z.suspendWhenDocumentHidden || !(K.length > 0) || (e = requestAnimationFrame(t))
                        }
                }();

            function $() {
                return !!document && document.hidden
            }

            function Z(e) {
                void 0 === e && (e = {});
                var t, r, n, l, i, s, u, c, g, b = 0,
                    m = 0,
                    h = 0,
                    v = 0,
                    k = null;

                function E(e) {
                    var t = window.Promise && new Promise(function(e) {
                        return k = e
                    });
                    return e.finished = t, t
                }
                var S = (r = j(o, t = e), l = function(e, t) {
                    var r = [],
                        n = t.keyframes;
                    for (var o in n && (t = C(function(e) {
                            for (var t = x(w(e.map(function(e) {
                                    return Object.keys(e)
                                })), function(e) {
                                    return f.key(e)
                                }).reduce(function(e, t) {
                                    return 0 > e.indexOf(t) && e.push(t), e
                                }, []), r = {}, n = 0; n < t.length; n++) ! function(n) {
                                var o = t[n];
                                r[o] = e.map(function(e) {
                                    var t = {};
                                    for (var r in e) f.key(r) ? r == o && (t.value = e[r]) : t[r] = e[r];
                                    return t
                                })
                            }(n);
                            return r
                        }(n), t)), t) f.key(o) && r.push({
                        name: o,
                        tweens: function(e, t) {
                            var r = N(t);
                            if (/^spring/.test(r.easing) && (r.duration = p(r.easing)), f.arr(e)) {
                                var n = e.length;
                                2 !== n || f.obj(e[0]) ? f.fnc(t.duration) || (r.duration = t.duration / n) : e = {
                                    value: e
                                }
                            }
                            var o = f.arr(e) ? e : [e];
                            return o.map(function(e, r) {
                                var n = f.obj(e) && !f.pth(e) ? e : {
                                    value: e
                                };
                                return f.und(n.delay) && (n.delay = r ? 0 : t.delay), f.und(n.endDelay) && (n.endDelay = r === o.length - 1 ? t.endDelay : 0), n
                            }).map(function(e) {
                                return C(e, r)
                            })
                        }(t[o], e)
                    });
                    return r
                }(n = j(a, t), t), u = U(s = x(w((i = Y(t.targets)).map(function(e) {
                    return l.map(function(t) {
                        return function(e, t) {
                            var r = O(e.target, t.name);
                            if (r) {
                                var n, o = t.tweens.map(function(r) {
                                        var o = function(e, t) {
                                                var r = {};
                                                for (var n in e) {
                                                    var o = M(e[n], t);
                                                    f.arr(o) && 1 === (o = o.map(function(e) {
                                                        return M(e, t)
                                                    })).length && (o = o[0]), r[n] = o
                                                }
                                                return r.duration = parseFloat(r.duration), r.delay = parseFloat(r.delay), r
                                            }(r, e),
                                            a = o.value,
                                            l = f.arr(a) ? a[1] : a,
                                            i = T(l),
                                            s = D(e.target, t.name, i, e),
                                            d = n ? n.to.original : s,
                                            u = f.arr(a) ? a[0] : d,
                                            c = T(u) || T(s),
                                            g = i || c;
                                        return f.und(l) && (l = d), o.from = H(u, g), o.to = H(L(l, u), g), o.start = n ? n.end : 0, o.end = o.start + o.delay + o.duration + o.endDelay, o.easing = y(o.easing, o.duration), o.isPath = f.pth(a), o.isPathTargetInsideSVG = o.isPath && f.svg(e.target), o.isColor = f.col(o.from.original), o.isColor && (o.round = 1), n = o, o
                                    }),
                                    a = o[o.length - 1];
                                return {
                                    type: r,
                                    property: t.name,
                                    animatable: e,
                                    tweens: o,
                                    duration: a.end,
                                    delay: o[0].delay,
                                    endDelay: a.endDelay
                                }
                            }
                        }(e, t)
                    })
                })), function(e) {
                    return !f.und(e)
                }), n), c = V, V++, C(r, {
                    id: c,
                    children: [],
                    animatables: i,
                    animations: s,
                    duration: u.duration,
                    delay: u.delay,
                    endDelay: u.endDelay
                }));

                function R() {
                    var e = S.direction;
                    "alternate" !== e && (S.direction = "normal" !== e ? "normal" : "reverse"), S.reversed = !S.reversed, g.forEach(function(e) {
                        return e.reversed = S.reversed
                    })
                }

                function I(e) {
                    return S.reversed ? S.duration - e : e
                }

                function P() {
                    b = 0, m = I(S.currentTime) * (1 / Z.speed)
                }

                function A(e, t) {
                    t && t.seek(e - t.timelineOffset)
                }

                function F(e) {
                    for (var t = 0, r = S.animations, n = r.length; t < n;) {
                        var o = r[t],
                            a = o.animatable,
                            l = o.tweens,
                            i = l.length - 1,
                            s = l[i];
                        i && (s = x(l, function(t) {
                            return e < t.end
                        })[0] || s);
                        for (var u = d(e - s.start - s.delay, 0, s.duration) / s.duration, c = isNaN(u) ? 1 : s.easing(u), f = s.to.strings, g = s.round, p = [], b = s.to.numbers.length, m = void 0, h = 0; h < b; h++) {
                            var y = void 0,
                                v = s.to.numbers[h],
                                w = s.from.numbers[h] || 0;
                            y = s.isPath ? function(e, t, r) {
                                function n(r) {
                                    void 0 === r && (r = 0);
                                    var n = t + r >= 1 ? t + r : 0;
                                    return e.el.getPointAtLength(n)
                                }
                                var o = _(e.el, e.svg),
                                    a = n(),
                                    l = n(-1),
                                    i = n(1),
                                    s = r ? 1 : o.w / o.vW,
                                    d = r ? 1 : o.h / o.vH;
                                switch (e.property) {
                                    case "x":
                                        return (a.x - o.x) * s;
                                    case "y":
                                        return (a.y - o.y) * d;
                                    case "angle":
                                        return 180 * Math.atan2(i.y - l.y, i.x - l.x) / Math.PI
                                }
                            }(s.value, c * v, s.isPathTargetInsideSVG) : w + c * (v - w), g && !(s.isColor && h > 2) && (y = Math.round(y * g) / g), p.push(y)
                        }
                        var k = f.length;
                        if (k) {
                            m = f[0];
                            for (var E = 0; E < k; E++) {
                                f[E];
                                var N = f[E + 1],
                                    j = p[E];
                                isNaN(j) || (N ? m += j + N : m += j + " ")
                            }
                        } else m = p[0];
                        G[o.type](a.target, o.property, m, a.transforms), o.currentValue = m, t++
                    }
                }

                function z(e) {
                    S[e] && !S.passThrough && S[e](S)
                }

                function B(e) {
                    var t = S.duration,
                        r = S.delay,
                        n = t - S.endDelay,
                        o = I(e);
                    S.progress = d(o / t * 100, 0, 100), S.reversePlayback = o < S.currentTime, g && function(e) {
                        if (S.reversePlayback)
                            for (var t = v; t--;) A(e, g[t]);
                        else
                            for (var r = 0; r < v; r++) A(e, g[r])
                    }(o), !S.began && S.currentTime > 0 && (S.began = !0, z("begin")), !S.loopBegan && S.currentTime > 0 && (S.loopBegan = !0, z("loopBegin")), o <= r && 0 !== S.currentTime && F(0), (o >= n && S.currentTime !== t || !t) && F(t), o > r && o < n ? (S.changeBegan || (S.changeBegan = !0, S.changeCompleted = !1, z("changeBegin")), z("change"), F(o)) : S.changeBegan && (S.changeCompleted = !0, S.changeBegan = !1, z("changeComplete")), S.currentTime = d(o, 0, t), S.began && z("update"), e >= t && (m = 0, S.remaining && !0 !== S.remaining && S.remaining--, S.remaining ? (b = h, z("loopComplete"), S.loopBegan = !1, "alternate" === S.direction && R()) : (S.paused = !0, !S.completed && (S.completed = !0, z("loopComplete"), z("complete"), !S.passThrough && "Promise" in window && (k(), E(S)))))
                }
                return E(S), S.reset = function() {
                    var e = S.direction;
                    S.passThrough = !1, S.currentTime = 0, S.progress = 0, S.paused = !0, S.began = !1, S.loopBegan = !1, S.changeBegan = !1, S.completed = !1, S.changeCompleted = !1, S.reversePlayback = !1, S.reversed = "reverse" === e, S.remaining = S.loop, v = (g = S.children).length;
                    for (var t = v; t--;) S.children[t].reset();
                    (S.reversed && !0 !== S.loop || "alternate" === e && 1 === S.loop) && S.remaining++, F(S.reversed ? S.duration : 0)
                }, S._onDocumentVisibility = P, S.set = function(e, t) {
                    return q(e, t), S
                }, S.tick = function(e) {
                    h = e, b || (b = h), B((h + (m - b)) * Z.speed)
                }, S.seek = function(e) {
                    B(I(e))
                }, S.pause = function() {
                    S.paused = !0, P()
                }, S.play = function() {
                    S.paused && (S.completed && S.reset(), S.paused = !1, K.push(S), P(), X())
                }, S.reverse = function() {
                    R(), S.completed = !S.reversed, P()
                }, S.restart = function() {
                    S.reset(), S.play()
                }, S.remove = function(e) {
                    J(W(e), S)
                }, S.reset(), S.autoplay && S.play(), S
            }

            function Q(e, t) {
                for (var r = t.length; r--;) E(e, t[r].animatable.target) && t.splice(r, 1)
            }

            function J(e, t) {
                var r = t.animations,
                    n = t.children;
                Q(e, r);
                for (var o = n.length; o--;) {
                    var a = n[o],
                        l = a.animations;
                    Q(e, l), l.length || a.children.length || n.splice(o, 1)
                }
                r.length || n.length || t.pause()
            }
            Z.version = "3.2.1", Z.speed = 1, Z.suspendWhenDocumentHidden = !0, Z.running = K, Z.remove = function(e) {
                for (var t = W(e), r = K.length; r--;) J(t, K[r])
            }, Z.get = D, Z.set = q, Z.convertPx = R, Z.path = function(e, t) {
                var r = f.str(e) ? v(e)[0] : e,
                    n = t || 100;
                return function(e) {
                    return {
                        property: e,
                        el: r,
                        svg: _(r),
                        totalLength: B(r) * (n / 100)
                    }
                }
            }, Z.setDashoffset = function(e) {
                var t = B(e);
                return e.setAttribute("stroke-dasharray", t), t
            }, Z.stagger = function(e, t) {
                void 0 === t && (t = {});
                var r = t.direction || "normal",
                    n = t.easing ? y(t.easing) : null,
                    o = t.grid,
                    a = t.axis,
                    l = t.from || 0,
                    i = "first" === l,
                    s = "center" === l,
                    d = "last" === l,
                    u = f.arr(e),
                    c = u ? parseFloat(e[0]) : parseFloat(e),
                    g = u ? parseFloat(e[1]) : 0,
                    p = T(u ? e[1] : e) || 0,
                    b = t.start || 0 + (u ? c : 0),
                    m = [],
                    h = 0;
                return function(e, t, f) {
                    if (i && (l = 0), s && (l = (f - 1) / 2), d && (l = f - 1), !m.length) {
                        for (var y = 0; y < f; y++) {
                            if (o) {
                                var v = s ? (o[0] - 1) / 2 : l % o[0],
                                    x = s ? (o[1] - 1) / 2 : Math.floor(l / o[0]),
                                    w = y % o[0],
                                    k = Math.floor(y / o[0]),
                                    E = v - w,
                                    N = x - k,
                                    j = Math.sqrt(E * E + N * N);
                                "x" === a && (j = -E), "y" === a && (j = -N), m.push(j)
                            } else m.push(Math.abs(l - y));
                            h = Math.max.apply(Math, m)
                        }
                        n && (m = m.map(function(e) {
                            return n(e / h) * h
                        })), "reverse" === r && (m = m.map(function(e) {
                            return a ? e < 0 ? -1 * e : -e : Math.abs(h - e)
                        }))
                    }
                    var C = u ? (g - c) / h : c;
                    return b + Math.round(100 * m[t]) / 100 * C + p
                }
            }, Z.timeline = function(e) {
                void 0 === e && (e = {});
                var t = Z(e);
                return t.duration = 0, t.add = function(r, n) {
                    var o = K.indexOf(t),
                        l = t.children;

                    function i(e) {
                        e.passThrough = !0
                    }
                    o > -1 && K.splice(o, 1);
                    for (var s = 0; s < l.length; s++) i(l[s]);
                    var d = C(r, j(a, e));
                    d.targets = d.targets || e.targets;
                    var u = t.duration;
                    d.autoplay = !1, d.direction = t.direction, d.timelineOffset = f.und(n) ? u : L(n, u), i(t), t.seek(d.timelineOffset);
                    var c = Z(d);
                    i(c), l.push(c);
                    var g = U(l, e);
                    return t.delay = g.delay, t.endDelay = g.endDelay, t.duration = g.duration, t.seek(0), t.reset(), t.autoplay && t.play(), t
                }, t
            }, Z.easing = y, Z.penner = h, Z.random = function(e, t) {
                return Math.floor(Math.random() * (t - e + 1)) + e
            }, t.Z = Z
        },
        79271: function(e) {
            function t(e, t = 100, r = {}) {
                let n, o, a, l, i;
                if ("function" != typeof e) throw TypeError(`Expected the first parameter to be a function, got \`${typeof e}\`.`);
                if (t < 0) throw RangeError("`wait` must not be negative.");
                let {
                    immediate: s
                } = "boolean" == typeof r ? {
                    immediate: r
                } : r;

                function d() {
                    let r = Date.now() - l;
                    if (r < t && r >= 0) a = setTimeout(d, t - r);
                    else if (a = void 0, !s) {
                        let t = n,
                            r = o;
                        n = void 0, o = void 0, i = e.apply(t, r)
                    }
                }
                let u = function(...r) {
                    if (n && this !== n) throw Error("Debounced method called with different contexts.");
                    n = this, o = r, l = Date.now();
                    let u = s && !a;
                    if (a || (a = setTimeout(d, t)), u) {
                        let t = n,
                            r = o;
                        n = void 0, o = void 0, i = e.apply(t, r)
                    }
                    return i
                };
                return u.clear = () => {
                    a && (clearTimeout(a), a = void 0)
                }, u.flush = () => {
                    if (!a) return;
                    let t = n,
                        r = o;
                    n = void 0, o = void 0, i = e.apply(t, r), clearTimeout(a), a = void 0
                }, u
            }
            e.exports.debounce = t, e.exports = t
        },
        30166: function(e, t, r) {
            "use strict";
            r.d(t, {
                default: function() {
                    return o.a
                }
            });
            var n = r(55775),
                o = r.n(n)
        },
        55775: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return a
                }
            });
            let n = r(47043);
            r(57437), r(2265);
            let o = n._(r(15602));

            function a(e, t) {
                var r;
                let n = {
                    loading: e => {
                        let {
                            error: t,
                            isLoading: r,
                            pastDelay: n
                        } = e;
                        return null
                    }
                };
                "function" == typeof e && (n.loader = e);
                let a = { ...n,
                    ...t
                };
                return (0, o.default)({ ...a,
                    modules: null == (r = a.loadableGenerated) ? void 0 : r.modules
                })
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        81523: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "BailoutToCSR", {
                enumerable: !0,
                get: function() {
                    return o
                }
            });
            let n = r(18993);

            function o(e) {
                let {
                    reason: t,
                    children: r
                } = e;
                if ("undefined" == typeof window) throw new n.BailoutToCSRError(t);
                return r
            }
        },
        15602: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return d
                }
            });
            let n = r(57437),
                o = r(2265),
                a = r(81523),
                l = r(70049);

            function i(e) {
                return {
                    default: e && "default" in e ? e.default : e
                }
            }
            let s = {
                    loader: () => Promise.resolve(i(() => null)),
                    loading: null,
                    ssr: !0
                },
                d = function(e) {
                    let t = { ...s,
                            ...e
                        },
                        r = (0, o.lazy)(() => t.loader().then(i)),
                        d = t.loading;

                    function u(e) {
                        let i = d ? (0, n.jsx)(d, {
                                isLoading: !0,
                                pastDelay: !0,
                                error: null
                            }) : null,
                            s = t.ssr ? (0, n.jsxs)(n.Fragment, {
                                children: ["undefined" == typeof window ? (0, n.jsx)(l.PreloadCss, {
                                    moduleIds: t.modules
                                }) : null, (0, n.jsx)(r, { ...e
                                })]
                            }) : (0, n.jsx)(a.BailoutToCSR, {
                                reason: "next/dynamic",
                                children: (0, n.jsx)(r, { ...e
                                })
                            });
                        return (0, n.jsx)(o.Suspense, {
                            fallback: i,
                            children: s
                        })
                    }
                    return u.displayName = "LoadableComponent", u
                }
        },
        70049: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "PreloadCss", {
                enumerable: !0,
                get: function() {
                    return a
                }
            });
            let n = r(57437),
                o = r(20544);

            function a(e) {
                let {
                    moduleIds: t
                } = e;
                if ("undefined" != typeof window) return null;
                let r = (0, o.getExpectedRequestStore)("next/dynamic css"),
                    a = [];
                if (r.reactLoadableManifest && t) {
                    let e = r.reactLoadableManifest;
                    for (let r of t) {
                        if (!e[r]) continue;
                        let t = e[r].files.filter(e => e.endsWith(".css"));
                        a.push(...t)
                    }
                }
                return 0 === a.length ? null : (0, n.jsx)(n.Fragment, {
                    children: a.map(e => (0, n.jsx)("link", {
                        precedence: "dynamic",
                        rel: "stylesheet",
                        href: r.assetPrefix + "/_next/" + encodeURI(e),
                        as: "style"
                    }, e))
                })
            }
        },
        51772: function(e, t, r) {
            "use strict";
            var n = r(2265),
                o = n && "object" == typeof n && "default" in n ? n : {
                    default: n
                };
            ! function(e) {
                if (!e || "undefined" == typeof window) return;
                let t = document.createElement("style");
                t.setAttribute("type", "text/css"), t.innerHTML = e, document.head.appendChild(t)
            }('.rfm-marquee-container {\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.rfm-marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.rfm-marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.rfm-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.rfm-overlay::before, .rfm-overlay::after {\n  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n  pointer-events: none;\n  touch-action: none;\n}\n.rfm-overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.rfm-overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.rfm-marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.rfm-initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n  align-items: center;\n}\n\n.rfm-child {\n  transform: var(--transform);\n}');
            let a = n.forwardRef(function(e, t) {
                let {
                    style: r = {},
                    className: a = "",
                    autoFill: l = !1,
                    play: i = !0,
                    pauseOnHover: s = !1,
                    pauseOnClick: d = !1,
                    direction: u = "left",
                    speed: c = 50,
                    delay: f = 0,
                    loop: g = 0,
                    gradient: p = !1,
                    gradientColor: b = "white",
                    gradientWidth: m = 200,
                    onFinish: h,
                    onCycleComplete: y,
                    onMount: v,
                    children: x
                } = e, [w, k] = n.useState(0), [E, N] = n.useState(0), [j, C] = n.useState(1), [T, M] = n.useState(!1), S = n.useRef(null), R = t || S, I = n.useRef(null), O = n.useCallback(() => {
                    if (I.current && R.current) {
                        let e = R.current.getBoundingClientRect(),
                            t = I.current.getBoundingClientRect(),
                            r = e.width,
                            n = t.width;
                        ("up" === u || "down" === u) && (r = e.height, n = t.height), l && r && n ? C(n < r ? Math.ceil(r / n) : 1) : C(1), k(r), N(n)
                    }
                }, [l, R, u]);
                n.useEffect(() => {
                    if (T && (O(), I.current && R.current)) {
                        let e = new ResizeObserver(() => O());
                        return e.observe(R.current), e.observe(I.current), () => {
                            e && e.disconnect()
                        }
                    }
                }, [O, R, T]), n.useEffect(() => {
                    O()
                }, [O, x]), n.useEffect(() => {
                    M(!0)
                }, []), n.useEffect(() => {
                    "function" == typeof v && v()
                }, []);
                let P = n.useMemo(() => l ? E * j / c : E < w ? w / c : E / c, [l, w, E, j, c]),
                    D = n.useMemo(() => Object.assign(Object.assign({}, r), {
                        "--pause-on-hover": !i || s ? "paused" : "running",
                        "--pause-on-click": !i || s && !d || d ? "paused" : "running",
                        "--width": "up" === u || "down" === u ? "100vh" : "100%",
                        "--transform": "up" === u ? "rotate(-90deg)" : "down" === u ? "rotate(90deg)" : "none"
                    }), [r, i, s, d, u]),
                    L = n.useMemo(() => ({
                        "--gradient-color": b,
                        "--gradient-width": "number" == typeof m ? "".concat(m, "px") : m
                    }), [b, m]),
                    A = n.useMemo(() => ({
                        "--play": i ? "running" : "paused",
                        "--direction": "left" === u ? "normal" : "reverse",
                        "--duration": "".concat(P, "s"),
                        "--delay": "".concat(f, "s"),
                        "--iteration-count": g ? "".concat(g) : "infinite",
                        "--min-width": l ? "auto" : "100%"
                    }), [i, u, P, f, g, l]),
                    F = n.useMemo(() => ({
                        "--transform": "up" === u ? "rotate(90deg)" : "down" === u ? "rotate(-90deg)" : "none"
                    }), [u]),
                    z = n.useCallback(e => [...Array(Number.isFinite(e) && e >= 0 ? e : 0)].map((e, t) => o.default.createElement(n.Fragment, {
                        key: t
                    }, n.Children.map(x, e => o.default.createElement("div", {
                        style: F,
                        className: "rfm-child"
                    }, e)))), [F, x]);
                return T ? o.default.createElement("div", {
                    ref: R,
                    style: D,
                    className: "rfm-marquee-container " + a
                }, p && o.default.createElement("div", {
                    style: L,
                    className: "rfm-overlay"
                }), o.default.createElement("div", {
                    className: "rfm-marquee",
                    style: A,
                    onAnimationIteration: y,
                    onAnimationEnd: h
                }, o.default.createElement("div", {
                    className: "rfm-initial-child-container",
                    ref: I
                }, n.Children.map(x, e => o.default.createElement("div", {
                    style: F,
                    className: "rfm-child"
                }, e))), z(j - 1)), o.default.createElement("div", {
                    className: "rfm-marquee",
                    style: A
                }, z(j))) : null
            });
            t.Z = a
        },
        64299: function() {},
        36760: function(e, t) {
            var r;
            /*!
            	Copyright (c) 2018 Jed Watson.
            	Licensed under the MIT License (MIT), see
            	http://jedwatson.github.io/classnames
            */
            ! function() {
                "use strict";
                var n = {}.hasOwnProperty;

                function o() {
                    for (var e = "", t = 0; t < arguments.length; t++) {
                        var r = arguments[t];
                        r && (e = a(e, function(e) {
                            if ("string" == typeof e || "number" == typeof e) return e;
                            if ("object" != typeof e) return "";
                            if (Array.isArray(e)) return o.apply(null, e);
                            if (e.toString !== Object.prototype.toString && !e.toString.toString().includes("[native code]")) return e.toString();
                            var t = "";
                            for (var r in e) n.call(e, r) && e[r] && (t = a(t, r));
                            return t
                        }(r)))
                    }
                    return e
                }

                function a(e, t) {
                    return t ? e ? e + " " + t : e + t : e
                }
                e.exports ? (o.default = o, e.exports = o) : void 0 !== (r = (function() {
                    return o
                }).apply(t, [])) && (e.exports = r)
            }()
        },
        46575: function(e, t, r) {
            "use strict";
            let n, o, a, l, i, s, d, u, c, f;
            r.d(t, {
                v: function() {
                    return er
                }
            });
            var g, p = r(2265),
                b = r(90945),
                m = r(13323),
                h = r(61424),
                y = r(64518),
                v = r(72238);
            let x = null != (g = p.useId) ? g : function() {
                let e = (0, v.H)(),
                    [t, r] = p.useState(e ? () => h.O.nextId() : null);
                return (0, y.e)(() => {
                    null === t && r(h.O.nextId())
                }, [t]), null != t ? "" + t : void 0
            };
            var w = r(29846),
                k = r(24536);

            function E(e) {
                return h.O.isServer ? null : e instanceof Node ? e.ownerDocument : null != e && e.hasOwnProperty("current") && e.current instanceof Node ? e.current.ownerDocument : document
            }
            let N = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map(e => "".concat(e, ":not([tabindex='-1'])")).join(",");
            var j = ((n = j || {})[n.First = 1] = "First", n[n.Previous = 2] = "Previous", n[n.Next = 4] = "Next", n[n.Last = 8] = "Last", n[n.WrapAround = 16] = "WrapAround", n[n.NoScroll = 32] = "NoScroll", n),
                C = ((o = C || {})[o.Error = 0] = "Error", o[o.Overflow = 1] = "Overflow", o[o.Success = 2] = "Success", o[o.Underflow = 3] = "Underflow", o),
                T = ((a = T || {})[a.Previous = -1] = "Previous", a[a.Next = 1] = "Next", a);

            function M() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document.body;
                return null == e ? [] : Array.from(e.querySelectorAll(N)).sort((e, t) => Math.sign((e.tabIndex || Number.MAX_SAFE_INTEGER) - (t.tabIndex || Number.MAX_SAFE_INTEGER)))
            }
            var S = ((l = S || {})[l.Strict = 0] = "Strict", l[l.Loose = 1] = "Loose", l);

            function R(e) {
                var t;
                let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                return e !== (null == (t = E(e)) ? void 0 : t.body) && (0, k.E)(r, {
                    0: () => e.matches(N),
                    1() {
                        let t = e;
                        for (; null !== t;) {
                            if (t.matches(N)) return !0;
                            t = t.parentElement
                        }
                        return !1
                    }
                })
            }

            function I(e) {
                let t = E(e);
                (0, w.k)().nextFrame(() => {
                    t && !R(t.activeElement, 0) && (null == e || e.focus({
                        preventScroll: !0
                    }))
                })
            }
            var O = ((i = O || {})[i.Keyboard = 0] = "Keyboard", i[i.Mouse = 1] = "Mouse", i);

            function P(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e => e;
                return e.slice().sort((e, r) => {
                    let n = t(e),
                        o = t(r);
                    if (null === n || null === o) return 0;
                    let a = n.compareDocumentPosition(o);
                    return a & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : a & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0
                })
            }
            "undefined" != typeof window && "undefined" != typeof document && (document.addEventListener("keydown", e => {
                e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "")
            }, !0), document.addEventListener("click", e => {
                1 === e.detail ? delete document.documentElement.dataset.headlessuiFocusVisible : 0 === e.detail && (document.documentElement.dataset.headlessuiFocusVisible = "")
            }, !0));
            var D = r(31948);

            function L(e, t, r) {
                let n = (0, D.E)(t);
                (0, p.useEffect)(() => {
                    function t(e) {
                        n.current(e)
                    }
                    return document.addEventListener(e, t, r), () => document.removeEventListener(e, t, r)
                }, [e, r])
            }

            function A(e) {
                var t;
                if (e.type) return e.type;
                let r = null != (t = e.as) ? t : "button";
                if ("string" == typeof r && "button" === r.toLowerCase()) return "button"
            }
            var F = r(93689);
            let z = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;

            function B(e) {
                var t, r;
                let n = null != (t = e.innerText) ? t : "",
                    o = e.cloneNode(!0);
                if (!(o instanceof HTMLElement)) return n;
                let a = !1;
                for (let e of o.querySelectorAll('[hidden],[aria-hidden],[role="img"]')) e.remove(), a = !0;
                let l = a ? null != (r = o.innerText) ? r : "" : n;
                return z.test(l) && (l = l.replace(z, "")), l
            }

            function _(e) {
                return [e.screenX, e.screenY]
            }
            var H = r(37863),
                W = ((s = W || {})[s.First = 0] = "First", s[s.Previous = 1] = "Previous", s[s.Next = 2] = "Next", s[s.Last = 3] = "Last", s[s.Specific = 4] = "Specific", s[s.Nothing = 5] = "Nothing", s),
                Y = r(27847),
                G = ((d = G || {}).Space = " ", d.Enter = "Enter", d.Escape = "Escape", d.Backspace = "Backspace", d.Delete = "Delete", d.ArrowLeft = "ArrowLeft", d.ArrowUp = "ArrowUp", d.ArrowRight = "ArrowRight", d.ArrowDown = "ArrowDown", d.Home = "Home", d.End = "End", d.PageUp = "PageUp", d.PageDown = "PageDown", d.Tab = "Tab", d),
                q = ((u = q || {})[u.Open = 0] = "Open", u[u.Closed = 1] = "Closed", u),
                U = ((c = U || {})[c.Pointer = 0] = "Pointer", c[c.Other = 1] = "Other", c),
                V = ((f = V || {})[f.OpenMenu = 0] = "OpenMenu", f[f.CloseMenu = 1] = "CloseMenu", f[f.GoToItem = 2] = "GoToItem", f[f.Search = 3] = "Search", f[f.ClearSearch = 4] = "ClearSearch", f[f.RegisterItem = 5] = "RegisterItem", f[f.UnregisterItem = 6] = "UnregisterItem", f);

            function K(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e => e,
                    r = null !== e.activeItemIndex ? e.items[e.activeItemIndex] : null,
                    n = P(t(e.items.slice()), e => e.dataRef.current.domRef.current),
                    o = r ? n.indexOf(r) : null;
                return -1 === o && (o = null), {
                    items: n,
                    activeItemIndex: o
                }
            }
            let X = {
                    1: e => 1 === e.menuState ? e : { ...e,
                        activeItemIndex: null,
                        menuState: 1
                    },
                    0: e => 0 === e.menuState ? e : { ...e,
                        __demoMode: !1,
                        menuState: 0
                    },
                    2: (e, t) => {
                        var r;
                        let n = K(e),
                            o = function(e, t) {
                                let r = t.resolveItems();
                                if (r.length <= 0) return null;
                                let n = t.resolveActiveIndex(),
                                    o = null != n ? n : -1;
                                switch (e.focus) {
                                    case 0:
                                        for (let e = 0; e < r.length; ++e)
                                            if (!t.resolveDisabled(r[e], e, r)) return e;
                                        return n;
                                    case 1:
                                        for (let e = o - 1; e >= 0; --e)
                                            if (!t.resolveDisabled(r[e], e, r)) return e;
                                        return n;
                                    case 2:
                                        for (let e = o + 1; e < r.length; ++e)
                                            if (!t.resolveDisabled(r[e], e, r)) return e;
                                        return n;
                                    case 3:
                                        for (let e = r.length - 1; e >= 0; --e)
                                            if (!t.resolveDisabled(r[e], e, r)) return e;
                                        return n;
                                    case 4:
                                        for (let n = 0; n < r.length; ++n)
                                            if (t.resolveId(r[n], n, r) === e.id) return n;
                                        return n;
                                    case 5:
                                        return null;
                                    default:
                                        ! function(e) {
                                            throw Error("Unexpected object: " + e)
                                        }(e)
                                }
                            }(t, {
                                resolveItems: () => n.items,
                                resolveActiveIndex: () => n.activeItemIndex,
                                resolveId: e => e.id,
                                resolveDisabled: e => e.dataRef.current.disabled
                            });
                        return { ...e,
                            ...n,
                            searchQuery: "",
                            activeItemIndex: o,
                            activationTrigger: null != (r = t.trigger) ? r : 1
                        }
                    },
                    3: (e, t) => {
                        let r = "" !== e.searchQuery ? 0 : 1,
                            n = e.searchQuery + t.value.toLowerCase(),
                            o = (null !== e.activeItemIndex ? e.items.slice(e.activeItemIndex + r).concat(e.items.slice(0, e.activeItemIndex + r)) : e.items).find(e => {
                                var t;
                                return (null == (t = e.dataRef.current.textValue) ? void 0 : t.startsWith(n)) && !e.dataRef.current.disabled
                            }),
                            a = o ? e.items.indexOf(o) : -1;
                        return -1 === a || a === e.activeItemIndex ? { ...e,
                            searchQuery: n
                        } : { ...e,
                            searchQuery: n,
                            activeItemIndex: a,
                            activationTrigger: 1
                        }
                    },
                    4: e => "" === e.searchQuery ? e : { ...e,
                        searchQuery: "",
                        searchActiveItemIndex: null
                    },
                    5: (e, t) => {
                        let r = K(e, e => [...e, {
                            id: t.id,
                            dataRef: t.dataRef
                        }]);
                        return { ...e,
                            ...r
                        }
                    },
                    6: (e, t) => {
                        let r = K(e, e => {
                            let r = e.findIndex(e => e.id === t.id);
                            return -1 !== r && e.splice(r, 1), e
                        });
                        return { ...e,
                            ...r,
                            activationTrigger: 1
                        }
                    }
                },
                $ = (0, p.createContext)(null);

            function Z(e) {
                let t = (0, p.useContext)($);
                if (null === t) {
                    let t = Error("<".concat(e, " /> is missing a parent <Menu /> component."));
                    throw Error.captureStackTrace && Error.captureStackTrace(t, Z), t
                }
                return t
            }

            function Q(e, t) {
                return (0, k.E)(t.type, X, e, t)
            }
            $.displayName = "MenuContext";
            let J = p.Fragment,
                ee = Y.AN.RenderStrategy | Y.AN.Static,
                et = p.Fragment,
                er = Object.assign((0, Y.yV)(function(e, t) {
                    let {
                        __demoMode: r = !1,
                        ...n
                    } = e, o = (0, p.useReducer)(Q, {
                        __demoMode: r,
                        menuState: r ? 0 : 1,
                        buttonRef: (0, p.createRef)(),
                        itemsRef: (0, p.createRef)(),
                        items: [],
                        searchQuery: "",
                        activeItemIndex: null,
                        activationTrigger: 1
                    }), [{
                        menuState: a,
                        itemsRef: l,
                        buttonRef: i
                    }, s] = o, d = (0, F.T)(t);
                    ! function(e, t) {
                        var r, n;
                        let o, a = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                            l = (0, p.useRef)(!1);

                        function i(r, n) {
                            if (!l.current || r.defaultPrevented) return;
                            let o = n(r);
                            if (null !== o && o.getRootNode().contains(o) && o.isConnected) {
                                for (let t of function e(t) {
                                        return "function" == typeof t ? e(t()) : Array.isArray(t) || t instanceof Set ? t : [t]
                                    }(e)) {
                                    if (null === t) continue;
                                    let e = t instanceof HTMLElement ? t : t.current;
                                    if (null != e && e.contains(o) || r.composed && r.composedPath().includes(e)) return
                                }
                                return R(o, S.Loose) || -1 === o.tabIndex || r.preventDefault(), t(r, o)
                            }
                        }(0, p.useEffect)(() => {
                            requestAnimationFrame(() => {
                                l.current = a
                            })
                        }, [a]);
                        let s = (0, p.useRef)(null);
                        L("pointerdown", e => {
                            var t, r;
                            l.current && (s.current = (null == (r = null == (t = e.composedPath) ? void 0 : t.call(e)) ? void 0 : r[0]) || e.target)
                        }, !0), L("mousedown", e => {
                            var t, r;
                            l.current && (s.current = (null == (r = null == (t = e.composedPath) ? void 0 : t.call(e)) ? void 0 : r[0]) || e.target)
                        }, !0), L("click", e => {
                            /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0 || /Android/gi.test(window.navigator.userAgent) || s.current && (i(e, () => s.current), s.current = null)
                        }, !0), L("touchend", e => i(e, () => e.target instanceof HTMLElement ? e.target : null), !0), r = "blur", n = e => i(e, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), o = (0, D.E)(n), (0, p.useEffect)(() => {
                            function e(e) {
                                o.current(e)
                            }
                            return window.addEventListener(r, e, !0), () => window.removeEventListener(r, e, !0)
                        }, [r, !0])
                    }([i, l], (e, t) => {
                        var r;
                        s({
                            type: 1
                        }), R(t, S.Loose) || (e.preventDefault(), null == (r = i.current) || r.focus())
                    }, 0 === a);
                    let u = (0, m.z)(() => {
                            s({
                                type: 1
                            })
                        }),
                        c = (0, p.useMemo)(() => ({
                            open: 0 === a,
                            close: u
                        }), [a, u]);
                    return p.createElement($.Provider, {
                        value: o
                    }, p.createElement(H.up, {
                        value: (0, k.E)(a, {
                            0: H.ZM.Open,
                            1: H.ZM.Closed
                        })
                    }, (0, Y.sY)({
                        ourProps: {
                            ref: d
                        },
                        theirProps: n,
                        slot: c,
                        defaultTag: J,
                        name: "Menu"
                    })))
                }), {
                    Button: (0, Y.yV)(function(e, t) {
                        var r;
                        let n = x(),
                            {
                                id: o = "headlessui-menu-button-".concat(n),
                                ...a
                            } = e,
                            [l, i] = Z("Menu.Button"),
                            s = (0, F.T)(l.buttonRef, t),
                            d = (0, b.G)(),
                            u = (0, m.z)(e => {
                                switch (e.key) {
                                    case G.Space:
                                    case G.Enter:
                                    case G.ArrowDown:
                                        e.preventDefault(), e.stopPropagation(), i({
                                            type: 0
                                        }), d.nextFrame(() => i({
                                            type: 2,
                                            focus: W.First
                                        }));
                                        break;
                                    case G.ArrowUp:
                                        e.preventDefault(), e.stopPropagation(), i({
                                            type: 0
                                        }), d.nextFrame(() => i({
                                            type: 2,
                                            focus: W.Last
                                        }))
                                }
                            }),
                            c = (0, m.z)(e => {
                                e.key === G.Space && e.preventDefault()
                            }),
                            f = (0, m.z)(t => {
                                if (function(e) {
                                        let t = e.parentElement,
                                            r = null;
                                        for (; t && !(t instanceof HTMLFieldSetElement);) t instanceof HTMLLegendElement && (r = t), t = t.parentElement;
                                        let n = (null == t ? void 0 : t.getAttribute("disabled")) === "";
                                        return !(n && function(e) {
                                            if (!e) return !1;
                                            let t = e.previousElementSibling;
                                            for (; null !== t;) {
                                                if (t instanceof HTMLLegendElement) return !1;
                                                t = t.previousElementSibling
                                            }
                                            return !0
                                        }(r)) && n
                                    }(t.currentTarget)) return t.preventDefault();
                                e.disabled || (0 === l.menuState ? (i({
                                    type: 1
                                }), d.nextFrame(() => {
                                    var e;
                                    return null == (e = l.buttonRef.current) ? void 0 : e.focus({
                                        preventScroll: !0
                                    })
                                })) : (t.preventDefault(), i({
                                    type: 0
                                })))
                            }),
                            g = (0, p.useMemo)(() => ({
                                open: 0 === l.menuState
                            }), [l]),
                            h = {
                                ref: s,
                                id: o,
                                type: function(e, t) {
                                    let [r, n] = (0, p.useState)(() => A(e));
                                    return (0, y.e)(() => {
                                        n(A(e))
                                    }, [e.type, e.as]), (0, y.e)(() => {
                                        r || t.current && t.current instanceof HTMLButtonElement && !t.current.hasAttribute("type") && n("button")
                                    }, [r, t]), r
                                }(e, l.buttonRef),
                                "aria-haspopup": "menu",
                                "aria-controls": null == (r = l.itemsRef.current) ? void 0 : r.id,
                                "aria-expanded": 0 === l.menuState,
                                onKeyDown: u,
                                onKeyUp: c,
                                onClick: f
                            };
                        return (0, Y.sY)({
                            ourProps: h,
                            theirProps: a,
                            slot: g,
                            defaultTag: "button",
                            name: "Menu.Button"
                        })
                    }),
                    Items: (0, Y.yV)(function(e, t) {
                        var r, n;
                        let o = x(),
                            {
                                id: a = "headlessui-menu-items-".concat(o),
                                ...l
                            } = e,
                            [i, s] = Z("Menu.Items"),
                            d = (0, F.T)(i.itemsRef, t),
                            u = function() {
                                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                                return (0, p.useMemo)(() => E(...t), [...t])
                            }(i.itemsRef),
                            c = (0, b.G)(),
                            f = (0, H.oJ)(),
                            g = null !== f ? (f & H.ZM.Open) === H.ZM.Open : 0 === i.menuState;
                        (0, p.useEffect)(() => {
                            let e = i.itemsRef.current;
                            e && 0 === i.menuState && e !== (null == u ? void 0 : u.activeElement) && e.focus({
                                preventScroll: !0
                            })
                        }, [i.menuState, i.itemsRef, u]),
                        function(e) {
                            let {
                                container: t,
                                accept: r,
                                walk: n,
                                enabled: o = !0
                            } = e, a = (0, p.useRef)(r), l = (0, p.useRef)(n);
                            (0, p.useEffect)(() => {
                                a.current = r, l.current = n
                            }, [r, n]), (0, y.e)(() => {
                                if (!t || !o) return;
                                let e = E(t);
                                if (!e) return;
                                let r = a.current,
                                    n = l.current,
                                    i = Object.assign(e => r(e), {
                                        acceptNode: r
                                    }),
                                    s = e.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, i, !1);
                                for (; s.nextNode();) n(s.currentNode)
                            }, [t, o, a, l])
                        }({
                            container: i.itemsRef.current,
                            enabled: 0 === i.menuState,
                            accept: e => "menuitem" === e.getAttribute("role") ? NodeFilter.FILTER_REJECT : e.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT,
                            walk(e) {
                                e.setAttribute("role", "none")
                            }
                        });
                        let h = (0, m.z)(e => {
                                var t, r;
                                switch (c.dispose(), e.key) {
                                    case G.Space:
                                        if ("" !== i.searchQuery) return e.preventDefault(), e.stopPropagation(), s({
                                            type: 3,
                                            value: e.key
                                        });
                                    case G.Enter:
                                        if (e.preventDefault(), e.stopPropagation(), s({
                                                type: 1
                                            }), null !== i.activeItemIndex) {
                                            let {
                                                dataRef: e
                                            } = i.items[i.activeItemIndex];
                                            null == (r = null == (t = e.current) ? void 0 : t.domRef.current) || r.click()
                                        }
                                        I(i.buttonRef.current);
                                        break;
                                    case G.ArrowDown:
                                        return e.preventDefault(), e.stopPropagation(), s({
                                            type: 2,
                                            focus: W.Next
                                        });
                                    case G.ArrowUp:
                                        return e.preventDefault(), e.stopPropagation(), s({
                                            type: 2,
                                            focus: W.Previous
                                        });
                                    case G.Home:
                                    case G.PageUp:
                                        return e.preventDefault(), e.stopPropagation(), s({
                                            type: 2,
                                            focus: W.First
                                        });
                                    case G.End:
                                    case G.PageDown:
                                        return e.preventDefault(), e.stopPropagation(), s({
                                            type: 2,
                                            focus: W.Last
                                        });
                                    case G.Escape:
                                        e.preventDefault(), e.stopPropagation(), s({
                                            type: 1
                                        }), (0, w.k)().nextFrame(() => {
                                            var e;
                                            return null == (e = i.buttonRef.current) ? void 0 : e.focus({
                                                preventScroll: !0
                                            })
                                        });
                                        break;
                                    case G.Tab:
                                        e.preventDefault(), e.stopPropagation(), s({
                                            type: 1
                                        }), (0, w.k)().nextFrame(() => {
                                            var t, r;
                                            t = i.buttonRef.current, r = e.shiftKey ? j.Previous : j.Next,
                                                function(e, t) {
                                                    var r, n, o;
                                                    let {
                                                        sorted: a = !0,
                                                        relativeTo: l = null,
                                                        skipElements: i = []
                                                    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, s = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument, d = Array.isArray(e) ? a ? P(e) : e : M(e);
                                                    i.length > 0 && d.length > 1 && (d = d.filter(e => !i.includes(e))), l = null != l ? l : s.activeElement;
                                                    let u = (() => {
                                                            if (5 & t) return 1;
                                                            if (10 & t) return -1;
                                                            throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
                                                        })(),
                                                        c = (() => {
                                                            if (1 & t) return 0;
                                                            if (2 & t) return Math.max(0, d.indexOf(l)) - 1;
                                                            if (4 & t) return Math.max(0, d.indexOf(l)) + 1;
                                                            if (8 & t) return d.length - 1;
                                                            throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
                                                        })(),
                                                        f = 32 & t ? {
                                                            preventScroll: !0
                                                        } : {},
                                                        g = 0,
                                                        p = d.length,
                                                        b;
                                                    do {
                                                        if (g >= p || g + p <= 0) return 0;
                                                        let e = c + g;
                                                        if (16 & t) e = (e + p) % p;
                                                        else {
                                                            if (e < 0) return 3;
                                                            if (e >= p) return 1
                                                        }
                                                        null == (b = d[e]) || b.focus(f), g += u
                                                    } while (b !== s.activeElement);
                                                    6 & t && null != (o = null == (n = null == (r = b) ? void 0 : r.matches) ? void 0 : n.call(r, "textarea,input")) && o && b.select()
                                                }(M(), r, {
                                                    relativeTo: t
                                                })
                                        });
                                        break;
                                    default:
                                        1 === e.key.length && (s({
                                            type: 3,
                                            value: e.key
                                        }), c.setTimeout(() => s({
                                            type: 4
                                        }), 350))
                                }
                            }),
                            v = (0, m.z)(e => {
                                e.key === G.Space && e.preventDefault()
                            }),
                            k = (0, p.useMemo)(() => ({
                                open: 0 === i.menuState
                            }), [i]),
                            N = {
                                "aria-activedescendant": null === i.activeItemIndex || null == (r = i.items[i.activeItemIndex]) ? void 0 : r.id,
                                "aria-labelledby": null == (n = i.buttonRef.current) ? void 0 : n.id,
                                id: a,
                                onKeyDown: h,
                                onKeyUp: v,
                                role: "menu",
                                tabIndex: 0,
                                ref: d
                            };
                        return (0, Y.sY)({
                            ourProps: N,
                            theirProps: l,
                            slot: k,
                            defaultTag: "div",
                            features: ee,
                            visible: g,
                            name: "Menu.Items"
                        })
                    }),
                    Item: (0, Y.yV)(function(e, t) {
                        let r, n, o, a = x(),
                            {
                                id: l = "headlessui-menu-item-".concat(a),
                                disabled: i = !1,
                                ...s
                            } = e,
                            [d, u] = Z("Menu.Item"),
                            c = null !== d.activeItemIndex && d.items[d.activeItemIndex].id === l,
                            f = (0, p.useRef)(null),
                            g = (0, F.T)(t, f);
                        (0, y.e)(() => {
                            if (d.__demoMode || 0 !== d.menuState || !c || 0 === d.activationTrigger) return;
                            let e = (0, w.k)();
                            return e.requestAnimationFrame(() => {
                                var e, t;
                                null == (t = null == (e = f.current) ? void 0 : e.scrollIntoView) || t.call(e, {
                                    block: "nearest"
                                })
                            }), e.dispose
                        }, [d.__demoMode, f, c, d.menuState, d.activationTrigger, d.activeItemIndex]);
                        let b = (r = (0, p.useRef)(""), n = (0, p.useRef)(""), (0, m.z)(() => {
                                let e = f.current;
                                if (!e) return "";
                                let t = e.innerText;
                                if (r.current === t) return n.current;
                                let o = (function(e) {
                                    let t = e.getAttribute("aria-label");
                                    if ("string" == typeof t) return t.trim();
                                    let r = e.getAttribute("aria-labelledby");
                                    if (r) {
                                        let e = r.split(" ").map(e => {
                                            let t = document.getElementById(e);
                                            if (t) {
                                                let e = t.getAttribute("aria-label");
                                                return "string" == typeof e ? e.trim() : B(t).trim()
                                            }
                                            return null
                                        }).filter(Boolean);
                                        if (e.length > 0) return e.join(", ")
                                    }
                                    return B(e).trim()
                                })(e).trim().toLowerCase();
                                return r.current = t, n.current = o, o
                            })),
                            h = (0, p.useRef)({
                                disabled: i,
                                domRef: f,
                                get textValue() {
                                    return b()
                                }
                            });
                        (0, y.e)(() => {
                            h.current.disabled = i
                        }, [h, i]), (0, y.e)(() => (u({
                            type: 5,
                            id: l,
                            dataRef: h
                        }), () => u({
                            type: 6,
                            id: l
                        })), [h, l]);
                        let v = (0, m.z)(() => {
                                u({
                                    type: 1
                                })
                            }),
                            k = (0, m.z)(e => {
                                if (i) return e.preventDefault();
                                u({
                                    type: 1
                                }), I(d.buttonRef.current)
                            }),
                            E = (0, m.z)(() => {
                                if (i) return u({
                                    type: 2,
                                    focus: W.Nothing
                                });
                                u({
                                    type: 2,
                                    focus: W.Specific,
                                    id: l
                                })
                            }),
                            N = (o = (0, p.useRef)([-1, -1]), {
                                wasMoved(e) {
                                    let t = _(e);
                                    return (o.current[0] !== t[0] || o.current[1] !== t[1]) && (o.current = t, !0)
                                },
                                update(e) {
                                    o.current = _(e)
                                }
                            }),
                            j = (0, m.z)(e => N.update(e)),
                            C = (0, m.z)(e => {
                                N.wasMoved(e) && (i || c || u({
                                    type: 2,
                                    focus: W.Specific,
                                    id: l,
                                    trigger: 0
                                }))
                            }),
                            T = (0, m.z)(e => {
                                N.wasMoved(e) && (i || c && u({
                                    type: 2,
                                    focus: W.Nothing
                                }))
                            }),
                            M = (0, p.useMemo)(() => ({
                                active: c,
                                disabled: i,
                                close: v
                            }), [c, i, v]);
                        return (0, Y.sY)({
                            ourProps: {
                                id: l,
                                ref: g,
                                role: "menuitem",
                                tabIndex: !0 === i ? void 0 : -1,
                                "aria-disabled": !0 === i || void 0,
                                disabled: void 0,
                                onClick: k,
                                onFocus: E,
                                onPointerEnter: j,
                                onMouseEnter: j,
                                onPointerMove: C,
                                onMouseMove: C,
                                onPointerLeave: T,
                                onMouseLeave: T
                            },
                            theirProps: s,
                            slot: M,
                            defaultTag: et,
                            name: "Menu.Item"
                        })
                    })
                })
        },
        24786: function(e, t, r) {
            "use strict";
            let n;
            r.d(t, {
                u: function() {
                    return O
                }
            });
            var o = r(2265),
                a = r(90945),
                l = r(13323),
                i = r(64518);

            function s() {
                let e = (0, o.useRef)(!1);
                return (0, i.e)(() => (e.current = !0, () => {
                    e.current = !1
                }), []), e
            }
            var d = r(31948),
                u = r(72238),
                c = r(93689),
                f = r(29846),
                g = r(24536);

            function p(e) {
                for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
                e && r.length > 0 && e.classList.add(...r)
            }

            function b(e) {
                for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
                e && r.length > 0 && e.classList.remove(...r)
            }
            var m = r(37863),
                h = r(42120),
                y = r(27847);

            function v() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                return e.split(/\s+/).filter(e => e.length > 1)
            }
            let x = (0, o.createContext)(null);
            x.displayName = "TransitionContext";
            var w = ((n = w || {}).Visible = "visible", n.Hidden = "hidden", n);
            let k = (0, o.createContext)(null);

            function E(e) {
                return "children" in e ? E(e.children) : e.current.filter(e => {
                    let {
                        el: t
                    } = e;
                    return null !== t.current
                }).filter(e => {
                    let {
                        state: t
                    } = e;
                    return "visible" === t
                }).length > 0
            }

            function N(e, t) {
                let r = (0, d.E)(e),
                    n = (0, o.useRef)([]),
                    i = s(),
                    u = (0, a.G)(),
                    c = (0, l.z)(function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : y.l4.Hidden,
                            o = n.current.findIndex(t => {
                                let {
                                    el: r
                                } = t;
                                return r === e
                            }); - 1 !== o && ((0, g.E)(t, {
                            [y.l4.Unmount]() {
                                n.current.splice(o, 1)
                            },
                            [y.l4.Hidden]() {
                                n.current[o].state = "hidden"
                            }
                        }), u.microTask(() => {
                            var e;
                            !E(n) && i.current && (null == (e = r.current) || e.call(r))
                        }))
                    }),
                    f = (0, l.z)(e => {
                        let t = n.current.find(t => {
                            let {
                                el: r
                            } = t;
                            return r === e
                        });
                        return t ? "visible" !== t.state && (t.state = "visible") : n.current.push({
                            el: e,
                            state: "visible"
                        }), () => c(e, y.l4.Unmount)
                    }),
                    p = (0, o.useRef)([]),
                    b = (0, o.useRef)(Promise.resolve()),
                    m = (0, o.useRef)({
                        enter: [],
                        leave: [],
                        idle: []
                    }),
                    h = (0, l.z)((e, r, n) => {
                        p.current.splice(0), t && (t.chains.current[r] = t.chains.current[r].filter(t => {
                            let [r] = t;
                            return r !== e
                        })), null == t || t.chains.current[r].push([e, new Promise(e => {
                            p.current.push(e)
                        })]), null == t || t.chains.current[r].push([e, new Promise(e => {
                            Promise.all(m.current[r].map(e => {
                                let [t, r] = e;
                                return r
                            })).then(() => e())
                        })]), "enter" === r ? b.current = b.current.then(() => null == t ? void 0 : t.wait.current).then(() => n(r)) : n(r)
                    }),
                    v = (0, l.z)((e, t, r) => {
                        Promise.all(m.current[t].splice(0).map(e => {
                            let [t, r] = e;
                            return r
                        })).then(() => {
                            var e;
                            null == (e = p.current.shift()) || e()
                        }).then(() => r(t))
                    });
                return (0, o.useMemo)(() => ({
                    children: n,
                    register: f,
                    unregister: c,
                    onStart: h,
                    onStop: v,
                    wait: b,
                    chains: m
                }), [f, c, n, h, v, m, b])
            }

            function j() {}
            k.displayName = "NestingContext";
            let C = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];

            function T(e) {
                var t;
                let r = {};
                for (let n of C) r[n] = null != (t = e[n]) ? t : j;
                return r
            }
            let M = y.AN.RenderStrategy,
                S = (0, y.yV)(function(e, t) {
                    let {
                        show: r,
                        appear: n = !1,
                        unmount: a = !0,
                        ...s
                    } = e, d = (0, o.useRef)(null), f = (0, c.T)(d, t);
                    (0, u.H)();
                    let g = (0, m.oJ)();
                    if (void 0 === r && null !== g && (r = (g & m.ZM.Open) === m.ZM.Open), ![!0, !1].includes(r)) throw Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
                    let [p, b] = (0, o.useState)(r ? "visible" : "hidden"), h = N(() => {
                        b("hidden")
                    }), [v, w] = (0, o.useState)(!0), j = (0, o.useRef)([r]);
                    (0, i.e)(() => {
                        !1 !== v && j.current[j.current.length - 1] !== r && (j.current.push(r), w(!1))
                    }, [j, r]);
                    let C = (0, o.useMemo)(() => ({
                        show: r,
                        appear: n,
                        initial: v
                    }), [r, n, v]);
                    (0, o.useEffect)(() => {
                        if (r) b("visible");
                        else if (E(h)) {
                            let e = d.current;
                            if (!e) return;
                            let t = e.getBoundingClientRect();
                            0 === t.x && 0 === t.y && 0 === t.width && 0 === t.height && b("hidden")
                        } else b("hidden")
                    }, [r, h]);
                    let T = {
                            unmount: a
                        },
                        S = (0, l.z)(() => {
                            var t;
                            v && w(!1), null == (t = e.beforeEnter) || t.call(e)
                        }),
                        I = (0, l.z)(() => {
                            var t;
                            v && w(!1), null == (t = e.beforeLeave) || t.call(e)
                        });
                    return o.createElement(k.Provider, {
                        value: h
                    }, o.createElement(x.Provider, {
                        value: C
                    }, (0, y.sY)({
                        ourProps: { ...T,
                            as: o.Fragment,
                            children: o.createElement(R, {
                                ref: f,
                                ...T,
                                ...s,
                                beforeEnter: S,
                                beforeLeave: I
                            })
                        },
                        theirProps: {},
                        defaultTag: o.Fragment,
                        features: M,
                        visible: "visible" === p,
                        name: "Transition"
                    })))
                }),
                R = (0, y.yV)(function(e, t) {
                    var r, n, w;
                    let j;
                    let {
                        beforeEnter: C,
                        afterEnter: S,
                        beforeLeave: R,
                        afterLeave: I,
                        enter: O,
                        enterFrom: P,
                        enterTo: D,
                        entered: L,
                        leave: A,
                        leaveFrom: F,
                        leaveTo: z,
                        ...B
                    } = e, _ = (0, o.useRef)(null), H = (0, c.T)(_, t), W = null == (r = B.unmount) || r ? y.l4.Unmount : y.l4.Hidden, {
                        show: Y,
                        appear: G,
                        initial: q
                    } = function() {
                        let e = (0, o.useContext)(x);
                        if (null === e) throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
                        return e
                    }(), [U, V] = (0, o.useState)(Y ? "visible" : "hidden"), K = function() {
                        let e = (0, o.useContext)(k);
                        if (null === e) throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
                        return e
                    }(), {
                        register: X,
                        unregister: $
                    } = K;
                    (0, o.useEffect)(() => X(_), [X, _]), (0, o.useEffect)(() => {
                        if (W === y.l4.Hidden && _.current) {
                            if (Y && "visible" !== U) {
                                V("visible");
                                return
                            }
                            return (0, g.E)(U, {
                                hidden: () => $(_),
                                visible: () => X(_)
                            })
                        }
                    }, [U, _, X, $, Y, W]);
                    let Z = (0, d.E)({
                            base: v(B.className),
                            enter: v(O),
                            enterFrom: v(P),
                            enterTo: v(D),
                            entered: v(L),
                            leave: v(A),
                            leaveFrom: v(F),
                            leaveTo: v(z)
                        }),
                        Q = (w = {
                            beforeEnter: C,
                            afterEnter: S,
                            beforeLeave: R,
                            afterLeave: I
                        }, j = (0, o.useRef)(T(w)), (0, o.useEffect)(() => {
                            j.current = T(w)
                        }, [w]), j),
                        J = (0, u.H)();
                    (0, o.useEffect)(() => {
                        if (J && "visible" === U && null === _.current) throw Error("Did you forget to passthrough the `ref` to the actual DOM node?")
                    }, [_, U, J]);
                    let ee = G && Y && q,
                        et = J && (!q || G) ? Y ? "enter" : "leave" : "idle",
                        er = function() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                [t, r] = (0, o.useState)(e),
                                n = s(),
                                a = (0, o.useCallback)(e => {
                                    n.current && r(t => t | e)
                                }, [t, n]),
                                l = (0, o.useCallback)(e => !!(t & e), [t]);
                            return {
                                flags: t,
                                addFlag: a,
                                hasFlag: l,
                                removeFlag: (0, o.useCallback)(e => {
                                    n.current && r(t => t & ~e)
                                }, [r, n]),
                                toggleFlag: (0, o.useCallback)(e => {
                                    n.current && r(t => t ^ e)
                                }, [r])
                            }
                        }(0),
                        en = (0, l.z)(e => (0, g.E)(e, {
                            enter: () => {
                                er.addFlag(m.ZM.Opening), Q.current.beforeEnter()
                            },
                            leave: () => {
                                er.addFlag(m.ZM.Closing), Q.current.beforeLeave()
                            },
                            idle: () => {}
                        })),
                        eo = (0, l.z)(e => (0, g.E)(e, {
                            enter: () => {
                                er.removeFlag(m.ZM.Opening), Q.current.afterEnter()
                            },
                            leave: () => {
                                er.removeFlag(m.ZM.Closing), Q.current.afterLeave()
                            },
                            idle: () => {}
                        })),
                        ea = N(() => {
                            V("hidden"), $(_)
                        }, K),
                        el = (0, o.useRef)(!1);
                    ! function(e) {
                        let {
                            immediate: t,
                            container: r,
                            direction: n,
                            classes: o,
                            onStart: l,
                            onStop: u
                        } = e, c = s(), m = (0, a.G)(), h = (0, d.E)(n);
                        (0, i.e)(() => {
                            t && (h.current = "enter")
                        }, [t]), (0, i.e)(() => {
                            let e = (0, f.k)();
                            m.add(e.dispose);
                            let t = r.current;
                            if (t && "idle" !== h.current && c.current) {
                                var n, a, i;
                                let r, s, d, c, m, y, v;
                                return e.dispose(), l.current(h.current), e.add((n = o.current, a = "enter" === h.current, i = () => {
                                    e.dispose(), u.current(h.current)
                                }, s = a ? "enter" : "leave", d = (0, f.k)(), c = void 0 !== i ? (r = {
                                    called: !1
                                }, function() {
                                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                    if (!r.called) return r.called = !0, i(...t)
                                }) : () => {}, "enter" === s && (t.removeAttribute("hidden"), t.style.display = ""), m = (0, g.E)(s, {
                                    enter: () => n.enter,
                                    leave: () => n.leave
                                }), y = (0, g.E)(s, {
                                    enter: () => n.enterTo,
                                    leave: () => n.leaveTo
                                }), v = (0, g.E)(s, {
                                    enter: () => n.enterFrom,
                                    leave: () => n.leaveFrom
                                }), b(t, ...n.base, ...n.enter, ...n.enterTo, ...n.enterFrom, ...n.leave, ...n.leaveFrom, ...n.leaveTo, ...n.entered), p(t, ...n.base, ...m, ...v), d.nextFrame(() => {
                                    b(t, ...n.base, ...m, ...v), p(t, ...n.base, ...m, ...y),
                                        function(e, t) {
                                            let r = (0, f.k)();
                                            if (!e) return r.dispose;
                                            let {
                                                transitionDuration: n,
                                                transitionDelay: o
                                            } = getComputedStyle(e), [a, l] = [n, o].map(e => {
                                                let [t = 0] = e.split(",").filter(Boolean).map(e => e.includes("ms") ? parseFloat(e) : 1e3 * parseFloat(e)).sort((e, t) => t - e);
                                                return t
                                            }), i = a + l;
                                            if (0 !== i) {
                                                r.group(r => {
                                                    r.setTimeout(() => {
                                                        t(), r.dispose()
                                                    }, i), r.addEventListener(e, "transitionrun", e => {
                                                        e.target === e.currentTarget && r.dispose()
                                                    })
                                                });
                                                let n = r.addEventListener(e, "transitionend", e => {
                                                    e.target === e.currentTarget && (t(), n())
                                                })
                                            } else t();
                                            r.add(() => t()), r.dispose
                                        }(t, () => (b(t, ...n.base, ...m), p(t, ...n.base, ...n.entered), c()))
                                }), d.dispose)), e.dispose
                            }
                        }, [n])
                    }({
                        immediate: ee,
                        container: _,
                        classes: Z,
                        direction: et,
                        onStart: (0, d.E)(e => {
                            el.current = !0, ea.onStart(_, e, en)
                        }),
                        onStop: (0, d.E)(e => {
                            el.current = !1, ea.onStop(_, e, eo), "leave" !== e || E(ea) || (V("hidden"), $(_))
                        })
                    });
                    let ei = B;
                    return ee ? ei = { ...ei,
                        className: (0, h.A)(B.className, ...Z.current.enter, ...Z.current.enterFrom)
                    } : el.current && (ei.className = (0, h.A)(B.className, null == (n = _.current) ? void 0 : n.className), "" === ei.className && delete ei.className), o.createElement(k.Provider, {
                        value: ea
                    }, o.createElement(m.up, {
                        value: (0, g.E)(U, {
                            visible: m.ZM.Open,
                            hidden: m.ZM.Closed
                        }) | er.flags
                    }, (0, y.sY)({
                        ourProps: {
                            ref: H
                        },
                        theirProps: ei,
                        defaultTag: "div",
                        features: M,
                        visible: "visible" === U,
                        name: "Transition.Child"
                    })))
                }),
                I = (0, y.yV)(function(e, t) {
                    let r = null !== (0, o.useContext)(x),
                        n = null !== (0, m.oJ)();
                    return o.createElement(o.Fragment, null, !r && n ? o.createElement(S, {
                        ref: t,
                        ...e
                    }) : o.createElement(R, {
                        ref: t,
                        ...e
                    }))
                }),
                O = Object.assign(S, {
                    Child: I,
                    Root: S
                })
        },
        90945: function(e, t, r) {
            "use strict";
            r.d(t, {
                G: function() {
                    return a
                }
            });
            var n = r(2265),
                o = r(29846);

            function a() {
                let [e] = (0, n.useState)(o.k);
                return (0, n.useEffect)(() => () => e.dispose(), [e]), e
            }
        },
        13323: function(e, t, r) {
            "use strict";
            r.d(t, {
                z: function() {
                    return a
                }
            });
            var n = r(2265),
                o = r(31948);
            let a = function(e) {
                let t = (0, o.E)(e);
                return n.useCallback(function() {
                    for (var e = arguments.length, r = Array(e), n = 0; n < e; n++) r[n] = arguments[n];
                    return t.current(...r)
                }, [t])
            }
        },
        64518: function(e, t, r) {
            "use strict";
            r.d(t, {
                e: function() {
                    return a
                }
            });
            var n = r(2265),
                o = r(61424);
            let a = (e, t) => {
                o.O.isServer ? (0, n.useEffect)(e, t) : (0, n.useLayoutEffect)(e, t)
            }
        },
        31948: function(e, t, r) {
            "use strict";
            r.d(t, {
                E: function() {
                    return a
                }
            });
            var n = r(2265),
                o = r(64518);

            function a(e) {
                let t = (0, n.useRef)(e);
                return (0, o.e)(() => {
                    t.current = e
                }, [e]), t
            }
        },
        72238: function(e, t, r) {
            "use strict";
            r.d(t, {
                H: function() {
                    return l
                }
            });
            var n, o = r(2265),
                a = r(61424);

            function l() {
                let e;
                let t = (e = "undefined" == typeof document, (0, (n || (n = r.t(o, 2))).useSyncExternalStore)(() => () => {}, () => !1, () => !e)),
                    [l, i] = o.useState(a.O.isHandoffComplete);
                return l && !1 === a.O.isHandoffComplete && i(!1), o.useEffect(() => {
                    !0 !== l && i(!0)
                }, [l]), o.useEffect(() => a.O.handoff(), []), !t && l
            }
        },
        93689: function(e, t, r) {
            "use strict";
            r.d(t, {
                T: function() {
                    return l
                }
            });
            var n = r(2265),
                o = r(13323);
            let a = Symbol();

            function l() {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                let l = (0, n.useRef)(t);
                (0, n.useEffect)(() => {
                    l.current = t
                }, [t]);
                let i = (0, o.z)(e => {
                    for (let t of l.current) null != t && ("function" == typeof t ? t(e) : t.current = e)
                });
                return t.every(e => null == e || (null == e ? void 0 : e[a])) ? void 0 : i
            }
        },
        37863: function(e, t, r) {
            "use strict";
            let n;
            r.d(t, {
                ZM: function() {
                    return l
                },
                oJ: function() {
                    return i
                },
                up: function() {
                    return s
                }
            });
            var o = r(2265);
            let a = (0, o.createContext)(null);
            a.displayName = "OpenClosedContext";
            var l = ((n = l || {})[n.Open = 1] = "Open", n[n.Closed = 2] = "Closed", n[n.Closing = 4] = "Closing", n[n.Opening = 8] = "Opening", n);

            function i() {
                return (0, o.useContext)(a)
            }

            function s(e) {
                let {
                    value: t,
                    children: r
                } = e;
                return o.createElement(a.Provider, {
                    value: t
                }, r)
            }
        },
        42120: function(e, t, r) {
            "use strict";

            function n() {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                return Array.from(new Set(t.flatMap(e => "string" == typeof e ? e.split(" ") : []))).filter(Boolean).join(" ")
            }
            r.d(t, {
                A: function() {
                    return n
                }
            })
        },
        29846: function(e, t, r) {
            "use strict";
            r.d(t, {
                k: function() {
                    return function e() {
                        let t = [],
                            r = {
                                addEventListener: (e, t, n, o) => (e.addEventListener(t, n, o), r.add(() => e.removeEventListener(t, n, o))),
                                requestAnimationFrame() {
                                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                    let o = requestAnimationFrame(...t);
                                    return r.add(() => cancelAnimationFrame(o))
                                },
                                nextFrame() {
                                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                    return r.requestAnimationFrame(() => r.requestAnimationFrame(...t))
                                },
                                setTimeout() {
                                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                    let o = setTimeout(...t);
                                    return r.add(() => clearTimeout(o))
                                },
                                microTask() {
                                    for (var e, t = arguments.length, n = Array(t), o = 0; o < t; o++) n[o] = arguments[o];
                                    let a = {
                                        current: !0
                                    };
                                    return e = () => {
                                        a.current && n[0]()
                                    }, "function" == typeof queueMicrotask ? queueMicrotask(e) : Promise.resolve().then(e).catch(e => setTimeout(() => {
                                        throw e
                                    })), r.add(() => {
                                        a.current = !1
                                    })
                                },
                                style(e, t, r) {
                                    let n = e.style.getPropertyValue(t);
                                    return Object.assign(e.style, {
                                        [t]: r
                                    }), this.add(() => {
                                        Object.assign(e.style, {
                                            [t]: n
                                        })
                                    })
                                },
                                group(t) {
                                    let r = e();
                                    return t(r), this.add(() => r.dispose())
                                },
                                add: e => (t.push(e), () => {
                                    let r = t.indexOf(e);
                                    if (r >= 0)
                                        for (let e of t.splice(r, 1)) e()
                                }),
                                dispose() {
                                    for (let e of t.splice(0)) e()
                                }
                            };
                        return r
                    }
                }
            })
        },
        61424: function(e, t, r) {
            "use strict";
            r.d(t, {
                O: function() {
                    return i
                }
            });
            var n = Object.defineProperty,
                o = (e, t, r) => t in e ? n(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                a = (e, t, r) => (o(e, "symbol" != typeof t ? t + "" : t, r), r);
            class l {
                set(e) {
                    this.current !== e && (this.handoffState = "pending", this.currentId = 0, this.current = e)
                }
                reset() {
                    this.set(this.detect())
                }
                nextId() {
                    return ++this.currentId
                }
                get isServer() {
                    return "server" === this.current
                }
                get isClient() {
                    return "client" === this.current
                }
                detect() {
                    return "undefined" == typeof window || "undefined" == typeof document ? "server" : "client"
                }
                handoff() {
                    "pending" === this.handoffState && (this.handoffState = "complete")
                }
                get isHandoffComplete() {
                    return "complete" === this.handoffState
                }
                constructor() {
                    a(this, "current", this.detect()), a(this, "handoffState", "pending"), a(this, "currentId", 0)
                }
            }
            let i = new l
        },
        24536: function(e, t, r) {
            "use strict";

            function n(e, t) {
                for (var r = arguments.length, o = Array(r > 2 ? r - 2 : 0), a = 2; a < r; a++) o[a - 2] = arguments[a];
                if (e in t) {
                    let r = t[e];
                    return "function" == typeof r ? r(...o) : r
                }
                let l = Error('Tried to handle "'.concat(e, '" but there is no handler defined. Only defined handlers are: ').concat(Object.keys(t).map(e => '"'.concat(e, '"')).join(", "), "."));
                throw Error.captureStackTrace && Error.captureStackTrace(l, n), l
            }
            r.d(t, {
                E: function() {
                    return n
                }
            })
        },
        27847: function(e, t, r) {
            "use strict";
            let n, o;
            r.d(t, {
                AN: function() {
                    return s
                },
                l4: function() {
                    return d
                },
                sY: function() {
                    return u
                },
                yV: function() {
                    return p
                }
            });
            var a = r(2265),
                l = r(42120),
                i = r(24536),
                s = ((n = s || {})[n.None = 0] = "None", n[n.RenderStrategy = 1] = "RenderStrategy", n[n.Static = 2] = "Static", n),
                d = ((o = d || {})[o.Unmount = 0] = "Unmount", o[o.Hidden = 1] = "Hidden", o);

            function u(e) {
                let {
                    ourProps: t,
                    theirProps: r,
                    slot: n,
                    defaultTag: o,
                    features: a,
                    visible: l = !0,
                    name: s,
                    mergeRefs: d
                } = e;
                d = null != d ? d : f;
                let u = g(r, t);
                if (l) return c(u, n, o, s, d);
                let p = null != a ? a : 0;
                if (2 & p) {
                    let {
                        static: e = !1,
                        ...t
                    } = u;
                    if (e) return c(t, n, o, s, d)
                }
                if (1 & p) {
                    let {
                        unmount: e = !0,
                        ...t
                    } = u;
                    return (0, i.E)(e ? 0 : 1, {
                        0: () => null,
                        1: () => c({ ...t,
                            hidden: !0,
                            style: {
                                display: "none"
                            }
                        }, n, o, s, d)
                    })
                }
                return c(u, n, o, s, d)
            }

            function c(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = arguments.length > 2 ? arguments[2] : void 0,
                    n = arguments.length > 3 ? arguments[3] : void 0,
                    o = arguments.length > 4 ? arguments[4] : void 0,
                    {
                        as: i = r,
                        children: s,
                        refName: d = "ref",
                        ...u
                    } = m(e, ["unmount", "static"]),
                    c = void 0 !== e.ref ? {
                        [d]: e.ref
                    } : {},
                    f = "function" == typeof s ? s(t) : s;
                "className" in u && u.className && "function" == typeof u.className && (u.className = u.className(t));
                let p = {};
                if (t) {
                    let e = !1,
                        r = [];
                    for (let [n, o] of Object.entries(t)) "boolean" == typeof o && (e = !0), !0 === o && r.push(n);
                    e && (p["data-headlessui-state"] = r.join(" "))
                }
                if (i === a.Fragment && Object.keys(b(u)).length > 0) {
                    if (!(0, a.isValidElement)(f) || Array.isArray(f) && f.length > 1) throw Error(['Passing props on "Fragment"!', "", "The current component <".concat(n, ' /> is rendering a "Fragment".'), "However we need to passthrough the following props:", Object.keys(u).map(e => "  - ".concat(e)).join("\n"), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map(e => "  - ".concat(e)).join("\n")].join("\n"));
                    let e = f.props,
                        t = "function" == typeof(null == e ? void 0 : e.className) ? function() {
                            for (var t = arguments.length, r = Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                            return (0, l.A)(null == e ? void 0 : e.className(...r), u.className)
                        } : (0, l.A)(null == e ? void 0 : e.className, u.className);
                    return (0, a.cloneElement)(f, Object.assign({}, g(f.props, b(m(u, ["ref"]))), p, c, {
                        ref: o(f.ref, c.ref)
                    }, t ? {
                        className: t
                    } : {}))
                }
                return (0, a.createElement)(i, Object.assign({}, m(u, ["ref"]), i !== a.Fragment && c, i !== a.Fragment && p), f)
            }

            function f() {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                return t.every(e => null == e) ? void 0 : e => {
                    for (let r of t) null != r && ("function" == typeof r ? r(e) : r.current = e)
                }
            }

            function g() {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                if (0 === t.length) return {};
                if (1 === t.length) return t[0];
                let n = {},
                    o = {};
                for (let e of t)
                    for (let t in e) t.startsWith("on") && "function" == typeof e[t] ? (null != o[t] || (o[t] = []), o[t].push(e[t])) : n[t] = e[t];
                if (n.disabled || n["aria-disabled"]) return Object.assign(n, Object.fromEntries(Object.keys(o).map(e => [e, void 0])));
                for (let e in o) Object.assign(n, {
                    [e](t) {
                        for (var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) n[a - 1] = arguments[a];
                        for (let r of o[e]) {
                            if ((t instanceof Event || (null == t ? void 0 : t.nativeEvent) instanceof Event) && t.defaultPrevented) return;
                            r(t, ...n)
                        }
                    }
                });
                return n
            }

            function p(e) {
                var t;
                return Object.assign((0, a.forwardRef)(e), {
                    displayName: null != (t = e.displayName) ? t : e.name
                })
            }

            function b(e) {
                let t = Object.assign({}, e);
                for (let e in t) void 0 === t[e] && delete t[e];
                return t
            }

            function m(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    r = Object.assign({}, e);
                for (let e of t) e in r && delete r[e];
                return r
            }
        },
        6832: function(e, t, r) {
            "use strict";
            r.d(t, {
                z: function() {
                    return a
                }
            });
            var n = r(2265),
                o = r(15408);

            function a() {
                let {
                    publicKey: e,
                    signTransaction: t,
                    signAllTransactions: r
                } = (0, o.O)();
                return (0, n.useMemo)(() => e && t && r ? {
                    publicKey: e,
                    signTransaction: t,
                    signAllTransactions: r
                } : void 0, [e, t, r])
            }
        },
        58475: function(e, t, r) {
            "use strict";
            let n, o;
            r.d(t, {
                UQ: function() {
                    return ei
                },
                zx: function() {
                    return ey
                },
                u_: function() {
                    return oF
                },
                FN: function() {
                    return aj
                }
            });
            var a, l, i = r(57437),
                s = r(2265),
                d = r.t(s, 2),
                u = r(58073);
            let c = /^\[(.+)\]$/;

            function f(e, t) {
                let r = e;
                return t.split("-").forEach(e => {
                    r.nextPart.has(e) || r.nextPart.set(e, {
                        nextPart: new Map,
                        validators: []
                    }), r = r.nextPart.get(e)
                }), r
            }
            let g = /\s+/;

            function p() {
                let e, t, r = 0,
                    n = "";
                for (; r < arguments.length;)(e = arguments[r++]) && (t = function e(t) {
                    let r;
                    if ("string" == typeof t) return t;
                    let n = "";
                    for (let o = 0; o < t.length; o++) t[o] && (r = e(t[o])) && (n && (n += " "), n += r);
                    return n
                }(e)) && (n && (n += " "), n += t);
                return n
            }

            function b(e) {
                let t = t => t[e] || [];
                return t.isThemeGetter = !0, t
            }
            let m = /^\[(?:([a-z-]+):)?(.+)\]$/i,
                h = /^\d+\/\d+$/,
                y = new Set(["px", "full", "screen"]),
                v = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
                x = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
                w = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
                k = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
                E = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;

            function N(e) {
                return C(e) || y.has(e) || h.test(e)
            }

            function j(e) {
                return B(e, "length", _)
            }

            function C(e) {
                return !!e && !Number.isNaN(Number(e))
            }

            function T(e) {
                return B(e, "number", C)
            }

            function M(e) {
                return !!e && Number.isInteger(Number(e))
            }

            function S(e) {
                return e.endsWith("%") && C(e.slice(0, -1))
            }

            function R(e) {
                return m.test(e)
            }

            function I(e) {
                return v.test(e)
            }
            let O = new Set(["length", "size", "percentage"]);

            function P(e) {
                return B(e, O, H)
            }

            function D(e) {
                return B(e, "position", H)
            }
            let L = new Set(["image", "url"]);

            function A(e) {
                return B(e, L, Y)
            }

            function F(e) {
                return B(e, "", W)
            }

            function z() {
                return !0
            }

            function B(e, t, r) {
                let n = m.exec(e);
                return !!n && (n[1] ? "string" == typeof t ? n[1] === t : t.has(n[1]) : r(n[2]))
            }

            function _(e) {
                return x.test(e) && !w.test(e)
            }

            function H() {
                return !1
            }

            function W(e) {
                return k.test(e)
            }

            function Y(e) {
                return E.test(e)
            }
            let G = function(e, ...t) {
                let r, n, o;
                let a = function(i) {
                    var s;
                    return n = (r = {
                        cache: function(e) {
                            if (e < 1) return {
                                get: () => void 0,
                                set: () => {}
                            };
                            let t = 0,
                                r = new Map,
                                n = new Map;

                            function o(o, a) {
                                r.set(o, a), ++t > e && (t = 0, n = r, r = new Map)
                            }
                            return {
                                get(e) {
                                    let t = r.get(e);
                                    return void 0 !== t ? t : void 0 !== (t = n.get(e)) ? (o(e, t), t) : void 0
                                },
                                set(e, t) {
                                    r.has(e) ? r.set(e, t) : o(e, t)
                                }
                            }
                        }((s = t.reduce((e, t) => t(e), e())).cacheSize),
                        splitModifiers: function(e) {
                            let t = e.separator,
                                r = 1 === t.length,
                                n = t[0],
                                o = t.length;
                            return function(e) {
                                let a;
                                let l = [],
                                    i = 0,
                                    s = 0;
                                for (let d = 0; d < e.length; d++) {
                                    let u = e[d];
                                    if (0 === i) {
                                        if (u === n && (r || e.slice(d, d + o) === t)) {
                                            l.push(e.slice(s, d)), s = d + o;
                                            continue
                                        }
                                        if ("/" === u) {
                                            a = d;
                                            continue
                                        }
                                    }
                                    "[" === u ? i++ : "]" === u && i--
                                }
                                let d = 0 === l.length ? e : e.substring(s),
                                    u = d.startsWith("!"),
                                    c = u ? d.substring(1) : d;
                                return {
                                    modifiers: l,
                                    hasImportantModifier: u,
                                    baseClassName: c,
                                    maybePostfixModifierPosition: a && a > s ? a - s : void 0
                                }
                            }
                        }(s),
                        ... function(e) {
                            let t = function(e) {
                                    var t;
                                    let {
                                        theme: r,
                                        prefix: n
                                    } = e, o = {
                                        nextPart: new Map,
                                        validators: []
                                    };
                                    return (t = Object.entries(e.classGroups), n ? t.map(([e, t]) => [e, t.map(e => "string" == typeof e ? n + e : "object" == typeof e ? Object.fromEntries(Object.entries(e).map(([e, t]) => [n + e, t])) : e)]) : t).forEach(([e, t]) => {
                                        (function e(t, r, n, o) {
                                            t.forEach(t => {
                                                if ("string" == typeof t) {
                                                    ("" === t ? r : f(r, t)).classGroupId = n;
                                                    return
                                                }
                                                if ("function" == typeof t) {
                                                    if (t.isThemeGetter) {
                                                        e(t(o), r, n, o);
                                                        return
                                                    }
                                                    r.validators.push({
                                                        validator: t,
                                                        classGroupId: n
                                                    });
                                                    return
                                                }
                                                Object.entries(t).forEach(([t, a]) => {
                                                    e(a, f(r, t), n, o)
                                                })
                                            })
                                        })(t, o, e, r)
                                    }), o
                                }(e),
                                {
                                    conflictingClassGroups: r,
                                    conflictingClassGroupModifiers: n
                                } = e;
                            return {
                                getClassGroupId: function(e) {
                                    let r = e.split("-");
                                    return "" === r[0] && 1 !== r.length && r.shift(),
                                        function e(t, r) {
                                            if (0 === t.length) return r.classGroupId;
                                            let n = t[0],
                                                o = r.nextPart.get(n),
                                                a = o ? e(t.slice(1), o) : void 0;
                                            if (a) return a;
                                            if (0 === r.validators.length) return;
                                            let l = t.join("-");
                                            return r.validators.find(({
                                                validator: e
                                            }) => e(l)) ? .classGroupId
                                        }(r, t) || function(e) {
                                            if (c.test(e)) {
                                                let t = c.exec(e)[1],
                                                    r = t ? .substring(0, t.indexOf(":"));
                                                if (r) return "arbitrary.." + r
                                            }
                                        }(e)
                                },
                                getConflictingClassGroupIds: function(e, t) {
                                    let o = r[e] || [];
                                    return t && n[e] ? [...o, ...n[e]] : o
                                }
                            }
                        }(s)
                    }).cache.get, o = r.cache.set, a = l, l(i)
                };

                function l(e) {
                    let t = n(e);
                    if (t) return t;
                    let a = function(e, t) {
                        let {
                            splitModifiers: r,
                            getClassGroupId: n,
                            getConflictingClassGroupIds: o
                        } = t, a = new Set;
                        return e.trim().split(g).map(e => {
                            let {
                                modifiers: t,
                                hasImportantModifier: o,
                                baseClassName: a,
                                maybePostfixModifierPosition: l
                            } = r(e), i = n(l ? a.substring(0, l) : a), s = !!l;
                            if (!i) {
                                if (!l || !(i = n(a))) return {
                                    isTailwindClass: !1,
                                    originalClassName: e
                                };
                                s = !1
                            }
                            let d = (function(e) {
                                if (e.length <= 1) return e;
                                let t = [],
                                    r = [];
                                return e.forEach(e => {
                                    "[" === e[0] ? (t.push(...r.sort(), e), r = []) : r.push(e)
                                }), t.push(...r.sort()), t
                            })(t).join(":");
                            return {
                                isTailwindClass: !0,
                                modifierId: o ? d + "!" : d,
                                classGroupId: i,
                                originalClassName: e,
                                hasPostfixModifier: s
                            }
                        }).reverse().filter(e => {
                            if (!e.isTailwindClass) return !0;
                            let {
                                modifierId: t,
                                classGroupId: r,
                                hasPostfixModifier: n
                            } = e, l = t + r;
                            return !a.has(l) && (a.add(l), o(r, n).forEach(e => a.add(t + e)), !0)
                        }).reverse().map(e => e.originalClassName).join(" ")
                    }(e, r);
                    return o(e, a), a
                }
                return function() {
                    return a(p.apply(null, arguments))
                }
            }(function() {
                let e = b("colors"),
                    t = b("spacing"),
                    r = b("blur"),
                    n = b("brightness"),
                    o = b("borderColor"),
                    a = b("borderRadius"),
                    l = b("borderSpacing"),
                    i = b("borderWidth"),
                    s = b("contrast"),
                    d = b("grayscale"),
                    u = b("hueRotate"),
                    c = b("invert"),
                    f = b("gap"),
                    g = b("gradientColorStops"),
                    p = b("gradientColorStopPositions"),
                    m = b("inset"),
                    h = b("margin"),
                    y = b("opacity"),
                    v = b("padding"),
                    x = b("saturate"),
                    w = b("scale"),
                    k = b("sepia"),
                    E = b("skew"),
                    O = b("space"),
                    L = b("translate"),
                    B = () => ["auto", "contain", "none"],
                    _ = () => ["auto", "hidden", "clip", "visible", "scroll"],
                    H = () => ["auto", R, t],
                    W = () => [R, t],
                    Y = () => ["", N, j],
                    G = () => ["auto", C, R],
                    q = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"],
                    U = () => ["solid", "dashed", "dotted", "double", "none"],
                    V = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"],
                    K = () => ["start", "end", "center", "between", "around", "evenly", "stretch"],
                    X = () => ["", "0", R],
                    $ = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
                    Z = () => [C, T],
                    Q = () => [C, R];
                return {
                    cacheSize: 500,
                    separator: ":",
                    theme: {
                        colors: [z],
                        spacing: [N, j],
                        blur: ["none", "", I, R],
                        brightness: Z(),
                        borderColor: [e],
                        borderRadius: ["none", "", "full", I, R],
                        borderSpacing: W(),
                        borderWidth: Y(),
                        contrast: Z(),
                        grayscale: X(),
                        hueRotate: Q(),
                        invert: X(),
                        gap: W(),
                        gradientColorStops: [e],
                        gradientColorStopPositions: [S, j],
                        inset: H(),
                        margin: H(),
                        opacity: Z(),
                        padding: W(),
                        saturate: Z(),
                        scale: Z(),
                        sepia: X(),
                        skew: Q(),
                        space: W(),
                        translate: W()
                    },
                    classGroups: {
                        aspect: [{
                            aspect: ["auto", "square", "video", R]
                        }],
                        container: ["container"],
                        columns: [{
                            columns: [I]
                        }],
                        "break-after": [{
                            "break-after": $()
                        }],
                        "break-before": [{
                            "break-before": $()
                        }],
                        "break-inside": [{
                            "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                        }],
                        "box-decoration": [{
                            "box-decoration": ["slice", "clone"]
                        }],
                        box: [{
                            box: ["border", "content"]
                        }],
                        display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                        float: [{
                            float: ["right", "left", "none", "start", "end"]
                        }],
                        clear: [{
                            clear: ["left", "right", "both", "none", "start", "end"]
                        }],
                        isolation: ["isolate", "isolation-auto"],
                        "object-fit": [{
                            object: ["contain", "cover", "fill", "none", "scale-down"]
                        }],
                        "object-position": [{
                            object: [...q(), R]
                        }],
                        overflow: [{
                            overflow: _()
                        }],
                        "overflow-x": [{
                            "overflow-x": _()
                        }],
                        "overflow-y": [{
                            "overflow-y": _()
                        }],
                        overscroll: [{
                            overscroll: B()
                        }],
                        "overscroll-x": [{
                            "overscroll-x": B()
                        }],
                        "overscroll-y": [{
                            "overscroll-y": B()
                        }],
                        position: ["static", "fixed", "absolute", "relative", "sticky"],
                        inset: [{
                            inset: [m]
                        }],
                        "inset-x": [{
                            "inset-x": [m]
                        }],
                        "inset-y": [{
                            "inset-y": [m]
                        }],
                        start: [{
                            start: [m]
                        }],
                        end: [{
                            end: [m]
                        }],
                        top: [{
                            top: [m]
                        }],
                        right: [{
                            right: [m]
                        }],
                        bottom: [{
                            bottom: [m]
                        }],
                        left: [{
                            left: [m]
                        }],
                        visibility: ["visible", "invisible", "collapse"],
                        z: [{
                            z: ["auto", M, R]
                        }],
                        basis: [{
                            basis: H()
                        }],
                        "flex-direction": [{
                            flex: ["row", "row-reverse", "col", "col-reverse"]
                        }],
                        "flex-wrap": [{
                            flex: ["wrap", "wrap-reverse", "nowrap"]
                        }],
                        flex: [{
                            flex: ["1", "auto", "initial", "none", R]
                        }],
                        grow: [{
                            grow: X()
                        }],
                        shrink: [{
                            shrink: X()
                        }],
                        order: [{
                            order: ["first", "last", "none", M, R]
                        }],
                        "grid-cols": [{
                            "grid-cols": [z]
                        }],
                        "col-start-end": [{
                            col: ["auto", {
                                span: ["full", M, R]
                            }, R]
                        }],
                        "col-start": [{
                            "col-start": G()
                        }],
                        "col-end": [{
                            "col-end": G()
                        }],
                        "grid-rows": [{
                            "grid-rows": [z]
                        }],
                        "row-start-end": [{
                            row: ["auto", {
                                span: [M, R]
                            }, R]
                        }],
                        "row-start": [{
                            "row-start": G()
                        }],
                        "row-end": [{
                            "row-end": G()
                        }],
                        "grid-flow": [{
                            "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                        }],
                        "auto-cols": [{
                            "auto-cols": ["auto", "min", "max", "fr", R]
                        }],
                        "auto-rows": [{
                            "auto-rows": ["auto", "min", "max", "fr", R]
                        }],
                        gap: [{
                            gap: [f]
                        }],
                        "gap-x": [{
                            "gap-x": [f]
                        }],
                        "gap-y": [{
                            "gap-y": [f]
                        }],
                        "justify-content": [{
                            justify: ["normal", ...K()]
                        }],
                        "justify-items": [{
                            "justify-items": ["start", "end", "center", "stretch"]
                        }],
                        "justify-self": [{
                            "justify-self": ["auto", "start", "end", "center", "stretch"]
                        }],
                        "align-content": [{
                            content: ["normal", ...K(), "baseline"]
                        }],
                        "align-items": [{
                            items: ["start", "end", "center", "baseline", "stretch"]
                        }],
                        "align-self": [{
                            self: ["auto", "start", "end", "center", "stretch", "baseline"]
                        }],
                        "place-content": [{
                            "place-content": [...K(), "baseline"]
                        }],
                        "place-items": [{
                            "place-items": ["start", "end", "center", "baseline", "stretch"]
                        }],
                        "place-self": [{
                            "place-self": ["auto", "start", "end", "center", "stretch"]
                        }],
                        p: [{
                            p: [v]
                        }],
                        px: [{
                            px: [v]
                        }],
                        py: [{
                            py: [v]
                        }],
                        ps: [{
                            ps: [v]
                        }],
                        pe: [{
                            pe: [v]
                        }],
                        pt: [{
                            pt: [v]
                        }],
                        pr: [{
                            pr: [v]
                        }],
                        pb: [{
                            pb: [v]
                        }],
                        pl: [{
                            pl: [v]
                        }],
                        m: [{
                            m: [h]
                        }],
                        mx: [{
                            mx: [h]
                        }],
                        my: [{
                            my: [h]
                        }],
                        ms: [{
                            ms: [h]
                        }],
                        me: [{
                            me: [h]
                        }],
                        mt: [{
                            mt: [h]
                        }],
                        mr: [{
                            mr: [h]
                        }],
                        mb: [{
                            mb: [h]
                        }],
                        ml: [{
                            ml: [h]
                        }],
                        "space-x": [{
                            "space-x": [O]
                        }],
                        "space-x-reverse": ["space-x-reverse"],
                        "space-y": [{
                            "space-y": [O]
                        }],
                        "space-y-reverse": ["space-y-reverse"],
                        w: [{
                            w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", R, t]
                        }],
                        "min-w": [{
                            "min-w": [R, t, "min", "max", "fit"]
                        }],
                        "max-w": [{
                            "max-w": [R, t, "none", "full", "min", "max", "fit", "prose", {
                                screen: [I]
                            }, I]
                        }],
                        h: [{
                            h: [R, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
                        }],
                        "min-h": [{
                            "min-h": [R, t, "min", "max", "fit", "svh", "lvh", "dvh"]
                        }],
                        "max-h": [{
                            "max-h": [R, t, "min", "max", "fit", "svh", "lvh", "dvh"]
                        }],
                        size: [{
                            size: [R, t, "auto", "min", "max", "fit"]
                        }],
                        "font-size": [{
                            text: ["base", I, j]
                        }],
                        "font-smoothing": ["antialiased", "subpixel-antialiased"],
                        "font-style": ["italic", "not-italic"],
                        "font-weight": [{
                            font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", T]
                        }],
                        "font-family": [{
                            font: [z]
                        }],
                        "fvn-normal": ["normal-nums"],
                        "fvn-ordinal": ["ordinal"],
                        "fvn-slashed-zero": ["slashed-zero"],
                        "fvn-figure": ["lining-nums", "oldstyle-nums"],
                        "fvn-spacing": ["proportional-nums", "tabular-nums"],
                        "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
                        tracking: [{
                            tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", R]
                        }],
                        "line-clamp": [{
                            "line-clamp": ["none", C, T]
                        }],
                        leading: [{
                            leading: ["none", "tight", "snug", "normal", "relaxed", "loose", N, R]
                        }],
                        "list-image": [{
                            "list-image": ["none", R]
                        }],
                        "list-style-type": [{
                            list: ["none", "disc", "decimal", R]
                        }],
                        "list-style-position": [{
                            list: ["inside", "outside"]
                        }],
                        "placeholder-color": [{
                            placeholder: [e]
                        }],
                        "placeholder-opacity": [{
                            "placeholder-opacity": [y]
                        }],
                        "text-alignment": [{
                            text: ["left", "center", "right", "justify", "start", "end"]
                        }],
                        "text-color": [{
                            text: [e]
                        }],
                        "text-opacity": [{
                            "text-opacity": [y]
                        }],
                        "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                        "text-decoration-style": [{
                            decoration: [...U(), "wavy"]
                        }],
                        "text-decoration-thickness": [{
                            decoration: ["auto", "from-font", N, j]
                        }],
                        "underline-offset": [{
                            "underline-offset": ["auto", N, R]
                        }],
                        "text-decoration-color": [{
                            decoration: [e]
                        }],
                        "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                        "text-wrap": [{
                            text: ["wrap", "nowrap", "balance", "pretty"]
                        }],
                        indent: [{
                            indent: W()
                        }],
                        "vertical-align": [{
                            align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", R]
                        }],
                        whitespace: [{
                            whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                        }],
                        break: [{
                            break: ["normal", "words", "all", "keep"]
                        }],
                        hyphens: [{
                            hyphens: ["none", "manual", "auto"]
                        }],
                        content: [{
                            content: ["none", R]
                        }],
                        "bg-attachment": [{
                            bg: ["fixed", "local", "scroll"]
                        }],
                        "bg-clip": [{
                            "bg-clip": ["border", "padding", "content", "text"]
                        }],
                        "bg-opacity": [{
                            "bg-opacity": [y]
                        }],
                        "bg-origin": [{
                            "bg-origin": ["border", "padding", "content"]
                        }],
                        "bg-position": [{
                            bg: [...q(), D]
                        }],
                        "bg-repeat": [{
                            bg: ["no-repeat", {
                                repeat: ["", "x", "y", "round", "space"]
                            }]
                        }],
                        "bg-size": [{
                            bg: ["auto", "cover", "contain", P]
                        }],
                        "bg-image": [{
                            bg: ["none", {
                                "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                            }, A]
                        }],
                        "bg-color": [{
                            bg: [e]
                        }],
                        "gradient-from-pos": [{
                            from: [p]
                        }],
                        "gradient-via-pos": [{
                            via: [p]
                        }],
                        "gradient-to-pos": [{
                            to: [p]
                        }],
                        "gradient-from": [{
                            from: [g]
                        }],
                        "gradient-via": [{
                            via: [g]
                        }],
                        "gradient-to": [{
                            to: [g]
                        }],
                        rounded: [{
                            rounded: [a]
                        }],
                        "rounded-s": [{
                            "rounded-s": [a]
                        }],
                        "rounded-e": [{
                            "rounded-e": [a]
                        }],
                        "rounded-t": [{
                            "rounded-t": [a]
                        }],
                        "rounded-r": [{
                            "rounded-r": [a]
                        }],
                        "rounded-b": [{
                            "rounded-b": [a]
                        }],
                        "rounded-l": [{
                            "rounded-l": [a]
                        }],
                        "rounded-ss": [{
                            "rounded-ss": [a]
                        }],
                        "rounded-se": [{
                            "rounded-se": [a]
                        }],
                        "rounded-ee": [{
                            "rounded-ee": [a]
                        }],
                        "rounded-es": [{
                            "rounded-es": [a]
                        }],
                        "rounded-tl": [{
                            "rounded-tl": [a]
                        }],
                        "rounded-tr": [{
                            "rounded-tr": [a]
                        }],
                        "rounded-br": [{
                            "rounded-br": [a]
                        }],
                        "rounded-bl": [{
                            "rounded-bl": [a]
                        }],
                        "border-w": [{
                            border: [i]
                        }],
                        "border-w-x": [{
                            "border-x": [i]
                        }],
                        "border-w-y": [{
                            "border-y": [i]
                        }],
                        "border-w-s": [{
                            "border-s": [i]
                        }],
                        "border-w-e": [{
                            "border-e": [i]
                        }],
                        "border-w-t": [{
                            "border-t": [i]
                        }],
                        "border-w-r": [{
                            "border-r": [i]
                        }],
                        "border-w-b": [{
                            "border-b": [i]
                        }],
                        "border-w-l": [{
                            "border-l": [i]
                        }],
                        "border-opacity": [{
                            "border-opacity": [y]
                        }],
                        "border-style": [{
                            border: [...U(), "hidden"]
                        }],
                        "divide-x": [{
                            "divide-x": [i]
                        }],
                        "divide-x-reverse": ["divide-x-reverse"],
                        "divide-y": [{
                            "divide-y": [i]
                        }],
                        "divide-y-reverse": ["divide-y-reverse"],
                        "divide-opacity": [{
                            "divide-opacity": [y]
                        }],
                        "divide-style": [{
                            divide: U()
                        }],
                        "border-color": [{
                            border: [o]
                        }],
                        "border-color-x": [{
                            "border-x": [o]
                        }],
                        "border-color-y": [{
                            "border-y": [o]
                        }],
                        "border-color-t": [{
                            "border-t": [o]
                        }],
                        "border-color-r": [{
                            "border-r": [o]
                        }],
                        "border-color-b": [{
                            "border-b": [o]
                        }],
                        "border-color-l": [{
                            "border-l": [o]
                        }],
                        "divide-color": [{
                            divide: [o]
                        }],
                        "outline-style": [{
                            outline: ["", ...U()]
                        }],
                        "outline-offset": [{
                            "outline-offset": [N, R]
                        }],
                        "outline-w": [{
                            outline: [N, j]
                        }],
                        "outline-color": [{
                            outline: [e]
                        }],
                        "ring-w": [{
                            ring: Y()
                        }],
                        "ring-w-inset": ["ring-inset"],
                        "ring-color": [{
                            ring: [e]
                        }],
                        "ring-opacity": [{
                            "ring-opacity": [y]
                        }],
                        "ring-offset-w": [{
                            "ring-offset": [N, j]
                        }],
                        "ring-offset-color": [{
                            "ring-offset": [e]
                        }],
                        shadow: [{
                            shadow: ["", "inner", "none", I, F]
                        }],
                        "shadow-color": [{
                            shadow: [z]
                        }],
                        opacity: [{
                            opacity: [y]
                        }],
                        "mix-blend": [{
                            "mix-blend": V()
                        }],
                        "bg-blend": [{
                            "bg-blend": V()
                        }],
                        filter: [{
                            filter: ["", "none"]
                        }],
                        blur: [{
                            blur: [r]
                        }],
                        brightness: [{
                            brightness: [n]
                        }],
                        contrast: [{
                            contrast: [s]
                        }],
                        "drop-shadow": [{
                            "drop-shadow": ["", "none", I, R]
                        }],
                        grayscale: [{
                            grayscale: [d]
                        }],
                        "hue-rotate": [{
                            "hue-rotate": [u]
                        }],
                        invert: [{
                            invert: [c]
                        }],
                        saturate: [{
                            saturate: [x]
                        }],
                        sepia: [{
                            sepia: [k]
                        }],
                        "backdrop-filter": [{
                            "backdrop-filter": ["", "none"]
                        }],
                        "backdrop-blur": [{
                            "backdrop-blur": [r]
                        }],
                        "backdrop-brightness": [{
                            "backdrop-brightness": [n]
                        }],
                        "backdrop-contrast": [{
                            "backdrop-contrast": [s]
                        }],
                        "backdrop-grayscale": [{
                            "backdrop-grayscale": [d]
                        }],
                        "backdrop-hue-rotate": [{
                            "backdrop-hue-rotate": [u]
                        }],
                        "backdrop-invert": [{
                            "backdrop-invert": [c]
                        }],
                        "backdrop-opacity": [{
                            "backdrop-opacity": [y]
                        }],
                        "backdrop-saturate": [{
                            "backdrop-saturate": [x]
                        }],
                        "backdrop-sepia": [{
                            "backdrop-sepia": [k]
                        }],
                        "border-collapse": [{
                            border: ["collapse", "separate"]
                        }],
                        "border-spacing": [{
                            "border-spacing": [l]
                        }],
                        "border-spacing-x": [{
                            "border-spacing-x": [l]
                        }],
                        "border-spacing-y": [{
                            "border-spacing-y": [l]
                        }],
                        "table-layout": [{
                            table: ["auto", "fixed"]
                        }],
                        caption: [{
                            caption: ["top", "bottom"]
                        }],
                        transition: [{
                            transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", R]
                        }],
                        duration: [{
                            duration: Q()
                        }],
                        ease: [{
                            ease: ["linear", "in", "out", "in-out", R]
                        }],
                        delay: [{
                            delay: Q()
                        }],
                        animate: [{
                            animate: ["none", "spin", "ping", "pulse", "bounce", R]
                        }],
                        transform: [{
                            transform: ["", "gpu", "none"]
                        }],
                        scale: [{
                            scale: [w]
                        }],
                        "scale-x": [{
                            "scale-x": [w]
                        }],
                        "scale-y": [{
                            "scale-y": [w]
                        }],
                        rotate: [{
                            rotate: [M, R]
                        }],
                        "translate-x": [{
                            "translate-x": [L]
                        }],
                        "translate-y": [{
                            "translate-y": [L]
                        }],
                        "skew-x": [{
                            "skew-x": [E]
                        }],
                        "skew-y": [{
                            "skew-y": [E]
                        }],
                        "transform-origin": [{
                            origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", R]
                        }],
                        accent: [{
                            accent: ["auto", e]
                        }],
                        appearance: [{
                            appearance: ["none", "auto"]
                        }],
                        cursor: [{
                            cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", R]
                        }],
                        "caret-color": [{
                            caret: [e]
                        }],
                        "pointer-events": [{
                            "pointer-events": ["none", "auto"]
                        }],
                        resize: [{
                            resize: ["none", "y", "x", ""]
                        }],
                        "scroll-behavior": [{
                            scroll: ["auto", "smooth"]
                        }],
                        "scroll-m": [{
                            "scroll-m": W()
                        }],
                        "scroll-mx": [{
                            "scroll-mx": W()
                        }],
                        "scroll-my": [{
                            "scroll-my": W()
                        }],
                        "scroll-ms": [{
                            "scroll-ms": W()
                        }],
                        "scroll-me": [{
                            "scroll-me": W()
                        }],
                        "scroll-mt": [{
                            "scroll-mt": W()
                        }],
                        "scroll-mr": [{
                            "scroll-mr": W()
                        }],
                        "scroll-mb": [{
                            "scroll-mb": W()
                        }],
                        "scroll-ml": [{
                            "scroll-ml": W()
                        }],
                        "scroll-p": [{
                            "scroll-p": W()
                        }],
                        "scroll-px": [{
                            "scroll-px": W()
                        }],
                        "scroll-py": [{
                            "scroll-py": W()
                        }],
                        "scroll-ps": [{
                            "scroll-ps": W()
                        }],
                        "scroll-pe": [{
                            "scroll-pe": W()
                        }],
                        "scroll-pt": [{
                            "scroll-pt": W()
                        }],
                        "scroll-pr": [{
                            "scroll-pr": W()
                        }],
                        "scroll-pb": [{
                            "scroll-pb": W()
                        }],
                        "scroll-pl": [{
                            "scroll-pl": W()
                        }],
                        "snap-align": [{
                            snap: ["start", "end", "center", "align-none"]
                        }],
                        "snap-stop": [{
                            snap: ["normal", "always"]
                        }],
                        "snap-type": [{
                            snap: ["none", "x", "y", "both"]
                        }],
                        "snap-strictness": [{
                            snap: ["mandatory", "proximity"]
                        }],
                        touch: [{
                            touch: ["auto", "none", "manipulation"]
                        }],
                        "touch-x": [{
                            "touch-pan": ["x", "left", "right"]
                        }],
                        "touch-y": [{
                            "touch-pan": ["y", "up", "down"]
                        }],
                        "touch-pz": ["touch-pinch-zoom"],
                        select: [{
                            select: ["none", "text", "all", "auto"]
                        }],
                        "will-change": [{
                            "will-change": ["auto", "scroll", "contents", "transform", R]
                        }],
                        fill: [{
                            fill: [e, "none"]
                        }],
                        "stroke-w": [{
                            stroke: [N, j, T]
                        }],
                        stroke: [{
                            stroke: [e, "none"]
                        }],
                        sr: ["sr-only", "not-sr-only"],
                        "forced-color-adjust": [{
                            "forced-color-adjust": ["auto", "none"]
                        }]
                    },
                    conflictingClassGroups: {
                        overflow: ["overflow-x", "overflow-y"],
                        overscroll: ["overscroll-x", "overscroll-y"],
                        inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                        "inset-x": ["right", "left"],
                        "inset-y": ["top", "bottom"],
                        flex: ["basis", "grow", "shrink"],
                        gap: ["gap-x", "gap-y"],
                        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                        px: ["pr", "pl"],
                        py: ["pt", "pb"],
                        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                        mx: ["mr", "ml"],
                        my: ["mt", "mb"],
                        size: ["w", "h"],
                        "font-size": ["leading"],
                        "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                        "fvn-ordinal": ["fvn-normal"],
                        "fvn-slashed-zero": ["fvn-normal"],
                        "fvn-figure": ["fvn-normal"],
                        "fvn-spacing": ["fvn-normal"],
                        "fvn-fraction": ["fvn-normal"],
                        "line-clamp": ["display", "overflow"],
                        rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                        "rounded-s": ["rounded-ss", "rounded-es"],
                        "rounded-e": ["rounded-se", "rounded-ee"],
                        "rounded-t": ["rounded-tl", "rounded-tr"],
                        "rounded-r": ["rounded-tr", "rounded-br"],
                        "rounded-b": ["rounded-br", "rounded-bl"],
                        "rounded-l": ["rounded-tl", "rounded-bl"],
                        "border-spacing": ["border-spacing-x", "border-spacing-y"],
                        "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                        "border-w-x": ["border-w-r", "border-w-l"],
                        "border-w-y": ["border-w-t", "border-w-b"],
                        "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                        "border-color-x": ["border-color-r", "border-color-l"],
                        "border-color-y": ["border-color-t", "border-color-b"],
                        "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                        "scroll-mx": ["scroll-mr", "scroll-ml"],
                        "scroll-my": ["scroll-mt", "scroll-mb"],
                        "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                        "scroll-px": ["scroll-pr", "scroll-pl"],
                        "scroll-py": ["scroll-pt", "scroll-pb"],
                        touch: ["touch-x", "touch-y", "touch-pz"],
                        "touch-x": ["touch"],
                        "touch-y": ["touch"],
                        "touch-pz": ["touch"]
                    },
                    conflictingClassGroupModifiers: {
                        "font-size": ["leading"]
                    }
                }
            });

            function q(e) {
                return null !== e && "object" == typeof e && e.constructor === Object
            }

            function U(e) {
                if (!q(e)) return e;
                let t = {};
                for (let r in e) t[r] = U(e[r]);
                return t
            }

            function V(e, t) {
                if (q(t) && 0 === Object.keys(t).length) return U({ ...e,
                    ...t
                });
                let r = { ...e,
                    ...t
                };
                if (q(t) && q(e))
                    for (let n in t) q(t[n]) && n in e && q(e[n]) ? r[n] = V(e[n], t[n]) : r[n] = q(t[n]) ? U(t[n]) : t[n];
                return r
            }
            let K = {
                    arrowIcon: "ml-2 h-4 w-4",
                    content: "py-1 focus:outline-none",
                    floating: {
                        animation: "transition-opacity",
                        arrow: {
                            base: "absolute z-10 h-2 w-2 rotate-45",
                            style: {
                                dark: "bg-gray-900 dark:bg-gray-700",
                                light: "bg-white",
                                auto: "bg-white dark:bg-gray-700"
                            },
                            placement: "-4px"
                        },
                        base: "z-10 w-fit divide-y divide-gray-100 rounded shadow focus:outline-none",
                        content: "py-1 text-sm text-gray-700 dark:text-gray-200",
                        divider: "my-1 h-px bg-gray-100 dark:bg-gray-600",
                        header: "block px-4 py-2 text-sm text-gray-700 dark:text-gray-200",
                        hidden: "invisible opacity-0",
                        item: {
                            container: "",
                            base: "flex w-full cursor-pointer items-center justify-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:bg-gray-600 dark:focus:text-white",
                            icon: "mr-2 h-4 w-4"
                        },
                        style: {
                            dark: "bg-gray-900 text-white dark:bg-gray-700",
                            light: "border border-gray-200 bg-white text-gray-900",
                            auto: "border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white"
                        },
                        target: "w-fit"
                    },
                    inlineWrapper: "flex items-center"
                },
                X = {
                    root: {
                        base: "bg-white px-2 py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-4",
                        rounded: {
                            on: "rounded",
                            off: ""
                        },
                        bordered: {
                            on: "border",
                            off: ""
                        },
                        inner: {
                            base: "mx-auto flex flex-wrap items-center justify-between",
                            fluid: {
                                on: "",
                                off: "container"
                            }
                        }
                    },
                    brand: {
                        base: "flex items-center"
                    },
                    collapse: {
                        base: "w-full md:block md:w-auto",
                        list: "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium",
                        hidden: {
                            on: "hidden",
                            off: ""
                        }
                    },
                    link: {
                        base: "block py-2 pl-3 pr-4 md:p-0",
                        active: {
                            on: "bg-cyan-700 text-white dark:text-white md:bg-transparent md:text-cyan-700",
                            off: "border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
                        },
                        disabled: {
                            on: "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
                            off: ""
                        }
                    },
                    toggle: {
                        base: "inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden",
                        icon: "h-6 w-6 shrink-0"
                    }
                },
                $ = { ...X,
                    dropdown: {
                        base: "",
                        toggle: { ...K,
                            floating: { ...K.floating,
                                base: G(K.floating.base, "mt-2 block"),
                                content: G(K.floating.content, "text-gray-500 dark:text-gray-400"),
                                style: { ...K.floating.style,
                                    auto: G(K.floating.style.auto, "text-gray-500 dark:text-gray-400")
                                }
                            },
                            inlineWrapper: G(K.inlineWrapper, "flex w-full items-center justify-between")
                        }
                    },
                    dropdownToggle: {
                        base: G(X.link.base, X.link.active.off, "flex w-full items-center justify-between")
                    }
                },
                Z = {
                    accordion: {
                        root: {
                            base: "divide-y divide-gray-200 border-gray-200 dark:divide-gray-700 dark:border-gray-700",
                            flush: {
                                off: "rounded-lg border",
                                on: "border-b"
                            }
                        },
                        content: {
                            base: "p-5 first:rounded-t-lg last:rounded-b-lg dark:bg-gray-900"
                        },
                        title: {
                            arrow: {
                                base: "h-6 w-6 shrink-0",
                                open: {
                                    off: "",
                                    on: "rotate-180"
                                }
                            },
                            base: "flex w-full items-center justify-between p-5 text-left font-medium text-gray-500 first:rounded-t-lg last:rounded-b-lg dark:text-gray-400",
                            flush: {
                                off: "hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:hover:bg-gray-800 dark:focus:ring-gray-800",
                                on: "bg-transparent dark:bg-transparent"
                            },
                            heading: "",
                            open: {
                                off: "",
                                on: "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white"
                            }
                        }
                    },
                    alert: {
                        base: "flex flex-col gap-2 p-4 text-sm",
                        borderAccent: "border-t-4",
                        closeButton: {
                            base: "-m-1.5 ml-auto inline-flex h-8 w-8 rounded-lg p-1.5 focus:ring-2",
                            icon: "h-5 w-5",
                            color: {
                                info: "bg-cyan-100 text-cyan-500 hover:bg-cyan-200 focus:ring-cyan-400 dark:bg-cyan-200 dark:text-cyan-600 dark:hover:bg-cyan-300",
                                gray: "bg-gray-100 text-gray-500 hover:bg-gray-200 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white",
                                failure: "bg-red-100 text-red-500 hover:bg-red-200 focus:ring-red-400 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300",
                                success: "bg-green-100 text-green-500 hover:bg-green-200 focus:ring-green-400 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300",
                                warning: "bg-yellow-100 text-yellow-500 hover:bg-yellow-200 focus:ring-yellow-400 dark:bg-yellow-200 dark:text-yellow-600 dark:hover:bg-yellow-300",
                                red: "bg-red-100 text-red-500 hover:bg-red-200 focus:ring-red-400 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300",
                                green: "bg-green-100 text-green-500 hover:bg-green-200 focus:ring-green-400 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300",
                                yellow: "bg-yellow-100 text-yellow-500 hover:bg-yellow-200 focus:ring-yellow-400 dark:bg-yellow-200 dark:text-yellow-600 dark:hover:bg-yellow-300",
                                blue: "bg-blue-100 text-blue-500 hover:bg-blue-200 focus:ring-blue-400 dark:bg-blue-200 dark:text-blue-600 dark:hover:bg-blue-300",
                                cyan: "bg-cyan-100 text-cyan-500 hover:bg-cyan-200 focus:ring-cyan-400 dark:bg-cyan-200 dark:text-cyan-600 dark:hover:bg-cyan-300",
                                pink: "bg-pink-100 text-pink-500 hover:bg-pink-200 focus:ring-pink-400 dark:bg-pink-200 dark:text-pink-600 dark:hover:bg-pink-300",
                                lime: "bg-lime-100 text-lime-500 hover:bg-lime-200 focus:ring-lime-400 dark:bg-lime-200 dark:text-lime-600 dark:hover:bg-lime-300",
                                dark: "bg-gray-100 text-gray-500 hover:bg-gray-200 focus:ring-gray-400 dark:bg-gray-200 dark:text-gray-600 dark:hover:bg-gray-300",
                                indigo: "bg-indigo-100 text-indigo-500 hover:bg-indigo-200 focus:ring-indigo-400 dark:bg-indigo-200 dark:text-indigo-600 dark:hover:bg-indigo-300",
                                purple: "bg-purple-100 text-purple-500 hover:bg-purple-200 focus:ring-purple-400 dark:bg-purple-200 dark:text-purple-600 dark:hover:bg-purple-300",
                                teal: "bg-teal-100 text-teal-500 hover:bg-teal-200 focus:ring-teal-400 dark:bg-teal-200 dark:text-teal-600 dark:hover:bg-teal-300",
                                light: "bg-gray-50 text-gray-500 hover:bg-gray-100 focus:ring-gray-200 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white"
                            }
                        },
                        color: {
                            info: "border-cyan-500 bg-cyan-100 text-cyan-700 dark:bg-cyan-200 dark:text-cyan-800",
                            gray: "border-gray-500 bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300",
                            failure: "border-red-500 bg-red-100 text-red-700 dark:bg-red-200 dark:text-red-800",
                            success: "border-green-500 bg-green-100 text-green-700 dark:bg-green-200 dark:text-green-800",
                            warning: "border-yellow-500 bg-yellow-100 text-yellow-700 dark:bg-yellow-200 dark:text-yellow-800",
                            red: "border-red-500 bg-red-100 text-red-700 dark:bg-red-200 dark:text-red-800",
                            green: "border-green-500 bg-green-100 text-green-700 dark:bg-green-200 dark:text-green-800",
                            yellow: "border-yellow-500 bg-yellow-100 text-yellow-700 dark:bg-yellow-200 dark:text-yellow-800",
                            blue: "border-blue-500 bg-blue-100 text-blue-700 dark:bg-blue-200 dark:text-blue-800",
                            cyan: "border-cyan-500 bg-cyan-100 text-cyan-700 dark:bg-cyan-200 dark:text-cyan-800",
                            pink: "border-pink-500 bg-pink-100 text-pink-700 dark:bg-pink-200 dark:text-pink-800",
                            lime: "border-lime-500 bg-lime-100 text-lime-700 dark:bg-lime-200 dark:text-lime-800",
                            dark: "border-gray-600 bg-gray-800 text-gray-200 dark:bg-gray-900 dark:text-gray-300",
                            indigo: "border-indigo-500 bg-indigo-100 text-indigo-700 dark:bg-indigo-200 dark:text-indigo-800",
                            purple: "border-purple-500 bg-purple-100 text-purple-700 dark:bg-purple-200 dark:text-purple-800",
                            teal: "border-teal-500 bg-teal-100 text-teal-700 dark:bg-teal-200 dark:text-teal-800",
                            light: "border-gray-400 bg-gray-50 text-gray-600 dark:bg-gray-500 dark:text-gray-200"
                        },
                        icon: "mr-3 inline h-5 w-5 flex-shrink-0",
                        rounded: "rounded-lg",
                        wrapper: "flex items-center"
                    },
                    avatar: {
                        root: {
                            base: "flex items-center justify-center space-x-4 rounded",
                            bordered: "p-1 ring-2",
                            rounded: "rounded-full",
                            color: {
                                dark: "ring-gray-800 dark:ring-gray-800",
                                failure: "ring-red-500 dark:ring-red-700",
                                gray: "ring-gray-500 dark:ring-gray-400",
                                info: "ring-cyan-400 dark:ring-cyan-800",
                                light: "ring-gray-300 dark:ring-gray-500",
                                purple: "ring-purple-500 dark:ring-purple-600",
                                success: "ring-green-500 dark:ring-green-500",
                                warning: "ring-yellow-300 dark:ring-yellow-500",
                                pink: "ring-pink-500 dark:ring-pink-500"
                            },
                            img: {
                                base: "rounded",
                                off: "relative overflow-hidden bg-gray-100 dark:bg-gray-600",
                                on: "",
                                placeholder: "absolute -bottom-1 h-auto w-auto text-gray-400"
                            },
                            size: {
                                xs: "h-6 w-6",
                                sm: "h-8 w-8",
                                md: "h-10 w-10",
                                lg: "h-20 w-20",
                                xl: "h-36 w-36"
                            },
                            stacked: "ring-2 ring-gray-300 dark:ring-gray-500",
                            statusPosition: {
                                "bottom-left": "-bottom-1 -left-1",
                                "bottom-center": "-bottom-1",
                                "bottom-right": "-bottom-1 -right-1",
                                "top-left": "-left-1 -top-1",
                                "top-center": "-top-1",
                                "top-right": "-right-1 -top-1",
                                "center-right": "-right-1",
                                center: "",
                                "center-left": "-left-1"
                            },
                            status: {
                                away: "bg-yellow-400",
                                base: "absolute h-3.5 w-3.5 rounded-full border-2 border-white dark:border-gray-800",
                                busy: "bg-red-400",
                                offline: "bg-gray-400",
                                online: "bg-green-400"
                            },
                            initials: {
                                text: "font-medium text-gray-600 dark:text-gray-300",
                                base: "relative inline-flex items-center justify-center overflow-hidden bg-gray-100 dark:bg-gray-600"
                            }
                        },
                        group: {
                            base: "flex -space-x-4"
                        },
                        groupCounter: {
                            base: "relative flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 text-xs font-medium text-white ring-2 ring-gray-300 hover:bg-gray-600 dark:ring-gray-500"
                        }
                    },
                    badge: {
                        root: {
                            base: "flex h-fit items-center gap-1 font-semibold",
                            color: {
                                info: "bg-cyan-100 text-cyan-800 group-hover:bg-cyan-200 dark:bg-cyan-200 dark:text-cyan-800 dark:group-hover:bg-cyan-300",
                                gray: "bg-gray-100 text-gray-800 group-hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:group-hover:bg-gray-600",
                                failure: "bg-red-100 text-red-800 group-hover:bg-red-200 dark:bg-red-200 dark:text-red-900 dark:group-hover:bg-red-300",
                                success: "bg-green-100 text-green-800 group-hover:bg-green-200 dark:bg-green-200 dark:text-green-900 dark:group-hover:bg-green-300",
                                warning: "bg-yellow-100 text-yellow-800 group-hover:bg-yellow-200 dark:bg-yellow-200 dark:text-yellow-900 dark:group-hover:bg-yellow-300",
                                indigo: "bg-indigo-100 text-indigo-800 group-hover:bg-indigo-200 dark:bg-indigo-200 dark:text-indigo-900 dark:group-hover:bg-indigo-300",
                                purple: "bg-purple-100 text-purple-800 group-hover:bg-purple-200 dark:bg-purple-200 dark:text-purple-900 dark:group-hover:bg-purple-300",
                                pink: "bg-pink-100 text-pink-800 group-hover:bg-pink-200 dark:bg-pink-200 dark:text-pink-900 dark:group-hover:bg-pink-300",
                                blue: "bg-blue-100 text-blue-800 group-hover:bg-blue-200 dark:bg-blue-200 dark:text-blue-900 dark:group-hover:bg-blue-300",
                                cyan: "bg-cyan-100 text-cyan-800 group-hover:bg-cyan-200 dark:bg-cyan-200 dark:text-cyan-900 dark:group-hover:bg-cyan-300",
                                dark: "bg-gray-600 text-gray-100 group-hover:bg-gray-500 dark:bg-gray-900 dark:text-gray-200 dark:group-hover:bg-gray-700",
                                light: "bg-gray-200 text-gray-800 group-hover:bg-gray-300 dark:bg-gray-400 dark:text-gray-900 dark:group-hover:bg-gray-500",
                                green: "bg-green-100 text-green-800 group-hover:bg-green-200 dark:bg-green-200 dark:text-green-900 dark:group-hover:bg-green-300",
                                lime: "bg-lime-100 text-lime-800 group-hover:bg-lime-200 dark:bg-lime-200 dark:text-lime-900 dark:group-hover:bg-lime-300",
                                red: "bg-red-100 text-red-800 group-hover:bg-red-200 dark:bg-red-200 dark:text-red-900 dark:group-hover:bg-red-300",
                                teal: "bg-teal-100 text-teal-800 group-hover:bg-teal-200 dark:bg-teal-200 dark:text-teal-900 dark:group-hover:bg-teal-300",
                                yellow: "bg-yellow-100 text-yellow-800 group-hover:bg-yellow-200 dark:bg-yellow-200 dark:text-yellow-900 dark:group-hover:bg-yellow-300"
                            },
                            href: "group",
                            size: {
                                xs: "p-1 text-xs",
                                sm: "p-1.5 text-sm"
                            }
                        },
                        icon: {
                            off: "rounded px-2 py-0.5",
                            on: "rounded-full p-1.5",
                            size: {
                                xs: "h-3 w-3",
                                sm: "h-3.5 w-3.5"
                            }
                        }
                    },
                    blockquote: {
                        root: {
                            base: "text-xl font-semibold italic text-gray-900 dark:text-white"
                        }
                    },
                    breadcrumb: {
                        root: {
                            base: "",
                            list: "flex items-center"
                        },
                        item: {
                            base: "group flex items-center",
                            chevron: "mx-1 h-4 w-4 text-gray-400 group-first:hidden md:mx-2",
                            href: {
                                off: "flex items-center text-sm font-medium text-gray-500 dark:text-gray-400",
                                on: "flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            },
                            icon: "mr-2 h-4 w-4"
                        }
                    },
                    button: {
                        base: "group relative flex items-stretch justify-center p-0.5 text-center font-medium transition-[color,background-color,border-color,text-decoration-color,fill,stroke,box-shadow] focus:z-10 focus:outline-none",
                        fullSized: "w-full",
                        color: {
                            dark: "border border-transparent bg-gray-800 text-white focus:ring-4 focus:ring-gray-300 enabled:hover:bg-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:focus:ring-gray-800 dark:enabled:hover:bg-gray-700",
                            failure: "border border-transparent bg-red-700 text-white focus:ring-4 focus:ring-red-300 enabled:hover:bg-red-800 dark:bg-red-600 dark:focus:ring-red-900 dark:enabled:hover:bg-red-700",
                            gray: ":ring-cyan-700 border border-gray-200 bg-white text-gray-900 focus:text-cyan-700 focus:ring-4 enabled:hover:bg-gray-100 enabled:hover:text-cyan-700 dark:border-gray-600 dark:bg-transparent dark:text-gray-400 dark:enabled:hover:bg-gray-700 dark:enabled:hover:text-white",
                            info: "border border-transparent bg-cyan-700 text-white focus:ring-4 focus:ring-cyan-300 enabled:hover:bg-cyan-800 dark:bg-cyan-600 dark:focus:ring-cyan-800 dark:enabled:hover:bg-cyan-700",
                            light: "border border-gray-300 bg-white text-gray-900 focus:ring-4 focus:ring-cyan-300 enabled:hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-600 dark:text-white dark:focus:ring-gray-700 dark:enabled:hover:border-gray-700 dark:enabled:hover:bg-gray-700",
                            purple: "border border-transparent bg-purple-700 text-white focus:ring-4 focus:ring-purple-300 enabled:hover:bg-purple-800 dark:bg-purple-600 dark:focus:ring-purple-900 dark:enabled:hover:bg-purple-700",
                            success: "border border-transparent bg-green-700 text-white focus:ring-4 focus:ring-green-300 enabled:hover:bg-green-800 dark:bg-green-600 dark:focus:ring-green-800 dark:enabled:hover:bg-green-700",
                            warning: "border border-transparent bg-yellow-400 text-white focus:ring-4 focus:ring-yellow-300 enabled:hover:bg-yellow-500 dark:focus:ring-yellow-900",
                            blue: "border border-transparent bg-blue-700 text-white focus:ring-4 focus:ring-blue-300 enabled:hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
                            cyan: "border border-cyan-300 bg-white text-cyan-900 focus:ring-4 focus:ring-cyan-300 enabled:hover:bg-cyan-100 dark:border-cyan-600 dark:bg-cyan-600 dark:text-white dark:focus:ring-cyan-700 dark:enabled:hover:border-cyan-700 dark:enabled:hover:bg-cyan-700",
                            green: "border border-green-300 bg-white text-green-900 focus:ring-4 focus:ring-green-300 enabled:hover:bg-green-100 dark:border-green-600 dark:bg-green-600 dark:text-white dark:focus:ring-green-700 dark:enabled:hover:border-green-700 dark:enabled:hover:bg-green-700",
                            indigo: "border border-indigo-300 bg-white text-indigo-900 focus:ring-4 focus:ring-indigo-300 enabled:hover:bg-indigo-100 dark:border-indigo-600 dark:bg-indigo-600 dark:text-white dark:focus:ring-indigo-700 dark:enabled:hover:border-indigo-700 dark:enabled:hover:bg-indigo-700",
                            lime: "border border-lime-300 bg-white text-lime-900 focus:ring-4 focus:ring-lime-300 enabled:hover:bg-lime-100 dark:border-lime-600 dark:bg-lime-600 dark:text-white dark:focus:ring-lime-700 dark:enabled:hover:border-lime-700 dark:enabled:hover:bg-lime-700",
                            pink: "border border-pink-300 bg-white text-pink-900 focus:ring-4 focus:ring-pink-300 enabled:hover:bg-pink-100 dark:border-pink-600 dark:bg-pink-600 dark:text-white dark:focus:ring-pink-700 dark:enabled:hover:border-pink-700 dark:enabled:hover:bg-pink-700",
                            red: "border border-red-300 bg-white text-red-900 focus:ring-4 focus:ring-red-300 enabled:hover:bg-red-100 dark:border-red-600 dark:bg-red-600 dark:text-white dark:focus:ring-red-700 dark:enabled:hover:border-red-700 dark:enabled:hover:bg-red-700",
                            teal: "border border-teal-300 bg-white text-teal-900 focus:ring-4 focus:ring-teal-300 enabled:hover:bg-teal-100 dark:border-teal-600 dark:bg-teal-600 dark:text-white dark:focus:ring-teal-700 dark:enabled:hover:border-teal-700 dark:enabled:hover:bg-teal-700",
                            yellow: "border border-yellow-300 bg-white text-yellow-900 focus:ring-4 focus:ring-yellow-300 enabled:hover:bg-yellow-100 dark:border-yellow-600 dark:bg-yellow-600 dark:text-white dark:focus:ring-yellow-700 dark:enabled:hover:border-yellow-700 dark:enabled:hover:bg-yellow-700"
                        },
                        disabled: "cursor-not-allowed opacity-50",
                        isProcessing: "cursor-wait",
                        spinnerSlot: "absolute top-0 flex h-full items-center",
                        spinnerLeftPosition: {
                            xs: "left-2",
                            sm: "left-3",
                            md: "left-4",
                            lg: "left-5",
                            xl: "left-6"
                        },
                        gradient: {
                            cyan: "bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 text-white focus:ring-4 focus:ring-cyan-300 enabled:hover:bg-gradient-to-br dark:focus:ring-cyan-800",
                            failure: "bg-gradient-to-r from-red-400 via-red-500 to-red-600 text-white focus:ring-4 focus:ring-red-300 enabled:hover:bg-gradient-to-br dark:focus:ring-red-800",
                            info: "bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 text-white focus:ring-4 focus:ring-cyan-300 enabled:hover:bg-gradient-to-br dark:focus:ring-cyan-800 ",
                            lime: "bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 text-gray-900 focus:ring-4 focus:ring-lime-300 enabled:hover:bg-gradient-to-br dark:focus:ring-lime-800",
                            pink: "bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 text-white focus:ring-4 focus:ring-pink-300 enabled:hover:bg-gradient-to-br dark:focus:ring-pink-800",
                            purple: "bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white focus:ring-4 focus:ring-purple-300 enabled:hover:bg-gradient-to-br dark:focus:ring-purple-800",
                            success: "bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white focus:ring-4 focus:ring-green-300 enabled:hover:bg-gradient-to-br dark:focus:ring-green-800",
                            teal: "bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 text-white focus:ring-4 focus:ring-teal-300 enabled:hover:bg-gradient-to-br dark:focus:ring-teal-800"
                        },
                        gradientDuoTone: {
                            cyanToBlue: "bg-gradient-to-r from-cyan-500 to-cyan-500 text-white focus:ring-4 focus:ring-cyan-300 enabled:hover:bg-gradient-to-bl dark:focus:ring-cyan-800",
                            greenToBlue: "bg-gradient-to-br from-green-400 to-cyan-600 text-white focus:ring-4 focus:ring-green-200 enabled:hover:bg-gradient-to-bl dark:focus:ring-green-800",
                            pinkToOrange: "bg-gradient-to-br from-pink-500 to-orange-400 text-white focus:ring-4 focus:ring-pink-200 enabled:hover:bg-gradient-to-bl dark:focus:ring-pink-800",
                            purpleToBlue: "bg-gradient-to-br from-purple-600 to-cyan-500 text-white focus:ring-4 focus:ring-cyan-300 enabled:hover:bg-gradient-to-bl dark:focus:ring-cyan-800",
                            purpleToPink: "bg-gradient-to-r from-purple-500 to-pink-500 text-white focus:ring-4 focus:ring-purple-200 enabled:hover:bg-gradient-to-l dark:focus:ring-purple-800",
                            redToYellow: "bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 text-gray-900 focus:ring-4 focus:ring-red-100 enabled:hover:bg-gradient-to-bl dark:focus:ring-red-400",
                            tealToLime: "bg-gradient-to-r from-teal-200 to-lime-200 text-gray-900 focus:ring-4 focus:ring-lime-200 enabled:hover:bg-gradient-to-l enabled:hover:from-teal-200 enabled:hover:to-lime-200 enabled:hover:text-gray-900 dark:focus:ring-teal-700"
                        },
                        inner: {
                            base: "flex items-stretch transition-all duration-200",
                            position: {
                                none: "",
                                start: "rounded-r-none",
                                middle: "rounded-none",
                                end: "rounded-l-none"
                            },
                            outline: "border border-transparent",
                            isProcessingPadding: {
                                xs: "pl-8",
                                sm: "pl-10",
                                md: "pl-12",
                                lg: "pl-16",
                                xl: "pl-20"
                            }
                        },
                        label: "ml-2 inline-flex h-4 w-4 items-center justify-center rounded-full bg-cyan-200 text-xs font-semibold text-cyan-800",
                        outline: {
                            color: {
                                gray: "border border-gray-900 dark:border-white",
                                default: "border-0",
                                light: ""
                            },
                            off: "",
                            on: "flex w-full justify-center bg-white text-gray-900 transition-all duration-75 ease-in group-enabled:group-hover:bg-opacity-0 group-enabled:group-hover:text-inherit dark:bg-gray-900 dark:text-white",
                            pill: {
                                off: "rounded-md",
                                on: "rounded-full"
                            }
                        },
                        pill: {
                            off: "rounded-lg",
                            on: "rounded-full"
                        },
                        size: {
                            xs: "px-2 py-1 text-xs",
                            sm: "px-3 py-1.5 text-sm",
                            md: "px-4 py-2 text-sm",
                            lg: "px-5 py-2.5 text-base",
                            xl: "px-6 py-3 text-base"
                        }
                    },
                    buttonGroup: {
                        base: "inline-flex",
                        position: {
                            none: "",
                            start: "rounded-r-none focus:ring-2",
                            middle: "rounded-none border-l-0 pl-0 focus:ring-2",
                            end: "rounded-l-none border-l-0 pl-0 focus:ring-2"
                        }
                    },
                    card: {
                        root: {
                            base: "flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800",
                            children: "flex h-full flex-col justify-center gap-4 p-6",
                            horizontal: {
                                off: "flex-col",
                                on: "flex-col md:max-w-xl md:flex-row"
                            },
                            href: "hover:bg-gray-100 dark:hover:bg-gray-700"
                        },
                        img: {
                            base: "",
                            horizontal: {
                                off: "rounded-t-lg",
                                on: "h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                            }
                        }
                    },
                    carousel: {
                        root: {
                            base: "relative h-full w-full",
                            leftControl: "absolute left-0 top-0 flex h-full items-center justify-center px-4 focus:outline-none",
                            rightControl: "absolute right-0 top-0 flex h-full items-center justify-center px-4 focus:outline-none"
                        },
                        indicators: {
                            active: {
                                off: "bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800",
                                on: "bg-white dark:bg-gray-800"
                            },
                            base: "h-3 w-3 rounded-full",
                            wrapper: "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3"
                        },
                        item: {
                            base: "absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
                            wrapper: {
                                off: "w-full flex-shrink-0 transform cursor-default snap-center",
                                on: "w-full flex-shrink-0 transform cursor-grab snap-center"
                            }
                        },
                        control: {
                            base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
                            icon: "h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6"
                        },
                        scrollContainer: {
                            base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg",
                            snap: "snap-x"
                        }
                    },
                    checkbox: {
                        root: {
                            base: "h-4 w-4 rounded border border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700",
                            color: {
                                default: "text-cyan-600 focus:ring-cyan-600 dark:ring-offset-gray-800 dark:focus:ring-cyan-600",
                                dark: "text-gray-800 focus:ring-gray-800 dark:ring-offset-gray-800 dark:focus:ring-gray-800",
                                failure: "text-red-900 focus:ring-red-900 dark:ring-offset-red-900 dark:focus:ring-red-900",
                                gray: "text-gray-900 focus:ring-gray-900 dark:ring-offset-gray-900 dark:focus:ring-gray-900",
                                info: "text-cyan-800 focus:ring-cyan-800 dark:ring-offset-gray-800 dark:focus:ring-cyan-800",
                                light: "text-gray-900 focus:ring-gray-900 dark:ring-offset-gray-900 dark:focus:ring-gray-900",
                                purple: "text-purple-600 focus:ring-purple-600 dark:ring-offset-purple-600 dark:focus:ring-purple-600",
                                success: "text-green-800 focus:ring-green-800 dark:ring-offset-green-800 dark:focus:ring-green-800",
                                warning: "text-yellow-400 focus:ring-yellow-400 dark:ring-offset-yellow-400 dark:focus:ring-yellow-400",
                                blue: "text-blue-700 focus:ring-blue-600 dark:ring-offset-blue-700 dark:focus:ring-blue-700",
                                cyan: "text-cyan-600 focus:ring-cyan-600 dark:ring-offset-cyan-600 dark:focus:ring-cyan-600",
                                green: "text-green-600 focus:ring-green-600 dark:ring-offset-green-600 dark:focus:ring-green-600",
                                indigo: "text-indigo-700 focus:ring-indigo-700 dark:ring-offset-indigo-700 dark:focus:ring-indigo-700",
                                lime: "text-lime-700 focus:ring-lime-700 dark:ring-offset-lime-700 dark:focus:ring-lime-700",
                                pink: "text-pink-600 focus:ring-pink-600 dark:ring-offset-pink-600 dark:focus:ring-pink-600",
                                red: "text-red-600 focus:ring-red-600 dark:ring-offset-red-600 dark:focus:ring-red-600",
                                teal: "text-teal-600 focus:ring-teal-600 dark:ring-offset-teal-600 dark:focus:ring-teal-600",
                                yellow: "text-yellow-400 focus:ring-yellow-400 dark:ring-offset-yellow-400 dark:focus:ring-yellow-400"
                            }
                        }
                    },
                    datepicker: {
                        root: {
                            base: "relative"
                        },
                        popup: {
                            root: {
                                base: "absolute top-10 z-50 block pt-2",
                                inline: "relative top-0 z-auto",
                                inner: "inline-block rounded-lg bg-white p-4 shadow-lg dark:bg-gray-700"
                            },
                            header: {
                                base: "",
                                title: "px-2 py-3 text-center font-semibold text-gray-900 dark:text-white",
                                selectors: {
                                    base: "mb-2 flex justify-between",
                                    button: {
                                        base: "rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600",
                                        prev: "",
                                        next: "",
                                        view: ""
                                    }
                                }
                            },
                            view: {
                                base: "p-1"
                            },
                            footer: {
                                base: "mt-2 flex space-x-2",
                                button: {
                                    base: "w-full rounded-lg px-5 py-2 text-center text-sm font-medium focus:ring-4 focus:ring-cyan-300",
                                    today: "bg-cyan-700 text-white hover:bg-cyan-800 dark:bg-cyan-600 dark:hover:bg-cyan-700",
                                    clear: "border border-gray-300 bg-white text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                                }
                            }
                        },
                        views: {
                            days: {
                                header: {
                                    base: "mb-1 grid grid-cols-7",
                                    title: "h-6 text-center text-sm font-medium leading-6 text-gray-500 dark:text-gray-400"
                                },
                                items: {
                                    base: "grid w-64 grid-cols-7",
                                    item: {
                                        base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600 ",
                                        selected: "bg-cyan-700 text-white hover:bg-cyan-600",
                                        disabled: "text-gray-500"
                                    }
                                }
                            },
                            months: {
                                items: {
                                    base: "grid w-64 grid-cols-4",
                                    item: {
                                        base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600",
                                        selected: "bg-cyan-700 text-white hover:bg-cyan-600",
                                        disabled: "text-gray-500"
                                    }
                                }
                            },
                            years: {
                                items: {
                                    base: "grid w-64 grid-cols-4",
                                    item: {
                                        base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600",
                                        selected: "bg-cyan-700 text-white hover:bg-cyan-600",
                                        disabled: "text-gray-500"
                                    }
                                }
                            },
                            decades: {
                                items: {
                                    base: "grid w-64 grid-cols-4",
                                    item: {
                                        base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9  text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600",
                                        selected: "bg-cyan-700 text-white hover:bg-cyan-600",
                                        disabled: "text-gray-500"
                                    }
                                }
                            }
                        }
                    },
                    darkThemeToggle: {
                        root: {
                            base: "rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700",
                            icon: "h-5 w-5"
                        }
                    },
                    drawer: {
                        root: {
                            base: "fixed z-40 overflow-y-auto bg-white p-4 transition-transform dark:bg-gray-800",
                            backdrop: "fixed inset-0 z-30 bg-gray-900/50 dark:bg-gray-900/80",
                            edge: "bottom-16",
                            position: {
                                top: {
                                    on: "left-0 right-0 top-0 w-full transform-none",
                                    off: "left-0 right-0 top-0 w-full -translate-y-full"
                                },
                                right: {
                                    on: "right-0 top-0 h-screen w-80 transform-none",
                                    off: "right-0 top-0 h-screen w-80 translate-x-full"
                                },
                                bottom: {
                                    on: "bottom-0 left-0 right-0 w-full transform-none",
                                    off: "bottom-0 left-0 right-0 w-full translate-y-full"
                                },
                                left: {
                                    on: "left-0 top-0 h-screen w-80 transform-none",
                                    off: "left-0 top-0 h-screen w-80 -translate-x-full"
                                }
                            }
                        },
                        header: {
                            inner: {
                                closeButton: "absolute end-2.5 top-2.5 flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white",
                                closeIcon: "h-4 w-4",
                                titleIcon: "me-2.5 h-4 w-4",
                                titleText: "mb-4 inline-flex items-center text-base font-semibold text-gray-500 dark:text-gray-400"
                            },
                            collapsed: {
                                on: "hidden",
                                off: "block"
                            }
                        },
                        items: {
                            base: ""
                        }
                    },
                    dropdown: K,
                    fileInput: {
                        root: {
                            base: "flex"
                        },
                        field: {
                            base: "relative w-full",
                            input: {
                                base: "block w-full overflow-hidden rounded-lg border disabled:cursor-not-allowed disabled:opacity-50",
                                sizes: {
                                    sm: "sm:text-xs",
                                    md: "text-sm",
                                    lg: "sm:text-base"
                                },
                                colors: {
                                    gray: "border-gray-300 bg-gray-50 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
                                    info: "border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
                                    failure: "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
                                    warning: "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
                                    success: "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500"
                                }
                            }
                        }
                    },
                    floatingLabel: {
                        input: {
                            default: {
                                filled: {
                                    sm: "peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-xs text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500",
                                    md: "peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500"
                                },
                                outlined: {
                                    sm: "peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-xs text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500",
                                    md: "peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                                },
                                standard: {
                                    sm: "peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-xs text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500",
                                    md: "peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                                }
                            },
                            success: {
                                filled: {
                                    sm: "peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-green-600 bg-gray-50 px-2.5 pb-2.5 pt-5 text-xs text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0 dark:border-green-500 dark:bg-gray-700 dark:text-white dark:focus:border-green-500",
                                    md: "peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-green-600 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0 dark:border-green-500 dark:bg-gray-700 dark:text-white dark:focus:border-green-500"
                                },
                                outlined: {
                                    sm: "peer block w-full appearance-none rounded-lg border border-green-600 bg-transparent px-2.5 pb-2.5 pt-4 text-xs text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0 dark:border-green-500 dark:text-white dark:focus:border-green-500",
                                    md: "peer block w-full appearance-none rounded-lg border border-green-600 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0 dark:border-green-500 dark:text-white dark:focus:border-green-500"
                                },
                                standard: {
                                    sm: "peer block w-full appearance-none border-0 border-b-2 border-green-600 bg-transparent px-0 py-2.5 text-xs text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0 dark:border-green-500 dark:text-white dark:focus:border-green-500",
                                    md: "peer block w-full appearance-none border-0 border-b-2 border-green-600 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0 dark:border-green-500 dark:text-white dark:focus:border-green-500"
                                }
                            },
                            error: {
                                filled: {
                                    sm: "peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-red-600 bg-gray-50 px-2.5 pb-2.5 pt-5 text-xs text-gray-900 focus:border-red-600 focus:outline-none focus:ring-0 dark:border-red-500 dark:bg-gray-700 dark:text-white dark:focus:border-red-500",
                                    md: "peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-red-600 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-red-600 focus:outline-none focus:ring-0 dark:border-red-500 dark:bg-gray-700 dark:text-white dark:focus:border-red-500"
                                },
                                outlined: {
                                    sm: "peer block w-full appearance-none rounded-lg border border-red-600 bg-transparent px-2.5 pb-2.5 pt-4 text-xs text-gray-900 focus:border-red-600 focus:outline-none focus:ring-0 dark:border-red-500 dark:text-white dark:focus:border-red-500",
                                    md: "peer block w-full appearance-none rounded-lg border border-red-600 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-red-600 focus:outline-none focus:ring-0 dark:border-red-500 dark:text-white dark:focus:border-red-500"
                                },
                                standard: {
                                    sm: "peer block w-full appearance-none border-0 border-b-2 border-red-600 bg-transparent px-0 py-2.5 text-xs text-gray-900 focus:border-red-600 focus:outline-none focus:ring-0 dark:border-red-500 dark:text-white dark:focus:border-red-500",
                                    md: "peer block w-full appearance-none border-0 border-b-2 border-red-600 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-red-600 focus:outline-none focus:ring-0 dark:border-red-500 dark:text-white dark:focus:border-red-500"
                                }
                            }
                        },
                        label: {
                            default: {
                                filled: {
                                    sm: "absolute left-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 text-xs text-gray-500 transition-transform  duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500",
                                    md: "absolute left-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 text-sm text-gray-500 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
                                },
                                outlined: {
                                    sm: "absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 bg-white px-2 text-xs text-gray-500 transition-transform duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500",
                                    md: "absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 bg-white px-2 text-sm text-gray-500 transition-transform duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500"
                                },
                                standard: {
                                    sm: "absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-xs text-gray-500 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500",
                                    md: "absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-sm text-gray-500 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
                                }
                            },
                            success: {
                                filled: {
                                    sm: "absolute left-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 text-sm text-green-600 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 dark:text-green-500",
                                    md: "absolute left-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 text-sm text-green-600 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 dark:text-green-500"
                                },
                                outlined: {
                                    sm: "absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 bg-white px-2 text-sm text-green-600 transition-transform duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 dark:bg-gray-900 dark:text-green-500",
                                    md: "absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 bg-white px-2 text-sm text-green-600 transition-transform duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 dark:bg-gray-900 dark:text-green-500"
                                },
                                standard: {
                                    sm: "absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-xs text-green-600 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 dark:text-green-500",
                                    md: "absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-sm text-green-600 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 dark:text-green-500"
                                }
                            },
                            error: {
                                filled: {
                                    sm: "absolute left-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 text-xs text-red-600 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 dark:text-red-500",
                                    md: "absolute left-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 text-xs text-red-600 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 dark:text-red-500"
                                },
                                outlined: {
                                    sm: "absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 bg-white px-2 text-xs text-red-600 transition-transform duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 dark:bg-gray-900 dark:text-red-500",
                                    md: "absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 bg-white px-2 text-xs text-red-600 transition-transform duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 dark:bg-gray-900 dark:text-red-500"
                                },
                                standard: {
                                    sm: "absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-xs text-red-600 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 dark:text-red-500",
                                    md: "absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-sm text-red-600 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 dark:text-red-500"
                                }
                            }
                        },
                        helperText: {
                            default: "mt-2 text-xs text-gray-600 dark:text-gray-400",
                            success: "mt-2 text-xs text-green-600 dark:text-green-400",
                            error: "mt-2 text-xs text-red-600 dark:text-red-400"
                        }
                    },
                    footer: {
                        root: {
                            base: "w-full rounded-lg bg-white shadow dark:bg-gray-800 md:flex md:items-center md:justify-between",
                            container: "w-full p-6",
                            bgDark: "bg-gray-800"
                        },
                        groupLink: {
                            base: "flex flex-wrap text-sm text-gray-500 dark:text-white",
                            link: {
                                base: "me-4 last:mr-0 md:mr-6",
                                href: "hover:underline"
                            },
                            col: "flex-col space-y-4"
                        },
                        icon: {
                            base: "text-gray-500 dark:hover:text-white",
                            size: "h-5 w-5"
                        },
                        title: {
                            base: "mb-6 text-sm font-semibold uppercase text-gray-500 dark:text-white"
                        },
                        divider: {
                            base: "my-6 w-full border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8"
                        },
                        copyright: {
                            base: "text-sm text-gray-500 dark:text-gray-400 sm:text-center",
                            href: "ml-1 hover:underline",
                            span: "ml-1"
                        },
                        brand: {
                            base: "mb-4 flex items-center sm:mb-0",
                            img: "mr-3 h-8",
                            span: "self-center whitespace-nowrap text-2xl font-semibold text-gray-800 dark:text-white"
                        }
                    },
                    helperText: {
                        root: {
                            base: "mt-2 text-sm",
                            colors: {
                                gray: "text-gray-500 dark:text-gray-400",
                                info: "text-cyan-700 dark:text-cyan-800",
                                success: "text-green-600 dark:text-green-500",
                                failure: "text-red-600 dark:text-red-500",
                                warning: "text-yellow-500 dark:text-yellow-600"
                            }
                        }
                    },
                    kbd: {
                        root: {
                            base: "rounded-lg border border-gray-200 bg-gray-100 px-2 py-1.5 text-xs font-semibold text-gray-800 dark:border-gray-500 dark:bg-gray-600 dark:text-gray-100",
                            icon: "inline-block"
                        }
                    },
                    label: {
                        root: {
                            base: "text-sm font-medium",
                            disabled: "opacity-50",
                            colors: {
                                default: "text-gray-900 dark:text-white",
                                info: "text-cyan-500 dark:text-cyan-600",
                                failure: "text-red-700 dark:text-red-500",
                                warning: "text-yellow-500 dark:text-yellow-600",
                                success: "text-green-700 dark:text-green-500"
                            }
                        }
                    },
                    listGroup: {
                        root: {
                            base: "list-none rounded-lg border border-gray-200 bg-white text-left text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                        },
                        item: {
                            base: "[&>*]:first:rounded-t-lg [&>*]:last:rounded-b-lg [&>*]:last:border-b-0",
                            link: {
                                base: "flex w-full items-center border-b border-gray-200 px-4 py-2 dark:border-gray-600",
                                active: {
                                    off: "hover:bg-gray-100 hover:text-cyan-700 focus:text-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:text-white dark:focus:ring-gray-500",
                                    on: "bg-cyan-700 text-white dark:bg-gray-800"
                                },
                                disabled: {
                                    off: "",
                                    on: "cursor-not-allowed bg-gray-100 text-gray-900 hover:bg-gray-100 hover:text-gray-900 focus:text-gray-900"
                                },
                                href: {
                                    off: "",
                                    on: ""
                                },
                                icon: "mr-2 h-4 w-4 fill-current"
                            }
                        }
                    },
                    list: {
                        root: {
                            base: "list-inside space-y-1 text-gray-500 dark:text-gray-400",
                            ordered: {
                                off: "list-disc",
                                on: "list-decimal"
                            },
                            horizontal: "flex list-none flex-wrap items-center justify-center space-x-4 space-y-0",
                            unstyled: "list-none",
                            nested: "mt-2 ps-5"
                        },
                        item: {
                            withIcon: {
                                off: "",
                                on: "flex items-center"
                            },
                            icon: "me-2 h-3.5 w-3.5 flex-shrink-0"
                        }
                    },
                    megaMenu: $,
                    modal: {
                        root: {
                            base: "fixed inset-x-0 top-0 z-50 h-screen overflow-y-auto overflow-x-hidden md:inset-0 md:h-full",
                            show: {
                                on: "flex bg-gray-900 bg-opacity-50 dark:bg-opacity-80",
                                off: "hidden"
                            },
                            sizes: {
                                sm: "max-w-sm",
                                md: "max-w-md",
                                lg: "max-w-lg",
                                xl: "max-w-xl",
                                "2xl": "max-w-2xl",
                                "3xl": "max-w-3xl",
                                "4xl": "max-w-4xl",
                                "5xl": "max-w-5xl",
                                "6xl": "max-w-6xl",
                                "7xl": "max-w-7xl"
                            },
                            positions: {
                                "top-left": "items-start justify-start",
                                "top-center": "items-start justify-center",
                                "top-right": "items-start justify-end",
                                "center-left": "items-center justify-start",
                                center: "items-center justify-center",
                                "center-right": "items-center justify-end",
                                "bottom-right": "items-end justify-end",
                                "bottom-center": "items-end justify-center",
                                "bottom-left": "items-end justify-start"
                            }
                        },
                        content: {
                            base: "relative h-full w-full p-4 md:h-auto",
                            inner: "relative flex max-h-[90dvh] flex-col rounded-lg bg-white shadow dark:bg-gray-700"
                        },
                        body: {
                            base: "flex-1 overflow-auto p-6",
                            popup: "pt-0"
                        },
                        header: {
                            base: "flex items-start justify-between rounded-t border-b p-5 dark:border-gray-600",
                            popup: "border-b-0 p-2",
                            title: "text-xl font-medium text-gray-900 dark:text-white",
                            close: {
                                base: "ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white",
                                icon: "h-5 w-5"
                            }
                        },
                        footer: {
                            base: "flex items-center space-x-2 rounded-b border-gray-200 p-6 dark:border-gray-600",
                            popup: "border-t"
                        }
                    },
                    navbar: X,
                    pagination: {
                        base: "",
                        layout: {
                            table: {
                                base: "text-sm text-gray-700 dark:text-gray-400",
                                span: "font-semibold text-gray-900 dark:text-white"
                            }
                        },
                        pages: {
                            base: "xs:mt-0 mt-2 inline-flex items-center -space-x-px",
                            showIcon: "inline-flex",
                            previous: {
                                base: "ml-0 rounded-l-lg border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",
                                icon: "h-5 w-5"
                            },
                            next: {
                                base: "rounded-r-lg border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",
                                icon: "h-5 w-5"
                            },
                            selector: {
                                base: "w-12 border border-gray-300 bg-white py-2 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",
                                active: "bg-cyan-50 text-cyan-600 hover:bg-cyan-100 hover:text-cyan-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white",
                                disabled: "cursor-not-allowed opacity-50"
                            }
                        }
                    },
                    popover: {
                        base: "absolute z-20 inline-block w-max max-w-[100vw] bg-white outline-none border border-gray-200 rounded-lg shadow-sm dark:border-gray-600 dark:bg-gray-800",
                        content: "z-10 overflow-hidden rounded-[7px]",
                        arrow: {
                            base: "absolute h-2 w-2 z-0 rotate-45 mix-blend-lighten bg-white border border-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:mix-blend-color",
                            placement: "-4px"
                        }
                    },
                    progress: {
                        base: "w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700",
                        label: "mb-1 flex justify-between font-medium dark:text-white",
                        bar: "space-x-2 rounded-full text-center font-medium leading-none text-cyan-300 dark:text-cyan-100",
                        color: {
                            dark: "bg-gray-600 dark:bg-gray-300",
                            blue: "bg-blue-600",
                            red: "bg-red-600 dark:bg-red-500",
                            green: "bg-green-600 dark:bg-green-500",
                            yellow: "bg-yellow-400",
                            indigo: "bg-indigo-600 dark:bg-indigo-500",
                            purple: "bg-purple-600 dark:bg-purple-500",
                            cyan: "bg-cyan-600",
                            gray: "bg-gray-500",
                            lime: "bg-lime-600",
                            pink: "bg-pink-500",
                            teal: "bg-teal-600"
                        },
                        size: {
                            sm: "h-1.5",
                            md: "h-2.5",
                            lg: "h-4",
                            xl: "h-6"
                        }
                    },
                    radio: {
                        root: {
                            base: "h-4 w-4 border border-gray-300 text-cyan-600 focus:ring-2 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:focus:bg-cyan-600 dark:focus:ring-cyan-600"
                        }
                    },
                    rangeSlider: {
                        root: {
                            base: "flex"
                        },
                        field: {
                            base: "relative w-full",
                            input: {
                                base: "w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700",
                                sizes: {
                                    sm: "h-1",
                                    md: "h-2",
                                    lg: "h-3"
                                }
                            }
                        }
                    },
                    rating: {
                        root: {
                            base: "flex items-center"
                        },
                        star: {
                            empty: "text-gray-300 dark:text-gray-500",
                            filled: "text-yellow-400",
                            sizes: {
                                sm: "h-5 w-5",
                                md: "h-7 w-7",
                                lg: "h-10 w-10"
                            }
                        }
                    },
                    ratingAdvanced: {
                        base: "flex items-center",
                        label: "text-sm font-medium text-cyan-600 dark:text-cyan-500",
                        progress: {
                            base: "mx-4 h-5 w-2/4 rounded bg-gray-200 dark:bg-gray-700",
                            fill: "h-5 rounded bg-yellow-400",
                            label: "text-sm font-medium text-cyan-600 dark:text-cyan-500"
                        }
                    },
                    select: {
                        base: "flex",
                        addon: "inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400",
                        field: {
                            base: "relative w-full",
                            icon: {
                                base: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
                                svg: "h-5 w-5 text-gray-500 dark:text-gray-400"
                            },
                            select: {
                                base: "block w-full border disabled:cursor-not-allowed disabled:opacity-50",
                                withIcon: {
                                    on: "pl-10",
                                    off: ""
                                },
                                withAddon: {
                                    on: "rounded-r-lg",
                                    off: "rounded-lg"
                                },
                                withShadow: {
                                    on: "shadow-sm dark:shadow-sm-light",
                                    off: ""
                                },
                                sizes: {
                                    sm: "p-2 sm:text-xs",
                                    md: "p-2.5 text-sm",
                                    lg: "p-4 sm:text-base"
                                },
                                colors: {
                                    gray: "border-gray-300 bg-gray-50 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
                                    info: "border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
                                    failure: "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
                                    warning: "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
                                    success: "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500"
                                }
                            }
                        }
                    },
                    textInput: {
                        base: "flex",
                        addon: "inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400",
                        field: {
                            base: "relative w-full",
                            icon: {
                                base: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
                                svg: "h-5 w-5 text-gray-500 dark:text-gray-400"
                            },
                            rightIcon: {
                                base: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3",
                                svg: "h-5 w-5 text-gray-500 dark:text-gray-400"
                            },
                            input: {
                                base: "block w-full border disabled:cursor-not-allowed disabled:opacity-50",
                                sizes: {
                                    sm: "p-2 sm:text-xs",
                                    md: "p-2.5 text-sm",
                                    lg: "p-4 sm:text-base"
                                },
                                colors: {
                                    gray: "border-gray-300 bg-gray-50 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
                                    info: "border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
                                    failure: "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
                                    warning: "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
                                    success: "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500"
                                },
                                withRightIcon: {
                                    on: "pr-10",
                                    off: ""
                                },
                                withIcon: {
                                    on: "pl-10",
                                    off: ""
                                },
                                withAddon: {
                                    on: "rounded-r-lg",
                                    off: "rounded-lg"
                                },
                                withShadow: {
                                    on: "shadow-sm dark:shadow-sm-light",
                                    off: ""
                                }
                            }
                        }
                    },
                    textarea: {
                        base: "block w-full rounded-lg border text-sm disabled:cursor-not-allowed disabled:opacity-50",
                        colors: {
                            gray: "border-gray-300 bg-gray-50 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
                            info: "border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
                            failure: "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
                            warning: "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
                            success: "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500"
                        },
                        withShadow: {
                            on: "shadow-sm dark:shadow-sm-light",
                            off: ""
                        }
                    },
                    toggleSwitch: {
                        root: {
                            base: "group relative flex items-center rounded-lg focus:outline-none",
                            active: {
                                on: "cursor-pointer",
                                off: "cursor-not-allowed opacity-50"
                            },
                            label: "ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
                        },
                        toggle: {
                            base: "rounded-full border group-focus:ring-4 group-focus:ring-cyan-500/25",
                            checked: {
                                on: "after:translate-x-full after:border-white",
                                off: "border-gray-200 bg-gray-200 dark:border-gray-600 dark:bg-gray-700",
                                color: {
                                    blue: "border-cyan-700 bg-cyan-700",
                                    dark: "bg-dark-700 border-dark-900",
                                    failure: "border-red-900 bg-red-700",
                                    gray: "border-gray-600 bg-gray-500",
                                    green: "border-green-700 bg-green-600",
                                    light: "bg-light-700 border-light-900",
                                    red: "border-red-900 bg-red-700",
                                    purple: "border-purple-900 bg-purple-700",
                                    success: "border-green-500 bg-green-500",
                                    yellow: "border-yellow-400 bg-yellow-400",
                                    warning: "border-yellow-600 bg-yellow-600",
                                    cyan: "border-cyan-500 bg-cyan-500",
                                    lime: "border-lime-400 bg-lime-400",
                                    indigo: "border-indigo-400 bg-indigo-400",
                                    teal: "bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4",
                                    info: "border-cyan-600 bg-cyan-600",
                                    pink: "border-pink-600 bg-pink-600"
                                }
                            },
                            sizes: {
                                sm: "h-5 w-9 after:absolute after:left-[2px] after:top-[2px] after:h-4 after:w-4",
                                md: "h-6 w-11 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5",
                                lg: "h-7 w-14 after:absolute after:left-[4px] after:top-0.5 after:h-6 after:w-6"
                            }
                        }
                    },
                    sidebar: {
                        root: {
                            base: "h-full",
                            collapsed: {
                                on: "w-16",
                                off: "w-64"
                            },
                            inner: "h-full overflow-y-auto overflow-x-hidden rounded bg-gray-50 px-3 py-4 dark:bg-gray-800"
                        },
                        collapse: {
                            button: "group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
                            icon: {
                                base: "h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white",
                                open: {
                                    off: "",
                                    on: "text-gray-900"
                                }
                            },
                            label: {
                                base: "ml-3 flex-1 whitespace-nowrap text-left",
                                icon: {
                                    base: "h-6 w-6 transition delay-0 ease-in-out",
                                    open: {
                                        on: "rotate-180",
                                        off: ""
                                    }
                                }
                            },
                            list: "space-y-2 py-2"
                        },
                        cta: {
                            base: "mt-6 rounded-lg bg-gray-100 p-4 dark:bg-gray-700",
                            color: {
                                blue: "bg-cyan-50 dark:bg-cyan-900",
                                dark: "bg-dark-50 dark:bg-dark-900",
                                failure: "bg-red-50 dark:bg-red-900",
                                gray: "bg-alternative-50 dark:bg-alternative-900",
                                green: "bg-green-50 dark:bg-green-900",
                                light: "bg-light-50 dark:bg-light-900",
                                red: "bg-red-50 dark:bg-red-900",
                                purple: "bg-purple-50 dark:bg-purple-900",
                                success: "bg-green-50 dark:bg-green-900",
                                yellow: "bg-yellow-50 dark:bg-yellow-900",
                                warning: "bg-yellow-50 dark:bg-yellow-900"
                            }
                        },
                        item: {
                            base: "flex items-center justify-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
                            active: "bg-gray-100 dark:bg-gray-700",
                            collapsed: {
                                insideCollapse: "group w-full pl-8 transition duration-75",
                                noIcon: "font-bold"
                            },
                            content: {
                                base: "flex-1 whitespace-nowrap px-3"
                            },
                            icon: {
                                base: "h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white",
                                active: "text-gray-700 dark:text-gray-100"
                            },
                            label: "",
                            listItem: ""
                        },
                        items: {
                            base: ""
                        },
                        itemGroup: {
                            base: "mt-4 space-y-2 border-t border-gray-200 pt-4 first:mt-0 first:border-t-0 first:pt-0 dark:border-gray-700"
                        },
                        logo: {
                            base: "mb-5 flex items-center pl-2.5",
                            collapsed: {
                                on: "hidden",
                                off: "self-center whitespace-nowrap text-xl font-semibold dark:text-white"
                            },
                            img: "mr-3 h-6 sm:h-7"
                        }
                    },
                    spinner: {
                        base: "inline animate-spin text-gray-200",
                        color: {
                            failure: "fill-red-600",
                            gray: "fill-gray-600",
                            info: "fill-cyan-600",
                            pink: "fill-pink-600",
                            purple: "fill-purple-600",
                            success: "fill-green-500",
                            warning: "fill-yellow-400"
                        },
                        light: {
                            off: {
                                base: "dark:text-gray-600",
                                color: {
                                    failure: "",
                                    gray: "dark:fill-gray-300",
                                    info: "",
                                    pink: "",
                                    purple: "",
                                    success: "",
                                    warning: ""
                                }
                            },
                            on: {
                                base: "",
                                color: {
                                    failure: "",
                                    gray: "",
                                    info: "",
                                    pink: "",
                                    purple: "",
                                    success: "",
                                    warning: ""
                                }
                            }
                        },
                        size: {
                            xs: "h-3 w-3",
                            sm: "h-4 w-4",
                            md: "h-6 w-6",
                            lg: "h-8 w-8",
                            xl: "h-10 w-10"
                        }
                    },
                    table: {
                        root: {
                            base: "w-full text-left text-sm text-gray-500 dark:text-gray-400",
                            shadow: "absolute left-0 top-0 -z-10 h-full w-full rounded-lg bg-white drop-shadow-md dark:bg-black",
                            wrapper: "relative"
                        },
                        body: {
                            base: "group/body",
                            cell: {
                                base: "px-6 py-4 group-first/body:group-first/row:first:rounded-tl-lg group-first/body:group-first/row:last:rounded-tr-lg group-last/body:group-last/row:first:rounded-bl-lg group-last/body:group-last/row:last:rounded-br-lg"
                            }
                        },
                        head: {
                            base: "group/head text-xs uppercase text-gray-700 dark:text-gray-400",
                            cell: {
                                base: "bg-gray-50 px-6 py-3 group-first/head:first:rounded-tl-lg group-first/head:last:rounded-tr-lg dark:bg-gray-700"
                            }
                        },
                        row: {
                            base: "group/row",
                            hovered: "hover:bg-gray-50 dark:hover:bg-gray-600",
                            striped: "odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700"
                        }
                    },
                    tabs: {
                        base: "flex flex-col gap-2",
                        tablist: {
                            base: "flex text-center",
                            styles: {
                                default: "flex-wrap border-b border-gray-200 dark:border-gray-700",
                                underline: "-mb-px flex-wrap border-b border-gray-200 dark:border-gray-700",
                                pills: "flex-wrap space-x-2 text-sm font-medium text-gray-500 dark:text-gray-400",
                                fullWidth: "grid w-full grid-flow-col divide-x divide-gray-200 rounded-none text-sm font-medium shadow dark:divide-gray-700 dark:text-gray-400"
                            },
                            tabitem: {
                                base: "flex items-center justify-center rounded-t-lg p-4 text-sm font-medium first:ml-0 focus:outline-none focus:ring-4 focus:ring-cyan-300 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500",
                                styles: {
                                    default: {
                                        base: "rounded-t-lg",
                                        active: {
                                            on: "bg-gray-100 text-cyan-600 dark:bg-gray-800 dark:text-cyan-500",
                                            off: "text-gray-500 hover:bg-gray-50 hover:text-gray-600 dark:text-gray-400 dark:hover:bg-gray-800  dark:hover:text-gray-300"
                                        }
                                    },
                                    underline: {
                                        base: "rounded-t-lg",
                                        active: {
                                            on: "active rounded-t-lg border-b-2 border-cyan-600 text-cyan-600 dark:border-cyan-500 dark:text-cyan-500",
                                            off: "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
                                        }
                                    },
                                    pills: {
                                        base: "",
                                        active: {
                                            on: "rounded-lg bg-cyan-600 text-white",
                                            off: "rounded-lg hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white"
                                        }
                                    },
                                    fullWidth: {
                                        base: "ml-0 flex w-full rounded-none first:ml-0",
                                        active: {
                                            on: "active rounded-none bg-gray-100 p-4 text-gray-900 dark:bg-gray-700 dark:text-white",
                                            off: "rounded-none bg-white hover:bg-gray-50 hover:text-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
                                        }
                                    }
                                },
                                icon: "mr-2 h-5 w-5"
                            }
                        },
                        tabitemcontainer: {
                            base: "",
                            styles: {
                                default: "",
                                underline: "",
                                pills: "",
                                fullWidth: ""
                            }
                        },
                        tabpanel: "py-3"
                    },
                    timeline: {
                        root: {
                            direction: {
                                horizontal: "sm:flex",
                                vertical: "relative border-l border-gray-200 dark:border-gray-700"
                            }
                        },
                        item: {
                            root: {
                                horizontal: "relative mb-6 sm:mb-0",
                                vertical: "mb-10 ml-6"
                            },
                            content: {
                                root: {
                                    base: "mt-3 sm:pr-8"
                                },
                                body: {
                                    base: "mb-4 text-base font-normal text-gray-500 dark:text-gray-400"
                                },
                                time: {
                                    base: "mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
                                },
                                title: {
                                    base: "text-lg font-semibold text-gray-900 dark:text-white"
                                }
                            },
                            point: {
                                horizontal: "flex items-center",
                                line: "hidden h-0.5 w-full bg-gray-200 dark:bg-gray-700 sm:flex",
                                marker: {
                                    base: {
                                        horizontal: "absolute -left-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700",
                                        vertical: "absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"
                                    },
                                    icon: {
                                        base: "h-3 w-3 text-cyan-600 dark:text-cyan-300",
                                        wrapper: "absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-200 ring-8 ring-white dark:bg-cyan-900 dark:ring-gray-900"
                                    }
                                },
                                vertical: ""
                            }
                        }
                    },
                    toast: {
                        root: {
                            base: "flex w-full max-w-xs items-center rounded-lg bg-white p-4 text-gray-500 shadow dark:bg-gray-800 dark:text-gray-400",
                            closed: "opacity-0 ease-out"
                        },
                        toggle: {
                            base: "-m-1.5 ml-auto inline-flex h-8 w-8 rounded-lg bg-white p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white",
                            icon: "h-5 w-5 shrink-0"
                        }
                    },
                    tooltip: {
                        target: "w-fit",
                        animation: "transition-opacity",
                        arrow: {
                            base: "absolute z-10 h-2 w-2 rotate-45",
                            style: {
                                dark: "bg-gray-900 dark:bg-gray-700",
                                light: "bg-white",
                                auto: "bg-white dark:bg-gray-700"
                            },
                            placement: "-4px"
                        },
                        base: "absolute z-10 inline-block rounded-lg px-3 py-2 text-sm font-medium shadow-sm",
                        hidden: "invisible opacity-0",
                        style: {
                            dark: "bg-gray-900 text-white dark:bg-gray-700",
                            light: "border border-gray-200 bg-white text-gray-900",
                            auto: "border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white"
                        },
                        content: "relative z-20"
                    }
                },
                Q = {
                    theme: U(Z)
                };

            function J(e) {
                e && (Q.theme = V(Z, e))
            }

            function ee() {
                return U(Q.theme)
            }
            let et = (0, s.createContext)(void 0);

            function er() {
                let e = (0, s.useContext)(et);
                if (!e) throw Error("useAccordionContext should be used within the AccordionPanelContext provider!");
                return e
            }
            let en = e => {
                    let {
                        children: t,
                        className: r,
                        theme: n = {},
                        ...o
                    } = e, {
                        isOpen: a
                    } = er(), l = V(ee().accordion.content, n);
                    return (0, i.jsx)("div", {
                        className: G(l.base, r),
                        "data-testid": "flowbite-accordion-content",
                        hidden: !a,
                        ...o,
                        children: t
                    })
                },
                eo = e => {
                    let {
                        children: t,
                        ...r
                    } = e, {
                        alwaysOpen: n
                    } = r, [o, a] = (0, s.useState)(r.isOpen), l = n ? { ...r,
                        isOpen: o,
                        setOpen: () => a(!o)
                    } : r;
                    return (0, i.jsx)(et.Provider, {
                        value: l,
                        children: t
                    })
                },
                ea = e => {
                    let {
                        as: t = "h2",
                        children: r,
                        className: n,
                        theme: o = {},
                        ...a
                    } = e, {
                        arrowIcon: l,
                        flush: s,
                        isOpen: d,
                        setOpen: u
                    } = er(), c = V(ee().accordion.title, o);
                    return (0, i.jsxs)("button", {
                        className: G(c.base, c.flush[s ? "on" : "off"], c.open[d ? "on" : "off"], n),
                        onClick: () => void 0 !== u && u(),
                        type: "button",
                        ...a,
                        children: [(0, i.jsx)(t, {
                            className: c.heading,
                            "data-testid": "flowbite-accordion-heading",
                            children: r
                        }), l && (0, i.jsx)(l, {
                            "aria-hidden": !0,
                            className: G(c.arrow.base, c.arrow.open[d ? "on" : "off"]),
                            "data-testid": "flowbite-accordion-arrow"
                        })]
                    })
                },
                el = e => {
                    let {
                        alwaysOpen: t = !1,
                        arrowIcon: r = u.kWQ,
                        children: n,
                        flush: o = !1,
                        collapseAll: a = !1,
                        className: l,
                        theme: d = {},
                        ...c
                    } = e, [f, g] = (0, s.useState)(a ? -1 : 0), p = (0, s.useMemo)(() => s.Children.map(n, (e, n) => (0, s.cloneElement)(e, {
                        alwaysOpen: t,
                        arrowIcon: r,
                        flush: o,
                        isOpen: f === n,
                        setOpen: () => g(f === n ? -1 : n)
                    })), [t, r, n, o, f]), b = V(ee().accordion.root, d);
                    return (0, i.jsx)("div", {
                        className: G(b.base, b.flush[o ? "on" : "off"], l),
                        "data-testid": "flowbite-accordion",
                        ...c,
                        children: p
                    })
                };
            el.displayName = "Accordion", eo.displayName = "Accordion.Panel", ea.displayName = "Accordion.Title", en.displayName = "Accordion.Content";
            let ei = Object.assign(el, {
                    Panel: eo,
                    Title: ea,
                    Content: en
                }),
                es = ({
                    children: e,
                    className: t,
                    theme: r = {},
                    ...n
                }) => {
                    let o = V(ee().avatar.group, r);
                    return (0, i.jsx)("div", {
                        "data-testid": "avatar-group-element",
                        className: G(o.base, t),
                        ...n,
                        children: e
                    })
                };
            es.displayName = "Avatar.Group";
            let ed = ({
                className: e,
                href: t,
                theme: r = {},
                total: n,
                ...o
            }) => {
                let a = V(ee().avatar.groupCounter, r);
                return (0, i.jsxs)("a", {
                    href: t,
                    className: G(a.base, e),
                    ...o,
                    children: ["+", n]
                })
            };
            ed.displayName = "Avatar.GroupCounter";
            let eu = ({
                alt: e = "",
                bordered: t = !1,
                children: r,
                className: n,
                color: o = "light",
                img: a,
                placeholderInitials: l = "",
                rounded: s = !1,
                size: d = "md",
                stacked: u = !1,
                status: c,
                statusPosition: f = "top-left",
                theme: g = {},
                ...p
            }) => {
                let b = V(ee().avatar, g),
                    m = G(b.root.img.base, t && b.root.bordered, t && b.root.color[o], s && b.root.rounded, u && b.root.stacked, b.root.img.on, b.root.size[d]),
                    h = {
                        className: G(m, b.root.img.on),
                        "data-testid": "flowbite-avatar-img"
                    };
                return (0, i.jsxs)("div", {
                    className: G(b.root.base, n),
                    "data-testid": "flowbite-avatar",
                    ...p,
                    children: [(0, i.jsxs)("div", {
                        className: "relative",
                        children: [a ? "string" == typeof a ? (0, i.jsx)("img", {
                            alt: e,
                            src: a,
                            ...h
                        }) : a({
                            alt: e,
                            ...h
                        }) : l ? (0, i.jsx)("div", {
                            className: G(b.root.img.off, b.root.initials.base, u && b.root.stacked, t && b.root.bordered, t && b.root.color[o], b.root.size[d], s && b.root.rounded),
                            "data-testid": "flowbite-avatar-initials-placeholder",
                            children: (0, i.jsx)("span", {
                                className: G(b.root.initials.text),
                                "data-testid": "flowbite-avatar-initials-placeholder-text",
                                children: l
                            })
                        }) : (0, i.jsx)("div", {
                            className: G(m, b.root.img.off),
                            "data-testid": "flowbite-avatar-img",
                            children: (0, i.jsx)("svg", {
                                className: b.root.img.placeholder,
                                fill: "currentColor",
                                viewBox: "0 0 20 20",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: (0, i.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",
                                    clipRule: "evenodd"
                                })
                            })
                        }), c && (0, i.jsx)("span", {
                            "data-testid": "flowbite-avatar-status",
                            className: G(b.root.status.base, b.root.status[c], b.root.statusPosition[f])
                        })]
                    }), r && (0, i.jsx)("div", {
                        children: r
                    })]
                })
            };
            eu.displayName = "Avatar", Object.assign(eu, {
                Group: es,
                Counter: ed
            });
            let ec = ({
                children: e,
                color: t = "info",
                href: r,
                icon: n,
                size: o = "xs",
                className: a,
                theme: l = {},
                ...s
            }) => {
                let d = V(ee().badge, l),
                    u = () => (0, i.jsxs)("span", {
                        className: G(d.root.base, d.root.color[t], d.root.size[o], d.icon[n ? "on" : "off"], a),
                        "data-testid": "flowbite-badge",
                        ...s,
                        children: [n && (0, i.jsx)(n, {
                            "aria-hidden": !0,
                            className: d.icon.size[o],
                            "data-testid": "flowbite-badge-icon"
                        }), e && (0, i.jsx)("span", {
                            children: e
                        })]
                    });
                return r ? (0, i.jsx)("a", {
                    className: d.root.href,
                    href: r,
                    children: (0, i.jsx)(u, {})
                }) : (0, i.jsx)(u, {})
            };
            ec.displayName = "Badge";
            let ef = ({
                className: e,
                color: t = "info",
                light: r,
                size: n = "md",
                theme: o = {},
                ...a
            }) => {
                let l = V(ee().spinner, o);
                return (0, i.jsx)("span", {
                    role: "status",
                    ...a,
                    children: (0, i.jsxs)("svg", {
                        fill: "none",
                        viewBox: "0 0 100 101",
                        className: G(l.base, l.color[t], l.light[r ? "on" : "off"].base, l.light[r ? "on" : "off"].color[t], l.size[n], e),
                        children: [(0, i.jsx)("path", {
                            d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
                            fill: "currentColor"
                        }), (0, i.jsx)("path", {
                            d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
                            fill: "currentFill"
                        })]
                    })
                })
            };
            ef.displayName = "Spinner";
            let eg = (0, s.forwardRef)(({
                children: e,
                as: t,
                href: r,
                type: n = "button",
                ...o
            }, a) => (0, s.createElement)(t || (r ? "a" : "button"), {
                ref: a,
                href: r,
                type: n,
                ...o
            }, e));
            eg.displayName = "ButtonBaseComponent";
            let ep = (e, t, r) => s.Children.map(e, (n, o) => (0, s.isValidElement)(n) ? n.props.children ? (0, s.cloneElement)(n, { ...n.props,
                    children: ep(n.props.children, t, r),
                    positionInGroup: eb(o, s.Children.count(e))
                }) : (0, s.cloneElement)(n, {
                    outline: t,
                    pill: r,
                    positionInGroup: eb(o, s.Children.count(e))
                }) : n),
                eb = (e, t) => 0 === e ? "start" : e === t - 1 ? "end" : "middle",
                em = ({
                    children: e,
                    className: t,
                    outline: r,
                    pill: n,
                    theme: o = {},
                    ...a
                }) => {
                    let l = (0, s.useMemo)(() => ep(e, r, n), [e, r, n]),
                        d = V(ee().buttonGroup, o);
                    return (0, i.jsx)("div", {
                        className: G(d.base, t),
                        role: "group",
                        ...a,
                        children: l
                    })
                };
            em.displayName = "Button.Group";
            let eh = (0, s.forwardRef)(({
                children: e,
                className: t,
                color: r = "info",
                disabled: n,
                fullSized: o,
                isProcessing: a = !1,
                processingLabel: l = "Loading...",
                processingSpinner: s,
                gradientDuoTone: d,
                gradientMonochrome: u,
                label: c,
                outline: f = !1,
                pill: g = !1,
                positionInGroup: p = "none",
                size: b = "md",
                theme: m = {},
                ...h
            }, y) => {
                let {
                    buttonGroup: v,
                    button: x
                } = ee(), w = V(x, m);
                return (0, i.jsx)(eg, {
                    ref: y,
                    disabled: n,
                    className: G(w.base, n && w.disabled, !d && !u && w.color[r], d && !u && w.gradientDuoTone[d], !d && u && w.gradient[u], f && (w.outline.color[r] ? ? w.outline.color.default), w.pill[g ? "on" : "off"], o && w.fullSized, v.position[p], t),
                    ...h,
                    children: (0, i.jsx)("span", {
                        className: G(w.inner.base, w.outline[f ? "on" : "off"], w.outline.pill[f && g ? "on" : "off"], w.size[b], f && !w.outline.color[r] && w.inner.outline, a && w.isProcessing, a && w.inner.isProcessingPadding[b], w.inner.position[p]),
                        children: (0, i.jsxs)(i.Fragment, {
                            children: [a && (0, i.jsx)("span", {
                                className: G(w.spinnerSlot, w.spinnerLeftPosition[b]),
                                children: s || (0, i.jsx)(ef, {
                                    size: b
                                })
                            }), void 0 !== e ? e : (0, i.jsx)("span", {
                                "data-testid": "flowbite-button-label",
                                className: G(w.label),
                                children: a ? l : c
                            })]
                        })
                    })
                })
            });
            eh.displayName = "Button";
            let ey = Object.assign(eh, {
                    Group: em
                }),
                ev = e => {
                    let {
                        children: t,
                        ...r
                    } = e;
                    return (0, i.jsx)(ey, {
                        onClick: e => {
                            let t = e.target.closest('[role="banner"]');
                            null == t || t.remove()
                        },
                        ...r,
                        children: t
                    })
                };
            ev.displayName = "Banner.CollapseButton";
            let ex = ({
                children: e,
                ...t
            }) => (0, i.jsx)("div", {
                "data-testid": "flowbite-banner",
                role: "banner",
                tabIndex: -1,
                ...t,
                children: e
            });
            ex.displayName = "Banner", Object.assign(ex, {
                CollapseButton: ev
            });
            let ew = (0, s.forwardRef)(({
                children: e,
                className: t,
                href: r,
                icon: n,
                theme: o = {},
                ...a
            }, l) => {
                let s = void 0 !== r,
                    d = V(ee().breadcrumb.item, o);
                return (0, i.jsxs)("li", {
                    className: G(d.base, t),
                    ...a,
                    children: [(0, i.jsx)(u.yoF, {
                        "aria-hidden": !0,
                        className: d.chevron,
                        "data-testid": "flowbite-breadcrumb-separator"
                    }), (0, i.jsxs)(s ? "a" : "span", {
                        ref: l,
                        className: d.href[s ? "on" : "off"],
                        "data-testid": "flowbite-breadcrumb-item",
                        href: r,
                        children: [n && (0, i.jsx)(n, {
                            "aria-hidden": !0,
                            className: d.icon
                        }), e]
                    })]
                })
            });
            ew.displayName = "Breadcrumb.Item";
            let ek = ({
                children: e,
                className: t,
                theme: r = {},
                ...n
            }) => {
                let o = V(ee().breadcrumb.root, r);
                return (0, i.jsx)("nav", {
                    "aria-label": "Breadcrumb",
                    className: G(o.base, t),
                    ...n,
                    children: (0, i.jsx)("ol", {
                        className: o.list,
                        children: e
                    })
                })
            };
            ek.displayName = "Breadcrumb", Object.assign(ek, {
                Item: ew
            }), o = ["renderImage", "imgSrc", "imgAlt", "children", "className", "horizontal", "href", "theme"], e => {
                let t = {};
                for (let r in e) o.includes(r) || (t[r] = e[r]);
                return t
            };
            var eE = r(36760),
                eN = r(79271),
                ej = Object.defineProperty,
                eC = (e, t, r) => t in e ? ej(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                eT = (e, t, r) => (eC(e, "symbol" != typeof t ? t + "" : t, r), r);
            class eM extends s.PureComponent {
                constructor(e) {
                    super(e), eT(this, "container"), eT(this, "scrolling"), eT(this, "started"), eT(this, "pressed"), eT(this, "isMobile", !1), eT(this, "internal"), eT(this, "scrollLeft"), eT(this, "scrollTop"), eT(this, "clientX"), eT(this, "clientY"), eT(this, "onEndScroll", () => {
                        this.scrolling = !1, !this.pressed && this.started && this.processEnd()
                    }), eT(this, "onScroll", () => {
                        let e = this.container.current;
                        (e.scrollLeft !== this.scrollLeft || e.scrollTop !== this.scrollTop) && (this.scrolling = !0, this.processScroll(), this.onEndScroll())
                    }), eT(this, "onTouchStart", e => {
                        let {
                            nativeMobileScroll: t
                        } = this.props;
                        if (this.isDraggable(e.target)) {
                            if (this.internal = !0, t && this.scrolling) this.pressed = !0;
                            else {
                                let r = e.touches[0];
                                this.processClick(r.clientX, r.clientY), !t && this.props.stopPropagation && e.stopPropagation()
                            }
                        }
                    }), eT(this, "onTouchEnd", () => {
                        let {
                            nativeMobileScroll: e
                        } = this.props;
                        this.pressed && (!this.started || this.scrolling && e ? this.pressed = !1 : this.processEnd(), this.forceUpdate())
                    }), eT(this, "onTouchMove", e => {
                        let {
                            nativeMobileScroll: t
                        } = this.props;
                        if (this.pressed && (!t || !this.isMobile)) {
                            let t = e.touches[0];
                            t && this.processMove(t.clientX, t.clientY), e.preventDefault(), this.props.stopPropagation && e.stopPropagation()
                        }
                    }), eT(this, "onMouseDown", e => {
                        this.isDraggable(e.target) && this.isScrollable() && (this.internal = !0, this.props ? .buttons ? .indexOf(e.button) !== -1 && (this.processClick(e.clientX, e.clientY), e.preventDefault(), this.props.stopPropagation && e.stopPropagation()))
                    }), eT(this, "onMouseMove", e => {
                        this.pressed && (this.processMove(e.clientX, e.clientY), e.preventDefault(), this.props.stopPropagation && e.stopPropagation())
                    }), eT(this, "onMouseUp", e => {
                        this.pressed && (this.started ? this.processEnd() : (this.internal = !1, this.pressed = !1, this.forceUpdate(), this.props.onClick && this.props.onClick(e)), e.preventDefault(), this.props.stopPropagation && e.stopPropagation())
                    }), this.container = s.createRef(), this.onEndScroll = eN(this.onEndScroll, 300), this.scrolling = !1, this.started = !1, this.pressed = !1, this.internal = !1, this.getRef = this.getRef.bind(this)
                }
                componentDidMount() {
                    let {
                        nativeMobileScroll: e
                    } = this.props, t = this.container.current;
                    window.addEventListener("mouseup", this.onMouseUp), window.addEventListener("mousemove", this.onMouseMove), window.addEventListener("touchmove", this.onTouchMove, {
                        passive: !1
                    }), window.addEventListener("touchend", this.onTouchEnd), t.addEventListener("touchstart", this.onTouchStart, {
                        passive: !1
                    }), t.addEventListener("mousedown", this.onMouseDown, {
                        passive: !1
                    }), e && (this.isMobile = this.isMobileDevice(), this.isMobile && this.forceUpdate())
                }
                componentWillUnmount() {
                    window.removeEventListener("mouseup", this.onMouseUp), window.removeEventListener("mousemove", this.onMouseMove), window.removeEventListener("touchmove", this.onTouchMove), window.removeEventListener("touchend", this.onTouchEnd)
                }
                getElement() {
                    return this.container.current
                }
                isMobileDevice() {
                    return void 0 !== window.orientation || -1 !== navigator.userAgent.indexOf("IEMobile")
                }
                isDraggable(e) {
                    let t = this.props.ignoreElements;
                    if (!t) return !0; {
                        let r = e.closest(t);
                        return null === r || r.contains(this.getElement())
                    }
                }
                isScrollable() {
                    let e = this.container.current;
                    return e && (e.scrollWidth > e.clientWidth || e.scrollHeight > e.clientHeight)
                }
                processClick(e, t) {
                    let r = this.container.current;
                    this.scrollLeft = r ? .scrollLeft, this.scrollTop = r ? .scrollTop, this.clientX = e, this.clientY = t, this.pressed = !0
                }
                processStart(e = !0) {
                    let {
                        onStartScroll: t
                    } = this.props;
                    this.started = !0, e && document.body.classList.add("cursor-grab"), t && t({
                        external: !this.internal
                    }), this.forceUpdate()
                }
                processScroll() {
                    if (this.started) {
                        let {
                            onScroll: e
                        } = this.props;
                        e && e({
                            external: !this.internal
                        })
                    } else this.processStart(!1)
                }
                processMove(e, t) {
                    let {
                        horizontal: r,
                        vertical: n,
                        activationDistance: o,
                        onScroll: a
                    } = this.props, l = this.container.current;
                    this.started ? (r && (l.scrollLeft -= e - this.clientX), n && (l.scrollTop -= t - this.clientY), a && a({
                        external: !this.internal
                    }), this.clientX = e, this.clientY = t, this.scrollLeft = l.scrollLeft, this.scrollTop = l.scrollTop) : (r && Math.abs(e - this.clientX) > o || n && Math.abs(t - this.clientY) > o) && (this.clientX = e, this.clientY = t, this.processStart())
                }
                processEnd() {
                    let {
                        onEndScroll: e
                    } = this.props;
                    this.container.current && e && e({
                        external: !this.internal
                    }), this.pressed = !1, this.started = !1, this.scrolling = !1, this.internal = !1, document.body.classList.remove("cursor-grab"), this.forceUpdate()
                }
                getRef(e) {
                    [this.container, this.props.innerRef].forEach(t => {
                        t && ("function" == typeof t ? t(e) : t.current = e)
                    })
                }
                render() {
                    let {
                        children: e,
                        draggingClassName: t,
                        className: r,
                        style: n,
                        hideScrollbars: o
                    } = this.props;
                    return (0, i.jsx)("div", {
                        className: eE(r, this.pressed && t, {
                            "!scroll-auto [&>*]:pointer-events-none [&>*]:cursor-grab": this.pressed,
                            "overflow-auto": this.isMobile,
                            "overflow-hidden !overflow-x-hidden [overflow:-moz-scrollbars-none] [scrollbar-width:none]": o,
                            "[&::-webkit-scrollbar]:[-webkit-appearance:none !important] [&::-webkit-scrollbar]:!hidden [&::-webkit-scrollbar]:!h-0 [&::-webkit-scrollbar]:!w-0 [&::-webkit-scrollbar]:!bg-transparent": o
                        }),
                        style: n,
                        ref: this.getRef,
                        onScroll: this.onScroll,
                        children: e
                    })
                }
            }
            eT(eM, "defaultProps", {
                nativeMobileScroll: !0,
                hideScrollbars: !0,
                activationDistance: 10,
                vertical: !0,
                horizontal: !0,
                stopPropagation: !1,
                style: {},
                buttons: [0]
            });
            let eS = () => "undefined" != typeof window;
            (0, s.forwardRef)(({
                className: e,
                color: t = "default",
                theme: r = {},
                ...n
            }, o) => {
                let a = V(ee().checkbox, r);
                return (0, i.jsx)("input", {
                    ref: o,
                    type: "checkbox",
                    className: G(a.root.base, a.root.color[t], e),
                    ...n
                })
            }).displayName = "Checkbox";
            let eR = e => {
                    let {
                        key: t,
                        onChange: r
                    } = e;

                    function n(e) {
                        let {
                            key: n,
                            newValue: o
                        } = e;
                        n === t && r(o)
                    }(0, s.useEffect)(() => (window.addEventListener("storage", n), () => window.removeEventListener("storage", n)), [])
                },
                eI = "light",
                eO = "flowbite-theme-mode",
                eP = "flowbite-theme-mode-sync",
                eD = () => {
                    let [e, t] = (0, s.useState)(ez(Q.mode));
                    (0, s.useEffect)(() => {
                        eA(e), eF(e)
                    }, []), eR({
                        key: eO,
                        onChange(e) {
                            if (e) return r(e)
                        }
                    }), eL(e => t(e));
                    let r = e => {
                        t(e), eA(e), eF(e), document.dispatchEvent(new CustomEvent(eP, {
                            detail: e
                        }))
                    };
                    return {
                        mode: e,
                        computedMode: eB(e),
                        setMode: r,
                        toggleMode: () => {
                            let t = e;
                            "auto" === t && (t = eB(t)), r(t = "dark" === t ? "light" : "dark")
                        },
                        clearMode: () => {
                            var e;
                            r(null !== (e = Q.mode) && void 0 !== e ? e : eI)
                        }
                    }
                },
                eL = e => {
                    (0, s.useEffect)(() => {
                        function t(t) {
                            e(t.detail)
                        }
                        return document.addEventListener(eP, t), () => document.removeEventListener(eP, t)
                    }, [])
                },
                eA = e => localStorage.setItem(eO, e),
                eF = e => {
                    "dark" === eB(e) ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark")
                },
                ez = e => {
                    var t;
                    if (!eS()) return eI;
                    let r = localStorage.getItem(eO);
                    return null !== (t = null != r ? r : e) && void 0 !== t ? t : eI
                },
                eB = e => "auto" === e ? e_() : e,
                e_ = () => {
                    var e, t;
                    return (null === (e = (t = window).matchMedia) || void 0 === e ? void 0 : e.call(t, "(prefers-color-scheme: dark)").matches) ? "dark" : "light"
                },
                eH = ({
                    children: e,
                    className: t,
                    color: r = "default",
                    theme: n = {},
                    value: o,
                    ...a
                }) => {
                    let l = V(ee().helperText, n);
                    return (0, i.jsx)("p", {
                        className: G(l.root.base, l.root.colors[r], t),
                        ...a,
                        children: o ? ? e ? ? ""
                    })
                };
            eH.displayName = "HelperText";
            let eW = (0, s.forwardRef)(({
                addon: e,
                className: t,
                color: r = "gray",
                helperText: n,
                icon: o,
                rightIcon: a,
                shadow: l,
                sizing: s = "md",
                theme: d = {},
                type: u = "text",
                ...c
            }, f) => {
                let g = V(ee().textInput, d);
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsxs)("div", {
                        className: G(g.base, t),
                        children: [e && (0, i.jsx)("span", {
                            className: g.addon,
                            children: e
                        }), (0, i.jsxs)("div", {
                            className: g.field.base,
                            children: [o && (0, i.jsx)("div", {
                                className: g.field.icon.base,
                                children: (0, i.jsx)(o, {
                                    className: g.field.icon.svg
                                })
                            }), a && (0, i.jsx)("div", {
                                "data-testid": "right-icon",
                                className: g.field.rightIcon.base,
                                children: (0, i.jsx)(a, {
                                    className: g.field.rightIcon.svg
                                })
                            }), (0, i.jsx)("input", {
                                className: G(g.field.input.base, g.field.input.colors[r], g.field.input.sizes[s], g.field.input.withIcon[o ? "on" : "off"], g.field.input.withRightIcon[a ? "on" : "off"], g.field.input.withAddon[e ? "on" : "off"], g.field.input.withShadow[l ? "on" : "off"]),
                                type: u,
                                ...c,
                                ref: f
                            })]
                        })]
                    }), n && (0, i.jsx)(eH, {
                        color: r,
                        children: n
                    })]
                })
            });
            eW.displayName = "TextInput";
            let eY = (0, s.createContext)(void 0);

            function eG() {
                let e = (0, s.useContext)(eY);
                if (!e) throw Error("useDatePickerContext should be used within the DatePickerContext provider!");
                return e
            }
            var eq = ((a = eq || {})[a.Days = 0] = "Days", a[a.Months = 1] = "Months", a[a.Years = 2] = "Years", a[a.Decades = 3] = "Decades", a),
                eU = ((l = eU || {})[l.Sunday = 0] = "Sunday", l[l.Monday = 1] = "Monday", l[l.Tuesday = 2] = "Tuesday", l[l.Wednesday = 3] = "Wednesday", l[l.Thursday = 4] = "Thursday", l[l.Friday = 5] = "Friday", l[l.Saturday = 6] = "Saturday", l);
            let eV = (e, t, r) => {
                    let n = new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime();
                    if (t && r) {
                        let e = new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime(),
                            o = new Date(r.getFullYear(), r.getMonth(), r.getDate()).getTime();
                        return n >= e && n <= o
                    }
                    return t ? n >= new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() : !r || n <= new Date(r.getFullYear(), r.getMonth(), r.getDate()).getTime()
                },
                eK = (e, t) => (e = new Date(e.getFullYear(), e.getMonth(), e.getDate()), t = new Date(t.getFullYear(), t.getMonth(), t.getDate()), e.getTime() === t.getTime()),
                eX = (e, t, r) => (!eV(e, t, r) && (t && e < t ? e = t : r && e > r && (e = r)), e),
                e$ = (e, t) => {
                    let r = new Date(e.getFullYear(), e.getMonth(), 1),
                        n = r.getDay() - t;
                    return n < 0 && (n += 7), eQ(r, -n)
                },
                eZ = (e, t) => {
                    let r = [],
                        n = new Date(0);
                    n.setDate(n.getDate() - n.getDay() + t);
                    let o = new Intl.DateTimeFormat(e, {
                        weekday: "short"
                    });
                    for (let e = 0; e < 7; e++) r.push(o.format(eQ(n, e)));
                    return r
                },
                eQ = (e, t) => {
                    let r = new Date(e);
                    return r.setDate(r.getDate() + t), r
                },
                eJ = (e, t) => {
                    let r = new Date(e);
                    return r.setMonth(r.getMonth() + t), r
                },
                e0 = (e, t) => {
                    let r = new Date(e);
                    return r.setFullYear(r.getFullYear() + t), r
                },
                e1 = (e, t, r) => {
                    let n = {
                        day: "numeric",
                        month: "long",
                        year: "numeric"
                    };
                    return r && (n = r), new Intl.DateTimeFormat(e, n).format(t)
                },
                e5 = (e, t) => Math.floor(e.getFullYear() / t) * t,
                e2 = (e, t) => {
                    let r = e.getFullYear();
                    return r >= t && r <= t + 9
                },
                e4 = ({
                    theme: e = {}
                }) => {
                    let {
                        theme: t,
                        weekStart: r,
                        minDate: n,
                        maxDate: o,
                        viewDate: a,
                        selectedDate: l,
                        changeSelectedDate: s,
                        language: d
                    } = eG(), u = V(t.views.days, e), c = eZ(d, r), f = e$(a, r);
                    return (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("div", {
                            className: u.header.base,
                            children: c.map((e, t) => (0, i.jsx)("span", {
                                className: u.header.title,
                                children: e
                            }, t))
                        }), (0, i.jsx)("div", {
                            className: u.items.base,
                            children: [...Array(42)].map((e, t) => {
                                let r = eQ(f, t),
                                    a = e1(d, r, {
                                        day: "numeric"
                                    }),
                                    c = eK(l, r),
                                    g = !eV(r, n, o);
                                return (0, i.jsx)("button", {
                                    disabled: g,
                                    type: "button",
                                    className: G(u.items.item.base, c && u.items.item.selected, g && u.items.item.disabled),
                                    onClick: () => {
                                        g || s(r, !0)
                                    },
                                    children: a
                                }, t)
                            })
                        })]
                    })
                },
                e6 = ({
                    theme: e = {}
                }) => {
                    let {
                        theme: t,
                        selectedDate: r,
                        viewDate: n,
                        setViewDate: o,
                        setView: a
                    } = eG(), l = V(t.views.decades, e);
                    return (0, i.jsx)("div", {
                        className: l.items.base,
                        children: [...Array(12)].map((e, t) => {
                            let s = e5(n, 100) - 10 + 10 * t,
                                d = new Date(s, 0, 1),
                                u = e0(d, 9),
                                c = e2(n, s),
                                f = !eV(n, d, u);
                            return (0, i.jsx)("button", {
                                disabled: f,
                                type: "button",
                                className: G(l.items.item.base, c && l.items.item.selected, f && l.items.item.disabled),
                                onClick: () => {
                                    f || (o(e0(n, s - r.getFullYear())), a(eq.Years))
                                },
                                children: s
                            }, t)
                        })
                    })
                },
                e7 = ({
                    theme: e = {}
                }) => {
                    let {
                        theme: t,
                        minDate: r,
                        maxDate: n,
                        selectedDate: o,
                        viewDate: a,
                        language: l,
                        setViewDate: s,
                        setView: d
                    } = eG(), u = V(t.views.months, e);
                    return (0, i.jsx)("div", {
                        className: u.items.base,
                        children: [...Array(12)].map((e, t) => {
                            let c = new Date(a.getTime());
                            c.setMonth(t);
                            let f = e1(l, c, {
                                    month: "short"
                                }),
                                g = eK(o, c),
                                p = !eV(c, r, n);
                            return (0, i.jsx)("button", {
                                disabled: p,
                                type: "button",
                                className: G(u.items.item.base, g && u.items.item.selected, p && u.items.item.disabled),
                                onClick: () => {
                                    p || (s(c), d(eq.Days))
                                },
                                children: f
                            }, t)
                        })
                    })
                },
                e3 = e => {
                    let {
                        theme: t = {}
                    } = e, {
                        theme: r,
                        selectedDate: n,
                        minDate: o,
                        maxDate: a,
                        viewDate: l,
                        setViewDate: s,
                        setView: d
                    } = eG(), u = V(r.views.years, t);
                    return (0, i.jsx)("div", {
                        className: u.items.base,
                        children: [...Array(12)].map((e, t) => {
                            let r = e5(l, 10) - 1 + 1 * t,
                                c = new Date(l.getTime());
                            c.setFullYear(r);
                            let f = eK(n, c),
                                g = !eV(c, o, a);
                            return (0, i.jsx)("button", {
                                disabled: g,
                                type: "button",
                                className: G(u.items.item.base, f && u.items.item.selected, g && u.items.item.disabled),
                                onClick: () => {
                                    g || (s(c), d(eq.Months))
                                },
                                children: r
                            }, t)
                        })
                    })
                };
            (0, s.forwardRef)((e, t) => {
                let {
                    title: r,
                    open: n,
                    inline: o = !1,
                    autoHide: a = !0,
                    showClearButton: l = !0,
                    labelClearButton: d = "Clear",
                    showTodayButton: c = !0,
                    labelTodayButton: f = "Today",
                    defaultDate: g = new Date,
                    minDate: p,
                    maxDate: b,
                    language: m = "en",
                    weekStart: h = eU.Sunday,
                    className: y,
                    theme: v = {},
                    onSelectedDateChanged: x,
                    ...w
                } = e, k = V(ee().datepicker, v);
                g = eX(g, p, b);
                let [E, N] = (0, s.useState)(n), [j, C] = (0, s.useState)(eq.Days), [T, M] = (0, s.useState)(g), [S, R] = (0, s.useState)(g), I = (0, s.useRef)(null), O = (0, s.useRef)(null), P = (e, t) => {
                    M(e), x && x(e), a && j === eq.Days && !0 == t && !o && N(!1)
                }, D = () => {
                    P(g, !0), g && R(g)
                };
                (0, s.useImperativeHandle)(t, () => ({
                    focus() {
                        var e;
                        null === (e = I.current) || void 0 === e || e.focus()
                    },
                    clear() {
                        D()
                    }
                }));
                let L = () => {
                        switch (j) {
                            case eq.Days:
                                return eq.Months;
                            case eq.Months:
                                return eq.Years;
                            case eq.Years:
                                return eq.Decades
                        }
                        return j
                    },
                    A = (e, t, r) => {
                        switch (e) {
                            case eq.Days:
                                return new Date(eJ(t, r));
                            case eq.Months:
                                return new Date(e0(t, r));
                            case eq.Years:
                                return new Date(e0(t, 10 * r));
                            case eq.Decades:
                                return new Date(e0(t, 100 * r));
                            default:
                                return new Date(e0(t, 10 * r))
                        }
                    };
                return (0, s.useEffect)(() => {
                    let e = e => {
                        var t, r;
                        let n = null == O ? void 0 : null === (t = O.current) || void 0 === t ? void 0 : t.contains(e.target),
                            o = null == I ? void 0 : null === (r = I.current) || void 0 === r ? void 0 : r.contains(e.target);
                        n || o || N(!1)
                    };
                    return document.addEventListener("mousedown", e), () => {
                        document.removeEventListener("mousedown", e)
                    }
                }, [I, O, N]), (0, i.jsx)(eY.Provider, {
                    value: {
                        theme: k,
                        language: m,
                        minDate: p,
                        maxDate: b,
                        weekStart: h,
                        isOpen: E,
                        setIsOpen: N,
                        view: j,
                        setView: C,
                        viewDate: S,
                        setViewDate: R,
                        selectedDate: T,
                        setSelectedDate: M,
                        changeSelectedDate: P
                    },
                    children: (0, i.jsxs)("div", {
                        className: G(k.root.base, y),
                        children: [!o && (0, i.jsx)(eW, {
                            theme: k.root.input,
                            icon: u.IAP,
                            ref: I,
                            onFocus: () => {
                                eK(S, T) || R(T), N(!0)
                            },
                            value: T && e1(m, T),
                            readOnly: !0,
                            ...w
                        }), (E || o) && (0, i.jsx)("div", {
                            ref: O,
                            className: G(k.popup.root.base, o && k.popup.root.inline),
                            children: (0, i.jsxs)("div", {
                                className: k.popup.root.inner,
                                children: [(0, i.jsxs)("div", {
                                    className: k.popup.header.base,
                                    children: [r && (0, i.jsx)("div", {
                                        className: k.popup.header.title,
                                        children: r
                                    }), (0, i.jsxs)("div", {
                                        className: k.popup.header.selectors.base,
                                        children: [(0, i.jsx)("button", {
                                            type: "button",
                                            className: G(k.popup.header.selectors.button.base, k.popup.header.selectors.button.prev),
                                            onClick: () => R(A(j, S, -1)),
                                            children: (0, i.jsx)(u.jTe, {})
                                        }), (0, i.jsx)("button", {
                                            type: "button",
                                            className: G(k.popup.header.selectors.button.base, k.popup.header.selectors.button.view),
                                            onClick: () => C(L()),
                                            children: (() => {
                                                switch (j) {
                                                    case eq.Decades:
                                                        return "".concat(e5(S, 100), " - ").concat(e5(S, 100) + 90);
                                                    case eq.Years:
                                                        return "".concat(e5(S, 10), " - ").concat(e5(S, 10) + 9);
                                                    case eq.Months:
                                                        return e1(m, S, {
                                                            year: "numeric"
                                                        });
                                                    case eq.Days:
                                                    default:
                                                        return e1(m, S, {
                                                            month: "long",
                                                            year: "numeric"
                                                        })
                                                }
                                            })()
                                        }), (0, i.jsx)("button", {
                                            type: "button",
                                            className: G(k.popup.header.selectors.button.base, k.popup.header.selectors.button.next),
                                            onClick: () => R(A(j, S, 1)),
                                            children: (0, i.jsx)(u.WY3, {})
                                        })]
                                    })]
                                }), (0, i.jsx)("div", {
                                    className: k.popup.view.base,
                                    children: (e => {
                                        switch (e) {
                                            case eq.Decades:
                                                return (0, i.jsx)(e6, {
                                                    theme: k.views.decades
                                                });
                                            case eq.Years:
                                                return (0, i.jsx)(e3, {
                                                    theme: k.views.years
                                                });
                                            case eq.Months:
                                                return (0, i.jsx)(e7, {
                                                    theme: k.views.months
                                                });
                                            case eq.Days:
                                            default:
                                                return (0, i.jsx)(e4, {
                                                    theme: k.views.days
                                                })
                                        }
                                    })(j)
                                }), (l || c) && (0, i.jsxs)("div", {
                                    className: k.popup.footer.base,
                                    children: [c && (0, i.jsx)("button", {
                                        type: "button",
                                        className: G(k.popup.footer.button.base, k.popup.footer.button.today),
                                        onClick: () => {
                                            let e = new Date;
                                            P(e, !0), R(e)
                                        },
                                        children: f
                                    }), l && (0, i.jsx)("button", {
                                        type: "button",
                                        className: G(k.popup.footer.button.base, k.popup.footer.button.clear),
                                        onClick: () => {
                                            P(g, !0), g && R(g)
                                        },
                                        children: d
                                    })]
                                })]
                            })
                        })]
                    })
                })
            }).displayName = "Datepicker";
            let e9 = (0, s.createContext)(void 0);

            function e8() {
                let e = (0, s.useContext)(e9);
                if (!e) throw Error("useDrawerContext should be used within the DrawerContext provider!");
                return e
            }
            var te = r(68086);
            let tt = e => {
                let {
                    children: t,
                    className: r,
                    closeIcon: n = te.FU5,
                    theme: o = {},
                    title: a,
                    titleIcon: l = te.bH4,
                    ...d
                } = e, u = (0, s.useId)(), {
                    id: c,
                    isOpen: f,
                    onClose: g,
                    theme: p
                } = e8(), b = V(p.header, o);
                return (0, i.jsxs)("div", {
                    className: r,
                    ...d,
                    children: [(0, i.jsxs)("h5", {
                        className: b.inner.titleText,
                        id: c,
                        children: [(0, i.jsx)(l, {
                            "aria-hidden": !0,
                            className: b.inner.titleIcon
                        }), a]
                    }), (0, i.jsxs)("button", {
                        onClick: g,
                        "data-testid": "close-drawer",
                        className: b.inner.closeButton,
                        children: [(0, i.jsx)(n, {
                            "aria-hidden": !0,
                            className: b.inner.closeIcon
                        }), (0, i.jsx)("span", {
                            className: "sr-only",
                            children: "Close menu"
                        })]
                    }), (0, i.jsx)("span", {
                        className: b.collapsed[f ? "on" : "off"],
                        id: "flowbite-drawer-header-".concat(u),
                        children: t
                    })]
                })
            };
            tt.displayName = "Drawer.Header";
            let tr = e => {
                let {
                    children: t,
                    className: r,
                    theme: n = {},
                    ...o
                } = e, {
                    theme: a
                } = e8(), l = V(a.items, n);
                return (0, i.jsx)("div", {
                    "data-testid": "flowbite-drawer-items",
                    className: G(l.base, r),
                    ...o,
                    children: t
                })
            };
            tr.displayName = "Drawer.Items";
            let tn = e => {
                let {
                    backdrop: t = !0,
                    children: r,
                    className: n,
                    edge: o = !1,
                    position: a = "left",
                    onClose: l,
                    open: d = !1,
                    theme: u = {},
                    ...c
                } = e, f = (0, s.useId)(), g = V(ee().drawer, u);
                return (0, s.useEffect)(() => {
                    let e = e => {
                        "Escape" === e.key && d && l && l()
                    };
                    return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
                }, [l, d]), (0, i.jsxs)(e9.Provider, {
                    value: {
                        theme: g,
                        onClose: l,
                        isOpen: d,
                        id: f
                    },
                    children: [(0, i.jsx)("div", {
                        "aria-modal": !0,
                        "aria-describedby": "drawer-dialog-".concat(f),
                        role: "dialog",
                        tabIndex: -1,
                        "data-testid": "flowbite-drawer",
                        className: G(g.root.base, g.root.position[a][d ? "on" : "off"], o && !d && g.root.edge, n),
                        ...c,
                        children: r
                    }), d && t && (0, i.jsx)("div", {
                        onClick: () => l(),
                        className: g.root.backdrop
                    })]
                })
            };

            function to(e) {
                return ti(e) ? (e.nodeName || "").toLowerCase() : "#document"
            }

            function ta(e) {
                var t;
                return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
            }

            function tl(e) {
                var t;
                return null == (t = (ti(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
            }

            function ti(e) {
                return e instanceof Node || e instanceof ta(e).Node
            }

            function ts(e) {
                return e instanceof Element || e instanceof ta(e).Element
            }

            function td(e) {
                return e instanceof HTMLElement || e instanceof ta(e).HTMLElement
            }

            function tu(e) {
                return "undefined" != typeof ShadowRoot && (e instanceof ShadowRoot || e instanceof ta(e).ShadowRoot)
            }

            function tc(e) {
                let {
                    overflow: t,
                    overflowX: r,
                    overflowY: n,
                    display: o
                } = tb(e);
                return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !["inline", "contents"].includes(o)
            }

            function tf(e) {
                let t = tg(),
                    r = tb(e);
                return "none" !== r.transform || "none" !== r.perspective || !!r.containerType && "normal" !== r.containerType || !t && !!r.backdropFilter && "none" !== r.backdropFilter || !t && !!r.filter && "none" !== r.filter || ["transform", "perspective", "filter"].some(e => (r.willChange || "").includes(e)) || ["paint", "layout", "strict", "content"].some(e => (r.contain || "").includes(e))
            }

            function tg() {
                return "undefined" != typeof CSS && !!CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")
            }

            function tp(e) {
                return ["html", "body", "#document"].includes(to(e))
            }

            function tb(e) {
                return ta(e).getComputedStyle(e)
            }

            function tm(e) {
                return ts(e) ? {
                    scrollLeft: e.scrollLeft,
                    scrollTop: e.scrollTop
                } : {
                    scrollLeft: e.pageXOffset,
                    scrollTop: e.pageYOffset
                }
            }

            function th(e) {
                if ("html" === to(e)) return e;
                let t = e.assignedSlot || e.parentNode || tu(e) && e.host || tl(e);
                return tu(t) ? t.host : t
            }

            function ty(e, t, r) {
                var n;
                void 0 === t && (t = []), void 0 === r && (r = !0);
                let o = function e(t) {
                        let r = th(t);
                        return tp(r) ? t.ownerDocument ? t.ownerDocument.body : t.body : td(r) && tc(r) ? r : e(r)
                    }(e),
                    a = o === (null == (n = e.ownerDocument) ? void 0 : n.body),
                    l = ta(o);
                return a ? t.concat(l, l.visualViewport || [], tc(o) ? o : [], l.frameElement && r ? ty(l.frameElement) : []) : t.concat(o, ty(o, [], r))
            }

            function tv(e) {
                let t = e.activeElement;
                for (;
                    (null == (r = t) || null == (r = r.shadowRoot) ? void 0 : r.activeElement) != null;) {
                    var r;
                    t = t.shadowRoot.activeElement
                }
                return t
            }

            function tx(e, t) {
                if (!e || !t) return !1;
                let r = null == t.getRootNode ? void 0 : t.getRootNode();
                if (e.contains(t)) return !0;
                if (r && tu(r)) {
                    let r = t;
                    for (; r;) {
                        if (e === r) return !0;
                        r = r.parentNode || r.host
                    }
                }
                return !1
            }

            function tw() {
                let e = navigator.userAgentData;
                return null != e && e.platform ? e.platform : navigator.platform
            }

            function tk() {
                let e = navigator.userAgentData;
                return e && Array.isArray(e.brands) ? e.brands.map(e => {
                    let {
                        brand: t,
                        version: r
                    } = e;
                    return t + "/" + r
                }).join(" ") : navigator.userAgent
            }

            function tE(e) {
                return 0 === e.mozInputSource && !!e.isTrusted || (tC() && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType)
            }

            function tN(e) {
                return !tk().includes("jsdom/") && (!tC() && 0 === e.width && 0 === e.height || tC() && 1 === e.width && 1 === e.height && 0 === e.pressure && 0 === e.detail && "mouse" === e.pointerType || e.width < 1 && e.height < 1 && 0 === e.pressure && 0 === e.detail && "touch" === e.pointerType)
            }

            function tj() {
                return /apple/i.test(navigator.vendor)
            }

            function tC() {
                let e = /android/i;
                return e.test(tw()) || e.test(tk())
            }

            function tT() {
                return tw().toLowerCase().startsWith("mac") && !navigator.maxTouchPoints
            }

            function tM(e, t) {
                let r = ["mouse", "pen"];
                return t || r.push("", void 0), r.includes(e)
            }

            function tS(e) {
                return (null == e ? void 0 : e.ownerDocument) || document
            }

            function tR(e, t) {
                return null != t && ("composedPath" in e ? e.composedPath().includes(t) : null != e.target && t.contains(e.target))
            }

            function tI(e) {
                return "composedPath" in e ? e.composedPath()[0] : e.target
            }

            function tO(e) {
                return td(e) && e.matches("input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])")
            }

            function tP(e) {
                e.preventDefault(), e.stopPropagation()
            }

            function tD(e) {
                return !!e && "combobox" === e.getAttribute("role") && tO(e)
            }
            tn.displayName = "Drawer", Object.assign(tn, {
                Header: tt,
                Items: tr
            });
            let tL = ["top", "right", "bottom", "left"].reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []),
                tA = Math.min,
                tF = Math.max,
                tz = Math.round,
                tB = Math.floor,
                t_ = e => ({
                    x: e,
                    y: e
                }),
                tH = {
                    left: "right",
                    right: "left",
                    bottom: "top",
                    top: "bottom"
                },
                tW = {
                    start: "end",
                    end: "start"
                };

            function tY(e, t) {
                return "function" == typeof e ? e(t) : e
            }

            function tG(e) {
                return e.split("-")[0]
            }

            function tq(e) {
                return e.split("-")[1]
            }

            function tU(e) {
                return "x" === e ? "y" : "x"
            }

            function tV(e) {
                return "y" === e ? "height" : "width"
            }

            function tK(e) {
                return ["top", "bottom"].includes(tG(e)) ? "y" : "x"
            }

            function tX(e, t, r) {
                void 0 === r && (r = !1);
                let n = tq(e),
                    o = tU(tK(e)),
                    a = tV(o),
                    l = "x" === o ? n === (r ? "end" : "start") ? "right" : "left" : "start" === n ? "bottom" : "top";
                return t.reference[a] > t.floating[a] && (l = tZ(l)), [l, tZ(l)]
            }

            function t$(e) {
                return e.replace(/start|end/g, e => tW[e])
            }

            function tZ(e) {
                return e.replace(/left|right|bottom|top/g, e => tH[e])
            }

            function tQ(e) {
                return "number" != typeof e ? {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    ...e
                } : {
                    top: e,
                    right: e,
                    bottom: e,
                    left: e
                }
            }

            function tJ(e) {
                let {
                    x: t,
                    y: r,
                    width: n,
                    height: o
                } = e;
                return {
                    width: n,
                    height: o,
                    top: r,
                    left: t,
                    right: t + n,
                    bottom: r + o,
                    x: t,
                    y: r
                }
            }

            function t0(e, t, r) {
                let n, {
                        reference: o,
                        floating: a
                    } = e,
                    l = tK(t),
                    i = tU(tK(t)),
                    s = tV(i),
                    d = tG(t),
                    u = "y" === l,
                    c = o.x + o.width / 2 - a.width / 2,
                    f = o.y + o.height / 2 - a.height / 2,
                    g = o[s] / 2 - a[s] / 2;
                switch (d) {
                    case "top":
                        n = {
                            x: c,
                            y: o.y - a.height
                        };
                        break;
                    case "bottom":
                        n = {
                            x: c,
                            y: o.y + o.height
                        };
                        break;
                    case "right":
                        n = {
                            x: o.x + o.width,
                            y: f
                        };
                        break;
                    case "left":
                        n = {
                            x: o.x - a.width,
                            y: f
                        };
                        break;
                    default:
                        n = {
                            x: o.x,
                            y: o.y
                        }
                }
                switch (tq(t)) {
                    case "start":
                        n[i] -= g * (r && u ? -1 : 1);
                        break;
                    case "end":
                        n[i] += g * (r && u ? -1 : 1)
                }
                return n
            }
            let t1 = async (e, t, r) => {
                let {
                    placement: n = "bottom",
                    strategy: o = "absolute",
                    middleware: a = [],
                    platform: l
                } = r, i = a.filter(Boolean), s = await (null == l.isRTL ? void 0 : l.isRTL(t)), d = await l.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o
                }), {
                    x: u,
                    y: c
                } = t0(d, n, s), f = n, g = {}, p = 0;
                for (let r = 0; r < i.length; r++) {
                    let {
                        name: a,
                        fn: b
                    } = i[r], {
                        x: m,
                        y: h,
                        data: y,
                        reset: v
                    } = await b({
                        x: u,
                        y: c,
                        initialPlacement: n,
                        placement: f,
                        strategy: o,
                        middlewareData: g,
                        rects: d,
                        platform: l,
                        elements: {
                            reference: e,
                            floating: t
                        }
                    });
                    u = null != m ? m : u, c = null != h ? h : c, g = { ...g,
                        [a]: { ...g[a],
                            ...y
                        }
                    }, v && p <= 50 && (p++, "object" == typeof v && (v.placement && (f = v.placement), v.rects && (d = !0 === v.rects ? await l.getElementRects({
                        reference: e,
                        floating: t,
                        strategy: o
                    }) : v.rects), {
                        x: u,
                        y: c
                    } = t0(d, f, s)), r = -1)
                }
                return {
                    x: u,
                    y: c,
                    placement: f,
                    strategy: o,
                    middlewareData: g
                }
            };
            async function t5(e, t) {
                var r;
                void 0 === t && (t = {});
                let {
                    x: n,
                    y: o,
                    platform: a,
                    rects: l,
                    elements: i,
                    strategy: s
                } = e, {
                    boundary: d = "clippingAncestors",
                    rootBoundary: u = "viewport",
                    elementContext: c = "floating",
                    altBoundary: f = !1,
                    padding: g = 0
                } = tY(t, e), p = tQ(g), b = i[f ? "floating" === c ? "reference" : "floating" : c], m = tJ(await a.getClippingRect({
                    element: null == (r = await (null == a.isElement ? void 0 : a.isElement(b))) || r ? b : b.contextElement || await (null == a.getDocumentElement ? void 0 : a.getDocumentElement(i.floating)),
                    boundary: d,
                    rootBoundary: u,
                    strategy: s
                })), h = "floating" === c ? {
                    x: n,
                    y: o,
                    width: l.floating.width,
                    height: l.floating.height
                } : l.reference, y = await (null == a.getOffsetParent ? void 0 : a.getOffsetParent(i.floating)), v = await (null == a.isElement ? void 0 : a.isElement(y)) && await (null == a.getScale ? void 0 : a.getScale(y)) || {
                    x: 1,
                    y: 1
                }, x = tJ(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
                    elements: i,
                    rect: h,
                    offsetParent: y,
                    strategy: s
                }) : h);
                return {
                    top: (m.top - x.top + p.top) / v.y,
                    bottom: (x.bottom - m.bottom + p.bottom) / v.y,
                    left: (m.left - x.left + p.left) / v.x,
                    right: (x.right - m.right + p.right) / v.x
                }
            }
            async function t2(e, t) {
                let {
                    placement: r,
                    platform: n,
                    elements: o
                } = e, a = await (null == n.isRTL ? void 0 : n.isRTL(o.floating)), l = tG(r), i = tq(r), s = "y" === tK(r), d = ["left", "top"].includes(l) ? -1 : 1, u = a && s ? -1 : 1, c = tY(t, e), {
                    mainAxis: f,
                    crossAxis: g,
                    alignmentAxis: p
                } = "number" == typeof c ? {
                    mainAxis: c,
                    crossAxis: 0,
                    alignmentAxis: null
                } : {
                    mainAxis: 0,
                    crossAxis: 0,
                    alignmentAxis: null,
                    ...c
                };
                return i && "number" == typeof p && (g = "end" === i ? -1 * p : p), s ? {
                    x: g * u,
                    y: f * d
                } : {
                    x: f * d,
                    y: g * u
                }
            }

            function t4(e) {
                let t = tb(e),
                    r = parseFloat(t.width) || 0,
                    n = parseFloat(t.height) || 0,
                    o = td(e),
                    a = o ? e.offsetWidth : r,
                    l = o ? e.offsetHeight : n,
                    i = tz(r) !== a || tz(n) !== l;
                return i && (r = a, n = l), {
                    width: r,
                    height: n,
                    $: i
                }
            }

            function t6(e) {
                return ts(e) ? e : e.contextElement
            }

            function t7(e) {
                let t = t6(e);
                if (!td(t)) return t_(1);
                let r = t.getBoundingClientRect(),
                    {
                        width: n,
                        height: o,
                        $: a
                    } = t4(t),
                    l = (a ? tz(r.width) : r.width) / n,
                    i = (a ? tz(r.height) : r.height) / o;
                return l && Number.isFinite(l) || (l = 1), i && Number.isFinite(i) || (i = 1), {
                    x: l,
                    y: i
                }
            }
            let t3 = t_(0);

            function t9(e) {
                let t = ta(e);
                return tg() && t.visualViewport ? {
                    x: t.visualViewport.offsetLeft,
                    y: t.visualViewport.offsetTop
                } : t3
            }

            function t8(e, t, r, n) {
                var o;
                void 0 === t && (t = !1), void 0 === r && (r = !1);
                let a = e.getBoundingClientRect(),
                    l = t6(e),
                    i = t_(1);
                t && (n ? ts(n) && (i = t7(n)) : i = t7(e));
                let s = (void 0 === (o = r) && (o = !1), n && (!o || n === ta(l)) && o) ? t9(l) : t_(0),
                    d = (a.left + s.x) / i.x,
                    u = (a.top + s.y) / i.y,
                    c = a.width / i.x,
                    f = a.height / i.y;
                if (l) {
                    let e = ta(l),
                        t = n && ts(n) ? ta(n) : n,
                        r = e,
                        o = r.frameElement;
                    for (; o && n && t !== r;) {
                        let e = t7(o),
                            t = o.getBoundingClientRect(),
                            n = tb(o),
                            a = t.left + (o.clientLeft + parseFloat(n.paddingLeft)) * e.x,
                            l = t.top + (o.clientTop + parseFloat(n.paddingTop)) * e.y;
                        d *= e.x, u *= e.y, c *= e.x, f *= e.y, d += a, u += l, o = (r = ta(o)).frameElement
                    }
                }
                return tJ({
                    width: c,
                    height: f,
                    x: d,
                    y: u
                })
            }
            let re = [":popover-open", ":modal"];

            function rt(e) {
                return re.some(t => {
                    try {
                        return e.matches(t)
                    } catch (e) {
                        return !1
                    }
                })
            }

            function rr(e) {
                return t8(tl(e)).left + tm(e).scrollLeft
            }

            function rn(e, t, r) {
                let n;
                if ("viewport" === t) n = function(e, t) {
                    let r = ta(e),
                        n = tl(e),
                        o = r.visualViewport,
                        a = n.clientWidth,
                        l = n.clientHeight,
                        i = 0,
                        s = 0;
                    if (o) {
                        a = o.width, l = o.height;
                        let e = tg();
                        (!e || e && "fixed" === t) && (i = o.offsetLeft, s = o.offsetTop)
                    }
                    return {
                        width: a,
                        height: l,
                        x: i,
                        y: s
                    }
                }(e, r);
                else if ("document" === t) n = function(e) {
                    let t = tl(e),
                        r = tm(e),
                        n = e.ownerDocument.body,
                        o = tF(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth),
                        a = tF(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight),
                        l = -r.scrollLeft + rr(e),
                        i = -r.scrollTop;
                    return "rtl" === tb(n).direction && (l += tF(t.clientWidth, n.clientWidth) - o), {
                        width: o,
                        height: a,
                        x: l,
                        y: i
                    }
                }(tl(e));
                else if (ts(t)) n = function(e, t) {
                    let r = t8(e, !0, "fixed" === t),
                        n = r.top + e.clientTop,
                        o = r.left + e.clientLeft,
                        a = td(e) ? t7(e) : t_(1),
                        l = e.clientWidth * a.x;
                    return {
                        width: l,
                        height: e.clientHeight * a.y,
                        x: o * a.x,
                        y: n * a.y
                    }
                }(t, r);
                else {
                    let r = t9(e);
                    n = { ...t,
                        x: t.x - r.x,
                        y: t.y - r.y
                    }
                }
                return tJ(n)
            }

            function ro(e) {
                return "static" === tb(e).position
            }

            function ra(e, t) {
                return td(e) && "fixed" !== tb(e).position ? t ? t(e) : e.offsetParent : null
            }

            function rl(e, t) {
                let r = ta(e);
                if (rt(e)) return r;
                if (!td(e)) {
                    let t = th(e);
                    for (; t && !tp(t);) {
                        if (ts(t) && !ro(t)) return t;
                        t = th(t)
                    }
                    return r
                }
                let n = ra(e, t);
                for (; n && ["table", "td", "th"].includes(to(n)) && ro(n);) n = ra(n, t);
                return n && tp(n) && ro(n) && !tf(n) ? r : n || function(e) {
                    let t = th(e);
                    for (; td(t) && !tp(t);) {
                        if (tf(t)) return t;
                        t = th(t)
                    }
                    return null
                }(e) || r
            }
            let ri = async function(e) {
                    let t = this.getOffsetParent || rl,
                        r = this.getDimensions,
                        n = await r(e.floating);
                    return {
                        reference: function(e, t, r) {
                            let n = td(t),
                                o = tl(t),
                                a = "fixed" === r,
                                l = t8(e, !0, a, t),
                                i = {
                                    scrollLeft: 0,
                                    scrollTop: 0
                                },
                                s = t_(0);
                            if (n || !n && !a) {
                                if (("body" !== to(t) || tc(o)) && (i = tm(t)), n) {
                                    let e = t8(t, !0, a, t);
                                    s.x = e.x + t.clientLeft, s.y = e.y + t.clientTop
                                } else o && (s.x = rr(o))
                            }
                            return {
                                x: l.left + i.scrollLeft - s.x,
                                y: l.top + i.scrollTop - s.y,
                                width: l.width,
                                height: l.height
                            }
                        }(e.reference, await t(e.floating), e.strategy),
                        floating: {
                            x: 0,
                            y: 0,
                            width: n.width,
                            height: n.height
                        }
                    }
                },
                rs = {
                    convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
                        let {
                            elements: t,
                            rect: r,
                            offsetParent: n,
                            strategy: o
                        } = e, a = "fixed" === o, l = tl(n), i = !!t && rt(t.floating);
                        if (n === l || i && a) return r;
                        let s = {
                                scrollLeft: 0,
                                scrollTop: 0
                            },
                            d = t_(1),
                            u = t_(0),
                            c = td(n);
                        if ((c || !c && !a) && (("body" !== to(n) || tc(l)) && (s = tm(n)), td(n))) {
                            let e = t8(n);
                            d = t7(n), u.x = e.x + n.clientLeft, u.y = e.y + n.clientTop
                        }
                        return {
                            width: r.width * d.x,
                            height: r.height * d.y,
                            x: r.x * d.x - s.scrollLeft * d.x + u.x,
                            y: r.y * d.y - s.scrollTop * d.y + u.y
                        }
                    },
                    getDocumentElement: tl,
                    getClippingRect: function(e) {
                        let {
                            element: t,
                            boundary: r,
                            rootBoundary: n,
                            strategy: o
                        } = e, a = [..."clippingAncestors" === r ? rt(t) ? [] : function(e, t) {
                            let r = t.get(e);
                            if (r) return r;
                            let n = ty(e, [], !1).filter(e => ts(e) && "body" !== to(e)),
                                o = null,
                                a = "fixed" === tb(e).position,
                                l = a ? th(e) : e;
                            for (; ts(l) && !tp(l);) {
                                let t = tb(l),
                                    r = tf(l);
                                r || "fixed" !== t.position || (o = null), (a ? !r && !o : !r && "static" === t.position && !!o && ["absolute", "fixed"].includes(o.position) || tc(l) && !r && function e(t, r) {
                                    let n = th(t);
                                    return !(n === r || !ts(n) || tp(n)) && ("fixed" === tb(n).position || e(n, r))
                                }(e, l)) ? n = n.filter(e => e !== l) : o = t, l = th(l)
                            }
                            return t.set(e, n), n
                        }(t, this._c) : [].concat(r), n], l = a[0], i = a.reduce((e, r) => {
                            let n = rn(t, r, o);
                            return e.top = tF(n.top, e.top), e.right = tA(n.right, e.right), e.bottom = tA(n.bottom, e.bottom), e.left = tF(n.left, e.left), e
                        }, rn(t, l, o));
                        return {
                            width: i.right - i.left,
                            height: i.bottom - i.top,
                            x: i.left,
                            y: i.top
                        }
                    },
                    getOffsetParent: rl,
                    getElementRects: ri,
                    getClientRects: function(e) {
                        return Array.from(e.getClientRects())
                    },
                    getDimensions: function(e) {
                        let {
                            width: t,
                            height: r
                        } = t4(e);
                        return {
                            width: t,
                            height: r
                        }
                    },
                    getScale: t7,
                    isElement: ts,
                    isRTL: function(e) {
                        return "rtl" === tb(e).direction
                    }
                };

            function rd(e, t, r, n) {
                let o;
                void 0 === n && (n = {});
                let {
                    ancestorScroll: a = !0,
                    ancestorResize: l = !0,
                    elementResize: i = "function" == typeof ResizeObserver,
                    layoutShift: s = "function" == typeof IntersectionObserver,
                    animationFrame: d = !1
                } = n, u = t6(e), c = a || l ? [...u ? ty(u) : [], ...ty(t)] : [];
                c.forEach(e => {
                    a && e.addEventListener("scroll", r, {
                        passive: !0
                    }), l && e.addEventListener("resize", r)
                });
                let f = u && s ? function(e, t) {
                        let r, n = null,
                            o = tl(e);

                        function a() {
                            var e;
                            clearTimeout(r), null == (e = n) || e.disconnect(), n = null
                        }
                        return function l(i, s) {
                            void 0 === i && (i = !1), void 0 === s && (s = 1), a();
                            let {
                                left: d,
                                top: u,
                                width: c,
                                height: f
                            } = e.getBoundingClientRect();
                            if (i || t(), !c || !f) return;
                            let g = tB(u),
                                p = tB(o.clientWidth - (d + c)),
                                b = {
                                    rootMargin: -g + "px " + -p + "px " + -tB(o.clientHeight - (u + f)) + "px " + -tB(d) + "px",
                                    threshold: tF(0, tA(1, s)) || 1
                                },
                                m = !0;

                            function h(e) {
                                let t = e[0].intersectionRatio;
                                if (t !== s) {
                                    if (!m) return l();
                                    t ? l(!1, t) : r = setTimeout(() => {
                                        l(!1, 1e-7)
                                    }, 1e3)
                                }
                                m = !1
                            }
                            try {
                                n = new IntersectionObserver(h, { ...b,
                                    root: o.ownerDocument
                                })
                            } catch (e) {
                                n = new IntersectionObserver(h, b)
                            }
                            n.observe(e)
                        }(!0), a
                    }(u, r) : null,
                    g = -1,
                    p = null;
                i && (p = new ResizeObserver(e => {
                    let [n] = e;
                    n && n.target === u && p && (p.unobserve(t), cancelAnimationFrame(g), g = requestAnimationFrame(() => {
                        var e;
                        null == (e = p) || e.observe(t)
                    })), r()
                }), u && !d && p.observe(u), p.observe(t));
                let b = d ? t8(e) : null;
                return d && function t() {
                    let n = t8(e);
                    b && (n.x !== b.x || n.y !== b.y || n.width !== b.width || n.height !== b.height) && r(), b = n, o = requestAnimationFrame(t)
                }(), r(), () => {
                    var e;
                    c.forEach(e => {
                        a && e.removeEventListener("scroll", r), l && e.removeEventListener("resize", r)
                    }), null == f || f(), null == (e = p) || e.disconnect(), p = null, d && cancelAnimationFrame(o)
                }
            }
            let ru = e => ({
                    name: "arrow",
                    options: e,
                    async fn(t) {
                        let {
                            x: r,
                            y: n,
                            placement: o,
                            rects: a,
                            platform: l,
                            elements: i,
                            middlewareData: s
                        } = t, {
                            element: d,
                            padding: u = 0
                        } = tY(e, t) || {};
                        if (null == d) return {};
                        let c = tQ(u),
                            f = {
                                x: r,
                                y: n
                            },
                            g = tU(tK(o)),
                            p = tV(g),
                            b = await l.getDimensions(d),
                            m = "y" === g,
                            h = m ? "clientHeight" : "clientWidth",
                            y = a.reference[p] + a.reference[g] - f[g] - a.floating[p],
                            v = f[g] - a.reference[g],
                            x = await (null == l.getOffsetParent ? void 0 : l.getOffsetParent(d)),
                            w = x ? x[h] : 0;
                        w && await (null == l.isElement ? void 0 : l.isElement(x)) || (w = i.floating[h] || a.floating[p]);
                        let k = w / 2 - b[p] / 2 - 1,
                            E = tA(c[m ? "top" : "left"], k),
                            N = tA(c[m ? "bottom" : "right"], k),
                            j = w - b[p] - N,
                            C = w / 2 - b[p] / 2 + (y / 2 - v / 2),
                            T = tF(E, tA(C, j)),
                            M = !s.arrow && null != tq(o) && C !== T && a.reference[p] / 2 - (C < E ? E : N) - b[p] / 2 < 0,
                            S = M ? C < E ? C - E : C - j : 0;
                        return {
                            [g]: f[g] + S,
                            data: {
                                [g]: T,
                                centerOffset: C - T - S,
                                ...M && {
                                    alignmentOffset: S
                                }
                            },
                            reset: M
                        }
                    }
                }),
                rc = (e, t, r) => {
                    let n = new Map,
                        o = {
                            platform: rs,
                            ...r
                        },
                        a = { ...o.platform,
                            _c: n
                        };
                    return t1(e, t, { ...o,
                        platform: a
                    })
                };
            var rf = r(54887);
            let rg = e => ({
                name: "arrow",
                options: e,
                fn(t) {
                    let {
                        element: r,
                        padding: n
                    } = "function" == typeof e ? e(t) : e;
                    return r && ({}).hasOwnProperty.call(r, "current") ? null != r.current ? ru({
                        element: r.current,
                        padding: n
                    }).fn(t) : {} : r ? ru({
                        element: r,
                        padding: n
                    }).fn(t) : {}
                }
            });
            var rp = "undefined" != typeof document ? s.useLayoutEffect : s.useEffect;

            function rb(e, t) {
                let r, n, o;
                if (e === t) return !0;
                if (typeof e != typeof t) return !1;
                if ("function" == typeof e && e.toString() === t.toString()) return !0;
                if (e && t && "object" == typeof e) {
                    if (Array.isArray(e)) {
                        if ((r = e.length) !== t.length) return !1;
                        for (n = r; 0 != n--;)
                            if (!rb(e[n], t[n])) return !1;
                        return !0
                    }
                    if ((r = (o = Object.keys(e)).length) !== Object.keys(t).length) return !1;
                    for (n = r; 0 != n--;)
                        if (!({}).hasOwnProperty.call(t, o[n])) return !1;
                    for (n = r; 0 != n--;) {
                        let r = o[n];
                        if (("_owner" !== r || !e.$$typeof) && !rb(e[r], t[r])) return !1
                    }
                    return !0
                }
                return e != e && t != t
            }

            function rm(e) {
                return "undefined" == typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
            }

            function rh(e, t) {
                let r = rm(e);
                return Math.round(t * r) / r
            }

            function ry(e) {
                let t = s.useRef(e);
                return rp(() => {
                    t.current = e
                }), t
            }
            var rv = 'input:not([inert]),select:not([inert]),textarea:not([inert]),a[href]:not([inert]),button:not([inert]),[tabindex]:not(slot):not([inert]),audio[controls]:not([inert]),video[controls]:not([inert]),[contenteditable]:not([contenteditable="false"]):not([inert]),details>summary:first-of-type:not([inert]),details:not([inert])',
                rx = "undefined" == typeof Element,
                rw = rx ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector,
                rk = !rx && Element.prototype.getRootNode ? function(e) {
                    var t;
                    return null == e ? void 0 : null === (t = e.getRootNode) || void 0 === t ? void 0 : t.call(e)
                } : function(e) {
                    return null == e ? void 0 : e.ownerDocument
                },
                rE = function e(t, r) {
                    void 0 === r && (r = !0);
                    var n, o = null == t ? void 0 : null === (n = t.getAttribute) || void 0 === n ? void 0 : n.call(t, "inert");
                    return "" === o || "true" === o || r && t && e(t.parentNode)
                },
                rN = function(e) {
                    var t, r = null == e ? void 0 : null === (t = e.getAttribute) || void 0 === t ? void 0 : t.call(e, "contenteditable");
                    return "" === r || "true" === r
                },
                rj = function(e, t, r) {
                    if (rE(e)) return [];
                    var n = Array.prototype.slice.apply(e.querySelectorAll(rv));
                    return t && rw.call(e, rv) && n.unshift(e), n = n.filter(r)
                },
                rC = function e(t, r, n) {
                    for (var o = [], a = Array.from(t); a.length;) {
                        var l = a.shift();
                        if (!rE(l, !1)) {
                            if ("SLOT" === l.tagName) {
                                var i = l.assignedElements(),
                                    s = e(i.length ? i : l.children, !0, n);
                                n.flatten ? o.push.apply(o, s) : o.push({
                                    scopeParent: l,
                                    candidates: s
                                })
                            } else {
                                rw.call(l, rv) && n.filter(l) && (r || !t.includes(l)) && o.push(l);
                                var d = l.shadowRoot || "function" == typeof n.getShadowRoot && n.getShadowRoot(l),
                                    u = !rE(d, !1) && (!n.shadowRootFilter || n.shadowRootFilter(l));
                                if (d && u) {
                                    var c = e(!0 === d ? l.children : d.children, !0, n);
                                    n.flatten ? o.push.apply(o, c) : o.push({
                                        scopeParent: l,
                                        candidates: c
                                    })
                                } else a.unshift.apply(a, l.children)
                            }
                        }
                    }
                    return o
                },
                rT = function(e) {
                    return !isNaN(parseInt(e.getAttribute("tabindex"), 10))
                },
                rM = function(e) {
                    if (!e) throw Error("No node provided");
                    return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || rN(e)) && !rT(e) ? 0 : e.tabIndex
                },
                rS = function(e, t) {
                    var r = rM(e);
                    return r < 0 && t && !rT(e) ? 0 : r
                },
                rR = function(e, t) {
                    return e.tabIndex === t.tabIndex ? e.documentOrder - t.documentOrder : e.tabIndex - t.tabIndex
                },
                rI = function(e) {
                    return "INPUT" === e.tagName
                },
                rO = function(e, t) {
                    for (var r = 0; r < e.length; r++)
                        if (e[r].checked && e[r].form === t) return e[r]
                },
                rP = function(e) {
                    if (!e.name) return !0;
                    var t, r = e.form || rk(e),
                        n = function(e) {
                            return r.querySelectorAll('input[type="radio"][name="' + e + '"]')
                        };
                    if ("undefined" != typeof window && void 0 !== window.CSS && "function" == typeof window.CSS.escape) t = n(window.CSS.escape(e.name));
                    else try {
                        t = n(e.name)
                    } catch (e) {
                        return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", e.message), !1
                    }
                    var o = rO(t, e.form);
                    return !o || o === e
                },
                rD = function(e) {
                    var t, r, n, o, a, l, i, s = e && rk(e),
                        d = null === (t = s) || void 0 === t ? void 0 : t.host,
                        u = !1;
                    if (s && s !== e)
                        for (u = !!(null !== (r = d) && void 0 !== r && null !== (n = r.ownerDocument) && void 0 !== n && n.contains(d) || null != e && null !== (o = e.ownerDocument) && void 0 !== o && o.contains(e)); !u && d;) u = !!(null !== (l = d = null === (a = s = rk(d)) || void 0 === a ? void 0 : a.host) && void 0 !== l && null !== (i = l.ownerDocument) && void 0 !== i && i.contains(d));
                    return u
                },
                rL = function(e) {
                    var t = e.getBoundingClientRect(),
                        r = t.width,
                        n = t.height;
                    return 0 === r && 0 === n
                },
                rA = function(e, t) {
                    var r = t.displayCheck,
                        n = t.getShadowRoot;
                    if ("hidden" === getComputedStyle(e).visibility) return !0;
                    var o = rw.call(e, "details>summary:first-of-type") ? e.parentElement : e;
                    if (rw.call(o, "details:not([open]) *")) return !0;
                    if (r && "full" !== r && "legacy-full" !== r) {
                        if ("non-zero-area" === r) return rL(e)
                    } else {
                        if ("function" == typeof n) {
                            for (var a = e; e;) {
                                var l = e.parentElement,
                                    i = rk(e);
                                if (l && !l.shadowRoot && !0 === n(l)) return rL(e);
                                e = e.assignedSlot ? e.assignedSlot : l || i === e.ownerDocument ? l : i.host
                            }
                            e = a
                        }
                        if (rD(e)) return !e.getClientRects().length;
                        if ("legacy-full" !== r) return !0
                    }
                    return !1
                },
                rF = function(e) {
                    if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
                        for (var t = e.parentElement; t;) {
                            if ("FIELDSET" === t.tagName && t.disabled) {
                                for (var r = 0; r < t.children.length; r++) {
                                    var n = t.children.item(r);
                                    if ("LEGEND" === n.tagName) return !!rw.call(t, "fieldset[disabled] *") || !n.contains(e)
                                }
                                return !0
                            }
                            t = t.parentElement
                        }
                    return !1
                },
                rz = function(e, t) {
                    var r, n, o;
                    return !(rI(r = t) && "radio" === r.type && !rP(r) || 0 > rM(t)) && (n = e, !((o = t).disabled || rE(o) || rI(o) && "hidden" === o.type || rA(o, n) || "DETAILS" === o.tagName && Array.prototype.slice.apply(o.children).some(function(e) {
                        return "SUMMARY" === e.tagName
                    }) || rF(o)))
                },
                rB = function(e) {
                    var t = parseInt(e.getAttribute("tabindex"), 10);
                    return !!isNaN(t) || t >= 0
                },
                r_ = function e(t) {
                    var r = [],
                        n = [];
                    return t.forEach(function(t, o) {
                        var a = !!t.scopeParent,
                            l = a ? t.scopeParent : t,
                            i = rS(l, a),
                            s = a ? e(t.candidates) : l;
                        0 === i ? a ? r.push.apply(r, s) : r.push(l) : n.push({
                            documentOrder: o,
                            tabIndex: i,
                            item: t,
                            isScope: a,
                            content: s
                        })
                    }), n.sort(rR).reduce(function(e, t) {
                        return t.isScope ? e.push.apply(e, t.content) : e.push(t.content), e
                    }, []).concat(r)
                },
                rH = function(e, t) {
                    return r_((t = t || {}).getShadowRoot ? rC([e], t.includeContainer, {
                        filter: rz.bind(null, t),
                        flatten: !1,
                        getShadowRoot: t.getShadowRoot,
                        shadowRootFilter: rB
                    }) : rj(e, t.includeContainer, rz.bind(null, t)))
                },
                rW = function(e, t) {
                    if (t = t || {}, !e) throw Error("No node provided");
                    return !1 !== rw.call(e, rv) && rz(t, e)
                };

            function rY(e) {
                return s.useMemo(() => e.every(e => null == e) ? null : t => {
                    e.forEach(e => {
                        "function" == typeof e ? e(t) : null != e && (e.current = t)
                    })
                }, e)
            }
            let rG = d["useInsertionEffect".toString()] || (e => e());

            function rq(e) {
                let t = s.useRef(() => {});
                return rG(() => {
                    t.current = e
                }), s.useCallback(function() {
                    for (var e = arguments.length, r = Array(e), n = 0; n < e; n++) r[n] = arguments[n];
                    return null == t.current ? void 0 : t.current(...r)
                }, [])
            }
            let rU = "ArrowUp",
                rV = "ArrowDown",
                rK = "ArrowLeft",
                rX = "ArrowRight";

            function r$(e, t, r) {
                return Math.floor(e / t) !== r
            }

            function rZ(e, t) {
                return t < 0 || t >= e.current.length
            }

            function rQ(e, t) {
                return r0(e, {
                    disabledIndices: t
                })
            }

            function rJ(e, t) {
                return r0(e, {
                    decrement: !0,
                    startingIndex: e.current.length,
                    disabledIndices: t
                })
            }

            function r0(e, t) {
                let {
                    startingIndex: r = -1,
                    decrement: n = !1,
                    disabledIndices: o,
                    amount: a = 1
                } = void 0 === t ? {} : t, l = e.current, i = o ? e => o.includes(e) : e => {
                    let t = l[e];
                    return null == t || t.hasAttribute("disabled") || "true" === t.getAttribute("aria-disabled")
                }, s = r;
                do s += n ? -a : a; while (s >= 0 && s <= l.length - 1 && i(s));
                return s
            }
            let r1 = 0;

            function r5(e, t) {
                void 0 === t && (t = {});
                let {
                    preventScroll: r = !1,
                    cancelPrevious: n = !0,
                    sync: o = !1
                } = t;
                n && cancelAnimationFrame(r1);
                let a = () => null == e ? void 0 : e.focus({
                    preventScroll: r
                });
                o ? a() : r1 = requestAnimationFrame(a)
            }
            var r2 = "undefined" != typeof document ? s.useLayoutEffect : s.useEffect;

            function r4(e, t) {
                let r = e.compareDocumentPosition(t);
                return r & Node.DOCUMENT_POSITION_FOLLOWING || r & Node.DOCUMENT_POSITION_CONTAINED_BY ? -1 : r & Node.DOCUMENT_POSITION_PRECEDING || r & Node.DOCUMENT_POSITION_CONTAINS ? 1 : 0
            }
            let r6 = s.createContext({
                register: () => {},
                unregister: () => {},
                map: new Map,
                elementsRef: {
                    current: []
                }
            });

            function r7(e) {
                let {
                    children: t,
                    elementsRef: r,
                    labelsRef: n
                } = e, [o, a] = s.useState(() => new Map), l = s.useCallback(e => {
                    a(t => new Map(t).set(e, null))
                }, []), i = s.useCallback(e => {
                    a(t => {
                        let r = new Map(t);
                        return r.delete(e), r
                    })
                }, []);
                return r2(() => {
                    let e = new Map(o);
                    Array.from(e.keys()).sort(r4).forEach((t, r) => {
                        e.set(t, r)
                    }), ! function(e, t) {
                        if (e.size !== t.size) return !1;
                        for (let [r, n] of e.entries())
                            if (n !== t.get(r)) return !1;
                        return !0
                    }(o, e) && a(e)
                }, [o]), s.createElement(r6.Provider, {
                    value: s.useMemo(() => ({
                        register: l,
                        unregister: i,
                        map: o,
                        elementsRef: r,
                        labelsRef: n
                    }), [l, i, o, r, n])
                }, t)
            }

            function r3() {
                return (r3 = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            let r9 = !1,
                r8 = 0,
                ne = () => "floating-ui-" + r8++,
                nt = d["useId".toString()] || function() {
                    let [e, t] = s.useState(() => r9 ? ne() : void 0);
                    return r2(() => {
                        null == e && t(ne())
                    }, []), s.useEffect(() => {
                        r9 || (r9 = !0)
                    }, []), e
                },
                nr = s.createContext(null),
                nn = s.createContext(null),
                no = () => {
                    var e;
                    return (null == (e = s.useContext(nr)) ? void 0 : e.id) || null
                },
                na = () => s.useContext(nn);

            function nl(e) {
                return "data-floating-ui-" + e
            }

            function ni(e) {
                let t = (0, s.useRef)(e);
                return r2(() => {
                    t.current = e
                }), t
            }
            let ns = nl("safe-polygon");

            function nd(e, t, r) {
                return r && !tM(r) ? 0 : "number" == typeof e ? e : null == e ? void 0 : e[t]
            }

            function nu(e, t) {
                let r = e.filter(e => {
                        var r;
                        return e.parentId === t && (null == (r = e.context) ? void 0 : r.open)
                    }),
                    n = r;
                for (; n.length;) n = e.filter(e => {
                    var t;
                    return null == (t = n) ? void 0 : t.some(t => {
                        var r;
                        return e.parentId === t.id && (null == (r = e.context) ? void 0 : r.open)
                    })
                }), r = r.concat(n);
                return r
            }
            let nc = new WeakMap,
                nf = new WeakSet,
                ng = {},
                np = 0,
                nb = () => "undefined" != typeof HTMLElement && "inert" in HTMLElement.prototype,
                nm = e => e && (e.host || nm(e.parentNode)),
                nh = (e, t) => t.map(t => {
                    if (e.contains(t)) return t;
                    let r = nm(t);
                    return e.contains(r) ? r : null
                }).filter(e => null != e);

            function ny(e, t, r) {
                void 0 === t && (t = !1), void 0 === r && (r = !1);
                let n = tS(e[0]).body;
                return function(e, t, r, n) {
                    let o = "data-floating-ui-inert",
                        a = n ? "inert" : r ? "aria-hidden" : null,
                        l = nh(t, e),
                        i = new Set,
                        s = new Set(l),
                        d = [];
                    ng[o] || (ng[o] = new WeakMap);
                    let u = ng[o];
                    return l.forEach(function e(t) {
                            !(!t || i.has(t)) && (i.add(t), t.parentNode && e(t.parentNode))
                        }),
                        function e(t) {
                            !t || s.has(t) || Array.prototype.forEach.call(t.children, t => {
                                if (i.has(t)) e(t);
                                else {
                                    let e = a ? t.getAttribute(a) : null,
                                        r = null !== e && "false" !== e,
                                        n = (nc.get(t) || 0) + 1,
                                        l = (u.get(t) || 0) + 1;
                                    nc.set(t, n), u.set(t, l), d.push(t), 1 === n && r && nf.add(t), 1 === l && t.setAttribute(o, ""), !r && a && t.setAttribute(a, "true")
                                }
                            })
                        }(t), i.clear(), np++, () => {
                            d.forEach(e => {
                                let t = (nc.get(e) || 0) - 1,
                                    r = (u.get(e) || 0) - 1;
                                nc.set(e, t), u.set(e, r), t || (!nf.has(e) && a && e.removeAttribute(a), nf.delete(e)), r || e.removeAttribute(o)
                            }), --np || (nc = new WeakMap, nc = new WeakMap, nf = new WeakSet, ng = {})
                        }
                }(e.concat(Array.from(n.querySelectorAll("[aria-live]"))), n, t, r)
            }
            let nv = () => ({
                getShadowRoot: !0,
                displayCheck: "function" == typeof ResizeObserver && ResizeObserver.toString().includes("[native code]") ? "full" : "none"
            });

            function nx(e, t) {
                let r = rH(e, nv());
                "prev" === t && r.reverse();
                let n = r.indexOf(tv(tS(e)));
                return r.slice(n + 1)[0]
            }

            function nw() {
                return nx(document.body, "next")
            }

            function nk() {
                return nx(document.body, "prev")
            }

            function nE(e, t) {
                let r = t || e.currentTarget,
                    n = e.relatedTarget;
                return !n || !tx(r, n)
            }
            let nN = {
                border: 0,
                clip: "rect(0 0 0 0)",
                height: "1px",
                margin: "-1px",
                overflow: "hidden",
                padding: 0,
                position: "fixed",
                whiteSpace: "nowrap",
                width: "1px",
                top: 0,
                left: 0
            };

            function nj(e) {
                "Tab" === e.key && (e.target, clearTimeout(n))
            }
            let nC = s.forwardRef(function(e, t) {
                    let [r, n] = s.useState();
                    r2(() => (tj() && n("button"), document.addEventListener("keydown", nj), () => {
                        document.removeEventListener("keydown", nj)
                    }), []);
                    let o = {
                        ref: t,
                        tabIndex: 0,
                        role: r,
                        "aria-hidden": !r || void 0,
                        [nl("focus-guard")]: "",
                        style: nN
                    };
                    return s.createElement("span", r3({}, e, o))
                }),
                nT = s.createContext(null),
                nM = nl("portal");

            function nS(e) {
                let {
                    children: t,
                    id: r,
                    root: n = null,
                    preserveTabOrder: o = !0
                } = e, a = function(e) {
                    let {
                        id: t,
                        root: r
                    } = void 0 === e ? {} : e, [n, o] = s.useState(null), a = nt(), l = nR(), i = s.useRef(null);
                    return r2(() => () => {
                        null == n || n.remove(), queueMicrotask(() => {
                            i.current = null
                        })
                    }, [n]), r2(() => {
                        if (i.current) return;
                        let e = t ? document.getElementById(t) : null;
                        if (!e) return;
                        let r = document.createElement("div");
                        r.id = a, r.setAttribute(nM, ""), e.appendChild(r), i.current = r, o(r)
                    }, [t, a]), r2(() => {
                        if (i.current) return;
                        let e = r || (null == l ? void 0 : l.portalNode);
                        e && !ts(e) && (e = e.current), e = e || document.body;
                        let n = null;
                        t && ((n = document.createElement("div")).id = t, e.appendChild(n));
                        let s = document.createElement("div");
                        s.id = a, s.setAttribute(nM, ""), (e = n || e).appendChild(s), i.current = s, o(s)
                    }, [t, r, a, l]), n
                }({
                    id: r,
                    root: n
                }), [l, i] = s.useState(null), d = s.useRef(null), u = s.useRef(null), c = s.useRef(null), f = s.useRef(null), g = !!l && !l.modal && l.open && o && !!(n || a);
                return s.useEffect(() => {
                    if (a && o && (null == l || !l.modal)) return a.addEventListener("focusin", e, !0), a.addEventListener("focusout", e, !0), () => {
                        a.removeEventListener("focusin", e, !0), a.removeEventListener("focusout", e, !0)
                    };

                    function e(e) {
                        a && nE(e) && ("focusin" === e.type ? function(e) {
                            e.querySelectorAll("[data-tabindex]").forEach(e => {
                                let t = e.dataset.tabindex;
                                delete e.dataset.tabindex, t ? e.setAttribute("tabindex", t) : e.removeAttribute("tabindex")
                            })
                        } : function(e) {
                            rH(e, nv()).forEach(e => {
                                e.dataset.tabindex = e.getAttribute("tabindex") || "", e.setAttribute("tabindex", "-1")
                            })
                        })(a)
                    }
                }, [a, o, null == l ? void 0 : l.modal]), s.createElement(nT.Provider, {
                    value: s.useMemo(() => ({
                        preserveTabOrder: o,
                        beforeOutsideRef: d,
                        afterOutsideRef: u,
                        beforeInsideRef: c,
                        afterInsideRef: f,
                        portalNode: a,
                        setFocusManagerState: i
                    }), [o, a])
                }, g && a && s.createElement(nC, {
                    "data-type": "outside",
                    ref: d,
                    onFocus: e => {
                        if (nE(e, a)) {
                            var t;
                            null == (t = c.current) || t.focus()
                        } else {
                            let e = nk() || (null == l ? void 0 : l.refs.domReference.current);
                            null == e || e.focus()
                        }
                    }
                }), g && a && s.createElement("span", {
                    "aria-owns": a.id,
                    style: nN
                }), a && (0, rf.createPortal)(t, a), g && a && s.createElement(nC, {
                    "data-type": "outside",
                    ref: u,
                    onFocus: e => {
                        if (nE(e, a)) {
                            var t;
                            null == (t = f.current) || t.focus()
                        } else {
                            let t = nw() || (null == l ? void 0 : l.refs.domReference.current);
                            null == t || t.focus(), (null == l ? void 0 : l.closeOnFocusOut) && (null == l || l.onOpenChange(!1, e.nativeEvent))
                        }
                    }
                }))
            }
            let nR = () => s.useContext(nT),
                nI = [];

            function nO(e) {
                nI = nI.filter(e => e.isConnected);
                let t = e;
                if (t && "body" !== to(t)) {
                    if (!rW(t, nv())) {
                        let e = rH(t, nv())[0];
                        if (!e) return;
                        t = e
                    }
                    nI.push(t), nI.length > 20 && (nI = nI.slice(-20))
                }
            }

            function nP() {
                return nI.slice().reverse().find(e => e.isConnected)
            }
            let nD = s.forwardRef(function(e, t) {
                return s.createElement("button", r3({}, e, {
                    type: "button",
                    ref: t,
                    tabIndex: -1,
                    style: nN
                }))
            });

            function nL(e) {
                let {
                    context: t,
                    children: r,
                    disabled: n = !1,
                    order: o = ["content"],
                    guards: a = !0,
                    initialFocus: l = 0,
                    returnFocus: i = !0,
                    modal: d = !0,
                    visuallyHiddenDismiss: u = !1,
                    closeOnFocusOut: c = !0
                } = e, {
                    open: f,
                    refs: g,
                    nodeId: p,
                    onOpenChange: b,
                    events: m,
                    dataRef: h,
                    elements: {
                        domReference: y,
                        floating: v
                    }
                } = t, x = "number" == typeof l && l < 0, w = tD(y) && x, k = !nb() || a, E = ni(o), N = ni(l), j = ni(i), C = na(), T = nR(), M = s.useRef(null), S = s.useRef(null), R = s.useRef(!1), I = s.useRef(!1), O = null != T, P = s.useCallback(function(e) {
                    return void 0 === e && (e = v), e ? rH(e, nv()) : []
                }, [v]), D = s.useCallback(e => {
                    let t = P(e);
                    return E.current.map(e => y && "reference" === e ? y : v && "floating" === e ? v : t).filter(Boolean).flat()
                }, [y, v, E, P]);

                function L(e) {
                    return !n && u && d ? s.createElement(nD, {
                        ref: "start" === e ? M : S,
                        onClick: e => b(!1, e.nativeEvent)
                    }, "string" == typeof u ? u : "Dismiss") : null
                }
                s.useEffect(() => {
                    if (n || !d) return;

                    function e(e) {
                        if ("Tab" === e.key) {
                            tx(v, tv(tS(v))) && 0 === P().length && !w && tP(e);
                            let t = D(),
                                r = tI(e);
                            "reference" === E.current[0] && r === y && (tP(e), e.shiftKey ? r5(t[t.length - 1]) : r5(t[1])), "floating" === E.current[1] && r === v && e.shiftKey && (tP(e), r5(t[0]))
                        }
                    }
                    let t = tS(v);
                    return t.addEventListener("keydown", e), () => {
                        t.removeEventListener("keydown", e)
                    }
                }, [n, y, v, d, E, w, P, D]), s.useEffect(() => {
                    if (!n && c && v && td(y)) return y.addEventListener("focusout", t), y.addEventListener("pointerdown", e), d || v.addEventListener("focusout", t), () => {
                        y.removeEventListener("focusout", t), y.removeEventListener("pointerdown", e), d || v.removeEventListener("focusout", t)
                    };

                    function e() {
                        I.current = !0, setTimeout(() => {
                            I.current = !1
                        })
                    }

                    function t(e) {
                        let t = e.relatedTarget;
                        queueMicrotask(() => {
                            let r = !(tx(y, t) || tx(v, t) || tx(t, v) || tx(null == T ? void 0 : T.portalNode, t) || null != t && t.hasAttribute(nl("focus-guard")) || C && (nu(C.nodesRef.current, p).find(e => {
                                var r, n;
                                return tx(null == (r = e.context) ? void 0 : r.elements.floating, t) || tx(null == (n = e.context) ? void 0 : n.elements.domReference, t)
                            }) || (function(e, t) {
                                var r;
                                let n = [],
                                    o = null == (r = e.find(e => e.id === t)) ? void 0 : r.parentId;
                                for (; o;) {
                                    let t = e.find(e => e.id === o);
                                    o = null == t ? void 0 : t.parentId, t && (n = n.concat(t))
                                }
                                return n
                            })(C.nodesRef.current, p).find(e => {
                                var r, n;
                                return (null == (r = e.context) ? void 0 : r.elements.floating) === t || (null == (n = e.context) ? void 0 : n.elements.domReference) === t
                            })));
                            t && r && !I.current && t !== nP() && (R.current = !0, b(!1, e))
                        })
                    }
                }, [n, y, v, d, p, C, T, b, c]), s.useEffect(() => {
                    var e;
                    if (n) return;
                    let t = Array.from((null == T || null == (e = T.portalNode) ? void 0 : e.querySelectorAll("[" + nl("portal") + "]")) || []);
                    if (v) {
                        let e = [v, ...t, M.current, S.current, E.current.includes("reference") || w ? y : null].filter(e => null != e),
                            r = d || w ? ny(e, k, !k) : ny(e);
                        return () => {
                            r()
                        }
                    }
                }, [n, y, v, d, E, T, w, k]), r2(() => {
                    if (n || !v) return;
                    let e = tv(tS(v));
                    queueMicrotask(() => {
                        let t = D(v),
                            r = N.current,
                            n = ("number" == typeof r ? t[r] : r.current) || v,
                            o = tx(v, e);
                        x || o || !f || r5(n, {
                            preventScroll: n === v
                        })
                    })
                }, [n, f, v, x, D, N]), r2(() => {
                    if (n || !v) return;
                    let e = !1,
                        t = tS(v),
                        r = tv(t),
                        o = h.current;

                    function a(t) {
                        let {
                            reason: r,
                            event: n,
                            nested: o
                        } = t;
                        "escape-key" === r && g.domReference.current && nO(g.domReference.current), "hover" === r && "mouseleave" === n.type && (R.current = !0), "outside-press" === r && (o ? (R.current = !1, e = !0) : R.current = !(tE(n) || tN(n)))
                    }
                    return nO(r), m.on("openchange", a), () => {
                        m.off("openchange", a);
                        let r = tv(t),
                            n = tx(v, r) || C && nu(C.nodesRef.current, p).some(e => {
                                var t;
                                return tx(null == (t = e.context) ? void 0 : t.elements.floating, r)
                            });
                        (n || o.openEvent && ["click", "mousedown"].includes(o.openEvent.type)) && g.domReference.current && nO(g.domReference.current);
                        let l = nP();
                        j.current && !R.current && td(l) && (l === r || r === t.body || n) && r5(l, {
                            cancelPrevious: !1,
                            preventScroll: e
                        })
                    }
                }, [n, v, j, h, g, m, C, p]), r2(() => {
                    if (!n && T) return T.setFocusManagerState({
                        modal: d,
                        closeOnFocusOut: c,
                        open: f,
                        onOpenChange: b,
                        refs: g
                    }), () => {
                        T.setFocusManagerState(null)
                    }
                }, [n, T, d, f, b, g, c]), r2(() => {
                    if (n || !v || "function" != typeof MutationObserver || x) return;
                    let e = () => {
                        let e = v.getAttribute("tabindex");
                        E.current.includes("floating") || tv(tS(v)) !== g.domReference.current && 0 === P().length ? "0" !== e && v.setAttribute("tabindex", "0") : "-1" !== e && v.setAttribute("tabindex", "-1")
                    };
                    e();
                    let t = new MutationObserver(e);
                    return t.observe(v, {
                        childList: !0,
                        subtree: !0,
                        attributes: !0
                    }), () => {
                        t.disconnect()
                    }
                }, [n, v, g, E, P, x]);
                let A = !n && k && (O || d);
                return s.createElement(s.Fragment, null, A && s.createElement(nC, {
                    "data-type": "inside",
                    ref: null == T ? void 0 : T.beforeInsideRef,
                    onFocus: e => {
                        if (d) {
                            let e = D();
                            r5("reference" === o[0] ? e[0] : e[e.length - 1])
                        } else if (null != T && T.preserveTabOrder && T.portalNode) {
                            if (R.current = !1, nE(e, T.portalNode)) {
                                let e = nw() || y;
                                null == e || e.focus()
                            } else {
                                var t;
                                null == (t = T.beforeOutsideRef.current) || t.focus()
                            }
                        }
                    }
                }), !w && L("start"), r, L("end"), A && s.createElement(nC, {
                    "data-type": "inside",
                    ref: null == T ? void 0 : T.afterInsideRef,
                    onFocus: e => {
                        if (d) r5(D()[0]);
                        else if (null != T && T.preserveTabOrder && T.portalNode) {
                            if (c && (R.current = !0), nE(e, T.portalNode)) {
                                let e = nk() || y;
                                null == e || e.focus()
                            } else {
                                var t;
                                null == (t = T.afterOutsideRef.current) || t.focus()
                            }
                        }
                    }
                }))
            }
            let nA = new Set,
                nF = s.forwardRef(function(e, t) {
                    let {
                        lockScroll: r = !1,
                        ...n
                    } = e, o = nt();
                    return r2(() => {
                        if (!r) return;
                        nA.add(o);
                        let e = /iP(hone|ad|od)|iOS/.test(tw()),
                            t = document.body.style,
                            n = Math.round(document.documentElement.getBoundingClientRect().left) + document.documentElement.scrollLeft ? "paddingLeft" : "paddingRight",
                            a = window.innerWidth - document.documentElement.clientWidth,
                            l = t.left ? parseFloat(t.left) : window.pageXOffset,
                            i = t.top ? parseFloat(t.top) : window.pageYOffset;
                        if (t.overflow = "hidden", a && (t[n] = a + "px"), e) {
                            var s, d;
                            let e = (null == (s = window.visualViewport) ? void 0 : s.offsetLeft) || 0;
                            Object.assign(t, {
                                position: "fixed",
                                top: -(i - Math.floor((null == (d = window.visualViewport) ? void 0 : d.offsetTop) || 0)) + "px",
                                left: -(l - Math.floor(e)) + "px",
                                right: "0"
                            })
                        }
                        return () => {
                            nA.delete(o), 0 === nA.size && (Object.assign(t, {
                                overflow: "",
                                [n]: ""
                            }), e && (Object.assign(t, {
                                position: "",
                                top: "",
                                left: "",
                                right: ""
                            }), window.scrollTo(l, i)))
                        }
                    }, [o, r]), s.createElement("div", r3({
                        ref: t
                    }, n, {
                        style: {
                            position: "fixed",
                            overflow: "auto",
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0,
                            ...n.style
                        }
                    }))
                });

            function nz(e) {
                return td(e.target) && "BUTTON" === e.target.tagName
            }

            function nB(e, t) {
                void 0 === t && (t = {});
                let {
                    open: r,
                    onOpenChange: n,
                    dataRef: o,
                    elements: {
                        domReference: a
                    }
                } = e, {
                    enabled: l = !0,
                    event: i = "click",
                    toggle: d = !0,
                    ignoreMouse: u = !1,
                    keyboardHandlers: c = !0
                } = t, f = s.useRef(), g = s.useRef(!1);
                return s.useMemo(() => l ? {
                    reference: {
                        onPointerDown(e) {
                            f.current = e.pointerType
                        },
                        onMouseDown(e) {
                            0 !== e.button || tM(f.current, !0) && u || "click" === i || (r && d && (!o.current.openEvent || "mousedown" === o.current.openEvent.type) ? n(!1, e.nativeEvent, "click") : (e.preventDefault(), n(!0, e.nativeEvent, "click")))
                        },
                        onClick(e) {
                            if ("mousedown" === i && f.current) {
                                f.current = void 0;
                                return
                            }
                            tM(f.current, !0) && u || (r && d && (!o.current.openEvent || "click" === o.current.openEvent.type) ? n(!1, e.nativeEvent, "click") : n(!0, e.nativeEvent, "click"))
                        },
                        onKeyDown(e) {
                            f.current = void 0, e.defaultPrevented || !c || nz(e) || (" " !== e.key || tO(a) || (e.preventDefault(), g.current = !0), "Enter" === e.key && (r && d ? n(!1, e.nativeEvent, "click") : n(!0, e.nativeEvent, "click")))
                        },
                        onKeyUp(e) {
                            !(e.defaultPrevented || !c || nz(e) || tO(a)) && " " === e.key && g.current && (g.current = !1, r && d ? n(!1, e.nativeEvent, "click") : n(!0, e.nativeEvent, "click"))
                        }
                    }
                } : {}, [l, o, i, u, c, a, d, r, n])
            }
            let n_ = {
                    pointerdown: "onPointerDown",
                    mousedown: "onMouseDown",
                    click: "onClick"
                },
                nH = {
                    pointerdown: "onPointerDownCapture",
                    mousedown: "onMouseDownCapture",
                    click: "onClickCapture"
                },
                nW = e => {
                    var t, r;
                    return {
                        escapeKey: "boolean" == typeof e ? e : null != (t = null == e ? void 0 : e.escapeKey) && t,
                        outsidePress: "boolean" == typeof e ? e : null == (r = null == e ? void 0 : e.outsidePress) || r
                    }
                };

            function nY(e, t) {
                void 0 === t && (t = {});
                let {
                    open: r,
                    onOpenChange: n,
                    nodeId: o,
                    elements: {
                        reference: a,
                        domReference: l,
                        floating: i
                    },
                    dataRef: d
                } = e, {
                    enabled: u = !0,
                    escapeKey: c = !0,
                    outsidePress: f = !0,
                    outsidePressEvent: g = "pointerdown",
                    referencePress: p = !1,
                    referencePressEvent: b = "pointerdown",
                    ancestorScroll: m = !1,
                    bubbles: h,
                    capture: y
                } = t, v = na(), x = rq("function" == typeof f ? f : () => !1), w = "function" == typeof f ? x : f, k = s.useRef(!1), E = s.useRef(!1), {
                    escapeKey: N,
                    outsidePress: j
                } = nW(h), {
                    escapeKey: C,
                    outsidePress: T
                } = nW(y), M = rq(e => {
                    if (!r || !u || !c || "Escape" !== e.key) return;
                    let t = v ? nu(v.nodesRef.current, o) : [];
                    if (!N && (e.stopPropagation(), t.length > 0)) {
                        let e = !0;
                        if (t.forEach(t => {
                                var r;
                                if (null != (r = t.context) && r.open && !t.context.dataRef.current.__escapeKeyBubbles) {
                                    e = !1;
                                    return
                                }
                            }), !e) return
                    }
                    n(!1, "nativeEvent" in e ? e.nativeEvent : e, "escape-key")
                }), S = rq(e => {
                    var t;
                    let r = () => {
                        var t;
                        M(e), null == (t = tI(e)) || t.removeEventListener("keydown", r)
                    };
                    null == (t = tI(e)) || t.addEventListener("keydown", r)
                }), R = rq(e => {
                    let t = k.current;
                    k.current = !1;
                    let r = E.current;
                    if (E.current = !1, "click" === g && r || t || "function" == typeof w && !w(e)) return;
                    let a = tI(e),
                        s = "[" + nl("inert") + "]",
                        d = tS(i).querySelectorAll(s),
                        u = ts(a) ? a : null;
                    for (; u && !tp(u);) {
                        let e = th(u);
                        if (tp(e) || !ts(e)) break;
                        u = e
                    }
                    if (d.length && ts(a) && !a.matches("html,body") && !tx(a, i) && Array.from(d).every(e => !tx(u, e))) return;
                    if (td(a) && i) {
                        let t = a.clientWidth > 0 && a.scrollWidth > a.clientWidth,
                            r = a.clientHeight > 0 && a.scrollHeight > a.clientHeight,
                            n = r && e.offsetX > a.clientWidth;
                        if (r && "rtl" === tb(a).direction && (n = e.offsetX <= a.offsetWidth - a.clientWidth), n || t && e.offsetY > a.clientHeight) return
                    }
                    let c = v && nu(v.nodesRef.current, o).some(t => {
                        var r;
                        return tR(e, null == (r = t.context) ? void 0 : r.elements.floating)
                    });
                    if (tR(e, i) || tR(e, l) || c) return;
                    let f = v ? nu(v.nodesRef.current, o) : [];
                    if (f.length > 0) {
                        let e = !0;
                        if (f.forEach(t => {
                                var r;
                                if (null != (r = t.context) && r.open && !t.context.dataRef.current.__outsidePressBubbles) {
                                    e = !1;
                                    return
                                }
                            }), !e) return
                    }
                    n(!1, e, "outside-press")
                }), I = rq(e => {
                    var t;
                    let r = () => {
                        var t;
                        R(e), null == (t = tI(e)) || t.removeEventListener(g, r)
                    };
                    null == (t = tI(e)) || t.addEventListener(g, r)
                });
                return s.useEffect(() => {
                    if (!r || !u) return;

                    function e(e) {
                        n(!1, e, "ancestor-scroll")
                    }
                    d.current.__escapeKeyBubbles = N, d.current.__outsidePressBubbles = j;
                    let t = tS(i);
                    c && t.addEventListener("keydown", C ? S : M, C), w && t.addEventListener(g, T ? I : R, T);
                    let o = [];
                    return m && (ts(l) && (o = ty(l)), ts(i) && (o = o.concat(ty(i))), !ts(a) && a && a.contextElement && (o = o.concat(ty(a.contextElement)))), (o = o.filter(e => {
                        var r;
                        return e !== (null == (r = t.defaultView) ? void 0 : r.visualViewport)
                    })).forEach(t => {
                        t.addEventListener("scroll", e, {
                            passive: !0
                        })
                    }), () => {
                        c && t.removeEventListener("keydown", C ? S : M, C), w && t.removeEventListener(g, T ? I : R, T), o.forEach(t => {
                            t.removeEventListener("scroll", e)
                        })
                    }
                }, [d, i, l, a, c, w, g, r, n, m, u, N, j, M, C, S, R, T, I]), s.useEffect(() => {
                    k.current = !1
                }, [w, g]), s.useMemo(() => u ? {
                    reference: {
                        onKeyDown: M,
                        [n_[b]]: e => {
                            p && n(!1, e.nativeEvent, "reference-press")
                        }
                    },
                    floating: {
                        onKeyDown: M,
                        onMouseDown() {
                            E.current = !0
                        },
                        onMouseUp() {
                            E.current = !0
                        },
                        [nH[g]]: () => {
                            k.current = !0
                        }
                    }
                } : {}, [u, p, g, b, n, M])
            }

            function nG(e) {
                var t;
                void 0 === e && (e = {});
                let {
                    open: r = !1,
                    onOpenChange: n,
                    nodeId: o
                } = e, [a, l] = s.useState(null), i = (null == (t = e.elements) ? void 0 : t.reference) || a, d = function(e) {
                    void 0 === e && (e = {});
                    let {
                        placement: t = "bottom",
                        strategy: r = "absolute",
                        middleware: n = [],
                        platform: o,
                        elements: {
                            reference: a,
                            floating: l
                        } = {},
                        transform: i = !0,
                        whileElementsMounted: d,
                        open: u
                    } = e, [c, f] = s.useState({
                        x: 0,
                        y: 0,
                        strategy: r,
                        placement: t,
                        middlewareData: {},
                        isPositioned: !1
                    }), [g, p] = s.useState(n);
                    rb(g, n) || p(n);
                    let [b, m] = s.useState(null), [h, y] = s.useState(null), v = s.useCallback(e => {
                        e !== E.current && (E.current = e, m(e))
                    }, []), x = s.useCallback(e => {
                        e !== N.current && (N.current = e, y(e))
                    }, []), w = a || b, k = l || h, E = s.useRef(null), N = s.useRef(null), j = s.useRef(c), C = null != d, T = ry(d), M = ry(o), S = s.useCallback(() => {
                        if (!E.current || !N.current) return;
                        let e = {
                            placement: t,
                            strategy: r,
                            middleware: g
                        };
                        M.current && (e.platform = M.current), rc(E.current, N.current, e).then(e => {
                            let t = { ...e,
                                isPositioned: !0
                            };
                            R.current && !rb(j.current, t) && (j.current = t, rf.flushSync(() => {
                                f(t)
                            }))
                        })
                    }, [g, t, r, M]);
                    rp(() => {
                        !1 === u && j.current.isPositioned && (j.current.isPositioned = !1, f(e => ({ ...e,
                            isPositioned: !1
                        })))
                    }, [u]);
                    let R = s.useRef(!1);
                    rp(() => (R.current = !0, () => {
                        R.current = !1
                    }), []), rp(() => {
                        if (w && (E.current = w), k && (N.current = k), w && k) {
                            if (T.current) return T.current(w, k, S);
                            S()
                        }
                    }, [w, k, S, T, C]);
                    let I = s.useMemo(() => ({
                            reference: E,
                            floating: N,
                            setReference: v,
                            setFloating: x
                        }), [v, x]),
                        O = s.useMemo(() => ({
                            reference: w,
                            floating: k
                        }), [w, k]),
                        P = s.useMemo(() => {
                            let e = {
                                position: r,
                                left: 0,
                                top: 0
                            };
                            if (!O.floating) return e;
                            let t = rh(O.floating, c.x),
                                n = rh(O.floating, c.y);
                            return i ? { ...e,
                                transform: "translate(" + t + "px, " + n + "px)",
                                ...rm(O.floating) >= 1.5 && {
                                    willChange: "transform"
                                }
                            } : {
                                position: r,
                                left: t,
                                top: n
                            }
                        }, [r, i, O.floating, c.x, c.y]);
                    return s.useMemo(() => ({ ...c,
                        update: S,
                        refs: I,
                        elements: O,
                        floatingStyles: P
                    }), [c, S, I, O, P])
                }(e), u = na(), c = null != no(), f = rq((e, t, r) => {
                    e && (p.current.openEvent = t), b.emit("openchange", {
                        open: e,
                        event: t,
                        reason: r,
                        nested: c
                    }), null == n || n(e, t, r)
                }), g = s.useRef(null), p = s.useRef({}), b = s.useState(() => (function() {
                    let e = new Map;
                    return {
                        emit(t, r) {
                            var n;
                            null == (n = e.get(t)) || n.forEach(e => e(r))
                        },
                        on(t, r) {
                            e.set(t, [...e.get(t) || [], r])
                        },
                        off(t, r) {
                            var n;
                            e.set(t, (null == (n = e.get(t)) ? void 0 : n.filter(e => e !== r)) || [])
                        }
                    }
                })())[0], m = nt(), h = s.useCallback(e => {
                    let t = ts(e) ? {
                        getBoundingClientRect: () => e.getBoundingClientRect(),
                        contextElement: e
                    } : e;
                    d.refs.setReference(t)
                }, [d.refs]), y = s.useCallback(e => {
                    (ts(e) || null === e) && (g.current = e, l(e)), (ts(d.refs.reference.current) || null === d.refs.reference.current || null !== e && !ts(e)) && d.refs.setReference(e)
                }, [d.refs]), v = s.useMemo(() => ({ ...d.refs,
                    setReference: y,
                    setPositionReference: h,
                    domReference: g
                }), [d.refs, y, h]), x = s.useMemo(() => ({ ...d.elements,
                    domReference: i
                }), [d.elements, i]), w = s.useMemo(() => ({ ...d,
                    refs: v,
                    elements: x,
                    dataRef: p,
                    nodeId: o,
                    floatingId: m,
                    events: b,
                    open: r,
                    onOpenChange: f
                }), [d, o, m, b, r, f, v, x]);
                return r2(() => {
                    let e = null == u ? void 0 : u.nodesRef.current.find(e => e.id === o);
                    e && (e.context = w)
                }), s.useMemo(() => ({ ...d,
                    context: w,
                    refs: v,
                    elements: x
                }), [d, v, x, w])
            }
            let nq = "active",
                nU = "selected";

            function nV(e, t, r) {
                let n = new Map,
                    o = "item" === r,
                    a = e;
                if (o && e) {
                    let {
                        [nq]: t, [nU]: r, ...n
                    } = e;
                    a = n
                }
                return { ..."floating" === r && {
                        tabIndex: -1
                    },
                    ...a,
                    ...t.map(t => {
                        let n = t ? t[r] : null;
                        return "function" == typeof n ? e ? n(e) : null : n
                    }).concat(e).reduce((e, t) => (t && Object.entries(t).forEach(t => {
                        let [r, a] = t;
                        if (!(o && [nq, nU].includes(r))) {
                            if (0 === r.indexOf("on")) {
                                if (n.has(r) || n.set(r, []), "function" == typeof a) {
                                    var l;
                                    null == (l = n.get(r)) || l.push(a), e[r] = function() {
                                        for (var e, t = arguments.length, o = Array(t), a = 0; a < t; a++) o[a] = arguments[a];
                                        return null == (e = n.get(r)) ? void 0 : e.map(e => e(...o)).find(e => void 0 !== e)
                                    }
                                }
                            } else e[r] = a
                        }
                    }), e), {})
                }
            }

            function nK(e) {
                void 0 === e && (e = []);
                let t = e,
                    r = s.useCallback(t => nV(t, e, "reference"), t),
                    n = s.useCallback(t => nV(t, e, "floating"), t),
                    o = s.useCallback(t => nV(t, e, "item"), e.map(e => null == e ? void 0 : e.item));
                return s.useMemo(() => ({
                    getReferenceProps: r,
                    getFloatingProps: n,
                    getItemProps: o
                }), [r, n, o])
            }
            let nX = !1;

            function n$(e, t, r) {
                switch (e) {
                    case "vertical":
                        return t;
                    case "horizontal":
                        return r;
                    default:
                        return t || r
                }
            }

            function nZ(e, t) {
                return n$(t, e === rU || e === rV, e === rK || e === rX)
            }

            function nQ(e, t, r) {
                return n$(t, e === rV, r ? e === rK : e === rX) || "Enter" === e || " " === e || "" === e
            }

            function nJ(e, t, r) {
                return n$(t, r ? e === rX : e === rK, e === rU)
            }
            let n0 = new Map([
                ["select", "listbox"],
                ["combobox", "listbox"],
                ["label", !1]
            ]);

            function n1(e, t) {
                var r;
                void 0 === t && (t = {});
                let {
                    open: n,
                    floatingId: o
                } = e, {
                    enabled: a = !0,
                    role: l = "dialog"
                } = t, i = null != (r = n0.get(l)) ? r : l, d = nt(), u = null != no();
                return s.useMemo(() => {
                    if (!a) return {};
                    let e = {
                        id: o,
                        ...i && {
                            role: i
                        }
                    };
                    return "tooltip" === i || "label" === l ? {
                        reference: {
                            ["aria-" + ("label" === l ? "labelledby" : "describedby")]: n ? o : void 0
                        },
                        floating: e
                    } : {
                        reference: {
                            "aria-expanded": n ? "true" : "false",
                            "aria-haspopup": "alertdialog" === i ? "dialog" : i,
                            "aria-controls": n ? o : void 0,
                            ..."listbox" === i && {
                                role: "combobox"
                            },
                            ..."menu" === i && {
                                id: d
                            },
                            ..."menu" === i && u && {
                                role: "menuitem"
                            },
                            ..."select" === l && {
                                "aria-autocomplete": "none"
                            },
                            ..."combobox" === l && {
                                "aria-autocomplete": "list"
                            }
                        },
                        floating: { ...e,
                            ..."menu" === i && {
                                "aria-labelledby": d
                            }
                        },
                        item(e) {
                            let {
                                active: t,
                                selected: r
                            } = e, n = {
                                role: "option",
                                ...t && {
                                    id: o + "-option"
                                }
                            };
                            switch (l) {
                                case "select":
                                    return { ...n,
                                        "aria-selected": t && r
                                    };
                                case "combobox":
                                    return { ...n,
                                        ...t && {
                                            "aria-selected": !0
                                        }
                                    }
                            }
                            return {}
                        }
                    }
                }, [a, l, i, n, o, d, u])
            }

            function n5(e, t) {
                let [r, n] = e, o = !1, a = t.length;
                for (let e = 0, l = a - 1; e < a; l = e++) {
                    let [a, i] = t[e] || [0, 0], [s, d] = t[l] || [0, 0];
                    i >= n != d >= n && r <= (s - a) * (n - i) / (d - i) + a && (o = !o)
                }
                return o
            }
            let n2 = ({
                    arrowRef: e,
                    placement: t
                }) => {
                    var r, n, o;
                    let a = [];
                    return a.push({
                        name: "offset",
                        options: 8,
                        async fn(e) {
                            var t, r;
                            let {
                                x: n,
                                y: o,
                                placement: a,
                                middlewareData: l
                            } = e, i = await t2(e, 8);
                            return a === (null == (t = l.offset) ? void 0 : t.placement) && null != (r = l.arrow) && r.alignmentOffset ? {} : {
                                x: n + i.x,
                                y: o + i.y,
                                data: { ...i,
                                    placement: a
                                }
                            }
                        }
                    }), a.push("auto" === t ? (void 0 === r && (r = {}), {
                        name: "autoPlacement",
                        options: r,
                        async fn(e) {
                            var t, n, o, a;
                            let {
                                rects: l,
                                middlewareData: i,
                                placement: s,
                                platform: d,
                                elements: u
                            } = e, {
                                crossAxis: c = !1,
                                alignment: f,
                                allowedPlacements: g = tL,
                                autoAlignment: p = !0,
                                ...b
                            } = tY(r, e), m = void 0 !== f || g === tL ? ((a = f || null) ? [...g.filter(e => tq(e) === a), ...g.filter(e => tq(e) !== a)] : g.filter(e => tG(e) === e)).filter(e => !a || tq(e) === a || !!p && t$(e) !== e) : g, h = await t5(e, b), y = (null == (t = i.autoPlacement) ? void 0 : t.index) || 0, v = m[y];
                            if (null == v) return {};
                            let x = tX(v, l, await (null == d.isRTL ? void 0 : d.isRTL(u.floating)));
                            if (s !== v) return {
                                reset: {
                                    placement: m[0]
                                }
                            };
                            let w = [h[tG(v)], h[x[0]], h[x[1]]],
                                k = [...(null == (n = i.autoPlacement) ? void 0 : n.overflows) || [], {
                                    placement: v,
                                    overflows: w
                                }],
                                E = m[y + 1];
                            if (E) return {
                                data: {
                                    index: y + 1,
                                    overflows: k
                                },
                                reset: {
                                    placement: E
                                }
                            };
                            let N = k.map(e => {
                                    let t = tq(e.placement);
                                    return [e.placement, t && c ? e.overflows.slice(0, 2).reduce((e, t) => e + t, 0) : e.overflows[0], e.overflows]
                                }).sort((e, t) => e[1] - t[1]),
                                j = (null == (o = N.filter(e => e[2].slice(0, tq(e[0]) ? 2 : 3).every(e => e <= 0))[0]) ? void 0 : o[0]) || N[0][0];
                            return j !== s ? {
                                data: {
                                    index: y + 1,
                                    overflows: k
                                },
                                reset: {
                                    placement: j
                                }
                            } : {}
                        }
                    }) : (void 0 === n && (n = {}), {
                        name: "flip",
                        options: n,
                        async fn(e) {
                            var t, r, o, a, l;
                            let {
                                placement: i,
                                middlewareData: s,
                                rects: d,
                                initialPlacement: u,
                                platform: c,
                                elements: f
                            } = e, {
                                mainAxis: g = !0,
                                crossAxis: p = !0,
                                fallbackPlacements: b,
                                fallbackStrategy: m = "bestFit",
                                fallbackAxisSideDirection: h = "none",
                                flipAlignment: y = !0,
                                ...v
                            } = tY(n, e);
                            if (null != (t = s.arrow) && t.alignmentOffset) return {};
                            let x = tG(i),
                                w = tG(u) === u,
                                k = await (null == c.isRTL ? void 0 : c.isRTL(f.floating)),
                                E = b || (w || !y ? [tZ(u)] : function(e) {
                                    let t = tZ(e);
                                    return [t$(e), t, t$(t)]
                                }(u));
                            b || "none" === h || E.push(... function(e, t, r, n) {
                                let o = tq(e),
                                    a = function(e, t, r) {
                                        let n = ["left", "right"],
                                            o = ["right", "left"];
                                        switch (e) {
                                            case "top":
                                            case "bottom":
                                                if (r) return t ? o : n;
                                                return t ? n : o;
                                            case "left":
                                            case "right":
                                                return t ? ["top", "bottom"] : ["bottom", "top"];
                                            default:
                                                return []
                                        }
                                    }(tG(e), "start" === r, n);
                                return o && (a = a.map(e => e + "-" + o), t && (a = a.concat(a.map(t$)))), a
                            }(u, y, h, k));
                            let N = [u, ...E],
                                j = await t5(e, v),
                                C = [],
                                T = (null == (r = s.flip) ? void 0 : r.overflows) || [];
                            if (g && C.push(j[x]), p) {
                                let e = tX(i, d, k);
                                C.push(j[e[0]], j[e[1]])
                            }
                            if (T = [...T, {
                                    placement: i,
                                    overflows: C
                                }], !C.every(e => e <= 0)) {
                                let e = ((null == (o = s.flip) ? void 0 : o.index) || 0) + 1,
                                    t = N[e];
                                if (t) return {
                                    data: {
                                        index: e,
                                        overflows: T
                                    },
                                    reset: {
                                        placement: t
                                    }
                                };
                                let r = null == (a = T.filter(e => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]) ? void 0 : a.placement;
                                if (!r) switch (m) {
                                    case "bestFit":
                                        {
                                            let e = null == (l = T.map(e => [e.placement, e.overflows.filter(e => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]) ? void 0 : l[0];e && (r = e);
                                            break
                                        }
                                    case "initialPlacement":
                                        r = u
                                }
                                if (i !== r) return {
                                    reset: {
                                        placement: r
                                    }
                                }
                            }
                            return {}
                        }
                    })), a.push({
                        name: "shift",
                        options: o = {
                            padding: 8
                        },
                        async fn(e) {
                            let {
                                x: t,
                                y: r,
                                placement: n
                            } = e, {
                                mainAxis: a = !0,
                                crossAxis: l = !1,
                                limiter: i = {
                                    fn: e => {
                                        let {
                                            x: t,
                                            y: r
                                        } = e;
                                        return {
                                            x: t,
                                            y: r
                                        }
                                    }
                                },
                                ...s
                            } = tY(o, e), d = {
                                x: t,
                                y: r
                            }, u = await t5(e, s), c = tK(tG(n)), f = tU(c), g = d[f], p = d[c];
                            if (a) {
                                let e = "y" === f ? "top" : "left",
                                    t = "y" === f ? "bottom" : "right",
                                    r = g + u[e],
                                    n = g - u[t];
                                g = tF(r, tA(g, n))
                            }
                            if (l) {
                                let e = "y" === c ? "top" : "left",
                                    t = "y" === c ? "bottom" : "right",
                                    r = p + u[e],
                                    n = p - u[t];
                                p = tF(r, tA(p, n))
                            }
                            let b = i.fn({ ...e,
                                [f]: g,
                                [c]: p
                            });
                            return { ...b,
                                data: {
                                    x: b.x - t,
                                    y: b.y - r
                                }
                            }
                        }
                    }), e ? .current && a.push(rg({
                        element: e.current
                    })), a
                },
                n4 = ({
                    placement: e
                }) => "auto" === e ? void 0 : e,
                n6 = ({
                    placement: e
                }) => ({
                    top: "bottom",
                    right: "left",
                    bottom: "top",
                    left: "right"
                })[e.split("-")[0]],
                n7 = ({
                    open: e,
                    arrowRef: t,
                    placement: r = "top",
                    setOpen: n
                }) => nG({
                    placement: n4({
                        placement: r
                    }),
                    open: e,
                    onOpenChange: n,
                    whileElementsMounted: rd,
                    middleware: n2({
                        placement: r,
                        arrowRef: t
                    })
                }),
                n3 = ({
                    context: e,
                    trigger: t,
                    role: r = "tooltip",
                    interactions: n = []
                }) => nK([nB(e, {
                    enabled: "click" === t
                }), function(e, t) {
                    void 0 === t && (t = {});
                    let {
                        open: r,
                        onOpenChange: n,
                        dataRef: o,
                        events: a,
                        elements: {
                            domReference: l,
                            floating: i
                        },
                        refs: d
                    } = e, {
                        enabled: u = !0,
                        delay: c = 0,
                        handleClose: f = null,
                        mouseOnly: g = !1,
                        restMs: p = 0,
                        move: b = !0
                    } = t, m = na(), h = no(), y = ni(f), v = ni(c), x = s.useRef(), w = s.useRef(), k = s.useRef(), E = s.useRef(), N = s.useRef(!0), j = s.useRef(!1), C = s.useRef(() => {}), T = s.useCallback(() => {
                        var e;
                        let t = null == (e = o.current.openEvent) ? void 0 : e.type;
                        return (null == t ? void 0 : t.includes("mouse")) && "mousedown" !== t
                    }, [o]);
                    s.useEffect(() => {
                        if (u) return a.on("openchange", e), () => {
                            a.off("openchange", e)
                        };

                        function e(e) {
                            let {
                                open: t
                            } = e;
                            t || (clearTimeout(w.current), clearTimeout(E.current), N.current = !0)
                        }
                    }, [u, a]), s.useEffect(() => {
                        if (!u || !y.current || !r) return;

                        function e(e) {
                            T() && n(!1, e, "hover")
                        }
                        let t = tS(i).documentElement;
                        return t.addEventListener("mouseleave", e), () => {
                            t.removeEventListener("mouseleave", e)
                        }
                    }, [i, r, n, u, y, T]);
                    let M = s.useCallback(function(e, t, r) {
                            void 0 === t && (t = !0), void 0 === r && (r = "hover");
                            let o = nd(v.current, "close", x.current);
                            o && !k.current ? (clearTimeout(w.current), w.current = setTimeout(() => n(!1, e, r), o)) : t && (clearTimeout(w.current), n(!1, e, r))
                        }, [v, n]),
                        S = s.useCallback(() => {
                            C.current(), k.current = void 0
                        }, []),
                        R = s.useCallback(() => {
                            if (j.current) {
                                let e = tS(d.floating.current).body;
                                e.style.pointerEvents = "", e.removeAttribute(ns), j.current = !1
                            }
                        }, [d]);
                    return s.useEffect(() => {
                        if (u && ts(l)) return r && l.addEventListener("mouseleave", d), null == i || i.addEventListener("mouseleave", d), b && l.addEventListener("mousemove", a, {
                            once: !0
                        }), l.addEventListener("mouseenter", a), l.addEventListener("mouseleave", s), () => {
                            r && l.removeEventListener("mouseleave", d), null == i || i.removeEventListener("mouseleave", d), b && l.removeEventListener("mousemove", a), l.removeEventListener("mouseenter", a), l.removeEventListener("mouseleave", s)
                        };

                        function t() {
                            return !!o.current.openEvent && ["click", "mousedown"].includes(o.current.openEvent.type)
                        }

                        function a(e) {
                            if (clearTimeout(w.current), N.current = !1, g && !tM(x.current) || p > 0 && 0 === nd(v.current, "open")) return;
                            let t = nd(v.current, "open", x.current);
                            t ? w.current = setTimeout(() => {
                                n(!0, e, "hover")
                            }, t) : n(!0, e, "hover")
                        }

                        function s(n) {
                            if (t()) return;
                            C.current();
                            let o = tS(i);
                            if (clearTimeout(E.current), y.current) {
                                r || clearTimeout(w.current), k.current = y.current({ ...e,
                                    tree: m,
                                    x: n.clientX,
                                    y: n.clientY,
                                    onClose() {
                                        R(), S(), M(n, !0, "safe-polygon")
                                    }
                                });
                                let t = k.current;
                                o.addEventListener("mousemove", t), C.current = () => {
                                    o.removeEventListener("mousemove", t)
                                };
                                return
                            }
                            "touch" === x.current && tx(i, n.relatedTarget) || M(n)
                        }

                        function d(r) {
                            t() || null == y.current || y.current({ ...e,
                                tree: m,
                                x: r.clientX,
                                y: r.clientY,
                                onClose() {
                                    R(), S(), M(r)
                                }
                            })(r)
                        }
                    }, [l, i, u, e, g, p, b, M, S, R, n, r, m, v, y, o]), r2(() => {
                        var e, t;
                        if (u && r && null != (e = y.current) && e.__options.blockPointerEvents && T()) {
                            let e = tS(i).body;
                            if (e.setAttribute(ns, ""), e.style.pointerEvents = "none", j.current = !0, ts(l) && i) {
                                let e = null == m || null == (t = m.nodesRef.current.find(e => e.id === h)) || null == (t = t.context) ? void 0 : t.elements.floating;
                                return e && (e.style.pointerEvents = ""), l.style.pointerEvents = "auto", i.style.pointerEvents = "auto", () => {
                                    l.style.pointerEvents = "", i.style.pointerEvents = ""
                                }
                            }
                        }
                    }, [u, r, h, i, l, m, y, T]), r2(() => {
                        r || (x.current = void 0, S(), R())
                    }, [r, S, R]), s.useEffect(() => () => {
                        S(), clearTimeout(w.current), clearTimeout(E.current), R()
                    }, [u, l, S, R]), s.useMemo(() => {
                        if (!u) return {};

                        function e(e) {
                            x.current = e.pointerType
                        }
                        return {
                            reference: {
                                onPointerDown: e,
                                onPointerEnter: e,
                                onMouseMove(e) {
                                    r || 0 === p || (clearTimeout(E.current), E.current = setTimeout(() => {
                                        N.current || n(!0, e.nativeEvent, "hover")
                                    }, p))
                                }
                            },
                            floating: {
                                onMouseEnter() {
                                    clearTimeout(w.current)
                                },
                                onMouseLeave(e) {
                                    M(e.nativeEvent, !1)
                                }
                            }
                        }
                    }, [u, p, r, n, M])
                }(e, {
                    enabled: "hover" === t,
                    handleClose: function(e) {
                        let t;
                        void 0 === e && (e = {});
                        let {
                            buffer: r = .5,
                            blockPointerEvents: n = !1,
                            requireIntent: o = !0
                        } = e, a = !1, l = null, i = null, s = performance.now(), d = e => {
                            let {
                                x: n,
                                y: d,
                                placement: u,
                                elements: c,
                                onClose: f,
                                nodeId: g,
                                tree: p
                            } = e;
                            return function(e) {
                                function b() {
                                    clearTimeout(t), f()
                                }
                                if (clearTimeout(t), !c.domReference || !c.floating || null == u || null == n || null == d) return;
                                let {
                                    clientX: m,
                                    clientY: h
                                } = e, y = [m, h], v = tI(e), x = "mouseleave" === e.type, w = tx(c.floating, v), k = tx(c.domReference, v), E = c.domReference.getBoundingClientRect(), N = c.floating.getBoundingClientRect(), j = u.split("-")[0], C = n > N.right - N.width / 2, T = d > N.bottom - N.height / 2, M = y[0] >= E.x && y[0] <= E.x + E.width && y[1] >= E.y && y[1] <= E.y + E.height, S = N.width > E.width, R = N.height > E.height, I = (S ? E : N).left, O = (S ? E : N).right, P = (R ? E : N).top, D = (R ? E : N).bottom;
                                if (w && (a = !0, !x)) return;
                                if (k && (a = !1), k && !x) {
                                    a = !0;
                                    return
                                }
                                if (x && ts(e.relatedTarget) && tx(c.floating, e.relatedTarget) || p && nu(p.nodesRef.current, g).some(e => {
                                        let {
                                            context: t
                                        } = e;
                                        return null == t ? void 0 : t.open
                                    })) return;
                                if ("top" === j && d >= E.bottom - 1 || "bottom" === j && d <= E.top + 1 || "left" === j && n >= E.right - 1 || "right" === j && n <= E.left + 1) return b();
                                let L = [];
                                switch (j) {
                                    case "top":
                                        L = [
                                            [I, E.top + 1],
                                            [I, N.bottom - 1],
                                            [O, N.bottom - 1],
                                            [O, E.top + 1]
                                        ];
                                        break;
                                    case "bottom":
                                        L = [
                                            [I, N.top + 1],
                                            [I, E.bottom - 1],
                                            [O, E.bottom - 1],
                                            [O, N.top + 1]
                                        ];
                                        break;
                                    case "left":
                                        L = [
                                            [N.right - 1, D],
                                            [N.right - 1, P],
                                            [E.left + 1, P],
                                            [E.left + 1, D]
                                        ];
                                        break;
                                    case "right":
                                        L = [
                                            [E.right - 1, D],
                                            [E.right - 1, P],
                                            [N.left + 1, P],
                                            [N.left + 1, D]
                                        ]
                                }
                                if (!n5([m, h], L)) {
                                    if (a && !M) return b();
                                    if (!x && o) {
                                        let t = function(e, t) {
                                            let r = performance.now(),
                                                n = r - s;
                                            if (null === l || null === i || 0 === n) return l = e, i = t, s = r, null;
                                            let o = e - l,
                                                a = t - i,
                                                d = Math.sqrt(o * o + a * a);
                                            return l = e, i = t, s = r, d / n
                                        }(e.clientX, e.clientY);
                                        if (null !== t && t < .1) return b()
                                    }
                                    n5([m, h], function(e) {
                                        let [t, n] = e;
                                        switch (j) {
                                            case "top":
                                                {
                                                    let e = [
                                                        [N.left, C ? N.bottom - r : S ? N.bottom - r : N.top],
                                                        [N.right, C ? S ? N.bottom - r : N.top : N.bottom - r]
                                                    ];
                                                    return [
                                                        [S ? t + r / 2 : C ? t + 4 * r : t - 4 * r, n + r + 1],
                                                        [S ? t - r / 2 : C ? t + 4 * r : t - 4 * r, n + r + 1], ...e
                                                    ]
                                                }
                                            case "bottom":
                                                {
                                                    let e = [
                                                        [N.left, C ? N.top + r : S ? N.top + r : N.bottom],
                                                        [N.right, C ? S ? N.top + r : N.bottom : N.top + r]
                                                    ];
                                                    return [
                                                        [S ? t + r / 2 : C ? t + 4 * r : t - 4 * r, n - r],
                                                        [S ? t - r / 2 : C ? t + 4 * r : t - 4 * r, n - r], ...e
                                                    ]
                                                }
                                            case "left":
                                                return [
                                                    [T ? N.right - r : R ? N.right - r : N.left, N.top],
                                                    [T ? R ? N.right - r : N.left : N.right - r, N.bottom],
                                                    [t + r + 1, R ? n + r / 2 : T ? n + 4 * r : n - 4 * r],
                                                    [t + r + 1, R ? n - r / 2 : T ? n + 4 * r : n - 4 * r]
                                                ];
                                            case "right":
                                                {
                                                    let e = [
                                                        [T ? N.left + r : R ? N.left + r : N.right, N.top],
                                                        [T ? R ? N.left + r : N.right : N.left + r, N.bottom]
                                                    ];
                                                    return [
                                                        [t - r, R ? n + r / 2 : T ? n + 4 * r : n - 4 * r],
                                                        [t - r, R ? n - r / 2 : T ? n + 4 * r : n - 4 * r], ...e
                                                    ]
                                                }
                                        }
                                    }([n, d])) ? !a && o && (t = window.setTimeout(b, 40)) : b()
                                }
                            }
                        };
                        return d.__options = {
                            blockPointerEvents: n
                        }, d
                    }()
                }), nY(e), n1(e, {
                    role: r
                }), ...n]),
                n9 = (0, s.createContext)(void 0);

            function n8() {
                let e = (0, s.useContext)(n9);
                if (!e) throw Error("useDropdownContext should be used within the DropdownContext provider!");
                return e
            }
            let oe = e => {
                    var t;
                    let {
                        className: r,
                        theme: n = {},
                        ...o
                    } = e, {
                        theme: a
                    } = n8(), l = null !== (t = n.divider) && void 0 !== t ? t : a.floating.divider;
                    return (0, i.jsx)("div", {
                        className: G(l, r),
                        ...o
                    })
                },
                ot = e => {
                    var t;
                    let {
                        children: r,
                        className: n,
                        theme: o = {},
                        ...a
                    } = e, {
                        theme: l
                    } = n8(), s = null !== (t = o.header) && void 0 !== t ? t : l.floating.header;
                    return (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("div", {
                            className: G(s, n),
                            ...a,
                            children: r
                        }), (0, i.jsx)(oe, {})]
                    })
                },
                or = (0, s.forwardRef)((e, t) => {
                    let {
                        children: r,
                        className: n,
                        icon: o,
                        onClick: a,
                        theme: l = {},
                        ...d
                    } = e, {
                        ref: u,
                        index: c
                    } = function(e) {
                        let {
                            label: t
                        } = void 0 === e ? {} : e, [r, n] = s.useState(null), o = s.useRef(null), {
                            register: a,
                            unregister: l,
                            map: i,
                            elementsRef: d,
                            labelsRef: u
                        } = s.useContext(r6), c = s.useCallback(e => {
                            if (o.current = e, null !== r && (d.current[r] = e, u)) {
                                var n;
                                let o = void 0 !== t;
                                u.current[r] = o ? t : null != (n = null == e ? void 0 : e.textContent) ? n : null
                            }
                        }, [r, d, u, t]);
                        return r2(() => {
                            let e = o.current;
                            if (e) return a(e), () => {
                                l(e)
                            }
                        }, [a, l]), r2(() => {
                            let e = o.current ? i.get(o.current) : null;
                            null != e && n(e)
                        }, [i]), s.useMemo(() => ({
                            ref: c,
                            index: null == r ? -1 : r
                        }), [r, c])
                    }({
                        label: "string" == typeof r ? r : void 0
                    }), f = rY([t, u]), {
                        theme: g,
                        activeIndex: p,
                        dismissOnClick: b,
                        getItemProps: m,
                        handleSelect: h
                    } = n8(), y = V(g.floating.item, l);
                    return (0, i.jsx)("li", {
                        role: "menuitem",
                        className: y.container,
                        children: (0, i.jsxs)(eg, {
                            ref: f,
                            className: G(y.base, n),
                            ...d,
                            ...m({
                                onClick: () => {
                                    null == a || a(), b && h(null)
                                }
                            }),
                            tabIndex: p === c ? 0 : -1,
                            children: [o && (0, i.jsx)(o, {
                                className: y.icon
                            }), r]
                        })
                    })
                });
            or.displayName = "DropdownItem";
            let on = {
                    top: u.lVW,
                    right: u.yoF,
                    bottom: u.kzR,
                    left: u.PSe
                },
                oo = e => {
                    let {
                        refs: t,
                        children: r,
                        inline: n,
                        theme: o,
                        disabled: a,
                        setButtonWidth: l,
                        getReferenceProps: d,
                        renderTrigger: u,
                        ...c
                    } = e, f = t.reference, g = d();
                    if ((0, s.useEffect)(() => {
                            f.current && (null == l || l(f.current.clientWidth))
                        }, [f, l]), u) {
                        let e = u(o);
                        return (0, s.cloneElement)(e, {
                            ref: t.setReference,
                            disabled: a,
                            ...g,
                            ...e.props
                        })
                    }
                    return n ? (0, i.jsx)("button", {
                        type: "button",
                        ref: t.setReference,
                        className: null == o ? void 0 : o.inlineWrapper,
                        disabled: a,
                        ...g,
                        children: r
                    }) : (0, i.jsx)(ey, { ...c,
                        disabled: a,
                        type: "button",
                        ref: t.setReference,
                        ...g,
                        children: r
                    })
                },
                oa = e => {
                    let {
                        children: t,
                        className: r,
                        dismissOnClick: n = !0,
                        theme: o = {},
                        renderTrigger: a,
                        ...l
                    } = e, [d, c] = (0, s.useState)(!1), [f, g] = (0, s.useState)(null), [p, b] = (0, s.useState)(null), [m, h] = (0, s.useState)(void 0), y = (0, s.useRef)([]), v = (0, s.useRef)([]), x = V(ee().dropdown, o), w = l["data-testid"] || "flowbite-dropdown-target", {
                        placement: k = l.inline ? "bottom-start" : "bottom",
                        trigger: E = "click",
                        label: N,
                        inline: j,
                        arrowIcon: C = !0,
                        ...T
                    } = l, M = (0, s.useCallback)(e => {
                        b(e), c(!1)
                    }, []), S = (0, s.useCallback)(e => {
                        d ? g(e) : M(e)
                    }, [d, M]), {
                        context: R,
                        floatingStyles: I,
                        refs: O
                    } = n7({
                        open: d,
                        setOpen: c,
                        placement: k
                    }), P = function(e, t) {
                        let {
                            open: r,
                            onOpenChange: n,
                            refs: o,
                            elements: {
                                domReference: a,
                                floating: l
                            }
                        } = e, {
                            listRef: i,
                            activeIndex: d,
                            onNavigate: u = () => {},
                            enabled: c = !0,
                            selectedIndex: f = null,
                            allowEscape: g = !1,
                            loop: p = !1,
                            nested: b = !1,
                            rtl: m = !1,
                            virtual: h = !1,
                            focusItemOnOpen: y = "auto",
                            focusItemOnHover: v = !0,
                            openOnArrowKeyDown: x = !0,
                            disabledIndices: w,
                            orientation: k = "vertical",
                            cols: E = 1,
                            scrollItemIntoView: N = !0,
                            virtualItemRef: j,
                            itemSizes: C,
                            dense: T = !1
                        } = t, M = no(), S = na(), R = rq(u), I = s.useRef(y), O = s.useRef(null != f ? f : -1), P = s.useRef(null), D = s.useRef(!0), L = s.useRef(R), A = s.useRef(!!l), F = s.useRef(!1), z = s.useRef(!1), B = ni(w), _ = ni(r), H = ni(N), [W, Y] = s.useState(), [G, q] = s.useState(), U = rq(function(e, t, r) {
                            void 0 === r && (r = !1);
                            let n = e.current[t.current];
                            n && (h ? (Y(n.id), null == S || S.events.emit("virtualfocus", n), j && (j.current = n)) : r5(n, {
                                preventScroll: !0,
                                sync: !!(tT() && tj()) && (nX || F.current)
                            }), requestAnimationFrame(() => {
                                let e = H.current;
                                e && n && (r || !D.current) && (null == n.scrollIntoView || n.scrollIntoView("boolean" == typeof e ? {
                                    block: "nearest",
                                    inline: "nearest"
                                } : e))
                            }))
                        });
                        r2(() => {
                            document.createElement("div").focus({
                                get preventScroll() {
                                    return nX = !0, !1
                                }
                            })
                        }, []), r2(() => {
                            c && (r && l ? I.current && null != f && (z.current = !0, O.current = f, R(f)) : A.current && (O.current = -1, L.current(null)))
                        }, [c, r, l, f, R]), r2(() => {
                            if (c && r && l) {
                                if (null == d) {
                                    if (F.current = !1, null == f && (A.current && (O.current = -1, U(i, O)), !A.current && I.current && (null != P.current || !0 === I.current && null == P.current))) {
                                        let e = 0,
                                            t = () => {
                                                null == i.current[0] ? (e < 2 && (e ? requestAnimationFrame : queueMicrotask)(t), e++) : (O.current = null == P.current || nQ(P.current, k, m) || b ? rQ(i, B.current) : rJ(i, B.current), P.current = null, R(O.current))
                                            };
                                        t()
                                    }
                                } else rZ(i, d) || (O.current = d, U(i, O, z.current), z.current = !1)
                            }
                        }, [c, r, l, d, f, b, i, k, m, R, U, B]), r2(() => {
                            var e;
                            if (!c || l || !S || h || !A.current) return;
                            let t = S.nodesRef.current,
                                r = null == (e = t.find(e => e.id === M)) || null == (e = e.context) ? void 0 : e.elements.floating,
                                n = tv(tS(l)),
                                o = t.some(e => e.context && tx(e.context.elements.floating, n));
                            r && !o && D.current && r.focus({
                                preventScroll: !0
                            })
                        }, [c, l, S, M, h]), r2(() => {
                            if (c && S && h && !M) return S.events.on("virtualfocus", e), () => {
                                S.events.off("virtualfocus", e)
                            };

                            function e(e) {
                                q(e.id), j && (j.current = e)
                            }
                        }, [c, S, h, M, j]), r2(() => {
                            L.current = R, A.current = !!l
                        }), r2(() => {
                            r || (P.current = null)
                        }, [r]);
                        let V = null != d,
                            K = s.useMemo(() => {
                                function e(e) {
                                    if (!r) return;
                                    let t = i.current.indexOf(e); - 1 !== t && R(t)
                                }
                                return {
                                    onFocus(t) {
                                        let {
                                            currentTarget: r
                                        } = t;
                                        e(r)
                                    },
                                    onClick: e => {
                                        let {
                                            currentTarget: t
                                        } = e;
                                        return t.focus({
                                            preventScroll: !0
                                        })
                                    },
                                    ...v && {
                                        onMouseMove(t) {
                                            let {
                                                currentTarget: r
                                            } = t;
                                            e(r)
                                        },
                                        onPointerLeave(e) {
                                            let {
                                                pointerType: t
                                            } = e;
                                            D.current && "touch" !== t && (O.current = -1, U(i, O), R(null), h || r5(o.floating.current, {
                                                preventScroll: !0
                                            }))
                                        }
                                    }
                                }
                            }, [r, o, U, v, i, R, h]);
                        return s.useMemo(() => {
                            if (!c) return {};
                            let e = B.current;

                            function t(t) {
                                if (D.current = !1, F.current = !0, !_.current && t.currentTarget === o.floating.current) return;
                                if (b && nJ(t.key, k, m)) {
                                    tP(t), n(!1, t.nativeEvent, "list-navigation"), td(a) && !h && a.focus();
                                    return
                                }
                                let l = O.current,
                                    s = rQ(i, e),
                                    d = rJ(i, e);
                                if ("Home" === t.key && (tP(t), O.current = s, R(O.current)), "End" === t.key && (tP(t), O.current = d, R(O.current)), E > 1) {
                                    var u;
                                    let r = C || Array.from({
                                            length: i.current.length
                                        }, () => ({
                                            width: 1,
                                            height: 1
                                        })),
                                        n = function(e, t, r) {
                                            let n = [],
                                                o = 0;
                                            return e.forEach((e, a) => {
                                                let {
                                                    width: l,
                                                    height: i
                                                } = e, s = !1;
                                                for (r && (o = 0); !s;) {
                                                    let e = [];
                                                    for (let r = 0; r < l; r++)
                                                        for (let n = 0; n < i; n++) e.push(o + r + n * t);
                                                    o % t + l <= t && e.every(e => null == n[e]) ? (e.forEach(e => {
                                                        n[e] = a
                                                    }), s = !0) : o++
                                                }
                                            }), [...n]
                                        }(r, E, T),
                                        o = n.findIndex(t => null != t && !(null != e && e.includes(t))),
                                        a = n.reduce((t, r, n) => null == r || null != e && e.includes(r) ? t : n, -1);
                                    if (O.current = n[function(e, t) {
                                            let {
                                                event: r,
                                                orientation: n,
                                                loop: o,
                                                cols: a,
                                                disabledIndices: l,
                                                minIndex: i,
                                                maxIndex: s,
                                                prevIndex: d,
                                                stopEvent: u = !1
                                            } = t, c = d;
                                            if (r.key === rU) {
                                                if (u && tP(r), -1 === d) c = s;
                                                else if (c = r0(e, {
                                                        startingIndex: c,
                                                        amount: a,
                                                        decrement: !0,
                                                        disabledIndices: l
                                                    }), o && (d - a < i || c < 0)) {
                                                    let e = d % a,
                                                        t = s % a,
                                                        r = s - (t - e);
                                                    c = t === e ? s : t > e ? r : r - a
                                                }
                                                rZ(e, c) && (c = d)
                                            }
                                            if (r.key === rV && (u && tP(r), -1 === d ? c = i : (c = r0(e, {
                                                    startingIndex: d,
                                                    amount: a,
                                                    disabledIndices: l
                                                }), o && d + a > s && (c = r0(e, {
                                                    startingIndex: d % a - a,
                                                    amount: a,
                                                    disabledIndices: l
                                                }))), rZ(e, c) && (c = d)), "both" === n) {
                                                let t = tB(d / a);
                                                r.key === rX && (u && tP(r), d % a != a - 1 ? (c = r0(e, {
                                                    startingIndex: d,
                                                    disabledIndices: l
                                                }), o && r$(c, a, t) && (c = r0(e, {
                                                    startingIndex: d - d % a - 1,
                                                    disabledIndices: l
                                                }))) : o && (c = r0(e, {
                                                    startingIndex: d - d % a - 1,
                                                    disabledIndices: l
                                                })), r$(c, a, t) && (c = d)), r.key === rK && (u && tP(r), d % a != 0 ? (c = r0(e, {
                                                    startingIndex: d,
                                                    disabledIndices: l,
                                                    decrement: !0
                                                }), o && r$(c, a, t) && (c = r0(e, {
                                                    startingIndex: d + (a - d % a),
                                                    decrement: !0,
                                                    disabledIndices: l
                                                }))) : o && (c = r0(e, {
                                                    startingIndex: d + (a - d % a),
                                                    decrement: !0,
                                                    disabledIndices: l
                                                })), r$(c, a, t) && (c = d));
                                                let n = tB(s / a) === t;
                                                rZ(e, c) && (c = o && n ? r.key === rK ? s : r0(e, {
                                                    startingIndex: d - d % a - 1,
                                                    disabledIndices: l
                                                }) : d)
                                            }
                                            return c
                                        }({
                                            current: n.map(e => null != e ? i.current[e] : null)
                                        }, {
                                            event: t,
                                            orientation: k,
                                            loop: p,
                                            cols: E,
                                            disabledIndices: (u = [...e || [], void 0], n.flatMap((e, t) => u.includes(e) ? [t] : [])),
                                            minIndex: o,
                                            maxIndex: a,
                                            prevIndex: function(e, t, r, n, o) {
                                                if (-1 === e) return -1;
                                                let a = r.indexOf(e);
                                                switch (o) {
                                                    case "tl":
                                                        return a;
                                                    case "tr":
                                                        return a + t[e].width - 1;
                                                    case "bl":
                                                        return a + (t[e].height - 1) * n;
                                                    case "br":
                                                        return r.lastIndexOf(e)
                                                }
                                            }(O.current, r, n, E, t.key === rV ? "bl" : t.key === rX ? "tr" : "tl"),
                                            stopEvent: !0
                                        })], R(O.current), "both" === k) return
                                }
                                if (nZ(t.key, k)) {
                                    if (tP(t), r && !h && tv(t.currentTarget.ownerDocument) === t.currentTarget) {
                                        O.current = nQ(t.key, k, m) ? s : d, R(O.current);
                                        return
                                    }
                                    nQ(t.key, k, m) ? p ? O.current = l >= d ? g && l !== i.current.length ? -1 : s : r0(i, {
                                        startingIndex: l,
                                        disabledIndices: e
                                    }) : O.current = Math.min(d, r0(i, {
                                        startingIndex: l,
                                        disabledIndices: e
                                    })) : p ? O.current = l <= s ? g && -1 !== l ? i.current.length : d : r0(i, {
                                        startingIndex: l,
                                        decrement: !0,
                                        disabledIndices: e
                                    }) : O.current = Math.max(s, r0(i, {
                                        startingIndex: l,
                                        decrement: !0,
                                        disabledIndices: e
                                    })), rZ(i, O.current) ? R(null) : R(O.current)
                                }
                            }

                            function l(e) {
                                "auto" === y && tE(e.nativeEvent) && (I.current = !0)
                            }
                            let s = h && r && V && {
                                    "aria-activedescendant": G || W
                                },
                                d = i.current.find(e => (null == e ? void 0 : e.id) === W);
                            return {
                                reference: { ...s,
                                    onKeyDown(o) {
                                        var a, l, s, u, c, g;
                                        D.current = !1;
                                        let p = 0 === o.key.indexOf("Arrow"),
                                            y = (a = o.key, n$(k, m ? a === rK : a === rX, a === rV)),
                                            v = nJ(o.key, k, m),
                                            w = nZ(o.key, k),
                                            E = (b ? y : w) || "Enter" === o.key || "" === o.key.trim();
                                        if (h && r) {
                                            let e, r;
                                            let n = null == S ? void 0 : S.nodesRef.current.find(e => null == e.parentId),
                                                a = S && n ? (l = S.nodesRef.current, s = n.id, r = -1, function t(n, o) {
                                                    o > r && (e = n, r = o), nu(l, n).forEach(e => {
                                                        t(e.id, o + 1)
                                                    })
                                                }(s, 0), l.find(t => t.id === e)) : null;
                                            if (p && a && j) {
                                                let e = new KeyboardEvent("keydown", {
                                                    key: o.key,
                                                    bubbles: !0
                                                });
                                                if (y || v) {
                                                    let t = (null == (u = a.context) ? void 0 : u.elements.domReference) === o.currentTarget,
                                                        r = v && !t ? null == (c = a.context) ? void 0 : c.elements.domReference : y ? d : null;
                                                    r && (tP(o), r.dispatchEvent(e), q(void 0))
                                                }
                                                if (w && a.context && a.context.open && a.parentId && o.currentTarget !== a.context.elements.domReference) {
                                                    tP(o), null == (g = a.context.elements.domReference) || g.dispatchEvent(e);
                                                    return
                                                }
                                            }
                                            return t(o)
                                        }
                                        if (r || x || !p) {
                                            if (E && (P.current = b && w ? null : o.key), b) {
                                                y && (tP(o), r ? (O.current = rQ(i, e), R(O.current)) : n(!0, o.nativeEvent, "list-navigation"));
                                                return
                                            }
                                            w && (null != f && (O.current = f), tP(o), !r && x ? n(!0, o.nativeEvent, "list-navigation") : t(o), r && R(O.current))
                                        }
                                    },
                                    onFocus() {
                                        r && R(null)
                                    },
                                    onPointerDown: function(e) {
                                        I.current = y, "auto" === y && tN(e.nativeEvent) && (I.current = !0)
                                    },
                                    onMouseDown: l,
                                    onClick: l
                                },
                                floating: {
                                    "aria-orientation": "both" === k ? void 0 : k,
                                    ...!tD(a) && s,
                                    onKeyDown: t,
                                    onPointerMove() {
                                        D.current = !0
                                    }
                                },
                                item: K
                            }
                        }, [a, o, W, G, B, _, i, c, k, m, h, r, V, b, f, x, g, E, p, y, R, n, K, S, j, C, T])
                    }(R, {
                        listRef: y,
                        activeIndex: f,
                        selectedIndex: p,
                        onNavigate: g
                    }), D = function(e, t) {
                        var r;
                        let {
                            open: n,
                            dataRef: o
                        } = e, {
                            listRef: a,
                            activeIndex: l,
                            onMatch: i,
                            onTypingChange: d,
                            enabled: u = !0,
                            findMatch: c = null,
                            resetMs: f = 750,
                            ignoreKeys: g = [],
                            selectedIndex: p = null
                        } = t, b = s.useRef(), m = s.useRef(""), h = s.useRef(null != (r = null != p ? p : l) ? r : -1), y = s.useRef(null), v = rq(i), x = rq(d), w = ni(c), k = ni(g);
                        return r2(() => {
                            n && (clearTimeout(b.current), y.current = null, m.current = "")
                        }, [n]), r2(() => {
                            if (n && "" === m.current) {
                                var e;
                                h.current = null != (e = null != p ? p : l) ? e : -1
                            }
                        }, [n, p, l]), s.useMemo(() => {
                            if (!u) return {};

                            function e(e) {
                                e ? o.current.typing || (o.current.typing = e, x(e)) : o.current.typing && (o.current.typing = e, x(e))
                            }

                            function t(e, t, r) {
                                let n = w.current ? w.current(t, r) : t.find(e => (null == e ? void 0 : e.toLocaleLowerCase().indexOf(r.toLocaleLowerCase())) === 0);
                                return n ? e.indexOf(n) : -1
                            }

                            function r(r) {
                                let o = a.current;
                                if (m.current.length > 0 && " " !== m.current[0] && (-1 === t(o, o, m.current) ? e(!1) : " " === r.key && tP(r)), null == o || k.current.includes(r.key) || 1 !== r.key.length || r.ctrlKey || r.metaKey || r.altKey) return;
                                n && " " !== r.key && (tP(r), e(!0)), o.every(e => {
                                    var t, r;
                                    return !e || (null == (t = e[0]) ? void 0 : t.toLocaleLowerCase()) !== (null == (r = e[1]) ? void 0 : r.toLocaleLowerCase())
                                }) && m.current === r.key && (m.current = "", h.current = y.current), m.current += r.key, clearTimeout(b.current), b.current = setTimeout(() => {
                                    m.current = "", h.current = y.current, e(!1)
                                }, f);
                                let l = h.current,
                                    i = t(o, [...o.slice((l || 0) + 1), ...o.slice(0, (l || 0) + 1)], m.current); - 1 !== i ? (v(i), y.current = i) : " " !== r.key && (m.current = "", e(!1))
                            }
                            return {
                                reference: {
                                    onKeyDown: r
                                },
                                floating: {
                                    onKeyDown: r,
                                    onKeyUp(t) {
                                        " " === t.key && e(!1)
                                    }
                                }
                            }
                        }, [u, n, o, a, f, k, w, v, x])
                    }(R, {
                        listRef: v,
                        activeIndex: f,
                        selectedIndex: p,
                        onMatch: S
                    }), {
                        getReferenceProps: L,
                        getFloatingProps: A,
                        getItemProps: F
                    } = n3({
                        context: R,
                        role: "menu",
                        trigger: E,
                        interactions: [P, D]
                    }), z = (0, s.useMemo)(() => {
                        var e;
                        let [t] = k.split("-");
                        return null !== (e = on[t]) && void 0 !== e ? e : u.kzR
                    }, [k]);
                    return (0, i.jsxs)(n9.Provider, {
                        value: {
                            theme: x,
                            activeIndex: f,
                            dismissOnClick: n,
                            getItemProps: F,
                            handleSelect: M
                        },
                        children: [(0, i.jsxs)(oo, { ...T,
                            refs: O,
                            inline: j,
                            theme: x,
                            "data-testid": w,
                            className: G(x.floating.target, T.className),
                            setButtonWidth: h,
                            getReferenceProps: L,
                            renderTrigger: a,
                            children: [N, C && (0, i.jsx)(z, {
                                className: x.arrowIcon
                            })]
                        }), d && (0, i.jsx)(nL, {
                            context: R,
                            modal: !1,
                            children: (0, i.jsx)("div", {
                                ref: O.setFloating,
                                style: { ...I,
                                    minWidth: m
                                },
                                "data-testid": "flowbite-dropdown",
                                "aria-expanded": d,
                                ...A({
                                    className: G(x.floating.base, x.floating.animation, "duration-100", !d && x.floating.hidden, x.floating.style.auto, r)
                                }),
                                children: (0, i.jsx)(r7, {
                                    elementsRef: y,
                                    labelsRef: v,
                                    children: (0, i.jsx)("ul", {
                                        className: x.content,
                                        tabIndex: -1,
                                        children: t
                                    })
                                })
                            })
                        })]
                    })
                };
            oa.displayName = "Dropdown", ot.displayName = "Dropdown.Header", oe.displayName = "Dropdown.Divider";
            let ol = Object.assign(oa, {
                Item: or,
                Header: ot,
                Divider: oe
            });
            (0, s.forwardRef)(({
                className: e,
                color: t = "gray",
                helperText: r,
                sizing: n = "md",
                theme: o = {},
                ...a
            }, l) => {
                let s = V(ee().fileInput, o);
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)("div", {
                        className: G(s.root.base, e),
                        children: (0, i.jsx)("div", {
                            className: s.field.base,
                            children: (0, i.jsx)("input", {
                                className: G(s.field.input.base, s.field.input.colors[t], s.field.input.sizes[n]),
                                ...a,
                                type: "file",
                                ref: l
                            })
                        })
                    }), r && (0, i.jsx)(eH, {
                        color: t,
                        children: r
                    })]
                })
            }).displayName = "FileInput", (0, s.forwardRef)(({
                label: e,
                helperText: t,
                color: r = "default",
                sizing: n = "md",
                variant: o,
                disabled: a = !1,
                theme: l = {},
                className: d,
                ...u
            }, c) => {
                let f = (0, s.useId)(),
                    g = V(ee().floatingLabel, l);
                return (0, i.jsxs)("div", {
                    children: [(0, i.jsxs)("div", {
                        className: G("relative", "standard" === o ? "z-0" : ""),
                        children: [(0, i.jsx)("input", {
                            type: "text",
                            id: u.id ? u.id : "floatingLabel" + f,
                            "aria-describedby": "outlined_success_help",
                            className: G(g.input[r][o][n], d),
                            placeholder: " ",
                            "data-testid": "floating-label",
                            disabled: a,
                            ...u,
                            ref: c
                        }), (0, i.jsx)("label", {
                            htmlFor: u.id ? u.id : "floatingLabel" + f,
                            className: G(g.label[r][o][n], d),
                            children: e
                        })]
                    }), (0, i.jsx)("p", {
                        id: "outlined_helper_text" + f,
                        className: G(g.helperText[r], d),
                        children: t
                    })]
                })
            }).displayName = "FloatingLabel";
            let oi = ({
                    alt: e,
                    className: t,
                    children: r,
                    href: n,
                    name: o,
                    src: a,
                    theme: l = {},
                    ...s
                }) => {
                    let d = V(ee().footer.brand, l);
                    return (0, i.jsx)("div", {
                        children: n ? (0, i.jsxs)("a", {
                            "data-testid": "flowbite-footer-brand",
                            href: n,
                            className: G(d.base, t),
                            ...s,
                            children: [(0, i.jsx)("img", {
                                alt: e,
                                src: a,
                                className: d.img
                            }), (0, i.jsx)("span", {
                                "data-testid": "flowbite-footer-brand-span",
                                className: d.span,
                                children: o
                            }), r]
                        }) : (0, i.jsx)("img", {
                            alt: e,
                            "data-testid": "flowbite-footer-brand",
                            src: a,
                            className: G(d.img, t),
                            ...s
                        })
                    })
                },
                os = ({
                    by: e,
                    className: t,
                    href: r,
                    theme: n = {},
                    year: o,
                    ...a
                }) => {
                    let l = V(ee().footer.copyright, n);
                    return (0, i.jsxs)("div", {
                        "data-testid": "flowbite-footer-copyright",
                        className: G(l.base, t),
                        ...a,
                        children: ["\xa9 ", o, r ? (0, i.jsx)("a", {
                            href: r,
                            className: l.href,
                            children: e
                        }) : (0, i.jsx)("span", {
                            "data-testid": "flowbite-footer-copyright-span",
                            className: l.span,
                            children: e
                        })]
                    })
                },
                od = ({
                    className: e,
                    theme: t = {},
                    ...r
                }) => {
                    let n = V(ee().footer.divider, t);
                    return (0, i.jsx)("hr", {
                        "data-testid": "footer-divider",
                        className: G(n.base, e),
                        ...r
                    })
                },
                ou = ({
                    ariaLabel: e,
                    className: t,
                    href: r,
                    icon: n,
                    theme: o = {},
                    ...a
                }) => {
                    let l = V(ee().footer.icon, o);
                    return (0, i.jsx)("div", {
                        children: r ? (0, i.jsx)("a", {
                            "aria-label": e,
                            "data-testid": "flowbite-footer-icon",
                            href: r,
                            className: G(l.base, t),
                            ...a,
                            children: (0, i.jsx)(n, {
                                className: l.size
                            })
                        }) : (0, i.jsx)(n, {
                            "data-testid": "flowbite-footer-icon",
                            className: l.size,
                            ...a
                        })
                    })
                },
                oc = ({
                    as: e = "a",
                    children: t,
                    className: r,
                    href: n,
                    theme: o = {},
                    ...a
                }) => {
                    let l = V(ee().footer.groupLink.link, o);
                    return (0, i.jsx)("li", {
                        className: G(l.base, r),
                        children: (0, i.jsx)(e, {
                            href: n,
                            className: l.href,
                            ...a,
                            children: t
                        })
                    })
                },
                of = ({
                    children: e,
                    className: t,
                    col: r = !1,
                    theme: n = {},
                    ...o
                }) => {
                    let a = V(ee().footer.groupLink, n);
                    return (0, i.jsx)("ul", {
                        "data-testid": "footer-groupLink",
                        className: G(a.base, r && a.col, t),
                        ...o,
                        children: e
                    })
                },
                og = ({
                    as: e = "h2",
                    className: t,
                    theme: r = {},
                    title: n,
                    ...o
                }) => {
                    let a = V(ee().footer.title, r);
                    return (0, i.jsx)(e, {
                        "data-testid": "flowbite-footer-title",
                        className: G(a.base, t),
                        ...o,
                        children: n
                    })
                },
                op = ({
                    bgDark: e = !1,
                    children: t,
                    className: r,
                    container: n = !1,
                    theme: o = {},
                    ...a
                }) => {
                    let l = V(ee().footer, o);
                    return (0, i.jsx)("footer", {
                        "data-testid": "flowbite-footer",
                        className: G(l.root.base, e && l.root.bgDark, n && l.root.container, r),
                        ...a,
                        children: t
                    })
                };
            op.displayName = "Footer", os.displayName = "Footer.Copyright", oc.displayName = "Footer.Link", oi.displayName = "Footer.Brand", of .displayName = "Footer.LinkGroup", ou.displayName = "Footer.Icon", og.displayName = "Footer.Title", od.displayName = "Footer.Divider", Object.assign(op, {
                Copyright: os,
                Link: oc,
                LinkGroup: of ,
                Brand: oi,
                Icon: ou,
                Title: og,
                Divider: od
            });
            let ob = ({
                    children: e,
                    className: t,
                    icon: r,
                    theme: n = {},
                    ...o
                }) => {
                    let a = V(ee().list.item, n);
                    return (0, i.jsxs)("li", {
                        className: G(a.withIcon[r ? "on" : "off"], t),
                        ...o,
                        children: [r && (0, i.jsx)(r, {
                            className: G(a.icon)
                        }), e]
                    })
                },
                om = ({
                    children: e,
                    className: t,
                    unstyled: r,
                    nested: n,
                    ordered: o,
                    horizontal: a,
                    theme: l = {},
                    ...s
                }) => {
                    let d = V(ee().list, l);
                    return (0, i.jsx)(o ? "ol" : "ul", {
                        className: G(d.root.base, d.root.ordered[o ? "on" : "off"], r && d.root.unstyled, n && d.root.nested, a && d.root.horizontal, t),
                        ...s,
                        children: e
                    })
                };
            om.displayName = "List", ob.displayName = "List.Item", Object.assign(om, {
                Item: ob
            });
            let oh = ({
                    active: e,
                    children: t,
                    className: r,
                    href: n,
                    icon: o,
                    onClick: a,
                    theme: l = {},
                    disabled: s,
                    ...d
                }) => {
                    let u = V(ee().listGroup.item, l),
                        c = void 0 !== n;
                    return (0, i.jsx)("li", {
                        className: G(u.base, r),
                        children: (0, i.jsxs)(c ? "a" : "button", {
                            href: n,
                            onClick: a,
                            type: c ? void 0 : "button",
                            disabled: s,
                            className: G(u.link.active[e ? "on" : "off"], u.link.disabled[s ? "on" : "off"], u.link.base, u.link.href[c ? "on" : "off"]),
                            ...d,
                            children: [o && (0, i.jsx)(o, {
                                "aria-hidden": !0,
                                "data-testid": "flowbite-list-group-item-icon",
                                className: u.link.icon
                            }), t]
                        })
                    })
                },
                oy = ({
                    children: e,
                    className: t,
                    theme: r = {},
                    ...n
                }) => {
                    let o = V(ee().listGroup, r);
                    return (0, i.jsx)("ul", {
                        className: G(o.root.base, t),
                        ...n,
                        children: e
                    })
                };
            oy.displayName = "ListGroup", oh.displayName = "ListGroup.Item", Object.assign(oy, {
                Item: oh
            });
            let ov = (0, s.createContext)(void 0);

            function ox() {
                let e = (0, s.useContext)(ov);
                if (!e) throw Error("useNavBarContext should be used within the NavbarContext provider!");
                return e
            }
            let ow = e => {
                    let {
                        as: t = "a",
                        children: r,
                        className: n,
                        theme: o = {},
                        ...a
                    } = e, {
                        theme: l
                    } = ox(), s = V(l.brand, o);
                    return (0, i.jsx)(t, {
                        className: G(s.base, n),
                        ...a,
                        children: r
                    })
                },
                ok = e => {
                    let {
                        children: t,
                        className: r,
                        theme: n = {},
                        ...o
                    } = e, {
                        theme: a,
                        isOpen: l
                    } = ox(), s = V(a.collapse, n);
                    return (0, i.jsx)("div", {
                        "data-testid": "flowbite-navbar-collapse",
                        className: G(s.base, s.hidden[l ? "off" : "on"], r),
                        ...o,
                        children: (0, i.jsx)("ul", {
                            className: s.list,
                            children: t
                        })
                    })
                },
                oE = e => {
                    let {
                        active: t,
                        as: r = "a",
                        disabled: n,
                        children: o,
                        className: a,
                        theme: l = {},
                        onClick: s,
                        ...d
                    } = e, {
                        theme: u,
                        setIsOpen: c
                    } = ox(), f = V(u.link, l);
                    return (0, i.jsx)("li", {
                        children: (0, i.jsx)(r, {
                            className: G(f.base, t && f.active.on, !t && !n && f.active.off, f.disabled[n ? "on" : "off"], a),
                            onClick: e => {
                                c(!1), null == s || s(e)
                            },
                            ...d,
                            children: o
                        })
                    })
                };
            var oN = r(28223);
            let oj = e => {
                    let {
                        barIcon: t = oN.Fm7,
                        className: r,
                        theme: n = {},
                        ...o
                    } = e, {
                        theme: a,
                        isOpen: l,
                        setIsOpen: s
                    } = ox(), d = V(a.toggle, n);
                    return (0, i.jsxs)("button", {
                        "data-testid": "flowbite-navbar-toggle",
                        onClick: () => {
                            s(!l)
                        },
                        className: G(d.base, r),
                        ...o,
                        children: [(0, i.jsx)("span", {
                            className: "sr-only",
                            children: "Open main menu"
                        }), (0, i.jsx)(t, {
                            "aria-hidden": !0,
                            className: d.icon
                        })]
                    })
                },
                oC = e => {
                    let {
                        border: t,
                        children: r,
                        className: n,
                        fluid: o = !1,
                        menuOpen: a,
                        rounded: l,
                        theme: d = {},
                        ...u
                    } = e, [c, f] = (0, s.useState)(a), g = V(ee().navbar, d);
                    return (0, i.jsx)(ov.Provider, {
                        value: {
                            theme: g,
                            isOpen: c,
                            setIsOpen: f
                        },
                        children: (0, i.jsx)("nav", {
                            className: G(g.root.base, g.root.bordered[t ? "on" : "off"], g.root.rounded[l ? "on" : "off"], n),
                            ...u,
                            children: (0, i.jsx)("div", {
                                className: G(g.root.inner.base, g.root.inner.fluid[o ? "on" : "off"]),
                                children: r
                            })
                        })
                    })
                };
            oC.displayName = "Navbar", ow.displayName = "Navbar.Brand", ok.displayName = "Navbar.Collapse", oE.displayName = "Navbar.Link", oj.displayName = "Navbar.Toggle";
            let oT = Object.assign(oC, {
                    Brand: ow,
                    Collapse: ok,
                    Link: oE,
                    Toggle: oj
                }),
                oM = e => {
                    let {
                        children: t,
                        className: r,
                        theme: n = {},
                        toggle: o,
                        ...a
                    } = e, [l, d] = (0, s.useState)(void 0), u = V(ee().megaMenu.dropdown, n);
                    if (o) return (0, i.jsx)(ol, {
                        inline: !0,
                        label: o,
                        placement: "bottom",
                        theme: u.toggle,
                        className: G(u.base, r),
                        children: t
                    });
                    let c = (0, s.useId)(),
                        f = (0, s.useRef)(null);
                    return (0, s.useEffect)(() => {
                        var e;
                        d(null === (e = function() {
                            var e;
                            let t = null === (e = f.current) || void 0 === e ? void 0 : e.closest("nav");
                            return null == t ? void 0 : t.querySelector('[aria-haspopup="menu"]')
                        }()) || void 0 === e ? void 0 : e.id)
                    }, []), (0, i.jsx)("div", {
                        "aria-labelledby": l,
                        id: c,
                        ref: f,
                        role: "menu",
                        className: G(u.base, r),
                        ...a,
                        children: t
                    })
                };
            oM.displayName = "MegaMenu.Dropdown";
            let oS = e => {
                let {
                    children: t,
                    className: r,
                    theme: n = {},
                    ...o
                } = e, a = (0, s.useId)(), l = (0, s.useRef)(null), [d, u] = (0, s.useState)(void 0), [c, f] = (0, s.useState)(void 0), g = V(ee().megaMenu.dropdownToggle, n), p = function() {
                    var e;
                    let t = null === (e = l.current) || void 0 === e ? void 0 : e.closest("nav");
                    return null == t ? void 0 : t.querySelector('[role="menu"]')
                };
                return (0, s.useEffect)(() => {
                    let e = p(),
                        t = null == e ? void 0 : e.classList.contains("hidden");
                    u(null == e ? void 0 : e.id), f(!t)
                }, []), (0, i.jsx)("button", {
                    "aria-controls": d,
                    "aria-expanded": c,
                    "aria-haspopup": "menu",
                    id: a,
                    onClick: function() {
                        var e;
                        null === (e = p()) || void 0 === e || e.classList.toggle("hidden"), f(!c)
                    },
                    ref: l,
                    className: G(g.base, r),
                    ...o,
                    children: t
                })
            };
            oS.displayName = "MegaMenu.DropdownToggle";
            let oR = e => {
                let {
                    children: t,
                    theme: r = {},
                    ...n
                } = e, o = V(ee().megaMenu, r);
                return (0, i.jsx)(oT, {
                    fluid: !0,
                    theme: o,
                    ...n,
                    children: t
                })
            };
            Object.assign(oR, {
                Dropdown: oM,
                DropdownToggle: oS
            }), oR.displayName = "MegaMenu";
            let oI = (0, s.createContext)(void 0);

            function oO() {
                let e = (0, s.useContext)(oI);
                if (!e) throw Error("useModalContext should be used within the ModalContext provider!");
                return e
            }
            let oP = e => {
                    let {
                        children: t,
                        className: r,
                        theme: n = {},
                        ...o
                    } = e, {
                        theme: a,
                        popup: l
                    } = oO(), s = V(a.body, n);
                    return (0, i.jsx)("div", {
                        className: G(s.base, l && [s.popup], r),
                        ...o,
                        children: t
                    })
                },
                oD = e => {
                    let {
                        children: t,
                        className: r,
                        theme: n = {},
                        ...o
                    } = e, {
                        theme: a,
                        popup: l
                    } = oO(), s = V(a.footer, n);
                    return (0, i.jsx)("div", {
                        className: G(s.base, !l && s.popup, r),
                        ...o,
                        children: t
                    })
                },
                oL = e => {
                    let {
                        as: t = "h3",
                        children: r,
                        className: n,
                        theme: o = {},
                        id: a,
                        ...l
                    } = e, d = (0, s.useId)(), c = a || d, {
                        theme: f,
                        popup: g,
                        onClose: p,
                        setHeaderId: b
                    } = oO(), m = V(f.header, o);
                    return (0, s.useLayoutEffect)(() => (b(c), () => b(void 0)), [c, b]), (0, i.jsxs)("div", {
                        className: G(m.base, g && m.popup, n),
                        ...l,
                        children: [(0, i.jsx)(t, {
                            id: c,
                            className: m.title,
                            children: r
                        }), (0, i.jsx)("button", {
                            "aria-label": "Close",
                            className: m.close.base,
                            type: "button",
                            onClick: p,
                            children: (0, i.jsx)(u.fMW, {
                                "aria-hidden": !0,
                                className: m.close.icon
                            })
                        })]
                    })
                },
                oA = (0, s.forwardRef)((e, t) => {
                    let {
                        children: r,
                        className: n,
                        dismissible: o = !1,
                        onClose: a,
                        popup: l,
                        position: d = "center",
                        root: u,
                        show: c,
                        size: f = "2xl",
                        theme: g = {},
                        initialFocus: p,
                        ...b
                    } = e, [m, h] = (0, s.useState)(void 0), y = V(ee().modal, g), {
                        context: v
                    } = nG({
                        open: c,
                        onOpenChange: () => a && a()
                    }), x = rY([v.refs.setFloating, t]), {
                        getFloatingProps: w
                    } = nK([nB(v), nY(v, {
                        outsidePressEvent: "mousedown",
                        enabled: o
                    }), n1(v)]);
                    return c ? (0, i.jsx)(oI.Provider, {
                        value: {
                            theme: y,
                            popup: l,
                            onClose: a,
                            setHeaderId: h
                        },
                        children: (0, i.jsx)(nS, {
                            root: u,
                            children: (0, i.jsx)(nF, {
                                lockScroll: !0,
                                "data-testid": "modal-overlay",
                                className: G(y.root.base, y.root.positions[d], c ? y.root.show.on : y.root.show.off, n),
                                ...b,
                                children: (0, i.jsx)(nL, {
                                    context: v,
                                    initialFocus: p,
                                    children: (0, i.jsx)("div", {
                                        ref: x,
                                        ...w(b),
                                        "aria-labelledby": m,
                                        className: G(y.content.base, y.root.sizes[f]),
                                        children: (0, i.jsx)("div", {
                                            className: y.content.inner,
                                            children: r
                                        })
                                    })
                                })
                            })
                        })
                    }) : null
                });
            oA.displayName = "Modal", oL.displayName = "Modal.Header", oP.displayName = "Modal.Body", oD.displayName = "Modal.Footer";
            let oF = Object.assign(oA, {
                    Header: oL,
                    Body: oP,
                    Footer: oD
                }),
                oz = (e, t) => e >= t ? [] : [...Array(t - e + 1).keys()].map(t => t + e),
                oB = ({
                    active: e,
                    children: t,
                    className: r,
                    onClick: n,
                    theme: o = {},
                    ...a
                }) => {
                    let l = V(ee().pagination, o);
                    return (0, i.jsx)("button", {
                        type: "button",
                        className: G(e && l.pages.selector.active, r),
                        onClick: n,
                        ...a,
                        children: t
                    })
                };
            oB.displayName = "Pagination.Button";
            let o_ = ({
                children: e,
                className: t,
                onClick: r,
                theme: n = {},
                disabled: o = !1,
                ...a
            }) => {
                let l = V(ee().pagination, n);
                return (0, i.jsx)("button", {
                    type: "button",
                    className: G(o && l.pages.selector.disabled, t),
                    disabled: o,
                    onClick: r,
                    ...a,
                    children: e
                })
            };
            o_.displayName = "Pagination.Navigation";
            let oH = ({
                className: e,
                currentPage: t,
                layout: r = "pagination",
                nextLabel: n = "Next",
                onPageChange: o,
                previousLabel: a = "Previous",
                renderPaginationButton: l = e => (0, i.jsx)(oB, { ...e
                }),
                showIcons: s = !1,
                theme: d = {},
                totalPages: c,
                ...f
            }) => {
                let g = V(ee().pagination, d),
                    p = Math.min(Math.max("pagination" === r ? t + 2 : t + 4, 5), c),
                    b = Math.max(1, p - 4);
                return (0, i.jsxs)("nav", {
                    className: G(g.base, e),
                    ...f,
                    children: ["table" === r && (0, i.jsxs)("div", {
                        className: g.layout.table.base,
                        children: ["Showing ", (0, i.jsx)("span", {
                            className: g.layout.table.span,
                            children: b
                        }), " to\xa0", (0, i.jsx)("span", {
                            className: g.layout.table.span,
                            children: p
                        }), " of\xa0", (0, i.jsx)("span", {
                            className: g.layout.table.span,
                            children: c
                        }), " Entries"]
                    }), (0, i.jsxs)("ul", {
                        className: g.pages.base,
                        children: [(0, i.jsx)("li", {
                            children: (0, i.jsxs)(o_, {
                                className: G(g.pages.previous.base, s && g.pages.showIcon),
                                onClick: () => {
                                    o(Math.max(t - 1, 1))
                                },
                                disabled: 1 === t,
                                children: [s && (0, i.jsx)(u.DEl, {
                                    "aria-hidden": !0,
                                    className: g.pages.previous.icon
                                }), a]
                            })
                        }), "pagination" === r && oz(b, p).map(e => (0, i.jsx)("li", {
                            "aria-current": e === t ? "page" : void 0,
                            children: l({
                                className: G(g.pages.selector.base, t === e && g.pages.selector.active),
                                active: e === t,
                                onClick: () => o(e),
                                children: e
                            })
                        }, e)), (0, i.jsx)("li", {
                            children: (0, i.jsxs)(o_, {
                                className: G(g.pages.next.base, s && g.pages.showIcon),
                                onClick: () => {
                                    o(Math.min(t + 1, c))
                                },
                                disabled: t === c,
                                children: [n, s && (0, i.jsx)(u.MOd, {
                                    "aria-hidden": !0,
                                    className: g.pages.next.icon
                                })]
                            })
                        })]
                    })]
                })
            };
            oH.displayName = "Pagination", Object.assign(oH, {
                Button: oB
            }), (0, s.forwardRef)(({
                className: e,
                theme: t = {},
                ...r
            }, n) => {
                let o = V(ee().radio, t);
                return (0, i.jsx)("input", {
                    ref: n,
                    type: "radio",
                    className: G(o.root.base, e),
                    ...r
                })
            }).displayName = "Radio", (0, s.forwardRef)(({
                className: e,
                sizing: t = "md",
                theme: r = {},
                ...n
            }, o) => {
                let a = V(ee().rangeSlider, r);
                return (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)("div", {
                        "data-testid": "flowbite-range-slider",
                        className: G(a.root.base, e),
                        children: (0, i.jsx)("div", {
                            className: a.field.base,
                            children: (0, i.jsx)("input", {
                                ref: o,
                                type: "range",
                                className: G(a.field.input.base, a.field.input.sizes[t]),
                                ...n
                            })
                        })
                    })
                })
            }).displayName = "RangeSlider";
            let oW = ({
                    children: e,
                    className: t,
                    percentFilled: r = 0,
                    theme: n = {},
                    ...o
                }) => {
                    let a = V(ee().ratingAdvanced, n);
                    return (0, i.jsxs)("div", {
                        className: G(a.base, t),
                        ...o,
                        children: [(0, i.jsx)("span", {
                            className: a.label,
                            children: e
                        }), (0, i.jsx)("div", {
                            className: a.progress.base,
                            children: (0, i.jsx)("div", {
                                className: a.progress.fill,
                                "data-testid": "flowbite-rating-fill",
                                style: {
                                    width: `${r}%`
                                }
                            })
                        }), (0, i.jsx)("span", {
                            className: a.progress.label,
                            children: `${r}%`
                        })]
                    })
                },
                oY = (0, s.createContext)(void 0),
                oG = e => {
                    let {
                        className: t,
                        filled: r = !0,
                        starIcon: n = u.xiv,
                        theme: o = {},
                        ...a
                    } = e, {
                        theme: l,
                        size: d = "sm"
                    } = function() {
                        let e = (0, s.useContext)(oY);
                        if (!e) throw Error("useRatingContext should be used within the RatingContext provider!");
                        return e
                    }(), c = V(l.star, o);
                    return (0, i.jsx)(n, {
                        "data-testid": "flowbite-rating-star",
                        className: G(c.sizes[d], c[r ? "filled" : "empty"], t),
                        ...a
                    })
                },
                oq = e => {
                    let {
                        children: t,
                        className: r,
                        size: n = "sm",
                        theme: o = {},
                        ...a
                    } = e, l = V(ee().rating, o);
                    return (0, i.jsx)(oY.Provider, {
                        value: {
                            theme: l,
                            size: n
                        },
                        children: (0, i.jsx)("div", {
                            className: G(l.root.base, r),
                            ...a,
                            children: t
                        })
                    })
                };
            oq.displayName = "Rating", oG.displayName = "Rating.Star", oW.displayName = "Rating.Advanced", Object.assign(oq, {
                Star: oG,
                Advanced: oW
            }), (0, s.forwardRef)(({
                addon: e,
                children: t,
                className: r,
                color: n = "gray",
                helperText: o,
                icon: a,
                shadow: l,
                sizing: s = "md",
                theme: d = {},
                ...u
            }, c) => {
                let f = V(ee().select, d);
                return (0, i.jsxs)("div", {
                    className: G(f.base, r),
                    children: [e && (0, i.jsx)("span", {
                        className: f.addon,
                        children: e
                    }), (0, i.jsxs)("div", {
                        className: f.field.base,
                        children: [a && (0, i.jsx)("div", {
                            className: f.field.icon.base,
                            children: (0, i.jsx)(a, {
                                className: f.field.icon.svg
                            })
                        }), (0, i.jsx)("select", {
                            className: G(f.field.select.base, f.field.select.colors[n], f.field.select.sizes[s], f.field.select.withIcon[a ? "on" : "off"], f.field.select.withAddon[e ? "on" : "off"], f.field.select.withShadow[l ? "on" : "off"]),
                            ...u,
                            ref: c,
                            children: t
                        }), o && (0, i.jsx)(eH, {
                            color: n,
                            children: o
                        })]
                    })]
                })
            }).displayName = "Select";
            let oU = e => {
                    let {
                        animation: t = "duration-300",
                        arrow: r = !0,
                        children: n,
                        className: o,
                        content: a,
                        placement: l = "top",
                        style: d = "dark",
                        theme: u,
                        trigger: c = "hover",
                        minWidth: f,
                        ...g
                    } = e, p = (0, s.useRef)(null), [b, m] = (0, s.useState)(!1), h = n7({
                        open: b,
                        placement: l,
                        arrowRef: p,
                        setOpen: m
                    }), {
                        context: y,
                        middlewareData: {
                            arrow: {
                                x: v,
                                y: x
                            } = {}
                        },
                        refs: w,
                        strategy: k,
                        update: E,
                        x: N,
                        y: j
                    } = h, C = function(e, t) {
                        void 0 === t && (t = {});
                        let {
                            open: r,
                            onOpenChange: n,
                            events: o,
                            refs: a,
                            elements: {
                                domReference: l
                            }
                        } = e, {
                            enabled: i = !0,
                            visibleOnly: d = !0
                        } = t, u = s.useRef(!1), c = s.useRef(), f = s.useRef(!0);
                        return s.useEffect(() => {
                            if (!i) return;
                            let e = ta(l);

                            function t() {
                                !r && td(l) && l === tv(tS(l)) && (u.current = !0)
                            }

                            function n() {
                                f.current = !0
                            }
                            return e.addEventListener("blur", t), e.addEventListener("keydown", n, !0), () => {
                                e.removeEventListener("blur", t), e.removeEventListener("keydown", n, !0)
                            }
                        }, [l, r, i]), s.useEffect(() => {
                            if (i) return o.on("openchange", e), () => {
                                o.off("openchange", e)
                            };

                            function e(e) {
                                let {
                                    reason: t
                                } = e;
                                ("reference-press" === t || "escape-key" === t) && (u.current = !0)
                            }
                        }, [o, i]), s.useEffect(() => () => {
                            clearTimeout(c.current)
                        }, []), s.useMemo(() => i ? {
                            reference: {
                                onPointerDown(e) {
                                    tN(e.nativeEvent) || (f.current = !1)
                                },
                                onMouseLeave() {
                                    u.current = !1
                                },
                                onFocus(e) {
                                    if (u.current) return;
                                    let t = tI(e.nativeEvent);
                                    if (d && ts(t)) try {
                                        if (tj() && tT()) throw Error();
                                        if (!t.matches(":focus-visible")) return
                                    } catch (e) {
                                        if (!f.current && !tO(t)) return
                                    }
                                    n(!0, e.nativeEvent, "focus")
                                },
                                onBlur(e) {
                                    u.current = !1;
                                    let t = e.relatedTarget,
                                        r = ts(t) && t.hasAttribute(nl("focus-guard")) && "outside" === t.getAttribute("data-type");
                                    c.current = window.setTimeout(() => {
                                        let o = tv(l ? l.ownerDocument : document);
                                        if (t || o !== l) {
                                            if (tx(a.floating.current, o) || tx(l, o) || r) return;
                                            n(!1, e.nativeEvent, "focus")
                                        }
                                    })
                                }
                            }
                        } : {}, [i, d, l, a, n])
                    }(y), {
                        getFloatingProps: T,
                        getReferenceProps: M
                    } = n3({
                        context: y,
                        role: "tooltip",
                        trigger: c,
                        interactions: [C]
                    });
                    return (0, s.useEffect)(() => {
                        if (w.reference.current && w.floating.current && b) return rd(w.reference.current, w.floating.current, E)
                    }, [b, w.floating, w.reference, E]), (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("div", {
                            ref: w.setReference,
                            className: u.target,
                            "data-testid": "flowbite-tooltip-target",
                            ...M(),
                            children: n
                        }), (0, i.jsxs)("div", {
                            ref: w.setFloating,
                            "data-testid": "flowbite-tooltip",
                            ...T({
                                className: G(u.base, t && "".concat(u.animation, " ").concat(t), !b && u.hidden, u.style[d], o),
                                style: {
                                    position: k,
                                    top: null != j ? j : " ",
                                    left: null != N ? N : " ",
                                    minWidth: f
                                },
                                ...g
                            }),
                            children: [(0, i.jsx)("div", {
                                className: u.content,
                                children: a
                            }), r && (0, i.jsx)("div", {
                                className: G(u.arrow.base, "dark" === d && u.arrow.style.dark, "light" === d && u.arrow.style.light, "auto" === d && u.arrow.style.auto),
                                "data-testid": "flowbite-tooltip-arrow",
                                ref: p,
                                style: {
                                    top: null != x ? x : " ",
                                    left: null != v ? v : " ",
                                    right: " ",
                                    bottom: " ",
                                    [n6({
                                        placement: h.placement
                                    })]: u.arrow.placement
                                },
                                children: "\xa0"
                            })]
                        })]
                    })
                },
                oV = ({
                    animation: e = "duration-300",
                    arrow: t = !0,
                    children: r,
                    className: n,
                    content: o,
                    placement: a = "top",
                    style: l = "dark",
                    theme: s = {},
                    trigger: d = "hover",
                    ...u
                }) => {
                    let c = V(ee().tooltip, s);
                    return (0, i.jsx)(oU, {
                        animation: e,
                        arrow: t,
                        content: o,
                        placement: a,
                        style: l,
                        theme: c,
                        trigger: d,
                        className: n,
                        ...u,
                        children: r
                    })
                };
            oV.displayName = "Tooltip";
            let oK = (0, s.createContext)(void 0);

            function oX() {
                let e = (0, s.useContext)(oK);
                if (!e) throw Error("useSidebarContext should be used within the SidebarContext provider!");
                return e
            }
            let o$ = (0, s.createContext)(void 0),
                oZ = e => {
                    let {
                        children: t,
                        className: r,
                        icon: n,
                        label: o,
                        chevronIcon: a = u.kWQ,
                        renderChevronIcon: l,
                        open: d = !1,
                        theme: c = {},
                        ...f
                    } = e, g = (0, s.useId)(), [p, b] = (0, s.useState)(d), {
                        theme: m,
                        isCollapsed: h
                    } = oX(), y = V(m.collapse, c);
                    return (0, s.useEffect)(() => b(d), [d]), (0, i.jsxs)(e => {
                        let {
                            children: t
                        } = e;
                        return (0, i.jsx)("li", {
                            children: h && !p ? (0, i.jsx)(oV, {
                                content: o,
                                placement: "right",
                                children: t
                            }) : t
                        })
                    }, {
                        children: [(0, i.jsxs)("button", {
                            id: "flowbite-sidebar-collapse-".concat(g),
                            onClick: () => b(!p),
                            title: o,
                            type: "button",
                            className: G(y.button, r),
                            ...f,
                            children: [n && (0, i.jsx)(n, {
                                "aria-hidden": !0,
                                "data-testid": "flowbite-sidebar-collapse-icon",
                                className: G(y.icon.base, y.icon.open[p ? "on" : "off"])
                            }), h ? (0, i.jsx)("span", {
                                className: "sr-only",
                                children: o
                            }) : (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)("span", {
                                    "data-testid": "flowbite-sidebar-collapse-label",
                                    className: y.label.base,
                                    children: o
                                }), l ? l(y, p) : (0, i.jsx)(a, {
                                    "aria-hidden": !0,
                                    className: G(y.label.icon.base, y.label.icon.open[p ? "on" : "off"])
                                })]
                            })]
                        }), (0, i.jsx)("ul", {
                            "aria-labelledby": "flowbite-sidebar-collapse-".concat(g),
                            hidden: !p,
                            className: y.list,
                            children: (0, i.jsx)(o$.Provider, {
                                value: {
                                    isInsideCollapse: !0
                                },
                                children: t
                            })
                        })]
                    })
                };
            oZ.displayName = "Sidebar.Collapse";
            let oQ = e => {
                let {
                    children: t,
                    color: r = "info",
                    className: n,
                    theme: o = {},
                    ...a
                } = e, {
                    theme: l,
                    isCollapsed: s
                } = oX(), d = V(l.cta, o);
                return (0, i.jsx)("div", {
                    "data-testid": "sidebar-cta",
                    hidden: s,
                    className: G(d.base, d.color[r], n),
                    ...a,
                    children: t
                })
            };
            oQ.displayName = "Sidebar.CTA";
            let oJ = e => {
                    let {
                        id: t,
                        theme: r,
                        isCollapsed: n,
                        tooltipChildren: o,
                        children: a,
                        ...l
                    } = e;
                    return (0, i.jsx)("li", { ...l,
                        children: n ? (0, i.jsx)(oV, {
                            content: (0, i.jsx)(o0, {
                                id: t,
                                theme: r,
                                children: o
                            }),
                            placement: "right",
                            children: a
                        }) : a
                    })
                },
                o0 = e => {
                    let {
                        id: t,
                        theme: r,
                        children: n
                    } = e;
                    return (0, i.jsx)("span", {
                        "data-testid": "flowbite-sidebar-item-content",
                        id: "flowbite-sidebar-item-".concat(t),
                        className: G(r.content.base),
                        children: n
                    })
                },
                o1 = (0, s.forwardRef)((e, t) => {
                    var r, n, o, a, l;
                    let {
                        active: d,
                        as: u = "a",
                        children: c,
                        className: f,
                        icon: g,
                        label: p,
                        labelColor: b = "info",
                        theme: m = {},
                        ...h
                    } = e, y = (0, s.useId)(), {
                        theme: v,
                        isCollapsed: x
                    } = oX(), {
                        isInsideCollapse: w
                    } = function() {
                        let e = (0, s.useContext)(o$);
                        if (!e) throw Error("useSidebarItemContext should be used within the SidebarItemContext provider!");
                        return e
                    }(), k = V(v.item, m);
                    return (0, i.jsx)(oJ, {
                        theme: k,
                        className: k.listItem,
                        id: y,
                        isCollapsed: x,
                        tooltipChildren: c,
                        children: (0, i.jsxs)(u, {
                            "aria-labelledby": "flowbite-sidebar-item-".concat(y),
                            ref: t,
                            className: G(k.base, d && k.active, !x && w && (null === (r = k.collapsed) || void 0 === r ? void 0 : r.insideCollapse), f),
                            ...h,
                            children: [g && (0, i.jsx)(g, {
                                "aria-hidden": !0,
                                "data-testid": "flowbite-sidebar-item-icon",
                                className: G(null === (n = k.icon) || void 0 === n ? void 0 : n.base, d && (null === (o = k.icon) || void 0 === o ? void 0 : o.active))
                            }), x && !g && (0, i.jsx)("span", {
                                className: null === (a = k.collapsed) || void 0 === a ? void 0 : a.noIcon,
                                children: null !== (l = c.charAt(0).toLocaleUpperCase()) && void 0 !== l ? l : "?"
                            }), !x && (0, i.jsx)(o0, {
                                id: y,
                                theme: k,
                                children: c
                            }), !x && p && (0, i.jsx)(ec, {
                                color: b,
                                "data-testid": "flowbite-sidebar-label",
                                hidden: x,
                                className: k.label,
                                children: p
                            })]
                        })
                    })
                });
            o1.displayName = "Sidebar.Item";
            let o5 = e => {
                let {
                    children: t,
                    className: r,
                    theme: n = {},
                    ...o
                } = e, {
                    theme: a
                } = oX(), l = V(a.itemGroup, n);
                return (0, i.jsx)("ul", {
                    "data-testid": "flowbite-sidebar-item-group",
                    className: G(l.base, r),
                    ...o,
                    children: (0, i.jsx)(o$.Provider, {
                        value: {
                            isInsideCollapse: !1
                        },
                        children: t
                    })
                })
            };
            o5.displayName = "Sidebar.ItemGroup";
            let o2 = e => {
                let {
                    children: t,
                    className: r,
                    theme: n = {},
                    ...o
                } = e, {
                    theme: a
                } = oX(), l = V(a.items, n);
                return (0, i.jsx)("div", {
                    className: G(l.base, r),
                    "data-testid": "flowbite-sidebar-items",
                    ...o,
                    children: t
                })
            };
            o2.displayName = "Sidebar.Items";
            let o4 = e => {
                let {
                    children: t,
                    className: r,
                    href: n,
                    img: o,
                    imgAlt: a = "",
                    theme: l = {},
                    ...d
                } = e, u = (0, s.useId)(), {
                    theme: c,
                    isCollapsed: f
                } = oX(), g = V(c.logo, l);
                return (0, i.jsxs)("a", {
                    "aria-labelledby": "flowbite-sidebar-logo-".concat(u),
                    href: n,
                    className: G(g.base, r),
                    ...d,
                    children: [(0, i.jsx)("img", {
                        alt: a,
                        src: o,
                        className: g.img
                    }), (0, i.jsx)("span", {
                        className: g.collapsed[f ? "on" : "off"],
                        id: "flowbite-sidebar-logo-".concat(u),
                        children: t
                    })]
                })
            };
            o4.displayName = "Sidebar.Logo";
            let o6 = e => {
                let {
                    children: t,
                    as: r = "nav",
                    collapseBehavior: n = "collapse",
                    collapsed: o = !1,
                    theme: a = {},
                    className: l,
                    ...s
                } = e, d = V(ee().sidebar, a);
                return (0, i.jsx)(oK.Provider, {
                    value: {
                        theme: d,
                        isCollapsed: o
                    },
                    children: (0, i.jsx)(r, {
                        "aria-label": "Sidebar",
                        hidden: o && "hide" === n,
                        className: G(d.root.base, d.root.collapsed[o ? "on" : "off"], l),
                        ...s,
                        children: (0, i.jsx)("div", {
                            className: d.root.inner,
                            children: t
                        })
                    })
                })
            };
            o6.displayName = "Sidebar", Object.assign(o6, {
                Collapse: oZ,
                CTA: oQ,
                Item: o1,
                Items: o2,
                ItemGroup: o5,
                Logo: o4
            });
            let o7 = (0, s.createContext)(void 0),
                o3 = (0, s.createContext)(void 0);

            function o9() {
                let e = (0, s.useContext)(o3);
                if (!e) throw Error("useTableContext should be used within the TableContext provider!");
                return e
            }
            let o8 = (0, s.forwardRef)((e, t) => {
                let {
                    children: r,
                    className: n,
                    theme: o = {},
                    ...a
                } = e, {
                    theme: l
                } = o9(), s = V(l.body, o);
                return (0, i.jsx)(o7.Provider, {
                    value: {
                        theme: s
                    },
                    children: (0, i.jsx)("tbody", {
                        className: G(s.base, n),
                        ref: t,
                        ...a,
                        children: r
                    })
                })
            });
            o8.displayName = "Table.Body";
            let ae = (0, s.forwardRef)((e, t) => {
                let {
                    children: r,
                    className: n,
                    theme: o = {},
                    ...a
                } = e, {
                    theme: l
                } = function() {
                    let e = (0, s.useContext)(o7);
                    if (!e) throw Error("useTableBodyContext should be used within the TableBodyContext provider!");
                    return e
                }(), d = V(l.cell, o);
                return (0, i.jsx)("td", {
                    className: G(d.base, n),
                    ref: t,
                    ...a,
                    children: r
                })
            });
            ae.displayName = "Table.Cell";
            let at = (0, s.createContext)(void 0),
                ar = (0, s.forwardRef)((e, t) => {
                    let {
                        children: r,
                        className: n,
                        theme: o = {},
                        ...a
                    } = e, {
                        theme: l
                    } = o9(), s = V(l.head, o);
                    return (0, i.jsx)(at.Provider, {
                        value: {
                            theme: s
                        },
                        children: (0, i.jsx)("thead", {
                            className: G(s.base, n),
                            ref: t,
                            ...a,
                            children: (0, i.jsx)("tr", {
                                children: r
                            })
                        })
                    })
                });
            ar.displayName = "Table.Head";
            let an = (0, s.forwardRef)((e, t) => {
                let {
                    children: r,
                    className: n,
                    theme: o = {},
                    ...a
                } = e, {
                    theme: l
                } = function() {
                    let e = (0, s.useContext)(at);
                    if (!e) throw Error("useTableHeadContext should be used within the TableHeadContext provider!");
                    return e
                }(), d = V(l.cell, o);
                return (0, i.jsx)("th", {
                    className: G(d.base, n),
                    ref: t,
                    ...a,
                    children: r
                })
            });
            an.displayName = "Table.HeadCell";
            let ao = (0, s.forwardRef)((e, t) => {
                let {
                    children: r,
                    className: n,
                    theme: o = {},
                    ...a
                } = e, {
                    theme: l,
                    hoverable: s,
                    striped: d
                } = o9(), u = V(l.row, o);
                return (0, i.jsx)("tr", {
                    ref: t,
                    "data-testid": "table-row-element",
                    className: G(u.base, d && u.striped, s && u.hovered, n),
                    ...a,
                    children: r
                })
            });
            ao.displayName = "Table.Row";
            let aa = (0, s.forwardRef)((e, t) => {
                let {
                    children: r,
                    className: n,
                    striped: o,
                    hoverable: a,
                    theme: l = {},
                    ...s
                } = e, d = V(ee().table, l);
                return (0, i.jsx)("div", {
                    "data-testid": "table-element",
                    className: G(d.root.wrapper),
                    children: (0, i.jsxs)(o3.Provider, {
                        value: {
                            theme: d,
                            striped: o,
                            hoverable: a
                        },
                        children: [(0, i.jsx)("div", {
                            className: G(d.root.shadow, n)
                        }), (0, i.jsx)("table", {
                            className: G(d.root.base, n),
                            ...s,
                            ref: t,
                            children: r
                        })]
                    })
                })
            });
            aa.displayName = "Table", Object.assign(aa, {
                Head: ar,
                Body: o8,
                Row: ao,
                Cell: ae,
                HeadCell: an
            });
            let al = e => {
                let {
                    children: t,
                    className: r
                } = e;
                return (0, i.jsx)("div", {
                    className: r,
                    children: t
                })
            };
            al.displayName = "Tabs.Item";
            let ai = (0, s.forwardRef)((e, t) => {
                let {
                    children: r,
                    className: n,
                    onActiveTabChange: o,
                    style: a = "default",
                    theme: l = {},
                    ...d
                } = e, u = V(ee().tabs, l), c = (0, s.useId)(), f = (0, s.useMemo)(() => s.Children.map(s.Children.toArray(r), e => {
                    let {
                        props: t
                    } = e;
                    return t
                }), [r]), g = (0, s.useRef)([]), [p, b] = (0, s.useState)(Math.max(0, f.findIndex(e => e.active))), [m, h] = (0, s.useState)(-1), y = e => {
                    b(e), o && o(e)
                }, v = e => {
                    let {
                        target: t
                    } = e;
                    y(t), h(t)
                }, x = e => {
                    let {
                        event: t,
                        target: r
                    } = e;
                    "ArrowLeft" === t.key && h(Math.max(0, m - 1)), "ArrowRight" === t.key && h(Math.min(f.length - 1, m + 1)), "Enter" === t.key && (y(r), h(r))
                }, w = u.tablist.tabitem.styles[a], k = u.tabitemcontainer.styles[a];
                return (0, s.useEffect)(() => {
                    var e;
                    null === (e = g.current[m]) || void 0 === e || e.focus()
                }, [m]), (0, s.useImperativeHandle)(t, () => ({
                    setActiveTab: y
                })), (0, i.jsxs)("div", {
                    className: G(u.base, n),
                    children: [(0, i.jsx)("div", {
                        "aria-label": "Tabs",
                        role: "tablist",
                        className: G(u.tablist.base, u.tablist.styles[a], n),
                        ...d,
                        children: f.map((e, t) => (0, i.jsxs)("button", {
                            type: "button",
                            "aria-controls": "".concat(c, "-tabpanel-").concat(t),
                            "aria-selected": t === p,
                            className: G(u.tablist.tabitem.base, w.base, t === p && w.active.on, t !== p && !e.disabled && w.active.off),
                            disabled: e.disabled,
                            id: "".concat(c, "-tab-").concat(t),
                            onClick: () => v({
                                target: t
                            }),
                            onKeyDown: e => x({
                                event: e,
                                target: t
                            }),
                            ref: e => g.current[t] = e,
                            role: "tab",
                            tabIndex: t === m ? 0 : -1,
                            style: {
                                zIndex: t === m ? 2 : 1
                            },
                            children: [e.icon && (0, i.jsx)(e.icon, {
                                className: u.tablist.tabitem.icon
                            }), e.title]
                        }, t))
                    }), (0, i.jsx)("div", {
                        className: G(u.tabitemcontainer.base, k),
                        children: f.map((e, t) => (0, i.jsx)("div", {
                            "aria-labelledby": "".concat(c, "-tab-").concat(t),
                            className: u.tabpanel,
                            hidden: t !== p,
                            id: "".concat(c, "-tabpanel-").concat(t),
                            role: "tabpanel",
                            tabIndex: 0,
                            children: e.children
                        }, t))
                    })]
                })
            });
            ai.displayName = "Tabs", Object.assign(ai, {
                Item: al
            }), (0, s.forwardRef)(({
                className: e,
                color: t = "gray",
                helperText: r,
                shadow: n,
                theme: o = {},
                ...a
            }, l) => {
                let s = V(ee().textarea, o);
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)("textarea", {
                        ref: l,
                        className: G(s.base, s.colors[t], s.withShadow[n ? "on" : "off"], e),
                        ...a
                    }), r && (0, i.jsx)(eH, {
                        color: t,
                        children: r
                    })]
                })
            }).displayName = "Textarea";
            let as = (0, s.createContext)(void 0);

            function ad() {
                let e = (0, s.useContext)(as);
                if (!e) throw Error("useTimelineContentContext should be used within the TimelineContentContext provider!");
                return e
            }
            let au = e => {
                    let {
                        children: t,
                        className: r,
                        theme: n = {},
                        ...o
                    } = e, {
                        theme: a
                    } = ad(), l = V(a.body, n);
                    return (0, i.jsx)("div", {
                        className: G(l.base, r),
                        ...o,
                        children: t
                    })
                },
                ac = (0, s.createContext)(void 0);

            function af() {
                let e = (0, s.useContext)(ac);
                if (!e) throw Error("useTimelineContext should be used within the TimelineContext provider!");
                return e
            }
            let ag = (0, s.createContext)(void 0);

            function ap() {
                let e = (0, s.useContext)(ag);
                if (!e) throw Error("useTimelineItemContext should be used within the TimelineItemContext provider!");
                return e
            }
            let ab = e => {
                    let {
                        children: t,
                        className: r,
                        theme: n = {},
                        ...o
                    } = e, {
                        horizontal: a
                    } = af(), {
                        theme: l
                    } = ap(), s = V(l.content, n);
                    return (0, i.jsx)(as.Provider, {
                        value: {
                            theme: s
                        },
                        children: (0, i.jsx)("div", {
                            "data-testid": "timeline-content",
                            className: G(a && s.root.base, r),
                            ...o,
                            children: t
                        })
                    })
                },
                am = e => {
                    let {
                        children: t,
                        className: r,
                        theme: n = {},
                        ...o
                    } = e, {
                        theme: a,
                        horizontal: l
                    } = af(), s = V(a.item, n);
                    return (0, i.jsx)(ag.Provider, {
                        value: {
                            theme: s
                        },
                        children: (0, i.jsx)("li", {
                            "data-testid": "timeline-item",
                            className: G(l && s.root.horizontal, !l && s.root.vertical, r),
                            ...o,
                            children: t
                        })
                    })
                },
                ah = e => {
                    let {
                        children: t,
                        className: r,
                        icon: n,
                        theme: o = {},
                        ...a
                    } = e, {
                        horizontal: l
                    } = af(), {
                        theme: s
                    } = ap(), d = V(s.point, o);
                    return (0, i.jsxs)("div", {
                        "data-testid": "timeline-point",
                        className: G(l && d.horizontal, !l && d.vertical, r),
                        ...a,
                        children: [t, n ? (0, i.jsx)("span", {
                            className: G(d.marker.icon.wrapper),
                            children: (0, i.jsx)(n, {
                                "aria-hidden": !0,
                                className: G(d.marker.icon.base)
                            })
                        }) : (0, i.jsx)("div", {
                            className: G(l && d.marker.base.horizontal, !l && d.marker.base.vertical)
                        }), l && (0, i.jsx)("div", {
                            className: G(d.line)
                        })]
                    })
                },
                ay = e => {
                    let {
                        children: t,
                        className: r,
                        theme: n = {},
                        ...o
                    } = e, {
                        theme: a
                    } = ad(), l = V(a.time, n);
                    return (0, i.jsx)("time", {
                        className: G(l.base, r),
                        ...o,
                        children: t
                    })
                },
                av = e => {
                    let {
                        as: t = "h3",
                        children: r,
                        className: n,
                        theme: o = {},
                        ...a
                    } = e, {
                        theme: l
                    } = ad(), s = V(l.title, o);
                    return (0, i.jsx)(t, {
                        className: G(s.base, n),
                        ...a,
                        children: r
                    })
                },
                ax = e => {
                    let {
                        children: t,
                        className: r,
                        horizontal: n,
                        theme: o = {},
                        ...a
                    } = e, l = V(ee().timeline, o);
                    return (0, i.jsx)(ac.Provider, {
                        value: {
                            theme: l,
                            horizontal: n
                        },
                        children: (0, i.jsx)("ol", {
                            "data-testid": "timeline-component",
                            className: G(n && l.root.direction.horizontal, !n && l.root.direction.vertical, r),
                            ...a,
                            children: t
                        })
                    })
                };
            ax.displayName = "Timeline", am.displayName = "Timeline.Item", ah.displayName = "Timeline.Point", ab.displayName = "Timeline.Content", ay.displayName = "Timeline.Time", av.displayName = "Timeline.Title", au.displayName = "Timeline.Body", Object.assign(ax, {
                Item: am,
                Point: ah,
                Content: ab,
                Time: ay,
                Title: av,
                Body: au
            });
            let aw = (0, s.createContext)(void 0),
                ak = e => {
                    let {
                        className: t,
                        onClick: r,
                        theme: n = {},
                        xIcon: o = u.apv,
                        onDismiss: a,
                        ...l
                    } = e, {
                        theme: d,
                        duration: c,
                        isClosed: f,
                        isRemoved: g,
                        setIsClosed: p,
                        setIsRemoved: b
                    } = function() {
                        let e = (0, s.useContext)(aw);
                        if (!e) throw Error("useToastContext should be used within the ToastContext provider!");
                        return e
                    }(), m = V(d.toggle, n);
                    return (0, i.jsx)("button", {
                        "aria-label": "Close",
                        onClick: e => {
                            if (r && r(e), a) {
                                a();
                                return
                            }
                            p(!f), setTimeout(() => b(!g), c)
                        },
                        type: "button",
                        className: G(m.base, t),
                        ...l,
                        children: (0, i.jsx)(o, {
                            "aria-hidden": !0,
                            className: m.icon
                        })
                    })
                },
                aE = {
                    75: "duration-75",
                    100: "duration-100",
                    150: "duration-150",
                    200: "duration-200",
                    300: "duration-300",
                    500: "duration-500",
                    700: "duration-700",
                    1e3: "duration-1000"
                },
                aN = e => {
                    let {
                        children: t,
                        className: r,
                        duration: n = 300,
                        theme: o = {},
                        ...a
                    } = e, [l, d] = (0, s.useState)(!1), [u, c] = (0, s.useState)(!1), f = V(ee().toast, o);
                    return u ? null : (0, i.jsx)(aw.Provider, {
                        value: {
                            theme: f,
                            duration: n,
                            isClosed: l,
                            isRemoved: u,
                            setIsClosed: d,
                            setIsRemoved: c
                        },
                        children: (0, i.jsx)("div", {
                            "data-testid": "flowbite-toast",
                            role: "alert",
                            className: G(f.root.base, aE[n], l && f.root.closed, r),
                            ...a,
                            children: t
                        })
                    })
                };
            aN.displayName = "Toast", ak.displayName = "Toast.Toggle";
            let aj = Object.assign(aN, {
                Toggle: ak
            });
            (0, s.forwardRef)(({
                checked: e,
                className: t,
                color: r = "blue",
                sizing: n = "md",
                disabled: o,
                label: a,
                name: l,
                onChange: d,
                theme: u = {},
                ...c
            }, f) => {
                let g = (0, s.useId)(),
                    p = V(ee().toggleSwitch, u),
                    b = () => d(!e);
                return (0, i.jsxs)(i.Fragment, {
                    children: [l && e ? (0, i.jsx)("input", {
                        ref: f,
                        checked: e,
                        hidden: !0,
                        name: l,
                        readOnly: !0,
                        type: "checkbox",
                        className: "sr-only"
                    }) : null, (0, i.jsxs)("button", {
                        "aria-checked": e,
                        "aria-labelledby": `${g}-flowbite-toggleswitch-label`,
                        disabled: o,
                        id: `${g}-flowbite-toggleswitch`,
                        onClick: () => {
                            b()
                        },
                        onKeyDown: e => {
                            "Enter" == e.code && e.preventDefault()
                        },
                        role: "switch",
                        tabIndex: 0,
                        type: "button",
                        className: G(p.root.base, p.root.active[o ? "off" : "on"], t),
                        ...c,
                        children: [(0, i.jsx)("div", {
                            "data-testid": "flowbite-toggleswitch-toggle",
                            className: G(p.toggle.base, p.toggle.checked[e ? "on" : "off"], e && p.toggle.checked.color[r], p.toggle.sizes[n])
                        }), a ? .length ? (0, i.jsx)("span", {
                            "data-testid": "flowbite-toggleswitch-label",
                            id: `${g}-flowbite-toggleswitch-label`,
                            className: p.root.label,
                            children: a
                        }) : null]
                    })]
                })
            }).displayName = "ToggleSwitch"
        },
        87752: function(e, t, r) {
            "use strict";
            r.d(t, {
                w_: function() {
                    return u
                }
            });
            var n = r(2265),
                o = {
                    color: void 0,
                    size: void 0,
                    className: void 0,
                    style: void 0,
                    attr: void 0
                },
                a = n.createContext && n.createContext(o),
                l = ["attr", "size", "title"];

            function i() {
                return (i = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(this, arguments)
            }

            function s(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? s(Object(r), !0).forEach(function(t) {
                        var n, o;
                        n = t, o = r[t], (n = function(e) {
                            var t = function(e, t) {
                                if ("object" != typeof e || null === e) return e;
                                var r = e[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(e, t || "default");
                                    if ("object" != typeof n) return n;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(e, "string");
                            return "symbol" == typeof t ? t : String(t)
                        }(n)) in e ? Object.defineProperty(e, n, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[n] = o
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }

            function u(e) {
                return t => n.createElement(c, i({
                    attr: d({}, e.attr)
                }, t), function e(t) {
                    return t && t.map((t, r) => n.createElement(t.tag, d({
                        key: r
                    }, t.attr), e(t.child)))
                }(e.child))
            }

            function c(e) {
                var t = t => {
                    var r, {
                            attr: o,
                            size: a,
                            title: s
                        } = e,
                        u = function(e, t) {
                            if (null == e) return {};
                            var r, n, o = function(e, t) {
                                if (null == e) return {};
                                var r, n, o = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
                                return o
                            }(e, t);
                            if (Object.getOwnPropertySymbols) {
                                var a = Object.getOwnPropertySymbols(e);
                                for (n = 0; n < a.length; n++) r = a[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                            }
                            return o
                        }(e, l),
                        c = a || t.size || "1em";
                    return t.className && (r = t.className), e.className && (r = (r ? r + " " : "") + e.className), n.createElement("svg", i({
                        stroke: "currentColor",
                        fill: "currentColor",
                        strokeWidth: "0"
                    }, t.attr, o, u, {
                        className: r,
                        style: d(d({
                            color: e.color || t.color
                        }, t.style), e.style),
                        height: c,
                        width: c,
                        xmlns: "http://www.w3.org/2000/svg"
                    }), s && n.createElement("title", null, s), e.children)
                };
                return void 0 !== a ? n.createElement(a.Consumer, null, e => t(e)) : t(o)
            }
        },
        46231: function(e, t, r) {
            "use strict";
            r.d(t, {
                w_: function() {
                    return u
                }
            });
            var n = r(2265),
                o = {
                    color: void 0,
                    size: void 0,
                    className: void 0,
                    style: void 0,
                    attr: void 0
                },
                a = n.createContext && n.createContext(o),
                l = ["attr", "size", "title"];

            function i() {
                return (i = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(this, arguments)
            }

            function s(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? s(Object(r), !0).forEach(function(t) {
                        var n, o;
                        n = t, o = r[t], (n = function(e) {
                            var t = function(e, t) {
                                if ("object" != typeof e || !e) return e;
                                var r = e[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(e, t || "default");
                                    if ("object" != typeof n) return n;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(e, "string");
                            return "symbol" == typeof t ? t : t + ""
                        }(n)) in e ? Object.defineProperty(e, n, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[n] = o
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }

            function u(e) {
                return t => n.createElement(c, i({
                    attr: d({}, e.attr)
                }, t), function e(t) {
                    return t && t.map((t, r) => n.createElement(t.tag, d({
                        key: r
                    }, t.attr), e(t.child)))
                }(e.child))
            }

            function c(e) {
                var t = t => {
                    var r, {
                            attr: o,
                            size: a,
                            title: s
                        } = e,
                        u = function(e, t) {
                            if (null == e) return {};
                            var r, n, o = function(e, t) {
                                if (null == e) return {};
                                var r = {};
                                for (var n in e)
                                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                                        if (t.indexOf(n) >= 0) continue;
                                        r[n] = e[n]
                                    }
                                return r
                            }(e, t);
                            if (Object.getOwnPropertySymbols) {
                                var a = Object.getOwnPropertySymbols(e);
                                for (n = 0; n < a.length; n++) r = a[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                            }
                            return o
                        }(e, l),
                        c = a || t.size || "1em";
                    return t.className && (r = t.className), e.className && (r = (r ? r + " " : "") + e.className), n.createElement("svg", i({
                        stroke: "currentColor",
                        fill: "currentColor",
                        strokeWidth: "0"
                    }, t.attr, o, u, {
                        className: r,
                        style: d(d({
                            color: e.color || t.color
                        }, t.style), e.style),
                        height: c,
                        width: c,
                        xmlns: "http://www.w3.org/2000/svg"
                    }), s && n.createElement("title", null, s), e.children)
                };
                return void 0 !== a ? n.createElement(a.Consumer, null, e => t(e)) : t(o)
            }
        }
    }
]);