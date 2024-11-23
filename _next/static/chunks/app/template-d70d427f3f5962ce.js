! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "2078da6f-e2f0-48fa-a155-79ededac41b5", e._sentryDebugIdIdentifier = "sentry-dbid-2078da6f-e2f0-48fa-a155-79ededac41b5")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5489], {
        7913: function(e, t, n) {
            Promise.resolve().then(n.bind(n, 6484))
        },
        63321: function(e, t, n) {
            "use strict";
            n.d(t, {
                D: function() {
                    return y
                },
                G: function() {
                    return l
                }
            });
            var a = n(57437),
                i = n(2265),
                s = n(43867),
                u = n(11301),
                p = n(17745),
                o = n(28243);
            let r = (e, t) => ({
                    currentPrice: {
                        address: (0, p.jk)(t),
                        chainId: t,
                        abi: u,
                        functionName: "currentPrice"
                    },
                    nativeLatestPrice: {
                        address: (0, p.jk)(t),
                        chainId: t,
                        abi: u,
                        functionName: "getLatestEthPrice"
                    }
                }),
                y = (0, i.createContext)({}),
                l = e => {
                    let {
                        children: t
                    } = e, [n, u] = (0, i.useState)(r(void 0)), [p, l] = (0, i.useState)({}), {
                        chain: d
                    } = (0, i.useContext)(o.Z), {
                        address: m
                    } = (0, s.mA)();
                    (0, i.useEffect)(() => {
                        u(r(m, d))
                    }, [m, d]);
                    let c = (0, s.Dm)({
                        contracts: Object.values(n),
                        watch: !0
                    });
                    return (0, i.useEffect)(() => {
                        l({ ...Object.keys(n).map((e, t) => ({
                                function: e,
                                data: c.data ? c.data[t] : void 0
                            })).reduce((e, t) => (e[t.function] = t.data, e), {})
                        })
                    }, [c.data]), (0, a.jsx)(y.Provider, {
                        value: p,
                        "data-sentry-element": "unknown",
                        "data-sentry-component": "EthereumContextProvider",
                        "data-sentry-source-file": "eth.context.jsx",
                        children: t
                    })
                }
        },
        6484: function(e, t, n) {
            "use strict";
            let a;
            n.r(t), n.d(t, {
                default: function() {
                    return C
                },
                queryClient: function() {
                    return j
                }
            });
            var i, s, u, p = n(57437),
                o = n(2265),
                r = n(46550),
                y = n(43949),
                l = n(47830),
                d = n(86454),
                m = n(54968),
                c = n(2396),
                f = n(44156),
                b = n(4298),
                T = n(11867),
                h = n(25223),
                w = n(41854),
                v = n(67872),
                x = n(67148),
                M = n(43867),
                k = n(51814),
                g = n(29827),
                E = n(63321),
                I = n(28243),
                P = n(44762);
            n(42060), null != (a = null == (a = (null === (u = window) || void 0 === u ? void 0 : null === (s = u.location) || void 0 === s ? void 0 : null === (i = s.pathname) || void 0 === i ? void 0 : i.length) > 1 ? window.location.pathname.substr(1) : void 0) ? void 0 : a.split("/")[0]) || (a = "en"), r.ZP.use(y.Db).init({
                resources: l.Z,
                fallbackLng: ["en"],
                interpolation: {
                    escapeValue: !1
                }
            });
            let j = new k.S;

            function C(e) {
                let {
                    children: t
                } = e, [n] = (0, o.useState)(P.Sl ? d.Q.Devnet : d.Q.Mainnet), a = (0, o.useMemo)(() => P.ZE, []), i = (0, o.useMemo)(() => [new b.O, new T.e({
                    network: n
                }), new h.X], [n]);
                return (0, p.jsx)(m.U, {
                    endpoint: a,
                    children: (0, p.jsx)(c.n, {
                        wallets: i,
                        autoConnect: !0,
                        children: (0, p.jsx)(f.s, {
                            children: (0, p.jsx)(M.eM, {
                                config: w.ZB,
                                children: (0, p.jsx)(v.pj, {
                                    chains: w.oY.chains,
                                    theme: (0, x.W)(),
                                    children: (0, p.jsx)(g.aH, {
                                        client: j,
                                        children: (0, p.jsx)(I.z, {
                                            children: (0, p.jsx)(E.G, {
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
            "use strict";
            e.exports = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"string","name":"solanaAddress","type":"string"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"bool","name":"stake","type":"bool"}],"name":"BridgeSolana","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"StakeTokens","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"ethAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"ethPrice","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokenPrice","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"bool","name":"stake","type":"bool"}],"name":"TokensBoughtWithEth","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"usdAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokenPrice","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"bool","name":"stake","type":"bool"},{"indexed":false,"internalType":"uint8","name":"decimals","type":"uint8"}],"name":"TokensBoughtWithUsd","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"DAIInterface","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"USDCInterface","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"USDTInterface","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WETHInterface","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"aggregatorInterface","outputs":[{"internalType":"contract Aggregator","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"solanaAddress","type":"string"},{"internalType":"bool","name":"stake","type":"bool"}],"name":"bridgeFromSolana","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"daiAmount","type":"uint256"},{"internalType":"bool","name":"stake","type":"bool"}],"name":"buyWithDAI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"stake","type":"bool"}],"name":"buyWithEth","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"usdcAmount","type":"uint256"},{"internalType":"bool","name":"stake","type":"bool"}],"name":"buyWithUSDC","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"usdtAmount","type":"uint256"},{"internalType":"bool","name":"stake","type":"bool"}],"name":"buyWithUSDT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"wethAmount","type":"uint256"},{"internalType":"bool","name":"stake","type":"bool"}],"name":"buyWithWETH","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newPaymentWallet","type":"address"}],"name":"changePaymentWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_currentPrice","type":"uint256"}],"name":"changePrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"currentPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLatestEthPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"hasBridgedFromSolana","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paymentWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"stakeTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawNative","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenContractAddress","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]')
        }
    },
    function(e) {
        e.O(0, [996, 1866, 9472, 3814, 1761, 3125, 9167, 2848, 9395, 312, 991, 2971, 5347, 1744], function() {
            return e(e.s = 7913)
        }), _N_E = e.O()
    }
]);