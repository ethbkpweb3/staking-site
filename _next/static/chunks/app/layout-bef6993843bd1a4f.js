! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "82fa2386-ef4e-438b-9255-20e9d51e3628", e._sentryDebugIdIdentifier = "sentry-dbid-82fa2386-ef4e-438b-9255-20e9d51e3628")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3185], {
        40619: function(e, t, n) {
            Promise.resolve().then(n.bind(n, 14888)), Promise.resolve().then(n.bind(n, 98087)), Promise.resolve().then(n.bind(n, 47239)), Promise.resolve().then(n.t.bind(n, 88003, 23)), Promise.resolve().then(n.t.bind(n, 7742, 23)), Promise.resolve().then(n.t.bind(n, 32889, 23))
        },
        47239: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let a = n(57437),
                r = n(2265);
            t.default = function(e) {
                let {
                    html: t,
                    height: n = null,
                    width: o = null,
                    children: i,
                    dataNtpc: s = ""
                } = e;
                return (0, r.useEffect)(() => {
                    s && performance.mark("mark_feature_usage", {
                        detail: {
                            feature: "next-third-parties-".concat(s)
                        }
                    })
                }, [s]), (0, a.jsxs)(a.Fragment, {
                    children: [i, t ? (0, a.jsx)("div", {
                        style: {
                            height: null != n ? "".concat(n, "px") : "auto",
                            width: null != o ? "".concat(o, "px") : "auto"
                        },
                        "data-ntpc": s,
                        dangerouslySetInnerHTML: {
                            __html: t
                        }
                    }) : null]
                })
            }
        },
        14888: function(e, t, n) {
            "use strict";
            var a;
            let r;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.sendGAEvent = t.GoogleAnalytics = void 0;
            let o = n(57437),
                i = n(2265),
                s = (a = n(48667)) && a.__esModule ? a : {
                    default: a
                };
            t.GoogleAnalytics = function(e) {
                let {
                    gaId: t,
                    dataLayerName: n = "dataLayer"
                } = e;
                return void 0 === r && (r = n), (0, i.useEffect)(() => {
                    performance.mark("mark_feature_usage", {
                        detail: {
                            feature: "next-third-parties-ga"
                        }
                    })
                }, []), (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)(s.default, {
                        id: "_next-ga-init",
                        dangerouslySetInnerHTML: {
                            __html: "\n          window['".concat(n, "'] = window['").concat(n, "'] || [];\n          function gtag(){window['").concat(n, "'].push(arguments);}\n          gtag('js', new Date());\n\n          gtag('config', '").concat(t, "');")
                        }
                    }), (0, o.jsx)(s.default, {
                        id: "_next-ga",
                        src: "https://www.googletagmanager.com/gtag/js?id=".concat(t)
                    })]
                })
            }, t.sendGAEvent = function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                if (void 0 === r) {
                    console.warn("@next/third-parties: GA has not been initialized");
                    return
                }
                window[r] ? window[r].push(arguments) : console.warn("@next/third-parties: GA dataLayer ".concat(r, " does not exist"))
            }
        },
        98087: function(e, t, n) {
            "use strict";
            var a;
            let r;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.sendGTMEvent = t.GoogleTagManager = void 0;
            let o = n(57437),
                i = n(2265),
                s = (a = n(48667)) && a.__esModule ? a : {
                    default: a
                };
            t.GoogleTagManager = function(e) {
                let {
                    gtmId: t,
                    dataLayerName: n = "dataLayer",
                    auth: a,
                    preview: d,
                    dataLayer: c
                } = e;
                void 0 === r && (r = n);
                let u = "dataLayer" !== n ? "&l=".concat(n) : "";
                return (0, i.useEffect)(() => {
                    performance.mark("mark_feature_usage", {
                        detail: {
                            feature: "next-third-parties-gtm"
                        }
                    })
                }, []), (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)(s.default, {
                        id: "_next-gtm-init",
                        dangerouslySetInnerHTML: {
                            __html: "\n      (function(w,l){\n        w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});\n        ".concat(c ? "w[l].push(".concat(JSON.stringify(c), ")") : "", "\n      })(window,'").concat(n, "');")
                        }
                    }), (0, o.jsx)(s.default, {
                        id: "_next-gtm",
                        "data-ntpc": "GTM",
                        src: "https://www.googletagmanager.com/gtm.js?id=".concat(t).concat(u).concat(a ? "&gtm_auth=".concat(a) : "").concat(d ? "&gtm_preview=".concat(d, "&gtm_cookies_win=x") : "")
                    })]
                })
            }, t.sendGTMEvent = e => {
                if (void 0 === r) {
                    console.warn("@next/third-parties: GTM has not been initialized");
                    return
                }
                window[r] ? window[r].push(e) : console.warn("@next/third-parties: GTM dataLayer ".concat(r, " does not exist"))
            }
        },
        48667: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r.a
                }
            });
            var a = n(88003),
                r = n.n(a),
                o = {};
            for (var i in a) "default" !== i && (o[i] = (function(e) {
                return a[e]
            }).bind(0, i));
            n.d(t, o)
        },
        32889: function() {},
        7742: function() {}
    },
    function(e) {
        e.O(0, [7849, 786, 991, 2971, 5347, 1744], function() {
            return e(e.s = 40619)
        }), _N_E = e.O()
    }
]);