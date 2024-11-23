! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "d950a4a1-cbd8-4bf5-a9f1-55c4bc031ac0", e._sentryDebugIdIdentifier = "sentry-dbid-d950a4a1-cbd8-4bf5-a9f1-55c4bc031ac0")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2515], {
        88203: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return i
                }
            });
            var a = n(57437),
                s = n(36760),
                r = n.n(s);

            function i(e) {
                let t = r()("m-auto text-primary w-7 h-7 animate-spin", e.className);
                return (0, a.jsxs)("svg", { ...e,
                    className: t,
                    viewBox: "0 0 24 24",
                    "data-sentry-element": "svg",
                    "data-sentry-component": "Spinner",
                    "data-sentry-source-file": "spinner.jsx",
                    children: [(0, a.jsx)("circle", {
                        className: "opacity-10",
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "currentColor",
                        stroke: "currentColor",
                        strokeWidth: "4",
                        "data-sentry-element": "circle",
                        "data-sentry-source-file": "spinner.jsx"
                    }), (0, a.jsx)("path", {
                        className: "opacity-75",
                        fill: "currentColor",
                        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
                        "data-sentry-element": "path",
                        "data-sentry-source-file": "spinner.jsx"
                    })]
                })
            }
        },
        86757: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return h
                }
            });
            var a = n(57437),
                s = n(2265),
                r = n(46575),
                i = n(24786),
                o = n(27648),
                l = n(33145),
                c = n(43949),
                d = n(47830),
                u = n(8946),
                m = n.n(u),
                p = n(36760),
                f = n.n(p);

            function h(e) {
                let {
                    subDomain: t = ""
                } = e, {
                    t: n,
                    i18n: u
                } = (0, c.$G)(), [p, h] = (0, s.useState)(u.language);
                return (0, s.useEffect)(() => {
                    var e;
                    h(null !== (e = u.language) && void 0 !== e ? e : "en")
                }, [null == u ? void 0 : u.language]), (0, a.jsxs)(r.v, {
                    as: "span",
                    className: "relative inline text-left h-[30px]",
                    "data-sentry-element": "Menu",
                    "data-sentry-component": "LanguageDropdown",
                    "data-sentry-source-file": "language-dropdown.jsx",
                    children: [(0, a.jsxs)(r.v.Button, {
                        className: "inline-flex items-center justify-center gap-4 !text-2xl font-semibold bg-transparent text-white",
                        "data-sentry-element": "unknown",
                        "data-sentry-source-file": "language-dropdown.jsx",
                        children: [(0, a.jsx)(l.default, {
                            src: "/flags/".concat(p, ".svg"),
                            width: 30,
                            height: 30,
                            alt: p,
                            className: "inline h-[30px] w-[30px] rounded-[15px] object-cover",
                            "data-sentry-element": "Image",
                            "data-sentry-source-file": "language-dropdown.jsx"
                        }), (0, a.jsx)("span", {
                            className: "inline font-serif sm:hidden",
                            children: p.toLocaleLowerCase()
                        })]
                    }), (0, a.jsx)(i.u, {
                        as: s.Fragment,
                        enter: "transition ease-out duration-100",
                        enterFrom: "transform opacity-0 scale-95",
                        enterTo: "transform opacity-100 scale-100",
                        leave: "transition ease-in duration-75",
                        leaveFrom: "transform opacity-100 scale-100",
                        leaveTo: "transform opacity-0 scale-95",
                        "data-sentry-element": "Transition",
                        "data-sentry-source-file": "language-dropdown.jsx",
                        children: (0, a.jsx)(r.v.Items, {
                            className: "absolute z-50 w-40 mt-0 origin-top-left translate-y-0 bg-white rounded-md shadow-lg sm:right-0 sm:origin-top-right sm:w-20 focus:outline-none",
                            "data-sentry-element": "unknown",
                            "data-sentry-source-file": "language-dropdown.jsx",
                            children: (0, a.jsx)("div", {
                                className: "py-1 px-3 max-h-[75vh] overflow-auto flex flex-col items-start justify-start",
                                children: m().chain(d.Z).keys().sort().value().map(e => (0, a.jsx)(r.v.Item, {
                                    children: n => {
                                        let {
                                            active: s
                                        } = n;
                                        return (0, a.jsxs)(o.default, {
                                            href: "/".concat(e, "/").concat(t),
                                            className: f()("text-black block py-2 text-lg flex items-center justify-between"),
                                            children: [(0, a.jsx)(l.default, {
                                                src: "/flags/".concat(e, ".svg"),
                                                width: 30,
                                                height: 30,
                                                alt: e,
                                                className: "inline h-[36px] w-[36px] rounded-[18px] mr-4 object-cover border-black border p-[1px] "
                                            }), (0, a.jsx)("span", {
                                                className: "inline font-serif sm:hidden",
                                                children: e.toLocaleLowerCase()
                                            })]
                                        })
                                    }
                                }, "lang-item-".concat(e)))
                            })
                        })
                    })]
                })
            }
        },
        32058: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return f
                }
            });
            var a = n(57437),
                s = n(2265),
                r = n(33145),
                i = n(36760),
                o = n.n(i),
                l = n(43867),
                c = n(41854),
                d = n(28243),
                u = n(17745);
            let m = "dapp.preferredNetwork",
                p = e => e === c.h9.id;

            function f(e) {
                var t, n;
                let {
                    onClick: i
                } = e, {
                    chain: f,
                    setChain: h
                } = (0, s.useContext)(d.Z), {
                    switchNetwork: g
                } = (0, l.g0)(), x = (0, l.LN)(), {
                    data: y
                } = (0, l.py)();
                (0, s.useEffect)(() => {
                    (0, u.XD)(f) && f && g && g(f)
                }, [f, null == y ? void 0 : null === (t = y.account) || void 0 === t ? void 0 : t.address]);
                let v = async e => {
                    var t;
                    setTimeout(() => i(e), 0), localStorage.setItem(m, e), h(e), (null == x ? void 0 : null === (t = x.chain) || void 0 === t ? void 0 : t.id) && (0, u.XD)(e) && await g(e)
                };
                return (0, s.useEffect)(() => {
                    var e;
                    (0, u.XD)(localStorage.getItem(m)) && (null == x ? void 0 : null === (e = x.chain) || void 0 === e ? void 0 : e.id) && h(x.chain.id)
                }, [null == x ? void 0 : null === (n = x.chain) || void 0 === n ? void 0 : n.id]), (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)("div", {
                        className: "grid w-full grid-cols-12 gap-x-2 gap-y-2 sm:gap-x-3 sm:gap-y-3",
                        children: c.PE.map(e => {
                            let {
                                id: t,
                                name: n
                            } = e;
                            return (0, a.jsxs)("div", {
                                className: o()("flex justify-center relative items-center flex-col col-span-4 sm:col-span-4 gap-1 sm:gap-2 sm:py-4 py-2", "border-2 border-[#00000000] transition-colors hover:border-[#387] bg-[#fff] cursor-pointer rounded-lg ", {
                                    "!border-[#054]": f === t
                                }, {
                                    "!cursor-not-allowed": p(t)
                                }),
                                onClick: () => !p(t) && v(t),
                                children: [p(t) && (0, a.jsx)("span", {
                                    className: o()("absolute bg-blue p-2 py-1 font-condensed uppercase text-sm text-white -right-4 -top-4 rotate-[5deg] rounded"),
                                    children: "Coming soon!"
                                }), (0, a.jsx)(r.default, {
                                    src: "/assets/chains/".concat((0, u.qQ)(t)),
                                    className: o()("object-cover p-[2px] bg-transparent", {
                                        "!cursor-not-allowed opacity-50": p(t)
                                    }),
                                    width: 50,
                                    height: 50,
                                    alt: n || "Chain logo"
                                }), (0, a.jsx)("span", {
                                    className: o()("sm:text-lg", {
                                        "!cursor-not-allowed opacity-50": p(t)
                                    }),
                                    children: _.startCase((0, u.pp)(t))
                                })]
                            }, t)
                        })
                    })
                })
            }
        },
        19790: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return m
                }
            });
            var a = n(57437);
            n(17745);
            var s = n(67872);
            n(64299);
            var r = n(43949),
                i = n(41854),
                o = n(72941),
                l = n(36760),
                c = n.n(l),
                d = n(99372);
            let u = e => e === i.h9.id;

            function m(e) {
                let {
                    chain: t,
                    className: n
                } = e, {
                    t: l
                } = (0, r.$G)(), m = (0, o.h)();
                return u(t) ? (0, a.jsxs)("div", {
                    className: "relative mb-12",
                    children: [(0, a.jsx)("button", {
                        className: c()("primary-button cursor-not-allowed opacity-50 relative", n),
                        disabled: !0,
                        children: l("presaleForm.connectWallet")
                    }), (0, a.jsx)("span", {
                        className: c()("absolute bg-blue p-2 py-1 font-condensed uppercase text-sm text-white -right-4 -top-4 rotate-[5deg] rounded"),
                        children: "Coming soon!"
                    })]
                }) : t === i.$D.id ? (0, a.jsx)("button", {
                    className: "primary-button " + n,
                    onClick: () => {
                        (0, d.Z)("Connecting wallet"), m.setVisible(!0)
                    },
                    id: "connect-button",
                    children: l("presaleForm.connectWallet")
                }) : (0, a.jsx)(s.NL.Custom, {
                    children: e => {
                        let {
                            account: t,
                            chain: n,
                            openChainModal: s,
                            openConnectModal: r,
                            mounted: i
                        } = e;
                        return (0, a.jsx)(a.Fragment, {
                            children: i && t && n ? n.unsupported ? (0, a.jsx)("button", {
                                onClick: s,
                                type: "button",
                                className: "primary-button",
                                children: l("presaleForm.wrongNetwork")
                            }) : (0, a.jsxs)("button", {
                                type: "button",
                                className: "primary-button",
                                children: [l("presaleForm.connectWallet"), "."]
                            }) : (0, a.jsx)("button", {
                                onClick: () => {
                                    (0, d.Z)("Connecting wallet"), r()
                                },
                                id: "connect-button",
                                type: "button",
                                className: "primary-button",
                                children: l("presaleForm.connectWallet")
                            })
                        })
                    }
                })
            }
        },
        94446: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return i
                },
                h: function() {
                    return r
                }
            });
            var a = n(57437);
            n(33145);
            var s = n(56873);

            function r() {
                s.Z.timeline({}).add({
                    targets: ["#splash"],
                    opacity: [1, 0],
                    duration: 100,
                    delay: 100,
                    complete: () => {
                        document.body.classList.add("mounted");
                        try {
                            document.querySelector("#splash").style.display = "none", document.querySelector("#splash-mob").style.display = "none"
                        } catch (e) {
                            console.log(e)
                        }
                    }
                })
            }

            function i() {
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("div", {
                        className: "overflow-hidden hidden md:flex w-screen h-[100vh] fixed z-50 cabin-bg justify-center items-center",
                        id: "splash",
                        children: (0, a.jsx)("div", {
                            id: "splash-swim-container",
                            className: "w-[273px] h-[493px] z-10 flex justify-center items-center",
                            children: (0, a.jsx)("div", {
                                id: "splash-swim",
                                height: 270,
                                width: 300,
                                className: "w-full h-full m-auto",
                                alt: "Aquadoge"
                            })
                        })
                    }), (0, a.jsx)("div", {
                        className: "md:hidden overflow-hidden w-screen h-[100vh] fixed z-50 cabin-bg flex justify-center items-center splash",
                        id: "splash-mob",
                        children: (0, a.jsx)("div", {
                            id: "splash-swim-container",
                            className: "w-[137px] h-[246px] z-10 flex justify-center items-center",
                            children: (0, a.jsx)("div", {
                                id: "splash-swim",
                                height: 270,
                                width: 300,
                                className: "w-full h-full m-auto",
                                alt: "Aquadoge"
                            })
                        })
                    })]
                })
            }
        },
        5578: function(e, t, n) {
            n.d(t, {
                DQ: function() {
                    return c
                },
                JT: function() {
                    return u
                },
                _$: function() {
                    return d
                }
            });
            var a = n(64024),
                s = n(39387);
            let r = async (e, t, n, r, i, o, l) => await e.methods.buyTokens(new s.BN(i), o, l).accounts({
                    presale: t,
                    buyer: n,
                    paymentWallet: r,
                    systemProgram: a.SystemProgram.programId
                }).instruction(),
                i = async (e, t, n, s) => await t.methods.claimEvm(s).accounts({
                    presale: e,
                    user: n,
                    systemProgram: a.SystemProgram.programId
                }).instruction(),
                o = async (e, t, n, r) => await t.methods.stakeTokens(new s.BN(r)).accounts({
                    presale: e,
                    user: n,
                    systemProgram: a.SystemProgram.programId
                }).instruction();
            var l = n(44762);
            let c = async e => {
                    let {
                        wallet: t,
                        amount: n,
                        program: s,
                        shouldStake: i,
                        evmAddress: o
                    } = e;
                    if (!t.publicKey) return;
                    let c = new a.Transaction;
                    c.add(await r(s, l.ZN, t.publicKey, l.t, n, i, o));
                    let d = await t.sendTransaction(c, s.provider.connection, {
                        skipPreflight: !0
                    });
                    return await s.provider.connection.confirmTransaction(d, "confirmed"), d
                },
                d = async e => {
                    let {
                        wallet: t,
                        program: n,
                        evmAddress: s
                    } = e;
                    if (!t.publicKey) return;
                    let r = new a.Transaction;
                    r.add(await i(l.ZN, n, t.publicKey, s));
                    let o = await t.sendTransaction(r, n.provider.connection, {
                        skipPreflight: !0
                    });
                    return await n.provider.connection.confirmTransaction(o, "confirmed"), o
                },
                u = async e => {
                    let {
                        wallet: t,
                        program: n,
                        amount: s
                    } = e;
                    if (!t.publicKey) return;
                    let r = new a.Transaction;
                    r.add(await o(l.ZN, n, t.publicKey, s));
                    let i = await t.sendTransaction(r, n.provider.connection, {
                        skipPreflight: !0
                    });
                    return await n.provider.connection.confirmTransaction(i, "confirmed"), i
                }
        },
        26084: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return l
                }
            });
            var a = n(57437),
                s = n(51772),
                r = n(36760),
                i = n.n(r),
                o = n(43949);

            function l() {
                let {
                    t: e
                } = (0, o.$G)();
                return (0, a.jsx)("div", {
                    className: i()("ticker-panel sticky text-primary absolute bottom-0 w-screen z-20 text-xl p-0 flex gap-0"),
                    children: (0, a.jsx)(s.Z, {
                        pauseOnHover: !0,
                        children: [, , , , , ].fill(!0).map((t, n) => (0, a.jsxs)("span", {
                            className: "flex items-center gap-2 py-2 mx-8",
                            children: [(0, a.jsx)("span", {
                                className: i()("rounded-[50%] h-[6px] w-[6px] bg-green")
                            }), e("ticker.items.".concat(n + 1))]
                        }, "item-".concat(n)))
                    })
                })
            }
            n(33145)
        },
        99319: function(e, t, n) {
            n(57437), n(2265), n(36760), n(8946)
        },
        99372: function(e, t) {
            t.Z = function(e) {
                var t, n;
                null === (n = window) || void 0 === n || null === (t = n.umami) || void 0 === t || t.track(e)
            }
        }
    }
]);