! function() {
    try {
        var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            e = (new t.Error).stack;
        e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "12f110e2-f790-40d9-94cd-034a1791a840", t._sentryDebugIdIdentifier = "sentry-dbid-12f110e2-f790-40d9-94cd-034a1791a840")
    } catch (t) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [716], {
        68086: function(t, e, n) {
            n.d(e, {
                FU5: function() {
                    return r
                },
                bH4: function() {
                    return a
                }
            });
            var d = n(87752);

            function a(t) {
                return (0, d.w_)({
                    tag: "svg",
                    attr: {
                        viewBox: "0 0 24 24"
                    },
                    child: [{
                        tag: "path",
                        attr: {
                            fill: "none",
                            d: "M0 0h24v24H0z"
                        },
                        child: []
                    }, {
                        tag: "path",
                        attr: {
                            d: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"
                        },
                        child: []
                    }]
                })(t)
            }

            function r(t) {
                return (0, d.w_)({
                    tag: "svg",
                    attr: {
                        viewBox: "0 0 24 24"
                    },
                    child: [{
                        tag: "path",
                        attr: {
                            fill: "none",
                            d: "M0 0h24v24H0z"
                        },
                        child: []
                    }, {
                        tag: "path",
                        attr: {
                            d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                        },
                        child: []
                    }]
                })(t)
            }
        }
    }
]);