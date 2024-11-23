! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "8e17fbb0-2466-4a98-8299-4c3c84d7471a", e._sentryDebugIdIdentifier = "sentry-dbid-8e17fbb0-2466-4a98-8299-4c3c84d7471a")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9327], {
        39327: function(e, t, s) {
            s.r(t), s.d(t, {
                default: function() {
                    return p
                }
            });
            var l = s(57437),
                a = s(1779),
                n = s(11140),
                r = s(33145),
                d = s(43949);
            s(64299), s(36760);
            var o = s(6832),
                i = s(72941),
                c = s(95397),
                u = s(2265),
                f = s(8198),
                x = s(30245),
                b = s(99372);
            let m = e => {
                    var t;
                    return null == e ? void 0 : null === (t = e.publicKey) || void 0 === t ? void 0 : t.toString()
                },
                y = {
                    totalSold: 0,
                    remainingToStake: 0,
                    totalRewards: 0
                };

            function p() {
                let {
                    t: e
                } = (0, d.$G)(), t = (0, o.z)(), [s, i] = (0, u.useState)(!1), {
                    data: b
                } = (0, f.a)({
                    queryKey: ["evmAddress", null == t ? void 0 : t.publicKey],
                    refetchInterval: 3e4,
                    queryFn: async () => (null == t ? void 0 : t.publicKey) ? (await x.Z.post("linked-wallet", {
                        solAddress: t.publicKey
                    })).data : {}
                }), {
                    data: p
                } = (0, f.a)({
                    queryKey: ["solState", m(t)],
                    refetchInterval: 3e4,
                    queryFn: async () => m(t) ? (await x.Z.post("/user-state", {
                        solWallet: m(t),
                        ethWallet: void 0
                    })).data : y
                });
                return (0, l.jsxs)("div", {
                    className: "relative flex flex-col items-stretch max-w-[600px] justify-center gap-2 border-[#ffffff44] border-2 border-dashed rounded-xl flex-1 bg-dark p-3 bg-[#00000055]",
                    "data-sentry-component": "SolHoldings",
                    "data-sentry-source-file": "sol-holdings.jsx",
                    children: [(0, l.jsx)(c.Z, {
                        visible: s,
                        setVisible: i,
                        address: null == b ? void 0 : b.evm,
                        "data-sentry-element": "EvmWalletModal",
                        "data-sentry-source-file": "sol-holdings.jsx"
                    }), (0, l.jsx)(r.default, {
                        src: "/assets/chains/sol.png",
                        height: 256,
                        width: 256,
                        className: "h-[24px] mt-3 mr-3 w-auto absolute top-0 right-0",
                        alt: "Solana",
                        "data-sentry-element": "Image",
                        "data-sentry-source-file": "sol-holdings.jsx"
                    }), (0, l.jsx)("h4", {
                        className: "opacity-75",
                        children: e("dashboard.sol")
                    }), (0, l.jsx)("span", {
                        className: "mb-0 font-serif text-4xl grow",
                        children: (0, l.jsx)(a.Z, {
                            value: null == p ? void 0 : p.totalSold,
                            "data-sentry-element": "TweenyNumber",
                            "data-sentry-source-file": "sol-holdings.jsx"
                        })
                    }), (0, l.jsxs)("div", {
                        className: "flex flex-col pr-2 mt-0 cursor-pointer",
                        onClick: () => i(!0),
                        children: [(0, l.jsx)("div", {
                            className: "mb-1 text-base font-bold",
                            children: (0, l.jsxs)("div", {
                                className: "flex items-center justify-between",
                                children: [(0, l.jsxs)("span", {
                                    children: [e("dashboard.associatedEvmAddress"), ":"]
                                }), (0, l.jsx)(n.kjE, {
                                    "data-sentry-element": "BsQuestionCircle",
                                    "data-sentry-source-file": "sol-holdings.jsx"
                                })]
                            })
                        }), (0, l.jsxs)("div", {
                            className: "text-base text-[#000000aa] text-center truncate rounded bg-[#ffffffaa] border border-[#00000088] px-2 py-1 relative flex-1 min-h-[34px]",
                            children: [(null == b ? void 0 : b.error) && "No address found.", null == b ? void 0 : b.evm]
                        })]
                    }), !(null == t ? void 0 : t.publicKey) && (0, l.jsx)(h, {})]
                })
            }

            function h() {
                let {
                    t: e
                } = (0, d.$G)(), t = (0, i.h)();
                return (0, l.jsx)("div", {
                    className: "absolute md:w-[calc(100%+50px)] md:w-[calc(100%+30px)] w-[calc(100%+30px)] h-[calc(100%+30px)] md:-mt-[30px] md:-mb-[25px] -mx-[25px] -my-[5px] backdrop-blur flex items-center justify-center",
                    "data-sentry-component": "ConnectWalletOverlay",
                    "data-sentry-source-file": "sol-holdings.jsx",
                    children: (0, l.jsx)("button", {
                        className: "!text-lg primary-button !bg-[#9945FF] !-left-[12.5px] relative",
                        onClick: () => {
                            (0, b.Z)("Connecting wallet"), t.setVisible(!0)
                        },
                        id: "connect-button",
                        children: e("globals.connectSolWallet")
                    })
                })
            }
        }
    }
]);