! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "001fff39-3696-407a-984f-29a87907e853", e._sentryDebugIdIdentifier = "sentry-dbid-001fff39-3696-407a-984f-29a87907e853")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6181], {
        26181: function(e, t, r) {
            r.r(t), r.d(t, {
                default: function() {
                    return g
                }
            });
            var a, n = r(57437),
                s = r(14084),
                l = r(2265);
            let i = "label";

            function f(e, t) {
                "function" == typeof e ? e(t) : e && (e.current = t)
            }

            function o(e, t) {
                let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i,
                    a = [];
                e.datasets = t.map(t => {
                    let n = e.datasets.find(e => e[r] === t[r]);
                    return !n || !t.data || a.includes(n) ? { ...t
                    } : (a.push(n), Object.assign(n, t), n)
                })
            }
            let u = (0, l.forwardRef)(function(e, t) {
                    let {
                        height: r = 150,
                        width: a = 300,
                        redraw: n = !1,
                        datasetIdKey: u,
                        type: c,
                        data: d,
                        options: b,
                        plugins: p = [],
                        fallbackContent: g,
                        updateMode: y,
                        ...w
                    } = e, m = (0, l.useRef)(null), h = (0, l.useRef)(), k = () => {
                        m.current && (h.current = new s.kL(m.current, {
                            type: c,
                            data: function(e) {
                                var t;
                                let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i,
                                    a = {
                                        labels: [],
                                        datasets: []
                                    };
                                return t = e.labels, a.labels = t, o(a, e.datasets, r), a
                            }(d, u),
                            options: b && { ...b
                            },
                            plugins: p
                        }), f(t, h.current))
                    }, v = () => {
                        f(t, null), h.current && (h.current.destroy(), h.current = null)
                    };
                    return (0, l.useEffect)(() => {
                        !n && h.current && b && function(e, t) {
                            let r = e.options;
                            r && t && Object.assign(r, t)
                        }(h.current, b)
                    }, [n, b]), (0, l.useEffect)(() => {
                        if (!n && h.current) {
                            var e, t;
                            e = h.current.config.data, t = d.labels, e.labels = t
                        }
                    }, [n, d.labels]), (0, l.useEffect)(() => {
                        !n && h.current && d.datasets && o(h.current.config.data, d.datasets, u)
                    }, [n, d.datasets]), (0, l.useEffect)(() => {
                        h.current && (n ? (v(), setTimeout(k)) : h.current.update(y))
                    }, [n, b, d.labels, d.datasets, y]), (0, l.useEffect)(() => {
                        h.current && (v(), setTimeout(k))
                    }, [c]), (0, l.useEffect)(() => (k(), () => v()), []), l.createElement("canvas", Object.assign({
                        ref: m,
                        role: "img",
                        height: r,
                        width: a
                    }, w), g)
                }),
                c = (a = s.vn, s.kL.register(a), (0, l.forwardRef)((e, t) => l.createElement(u, Object.assign({}, e, {
                    ref: t,
                    type: "bar"
                }))));
            r(27648);
            var d = r(43949);
            r(36760);
            var b = r(2648);
            s.kL.register(s.qi, s.tt, s.ZL, s.vn, s.uw, s.f$, s.od, s.jn, s.Dx, s.u, s.De);
            let p = {
                data: {
                    labels: ["10/24", "11/24", "12/24", "1/25", "2/25", "3/25", "4/25", "5/25", "6/25", "7/25", "8/25", "9/25"].map(e => new Date("1/".concat(e))).map(e => new Date(e).toLocaleDateString()),
                    datasets: [{
                        label: "Total Supply",
                        data: Array(12).fill(!0).map((e, t) => 422e7 - 42e6 * t).reverse(),
                        borderColor: Array(12).fill(!0).map((e, t) => 0 == t ? "#F2DB57" : "#fff"),
                        backgroundColor: Array(12).fill(!0).map((e, t) => 0 == t ? "#F2DB57aa" : "#eee"),
                        color: "white",
                        borderWidth: 2,
                        borderRadius: 3,
                        borderSkipped: !1
                    }]
                },
                options: {
                    responsive: !0,
                    plugins: {
                        legend: {
                            position: "top",
                            labels: {
                                color: "white",
                                font: {
                                    family: "futura-outline"
                                }
                            },
                            title: {
                                color: "white"
                            }
                        },
                        title: {
                            display: !1
                        }
                    },
                    scales: {
                        x: {
                            ticks: {
                                color: "white",
                                font: {
                                    family: "futura-outline"
                                }
                            }
                        },
                        y: {
                            ticks: {
                                color: "white",
                                font: {
                                    family: "futura-outline"
                                },
                                callback: function(e, t) {
                                    return e / 1e9 + " B"
                                }
                            }
                        }
                    }
                },
                className: "relative z-40 mt-8 md:mx-12 grow"
            };
            var g = () => {
                let {
                    t: e
                } = (0, d.$G)();
                return (0, n.jsxs)("div", {
                    className: "z-20 p-0 overflow-hidden text-center text-white border-[#ffffff44] border-2 border-dashed rounded-xl bg-[#00000055] grow flex flex-col justify-between lg:min-w-[600px] xl:min-w-[700px]",
                    "data-sentry-component": "StakingChart",
                    "data-sentry-source-file": "staking-chart.jsx",
                    children: [(0, n.jsx)(c, { ...p,
                        "data-sentry-element": "Bar",
                        "data-sentry-source-file": "staking-chart.jsx"
                    }), (0, n.jsx)(b.Z, {
                        "data-sentry-element": "StakingStatisticsSmall",
                        "data-sentry-source-file": "staking-chart.jsx"
                    })]
                })
            }
        }
    }
]);