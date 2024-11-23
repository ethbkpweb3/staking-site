! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "ed2a9bbd-d1c0-4e9f-a612-6596e71ef59f", e._sentryDebugIdIdentifier = "sentry-dbid-ed2a9bbd-d1c0-4e9f-a612-6596e71ef59f")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7898], {
        47898: function(e, t, n) {
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n(57437),
                l = n(1779),
                s = n(67872),
                r = n(33145),
                d = n(43949),
                o = n(43867);
            n(64299), n(36760);
            var c = n(30245),
                i = n(99372);
            let u = e => {
                    var t, n;
                    return null == e ? void 0 : null === (n = e.data) || void 0 === n ? void 0 : null === (t = n.account) || void 0 === t ? void 0 : t.address
                },
                b = {
                    totalSold: 0,
                    remainingToStake: 0,
                    totalRewards: 0
                };

            function f() {
                let {
                    t: e
                } = (0, d.$G)(), t = (0, o.py)(), {
                    data: n
                } = (0, o.aM)({
                    queryKey: ["ethState", u(t)],
                    refetchInterval: 3e4,
                    queryFn: async () => u(t) ? (await c.Z.post("/user-state", {
                        solWallet: void 0,
                        ethWallet: u(t)
                    })).data : b
                });
                return (0, a.jsxs)("div", {
                    className: "relative flex flex-col items-start justify-center gap-4 max-w-[600px] border-[#ffffff44] border-2 border-dashed rounded-xl flex-1 bg-dark p-3 bg-[#00000055]",
                    "data-sentry-component": "EthHoldings",
                    "data-sentry-source-file": "eth-holdings.jsx",
                    children: [(0, a.jsx)(r.default, {
                        src: "/assets/chains/evms.webp",
                        height: 256,
                        width: 1113,
                        className: "h-[24px] mr-3 mt-3 w-auto absolute top-0 right-0",
                        alt: "EVM chains",
                        "data-sentry-element": "Image",
                        "data-sentry-source-file": "eth-holdings.jsx"
                    }), (0, a.jsx)("h4", {
                        className: "opacity-75",
                        children: e("dashboard.evm")
                    }), (0, a.jsx)("span", {
                        className: "mb-2 font-serif text-4xl grow",
                        children: (0, a.jsx)(l.Z, {
                            value: null == n ? void 0 : n.totalSold,
                            "data-sentry-element": "TweenyNumber",
                            "data-sentry-source-file": "eth-holdings.jsx"
                        })
                    }), !(null == t ? void 0 : t.data) && (0, a.jsx)(h, {})]
                })
            }

            function h() {
                let {
                    t: e
                } = (0, d.$G)();
                return (0, a.jsx)("div", {
                    className: "absolute md:w-[calc(100%+50px)] w-[calc(100%+10px)] h-[calc(100%+50px)] md:-mt-[5px] md:-mb-[25px] -mx-[25px] mt-[25px] backdrop-blur flex items-center justify-center",
                    "data-sentry-component": "ConnectWalletOverlay",
                    "data-sentry-source-file": "eth-holdings.jsx",
                    children: (0, a.jsx)(s.NL.Custom, {
                        "data-sentry-element": "unknown",
                        "data-sentry-source-file": "eth-holdings.jsx",
                        children: t => {
                            let {
                                account: n,
                                chain: l,
                                openChainModal: s,
                                openConnectModal: r,
                                mounted: d
                            } = t;
                            return (0, a.jsx)(a.Fragment, {
                                children: d && n && l ? l.unsupported ? (0, a.jsx)("button", {
                                    onClick: s,
                                    type: "button",
                                    className: "!text-lg primary-button !bg-[#48cbd9]",
                                    children: e("presaleForm.wrongNetwork")
                                }) : (0, a.jsx)("button", {
                                    type: "button",
                                    className: "!text-lg primary-button !bg-[#48cbd9]",
                                    children: e("globals.connectEthWallet")
                                }) : (0, a.jsx)("button", {
                                    onClick: () => {
                                        (0, i.Z)("Connecting wallet"), r()
                                    },
                                    id: "connect-button",
                                    type: "button",
                                    className: "!text-lg primary-button !bg-[#48cbd9] relative !-left-[12.5px]",
                                    children: e("globals.connectEthWallet")
                                })
                            })
                        }
                    })
                })
            }
        }
    }
]);