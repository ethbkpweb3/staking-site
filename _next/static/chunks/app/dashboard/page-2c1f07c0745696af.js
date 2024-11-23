! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "b4fd84b3-6a09-430d-86ea-7e9388765f22", e._sentryDebugIdIdentifier = "sentry-dbid-b4fd84b3-6a09-430d-86ea-7e9388765f22")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7702], {
        74637: function(e, n, s) {
            Promise.resolve().then(s.bind(s, 78580))
        },
        78580: function(e, n, s) {
            "use strict";
            s.r(n), s.d(n, {
                default: function() {
                    return h
                }
            });
            var t = s(57437),
                a = s(2265);
            s(94446);
            var i = s(19720),
                d = s(84054),
                l = s(58459),
                c = s(59666),
                u = s(6832),
                r = s(43867),
                o = s(19790),
                f = s(32058),
                x = s(28243),
                b = s(43949);

            function m(e) {
                (0, c.Vx)(e), window.requestAnimationFrame(m)
            }

            function h() {
                (0, a.useEffect)(() => {
                    document.body.classList.add("mounted"), window.requestAnimationFrame(m), n(!0)
                }, []);
                let [e, n] = (0, a.useState)(!1), {
                    t: s
                } = (0, b.$G)(), c = (0, u.z)(), h = (0, r.py)(), {
                    chain: w
                } = (0, a.useContext)(x.Z);
                return (0, t.jsxs)("main", {
                    className: "bg-[#00000044]",
                    children: [(0, t.jsx)(l.Z, {}), (0, t.jsxs)("div", {
                        className: "w-full m-auto max-w-screen-2xl max-h-[unset] md:min-h-screen",
                        children: [(0, t.jsx)(d.Z, {}), (0, t.jsx)(i.Z, {}), e && !(null == h ? void 0 : h.data) && !(null == c ? void 0 : c.publicKey) && (0, t.jsxs)("div", {
                            className: "absolute w-[calc(100%+0px)] bg-[#000000aa] left-0 h-[calc(100%+0px)] backdrop-blur top-0 z-20 flex items-center justify-center",
                            children: [!w && (0, t.jsxs)("div", {
                                className: "w-[400px] flex flex-col gap-2",
                                children: [(0, t.jsxs)("span", {
                                    className: "text-lg text-white",
                                    children: [s("howToBuy.0.header"), ":"]
                                }), (0, t.jsx)(f.Z, {
                                    onClick: () => void 0
                                })]
                            }), w && (0, t.jsx)(o.Z, {
                                chain: w
                            })]
                        })]
                    })]
                })
            }
        }
    },
    function(e) {
        e.O(0, [996, 1779, 1866, 9472, 3814, 1761, 3125, 716, 3972, 327, 7674, 9167, 5726, 2848, 7041, 9666, 3912, 312, 2515, 437, 991, 2971, 5347, 1744], function() {
            return e(e.s = 74637)
        }), _N_E = e.O()
    }
]);