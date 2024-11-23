! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "c9b99bec-0c29-45da-ad3c-c7df1c08e279", e._sentryDebugIdIdentifier = "sentry-dbid-c9b99bec-0c29-45da-ad3c-c7df1c08e279")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [437], {
        1779: function(e, t, a) {
            var s = a(57437),
                l = a(2265),
                r = a(59666);
            t.Z = function(e) {
                let {
                    value: t = 0,
                    renderValue: a = e => Math.floor(e).toLocaleString(),
                    duration: n = 1e3,
                    delay: d = 0
                } = e, [i, c] = (0, l.useState)(0), o = e => {
                    new r.kX({
                        to: i
                    }).easing(r.oY.Quintic.Out).delay(d).to({
                        to: e
                    }, n).onUpdate(e => {
                        c(e.to)
                    }).start()
                };
                return (0, l.useEffect)(() => {
                    o(t)
                }, [t]), (0, s.jsx)(l.Fragment, {
                    children: a(i)
                })
            }
        },
        84054: function(e, t, a) {
            a.d(t, {
                Z: function() {
                    return L
                }
            });
            var s = a(57437),
                l = a(33145),
                r = a(43949);
            a(27648), a(2265);
            var n = a(36760),
                d = a.n(n);
            a(2648), a(17745), ["Bsc", "Eth", "Base", "Sol"].map(e => e);
            var i = a(30166);
            a(1779);
            var c = a(43867);
            a(64299);
            var o = a(6832);
            a(95397);
            var x = a(8198),
                f = a(30245),
                u = a(44762),
                h = a(39502),
                m = a(88203);
            let p = e => e.filter(e => e.tokens_sold > 0).map(e => ("Solana" === e.chain && (e.token_price = (0, h.b)(e.token_price, 6)), e)),
                j = "text-[#5E5340aa] font-serif text-xs text-left border-b border-[#5E5340aa] [&>th]:px-2 [&>td]:px-2 [&>th]:pb-1 [&>td]:pb-1 [&>th]:font-bold",
                g = "text-black [&>td]:px-2",
                y = "w-full text-sm",
                b = e => {
                    var t, a;
                    return null == e ? void 0 : null === (a = e.data) || void 0 === a ? void 0 : null === (t = a.account) || void 0 === t ? void 0 : t.address
                },
                k = e => {
                    var t;
                    return null == e ? void 0 : null === (t = e.publicKey) || void 0 === t ? void 0 : t.toString()
                };

            function w() {
                let {
                    t: e
                } = (0, r.$G)();
                return (0, s.jsxs)("div", {
                    className: "relative flex flex-col items-stretch justify-center gap-2 md:max-w-[400px] md:min-w-[400px]",
                    "data-sentry-component": "ReceiptPanel",
                    "data-sentry-source-file": "receipt-panel.jsx",
                    children: [(0, s.jsx)("h4", {
                        className: "opacity-75",
                        children: e("dashboard.purchaseHistory")
                    }), (0, s.jsxs)("div", {
                        className: "flex flex-col justify-between gap-4 w-full grow flex-1 p-8 pt-6 text-black bg-white rounded drop-shadow-black max-h-[400px] overflow-auto",
                        children: [(0, s.jsxs)("div", {
                            className: "flex items-center gap-8",
                            children: [(0, s.jsx)("hr", {
                                className: "h-[2px] bg-[#5E5340aa] grow"
                            }), (0, s.jsx)(l.default, {
                                src: "/assets/doge-and-sons.webp",
                                width: 667,
                                height: 416,
                                className: "w-[80px]",
                                "data-sentry-element": "Image",
                                "data-sentry-source-file": "receipt-panel.jsx"
                            }), (0, s.jsx)("hr", {
                                className: "h-[2px] bg-[#5E5340aa] grow"
                            })]
                        }), (0, s.jsx)(v, {
                            "data-sentry-element": "ReceiptTable",
                            "data-sentry-source-file": "receipt-panel.jsx"
                        })]
                    })]
                })
            }

            function v() {
                let {
                    t: e
                } = (0, r.$G)(), t = (0, c.py)(), a = (0, o.z)(), {
                    data: l
                } = (0, x.a)({
                    queryKey: ["solRewards", k(a)],
                    refetchInterval: 3e4,
                    queryFn: async () => {
                        if (!k(a)) return 0; {
                            var e;
                            let t = await f.Z.post("user-state", {
                                solWallet: k(a),
                                ethWallet: void 0
                            });
                            return (null == t ? void 0 : null === (e = t.data) || void 0 === e ? void 0 : e.totalRewards) || 0
                        }
                    }
                }), {
                    data: n
                } = (0, x.a)({
                    queryKey: ["ethRewards", b(t)],
                    refetchInterval: 3e4,
                    queryFn: async () => {
                        if (!b(t)) return 0; {
                            var e;
                            let a = await f.Z.post("user-state", {
                                solWallet: void 0,
                                ethWallet: b(t)
                            });
                            return (null == a ? void 0 : null === (e = a.data) || void 0 === e ? void 0 : e.totalRewards) || 0
                        }
                    }
                }), i = n + l, {
                    data: w
                } = (0, x.a)({
                    queryKey: ["receipt"],
                    refetchInterval: 3e4,
                    queryFn: async () => {
                        let e = await f.Z.post("buy-history", {
                            users: [b(t), k(a)].filter(e => !_.isUndefined(e))
                        });
                        return e.data.length > 0 ? p(e.data) : []
                    }
                }), v = (0, h.b)(u.CJ, 6);
                return w ? (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsxs)("table", {
                        className: d()(y),
                        children: [(0, s.jsx)("thead", {
                            children: (0, s.jsxs)("tr", {
                                className: d()(j),
                                children: [(0, s.jsx)("th", {
                                    className: "min-w-[100px]",
                                    children: e("receipt.amount")
                                }), (0, s.jsx)("th", {
                                    className: "",
                                    children: e("receipt.price")
                                }), (0, s.jsx)("th", {
                                    className: "text-right",
                                    children: e("receipt.value")
                                })]
                            })
                        }), (0, s.jsxs)("tbody", {
                            children: [w.map((e, t) => {
                                let {
                                    token_price: a,
                                    tokens_sold: l,
                                    total_raised: r
                                } = e;
                                return (0, s.jsxs)("tr", {
                                    className: d()(g),
                                    children: [(0, s.jsx)("td", {
                                        className: "w-[150px]",
                                        children: l.toLocaleString()
                                    }), (0, s.jsxs)("td", {
                                        className: "flex items-center justify-between gap-1 w-[90px]",
                                        children: [(0, s.jsx)("span", {
                                            children: "$"
                                        }), (0, s.jsx)("span", {
                                            children: a
                                        })]
                                    }), (0, s.jsx)("td", {
                                        className: "w-full",
                                        children: (0, s.jsxs)("div", {
                                            className: "w-[90px] flex justify-between items-center float-right",
                                            children: [(0, s.jsx)("span", {
                                                children: "$"
                                            }), (0, s.jsx)("span", {
                                                children: r.toFixed(2).toLocaleString()
                                            })]
                                        })
                                    })]
                                }, "purchase-".concat(t))
                            }), (0, s.jsxs)("tr", {
                                className: d()(g, "border-t border-[#5E5340aa] [&>td]:pt-1"),
                                children: [(0, s.jsx)("td", {
                                    children: w.reduce((e, t) => e + t.tokens_sold, 0).toLocaleString()
                                }), (0, s.jsx)("td", {
                                    className: "flex w-[90px]"
                                }), (0, s.jsx)("td", {
                                    className: "w-full",
                                    children: (0, s.jsxs)("div", {
                                        className: "w-[90px] flex justify-between items-center float-right",
                                        children: [(0, s.jsx)("span", {
                                            children: "$"
                                        }), (0, s.jsx)("span", {
                                            children: w.reduce((e, t) => e + t.total_raised, 0).toFixed(2).toLocaleString()
                                        })]
                                    })
                                })]
                            })]
                        })]
                    }), (0, s.jsxs)("table", {
                        className: d()(y),
                        children: [(0, s.jsx)("thead", {
                            children: (0, s.jsx)("tr", {
                                className: d()(j),
                                children: (0, s.jsx)("td", {
                                    children: e("receipt.rewards")
                                })
                            })
                        }), (0, s.jsx)("tbody", {
                            children: (0, s.jsxs)("tr", {
                                className: d()(g),
                                children: [(0, s.jsx)("td", {
                                    children: i ? i.toLocaleString() : "~"
                                }), (0, s.jsx)("td", {}), (0, s.jsx)("td", {
                                    className: "w-full",
                                    children: (0, s.jsxs)("div", {
                                        className: "w-[90px] flex justify-between items-center float-right",
                                        children: [(0, s.jsx)("span", {
                                            children: "$"
                                        }), (0, s.jsx)("span", {
                                            children: (i * v).toFixed(2)
                                        })]
                                    })
                                })]
                            })
                        })]
                    }), (0, s.jsxs)("div", {
                        children: [(0, s.jsx)("span", {
                            className: d()(j, "block px-2 pb-1"),
                            children: e("receipt.currentValue")
                        }), (0, s.jsx)("table", {
                            className: d()(y),
                            children: (0, s.jsx)("tbody", {
                                children: (0, s.jsxs)("tr", {
                                    className: d()(g, "[&>td]:!text-green-600 [&>td]:!font-bold"),
                                    children: [(0, s.jsx)("td", {
                                        className: "min-w-[100px]",
                                        children: (i + w.reduce((e, t) => e + t.tokens_sold, 0)).toLocaleString()
                                    }), (0, s.jsxs)("td", {
                                        className: "flex items-center justify-between gap-1 w-[90px]",
                                        children: [(0, s.jsx)("span", {
                                            children: "$"
                                        }), (0, s.jsx)("span", {
                                            children: v
                                        })]
                                    }), (0, s.jsx)("td", {
                                        className: "w-full",
                                        children: (0, s.jsxs)("div", {
                                            className: "w-[90px] flex justify-between items-center float-right",
                                            children: [(0, s.jsx)("span", {
                                                children: "$"
                                            }), (0, s.jsx)("span", {
                                                children: (i * v + w.reduce((e, t) => e + t.tokens_sold * v, 0)).toFixed(2).toLocaleString()
                                            })]
                                        })
                                    })]
                                })
                            })
                        })]
                    })]
                }) : (0, s.jsx)(m.Z, {
                    className: "!text-[#5E5340aa]"
                })
            }
            var N = a(14084);
            N.kL.register(N.qi, N.jI, N.uw, N.f$, N.od, N.jn, N.Dx, N.u, N.De), ["You", "Bronze ($AQUA 100k)", "Silver ($AQUA 250k)", "Gold ($AQUA 500k)", "Diamond ($AQUA 875k)", "Black ($AQUA 1.5M)"].map(e => e);
            let S = (0, i.default)(() => a.e(7898).then(a.bind(a, 47898)), {
                    loadableGenerated: {
                        webpack: () => [47898]
                    },
                    ssr: !1
                }),
                q = (0, i.default)(() => a.e(9327).then(a.bind(a, 39327)), {
                    loadableGenerated: {
                        webpack: () => [39327]
                    },
                    ssr: !1
                });

            function L() {
                let {
                    t: e
                } = (0, r.$G)();
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)("div", {
                        className: "flex-col hidden w-full h-full gap-12 px-0 pt-16 pt-20 pb-4 md:flex",
                        children: (0, s.jsx)("div", {
                            className: "flex flex-col items-start justify-start w-full gap-4",
                            children: (0, s.jsxs)("div", {
                                className: "flex items-stretch justify-start w-full gap-10 px-6 pt-0 pb-8 border-b-2 border-[#ffffff44] border-dashed text-white",
                                children: [(0, s.jsxs)("div", {
                                    className: "flex flex-col gap-6 px-0 w-full text-white max-w-[700px] border-dashed",
                                    children: [(0, s.jsxs)("div", {
                                        className: "flex flex-col gap-3",
                                        children: [(0, s.jsx)("h1", {
                                            className: "font-serif text-3xl border-b-2 border-[#ffffff44] border-dashed pb-3",
                                            children: e("globals.dashboard")
                                        }), (0, s.jsx)("span", {
                                            className: "pr-2 text-base opacity-85",
                                            children: e("dashboard.description")
                                        })]
                                    }), (0, s.jsx)(S, {
                                        "data-sentry-element": "EthHoldings",
                                        "data-sentry-source-file": "dashboard.jsx"
                                    }), (0, s.jsx)(q, {
                                        "data-sentry-element": "SolHoldings",
                                        "data-sentry-source-file": "dashboard.jsx"
                                    })]
                                }), (0, s.jsx)("div", {
                                    className: "flex",
                                    children: (0, s.jsx)(w, {
                                        "data-sentry-element": "ReceiptPanel",
                                        "data-sentry-source-file": "dashboard.jsx"
                                    })
                                })]
                            })
                        })
                    }), (0, s.jsx)("div", {
                        className: "relative flex flex-col items-center justify-center w-full pt-16 md:hidden",
                        children: (0, s.jsxs)("div", {
                            className: "flex items-stretch flex-col [&>div]:flex-1 w-full w-full gap-10 p-4 pb-8 text-white",
                            children: [(0, s.jsxs)("div", {
                                className: "flex flex-col gap-4",
                                children: [(0, s.jsx)("h1", {
                                    className: "font-serif text-3xl",
                                    children: e("globals.dashboard")
                                }), (0, s.jsx)("span", {
                                    className: "pr-2 opacity-85",
                                    children: e("dashboard.description")
                                })]
                            }), (0, s.jsx)(q, {
                                "data-sentry-element": "SolHoldings",
                                "data-sentry-source-file": "dashboard.jsx"
                            }), (0, s.jsx)(S, {
                                "data-sentry-element": "EthHoldings",
                                "data-sentry-source-file": "dashboard.jsx"
                            }), (0, s.jsx)(w, {
                                "data-sentry-element": "ReceiptPanel",
                                "data-sentry-source-file": "dashboard.jsx"
                            })]
                        })
                    })]
                })
            }
        },
        95397: function(e, t, a) {
            a.d(t, {
                Z: function() {
                    return u
                }
            });
            var s = a(57437),
                l = a(43949),
                r = a(58475),
                n = a(36760),
                d = a.n(n),
                i = a(15408),
                c = a(2265),
                o = a(4012),
                x = a(5578),
                f = a(27892);

            function u(e) {
                let {
                    visible: t,
                    setVisible: a,
                    address: n = "0x1234  ...  5678"
                } = e, {
                    t: u
                } = (0, l.$G)(), h = (0, i.O)(), [m, p] = (0, c.useState)(), {
                    program: j
                } = (0, f.on)(h), g = !m || !(0, o.U)(m);
                return (0, s.jsxs)(r.u_, {
                    show: t,
                    onClose: () => a(!1),
                    className: d()("bg-[#00000066] [&>div]:max-w-[750px] [&>div>div]:bg-[#000000aa] [&>div>div]:border-2 [&>div>div]:border-[#00000055] [&>div>div]:backdrop-blur flex justify-center items-center [&>div]:h-[unset]", "sm:p-8 p-1"),
                    "data-sentry-element": "Modal",
                    "data-sentry-component": "EvmWalletModal",
                    "data-sentry-source-file": "evm-wallet-modal.jsx",
                    children: [(0, s.jsx)(r.u_.Header, {
                        className: "[&>h3]:text-primary p-8 pb-2 [&>h3]:text-3xl font-serif [&>button]:text-3xl [&>button]:text-primary [&>h3]:text-primary border-transparent",
                        onClick: e => {
                            e.preventDefault(), e.stopPropagation()
                        },
                        "data-sentry-element": "unknown",
                        "data-sentry-source-file": "evm-wallet-modal.jsx",
                        children: u("dashboard.associatedEvmAddress")
                    }), (0, s.jsx)(r.u_.Body, {
                        className: "py-5 ",
                        onClick: e => {
                            e.preventDefault(), e.stopPropagation()
                        },
                        "data-sentry-element": "unknown",
                        "data-sentry-source-file": "evm-wallet-modal.jsx",
                        children: (0, s.jsxs)("div", {
                            className: "p-2 max-h-[67vh] flex flex-col gap-2 text-base text-gray-300 leading-loose tracking-wider whitespace-pre-line",
                            children: [u("dashboard.associatedEvmAddressInfo"), (0, s.jsxs)("div", {
                                className: "flex flex-col gap-1 mt-4",
                                children: [(0, s.jsxs)("span", {
                                    children: [u("dashboard.associatedEvmAddress"), ":"]
                                }), (0, s.jsx)("input", {
                                    className: "w-full bg-[#ffffffaa] rounded-lg px-3 py-1 text-black",
                                    onChange: e => p(e.target.value),
                                    defaultValue: n
                                })]
                            })]
                        })
                    }), (0, s.jsxs)(r.u_.Footer, {
                        className: "flex justify-end gap-2 px-5 pb-5 bg-transparent border-transparent",
                        "data-sentry-element": "unknown",
                        "data-sentry-source-file": "evm-wallet-modal.jsx",
                        children: [(0, s.jsx)(r.zx, {
                            onClick: () => !g && (0, x._$)({
                                wallet: h,
                                program: j,
                                evmAddress: m
                            }),
                            className: d()("px-4 py-1 bg-primary border-2 border-black rounded-lg text-black font-bold [&>span]:relative [&>span]:text-base", {
                                "opacity-30 cursor-not-allowed": g
                            }),
                            "data-sentry-element": "Button",
                            "data-sentry-source-file": "evm-wallet-modal.jsx",
                            children: u("globals.update")
                        }), (0, s.jsx)(r.zx, {
                            onClick: () => a(!1),
                            className: "px-4 py-1 bg-transparent border-2 border-primary rounded-lg text-primary font-bold [&>span]:relative [&>span]:text-base",
                            "data-sentry-element": "Button",
                            "data-sentry-source-file": "evm-wallet-modal.jsx",
                            children: u("globals.cancel")
                        })]
                    })]
                })
            }
            a(30245)
        },
        58459: function(e, t, a) {
            a.d(t, {
                Z: function() {
                    return h
                }
            });
            var s = a(57437),
                l = a(33145),
                r = a(27648),
                n = a(86757);
            a(99319);
            var d = a(58475),
                i = a(11140),
                c = a(43949),
                o = a(36760),
                x = a.n(o);
            a(26084);
            var f = a(2265),
                u = a(99376);

            function h() {
                let {
                    t: e
                } = (0, c.$G)(), [t, a] = (0, f.useState)(!1);
                (0, f.useEffect)(() => {
                    setTimeout(() => {
                        localStorage.getItem("urlCheckerDismissed") || a(!0)
                    }, 8e3)
                }, []), (0, u.useRouter)();
                let [o, h] = (0, f.useState)(!1);
                return (0, s.jsxs)("header", {
                    className: "fixed z-40 block w-full backdrop-blur backdrop-brightness-75",
                    "data-sentry-component": "Header",
                    "data-sentry-source-file": "staking-header.jsx",
                    children: [t && (0, s.jsxs)(d.FN, {
                        className: "rounded-[0] justify-between items-center [&>button]:items-center [&>button]:justify-center [&>button]:bg-primary [&>button]:text-black bg-primary py-3 [&>button]:h-4",
                        children: [(0, s.jsx)("div", {
                            className: "ml-3 text-sm font-normal",
                            children: (0, s.jsx)(c.cC, {
                                i18nKey: "hero.confirmUrl",
                                components: [(0, s.jsx)(r.default, {
                                    target: "_blank",
                                    href: "https://aquadoge.com",
                                    className: "underline text-purple",
                                    children: "https://aquadoge.com"
                                }, "link-1"), (0, s.jsx)(r.default, {
                                    target: "_blank",
                                    href: "https://t.me/officialaquadoge",
                                    className: "underline text-purple",
                                    children: "Telegram"
                                }, "link-2")]
                            })
                        }), (0, s.jsx)(d.FN.Toggle, {
                            onDismiss: () => {
                                a(!1), localStorage.setItem("urlCheckerDismissed", !0)
                            }
                        })]
                    }), (0, s.jsx)("div", {
                        className: "flex-col hidden w-full lg:flex",
                        children: (0, s.jsxs)("div", {
                            className: "flex flex-row items-center justify-between w-full px-3",
                            children: [(0, s.jsx)(r.default, {
                                href: "..",
                                className: "h-full w-auto my-[-10px] tracking-normal text-primary flex items-center",
                                "data-sentry-element": "Link",
                                "data-sentry-source-file": "staking-header.jsx",
                                children: (0, s.jsx)(l.default, {
                                    src: "/assets/logo.webp",
                                    width: 85,
                                    height: 41,
                                    className: "relative w-auto py-1 m-auto",
                                    alt: e("globals.header") || "Aquadoge logo",
                                    "data-sentry-element": "Image",
                                    "data-sentry-source-file": "staking-header.jsx"
                                })
                            }), (0, s.jsx)("div", {
                                className: "items-center grow justify-center hidden sm:flex gap-x-8 max-w-[90vw] [&>a:hover]:text-primary [&>a:hover]:border-primary [&>a]:border-b-2 [&>a]:border-transparent uppercase [&>a]:transition-colors font-condensed text-base tracking-widest text-white font-bold"
                            }), (0, s.jsxs)("div", {
                                className: "flex items-center gap-5 text-2xl text-primary",
                                children: [(0, s.jsx)(r.default, {
                                    href: "https://docs.aquadoge.com/aquadoge-whitepaper",
                                    target: "_blank",
                                    className: x()("relative font-condensed uppercase text-base tracking-widest text-black bg-primary p-1 px-3 rounded hover:bg-white hover:!text-blue hover:!border-blue"),
                                    "data-sentry-element": "Link",
                                    "data-sentry-source-file": "staking-header.jsx",
                                    children: e("globals.whitePaper")
                                }), (0, s.jsx)(n.Z, {
                                    "data-sentry-element": "LanguageDropdown",
                                    "data-sentry-source-file": "staking-header.jsx"
                                }), (0, s.jsx)(r.default, {
                                    href: "https://instagram.com/aqua.doge",
                                    target: "_blank",
                                    "data-sentry-element": "Link",
                                    "data-sentry-source-file": "staking-header.jsx",
                                    children: (0, s.jsx)(i.Vs6, {
                                        "data-sentry-element": "BsInstagram",
                                        "data-sentry-source-file": "staking-header.jsx"
                                    })
                                }), (0, s.jsx)(r.default, {
                                    href: "https://t.me/officialaquadoge",
                                    target: "_blank",
                                    "data-sentry-element": "Link",
                                    "data-sentry-source-file": "staking-header.jsx",
                                    children: (0, s.jsx)(i.iEj, {
                                        "data-sentry-element": "BsTelegram",
                                        "data-sentry-source-file": "staking-header.jsx"
                                    })
                                }), (0, s.jsx)(r.default, {
                                    href: "https://x.com/team_aquadoge",
                                    target: "_blank",
                                    "data-sentry-element": "Link",
                                    "data-sentry-source-file": "staking-header.jsx",
                                    children: (0, s.jsx)(i.AMt, {
                                        "data-sentry-element": "BsTwitterX",
                                        "data-sentry-source-file": "staking-header.jsx"
                                    })
                                }), (0, s.jsx)(r.default, {
                                    href: "https://www.tiktok.com/@aquadogeofficial",
                                    target: "_blank",
                                    "data-sentry-element": "Link",
                                    "data-sentry-source-file": "staking-header.jsx",
                                    children: (0, s.jsx)(i.k9h, {
                                        "data-sentry-element": "BsTiktok",
                                        "data-sentry-source-file": "staking-header.jsx"
                                    })
                                })]
                            })]
                        })
                    }), (0, s.jsx)("div", {
                        className: x()("flex flex-col w-full lg:hidden", {
                            "h-screen bg-[#000000aa]": o
                        }),
                        children: (0, s.jsxs)("div", {
                            className: "flex flex-col w-full",
                            children: [(0, s.jsxs)("div", {
                                className: "h-[60px] flex flex-row items-center justify-between w-full px-2",
                                children: [(0, s.jsx)(r.default, {
                                    href: "..",
                                    className: "h-[60px] w-auto pr-[5px] tracking-normal text-primary flex items-center",
                                    "data-sentry-element": "Link",
                                    "data-sentry-source-file": "staking-header.jsx",
                                    children: (0, s.jsx)(l.default, {
                                        src: "/assets/logo.webp",
                                        width: 85,
                                        height: 60,
                                        className: "relative h-[60px] w-auto m-auto",
                                        alt: e("globals.header") || "Aquadoge logo",
                                        "data-sentry-element": "Image",
                                        "data-sentry-source-file": "staking-header.jsx"
                                    })
                                }), (0, s.jsx)(p, {
                                    setMenuVisible: h,
                                    isMenuVisible: o,
                                    "data-sentry-element": "MenuButton",
                                    "data-sentry-source-file": "staking-header.jsx"
                                })]
                            }), (0, s.jsxs)("div", {
                                className: x()("hidden flex-col h-[calc(100vh-160px)] items-start justify-start pt-12 gap-10 text-primary text-2xl max-w-sm m-auto", {
                                    "!flex": o
                                }),
                                children: [(0, s.jsx)(n.Z, {
                                    "data-sentry-element": "LanguageDropdown",
                                    "data-sentry-source-file": "staking-header.jsx"
                                }), (0, s.jsx)(r.default, {
                                    href: "/",
                                    className: x()("relative font-serif text-white"),
                                    "data-sentry-element": "Link",
                                    "data-sentry-source-file": "staking-header.jsx",
                                    children: e("globals.home")
                                }), (0, s.jsx)(r.default, {
                                    href: "https://docs.aquadoge.com/aquadoge-whitepaper",
                                    target: "_blank",
                                    className: x()("relative font-serif text-white"),
                                    "data-sentry-element": "Link",
                                    "data-sentry-source-file": "staking-header.jsx",
                                    children: e("globals.whitePaper")
                                }), (0, s.jsxs)("div", {
                                    className: "flex items-center gap-6 text-3xl",
                                    children: [(0, s.jsx)(r.default, {
                                        href: "https://instagram.com/aqua.doge",
                                        target: "_blank",
                                        "data-sentry-element": "Link",
                                        "data-sentry-source-file": "staking-header.jsx",
                                        children: (0, s.jsx)(i.Vs6, {
                                            "data-sentry-element": "BsInstagram",
                                            "data-sentry-source-file": "staking-header.jsx"
                                        })
                                    }), (0, s.jsx)(r.default, {
                                        href: "https://t.me/officialaquadoge",
                                        target: "_blank",
                                        "data-sentry-element": "Link",
                                        "data-sentry-source-file": "staking-header.jsx",
                                        children: (0, s.jsx)(i.iEj, {
                                            "data-sentry-element": "BsTelegram",
                                            "data-sentry-source-file": "staking-header.jsx"
                                        })
                                    }), (0, s.jsx)(r.default, {
                                        href: "https://x.com/team_aquadoge",
                                        target: "_blank",
                                        "data-sentry-element": "Link",
                                        "data-sentry-source-file": "staking-header.jsx",
                                        children: (0, s.jsx)(i.AMt, {
                                            "data-sentry-element": "BsTwitterX",
                                            "data-sentry-source-file": "staking-header.jsx"
                                        })
                                    }), (0, s.jsx)(r.default, {
                                        href: "https://www.tiktok.com/@aquadogeofficial",
                                        target: "_blank",
                                        "data-sentry-element": "Link",
                                        "data-sentry-source-file": "staking-header.jsx",
                                        children: (0, s.jsx)(i.k9h, {
                                            "data-sentry-element": "BsTiktok",
                                            "data-sentry-source-file": "staking-header.jsx"
                                        })
                                    })]
                                })]
                            })]
                        })
                    })]
                })
            }
            let m = "text-4xl text-primary";

            function p(e) {
                let {
                    setMenuVisible: t,
                    isMenuVisible: a
                } = e;
                return a ? (0, s.jsx)(i.z3f, {
                    onClick: () => t(!1),
                    className: x()(m)
                }) : (0, s.jsx)(i.Ps6, {
                    onClick: () => t(!0),
                    className: x()(m)
                })
            }
        },
        2648: function(e, t, a) {
            var s = a(57437);
            a(27648), a(2265);
            var l = a(43949),
                r = a(43867),
                n = a(36760),
                d = a.n(n),
                i = a(30245);
            let c = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                return e > 1e12 ? (e / 1e12).toFixed(1) + "T" : e > 1e9 ? (e / 1e9).toFixed(1) + "B" : e > 1e6 ? (e / 1e6).toFixed(1) + "M" : Math.floor(e).toLocaleString()
            };

            function o(e) {
                let {
                    label: t,
                    content: a,
                    inverted: l
                } = e;
                return (0, s.jsxs)("div", {
                    className: d()("z-20 flex flex-col items-center justify-center gap-2 tracking-wide grow sm:p-4 p-2 sm:py-8", {
                        "bg-white": l
                    }),
                    "data-sentry-component": "Datum",
                    "data-sentry-source-file": "staking-statistics-small.jsx",
                    children: [(0, s.jsxs)("span", {
                        className: d()("text-left text-sm opacity-80 font-serif", {
                            "text-black": l
                        }),
                        children: [t, ":"]
                    }), (0, s.jsx)("span", {
                        className: d()("text-3xl text-left grow font-bold font-serif", {
                            "text-primary": l
                        }),
                        children: _.isUndefined(a) ? "~" : a
                    })]
                })
            }
            t.Z = () => {
                let {
                    t: e
                } = (0, l.$G)(), {
                    data: t
                } = (0, r.aM)({
                    queryKey: ["presaleState"],
                    refetchInterval: 3e4,
                    queryFn: async () => (await i.Z.get("fetch-presale-state", {
                        cache: "no-store"
                    })).data
                });
                return (0, s.jsx)("div", {
                    className: "z-20 w-full overflow-hidden text-center text-white border-[#ffffff44] border-t-2 border-dashed sm:mt-12 sm:w-full",
                    "data-sentry-component": "StakingStatisticsSmall",
                    "data-sentry-source-file": "staking-statistics-small.jsx",
                    children: (0, s.jsxs)("div", {
                        className: "relative z-30 flex flex-col justify-center w-full h-full gap-4 p-0 sm:flex-row sm:gap-2 sm:gap-4 m-auto max-w-[1200px]",
                        children: [(0, s.jsx)(o, {
                            label: e("presaleForm.soldTokens"),
                            content: c(null == t ? void 0 : t.tokens_sold),
                            "data-sentry-element": "Datum",
                            "data-sentry-source-file": "staking-statistics-small.jsx"
                        }), (0, s.jsx)(o, {
                            label: e("presaleForm.totalStakedTokens"),
                            content: c(null == t ? void 0 : t.tokens_staked),
                            "data-sentry-element": "Datum",
                            "data-sentry-source-file": "staking-statistics-small.jsx"
                        }), (0, s.jsx)(o, {
                            label: e("presaleForm.currentAPY"),
                            content: (c(null == t ? void 0 : t.APY) || 0) + "%",
                            inverted: !0,
                            "data-sentry-element": "Datum",
                            "data-sentry-source-file": "staking-statistics-small.jsx"
                        }), (0, s.jsx)(o, {
                            label: e("presaleForm.percentStaked"),
                            content: ((null == t ? void 0 : t.tokens_staked) / (null == t ? void 0 : t.tokens_sold) * 100 || 0).toFixed(1) + "%",
                            "data-sentry-element": "Datum",
                            "data-sentry-source-file": "staking-statistics-small.jsx"
                        })]
                    })
                })
            }
        },
        19720: function(e, t, a) {
            a.d(t, {
                Z: function() {
                    return i
                }
            });
            var s = a(57437),
                l = a(43949),
                r = a(30166);
            let n = (0, r.default)(() => Promise.all([a.e(996), a.e(9395), a.e(5464)]).then(a.bind(a, 45464)), {
                    loadableGenerated: {
                        webpack: () => [45464]
                    },
                    ssr: !1
                }),
                d = (0, r.default)(() => a.e(6181).then(a.bind(a, 26181)), {
                    loadableGenerated: {
                        webpack: () => [26181]
                    },
                    ssr: !1
                });

            function i() {
                let {
                    t: e
                } = (0, l.$G)();
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)("h1", {
                        className: "px-8 pt-0 pb-4 font-serif text-3xl text-white",
                        children: e("globals.staking")
                    }), (0, s.jsxs)("div", {
                        className: "items-stretch hidden w-full h-full gap-6 px-5 pt-2 lg:flex",
                        children: [(0, s.jsx)(n, {
                            "data-sentry-element": "StakingPanels",
                            "data-sentry-source-file": "staking.jsx"
                        }), (0, s.jsx)(d, {
                            "data-sentry-element": "StakingChart",
                            "data-sentry-source-file": "staking.jsx"
                        })]
                    }), (0, s.jsx)("div", {
                        className: "relative flex flex-col items-stretch justify-center w-full gap-5 px-5 pb-12 lg:hidden",
                        children: (0, s.jsx)(n, {
                            "data-sentry-element": "StakingPanels",
                            "data-sentry-source-file": "staking.jsx"
                        })
                    })]
                })
            }
        }
    }
]);