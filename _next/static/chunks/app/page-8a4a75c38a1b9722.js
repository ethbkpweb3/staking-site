! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "a1ee8400-d73b-4253-8a8e-5d7b55aaa243", e._sentryDebugIdIdentifier = "sentry-dbid-a1ee8400-d73b-4253-8a8e-5d7b55aaa243")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1931], {
        16541: function(e, t, n) {
            Promise.resolve().then(n.bind(n, 56990))
        },
        56990: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n(57437),
                o = n(2265),
                i = n(83561),
                d = n(94446),
                u = n(40908),
                l = n.n(u);
            n(57074);
            let s = e => {
                    document.body.style.setProperty("--scroll", String(Math.min(Math.max((window.scrollY / (document.body.scrollHeight - e) - .5) * 10, -5), 5)))
                },
                c = e => {
                    e.addEventListener("click", function(e) {
                        var t;
                        e.preventDefault(), null === (t = document.querySelector(this.getAttribute("href"))) || void 0 === t || t.scrollIntoView({
                            behavior: "smooth"
                        })
                    })
                };

            function a() {
                return (0, o.useEffect)(() => {
                    document.querySelectorAll('a[href^="#"]').forEach(c);
                    let e = window.innerHeight,
                        t = _.throttle(function() {
                            s(e)
                        }, 10);
                    return window.addEventListener("scroll", t, !1), (0, d.h)(), l().init(), () => {
                        window.removeEventListener("scroll", t)
                    }
                }, []), (0, r.jsx)(i.Z, {})
            }
        }
    },
    function(e) {
        e.O(0, [996, 1779, 1866, 9472, 3814, 1761, 3125, 716, 3972, 327, 9167, 5726, 2848, 7041, 9395, 2118, 312, 2515, 3561, 991, 2971, 5347, 1744], function() {
            return e(e.s = 16541)
        }), _N_E = e.O()
    }
]);