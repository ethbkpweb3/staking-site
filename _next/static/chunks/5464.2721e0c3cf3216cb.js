! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "45f1306f-272f-467c-a22c-8004f1d40e4e", e._sentryDebugIdIdentifier = "sentry-dbid-45f1306f-272f-467c-a22c-8004f1d40e4e")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5464], {
        63321: function(e, t, n) {
            n.d(t, {
                D: function() {
                    return d
                },
                G: function() {
                    return p
                }
            });
            var a = n(57437),
                s = n(2265),
                i = n(43867),
                l = n(11301),
                r = n(17745),
                u = n(28243);
            let o = (e, t) => ({
                    currentPrice: {
                        address: (0, r.jk)(t),
                        chainId: t,
                        abi: l,
                        functionName: "currentPrice"
                    },
                    nativeLatestPrice: {
                        address: (0, r.jk)(t),
                        chainId: t,
                        abi: l,
                        functionName: "getLatestEthPrice"
                    }
                }),
                d = (0, s.createContext)({}),
                p = e => {
                    let {
                        children: t
                    } = e, [n, l] = (0, s.useState)(o(void 0)), [r, p] = (0, s.useState)({}), {
                        chain: c
                    } = (0, s.useContext)(u.Z), {
                        address: y
                    } = (0, i.mA)();
                    (0, s.useEffect)(() => {
                        l(o(y, c))
                    }, [y, c]);
                    let m = (0, i.Dm)({
                        contracts: Object.values(n),
                        watch: !0
                    });
                    return (0, s.useEffect)(() => {
                        p({ ...Object.keys(n).map((e, t) => ({
                                function: e,
                                data: m.data ? m.data[t] : void 0
                            })).reduce((e, t) => (e[t.function] = t.data, e), {})
                        })
                    }, [m.data]), (0, a.jsx)(d.Provider, {
                        value: r,
                        "data-sentry-element": "unknown",
                        "data-sentry-component": "EthereumContextProvider",
                        "data-sentry-source-file": "eth.context.jsx",
                        children: t
                    })
                }
        },
        45464: function(e, t, n) {
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            });
            var a = n(57437),
                s = n(43949),
                i = n(1779),
                l = n(36760),
                r = n.n(l);
            let u = e => {
                    let {
                        title: t,
                        content: n,
                        className: l,
                        renderFn: r
                    } = e, {
                        t: u
                    } = (0, s.$G)();
                    return (0, a.jsxs)("div", {
                        className: l,
                        children: [(0, a.jsx)("p", {
                            className: "mb-2 text-base opacity-50",
                            children: u(t)
                        }), (0, a.jsx)("p", {
                            className: "font-serif text-3xl",
                            children: (0, a.jsx)(i.Z, {
                                value: n || 0,
                                renderValue: r
                            })
                        })]
                    })
                },
                o = e => {
                    let {
                        className: t,
                        button: n,
                        children: i
                    } = e, {
                        t: l
                    } = (0, s.$G)();
                    return (0, a.jsxs)("div", {
                        className: r()("flex flex-col border-[#ffffff44] border-2 border-dashed rounded-xl bg-dark text-white p-3 flex-1 bg-[#00000055]", t),
                        children: [(0, a.jsx)("div", {
                            className: "flex-1",
                            children: i
                        }), (0, a.jsx)("button", {
                            className: r()("w-full !text-base !py-2 cursor-not-allowed opacity-50", null == n ? void 0 : n.cName),
                            children: l(null == n ? void 0 : n.text)
                        })]
                    })
                };

            function d(e) {
                let {
                    keyVal: t,
                    message: n,
                    button: i
                } = e, {
                    t: l
                } = (0, s.$G)();
                return (0, a.jsxs)(o, {
                    button: i,
                    children: [(0, a.jsx)("div", {
                        className: "flex gap-4",
                        children: (0, a.jsx)(u, {
                            title: t.label,
                            content: t.value,
                            className: "flex-1 mb-3"
                        })
                    }), n && (0, a.jsx)("i", {
                        className: r()("block mb-3", n.cName),
                        children: l(n.text)
                    })]
                })
            }

            function p(e) {
                let {
                    value: t
                } = e;
                return (0, a.jsx)(d, {
                    keyVal: {
                        label: "presaleForm.unclaimedRewards",
                        value: t
                    },
                    message: {
                        cName: "opacity-75",
                        text: "staking.claimRewardsInfo"
                    },
                    button: {
                        text: "Claim rewards",
                        cName: "primary-button !bg-green"
                    }
                })
            }
            var c = n(88203);
            n(41854), n(28243);
            var y = n(8946),
                m = n.n(y),
                f = n(2265),
                b = n(15408),
                x = n(6832),
                h = n(5578);
            n(44762);
            var v = n(6484),
                g = n(27892),
                T = n(43867),
                k = n(11301),
                w = n(17745);
            let j = e => {
                var t, n;
                return null == e ? void 0 : null === (n = e.data) || void 0 === n ? void 0 : null === (t = n.account) || void 0 === t ? void 0 : t.address
            };
            var S = n(33145);
            let N = e => {
                    let {
                        title: t,
                        content: n,
                        className: l,
                        renderFn: r
                    } = e, {
                        t: u
                    } = (0, s.$G)();
                    return (0, a.jsxs)("div", {
                        className: l,
                        children: [(0, a.jsx)("p", {
                            className: "mb-2 text-base opacity-50",
                            children: u(t)
                        }), (0, a.jsx)("p", {
                            className: "font-serif text-3xl",
                            children: (0, a.jsx)(i.Z, {
                                value: n || 0,
                                renderValue: r
                            })
                        })]
                    })
                },
                M = e => {
                    let {
                        className: t,
                        children: n
                    } = e, {
                        t: i
                    } = (0, s.$G)();
                    return (0, a.jsx)("div", {
                        className: r()("flex flex-col border-[#ffffff44] border-2 border-dashed rounded-xl bg-dark text-white p-3 flex-1 bg-[#00000055]", t),
                        children: n
                    })
                };

            function E(e) {
                let {
                    chain: t,
                    setChain: n
                } = e;
                return (0, a.jsxs)("label", {
                    className: "inline-flex items-center gap-3 cursor-pointer",
                    children: [(0, a.jsx)("span", {
                        className: "w-8 font-serif select-none",
                        children: "SOL" === t ? "SOL" : "ETH"
                    }), (0, a.jsx)("input", {
                        type: "checkbox",
                        value: "",
                        checked: "SOL" === t,
                        class: "sr-only peer",
                        onChange: e => {
                            let {
                                currentTarget: t
                            } = e;
                            return t.checked ? n("SOL") : n("ETH")
                        }
                    }), (0, a.jsxs)("div", {
                        className: r()("peer-checked:after:translate-x-8 rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:start-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all", "peer-focus:outline-none peer-focus:ring-4 peer peer-checked:bg-[#9945FF] peer-checked:ring-[#9945FF44] bg-[#73d7e2] ring-[#73d7e244]", "relative w-16 h-8 rounded-full flex justify-between items-center"),
                        children: [(0, a.jsx)(S.default, {
                            src: "/assets/chains/sol.png",
                            width: 24,
                            height: 24,
                            className: "ml-1 select-none"
                        }), (0, a.jsx)(S.default, {
                            src: "/assets/chains/eth.png",
                            width: 24,
                            height: 24,
                            className: "mr-1 select-none"
                        })]
                    })]
                })
            }

            function C(e) {
                let {
                    solData: t,
                    ethData: n
                } = e;
                window.solData = t;
                let i = {
                        SOL: t,
                        ETH: n
                    },
                    [l, u] = (0, f.useState)(t > n ? "SOL" : "ETH"),
                    [o, d] = (0, f.useState)(i[l] || 0),
                    p = function(e) {
                        let {
                            t
                        } = (0, s.$G)(), n = (0, b.O)(), [a, i] = (0, f.useState)(), [l, r] = (0, f.useState)(!1), [u, o] = (0, f.useState)(!1), {
                            program: d
                        } = (0, g.on)((0, x.z)());
                        return {
                            stake: (0, f.useCallback)(async e => {
                                if (d) try {
                                    return r(!0), await (0, h.JT)({
                                        program: d,
                                        wallet: n,
                                        amount: +e
                                    }), o(!0), setTimeout(() => {
                                        o(!1), v.queryClient.invalidateQueries({
                                            queryKey: ["solState", n.publicKey.toString()]
                                        })
                                    }, 5e3), r(!1), !0
                                } catch (e) {
                                    var a, s;
                                    return console.log(e), i((null == e ? void 0 : null === (a = e.error) || void 0 === a ? void 0 : a.toString()) || (null == e ? void 0 : null === (s = e.message) || void 0 === s ? void 0 : s.substr(0, 88)) || t("globals.somethingWentWrong")), setTimeout(() => {
                                        i()
                                    }, 5e3), r(!1), !1
                                }
                            }, [n, e, d]),
                            stakeError: a,
                            isStaking: l,
                            staked: u
                        }
                    }(o),
                    y = function() {
                        var e;
                        let [t, n] = (0, f.useState)(), [a, s] = (0, f.useState)(!1), [i, l] = (0, f.useState)(!1), r = (0, T.py)(), {
                            chain: u
                        } = (0, T.LN)(), o = (0, T.GG)({
                            address: (0, w.jk)(null == u ? void 0 : u.id),
                            chainId: null == u ? void 0 : u.id,
                            abi: k,
                            functionName: "stakeTokens",
                            onError: e => {
                                n(e.details || e.shortMessage), s(!1), null == o || o.reset(), setTimeout(() => n(), 5e3)
                            }
                        }), d = (e, t) => {
                            s(!1), l(!0), setTimeout(() => l(!1), 5e3), v.queryClient.invalidateQueries({
                                queryKey: ["ethState", j(r)]
                            }), o.reset()
                        };
                        return (0, T.BX)({
                            hash: null === (e = o.data) || void 0 === e ? void 0 : e.hash,
                            onSuccess: e => d(e.transactionHash, e.logs)
                        }), {
                            stake: (0, f.useMemo)(() => async e => (s(!0), o.write({
                                args: [e]
                            })), [o]),
                            isStaking: a,
                            staked: i,
                            stakeError: t
                        }
                    }(o),
                    {
                        t: S
                    } = (0, s.$G)(),
                    C = {
                        SOL: p.isStaking,
                        ETH: y.isStaking
                    },
                    P = {
                        SOL: p.staked,
                        ETH: y.staked
                    };
                return (0, f.useEffect)(() => {
                    d(i[l])
                }, [l, t, n]), (0, a.jsxs)(M, {
                    children: [(0, a.jsxs)("div", {
                        className: "flex flex-col flex-1 gap-1",
                        children: [(0, a.jsx)("div", {
                            className: "flex gap-4",
                            children: (0, a.jsx)(N, {
                                title: "staking.stakeable",
                                content: t + n,
                                className: "flex-1 mb-1"
                            })
                        }), (0, a.jsxs)("div", {
                            className: "flex items-center justify-between border-t border-[#ffffff44] border-dashed pt-2",
                            children: [(0, a.jsxs)("div", {
                                className: "flex items-center justify-start gap-2 font-serif text-lg",
                                children: [(0, a.jsxs)("span", {
                                    children: [m().startCase(S("globals.max")), ":"]
                                }), (0, a.jsx)("span", {
                                    children: i[l] || 0
                                })]
                            }), (0, a.jsx)(E, {
                                chain: l,
                                setChain: u
                            })]
                        }), (0, a.jsx)("input", {
                            type: "number",
                            className: "w-full p-2 mt-2 text-xl bg-[#00000088] border-dashed border border-[#ffffff44] rounded-lg",
                            min: "0",
                            max: i[l] || 0,
                            onChange: e => {
                                let {
                                    target: t
                                } = e;
                                d(Math.min(t.value, i[l]))
                            },
                            value: o
                        })]
                    }), (0, a.jsx)("button", {
                        className: r()("w-full !text-base !py-2 primary-button !bg-blue", {
                            "cursor-not-allowed opacity-50": 0 === o
                        }),
                        onClick: () => {
                            ("SOL" === l ? p.stake : y.stake)(o)
                        },
                        children: C[l] ? (0, a.jsx)(c.Z, {
                            className: "text-white"
                        }) : S(P[l] ? "presaleForm.stakeSuccessful" : "presaleForm.stake")
                    })]
                })
            }

            function P(e) {
                let {
                    value: t
                } = e;
                return (0, a.jsx)(d, {
                    keyVal: {
                        label: "staking.staked",
                        value: t
                    },
                    message: {
                        cName: "text-red",
                        text: "staking.unstakeWarning"
                    },
                    button: {
                        text: "presaleForm.unstake",
                        cName: "secondary-button"
                    }
                })
            }

            function W(e) {
                let {
                    value: t
                } = e;
                return (0, a.jsx)(d, {
                    keyVal: {
                        label: "staking.withdrawable",
                        value: 0
                    },
                    button: {
                        text: "staking.withdraw",
                        cName: "secondary-button"
                    }
                })
            }
            var I = n(30245);
            let O = e => {
                    var t, n;
                    return null == e ? void 0 : null === (n = e.data) || void 0 === n ? void 0 : null === (t = n.account) || void 0 === t ? void 0 : t.address
                },
                D = e => {
                    var t;
                    return null == e ? void 0 : null === (t = e.publicKey) || void 0 === t ? void 0 : t.toString()
                },
                L = {
                    totalSold: 0,
                    remainingToStake: 0,
                    totalRewards: 0
                };

            function A() {
                let e = (0, x.z)(),
                    t = (0, T.py)(),
                    {
                        data: n
                    } = (0, T.aM)({
                        queryKey: ["solState", D(e)],
                        queryFn: async () => D(e) ? (await I.Z.post("user-state", {
                            solWallet: D(e),
                            ethWallet: void 0
                        })).data : L
                    }),
                    {
                        data: s
                    } = (0, T.aM)({
                        queryKey: ["ethState", O(t)],
                        queryFn: async () => O(t) ? (await I.Z.post("user-state", {
                            solWallet: void 0,
                            ethWallet: O(t)
                        })).data : L
                    });
                return (0, a.jsxs)("div", {
                    className: "grid grid-cols-12 md:[&>div]:col-span-6 [&>div]:col-span-12 gap-4 relative",
                    "data-sentry-component": "StakingPanels",
                    "data-sentry-source-file": "index.jsx",
                    children: [(0, a.jsx)(C, {
                        solData: null == n ? void 0 : n.remainingToStake,
                        ethData: null == s ? void 0 : s.remainingToStake,
                        "data-sentry-element": "StakePanel",
                        "data-sentry-source-file": "index.jsx"
                    }), (0, a.jsx)(P, {
                        value: (null == n ? void 0 : n.totalSold) + (null == s ? void 0 : s.totalSold) - ((null == n ? void 0 : n.remainingToStake) + (null == s ? void 0 : s.remainingToStake)),
                        "data-sentry-element": "UnstakePanel",
                        "data-sentry-source-file": "index.jsx"
                    }), (0, a.jsx)(p, {
                        value: (null == n ? void 0 : n.totalRewards) + (null == s ? void 0 : s.totalRewards),
                        "data-sentry-element": "ClaimPanel",
                        "data-sentry-source-file": "index.jsx"
                    }), (0, a.jsx)(W, {
                        value: 0,
                        "data-sentry-element": "WithdrawPanel",
                        "data-sentry-source-file": "index.jsx"
                    }), !(null == t ? void 0 : t.data) && !(null == e ? void 0 : e.publicKey) && (0, a.jsx)("div", {
                        className: "absolute w-[calc(100%+50px)] h-[calc(100%+50px)] -m-[25px] backdrop-blur top-0 z-20"
                    })]
                })
            }
        },
        6484: function(e, t, n) {
            let a;
            n.r(t), n.d(t, {
                default: function() {
                    return C
                },
                queryClient: function() {
                    return E
                }
            });
            var s, i, l, r = n(57437),
                u = n(2265),
                o = n(46550),
                d = n(43949),
                p = n(47830),
                c = n(86454),
                y = n(54968),
                m = n(2396),
                f = n(44156),
                b = n(4298),
                x = n(11867),
                h = n(25223),
                v = n(41854),
                g = n(67872),
                T = n(67148),
                k = n(43867),
                w = n(51814),
                j = n(29827),
                S = n(63321),
                N = n(28243),
                M = n(44762);
            n(42060), null != (a = null == (a = (null === (l = window) || void 0 === l ? void 0 : null === (i = l.location) || void 0 === i ? void 0 : null === (s = i.pathname) || void 0 === s ? void 0 : s.length) > 1 ? window.location.pathname.substr(1) : void 0) ? void 0 : a.split("/")[0]) || (a = "en"), o.ZP.use(d.Db).init({
                resources: p.Z,
                fallbackLng: ["en"],
                interpolation: {
                    escapeValue: !1
                }
            });
            let E = new w.S;

            function C(e) {
                let {
                    children: t
                } = e, [n] = (0, u.useState)(M.Sl ? c.Q.Devnet : c.Q.Mainnet), a = (0, u.useMemo)(() => M.ZE, []), s = (0, u.useMemo)(() => [new b.O, new x.e({
                    network: n
                }), new h.X], [n]);
                return (0, r.jsx)(y.U, {
                    endpoint: a,
                    children: (0, r.jsx)(m.n, {
                        wallets: s,
                        autoConnect: !0,
                        children: (0, r.jsx)(f.s, {
                            children: (0, r.jsx)(k.eM, {
                                config: v.ZB,
                                children: (0, r.jsx)(g.pj, {
                                    chains: v.oY.chains,
                                    theme: (0, T.W)(),
                                    children: (0, r.jsx)(j.aH, {
                                        client: E,
                                        children: (0, r.jsx)(N.z, {
                                            children: (0, r.jsx)(S.G, {
                                                children: t
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            }
        },
        11301: function(e) {
            e.exports = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"string","name":"solanaAddress","type":"string"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"bool","name":"stake","type":"bool"}],"name":"BridgeSolana","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"StakeTokens","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"ethAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"ethPrice","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokenPrice","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"bool","name":"stake","type":"bool"}],"name":"TokensBoughtWithEth","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"usdAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokenPrice","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"bool","name":"stake","type":"bool"},{"indexed":false,"internalType":"uint8","name":"decimals","type":"uint8"}],"name":"TokensBoughtWithUsd","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"DAIInterface","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"USDCInterface","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"USDTInterface","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WETHInterface","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"aggregatorInterface","outputs":[{"internalType":"contract Aggregator","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"solanaAddress","type":"string"},{"internalType":"bool","name":"stake","type":"bool"}],"name":"bridgeFromSolana","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"daiAmount","type":"uint256"},{"internalType":"bool","name":"stake","type":"bool"}],"name":"buyWithDAI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"stake","type":"bool"}],"name":"buyWithEth","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"usdcAmount","type":"uint256"},{"internalType":"bool","name":"stake","type":"bool"}],"name":"buyWithUSDC","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"usdtAmount","type":"uint256"},{"internalType":"bool","name":"stake","type":"bool"}],"name":"buyWithUSDT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"wethAmount","type":"uint256"},{"internalType":"bool","name":"stake","type":"bool"}],"name":"buyWithWETH","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newPaymentWallet","type":"address"}],"name":"changePaymentWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_currentPrice","type":"uint256"}],"name":"changePrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"currentPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLatestEthPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"hasBridgedFromSolana","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paymentWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"stakeTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawNative","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenContractAddress","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]')
        }
    }
]);