! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "af3ce64b-09c8-441e-8bab-08edef434707", e._sentryDebugIdIdentifier = "sentry-dbid-af3ce64b-09c8-441e-8bab-08edef434707")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9472], {
        67872: function(e, t, n) {
            n.d(t, {
                NL: function() {
                    return nT
                },
                a3: function() {
                    return nS
                },
                pj: function() {
                    return td
                }
            });
            var l, a = n(67148),
                o = n(91180),
                r = n(2265),
                i = n(96945),
                c = n(11903),
                s = n(43867),
                u = n(61994),
                d = n(64314),
                v = n(54887),
                f = n(87922),
                m = n(76327),
                g = n(62061),
                h = n(77014),
                C = n(35819),
                p = n(96095),
                j = (0, i.d)({
                    conditions: {
                        defaultCondition: "smallScreen",
                        conditionNames: ["smallScreen", "largeScreen"],
                        responsiveArray: void 0
                    }
                }),
                b = (0, i.M)({
                    conditions: {
                        defaultCondition: "smallScreen",
                        conditionNames: ["smallScreen", "largeScreen"],
                        responsiveArray: void 0
                    }
                }),
                E = (0, c.$)({
                    conditions: {
                        defaultCondition: "base",
                        conditionNames: ["base", "hover", "active"],
                        responsiveArray: void 0
                    },
                    styles: {
                        background: {
                            values: {
                                accentColor: {
                                    conditions: {
                                        base: "ju367v9i",
                                        hover: "ju367v9j",
                                        active: "ju367v9k"
                                    },
                                    defaultClass: "ju367v9i"
                                },
                                accentColorForeground: {
                                    conditions: {
                                        base: "ju367v9l",
                                        hover: "ju367v9m",
                                        active: "ju367v9n"
                                    },
                                    defaultClass: "ju367v9l"
                                },
                                actionButtonBorder: {
                                    conditions: {
                                        base: "ju367v9o",
                                        hover: "ju367v9p",
                                        active: "ju367v9q"
                                    },
                                    defaultClass: "ju367v9o"
                                },
                                actionButtonBorderMobile: {
                                    conditions: {
                                        base: "ju367v9r",
                                        hover: "ju367v9s",
                                        active: "ju367v9t"
                                    },
                                    defaultClass: "ju367v9r"
                                },
                                actionButtonSecondaryBackground: {
                                    conditions: {
                                        base: "ju367v9u",
                                        hover: "ju367v9v",
                                        active: "ju367v9w"
                                    },
                                    defaultClass: "ju367v9u"
                                },
                                closeButton: {
                                    conditions: {
                                        base: "ju367v9x",
                                        hover: "ju367v9y",
                                        active: "ju367v9z"
                                    },
                                    defaultClass: "ju367v9x"
                                },
                                closeButtonBackground: {
                                    conditions: {
                                        base: "ju367va0",
                                        hover: "ju367va1",
                                        active: "ju367va2"
                                    },
                                    defaultClass: "ju367va0"
                                },
                                connectButtonBackground: {
                                    conditions: {
                                        base: "ju367va3",
                                        hover: "ju367va4",
                                        active: "ju367va5"
                                    },
                                    defaultClass: "ju367va3"
                                },
                                connectButtonBackgroundError: {
                                    conditions: {
                                        base: "ju367va6",
                                        hover: "ju367va7",
                                        active: "ju367va8"
                                    },
                                    defaultClass: "ju367va6"
                                },
                                connectButtonInnerBackground: {
                                    conditions: {
                                        base: "ju367va9",
                                        hover: "ju367vaa",
                                        active: "ju367vab"
                                    },
                                    defaultClass: "ju367va9"
                                },
                                connectButtonText: {
                                    conditions: {
                                        base: "ju367vac",
                                        hover: "ju367vad",
                                        active: "ju367vae"
                                    },
                                    defaultClass: "ju367vac"
                                },
                                connectButtonTextError: {
                                    conditions: {
                                        base: "ju367vaf",
                                        hover: "ju367vag",
                                        active: "ju367vah"
                                    },
                                    defaultClass: "ju367vaf"
                                },
                                connectionIndicator: {
                                    conditions: {
                                        base: "ju367vai",
                                        hover: "ju367vaj",
                                        active: "ju367vak"
                                    },
                                    defaultClass: "ju367vai"
                                },
                                downloadBottomCardBackground: {
                                    conditions: {
                                        base: "ju367val",
                                        hover: "ju367vam",
                                        active: "ju367van"
                                    },
                                    defaultClass: "ju367val"
                                },
                                downloadTopCardBackground: {
                                    conditions: {
                                        base: "ju367vao",
                                        hover: "ju367vap",
                                        active: "ju367vaq"
                                    },
                                    defaultClass: "ju367vao"
                                },
                                error: {
                                    conditions: {
                                        base: "ju367var",
                                        hover: "ju367vas",
                                        active: "ju367vat"
                                    },
                                    defaultClass: "ju367var"
                                },
                                generalBorder: {
                                    conditions: {
                                        base: "ju367vau",
                                        hover: "ju367vav",
                                        active: "ju367vaw"
                                    },
                                    defaultClass: "ju367vau"
                                },
                                generalBorderDim: {
                                    conditions: {
                                        base: "ju367vax",
                                        hover: "ju367vay",
                                        active: "ju367vaz"
                                    },
                                    defaultClass: "ju367vax"
                                },
                                menuItemBackground: {
                                    conditions: {
                                        base: "ju367vb0",
                                        hover: "ju367vb1",
                                        active: "ju367vb2"
                                    },
                                    defaultClass: "ju367vb0"
                                },
                                modalBackdrop: {
                                    conditions: {
                                        base: "ju367vb3",
                                        hover: "ju367vb4",
                                        active: "ju367vb5"
                                    },
                                    defaultClass: "ju367vb3"
                                },
                                modalBackground: {
                                    conditions: {
                                        base: "ju367vb6",
                                        hover: "ju367vb7",
                                        active: "ju367vb8"
                                    },
                                    defaultClass: "ju367vb6"
                                },
                                modalBorder: {
                                    conditions: {
                                        base: "ju367vb9",
                                        hover: "ju367vba",
                                        active: "ju367vbb"
                                    },
                                    defaultClass: "ju367vb9"
                                },
                                modalText: {
                                    conditions: {
                                        base: "ju367vbc",
                                        hover: "ju367vbd",
                                        active: "ju367vbe"
                                    },
                                    defaultClass: "ju367vbc"
                                },
                                modalTextDim: {
                                    conditions: {
                                        base: "ju367vbf",
                                        hover: "ju367vbg",
                                        active: "ju367vbh"
                                    },
                                    defaultClass: "ju367vbf"
                                },
                                modalTextSecondary: {
                                    conditions: {
                                        base: "ju367vbi",
                                        hover: "ju367vbj",
                                        active: "ju367vbk"
                                    },
                                    defaultClass: "ju367vbi"
                                },
                                profileAction: {
                                    conditions: {
                                        base: "ju367vbl",
                                        hover: "ju367vbm",
                                        active: "ju367vbn"
                                    },
                                    defaultClass: "ju367vbl"
                                },
                                profileActionHover: {
                                    conditions: {
                                        base: "ju367vbo",
                                        hover: "ju367vbp",
                                        active: "ju367vbq"
                                    },
                                    defaultClass: "ju367vbo"
                                },
                                profileForeground: {
                                    conditions: {
                                        base: "ju367vbr",
                                        hover: "ju367vbs",
                                        active: "ju367vbt"
                                    },
                                    defaultClass: "ju367vbr"
                                },
                                selectedOptionBorder: {
                                    conditions: {
                                        base: "ju367vbu",
                                        hover: "ju367vbv",
                                        active: "ju367vbw"
                                    },
                                    defaultClass: "ju367vbu"
                                },
                                standby: {
                                    conditions: {
                                        base: "ju367vbx",
                                        hover: "ju367vby",
                                        active: "ju367vbz"
                                    },
                                    defaultClass: "ju367vbx"
                                }
                            }
                        },
                        borderColor: {
                            values: {
                                accentColor: {
                                    conditions: {
                                        base: "ju367vc0",
                                        hover: "ju367vc1",
                                        active: "ju367vc2"
                                    },
                                    defaultClass: "ju367vc0"
                                },
                                accentColorForeground: {
                                    conditions: {
                                        base: "ju367vc3",
                                        hover: "ju367vc4",
                                        active: "ju367vc5"
                                    },
                                    defaultClass: "ju367vc3"
                                },
                                actionButtonBorder: {
                                    conditions: {
                                        base: "ju367vc6",
                                        hover: "ju367vc7",
                                        active: "ju367vc8"
                                    },
                                    defaultClass: "ju367vc6"
                                },
                                actionButtonBorderMobile: {
                                    conditions: {
                                        base: "ju367vc9",
                                        hover: "ju367vca",
                                        active: "ju367vcb"
                                    },
                                    defaultClass: "ju367vc9"
                                },
                                actionButtonSecondaryBackground: {
                                    conditions: {
                                        base: "ju367vcc",
                                        hover: "ju367vcd",
                                        active: "ju367vce"
                                    },
                                    defaultClass: "ju367vcc"
                                },
                                closeButton: {
                                    conditions: {
                                        base: "ju367vcf",
                                        hover: "ju367vcg",
                                        active: "ju367vch"
                                    },
                                    defaultClass: "ju367vcf"
                                },
                                closeButtonBackground: {
                                    conditions: {
                                        base: "ju367vci",
                                        hover: "ju367vcj",
                                        active: "ju367vck"
                                    },
                                    defaultClass: "ju367vci"
                                },
                                connectButtonBackground: {
                                    conditions: {
                                        base: "ju367vcl",
                                        hover: "ju367vcm",
                                        active: "ju367vcn"
                                    },
                                    defaultClass: "ju367vcl"
                                },
                                connectButtonBackgroundError: {
                                    conditions: {
                                        base: "ju367vco",
                                        hover: "ju367vcp",
                                        active: "ju367vcq"
                                    },
                                    defaultClass: "ju367vco"
                                },
                                connectButtonInnerBackground: {
                                    conditions: {
                                        base: "ju367vcr",
                                        hover: "ju367vcs",
                                        active: "ju367vct"
                                    },
                                    defaultClass: "ju367vcr"
                                },
                                connectButtonText: {
                                    conditions: {
                                        base: "ju367vcu",
                                        hover: "ju367vcv",
                                        active: "ju367vcw"
                                    },
                                    defaultClass: "ju367vcu"
                                },
                                connectButtonTextError: {
                                    conditions: {
                                        base: "ju367vcx",
                                        hover: "ju367vcy",
                                        active: "ju367vcz"
                                    },
                                    defaultClass: "ju367vcx"
                                },
                                connectionIndicator: {
                                    conditions: {
                                        base: "ju367vd0",
                                        hover: "ju367vd1",
                                        active: "ju367vd2"
                                    },
                                    defaultClass: "ju367vd0"
                                },
                                downloadBottomCardBackground: {
                                    conditions: {
                                        base: "ju367vd3",
                                        hover: "ju367vd4",
                                        active: "ju367vd5"
                                    },
                                    defaultClass: "ju367vd3"
                                },
                                downloadTopCardBackground: {
                                    conditions: {
                                        base: "ju367vd6",
                                        hover: "ju367vd7",
                                        active: "ju367vd8"
                                    },
                                    defaultClass: "ju367vd6"
                                },
                                error: {
                                    conditions: {
                                        base: "ju367vd9",
                                        hover: "ju367vda",
                                        active: "ju367vdb"
                                    },
                                    defaultClass: "ju367vd9"
                                },
                                generalBorder: {
                                    conditions: {
                                        base: "ju367vdc",
                                        hover: "ju367vdd",
                                        active: "ju367vde"
                                    },
                                    defaultClass: "ju367vdc"
                                },
                                generalBorderDim: {
                                    conditions: {
                                        base: "ju367vdf",
                                        hover: "ju367vdg",
                                        active: "ju367vdh"
                                    },
                                    defaultClass: "ju367vdf"
                                },
                                menuItemBackground: {
                                    conditions: {
                                        base: "ju367vdi",
                                        hover: "ju367vdj",
                                        active: "ju367vdk"
                                    },
                                    defaultClass: "ju367vdi"
                                },
                                modalBackdrop: {
                                    conditions: {
                                        base: "ju367vdl",
                                        hover: "ju367vdm",
                                        active: "ju367vdn"
                                    },
                                    defaultClass: "ju367vdl"
                                },
                                modalBackground: {
                                    conditions: {
                                        base: "ju367vdo",
                                        hover: "ju367vdp",
                                        active: "ju367vdq"
                                    },
                                    defaultClass: "ju367vdo"
                                },
                                modalBorder: {
                                    conditions: {
                                        base: "ju367vdr",
                                        hover: "ju367vds",
                                        active: "ju367vdt"
                                    },
                                    defaultClass: "ju367vdr"
                                },
                                modalText: {
                                    conditions: {
                                        base: "ju367vdu",
                                        hover: "ju367vdv",
                                        active: "ju367vdw"
                                    },
                                    defaultClass: "ju367vdu"
                                },
                                modalTextDim: {
                                    conditions: {
                                        base: "ju367vdx",
                                        hover: "ju367vdy",
                                        active: "ju367vdz"
                                    },
                                    defaultClass: "ju367vdx"
                                },
                                modalTextSecondary: {
                                    conditions: {
                                        base: "ju367ve0",
                                        hover: "ju367ve1",
                                        active: "ju367ve2"
                                    },
                                    defaultClass: "ju367ve0"
                                },
                                profileAction: {
                                    conditions: {
                                        base: "ju367ve3",
                                        hover: "ju367ve4",
                                        active: "ju367ve5"
                                    },
                                    defaultClass: "ju367ve3"
                                },
                                profileActionHover: {
                                    conditions: {
                                        base: "ju367ve6",
                                        hover: "ju367ve7",
                                        active: "ju367ve8"
                                    },
                                    defaultClass: "ju367ve6"
                                },
                                profileForeground: {
                                    conditions: {
                                        base: "ju367ve9",
                                        hover: "ju367vea",
                                        active: "ju367veb"
                                    },
                                    defaultClass: "ju367ve9"
                                },
                                selectedOptionBorder: {
                                    conditions: {
                                        base: "ju367vec",
                                        hover: "ju367ved",
                                        active: "ju367vee"
                                    },
                                    defaultClass: "ju367vec"
                                },
                                standby: {
                                    conditions: {
                                        base: "ju367vef",
                                        hover: "ju367veg",
                                        active: "ju367veh"
                                    },
                                    defaultClass: "ju367vef"
                                }
                            }
                        },
                        boxShadow: {
                            values: {
                                connectButton: {
                                    conditions: {
                                        base: "ju367vei",
                                        hover: "ju367vej",
                                        active: "ju367vek"
                                    },
                                    defaultClass: "ju367vei"
                                },
                                dialog: {
                                    conditions: {
                                        base: "ju367vel",
                                        hover: "ju367vem",
                                        active: "ju367ven"
                                    },
                                    defaultClass: "ju367vel"
                                },
                                profileDetailsAction: {
                                    conditions: {
                                        base: "ju367veo",
                                        hover: "ju367vep",
                                        active: "ju367veq"
                                    },
                                    defaultClass: "ju367veo"
                                },
                                selectedOption: {
                                    conditions: {
                                        base: "ju367ver",
                                        hover: "ju367ves",
                                        active: "ju367vet"
                                    },
                                    defaultClass: "ju367ver"
                                },
                                selectedWallet: {
                                    conditions: {
                                        base: "ju367veu",
                                        hover: "ju367vev",
                                        active: "ju367vew"
                                    },
                                    defaultClass: "ju367veu"
                                },
                                walletLogo: {
                                    conditions: {
                                        base: "ju367vex",
                                        hover: "ju367vey",
                                        active: "ju367vez"
                                    },
                                    defaultClass: "ju367vex"
                                }
                            }
                        },
                        color: {
                            values: {
                                accentColor: {
                                    conditions: {
                                        base: "ju367vf0",
                                        hover: "ju367vf1",
                                        active: "ju367vf2"
                                    },
                                    defaultClass: "ju367vf0"
                                },
                                accentColorForeground: {
                                    conditions: {
                                        base: "ju367vf3",
                                        hover: "ju367vf4",
                                        active: "ju367vf5"
                                    },
                                    defaultClass: "ju367vf3"
                                },
                                actionButtonBorder: {
                                    conditions: {
                                        base: "ju367vf6",
                                        hover: "ju367vf7",
                                        active: "ju367vf8"
                                    },
                                    defaultClass: "ju367vf6"
                                },
                                actionButtonBorderMobile: {
                                    conditions: {
                                        base: "ju367vf9",
                                        hover: "ju367vfa",
                                        active: "ju367vfb"
                                    },
                                    defaultClass: "ju367vf9"
                                },
                                actionButtonSecondaryBackground: {
                                    conditions: {
                                        base: "ju367vfc",
                                        hover: "ju367vfd",
                                        active: "ju367vfe"
                                    },
                                    defaultClass: "ju367vfc"
                                },
                                closeButton: {
                                    conditions: {
                                        base: "ju367vff",
                                        hover: "ju367vfg",
                                        active: "ju367vfh"
                                    },
                                    defaultClass: "ju367vff"
                                },
                                closeButtonBackground: {
                                    conditions: {
                                        base: "ju367vfi",
                                        hover: "ju367vfj",
                                        active: "ju367vfk"
                                    },
                                    defaultClass: "ju367vfi"
                                },
                                connectButtonBackground: {
                                    conditions: {
                                        base: "ju367vfl",
                                        hover: "ju367vfm",
                                        active: "ju367vfn"
                                    },
                                    defaultClass: "ju367vfl"
                                },
                                connectButtonBackgroundError: {
                                    conditions: {
                                        base: "ju367vfo",
                                        hover: "ju367vfp",
                                        active: "ju367vfq"
                                    },
                                    defaultClass: "ju367vfo"
                                },
                                connectButtonInnerBackground: {
                                    conditions: {
                                        base: "ju367vfr",
                                        hover: "ju367vfs",
                                        active: "ju367vft"
                                    },
                                    defaultClass: "ju367vfr"
                                },
                                connectButtonText: {
                                    conditions: {
                                        base: "ju367vfu",
                                        hover: "ju367vfv",
                                        active: "ju367vfw"
                                    },
                                    defaultClass: "ju367vfu"
                                },
                                connectButtonTextError: {
                                    conditions: {
                                        base: "ju367vfx",
                                        hover: "ju367vfy",
                                        active: "ju367vfz"
                                    },
                                    defaultClass: "ju367vfx"
                                },
                                connectionIndicator: {
                                    conditions: {
                                        base: "ju367vg0",
                                        hover: "ju367vg1",
                                        active: "ju367vg2"
                                    },
                                    defaultClass: "ju367vg0"
                                },
                                downloadBottomCardBackground: {
                                    conditions: {
                                        base: "ju367vg3",
                                        hover: "ju367vg4",
                                        active: "ju367vg5"
                                    },
                                    defaultClass: "ju367vg3"
                                },
                                downloadTopCardBackground: {
                                    conditions: {
                                        base: "ju367vg6",
                                        hover: "ju367vg7",
                                        active: "ju367vg8"
                                    },
                                    defaultClass: "ju367vg6"
                                },
                                error: {
                                    conditions: {
                                        base: "ju367vg9",
                                        hover: "ju367vga",
                                        active: "ju367vgb"
                                    },
                                    defaultClass: "ju367vg9"
                                },
                                generalBorder: {
                                    conditions: {
                                        base: "ju367vgc",
                                        hover: "ju367vgd",
                                        active: "ju367vge"
                                    },
                                    defaultClass: "ju367vgc"
                                },
                                generalBorderDim: {
                                    conditions: {
                                        base: "ju367vgf",
                                        hover: "ju367vgg",
                                        active: "ju367vgh"
                                    },
                                    defaultClass: "ju367vgf"
                                },
                                menuItemBackground: {
                                    conditions: {
                                        base: "ju367vgi",
                                        hover: "ju367vgj",
                                        active: "ju367vgk"
                                    },
                                    defaultClass: "ju367vgi"
                                },
                                modalBackdrop: {
                                    conditions: {
                                        base: "ju367vgl",
                                        hover: "ju367vgm",
                                        active: "ju367vgn"
                                    },
                                    defaultClass: "ju367vgl"
                                },
                                modalBackground: {
                                    conditions: {
                                        base: "ju367vgo",
                                        hover: "ju367vgp",
                                        active: "ju367vgq"
                                    },
                                    defaultClass: "ju367vgo"
                                },
                                modalBorder: {
                                    conditions: {
                                        base: "ju367vgr",
                                        hover: "ju367vgs",
                                        active: "ju367vgt"
                                    },
                                    defaultClass: "ju367vgr"
                                },
                                modalText: {
                                    conditions: {
                                        base: "ju367vgu",
                                        hover: "ju367vgv",
                                        active: "ju367vgw"
                                    },
                                    defaultClass: "ju367vgu"
                                },
                                modalTextDim: {
                                    conditions: {
                                        base: "ju367vgx",
                                        hover: "ju367vgy",
                                        active: "ju367vgz"
                                    },
                                    defaultClass: "ju367vgx"
                                },
                                modalTextSecondary: {
                                    conditions: {
                                        base: "ju367vh0",
                                        hover: "ju367vh1",
                                        active: "ju367vh2"
                                    },
                                    defaultClass: "ju367vh0"
                                },
                                profileAction: {
                                    conditions: {
                                        base: "ju367vh3",
                                        hover: "ju367vh4",
                                        active: "ju367vh5"
                                    },
                                    defaultClass: "ju367vh3"
                                },
                                profileActionHover: {
                                    conditions: {
                                        base: "ju367vh6",
                                        hover: "ju367vh7",
                                        active: "ju367vh8"
                                    },
                                    defaultClass: "ju367vh6"
                                },
                                profileForeground: {
                                    conditions: {
                                        base: "ju367vh9",
                                        hover: "ju367vha",
                                        active: "ju367vhb"
                                    },
                                    defaultClass: "ju367vh9"
                                },
                                selectedOptionBorder: {
                                    conditions: {
                                        base: "ju367vhc",
                                        hover: "ju367vhd",
                                        active: "ju367vhe"
                                    },
                                    defaultClass: "ju367vhc"
                                },
                                standby: {
                                    conditions: {
                                        base: "ju367vhf",
                                        hover: "ju367vhg",
                                        active: "ju367vhh"
                                    },
                                    defaultClass: "ju367vhf"
                                }
                            }
                        }
                    }
                }, {
                    conditions: {
                        defaultCondition: "smallScreen",
                        conditionNames: ["smallScreen", "largeScreen"],
                        responsiveArray: void 0
                    },
                    styles: {
                        alignItems: {
                            values: {
                                "flex-start": {
                                    conditions: {
                                        smallScreen: "ju367v0",
                                        largeScreen: "ju367v1"
                                    },
                                    defaultClass: "ju367v0"
                                },
                                "flex-end": {
                                    conditions: {
                                        smallScreen: "ju367v2",
                                        largeScreen: "ju367v3"
                                    },
                                    defaultClass: "ju367v2"
                                },
                                center: {
                                    conditions: {
                                        smallScreen: "ju367v4",
                                        largeScreen: "ju367v5"
                                    },
                                    defaultClass: "ju367v4"
                                }
                            }
                        },
                        display: {
                            values: {
                                none: {
                                    conditions: {
                                        smallScreen: "ju367v6",
                                        largeScreen: "ju367v7"
                                    },
                                    defaultClass: "ju367v6"
                                },
                                block: {
                                    conditions: {
                                        smallScreen: "ju367v8",
                                        largeScreen: "ju367v9"
                                    },
                                    defaultClass: "ju367v8"
                                },
                                flex: {
                                    conditions: {
                                        smallScreen: "ju367va",
                                        largeScreen: "ju367vb"
                                    },
                                    defaultClass: "ju367va"
                                },
                                inline: {
                                    conditions: {
                                        smallScreen: "ju367vc",
                                        largeScreen: "ju367vd"
                                    },
                                    defaultClass: "ju367vc"
                                }
                            }
                        }
                    }
                }, {
                    conditions: void 0,
                    styles: {
                        margin: {
                            mappings: ["marginTop", "marginBottom", "marginLeft", "marginRight"]
                        },
                        marginX: {
                            mappings: ["marginLeft", "marginRight"]
                        },
                        marginY: {
                            mappings: ["marginTop", "marginBottom"]
                        },
                        padding: {
                            mappings: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"]
                        },
                        paddingX: {
                            mappings: ["paddingLeft", "paddingRight"]
                        },
                        paddingY: {
                            mappings: ["paddingTop", "paddingBottom"]
                        },
                        alignSelf: {
                            values: {
                                "flex-start": {
                                    defaultClass: "ju367ve"
                                },
                                "flex-end": {
                                    defaultClass: "ju367vf"
                                },
                                center: {
                                    defaultClass: "ju367vg"
                                }
                            }
                        },
                        backgroundSize: {
                            values: {
                                cover: {
                                    defaultClass: "ju367vh"
                                }
                            }
                        },
                        borderRadius: {
                            values: {
                                1: {
                                    defaultClass: "ju367vi"
                                },
                                6: {
                                    defaultClass: "ju367vj"
                                },
                                10: {
                                    defaultClass: "ju367vk"
                                },
                                13: {
                                    defaultClass: "ju367vl"
                                },
                                actionButton: {
                                    defaultClass: "ju367vm"
                                },
                                connectButton: {
                                    defaultClass: "ju367vn"
                                },
                                menuButton: {
                                    defaultClass: "ju367vo"
                                },
                                modal: {
                                    defaultClass: "ju367vp"
                                },
                                modalMobile: {
                                    defaultClass: "ju367vq"
                                },
                                "25%": {
                                    defaultClass: "ju367vr"
                                },
                                full: {
                                    defaultClass: "ju367vs"
                                }
                            }
                        },
                        borderStyle: {
                            values: {
                                solid: {
                                    defaultClass: "ju367vt"
                                }
                            }
                        },
                        borderWidth: {
                            values: {
                                0: {
                                    defaultClass: "ju367vu"
                                },
                                1: {
                                    defaultClass: "ju367vv"
                                },
                                2: {
                                    defaultClass: "ju367vw"
                                },
                                4: {
                                    defaultClass: "ju367vx"
                                }
                            }
                        },
                        cursor: {
                            values: {
                                pointer: {
                                    defaultClass: "ju367vy"
                                },
                                none: {
                                    defaultClass: "ju367vz"
                                }
                            }
                        },
                        pointerEvents: {
                            values: {
                                none: {
                                    defaultClass: "ju367v10"
                                },
                                all: {
                                    defaultClass: "ju367v11"
                                }
                            }
                        },
                        minHeight: {
                            values: {
                                8: {
                                    defaultClass: "ju367v12"
                                },
                                44: {
                                    defaultClass: "ju367v13"
                                }
                            }
                        },
                        flexDirection: {
                            values: {
                                row: {
                                    defaultClass: "ju367v14"
                                },
                                column: {
                                    defaultClass: "ju367v15"
                                }
                            }
                        },
                        fontFamily: {
                            values: {
                                body: {
                                    defaultClass: "ju367v16"
                                }
                            }
                        },
                        fontSize: {
                            values: {
                                12: {
                                    defaultClass: "ju367v17"
                                },
                                13: {
                                    defaultClass: "ju367v18"
                                },
                                14: {
                                    defaultClass: "ju367v19"
                                },
                                16: {
                                    defaultClass: "ju367v1a"
                                },
                                18: {
                                    defaultClass: "ju367v1b"
                                },
                                20: {
                                    defaultClass: "ju367v1c"
                                },
                                23: {
                                    defaultClass: "ju367v1d"
                                }
                            }
                        },
                        fontWeight: {
                            values: {
                                regular: {
                                    defaultClass: "ju367v1e"
                                },
                                medium: {
                                    defaultClass: "ju367v1f"
                                },
                                semibold: {
                                    defaultClass: "ju367v1g"
                                },
                                bold: {
                                    defaultClass: "ju367v1h"
                                },
                                heavy: {
                                    defaultClass: "ju367v1i"
                                }
                            }
                        },
                        gap: {
                            values: {
                                0: {
                                    defaultClass: "ju367v1j"
                                },
                                1: {
                                    defaultClass: "ju367v1k"
                                },
                                2: {
                                    defaultClass: "ju367v1l"
                                },
                                3: {
                                    defaultClass: "ju367v1m"
                                },
                                4: {
                                    defaultClass: "ju367v1n"
                                },
                                5: {
                                    defaultClass: "ju367v1o"
                                },
                                6: {
                                    defaultClass: "ju367v1p"
                                },
                                8: {
                                    defaultClass: "ju367v1q"
                                },
                                10: {
                                    defaultClass: "ju367v1r"
                                },
                                12: {
                                    defaultClass: "ju367v1s"
                                },
                                14: {
                                    defaultClass: "ju367v1t"
                                },
                                16: {
                                    defaultClass: "ju367v1u"
                                },
                                18: {
                                    defaultClass: "ju367v1v"
                                },
                                20: {
                                    defaultClass: "ju367v1w"
                                },
                                24: {
                                    defaultClass: "ju367v1x"
                                },
                                28: {
                                    defaultClass: "ju367v1y"
                                },
                                32: {
                                    defaultClass: "ju367v1z"
                                },
                                36: {
                                    defaultClass: "ju367v20"
                                },
                                44: {
                                    defaultClass: "ju367v21"
                                },
                                64: {
                                    defaultClass: "ju367v22"
                                },
                                "-1": {
                                    defaultClass: "ju367v23"
                                }
                            }
                        },
                        height: {
                            values: {
                                1: {
                                    defaultClass: "ju367v24"
                                },
                                2: {
                                    defaultClass: "ju367v25"
                                },
                                4: {
                                    defaultClass: "ju367v26"
                                },
                                8: {
                                    defaultClass: "ju367v27"
                                },
                                12: {
                                    defaultClass: "ju367v28"
                                },
                                20: {
                                    defaultClass: "ju367v29"
                                },
                                24: {
                                    defaultClass: "ju367v2a"
                                },
                                28: {
                                    defaultClass: "ju367v2b"
                                },
                                30: {
                                    defaultClass: "ju367v2c"
                                },
                                32: {
                                    defaultClass: "ju367v2d"
                                },
                                34: {
                                    defaultClass: "ju367v2e"
                                },
                                36: {
                                    defaultClass: "ju367v2f"
                                },
                                40: {
                                    defaultClass: "ju367v2g"
                                },
                                44: {
                                    defaultClass: "ju367v2h"
                                },
                                48: {
                                    defaultClass: "ju367v2i"
                                },
                                54: {
                                    defaultClass: "ju367v2j"
                                },
                                60: {
                                    defaultClass: "ju367v2k"
                                },
                                200: {
                                    defaultClass: "ju367v2l"
                                },
                                full: {
                                    defaultClass: "ju367v2m"
                                },
                                max: {
                                    defaultClass: "ju367v2n"
                                }
                            }
                        },
                        justifyContent: {
                            values: {
                                "flex-start": {
                                    defaultClass: "ju367v2o"
                                },
                                "flex-end": {
                                    defaultClass: "ju367v2p"
                                },
                                center: {
                                    defaultClass: "ju367v2q"
                                },
                                "space-between": {
                                    defaultClass: "ju367v2r"
                                },
                                "space-around": {
                                    defaultClass: "ju367v2s"
                                }
                            }
                        },
                        textAlign: {
                            values: {
                                left: {
                                    defaultClass: "ju367v2t"
                                },
                                center: {
                                    defaultClass: "ju367v2u"
                                },
                                inherit: {
                                    defaultClass: "ju367v2v"
                                }
                            }
                        },
                        marginBottom: {
                            values: {
                                0: {
                                    defaultClass: "ju367v2w"
                                },
                                1: {
                                    defaultClass: "ju367v2x"
                                },
                                2: {
                                    defaultClass: "ju367v2y"
                                },
                                3: {
                                    defaultClass: "ju367v2z"
                                },
                                4: {
                                    defaultClass: "ju367v30"
                                },
                                5: {
                                    defaultClass: "ju367v31"
                                },
                                6: {
                                    defaultClass: "ju367v32"
                                },
                                8: {
                                    defaultClass: "ju367v33"
                                },
                                10: {
                                    defaultClass: "ju367v34"
                                },
                                12: {
                                    defaultClass: "ju367v35"
                                },
                                14: {
                                    defaultClass: "ju367v36"
                                },
                                16: {
                                    defaultClass: "ju367v37"
                                },
                                18: {
                                    defaultClass: "ju367v38"
                                },
                                20: {
                                    defaultClass: "ju367v39"
                                },
                                24: {
                                    defaultClass: "ju367v3a"
                                },
                                28: {
                                    defaultClass: "ju367v3b"
                                },
                                32: {
                                    defaultClass: "ju367v3c"
                                },
                                36: {
                                    defaultClass: "ju367v3d"
                                },
                                44: {
                                    defaultClass: "ju367v3e"
                                },
                                64: {
                                    defaultClass: "ju367v3f"
                                },
                                "-1": {
                                    defaultClass: "ju367v3g"
                                }
                            }
                        },
                        marginLeft: {
                            values: {
                                0: {
                                    defaultClass: "ju367v3h"
                                },
                                1: {
                                    defaultClass: "ju367v3i"
                                },
                                2: {
                                    defaultClass: "ju367v3j"
                                },
                                3: {
                                    defaultClass: "ju367v3k"
                                },
                                4: {
                                    defaultClass: "ju367v3l"
                                },
                                5: {
                                    defaultClass: "ju367v3m"
                                },
                                6: {
                                    defaultClass: "ju367v3n"
                                },
                                8: {
                                    defaultClass: "ju367v3o"
                                },
                                10: {
                                    defaultClass: "ju367v3p"
                                },
                                12: {
                                    defaultClass: "ju367v3q"
                                },
                                14: {
                                    defaultClass: "ju367v3r"
                                },
                                16: {
                                    defaultClass: "ju367v3s"
                                },
                                18: {
                                    defaultClass: "ju367v3t"
                                },
                                20: {
                                    defaultClass: "ju367v3u"
                                },
                                24: {
                                    defaultClass: "ju367v3v"
                                },
                                28: {
                                    defaultClass: "ju367v3w"
                                },
                                32: {
                                    defaultClass: "ju367v3x"
                                },
                                36: {
                                    defaultClass: "ju367v3y"
                                },
                                44: {
                                    defaultClass: "ju367v3z"
                                },
                                64: {
                                    defaultClass: "ju367v40"
                                },
                                "-1": {
                                    defaultClass: "ju367v41"
                                }
                            }
                        },
                        marginRight: {
                            values: {
                                0: {
                                    defaultClass: "ju367v42"
                                },
                                1: {
                                    defaultClass: "ju367v43"
                                },
                                2: {
                                    defaultClass: "ju367v44"
                                },
                                3: {
                                    defaultClass: "ju367v45"
                                },
                                4: {
                                    defaultClass: "ju367v46"
                                },
                                5: {
                                    defaultClass: "ju367v47"
                                },
                                6: {
                                    defaultClass: "ju367v48"
                                },
                                8: {
                                    defaultClass: "ju367v49"
                                },
                                10: {
                                    defaultClass: "ju367v4a"
                                },
                                12: {
                                    defaultClass: "ju367v4b"
                                },
                                14: {
                                    defaultClass: "ju367v4c"
                                },
                                16: {
                                    defaultClass: "ju367v4d"
                                },
                                18: {
                                    defaultClass: "ju367v4e"
                                },
                                20: {
                                    defaultClass: "ju367v4f"
                                },
                                24: {
                                    defaultClass: "ju367v4g"
                                },
                                28: {
                                    defaultClass: "ju367v4h"
                                },
                                32: {
                                    defaultClass: "ju367v4i"
                                },
                                36: {
                                    defaultClass: "ju367v4j"
                                },
                                44: {
                                    defaultClass: "ju367v4k"
                                },
                                64: {
                                    defaultClass: "ju367v4l"
                                },
                                "-1": {
                                    defaultClass: "ju367v4m"
                                }
                            }
                        },
                        marginTop: {
                            values: {
                                0: {
                                    defaultClass: "ju367v4n"
                                },
                                1: {
                                    defaultClass: "ju367v4o"
                                },
                                2: {
                                    defaultClass: "ju367v4p"
                                },
                                3: {
                                    defaultClass: "ju367v4q"
                                },
                                4: {
                                    defaultClass: "ju367v4r"
                                },
                                5: {
                                    defaultClass: "ju367v4s"
                                },
                                6: {
                                    defaultClass: "ju367v4t"
                                },
                                8: {
                                    defaultClass: "ju367v4u"
                                },
                                10: {
                                    defaultClass: "ju367v4v"
                                },
                                12: {
                                    defaultClass: "ju367v4w"
                                },
                                14: {
                                    defaultClass: "ju367v4x"
                                },
                                16: {
                                    defaultClass: "ju367v4y"
                                },
                                18: {
                                    defaultClass: "ju367v4z"
                                },
                                20: {
                                    defaultClass: "ju367v50"
                                },
                                24: {
                                    defaultClass: "ju367v51"
                                },
                                28: {
                                    defaultClass: "ju367v52"
                                },
                                32: {
                                    defaultClass: "ju367v53"
                                },
                                36: {
                                    defaultClass: "ju367v54"
                                },
                                44: {
                                    defaultClass: "ju367v55"
                                },
                                64: {
                                    defaultClass: "ju367v56"
                                },
                                "-1": {
                                    defaultClass: "ju367v57"
                                }
                            }
                        },
                        maxWidth: {
                            values: {
                                1: {
                                    defaultClass: "ju367v58"
                                },
                                2: {
                                    defaultClass: "ju367v59"
                                },
                                4: {
                                    defaultClass: "ju367v5a"
                                },
                                8: {
                                    defaultClass: "ju367v5b"
                                },
                                12: {
                                    defaultClass: "ju367v5c"
                                },
                                20: {
                                    defaultClass: "ju367v5d"
                                },
                                24: {
                                    defaultClass: "ju367v5e"
                                },
                                28: {
                                    defaultClass: "ju367v5f"
                                },
                                30: {
                                    defaultClass: "ju367v5g"
                                },
                                32: {
                                    defaultClass: "ju367v5h"
                                },
                                34: {
                                    defaultClass: "ju367v5i"
                                },
                                36: {
                                    defaultClass: "ju367v5j"
                                },
                                40: {
                                    defaultClass: "ju367v5k"
                                },
                                44: {
                                    defaultClass: "ju367v5l"
                                },
                                48: {
                                    defaultClass: "ju367v5m"
                                },
                                54: {
                                    defaultClass: "ju367v5n"
                                },
                                60: {
                                    defaultClass: "ju367v5o"
                                },
                                200: {
                                    defaultClass: "ju367v5p"
                                },
                                full: {
                                    defaultClass: "ju367v5q"
                                },
                                max: {
                                    defaultClass: "ju367v5r"
                                }
                            }
                        },
                        minWidth: {
                            values: {
                                1: {
                                    defaultClass: "ju367v5s"
                                },
                                2: {
                                    defaultClass: "ju367v5t"
                                },
                                4: {
                                    defaultClass: "ju367v5u"
                                },
                                8: {
                                    defaultClass: "ju367v5v"
                                },
                                12: {
                                    defaultClass: "ju367v5w"
                                },
                                20: {
                                    defaultClass: "ju367v5x"
                                },
                                24: {
                                    defaultClass: "ju367v5y"
                                },
                                28: {
                                    defaultClass: "ju367v5z"
                                },
                                30: {
                                    defaultClass: "ju367v60"
                                },
                                32: {
                                    defaultClass: "ju367v61"
                                },
                                34: {
                                    defaultClass: "ju367v62"
                                },
                                36: {
                                    defaultClass: "ju367v63"
                                },
                                40: {
                                    defaultClass: "ju367v64"
                                },
                                44: {
                                    defaultClass: "ju367v65"
                                },
                                48: {
                                    defaultClass: "ju367v66"
                                },
                                54: {
                                    defaultClass: "ju367v67"
                                },
                                60: {
                                    defaultClass: "ju367v68"
                                },
                                200: {
                                    defaultClass: "ju367v69"
                                },
                                full: {
                                    defaultClass: "ju367v6a"
                                },
                                max: {
                                    defaultClass: "ju367v6b"
                                }
                            }
                        },
                        overflow: {
                            values: {
                                hidden: {
                                    defaultClass: "ju367v6c"
                                }
                            }
                        },
                        paddingBottom: {
                            values: {
                                0: {
                                    defaultClass: "ju367v6d"
                                },
                                1: {
                                    defaultClass: "ju367v6e"
                                },
                                2: {
                                    defaultClass: "ju367v6f"
                                },
                                3: {
                                    defaultClass: "ju367v6g"
                                },
                                4: {
                                    defaultClass: "ju367v6h"
                                },
                                5: {
                                    defaultClass: "ju367v6i"
                                },
                                6: {
                                    defaultClass: "ju367v6j"
                                },
                                8: {
                                    defaultClass: "ju367v6k"
                                },
                                10: {
                                    defaultClass: "ju367v6l"
                                },
                                12: {
                                    defaultClass: "ju367v6m"
                                },
                                14: {
                                    defaultClass: "ju367v6n"
                                },
                                16: {
                                    defaultClass: "ju367v6o"
                                },
                                18: {
                                    defaultClass: "ju367v6p"
                                },
                                20: {
                                    defaultClass: "ju367v6q"
                                },
                                24: {
                                    defaultClass: "ju367v6r"
                                },
                                28: {
                                    defaultClass: "ju367v6s"
                                },
                                32: {
                                    defaultClass: "ju367v6t"
                                },
                                36: {
                                    defaultClass: "ju367v6u"
                                },
                                44: {
                                    defaultClass: "ju367v6v"
                                },
                                64: {
                                    defaultClass: "ju367v6w"
                                },
                                "-1": {
                                    defaultClass: "ju367v6x"
                                }
                            }
                        },
                        paddingLeft: {
                            values: {
                                0: {
                                    defaultClass: "ju367v6y"
                                },
                                1: {
                                    defaultClass: "ju367v6z"
                                },
                                2: {
                                    defaultClass: "ju367v70"
                                },
                                3: {
                                    defaultClass: "ju367v71"
                                },
                                4: {
                                    defaultClass: "ju367v72"
                                },
                                5: {
                                    defaultClass: "ju367v73"
                                },
                                6: {
                                    defaultClass: "ju367v74"
                                },
                                8: {
                                    defaultClass: "ju367v75"
                                },
                                10: {
                                    defaultClass: "ju367v76"
                                },
                                12: {
                                    defaultClass: "ju367v77"
                                },
                                14: {
                                    defaultClass: "ju367v78"
                                },
                                16: {
                                    defaultClass: "ju367v79"
                                },
                                18: {
                                    defaultClass: "ju367v7a"
                                },
                                20: {
                                    defaultClass: "ju367v7b"
                                },
                                24: {
                                    defaultClass: "ju367v7c"
                                },
                                28: {
                                    defaultClass: "ju367v7d"
                                },
                                32: {
                                    defaultClass: "ju367v7e"
                                },
                                36: {
                                    defaultClass: "ju367v7f"
                                },
                                44: {
                                    defaultClass: "ju367v7g"
                                },
                                64: {
                                    defaultClass: "ju367v7h"
                                },
                                "-1": {
                                    defaultClass: "ju367v7i"
                                }
                            }
                        },
                        paddingRight: {
                            values: {
                                0: {
                                    defaultClass: "ju367v7j"
                                },
                                1: {
                                    defaultClass: "ju367v7k"
                                },
                                2: {
                                    defaultClass: "ju367v7l"
                                },
                                3: {
                                    defaultClass: "ju367v7m"
                                },
                                4: {
                                    defaultClass: "ju367v7n"
                                },
                                5: {
                                    defaultClass: "ju367v7o"
                                },
                                6: {
                                    defaultClass: "ju367v7p"
                                },
                                8: {
                                    defaultClass: "ju367v7q"
                                },
                                10: {
                                    defaultClass: "ju367v7r"
                                },
                                12: {
                                    defaultClass: "ju367v7s"
                                },
                                14: {
                                    defaultClass: "ju367v7t"
                                },
                                16: {
                                    defaultClass: "ju367v7u"
                                },
                                18: {
                                    defaultClass: "ju367v7v"
                                },
                                20: {
                                    defaultClass: "ju367v7w"
                                },
                                24: {
                                    defaultClass: "ju367v7x"
                                },
                                28: {
                                    defaultClass: "ju367v7y"
                                },
                                32: {
                                    defaultClass: "ju367v7z"
                                },
                                36: {
                                    defaultClass: "ju367v80"
                                },
                                44: {
                                    defaultClass: "ju367v81"
                                },
                                64: {
                                    defaultClass: "ju367v82"
                                },
                                "-1": {
                                    defaultClass: "ju367v83"
                                }
                            }
                        },
                        paddingTop: {
                            values: {
                                0: {
                                    defaultClass: "ju367v84"
                                },
                                1: {
                                    defaultClass: "ju367v85"
                                },
                                2: {
                                    defaultClass: "ju367v86"
                                },
                                3: {
                                    defaultClass: "ju367v87"
                                },
                                4: {
                                    defaultClass: "ju367v88"
                                },
                                5: {
                                    defaultClass: "ju367v89"
                                },
                                6: {
                                    defaultClass: "ju367v8a"
                                },
                                8: {
                                    defaultClass: "ju367v8b"
                                },
                                10: {
                                    defaultClass: "ju367v8c"
                                },
                                12: {
                                    defaultClass: "ju367v8d"
                                },
                                14: {
                                    defaultClass: "ju367v8e"
                                },
                                16: {
                                    defaultClass: "ju367v8f"
                                },
                                18: {
                                    defaultClass: "ju367v8g"
                                },
                                20: {
                                    defaultClass: "ju367v8h"
                                },
                                24: {
                                    defaultClass: "ju367v8i"
                                },
                                28: {
                                    defaultClass: "ju367v8j"
                                },
                                32: {
                                    defaultClass: "ju367v8k"
                                },
                                36: {
                                    defaultClass: "ju367v8l"
                                },
                                44: {
                                    defaultClass: "ju367v8m"
                                },
                                64: {
                                    defaultClass: "ju367v8n"
                                },
                                "-1": {
                                    defaultClass: "ju367v8o"
                                }
                            }
                        },
                        position: {
                            values: {
                                absolute: {
                                    defaultClass: "ju367v8p"
                                },
                                fixed: {
                                    defaultClass: "ju367v8q"
                                },
                                relative: {
                                    defaultClass: "ju367v8r"
                                }
                            }
                        },
                        WebkitUserSelect: {
                            values: {
                                none: {
                                    defaultClass: "ju367v8s"
                                }
                            }
                        },
                        right: {
                            values: {
                                0: {
                                    defaultClass: "ju367v8t"
                                }
                            }
                        },
                        transition: {
                            values: {
                                default: {
                                    defaultClass: "ju367v8u"
                                },
                                transform: {
                                    defaultClass: "ju367v8v"
                                }
                            }
                        },
                        userSelect: {
                            values: {
                                none: {
                                    defaultClass: "ju367v8w"
                                }
                            }
                        },
                        width: {
                            values: {
                                1: {
                                    defaultClass: "ju367v8x"
                                },
                                2: {
                                    defaultClass: "ju367v8y"
                                },
                                4: {
                                    defaultClass: "ju367v8z"
                                },
                                8: {
                                    defaultClass: "ju367v90"
                                },
                                12: {
                                    defaultClass: "ju367v91"
                                },
                                20: {
                                    defaultClass: "ju367v92"
                                },
                                24: {
                                    defaultClass: "ju367v93"
                                },
                                28: {
                                    defaultClass: "ju367v94"
                                },
                                30: {
                                    defaultClass: "ju367v95"
                                },
                                32: {
                                    defaultClass: "ju367v96"
                                },
                                34: {
                                    defaultClass: "ju367v97"
                                },
                                36: {
                                    defaultClass: "ju367v98"
                                },
                                40: {
                                    defaultClass: "ju367v99"
                                },
                                44: {
                                    defaultClass: "ju367v9a"
                                },
                                48: {
                                    defaultClass: "ju367v9b"
                                },
                                54: {
                                    defaultClass: "ju367v9c"
                                },
                                60: {
                                    defaultClass: "ju367v9d"
                                },
                                200: {
                                    defaultClass: "ju367v9e"
                                },
                                full: {
                                    defaultClass: "ju367v9f"
                                },
                                max: {
                                    defaultClass: "ju367v9g"
                                }
                            }
                        },
                        backdropFilter: {
                            values: {
                                modalOverlay: {
                                    defaultClass: "ju367v9h"
                                }
                            }
                        }
                    }
                }),
                w = {
                    colors: {
                        accentColor: "var(--rk-colors-accentColor)",
                        accentColorForeground: "var(--rk-colors-accentColorForeground)",
                        actionButtonBorder: "var(--rk-colors-actionButtonBorder)",
                        actionButtonBorderMobile: "var(--rk-colors-actionButtonBorderMobile)",
                        actionButtonSecondaryBackground: "var(--rk-colors-actionButtonSecondaryBackground)",
                        closeButton: "var(--rk-colors-closeButton)",
                        closeButtonBackground: "var(--rk-colors-closeButtonBackground)",
                        connectButtonBackground: "var(--rk-colors-connectButtonBackground)",
                        connectButtonBackgroundError: "var(--rk-colors-connectButtonBackgroundError)",
                        connectButtonInnerBackground: "var(--rk-colors-connectButtonInnerBackground)",
                        connectButtonText: "var(--rk-colors-connectButtonText)",
                        connectButtonTextError: "var(--rk-colors-connectButtonTextError)",
                        connectionIndicator: "var(--rk-colors-connectionIndicator)",
                        downloadBottomCardBackground: "var(--rk-colors-downloadBottomCardBackground)",
                        downloadTopCardBackground: "var(--rk-colors-downloadTopCardBackground)",
                        error: "var(--rk-colors-error)",
                        generalBorder: "var(--rk-colors-generalBorder)",
                        generalBorderDim: "var(--rk-colors-generalBorderDim)",
                        menuItemBackground: "var(--rk-colors-menuItemBackground)",
                        modalBackdrop: "var(--rk-colors-modalBackdrop)",
                        modalBackground: "var(--rk-colors-modalBackground)",
                        modalBorder: "var(--rk-colors-modalBorder)",
                        modalText: "var(--rk-colors-modalText)",
                        modalTextDim: "var(--rk-colors-modalTextDim)",
                        modalTextSecondary: "var(--rk-colors-modalTextSecondary)",
                        profileAction: "var(--rk-colors-profileAction)",
                        profileActionHover: "var(--rk-colors-profileActionHover)",
                        profileForeground: "var(--rk-colors-profileForeground)",
                        selectedOptionBorder: "var(--rk-colors-selectedOptionBorder)",
                        standby: "var(--rk-colors-standby)"
                    },
                    fonts: {
                        body: "var(--rk-fonts-body)"
                    },
                    radii: {
                        actionButton: "var(--rk-radii-actionButton)",
                        connectButton: "var(--rk-radii-connectButton)",
                        menuButton: "var(--rk-radii-menuButton)",
                        modal: "var(--rk-radii-modal)",
                        modalMobile: "var(--rk-radii-modalMobile)"
                    },
                    shadows: {
                        connectButton: "var(--rk-shadows-connectButton)",
                        dialog: "var(--rk-shadows-dialog)",
                        profileDetailsAction: "var(--rk-shadows-profileDetailsAction)",
                        selectedOption: "var(--rk-shadows-selectedOption)",
                        selectedWallet: "var(--rk-shadows-selectedWallet)",
                        walletLogo: "var(--rk-shadows-walletLogo)"
                    },
                    blurs: {
                        modalOverlay: "var(--rk-blurs-modalOverlay)"
                    }
                },
                y = {
                    shrink: "_12cbo8i6",
                    shrinkSm: "_12cbo8i7"
                },
                x = {
                    grow: "_12cbo8i4",
                    growLg: "_12cbo8i5"
                };

            function k(e) {
                let {
                    active: t,
                    hover: n
                } = e;
                return ["_12cbo8i3 ju367v8r", n && x[n], y[t]]
            }
            var B = (0, r.createContext)(null);

            function D() {
                var e;
                let t = (0, r.useContext)(B);
                return null != (e = null == t ? void 0 : t.status) ? e : null
            }

            function T() {
                let e = D(),
                    {
                        isConnected: t
                    } = (0, s.mA)();
                return t ? e && ("loading" === e || "unauthenticated" === e) ? e : "connected" : "disconnected"
            }

            function S() {
                return "undefined" != typeof navigator && /iPhone|iPod/.test(navigator.userAgent) || "undefined" != typeof navigator && (/iPad/.test(navigator.userAgent) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1)
            }

            function I() {
                return "undefined" != typeof navigator && /android/i.test(navigator.userAgent) || S()
            }
            var _ = {
                    a: "iekbcca",
                    blockquote: "iekbcc2",
                    button: "iekbcc9",
                    input: "iekbcc8 iekbcc5 iekbcc4",
                    mark: "iekbcc6",
                    ol: "iekbcc1",
                    q: "iekbcc2",
                    select: "iekbcc7 iekbcc5 iekbcc4",
                    table: "iekbcc3",
                    textarea: "iekbcc5 iekbcc4",
                    ul: "iekbcc1"
                },
                N = e => {
                    let {
                        reset: t,
                        ...n
                    } = e;
                    if (!t) return E(n);
                    let l = _[t],
                        a = E(n);
                    return (0, u.Z)("iekbcc0", l, a)
                },
                L = r.forwardRef((e, t) => {
                    let {
                        as: n = "div",
                        className: l,
                        testId: a,
                        ...o
                    } = e, i = {}, c = {};
                    for (let e in o) E.properties.has(e) ? i[e] = o[e] : c[e] = o[e];
                    let s = N({
                        reset: "string" == typeof n ? n : "div",
                        ...i
                    });
                    return r.createElement(n, {
                        className: (0, u.Z)(s, l),
                        ...c,
                        "data-testid": a ? "rk-".concat(a.replace(/^rk-/, "")) : void 0,
                        ref: t
                    })
                });
            L.displayName = "Box";
            var A = new Map,
                O = new Map;
            async function M(e) {
                let t = O.get(e);
                if (t) return t;
                let n = async () => e().then(async t => (A.set(e, t), t)),
                    l = n().catch(t => n().catch(t => {
                        O.delete(e)
                    }));
                return O.set(e, l), l
            }
            async function F() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return await Promise.all(t.map(e => "function" == typeof e ? M(e) : e))
            }

            function z(e) {
                let t = "function" == typeof e ? A.get(e) : void 0,
                    n = function() {
                        let [, e] = (0, r.useReducer)(e => e + 1, 0);
                        return e
                    }();
                return (0, r.useEffect)(() => {
                    "function" != typeof e || t || M(e).then(n)
                }, [e, t, n]), "function" == typeof e ? t : e
            }

            function R(e) {
                let {
                    alt: t,
                    background: n,
                    borderColor: l,
                    borderRadius: a,
                    boxShadow: o,
                    height: i,
                    src: c,
                    width: s,
                    testId: u
                } = e, d = S(), v = z(c), f = v && /^http/.test(v), [m, g] = (0, r.useReducer)(() => !0, !1);
                return r.createElement(L, {
                    "aria-label": t,
                    borderRadius: a,
                    boxShadow: o,
                    height: "string" == typeof i ? i : void 0,
                    overflow: "hidden",
                    position: "relative",
                    role: "img",
                    style: {
                        background: n,
                        height: "number" == typeof i ? i : void 0,
                        width: "number" == typeof s ? s : void 0
                    },
                    width: "string" == typeof s ? s : void 0,
                    testId: u
                }, r.createElement(L, { ...f ? {
                        "aria-hidden": !0,
                        as: "img",
                        onLoad: g,
                        src: v
                    } : {
                        backgroundSize: "cover"
                    },
                    height: "full",
                    position: "absolute",
                    ...d ? {
                        WebkitUserSelect: "none"
                    } : {},
                    style: {
                        touchCallout: "none",
                        transition: "opacity .15s linear",
                        userSelect: "none",
                        ...f ? {
                            opacity: m ? 1 : 0
                        } : {
                            backgroundImage: v ? "url(".concat(v, ")") : void 0,
                            backgroundRepeat: "no-repeat",
                            opacity: v ? 1 : 0
                        }
                    },
                    width: "full"
                }), l ? r.createElement(L, { ..."object" == typeof l && "custom" in l ? {
                        style: {
                            borderColor: l.custom
                        }
                    } : {
                        borderColor: l
                    },
                    borderRadius: a,
                    borderStyle: "solid",
                    borderWidth: "1",
                    height: "full",
                    position: "relative",
                    width: "full"
                }) : null)
            }
            var U = e => (0, r.useMemo)(() => "".concat(e, "_").concat(Math.round(1e9 * Math.random())), [e]),
                W = e => {
                    let {
                        height: t = 21,
                        width: n = 21
                    } = e, l = U("spinner");
                    return r.createElement("svg", {
                        className: "_1luule42",
                        fill: "none",
                        height: t,
                        viewBox: "0 0 21 21",
                        width: n,
                        xmlns: "http://www.w3.org/2000/svg"
                    }, r.createElement("title", null, "Loading"), r.createElement("clipPath", {
                        id: l
                    }, r.createElement("path", {
                        d: "M10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18C11.3284 18 12 18.6716 12 19.5C12 20.3284 11.3284 21 10.5 21C4.70101 21 0 16.299 0 10.5C0 4.70101 4.70101 0 10.5 0C16.299 0 21 4.70101 21 10.5C21 11.3284 20.3284 12 19.5 12C18.6716 12 18 11.3284 18 10.5C18 6.35786 14.6421 3 10.5 3Z"
                    })), r.createElement("foreignObject", {
                        clipPath: "url(#".concat(l, ")"),
                        height: "21",
                        width: "21",
                        x: "0",
                        y: "0"
                    }, r.createElement("div", {
                        className: "_1luule43"
                    })))
                },
                P = [{
                    color: "#FC5C54",
                    emoji: "\uD83C\uDF36"
                }, {
                    color: "#FFD95A",
                    emoji: "\uD83E\uDD11"
                }, {
                    color: "#E95D72",
                    emoji: "\uD83D\uDC19"
                }, {
                    color: "#6A87C8",
                    emoji: "\uD83E\uDED0"
                }, {
                    color: "#5FD0F3",
                    emoji: "\uD83D\uDC33"
                }, {
                    color: "#FC5C54",
                    emoji: "\uD83E\uDD36"
                }, {
                    color: "#75C06B",
                    emoji: "\uD83C\uDF32"
                }, {
                    color: "#FFDD86",
                    emoji: "\uD83C\uDF1E"
                }, {
                    color: "#5FC6D4",
                    emoji: "\uD83D\uDC12"
                }, {
                    color: "#FF949A",
                    emoji: "\uD83D\uDC35"
                }, {
                    color: "#FF8024",
                    emoji: "\uD83E\uDD8A"
                }, {
                    color: "#9BA1A4",
                    emoji: "\uD83D\uDC3C"
                }, {
                    color: "#EC66FF",
                    emoji: "\uD83E\uDD84"
                }, {
                    color: "#FF8CBC",
                    emoji: "\uD83D\uDC37"
                }, {
                    color: "#FF9A23",
                    emoji: "\uD83D\uDC27"
                }, {
                    color: "#FF949A",
                    emoji: "\uD83E\uDDA9"
                }, {
                    color: "#C5DADB",
                    emoji: "\uD83D\uDC7D"
                }, {
                    color: "#FC5C54",
                    emoji: "\uD83C\uDF88"
                }, {
                    color: "#FF949A",
                    emoji: "\uD83C\uDF49"
                }, {
                    color: "#FFD95A",
                    emoji: "\uD83C\uDF89"
                }, {
                    color: "#A8CE63",
                    emoji: "\uD83D\uDC32"
                }, {
                    color: "#71ABFF",
                    emoji: "\uD83C\uDF0E"
                }, {
                    color: "#FFE279",
                    emoji: "\uD83C\uDF4A"
                }, {
                    color: "#B6B1B6",
                    emoji: "\uD83D\uDC2D"
                }, {
                    color: "#FF6780",
                    emoji: "\uD83C\uDF63"
                }, {
                    color: "#FFD95A",
                    emoji: "\uD83D\uDC25"
                }, {
                    color: "#A575FF",
                    emoji: "\uD83D\uDC7E"
                }, {
                    color: "#A8CE63",
                    emoji: "\uD83E\uDD66"
                }, {
                    color: "#FC5C54",
                    emoji: "\uD83D\uDC79"
                }, {
                    color: "#FFE279",
                    emoji: "\uD83D\uDE40"
                }, {
                    color: "#5FD0F3",
                    emoji: "⛱"
                }, {
                    color: "#4D82FF",
                    emoji: "⛵️"
                }, {
                    color: "#FFE279",
                    emoji: "\uD83E\uDD73"
                }, {
                    color: "#FF949A",
                    emoji: "\uD83E\uDD2F"
                }, {
                    color: "#FFB35A",
                    emoji: "\uD83E\uDD20"
                }],
                q = e => {
                    let {
                        address: t,
                        ensImage: n,
                        size: l
                    } = e, [a, o] = (0, r.useState)(!1);
                    (0, r.useEffect)(() => {
                        if (n) {
                            let e = new Image;
                            e.src = n, e.onload = () => o(!0)
                        }
                    }, [n]);
                    let {
                        color: i,
                        emoji: c
                    } = (0, r.useMemo)(() => (function(e) {
                        let t = Math.abs(function(e) {
                            let t = 0;
                            if (0 === e.length) return t;
                            for (let n = 0; n < e.length; n++) t = (t << 5) - t + e.charCodeAt(n) | 0;
                            return t
                        }(("string" == typeof e ? e : "").toLowerCase()) % P.length);
                        return P[null != t ? t : 0]
                    })(t), [t]);
                    return n ? a ? r.createElement(L, {
                        backgroundSize: "cover",
                        borderRadius: "full",
                        position: "absolute",
                        style: {
                            backgroundImage: "url(".concat(n, ")"),
                            backgroundPosition: "center",
                            height: l,
                            width: l
                        }
                    }) : r.createElement(L, {
                        alignItems: "center",
                        backgroundSize: "cover",
                        borderRadius: "full",
                        color: "modalText",
                        display: "flex",
                        justifyContent: "center",
                        position: "absolute",
                        style: {
                            height: l,
                            width: l
                        }
                    }, r.createElement(W, null)) : r.createElement(L, {
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "center",
                        overflow: "hidden",
                        style: { ...!n && {
                                backgroundColor: i
                            },
                            height: l,
                            width: l
                        }
                    }, c)
                },
                X = (0, r.createContext)(q);

            function H(e) {
                let {
                    address: t,
                    imageUrl: n,
                    loading: l,
                    size: a
                } = e, o = (0, r.useContext)(X);
                return r.createElement(L, {
                    "aria-hidden": !0,
                    borderRadius: "full",
                    overflow: "hidden",
                    position: "relative",
                    style: {
                        height: "".concat(a, "px"),
                        width: "".concat(a, "px")
                    },
                    userSelect: "none"
                }, r.createElement(L, {
                    alignItems: "center",
                    borderRadius: "full",
                    display: "flex",
                    justifyContent: "center",
                    overflow: "hidden",
                    position: "absolute",
                    style: {
                        fontSize: "".concat(Math.round(.55 * a), "px"),
                        height: "".concat(a, "px"),
                        transform: l ? "scale(0.72)" : void 0,
                        transition: ".25s ease",
                        transitionDelay: l ? void 0 : ".1s",
                        width: "".concat(a, "px"),
                        willChange: "transform"
                    },
                    userSelect: "none"
                }, r.createElement(o, {
                    address: t,
                    ensImage: n,
                    size: a
                })), l && r.createElement(L, {
                    color: "accentColor",
                    display: "flex",
                    height: "full",
                    position: "absolute",
                    width: "full"
                }, r.createElement(W, {
                    height: "100%",
                    width: "100%"
                })))
            }
            var Y = () => r.createElement("svg", {
                    fill: "none",
                    height: "7",
                    width: "14",
                    xmlns: "http://www.w3.org/2000/svg"
                }, r.createElement("title", null, "Dropdown"), r.createElement("path", {
                    d: "M12.75 1.54001L8.51647 5.0038C7.77974 5.60658 6.72026 5.60658 5.98352 5.0038L1.75 1.54001",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2.5",
                    xmlns: "http://www.w3.org/2000/svg"
                })),
                Z = new class {
                    missingMessage(e) {
                        return '[missing: "'.concat(this.locale, ".").concat(e, '" translation]')
                    }
                    flattenTranslation(e, t) {
                        let n = {},
                            l = (e, t) => {
                                for (let a of Object.keys(e)) {
                                    let o = "".concat(t, ".").concat(a),
                                        r = e[a];
                                    "object" == typeof r && null !== r ? l(r, o) : n[o] = r
                                }
                            };
                        return l(e, t), n
                    }
                    translateWithReplacements(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = e;
                        for (let e in t) {
                            let l = t[e];
                            n = n.replace("%{".concat(e, "}"), l)
                        }
                        return n
                    }
                    t(e, t) {
                        let n = "".concat(this.locale, ".").concat(e),
                            l = this.translations[n];
                        if (!l) {
                            if (this.enableFallback) {
                                let n = "".concat(this.defaultLocale, ".").concat(e),
                                    l = this.translations[n];
                                if (l) return this.translateWithReplacements(l, t)
                            }
                            return this.missingMessage(e)
                        }
                        return this.translateWithReplacements(l, t)
                    }
                    isLocaleCached(e) {
                        return this.cachedLocales.includes(e)
                    }
                    updateLocale(e) {
                        this.locale = e, this.notifyListeners()
                    }
                    setTranslations(e, t) {
                        this.isLocaleCached(e) || (this.cachedLocales = [...this.cachedLocales, e], this.translations = { ...this.translations,
                            ...this.flattenTranslation(t, e)
                        }), this.locale = e, this.notifyListeners()
                    }
                    notifyListeners() {
                        for (let e of this.listeners) e()
                    }
                    onChange(e) {
                        return this.listeners.add(e), () => {
                            this.listeners.delete(e)
                        }
                    }
                    constructor(e) {
                        for (let [t, n] of (this.listeners = new Set, this.defaultLocale = "en", this.enableFallback = !1, this.locale = "en", this.cachedLocales = [], this.translations = {}, Object.entries(e))) this.cachedLocales = [...this.cachedLocales, t], this.translations = { ...this.translations,
                            ...this.flattenTranslation(n, t)
                        }
                    }
                }({
                    en: JSON.parse(o.I),
                    "en-US": JSON.parse(o.I)
                });
            Z.defaultLocale = "en-US", Z.locale = "en-US", Z.enableFallback = !0;
            var V = async e => {
                switch (e) {
                    case "ar":
                    case "ar-AR":
                        return (await n.e(6966).then(n.bind(n, 6966))).default;
                    case "en":
                    case "en-US":
                    default:
                        return (await n.e(866).then(n.bind(n, 30866))).default;
                    case "es":
                    case "es-419":
                        return (await n.e(402).then(n.bind(n, 40402))).default;
                    case "fr":
                    case "fr-FR":
                        return (await n.e(7607).then(n.bind(n, 27607))).default;
                    case "hi":
                    case "hi-IN":
                        return (await n.e(5169).then(n.bind(n, 75169))).default;
                    case "id":
                    case "id-ID":
                        return (await n.e(4773).then(n.bind(n, 84773))).default;
                    case "ja":
                    case "ja-JP":
                        return (await n.e(6396).then(n.bind(n, 46396))).default;
                    case "ko":
                    case "ko-KR":
                        return (await n.e(8704).then(n.bind(n, 38704))).default;
                    case "pt":
                    case "pt-BR":
                        return (await n.e(3887).then(n.bind(n, 33887))).default;
                    case "ru":
                    case "ru-RU":
                        return (await n.e(3387).then(n.bind(n, 83387))).default;
                    case "th":
                    case "th-TH":
                        return (await n.e(8437).then(n.bind(n, 18437))).default;
                    case "tr":
                    case "tr-TR":
                        return (await n.e(5487).then(n.bind(n, 25487))).default;
                    case "ua":
                    case "uk-UA":
                        return (await n.e(9126).then(n.bind(n, 99126))).default;
                    case "zh":
                    case "zh-CN":
                        return (await n.e(7278).then(n.bind(n, 57278))).default
                }
            };
            async function G(e) {
                if (Z.isLocaleCached(e)) {
                    Z.updateLocale(e);
                    return
                }
                let t = await V(e);
                Z.setTranslations(e, JSON.parse(t))
            }
            var J = () => {
                    var e;
                    if ("undefined" != typeof window && "undefined" != typeof navigator) {
                        if (null == (e = navigator.languages) ? void 0 : e.length) return navigator.languages[0];
                        if (navigator.language) return navigator.language
                    }
                },
                K = (0, r.createContext)({
                    i18n: Z
                }),
                $ = e => {
                    let {
                        children: t,
                        locale: n
                    } = e, [l, a] = (0, r.useState)(0), o = (0, r.useMemo)(() => J(), []);
                    (0, r.useEffect)(() => Z.onChange(() => {
                        a(e => e + 1)
                    }), []), (0, r.useEffect)(() => {
                        n && n !== Z.locale ? G(n) : !n && o && o !== Z.locale && G(o)
                    }, [n, o]);
                    let i = (0, r.useMemo)(() => ({
                        t: (e, t) => Z.t(e, t),
                        i18n: Z
                    }), [l]);
                    return r.createElement(K.Provider, {
                        value: i
                    }, t)
                };

            function Q(e) {
                return null != e
            }
            var ee = {
                    iconBackground: "#96bedc",
                    iconUrl: async () => (await n.e(9201).then(n.bind(n, 99201))).default
                },
                et = {
                    iconBackground: "#e84141",
                    iconUrl: async () => (await n.e(5026).then(n.bind(n, 45026))).default
                },
                en = {
                    iconBackground: "#0052ff",
                    iconUrl: async () => (await n.e(3951).then(n.bind(n, 63951))).default
                },
                el = {
                    iconBackground: "#ebac0e",
                    iconUrl: async () => (await n.e(251).then(n.bind(n, 20251))).default
                },
                ea = {
                    iconBackground: "#002D74",
                    iconUrl: async () => (await n.e(9480).then(n.bind(n, 59480))).default
                },
                eo = {
                    iconBackground: "#484c50",
                    iconUrl: async () => (await n.e(3383).then(n.bind(n, 23383))).default
                },
                er = {
                    iconBackground: "#ff5a57",
                    iconUrl: async () => (await n.e(145).then(n.bind(n, 70145))).default
                },
                ei = {
                    iconBackground: "#9f71ec",
                    iconUrl: async () => (await n.e(3900).then(n.bind(n, 83900))).default
                },
                ec = {
                    iconBackground: "#f9f7ec",
                    iconUrl: async () => (await n.e(7240).then(n.bind(n, 17240))).default
                },
                es = {
                    iconBackground: "#f9f7ec",
                    iconUrl: async () => (await n.e(8880).then(n.bind(n, 38880))).default
                },
                eu = {
                    iconBackground: "#000000",
                    iconUrl: async () => (await n.e(3206).then(n.bind(n, 83206))).default
                },
                ed = Object.fromEntries(Object.values({
                    arbitrum: {
                        chainId: 42161,
                        name: "Arbitrum",
                        ...ee
                    },
                    arbitrumGoerli: {
                        chainId: 421613,
                        ...ee
                    },
                    arbitrumSepolia: {
                        chainId: 421614,
                        ...ee
                    },
                    avalanche: {
                        chainId: 43114,
                        ...et
                    },
                    avalancheFuji: {
                        chainId: 43113,
                        ...et
                    },
                    base: {
                        chainId: 8453,
                        name: "Base",
                        ...en
                    },
                    baseGoerli: {
                        chainId: 84531,
                        ...en
                    },
                    baseSepolia: {
                        chainId: 84532,
                        ...en
                    },
                    bsc: {
                        chainId: 56,
                        name: "BSC",
                        ...el
                    },
                    bscTestnet: {
                        chainId: 97,
                        ...el
                    },
                    cronos: {
                        chainId: 25,
                        ...ea
                    },
                    cronosTestnet: {
                        chainId: 338,
                        ...ea
                    },
                    goerli: {
                        chainId: 5,
                        ...eo
                    },
                    hardhat: {
                        chainId: 31337,
                        iconBackground: "#f9f7ec",
                        iconUrl: async () => (await n.e(2041).then(n.bind(n, 42041))).default
                    },
                    holesky: {
                        chainId: 17e3,
                        ...eo
                    },
                    kovan: {
                        chainId: 42,
                        ...eo
                    },
                    localhost: {
                        chainId: 1337,
                        ...eo
                    },
                    mainnet: {
                        chainId: 1,
                        name: "Ethereum",
                        ...eo
                    },
                    optimism: {
                        chainId: 10,
                        name: "Optimism",
                        ...er
                    },
                    optimismGoerli: {
                        chainId: 420,
                        ...er
                    },
                    optimismKovan: {
                        chainId: 69,
                        ...er
                    },
                    optimismSepolia: {
                        chainId: 11155420,
                        ...er
                    },
                    polygon: {
                        chainId: 137,
                        name: "Polygon",
                        ...ei
                    },
                    polygonMumbai: {
                        chainId: 80001,
                        ...ei
                    },
                    rinkeby: {
                        chainId: 4,
                        ...eo
                    },
                    ropsten: {
                        chainId: 3,
                        ...eo
                    },
                    sepolia: {
                        chainId: 11155111,
                        ...eo
                    },
                    xdc: {
                        chainId: 50,
                        name: "XinFin",
                        ...ec
                    },
                    xdcTestnet: {
                        chainId: 51,
                        ...ec
                    },
                    zkSync: {
                        chainId: 324,
                        name: "zkSync",
                        ...es
                    },
                    zkSyncTestnet: {
                        chainId: 280,
                        ...es
                    },
                    zora: {
                        chainId: 7777777,
                        name: "Zora",
                        ...eu
                    },
                    zoraSepolia: {
                        chainId: 999999999,
                        ...eu
                    },
                    zoraTestnet: {
                        chainId: 999,
                        ...eu
                    }
                }).filter(Q).map(e => {
                    let {
                        chainId: t,
                        ...n
                    } = e;
                    return [t, n]
                })),
                ev = e => e.map(e => {
                    var t, n, l, a;
                    let o = null != (t = ed[e.id]) ? t : {};
                    return { ...e,
                        name: null != (n = o.name) ? n : e.name,
                        iconUrl: null != (l = e.iconUrl) ? l : o.iconUrl,
                        iconBackground: null != (a = e.iconBackground) ? a : o.iconBackground
                    }
                }),
                ef = (0, r.createContext)({
                    chains: []
                });

            function em(e) {
                let {
                    chains: t,
                    children: n,
                    initialChain: l
                } = e;
                return r.createElement(ef.Provider, {
                    value: (0, r.useMemo)(() => ({
                        chains: ev(t),
                        initialChainId: "number" == typeof l ? l : null == l ? void 0 : l.id
                    }), [t, l])
                }, n)
            }
            var eg = () => (0, r.useContext)(ef).chains,
                eh = () => (0, r.useContext)(ef).initialChainId,
                eC = () => {
                    let e = eg();
                    return (0, r.useMemo)(() => {
                        let t = {};
                        for (let n of e) t[n.id] = n;
                        return t
                    }, [e])
                },
                ep = (0, r.createContext)({
                    showBalance: void 0,
                    setShowBalance: () => {}
                });

            function ej(e) {
                let {
                    children: t
                } = e, [n, l] = (0, r.useState)();
                return r.createElement(ep.Provider, {
                    value: {
                        showBalance: n,
                        setShowBalance: l
                    }
                }, t)
            }
            var eb = () => (0, r.useContext)(ep);

            function eE() {
                let e = d.R.id,
                    t = (0, s.t_)(),
                    n = Array.isArray(t.chains) ? t.chains : [],
                    l = null == n ? void 0 : n.some(t => (null == t ? void 0 : t.id) === e);
                return {
                    chainId: e,
                    enabled: l
                }
            }

            function ew(e) {
                let {
                    chainId: t,
                    enabled: n
                } = eE(), {
                    data: l
                } = (0, s.c9)({
                    chainId: t,
                    enabled: n,
                    name: e
                });
                return l
            }

            function ey(e) {
                let {
                    chainId: t,
                    enabled: n
                } = eE(), {
                    data: l
                } = (0, s.F6)({
                    address: e,
                    chainId: t,
                    enabled: n
                });
                return l
            }

            function ex() {
                var e;
                let {
                    chain: t
                } = (0, s.LN)();
                return null != (e = null == t ? void 0 : t.id) ? e : null
            }
            var ek = "rk-transactions";

            function eB() {
                return function(e) {
                    try {
                        let t = e ? JSON.parse(e) : {};
                        return "object" == typeof t ? t : {}
                    } catch (e) {
                        return {}
                    }
                }("undefined" != typeof localStorage ? localStorage.getItem(ek) : null)
            }
            var eD = /^0x([A-Fa-f0-9]{64})$/,
                eT = (0, r.createContext)(null);

            function eS(e) {
                let {
                    children: t
                } = e, n = (0, s.t_)(), {
                    address: a
                } = (0, s.mA)(), o = ex(), [i] = (0, r.useState)(() => null != l ? l : l = function(e) {
                    let {
                        provider: t
                    } = e, n = eB(), l = t, a = new Set, o = new Map;

                    function r(e, t) {
                        var l, a;
                        return null != (a = null == (l = n[e]) ? void 0 : l[t]) ? a : []
                    }

                    function i(e, t, n, l) {
                        s(e, t, e => e.map(e => e.hash === n ? { ...e,
                            status: l
                        } : e))
                    }
                    async function c(e, t) {
                        await Promise.all(r(e, t).filter(e => "pending" === e.status).map(async n => {
                            let {
                                confirmations: a,
                                hash: r
                            } = n, c = o.get(r);
                            if (c) return await c;
                            let s = l.waitForTransactionReceipt({
                                confirmations: a,
                                hash: r,
                                timeout: 3e5
                            }).then(n => {
                                let {
                                    status: l
                                } = n;
                                o.delete(r), void 0 !== l && i(e, t, r, 0 === l || "reverted" === l ? "failed" : "confirmed")
                            }).catch(() => {
                                i(e, t, r, "failed")
                            });
                            return o.set(r, s), await s
                        }))
                    }

                    function s(e, t, l) {
                        var o, r;
                        (n = eB())[e] = null != (o = n[e]) ? o : {};
                        let i = 0,
                            s = l(null != (r = n[e][t]) ? r : []).filter(e => {
                                let {
                                    status: t
                                } = e;
                                return "pending" === t || i++ <= 10
                            });
                        n[e][t] = s.length > 0 ? s : void 0, localStorage.setItem(ek, JSON.stringify(n)),
                            function() {
                                for (let e of a) e()
                            }(), c(e, t)
                    }
                    return {
                        addTransaction: function(e, t, n) {
                            let l = function(e) {
                                let t = [];
                                return eD.test(e.hash) || t.push("Invalid transaction hash"), "string" != typeof e.description && t.push("Transaction must have a description"), void 0 !== e.confirmations && (!Number.isInteger(e.confirmations) || e.confirmations < 1) && t.push("Transaction confirmations must be a positiver integer"), t
                            }(n);
                            if (l.length > 0) throw Error(["Unable to add transaction", ...l].join("\n"));
                            s(e, t, e => [{ ...n,
                                status: "pending"
                            }, ...e.filter(e => {
                                let {
                                    hash: t
                                } = e;
                                return t !== n.hash
                            })])
                        },
                        clearTransactions: function(e, t) {
                            s(e, t, () => [])
                        },
                        getTransactions: r,
                        onChange: function(e) {
                            return a.add(e), () => {
                                a.delete(e)
                            }
                        },
                        setProvider: function(e) {
                            l = e
                        },
                        waitForPendingTransactions: c
                    }
                }({
                    provider: n
                }));
                return (0, r.useEffect)(() => {
                    i.setProvider(n)
                }, [i, n]), (0, r.useEffect)(() => {
                    a && o && i.waitForPendingTransactions(a, o)
                }, [i, a, o]), r.createElement(eT.Provider, {
                    value: i
                }, t)
            }

            function eI() {
                let e = (0, r.useContext)(eT);
                if (!e) throw Error("Transaction hooks must be used within RainbowKitProvider");
                return e
            }

            function e_() {
                let e = eI(),
                    {
                        address: t
                    } = (0, s.mA)(),
                    n = ex(),
                    [l, a] = (0, r.useState)(() => e && t && n ? e.getTransactions(t, n) : []);
                return (0, r.useEffect)(() => {
                    if (e && t && n) return a(e.getTransactions(t, n)), e.onChange(() => {
                        a(e.getTransactions(t, n))
                    })
                }, [e, t, n]), l
            }
            var eN = e => "function" == typeof e ? e() : e;

            function eL(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return Object.entries(function(e) {
                    let {
                        extends: t
                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = { ...(0, m.L)(w, eN(e))
                    };
                    if (!t) return n;
                    let l = (0, m.L)(w, eN(t));
                    return Object.fromEntries(Object.entries(n).filter(e => {
                        let [t, n] = e;
                        return n !== l[t]
                    }))
                }(e, t)).map(e => {
                    let [t, n] = e;
                    return "".concat(t, ":").concat(n.replace(/[:;{}</>]/g, ""), ";")
                }).join("")
            }
            var eA = {
                    appName: void 0,
                    disclaimer: void 0,
                    learnMoreUrl: "https://learn.rainbow.me/understanding-web3?utm_source=rainbowkit&utm_campaign=learnmore"
                },
                eO = (0, r.createContext)(eA),
                eM = (0, r.createContext)(!1),
                eF = () => {
                    let [e, t] = (0, r.useState)({
                        height: void 0,
                        width: void 0
                    });
                    return (0, r.useEffect)(() => {
                        var e;
                        let n;
                        let l = (e = () => {
                            t({
                                height: window.innerHeight,
                                width: window.innerWidth
                            })
                        }, () => {
                            n && clearTimeout(n), n = setTimeout(() => {
                                n = null, e()
                            }, 500)
                        });
                        return window.addEventListener("resize", l), l(), () => window.removeEventListener("resize", l)
                    }, []), e
                },
                ez = (0, r.createContext)({
                    connector: null,
                    setConnector: () => {}
                });

            function eR(e) {
                let {
                    children: t
                } = e, [n, l] = (0, r.useState)(null);
                return r.createElement(ez.Provider, {
                    value: (0, r.useMemo)(() => ({
                        connector: n,
                        setConnector: l
                    }), [n])
                }, t)
            }
            var eU = {
                    COMPACT: "compact",
                    WIDE: "wide"
                },
                eW = (0, r.createContext)(eU.WIDE);

            function eP(e) {
                let {
                    children: t,
                    modalSize: n
                } = e, {
                    width: l
                } = eF(), {
                    connector: a
                } = (0, r.useContext)(ez);
                return r.createElement(eW.Provider, {
                    value: l && l < 768 || a ? eU.COMPACT : n
                }, t)
            }
            var eq = (0, r.createContext)(!1);

            function eX() {
                return "undefined" != typeof navigator && /Version\/([0-9._]+).*Safari/.test(navigator.userAgent)
            }

            function eH() {
                var e;
                if ("undefined" == typeof navigator) return "Browser";
                let t = navigator.userAgent.toLowerCase();
                return (null == (e = navigator.brave) ? void 0 : e.isBrave) ? "Brave" : t.indexOf("edg/") > -1 ? "Edge" : t.indexOf("op") > -1 ? "Opera" : "undefined" != typeof document && "" !== getComputedStyle(document.body).getPropertyValue("--arc-palette-focus") ? "Arc" : t.indexOf("chrome") > -1 ? "Chrome" : t.indexOf("firefox") > -1 ? "Firefox" : eX() ? "Safari" : "Browser"
            }
            var {
                os: eY
            } = (0, g.UAParser)();

            function eZ() {
                return "Windows" === eY.name ? "Windows" : "Mac OS" === eY.name ? "macOS" : ["Ubuntu", "Mint", "Fedora", "Debian", "Arch", "Linux"].includes(eY.name) ? "Linux" : "Desktop"
            }
            var eV = e => {
                    var t, n, l, a, o, r, i, c, s, u, d, v;
                    let f = eH();
                    return null != (v = ({
                        Arc: null == (t = null == e ? void 0 : e.downloadUrls) ? void 0 : t.chrome,
                        Brave: null == (n = null == e ? void 0 : e.downloadUrls) ? void 0 : n.chrome,
                        Chrome: null == (l = null == e ? void 0 : e.downloadUrls) ? void 0 : l.chrome,
                        Edge: (null == (a = null == e ? void 0 : e.downloadUrls) ? void 0 : a.edge) || (null == (o = null == e ? void 0 : e.downloadUrls) ? void 0 : o.chrome),
                        Firefox: null == (r = null == e ? void 0 : e.downloadUrls) ? void 0 : r.firefox,
                        Opera: (null == (i = null == e ? void 0 : e.downloadUrls) ? void 0 : i.opera) || (null == (c = null == e ? void 0 : e.downloadUrls) ? void 0 : c.chrome),
                        Safari: null == (s = null == e ? void 0 : e.downloadUrls) ? void 0 : s.safari,
                        Browser: null == (u = null == e ? void 0 : e.downloadUrls) ? void 0 : u.browserExtension
                    })[f]) ? v : null == (d = null == e ? void 0 : e.downloadUrls) ? void 0 : d.browserExtension
                },
                eG = e => {
                    var t, n, l, a;
                    return null != (a = S() ? null == (t = null == e ? void 0 : e.downloadUrls) ? void 0 : t.ios : null == (n = null == e ? void 0 : e.downloadUrls) ? void 0 : n.android) ? a : null == (l = null == e ? void 0 : e.downloadUrls) ? void 0 : l.mobile
                },
                eJ = e => {
                    var t, n, l, a, o, r;
                    let i = eZ();
                    return null != (r = ({
                        Windows: null == (t = null == e ? void 0 : e.downloadUrls) ? void 0 : t.windows,
                        macOS: null == (n = null == e ? void 0 : e.downloadUrls) ? void 0 : n.macos,
                        Linux: null == (l = null == e ? void 0 : e.downloadUrls) ? void 0 : l.linux,
                        Desktop: null == (a = null == e ? void 0 : e.downloadUrls) ? void 0 : a.desktop
                    })[i]) ? r : null == (o = null == e ? void 0 : e.downloadUrls) ? void 0 : o.desktop
                },
                eK = "rk-recent";

            function e$() {
                return "undefined" != typeof localStorage ? function(e) {
                    try {
                        let t = e ? JSON.parse(e) : [];
                        return Array.isArray(t) ? t : []
                    } catch (e) {
                        return []
                    }
                }(localStorage.getItem(eK)) : []
            }

            function eQ() {
                var e;
                let t = eg(),
                    n = eh(),
                    {
                        connectAsync: l,
                        connectors: a
                    } = (0, s.$4)();
                async function o(e, a) {
                    var o, r, i;
                    let c = await a.getChainId(),
                        s = await l({
                            chainId: null != (i = null != n ? n : null == (o = t.find(e => {
                                let {
                                    id: t
                                } = e;
                                return t === c
                            })) ? void 0 : o.id) ? i : null == (r = t[0]) ? void 0 : r.id,
                            connector: a
                        });
                    return s && function(e) {
                        let t = [...new Set([e, ...e$()])];
                        localStorage.setItem(eK, JSON.stringify(t))
                    }(e), s
                }
                async function r(e, t) {
                    try {
                        return await o(e, t)
                    } catch (e) {
                        if (!("UserRejectedRequestError" === e.name || "Connection request reset. Please try again." === e.message)) throw e
                    }
                }
                let i = (function(e) {
                        let t = [];
                        for (let n of e) t.push(...n);
                        return t
                    })(a.map(e => {
                        var t;
                        return null != (t = e._wallets) ? t : []
                    })).sort((e, t) => e.index - t.index),
                    c = function(e, t) {
                        let n = {};
                        for (let l of e) {
                            let e = t(l);
                            e && (n[e] = l)
                        }
                        return n
                    }(i, e => e.id),
                    u = e$().map(e => c[e]).filter(Q).slice(0, 3),
                    d = [...u, ...i.filter(e => !u.includes(e))],
                    v = [];
                for (let t of d) {
                    if (!t) continue;
                    let n = u.includes(t);
                    v.push({ ...t,
                        connect: () => t.connector.showQrModal ? r(t.id, t.connector) : o(t.id, t.connector),
                        desktopDownloadUrl: eJ(t),
                        extensionDownloadUrl: eV(t),
                        groupName: t.groupName,
                        mobileDownloadUrl: eG(t),
                        onConnecting: e => t.connector.on("message", t => {
                            let {
                                type: n
                            } = t;
                            return "connecting" === n ? e() : void 0
                        }),
                        ready: (null == (e = t.installed) || e) && t.connector.ready,
                        recent: n,
                        showWalletConnectModal: t.walletConnectModalConnector ? () => r(t.id, t.walletConnectModalConnector) : void 0
                    })
                }
                return v
            }
            var e3 = async () => (await n.e(893).then(n.bind(n, 60893))).default,
                e6 = () => F(e3),
                e1 = () => r.createElement(R, {
                    background: "#d0d5de",
                    borderRadius: "10",
                    height: "48",
                    src: e3,
                    width: "48"
                }),
                e7 = async () => (await n.e(6518).then(n.bind(n, 46518))).default,
                e0 = () => F(e7),
                e2 = () => r.createElement(R, {
                    background: "#d0d5de",
                    borderRadius: "10",
                    height: "48",
                    src: e7,
                    width: "48"
                }),
                e4 = r.forwardRef((e, t) => {
                    let {
                        as: n = "div",
                        children: l,
                        className: a,
                        color: o,
                        display: i,
                        font: c = "body",
                        id: s,
                        size: u = "16",
                        style: d,
                        tabIndex: v,
                        textAlign: f = "inherit",
                        weight: m = "regular",
                        testId: g
                    } = e;
                    return r.createElement(L, {
                        as: n,
                        className: a,
                        color: o,
                        display: i,
                        fontFamily: c,
                        fontSize: u,
                        fontWeight: m,
                        id: s,
                        ref: t,
                        style: d,
                        tabIndex: v,
                        textAlign: f,
                        testId: g
                    }, l)
                });
            e4.displayName = "Text";
            var e8 = {
                large: {
                    fontSize: "16",
                    paddingX: "24",
                    paddingY: "10"
                },
                medium: {
                    fontSize: "14",
                    height: "28",
                    paddingX: "12",
                    paddingY: "4"
                },
                small: {
                    fontSize: "14",
                    paddingX: "10",
                    paddingY: "5"
                }
            };

            function e5(e) {
                let {
                    disabled: t = !1,
                    href: n,
                    label: l,
                    onClick: a,
                    rel: o = "noreferrer noopener",
                    size: i = "medium",
                    target: c = "_blank",
                    testId: s,
                    type: u = "primary"
                } = e, d = "primary" === u, v = "large" !== i, f = I(), m = t ? "actionButtonSecondaryBackground" : d ? "accentColor" : v ? "actionButtonSecondaryBackground" : null, {
                    fontSize: g,
                    height: h,
                    paddingX: C,
                    paddingY: p
                } = e8[i];
                return r.createElement(L, { ...n ? t ? {} : {
                        as: "a",
                        href: n,
                        rel: o,
                        target: c
                    } : {
                        as: "button",
                        type: "button"
                    },
                    onClick: t ? void 0 : a,
                    ...f && v ? {} : {
                        borderColor: !f || v || d ? "actionButtonBorder" : "actionButtonBorderMobile",
                        borderStyle: "solid",
                        borderWidth: "1"
                    },
                    borderRadius: "actionButton",
                    className: !t && k({
                        active: "shrinkSm",
                        hover: "grow"
                    }),
                    display: "block",
                    paddingX: C,
                    paddingY: p,
                    style: {
                        willChange: "transform"
                    },
                    testId: s,
                    textAlign: "center",
                    transition: "transform",
                    ...m ? {
                        background: m
                    } : {},
                    ...h ? {
                        height: h
                    } : {}
                }, r.createElement(e4, {
                    color: t ? "modalTextSecondary" : d ? "accentColorForeground" : "accentColor",
                    size: g,
                    weight: "bold"
                }, l))
            }
            var e9 = () => I() ? r.createElement("svg", {
                    "aria-hidden": !0,
                    fill: "none",
                    height: "11.5",
                    viewBox: "0 0 11.5 11.5",
                    width: "11.5",
                    xmlns: "http://www.w3.org/2000/svg"
                }, r.createElement("title", null, "Close"), r.createElement("path", {
                    d: "M2.13388 0.366117C1.64573 -0.122039 0.854272 -0.122039 0.366117 0.366117C-0.122039 0.854272 -0.122039 1.64573 0.366117 2.13388L3.98223 5.75L0.366117 9.36612C-0.122039 9.85427 -0.122039 10.6457 0.366117 11.1339C0.854272 11.622 1.64573 11.622 2.13388 11.1339L5.75 7.51777L9.36612 11.1339C9.85427 11.622 10.6457 11.622 11.1339 11.1339C11.622 10.6457 11.622 9.85427 11.1339 9.36612L7.51777 5.75L11.1339 2.13388C11.622 1.64573 11.622 0.854272 11.1339 0.366117C10.6457 -0.122039 9.85427 -0.122039 9.36612 0.366117L5.75 3.98223L2.13388 0.366117Z",
                    fill: "currentColor"
                })) : r.createElement("svg", {
                    "aria-hidden": !0,
                    fill: "none",
                    height: "10",
                    viewBox: "0 0 10 10",
                    width: "10",
                    xmlns: "http://www.w3.org/2000/svg"
                }, r.createElement("title", null, "Close"), r.createElement("path", {
                    d: "M1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L3.58579 5L0.292893 8.29289C-0.0976311 8.68342 -0.0976311 9.31658 0.292893 9.70711C0.683417 10.0976 1.31658 10.0976 1.70711 9.70711L5 6.41421L8.29289 9.70711C8.68342 10.0976 9.31658 10.0976 9.70711 9.70711C10.0976 9.31658 10.0976 8.68342 9.70711 8.29289L6.41421 5L9.70711 1.70711C10.0976 1.31658 10.0976 0.683417 9.70711 0.292893C9.31658 -0.0976311 8.68342 -0.0976311 8.29289 0.292893L5 3.58579L1.70711 0.292893Z",
                    fill: "currentColor"
                })),
                te = e => {
                    let {
                        "aria-label": t = "Close",
                        onClose: n
                    } = e, l = I();
                    return r.createElement(L, {
                        alignItems: "center",
                        "aria-label": t,
                        as: "button",
                        background: "closeButtonBackground",
                        borderColor: "actionButtonBorder",
                        borderRadius: "full",
                        borderStyle: "solid",
                        borderWidth: l ? "0" : "1",
                        className: k({
                            active: "shrinkSm",
                            hover: "growLg"
                        }),
                        color: "closeButton",
                        display: "flex",
                        height: l ? "30" : "28",
                        justifyContent: "center",
                        onClick: n,
                        style: {
                            willChange: "transform"
                        },
                        transition: "default",
                        type: "button",
                        width: l ? "30" : "28"
                    }, r.createElement(e9, null))
                },
                tt = async () => (await n.e(1846).then(n.bind(n, 11846))).default;

            function tn(e) {
                let {
                    onClose: t,
                    onCloseModal: n
                } = e, {
                    i18n: l
                } = (0, r.useContext)(K), [{
                    status: a,
                    ...o
                }, i] = r.useState({
                    status: "idle"
                }), c = function() {
                    var e;
                    let {
                        adapter: t
                    } = null != (e = (0, r.useContext)(B)) ? e : {};
                    if (!t) throw Error("No authentication adapter found");
                    return t
                }(), u = (0, r.useCallback)(async () => {
                    try {
                        let e = await c.getNonce();
                        i(t => ({ ...t,
                            nonce: e
                        }))
                    } catch (e) {
                        i(e => ({ ...e,
                            errorMessage: l.t("sign_in.message.preparing_error"),
                            status: "idle"
                        }))
                    }
                }, [c, l.t]), d = (0, r.useRef)(!1);
                r.useEffect(() => {
                    d.current || (d.current = !0, u())
                }, [u]);
                let v = I(),
                    {
                        address: f
                    } = (0, s.mA)(),
                    {
                        chain: m
                    } = (0, s.LN)(),
                    {
                        signMessageAsync: g
                    } = (0, s.QW)(),
                    C = async () => {
                        try {
                            let e;
                            let t = null == m ? void 0 : m.id,
                                {
                                    nonce: a
                                } = o;
                            if (!f || !t || !a) return;
                            i(e => ({ ...e,
                                errorMessage: void 0,
                                status: "signing"
                            }));
                            let r = c.createMessage({
                                address: f,
                                chainId: t,
                                nonce: a
                            });
                            try {
                                e = await g({
                                    message: c.getMessageBody({
                                        message: r
                                    })
                                })
                            } catch (e) {
                                if (e instanceof h.ab) return i(e => ({ ...e,
                                    status: "idle"
                                }));
                                return i(e => ({ ...e,
                                    errorMessage: l.t("sign_in.signature.signing_error"),
                                    status: "idle"
                                }))
                            }
                            i(e => ({ ...e,
                                status: "verifying"
                            }));
                            try {
                                if (await c.verify({
                                        message: r,
                                        signature: e
                                    })) {
                                    n();
                                    return
                                }
                                throw Error()
                            } catch (e) {
                                return i(e => ({ ...e,
                                    errorMessage: l.t("sign_in.signature.verifying_error"),
                                    status: "idle"
                                }))
                            }
                        } catch (e) {
                            i({
                                errorMessage: l.t("sign_in.signature.oops_error"),
                                status: "idle"
                            })
                        }
                    };
                return r.createElement(L, {
                    position: "relative"
                }, r.createElement(L, {
                    display: "flex",
                    paddingRight: "16",
                    paddingTop: "16",
                    position: "absolute",
                    right: "0"
                }, r.createElement(te, {
                    onClose: t
                })), r.createElement(L, {
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    gap: v ? "32" : "24",
                    padding: "24",
                    paddingX: "18",
                    style: {
                        paddingTop: v ? "60px" : "36px"
                    }
                }, r.createElement(L, {
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    gap: v ? "6" : "4",
                    style: {
                        maxWidth: v ? 320 : 280
                    }
                }, r.createElement(L, {
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    gap: v ? "32" : "16"
                }, r.createElement(R, {
                    height: 40,
                    src: tt,
                    width: 40
                }), r.createElement(e4, {
                    color: "modalText",
                    size: v ? "20" : "18",
                    textAlign: "center",
                    weight: "heavy"
                }, l.t("sign_in.label"))), r.createElement(L, {
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    gap: v ? "16" : "12"
                }, r.createElement(e4, {
                    color: "modalTextSecondary",
                    size: v ? "16" : "14",
                    textAlign: "center"
                }, l.t("sign_in.description")), "idle" === a && o.errorMessage ? r.createElement(e4, {
                    color: "error",
                    size: v ? "16" : "14",
                    textAlign: "center",
                    weight: "bold"
                }, o.errorMessage) : null)), r.createElement(L, {
                    alignItems: v ? void 0 : "center",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8",
                    width: "full"
                }, r.createElement(e5, {
                    disabled: !o.nonce || "signing" === a || "verifying" === a,
                    label: o.nonce ? "signing" === a ? l.t("sign_in.signature.waiting") : "verifying" === a ? l.t("sign_in.signature.verifying") : l.t("sign_in.message.send") : l.t("sign_in.message.preparing"),
                    onClick: C,
                    size: v ? "large" : "medium",
                    testId: "auth-message-button"
                }), v ? r.createElement(e5, {
                    label: "Cancel",
                    onClick: t,
                    size: "large",
                    type: "secondary"
                }) : r.createElement(L, {
                    as: "button",
                    borderRadius: "full",
                    className: k({
                        active: "shrink",
                        hover: "grow"
                    }),
                    display: "block",
                    onClick: t,
                    paddingX: "10",
                    paddingY: "5",
                    rel: "noreferrer",
                    style: {
                        willChange: "transform"
                    },
                    target: "_blank",
                    transition: "default"
                }, r.createElement(e4, {
                    color: "closeButton",
                    size: v ? "16" : "14",
                    weight: "bold"
                }, l.t("sign_in.message.cancel"))))))
            }
            var tl = "WALLETCONNECT_DEEPLINK_CHOICE";

            function ta() {
                localStorage.removeItem(tl)
            }
            var to = (0, r.createContext)(void 0),
                tr = "data-rk",
                ti = e => ({
                    [tr]: e || ""
                }),
                tc = e => {
                    if (e && !/^[a-zA-Z0-9_]+$/.test(e)) throw Error("Invalid ID: ".concat(e));
                    return e ? "[".concat(tr, '="').concat(e, '"]') : "[".concat(tr, "]")
                },
                ts = () => ti((0, r.useContext)(to)),
                tu = (0, a.W)();

            function td(e) {
                let {
                    appInfo: t,
                    avatar: n,
                    chains: l,
                    children: a,
                    coolMode: o = !1,
                    id: i,
                    initialChain: c,
                    locale: u,
                    modalSize: d = eU.WIDE,
                    showRecentTransactions: v = !1,
                    theme: f = tu
                } = e;
                if (! function() {
                        let e = eg(),
                            t = eQ(),
                            n = "unauthenticated" === D(),
                            l = (0, r.useCallback)(() => {
                                F(...t.map(e => e.iconUrl), ...e.map(e => e.iconUrl).filter(Q)), I() || (e6(), e0()), n && F(tt)
                            }, [t, e, n]);
                        (0, r.useEffect)(() => {
                            l()
                        }, [l])
                    }(), ! function() {
                        let e = (0, r.useCallback)(() => {
                            ! function(e) {
                                let {
                                    version: t
                                } = e;
                                localStorage.setItem("rk-version", t)
                            }({
                                version: "1.3.7"
                            })
                        }, []);
                        (0, r.useEffect)(() => {
                            e()
                        }, [e])
                    }(), (0, s.mA)({
                        onDisconnect: ta
                    }), "function" == typeof f) throw Error('A theme function was provided to the "theme" prop instead of a theme object. You must execute this function to get the resulting theme object.');
                let m = tc(i),
                    g = { ...eA,
                        ...t
                    };
                return r.createElement(em, {
                    chains: l,
                    initialChain: c
                }, r.createElement(eR, null, r.createElement($, {
                    locale: u
                }, r.createElement(eM.Provider, {
                    value: o
                }, r.createElement(eP, {
                    modalSize: d
                }, r.createElement(eq.Provider, {
                    value: v
                }, r.createElement(eS, null, r.createElement(X.Provider, {
                    value: null != n ? n : q
                }, r.createElement(eO.Provider, {
                    value: g
                }, r.createElement(to.Provider, {
                    value: i
                }, r.createElement(ej, null, r.createElement(nx, null, f ? r.createElement("div", { ...ti(i)
                }, r.createElement("style", {
                    dangerouslySetInnerHTML: {
                        __html: ["".concat(m, "{").concat(eL("lightMode" in f ? f.lightMode : f), "}"), "darkMode" in f ? "@media(prefers-color-scheme:dark){".concat(m, "{").concat(eL(f.darkMode, {
                            extends: f.lightMode
                        }), "}}") : null].join("")
                    }
                }), a) : a))))))))))))
            }
            var tv = (e, t) => {
                let n = e.querySelectorAll("button:not(:disabled), a[href]");
                0 !== n.length && n["end" === t ? n.length - 1 : 0].focus()
            };

            function tf(e) {
                let t = (0, r.useRef)(null);
                return (0, r.useEffect)(() => {
                    let e = document.activeElement;
                    return () => {
                        var t;
                        null == (t = e.focus) || t.call(e)
                    }
                }, []), (0, r.useEffect)(() => {
                    if (t.current) {
                        let e = t.current.querySelector("[data-auto-focus]");
                        e ? e.focus() : t.current.focus()
                    }
                }, []), r.createElement(r.Fragment, null, r.createElement("div", {
                    onFocus: (0, r.useCallback)(() => t.current && tv(t.current, "end"), []),
                    tabIndex: 0
                }), r.createElement("div", {
                    ref: t,
                    style: {
                        outline: "none"
                    },
                    tabIndex: -1,
                    ...e
                }), r.createElement("div", {
                    onFocus: (0, r.useCallback)(() => t.current && tv(t.current, "start"), []),
                    tabIndex: 0
                }))
            }
            var tm = e => e.stopPropagation();

            function tg(e) {
                let {
                    children: t,
                    onClose: n,
                    open: l,
                    titleId: a
                } = e;
                (0, r.useEffect)(() => {
                    let e = e => l && "Escape" === e.key && n();
                    return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
                }, [l, n]);
                let [o, i] = (0, r.useState)(!0);
                (0, r.useEffect)(() => {
                    i("hidden" !== getComputedStyle(window.document.body).overflow)
                }, []);
                let c = (0, r.useCallback)(() => n(), [n]),
                    s = ts(),
                    u = I();
                return r.createElement(r.Fragment, null, l ? (0, v.createPortal)(r.createElement(f.Z, {
                    enabled: o
                }, r.createElement(L, { ...s
                }, r.createElement(L, { ...s,
                    alignItems: u ? "flex-end" : "center",
                    "aria-labelledby": a,
                    "aria-modal": !0,
                    className: "_9pm4ki3 ju367v9h ju367vb3 ju367va ju367v2q ju367v8q",
                    onClick: c,
                    position: "fixed",
                    role: "dialog"
                }, r.createElement(tf, {
                    className: "_9pm4ki5 ju367va ju367v15 ju367v8r",
                    onClick: tm,
                    role: "document"
                }, t)))), document.body) : null)
            }

            function th(e) {
                let {
                    bottomSheetOnMobile: t = !1,
                    children: n,
                    marginTop: l,
                    padding: a = "16",
                    paddingBottom: o,
                    wide: i = !1
                } = e, c = I(), s = (0, r.useContext)(eW) === eU.COMPACT;
                return r.createElement(L, {
                    marginTop: l
                }, r.createElement(L, {
                    className: [i ? c ? "_1ckjpok2 _1ckjpok1 ju367vb6 ju367vdr ju367vp ju367vt ju367vv ju367vel ju367va ju367v15 ju367v6c ju367v8r" : s ? "_1ckjpok4 _1ckjpok1 ju367vb6 ju367vdr ju367vp ju367vt ju367vv ju367vel ju367va ju367v15 ju367v6c ju367v8r" : "_1ckjpok3 _1ckjpok1 ju367vb6 ju367vdr ju367vp ju367vt ju367vv ju367vel ju367va ju367v15 ju367v6c ju367v8r" : "_1ckjpok1 ju367vb6 ju367vdr ju367vp ju367vt ju367vv ju367vel ju367va ju367v15 ju367v6c ju367v8r", c ? "_1ckjpok6 ju367vq" : null, c && t ? "_1ckjpok7" : null].join(" ")
                }, r.createElement(L, {
                    padding: a,
                    paddingBottom: null != o ? o : a
                }, n)))
            }
            var tC = ["k", "m", "b", "t"];

            function tp(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                return e.toString().replace(new RegExp("(.+\\.\\d{".concat(t, "})\\d+")), "$1").replace(/(\.[1-9]*)0+$/, "$1").replace(/\.$/, "")
            }

            function tj(e) {
                if (e < 1) return tp(e, 3);
                if (e < 100) return tp(e, 2);
                if (e < 1e4) return new Intl.NumberFormat().format(parseFloat(tp(e, 1)));
                let t = String(e);
                for (let n = tC.length - 1; n >= 0; n--) {
                    let l = 10 ** ((n + 1) * 3);
                    if (l <= e) {
                        t = tp(e = 10 * e / l / 10, 1) + tC[n];
                        break
                    }
                }
                return t
            }

            function tb(e) {
                return e.length < 8 ? e : "".concat(e.substring(0, 4), "…").concat(e.substring(e.length - 4))
            }

            function tE(e) {
                let t = e.split("."),
                    n = t.pop();
                return t.join(".").length > 24 ? "".concat(t.join(".").substring(0, 24), "...") : "".concat(t.join("."), ".").concat(n)
            }
            var tw = () => r.createElement("svg", {
                    fill: "none",
                    height: "13",
                    viewBox: "0 0 13 13",
                    width: "13",
                    xmlns: "http://www.w3.org/2000/svg"
                }, r.createElement("title", null, "Copied"), r.createElement("path", {
                    d: "M4.94568 12.2646C5.41052 12.2646 5.77283 12.0869 6.01892 11.7109L12.39 1.96973C12.5677 1.69629 12.6429 1.44336 12.6429 1.2041C12.6429 0.561523 12.1644 0.0966797 11.5082 0.0966797C11.057 0.0966797 10.7767 0.260742 10.5033 0.691406L4.9115 9.50977L2.07458 5.98926C1.82166 5.68848 1.54822 5.55176 1.16541 5.55176C0.502319 5.55176 0.0238037 6.02344 0.0238037 6.66602C0.0238037 6.95312 0.112671 7.20605 0.358765 7.48633L3.88611 11.7588C4.18005 12.1074 4.50818 12.2646 4.94568 12.2646Z",
                    fill: "currentColor"
                })),
                ty = () => r.createElement("svg", {
                    fill: "none",
                    height: "16",
                    viewBox: "0 0 17 16",
                    width: "17",
                    xmlns: "http://www.w3.org/2000/svg"
                }, r.createElement("title", null, "Copy"), r.createElement("path", {
                    d: "M3.04236 12.3027H4.18396V13.3008C4.18396 14.8525 5.03845 15.7002 6.59705 15.7002H13.6244C15.183 15.7002 16.0375 14.8525 16.0375 13.3008V6.24609C16.0375 4.69434 15.183 3.84668 13.6244 3.84668H12.4828V2.8418C12.4828 1.29688 11.6283 0.442383 10.0697 0.442383H3.04236C1.48376 0.442383 0.629272 1.29004 0.629272 2.8418V9.90332C0.629272 11.4551 1.48376 12.3027 3.04236 12.3027ZM3.23376 10.5391C2.68689 10.5391 2.39294 10.2656 2.39294 9.68457V3.06055C2.39294 2.47949 2.68689 2.21289 3.23376 2.21289H9.8783C10.4252 2.21289 10.7191 2.47949 10.7191 3.06055V3.84668H6.59705C5.03845 3.84668 4.18396 4.69434 4.18396 6.24609V10.5391H3.23376ZM6.78845 13.9365C6.24158 13.9365 5.94763 13.6699 5.94763 13.0889V6.45801C5.94763 5.87695 6.24158 5.61035 6.78845 5.61035H13.433C13.9799 5.61035 14.2738 5.87695 14.2738 6.45801V13.0889C14.2738 13.6699 13.9799 13.9365 13.433 13.9365H6.78845Z",
                    fill: "currentColor"
                })),
                tx = () => r.createElement("svg", {
                    fill: "none",
                    height: "16",
                    viewBox: "0 0 18 16",
                    width: "18",
                    xmlns: "http://www.w3.org/2000/svg"
                }, r.createElement("title", null, "Disconnect"), r.createElement("path", {
                    d: "M2.67834 15.5908H9.99963C11.5514 15.5908 12.399 14.7432 12.399 13.1777V10.2656H10.6354V12.9863C10.6354 13.5332 10.3688 13.8271 9.78772 13.8271H2.89026C2.3092 13.8271 2.0426 13.5332 2.0426 12.9863V3.15625C2.0426 2.60254 2.3092 2.30859 2.89026 2.30859H9.78772C10.3688 2.30859 10.6354 2.60254 10.6354 3.15625V5.89746H12.399V2.95801C12.399 1.39941 11.5514 0.544922 9.99963 0.544922H2.67834C1.12659 0.544922 0.278931 1.39941 0.278931 2.95801V13.1777C0.278931 14.7432 1.12659 15.5908 2.67834 15.5908ZM7.43616 8.85059H14.0875L15.0924 8.78906L14.566 9.14453L13.6842 9.96484C13.5406 10.1016 13.4586 10.2861 13.4586 10.4844C13.4586 10.8398 13.7321 11.168 14.1217 11.168C14.3199 11.168 14.4635 11.0928 14.6002 10.9561L16.7809 8.68652C16.986 8.48145 17.0543 8.27637 17.0543 8.06445C17.0543 7.85254 16.986 7.64746 16.7809 7.43555L14.6002 5.17285C14.4635 5.03613 14.3199 4.9541 14.1217 4.9541C13.7321 4.9541 13.4586 5.27539 13.4586 5.6377C13.4586 5.83594 13.5406 6.02734 13.6842 6.15723L14.566 6.98438L15.0924 7.33984L14.0875 7.27148H7.43616C7.01917 7.27148 6.65686 7.62012 6.65686 8.06445C6.65686 8.50195 7.01917 8.85059 7.43616 8.85059Z",
                    fill: "currentColor"
                })),
                tk = e => {
                    var t, n;
                    return null == (n = null == (t = null == e ? void 0 : e.blockExplorers) ? void 0 : t.default) ? void 0 : n.url
                },
                tB = () => r.createElement("svg", {
                    fill: "none",
                    height: "19",
                    viewBox: "0 0 20 19",
                    width: "20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, r.createElement("title", null, "Link"), r.createElement("path", {
                    d: "M10 18.9443C15.0977 18.9443 19.2812 14.752 19.2812 9.6543C19.2812 4.56543 15.0889 0.373047 10 0.373047C4.90234 0.373047 0.71875 4.56543 0.71875 9.6543C0.71875 14.752 4.91113 18.9443 10 18.9443ZM10 16.6328C6.1416 16.6328 3.03906 13.5215 3.03906 9.6543C3.03906 5.7959 6.13281 2.68457 10 2.68457C13.8584 2.68457 16.9697 5.7959 16.9697 9.6543C16.9785 13.5215 13.8672 16.6328 10 16.6328ZM12.7158 12.1416C13.2432 12.1416 13.5684 11.7549 13.5684 11.1836V7.19336C13.5684 6.44629 13.1377 6.05957 12.417 6.05957H8.40918C7.8291 6.05957 7.45117 6.38477 7.45117 6.91211C7.45117 7.43945 7.8291 7.77344 8.40918 7.77344H9.69238L10.7207 7.63281L9.53418 8.67871L6.73047 11.4912C6.53711 11.6758 6.41406 11.9395 6.41406 12.2031C6.41406 12.7832 6.85352 13.1699 7.39844 13.1699C7.68848 13.1699 7.92578 13.0732 8.1543 12.8623L10.9316 10.0762L11.9775 8.89844L11.8545 9.98828V11.1836C11.8545 11.7725 12.1885 12.1416 12.7158 12.1416Z",
                    fill: "currentColor"
                })),
                tD = () => r.createElement("svg", {
                    fill: "none",
                    height: "19",
                    viewBox: "0 0 20 19",
                    width: "20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, r.createElement("title", null, "Cancel"), r.createElement("path", {
                    d: "M10 18.9443C15.0977 18.9443 19.2812 14.752 19.2812 9.6543C19.2812 4.56543 15.0889 0.373047 10 0.373047C4.90234 0.373047 0.71875 4.56543 0.71875 9.6543C0.71875 14.752 4.91113 18.9443 10 18.9443ZM10 16.6328C6.1416 16.6328 3.03906 13.5215 3.03906 9.6543C3.03906 5.7959 6.13281 2.68457 10 2.68457C13.8584 2.68457 16.9697 5.7959 16.9697 9.6543C16.9785 13.5215 13.8672 16.6328 10 16.6328ZM7.29297 13.3018C7.58301 13.3018 7.81152 13.2139 7.99609 13.0205L10 11.0166L12.0127 13.0205C12.1973 13.2051 12.4258 13.3018 12.707 13.3018C13.2432 13.3018 13.6562 12.8887 13.6562 12.3525C13.6562 12.0977 13.5508 11.8691 13.3662 11.6934L11.3535 9.67188L13.375 7.6416C13.5596 7.44824 13.6562 7.22852 13.6562 6.98242C13.6562 6.44629 13.2432 6.0332 12.7158 6.0332C12.4346 6.0332 12.2148 6.12109 12.0215 6.31445L10 8.32715L7.9873 6.32324C7.80273 6.12988 7.58301 6.04199 7.29297 6.04199C6.76562 6.04199 6.35254 6.45508 6.35254 6.99121C6.35254 7.2373 6.44922 7.46582 6.63379 7.6416L8.65527 9.67188L6.63379 11.6934C6.44922 11.8691 6.35254 12.1064 6.35254 12.3525C6.35254 12.8887 6.76562 13.3018 7.29297 13.3018Z",
                    fill: "currentColor"
                })),
                tT = () => r.createElement("svg", {
                    fill: "none",
                    height: "20",
                    viewBox: "0 0 20 20",
                    width: "20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, r.createElement("title", null, "Success"), r.createElement("path", {
                    d: "M10 19.4443C15.0977 19.4443 19.2812 15.252 19.2812 10.1543C19.2812 5.06543 15.0889 0.873047 10 0.873047C4.90234 0.873047 0.71875 5.06543 0.71875 10.1543C0.71875 15.252 4.91113 19.4443 10 19.4443ZM10 17.1328C6.1416 17.1328 3.03906 14.0215 3.03906 10.1543C3.03906 6.2959 6.13281 3.18457 10 3.18457C13.8584 3.18457 16.9697 6.2959 16.9697 10.1543C16.9785 14.0215 13.8672 17.1328 10 17.1328ZM9.07715 14.3379C9.4375 14.3379 9.7627 14.1533 9.97363 13.8369L13.7441 8.00977C13.8848 7.79883 13.9814 7.5791 13.9814 7.36816C13.9814 6.84961 13.5244 6.48926 13.0322 6.48926C12.707 6.48926 12.4258 6.66504 12.2148 7.0166L9.05957 12.0967L7.5918 10.2949C7.37207 10.0225 7.13477 9.9082 6.84473 9.9082C6.33496 9.9082 5.92188 10.3125 5.92188 10.8223C5.92188 11.0684 6.00098 11.2793 6.18555 11.5078L8.1543 13.8545C8.40918 14.1709 8.70801 14.3379 9.07715 14.3379Z",
                    fill: "currentColor"
                })),
                tS = e => {
                    switch (e) {
                        case "pending":
                        default:
                            return W;
                        case "confirmed":
                            return tT;
                        case "failed":
                            return tD
                    }
                };

            function tI(e) {
                let {
                    tx: t
                } = e, n = I(), l = tS(t.status), a = "failed" === t.status ? "error" : "accentColor", {
                    chain: o
                } = (0, s.LN)(), i = "confirmed" === t.status ? "Confirmed" : "failed" === t.status ? "Failed" : "Pending", c = tk(o);
                return r.createElement(r.Fragment, null, r.createElement(L, { ...c ? {
                        as: "a",
                        background: {
                            hover: "profileForeground"
                        },
                        borderRadius: "menuButton",
                        className: k({
                            active: "shrink"
                        }),
                        href: "".concat(c, "/tx/").concat(t.hash),
                        rel: "noreferrer noopener",
                        target: "_blank",
                        transition: "default"
                    } : {},
                    color: "modalText",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: "8",
                    width: "full"
                }, r.createElement(L, {
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "row",
                    gap: n ? "16" : "14"
                }, r.createElement(L, {
                    color: a
                }, r.createElement(l, null)), r.createElement(L, {
                    display: "flex",
                    flexDirection: "column",
                    gap: n ? "3" : "1"
                }, r.createElement(L, null, r.createElement(e4, {
                    color: "modalText",
                    font: "body",
                    size: n ? "16" : "14",
                    weight: "bold"
                }, null == t ? void 0 : t.description)), r.createElement(L, null, r.createElement(e4, {
                    color: "pending" === t.status ? "modalTextSecondary" : a,
                    font: "body",
                    size: "14",
                    weight: n ? "medium" : "regular"
                }, i)))), c && r.createElement(L, {
                    alignItems: "center",
                    color: "modalTextDim",
                    display: "flex"
                }, r.createElement(tB, null))))
            }

            function t_(e) {
                let {
                    address: t
                } = e, n = e_(), l = function() {
                    let e = eI(),
                        {
                            address: t
                        } = (0, s.mA)(),
                        n = ex();
                    return (0, r.useCallback)(() => {
                        if (!t || !n) throw Error("No address or chain ID found");
                        e.clearTransactions(t, n)
                    }, [e, t, n])
                }(), {
                    chain: a
                } = (0, s.LN)(), o = tk(a), i = n.slice(0, 3), c = i.length > 0, u = I(), {
                    appName: d
                } = (0, r.useContext)(eO), {
                    i18n: v
                } = (0, r.useContext)(K);
                return r.createElement(r.Fragment, null, r.createElement(L, {
                    display: "flex",
                    flexDirection: "column",
                    gap: "10",
                    paddingBottom: "2",
                    paddingTop: "16",
                    paddingX: u ? "8" : "18"
                }, c && r.createElement(L, {
                    paddingBottom: u ? "4" : "0",
                    paddingTop: "8",
                    paddingX: u ? "12" : "6"
                }, r.createElement(L, {
                    display: "flex",
                    justifyContent: "space-between"
                }, r.createElement(e4, {
                    color: "modalTextSecondary",
                    size: u ? "16" : "14",
                    weight: "semibold"
                }, v.t("profile.transactions.recent.title")), r.createElement(L, {
                    style: {
                        marginBottom: -6,
                        marginLeft: -10,
                        marginRight: -10,
                        marginTop: -6
                    }
                }, r.createElement(L, {
                    as: "button",
                    background: {
                        hover: "profileForeground"
                    },
                    borderRadius: "actionButton",
                    className: k({
                        active: "shrink"
                    }),
                    onClick: l,
                    paddingX: u ? "8" : "12",
                    paddingY: u ? "4" : "5",
                    transition: "default",
                    type: "button"
                }, r.createElement(e4, {
                    color: "modalTextSecondary",
                    size: u ? "16" : "14",
                    weight: "semibold"
                }, v.t("profile.transactions.clear.label")))))), r.createElement(L, {
                    display: "flex",
                    flexDirection: "column",
                    gap: "4"
                }, c ? i.map(e => r.createElement(tI, {
                    key: e.hash,
                    tx: e
                })) : r.createElement(r.Fragment, null, r.createElement(L, {
                    padding: u ? "12" : "8"
                }, r.createElement(e4, {
                    color: "modalTextDim",
                    size: u ? "16" : "14",
                    weight: u ? "medium" : "bold"
                }, d ? v.t("profile.transactions.description", {
                    appName: d
                }) : v.t("profile.transactions.description_fallback"))), u && r.createElement(L, {
                    background: "generalBorderDim",
                    height: "1",
                    marginX: "12",
                    marginY: "8"
                })))), o && r.createElement(L, {
                    paddingBottom: "18",
                    paddingX: u ? "8" : "18"
                }, r.createElement(L, {
                    alignItems: "center",
                    as: "a",
                    background: {
                        hover: "profileForeground"
                    },
                    borderRadius: "menuButton",
                    className: k({
                        active: "shrink"
                    }),
                    color: "modalTextDim",
                    display: "flex",
                    flexDirection: "row",
                    href: "".concat(o, "/address/").concat(t),
                    justifyContent: "space-between",
                    paddingX: "8",
                    paddingY: "12",
                    rel: "noreferrer noopener",
                    style: {
                        willChange: "transform"
                    },
                    target: "_blank",
                    transition: "default",
                    width: "full",
                    ...u ? {
                        paddingLeft: "12"
                    } : {}
                }, r.createElement(e4, {
                    color: "modalText",
                    font: "body",
                    size: u ? "16" : "14",
                    weight: u ? "semibold" : "bold"
                }, v.t("profile.explorer.label")), r.createElement(tB, null))))
            }

            function tN(e) {
                let {
                    action: t,
                    icon: n,
                    label: l,
                    testId: a,
                    url: o
                } = e, i = I();
                return r.createElement(L, { ...o ? {
                        as: "a",
                        href: o,
                        rel: "noreferrer noopener",
                        target: "_blank"
                    } : {
                        as: "button",
                        type: "button"
                    },
                    background: {
                        base: "profileAction",
                        ...i ? {} : {
                            hover: "profileActionHover"
                        }
                    },
                    borderRadius: "menuButton",
                    boxShadow: "profileDetailsAction",
                    className: k({
                        active: "shrinkSm",
                        hover: i ? void 0 : "grow"
                    }),
                    display: "flex",
                    onClick: t,
                    padding: i ? "6" : "8",
                    style: {
                        willChange: "transform"
                    },
                    testId: a,
                    transition: "default",
                    width: "full"
                }, r.createElement(L, {
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1",
                    justifyContent: "center",
                    paddingTop: "2",
                    width: "full"
                }, r.createElement(L, {
                    color: "modalText",
                    height: "max"
                }, n), r.createElement(L, null, r.createElement(e4, {
                    color: "modalText",
                    size: i ? "12" : "13",
                    weight: "semibold"
                }, l))))
            }

            function tL(e) {
                let {
                    address: t,
                    ensAvatar: n,
                    ensName: l,
                    onClose: a,
                    onDisconnect: o
                } = e, i = (0, r.useContext)(eq), {
                    data: c
                } = (0, s.KQ)({
                    address: t
                }), [u, d] = (0, r.useState)(!1), v = (0, r.useCallback)(() => {
                    t && (navigator.clipboard.writeText(t), d(!0))
                }, [t]);
                if ((0, r.useEffect)(() => {
                        if (u) {
                            let e = setTimeout(() => {
                                d(!1)
                            }, 1500);
                            return () => clearTimeout(e)
                        }
                    }, [u]), !t) return null;
                let f = l ? tE(l) : tb(t),
                    m = null == c ? void 0 : c.formatted,
                    g = m ? tj(parseFloat(m)) : void 0,
                    h = "rk_profile_title",
                    C = I(),
                    {
                        i18n: p
                    } = (0, r.useContext)(K);
                return r.createElement(r.Fragment, null, r.createElement(L, {
                    display: "flex",
                    flexDirection: "column"
                }, r.createElement(L, {
                    background: "profileForeground",
                    padding: "16"
                }, r.createElement(L, {
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    gap: C ? "16" : "12",
                    justifyContent: "center",
                    margin: "8",
                    style: {
                        textAlign: "center"
                    }
                }, r.createElement(L, {
                    style: {
                        position: "absolute",
                        right: 16,
                        top: 16,
                        willChange: "transform"
                    }
                }, r.createElement(te, {
                    onClose: a
                })), " ", r.createElement(L, {
                    marginTop: C ? "24" : "0"
                }, r.createElement(H, {
                    address: t,
                    imageUrl: n,
                    size: C ? 82 : 74
                })), r.createElement(L, {
                    display: "flex",
                    flexDirection: "column",
                    gap: C ? "4" : "0",
                    textAlign: "center"
                }, r.createElement(L, {
                    textAlign: "center"
                }, r.createElement(e4, {
                    as: "h1",
                    color: "modalText",
                    id: h,
                    size: C ? "20" : "18",
                    weight: "heavy"
                }, f)), c && r.createElement(L, {
                    textAlign: "center"
                }, r.createElement(e4, {
                    as: "h1",
                    color: "modalTextSecondary",
                    id: h,
                    size: C ? "16" : "14",
                    weight: "semibold"
                }, g, " ", c.symbol)))), r.createElement(L, {
                    display: "flex",
                    flexDirection: "row",
                    gap: "8",
                    margin: "2",
                    marginTop: "16"
                }, r.createElement(tN, {
                    action: v,
                    icon: u ? r.createElement(tw, null) : r.createElement(ty, null),
                    label: u ? p.t("profile.copy_address.copied") : p.t("profile.copy_address.label")
                }), r.createElement(tN, {
                    action: o,
                    icon: r.createElement(tx, null),
                    label: p.t("profile.disconnect.label"),
                    testId: "disconnect-button"
                }))), i && r.createElement(r.Fragment, null, r.createElement(L, {
                    background: "generalBorder",
                    height: "1",
                    marginTop: "-1"
                }), r.createElement(L, null, r.createElement(t_, {
                    address: t
                })))))
            }

            function tA(e) {
                let {
                    onClose: t,
                    open: n
                } = e, {
                    address: l
                } = (0, s.mA)(), a = ey(l), o = ew(a), {
                    disconnect: i
                } = (0, s.qL)();
                return l ? r.createElement(r.Fragment, null, l && r.createElement(tg, {
                    onClose: t,
                    open: n,
                    titleId: "rk_account_modal_title"
                }, r.createElement(th, {
                    bottomSheetOnMobile: !0,
                    padding: "0"
                }, r.createElement(tL, {
                    address: l,
                    ensAvatar: o,
                    ensName: a,
                    onClose: t,
                    onDisconnect: i
                })))) : null
            }
            var tO = e => {
                    let {
                        size: t
                    } = e;
                    return r.createElement("svg", {
                        fill: "none",
                        height: t,
                        viewBox: "0 0 28 28",
                        width: t,
                        xmlns: "http://www.w3.org/2000/svg"
                    }, r.createElement("title", null, "Disconnect"), r.createElement("path", {
                        d: "M6.742 22.195h8.367c1.774 0 2.743-.968 2.743-2.758V16.11h-2.016v3.11c0 .625-.305.96-.969.96H6.984c-.664 0-.968-.335-.968-.96V7.984c0-.632.304-.968.968-.968h7.883c.664 0 .969.336.969.968v3.133h2.016v-3.36c0-1.78-.97-2.757-2.743-2.757H6.742C4.97 5 4 5.977 4 7.758v11.68c0 1.789.969 2.757 2.742 2.757Zm5.438-7.703h7.601l1.149-.07-.602.406-1.008.938a.816.816 0 0 0-.258.593c0 .407.313.782.758.782.227 0 .39-.086.547-.243l2.492-2.593c.235-.235.313-.47.313-.711 0-.242-.078-.477-.313-.719l-2.492-2.586c-.156-.156-.32-.25-.547-.25-.445 0-.758.367-.758.781 0 .227.094.446.258.594l1.008.945.602.407-1.149-.079H12.18a.904.904 0 0 0 0 1.805Z",
                        fill: "currentColor"
                    }))
                },
                tM = r.forwardRef((e, t) => {
                    let {
                        children: n,
                        currentlySelected: l = !1,
                        onClick: a,
                        testId: o,
                        ...i
                    } = e, c = I();
                    return r.createElement(L, {
                        as: "button",
                        borderRadius: "menuButton",
                        disabled: l,
                        display: "flex",
                        onClick: a,
                        ref: t,
                        testId: o,
                        type: "button"
                    }, r.createElement(L, {
                        borderRadius: "menuButton",
                        className: [c ? "v9horb0" : void 0, !l && k({
                            active: "shrink"
                        })],
                        padding: c ? "8" : "6",
                        transition: "default",
                        width: "full",
                        ...l ? {
                            background: "accentColor",
                            borderColor: "selectedOptionBorder",
                            borderStyle: "solid",
                            borderWidth: "1",
                            boxShadow: "selectedOption",
                            color: "accentColorForeground"
                        } : {
                            background: {
                                hover: "menuItemBackground"
                            },
                            color: "modalText",
                            transition: "default"
                        },
                        ...i
                    }, n))
                });

            function tF(e) {
                var t;
                let {
                    onClose: n,
                    open: l
                } = e, {
                    chain: a
                } = (0, s.LN)(), {
                    chains: o,
                    pendingChainId: i,
                    reset: c,
                    switchNetwork: u
                } = (0, s.g0)({
                    onSettled: () => {
                        c(), n()
                    }
                }), {
                    i18n: d
                } = (0, r.useContext)(K), {
                    disconnect: v
                } = (0, s.qL)(), f = "rk_chain_modal_title", m = I(), g = null != (t = null == a ? void 0 : a.unsupported) && t, h = m ? "36" : "28", {
                    appName: C
                } = (0, r.useContext)(eO), p = eg();
                return a && (null == a ? void 0 : a.id) ? r.createElement(tg, {
                    onClose: n,
                    open: l,
                    titleId: f
                }, r.createElement(th, {
                    bottomSheetOnMobile: !0,
                    paddingBottom: "0"
                }, r.createElement(L, {
                    display: "flex",
                    flexDirection: "column",
                    gap: "14"
                }, r.createElement(L, {
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between"
                }, m && r.createElement(L, {
                    width: "30"
                }), r.createElement(L, {
                    paddingBottom: "0",
                    paddingLeft: "8",
                    paddingTop: "4"
                }, r.createElement(e4, {
                    as: "h1",
                    color: "modalText",
                    id: f,
                    size: m ? "20" : "18",
                    weight: "heavy"
                }, d.t("chains.title"))), r.createElement(te, {
                    onClose: n
                })), g && r.createElement(L, {
                    marginX: "8",
                    textAlign: m ? "center" : "left"
                }, r.createElement(e4, {
                    color: "modalTextSecondary",
                    size: "14",
                    weight: "medium"
                }, d.t("chains.wrong_network"))), r.createElement(L, {
                    className: m ? "_18dqw9x1" : "_18dqw9x0",
                    display: "flex",
                    flexDirection: "column",
                    gap: "4",
                    padding: "2",
                    paddingBottom: "16"
                }, u ? p.map((e, t) => {
                    let {
                        iconBackground: n,
                        iconUrl: l,
                        id: c,
                        name: s
                    } = e, v = o.find(e => e.id === c);
                    if (!v) return null;
                    let f = v.id === (null == a ? void 0 : a.id),
                        g = !f && v.id === i;
                    return r.createElement(r.Fragment, {
                        key: v.id
                    }, r.createElement(tM, {
                        currentlySelected: f,
                        onClick: f ? void 0 : () => u(v.id),
                        testId: "chain-option-".concat(v.id)
                    }, r.createElement(L, {
                        fontFamily: "body",
                        fontSize: "16",
                        fontWeight: "bold"
                    }, r.createElement(L, {
                        alignItems: "center",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between"
                    }, r.createElement(L, {
                        alignItems: "center",
                        display: "flex",
                        flexDirection: "row",
                        gap: "4",
                        height: h
                    }, l && r.createElement(L, {
                        height: "full",
                        marginRight: "8"
                    }, r.createElement(R, {
                        alt: null != s ? s : v.name,
                        background: n,
                        borderRadius: "full",
                        height: h,
                        src: l,
                        width: h,
                        testId: "chain-option-".concat(v.id, "-icon")
                    })), r.createElement("div", null, null != s ? s : v.name)), f && r.createElement(L, {
                        alignItems: "center",
                        display: "flex",
                        flexDirection: "row",
                        marginRight: "6"
                    }, r.createElement(e4, {
                        color: "accentColorForeground",
                        size: "14",
                        weight: "medium"
                    }, d.t("chains.connected")), r.createElement(L, {
                        background: "connectionIndicator",
                        borderColor: "selectedOptionBorder",
                        borderRadius: "full",
                        borderStyle: "solid",
                        borderWidth: "1",
                        height: "8",
                        marginLeft: "8",
                        width: "8"
                    })), g && r.createElement(L, {
                        alignItems: "center",
                        display: "flex",
                        flexDirection: "row",
                        marginRight: "6"
                    }, r.createElement(e4, {
                        color: "modalText",
                        size: "14",
                        weight: "medium"
                    }, d.t("chains.confirm")), r.createElement(L, {
                        background: "standby",
                        borderRadius: "full",
                        height: "8",
                        marginLeft: "8",
                        width: "8"
                    }))))), m && t < p.length - 1 && r.createElement(L, {
                        background: "generalBorderDim",
                        height: "1",
                        marginX: "8"
                    }))
                }) : r.createElement(L, {
                    background: "generalBorder",
                    borderRadius: "menuButton",
                    paddingX: "18",
                    paddingY: "12"
                }, r.createElement(e4, {
                    color: "modalText",
                    size: "14",
                    weight: "medium"
                }, C ? d.t("chains.switching_not_supported", {
                    appName: C
                }) : d.t("chains.switching_not_supported_fallback"))), g && r.createElement(r.Fragment, null, r.createElement(L, {
                    background: "generalBorderDim",
                    height: "1",
                    marginX: "8"
                }), r.createElement(tM, {
                    onClick: () => v(),
                    testId: "chain-option-disconnect"
                }, r.createElement(L, {
                    color: "error",
                    fontFamily: "body",
                    fontSize: "16",
                    fontWeight: "bold"
                }, r.createElement(L, {
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between"
                }, r.createElement(L, {
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "row",
                    gap: "4",
                    height: h
                }, r.createElement(L, {
                    alignItems: "center",
                    color: "error",
                    height: h,
                    justifyContent: "center",
                    marginRight: "8"
                }, r.createElement(tO, {
                    size: Number(h)
                })), r.createElement("div", null, d.t("chains.disconnect"))))))))))) : null
            }
            tM.displayName = "MenuButton";
            var tz = "rk-latest-id",
                tR = e => {
                    let {
                        children: t,
                        href: n
                    } = e;
                    return r.createElement(L, {
                        as: "a",
                        color: "accentColor",
                        href: n,
                        rel: "noreferrer",
                        target: "_blank"
                    }, t)
                },
                tU = e => {
                    let {
                        children: t
                    } = e;
                    return r.createElement(e4, {
                        color: "modalTextSecondary",
                        size: "12",
                        weight: "medium"
                    }, t)
                };

            function tW(e) {
                let {
                    compactModeEnabled: t = !1,
                    getWallet: n
                } = e, {
                    disclaimer: l,
                    learnMoreUrl: a
                } = (0, r.useContext)(eO), {
                    i18n: o
                } = (0, r.useContext)(K);
                return r.createElement(r.Fragment, null, r.createElement(L, {
                    alignItems: "center",
                    color: "accentColor",
                    display: "flex",
                    flexDirection: "column",
                    height: "full",
                    justifyContent: "space-around"
                }, r.createElement(L, {
                    marginBottom: "10"
                }, !t && r.createElement(e4, {
                    color: "modalText",
                    size: "18",
                    weight: "heavy"
                }, o.t("intro.title"))), r.createElement(L, {
                    display: "flex",
                    flexDirection: "column",
                    gap: "32",
                    justifyContent: "center",
                    marginY: "20",
                    style: {
                        maxWidth: 312
                    }
                }, r.createElement(L, {
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "row",
                    gap: "16"
                }, r.createElement(L, {
                    borderRadius: "6",
                    height: "48",
                    minWidth: "48",
                    width: "48"
                }, r.createElement(e1, null)), r.createElement(L, {
                    display: "flex",
                    flexDirection: "column",
                    gap: "4"
                }, r.createElement(e4, {
                    color: "modalText",
                    size: "14",
                    weight: "bold"
                }, o.t("intro.digital_asset.title")), r.createElement(e4, {
                    color: "modalTextSecondary",
                    size: "14",
                    weight: "medium"
                }, o.t("intro.digital_asset.description")))), r.createElement(L, {
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "row",
                    gap: "16"
                }, r.createElement(L, {
                    borderRadius: "6",
                    height: "48",
                    minWidth: "48",
                    width: "48"
                }, r.createElement(e2, null)), r.createElement(L, {
                    display: "flex",
                    flexDirection: "column",
                    gap: "4"
                }, r.createElement(e4, {
                    color: "modalText",
                    size: "14",
                    weight: "bold"
                }, o.t("intro.login.title")), r.createElement(e4, {
                    color: "modalTextSecondary",
                    size: "14",
                    weight: "medium"
                }, o.t("intro.login.description"))))), r.createElement(L, {
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12",
                    justifyContent: "center",
                    margin: "10"
                }, r.createElement(e5, {
                    label: o.t("intro.get.label"),
                    onClick: n
                }), r.createElement(L, {
                    as: "a",
                    className: k({
                        active: "shrink",
                        hover: "grow"
                    }),
                    display: "block",
                    href: a,
                    paddingX: "12",
                    paddingY: "4",
                    rel: "noreferrer",
                    style: {
                        willChange: "transform"
                    },
                    target: "_blank",
                    transition: "default"
                }, r.createElement(e4, {
                    color: "accentColor",
                    size: "14",
                    weight: "bold"
                }, o.t("intro.learn_more.label")))), l && !t && r.createElement(L, {
                    marginBottom: "8",
                    marginTop: "12",
                    textAlign: "center"
                }, r.createElement(l, {
                    Link: tR,
                    Text: tU
                }))))
            }
            var tP = () => r.createElement("svg", {
                    fill: "none",
                    height: "17",
                    viewBox: "0 0 11 17",
                    width: "11",
                    xmlns: "http://www.w3.org/2000/svg"
                }, r.createElement("title", null, "Back"), r.createElement("path", {
                    d: "M0.99707 8.6543C0.99707 9.08496 1.15527 9.44531 1.51562 9.79688L8.16016 16.3096C8.43262 16.5732 8.74902 16.7051 9.13574 16.7051C9.90918 16.7051 10.5508 16.0811 10.5508 15.3076C10.5508 14.9121 10.3838 14.5605 10.0938 14.2705L4.30176 8.64551L10.0938 3.0293C10.3838 2.74805 10.5508 2.3877 10.5508 2.00098C10.5508 1.23633 9.90918 0.603516 9.13574 0.603516C8.74902 0.603516 8.43262 0.735352 8.16016 0.999023L1.51562 7.51172C1.15527 7.85449 1.00586 8.21484 0.99707 8.6543Z",
                    fill: "currentColor"
                })),
                tq = () => r.createElement("svg", {
                    fill: "none",
                    height: "12",
                    viewBox: "0 0 8 12",
                    width: "8",
                    xmlns: "http://www.w3.org/2000/svg"
                }, r.createElement("title", null, "Info"), r.createElement("path", {
                    d: "M3.64258 7.99609C4.19336 7.99609 4.5625 7.73828 4.68555 7.24609C4.69141 7.21094 4.70312 7.16406 4.70898 7.13477C4.80859 6.60742 5.05469 6.35547 6.04492 5.76367C7.14648 5.10156 7.67969 4.3457 7.67969 3.24414C7.67969 1.39844 6.17383 0.255859 3.95898 0.255859C2.32422 0.255859 1.05859 0.894531 0.548828 1.86719C0.396484 2.14844 0.320312 2.44727 0.320312 2.74023C0.314453 3.37305 0.742188 3.79492 1.42188 3.79492C1.91406 3.79492 2.33594 3.54883 2.53516 3.11523C2.78711 2.47656 3.23242 2.21289 3.83594 2.21289C4.55664 2.21289 5.10742 2.65234 5.10742 3.29102C5.10742 3.9707 4.7793 4.29883 3.81836 4.87891C3.02148 5.36523 2.50586 5.92773 2.50586 6.76562V6.90039C2.50586 7.55664 2.96289 7.99609 3.64258 7.99609ZM3.67188 11.4473C4.42773 11.4473 5.04297 10.8672 5.04297 10.1406C5.04297 9.41406 4.42773 8.83984 3.67188 8.83984C2.91602 8.83984 2.30664 9.41406 2.30664 10.1406C2.30664 10.8672 2.91602 11.4473 3.67188 11.4473Z",
                    fill: "currentColor"
                })),
                tX = e => {
                    let {
                        "aria-label": t = "Info",
                        onClick: n
                    } = e, l = I();
                    return r.createElement(L, {
                        alignItems: "center",
                        "aria-label": t,
                        as: "button",
                        background: "closeButtonBackground",
                        borderColor: "actionButtonBorder",
                        borderRadius: "full",
                        borderStyle: "solid",
                        borderWidth: l ? "0" : "1",
                        className: k({
                            active: "shrinkSm",
                            hover: "growLg"
                        }),
                        color: "closeButton",
                        display: "flex",
                        height: l ? "30" : "28",
                        justifyContent: "center",
                        onClick: n,
                        style: {
                            willChange: "transform"
                        },
                        transition: "default",
                        type: "button",
                        width: l ? "30" : "28"
                    }, r.createElement(tq, null))
                },
                tH = e => {
                    let t = (0, r.useRef)(null),
                        n = (0, r.useContext)(eM),
                        l = z(e);
                    return (0, r.useEffect)(() => {
                        if (n && t.current && l) return function(e, t) {
                            let n;
                            tZ++;
                            let l = [15, 20, 25, 35, 45],
                                a = [],
                                o = !1,
                                r = 0,
                                i = 0,
                                c = tY();
                            ! function e() {
                                o && a.length < 35 && function() {
                                        let e = l[Math.floor(Math.random() * l.length)],
                                            n = 360 * Math.random(),
                                            o = i - e / 2,
                                            s = r - e / 2,
                                            u = document.createElement("div");
                                        u.innerHTML = '<img src="'.concat(t, '" width="').concat(e, '" height="').concat(e, '" style="border-radius: 25%">'), u.setAttribute("style", ["position:absolute", "will-change:transform", "top:".concat(o, "px"), "left:".concat(s, "px"), "transform:rotate(".concat(n, "deg)")].join(";")), c.appendChild(u), a.push({
                                            direction: .5 >= Math.random() ? -1 : 1,
                                            element: u,
                                            left: s,
                                            size: e,
                                            speedHorz: 10 * Math.random(),
                                            speedUp: 25 * Math.random(),
                                            spinSpeed: 35 * Math.random() * (.5 >= Math.random() ? -1 : 1),
                                            spinVal: n,
                                            top: o
                                        })
                                    }(),
                                    function() {
                                        for (let e of a) e.left = e.left - e.speedHorz * e.direction, e.top = e.top - e.speedUp, e.speedUp = Math.min(e.size, e.speedUp - 1), e.spinVal = e.spinVal + e.spinSpeed, e.top >= Math.max(window.innerHeight, document.body.clientHeight) + e.size && (a = a.filter(t => t !== e), e.element.remove()), e.element.setAttribute("style", ["position:absolute", "will-change:transform", "top:".concat(e.top, "px"), "left:".concat(e.left, "px"), "transform:rotate(".concat(e.spinVal, "deg)")].join(";"))
                                    }(), n = requestAnimationFrame(e)
                            }();
                            let s = "ontouchstart" in window || navigator.msMaxTouchPoints,
                                u = s ? "touchstart" : "mousedown",
                                d = s ? "touchend" : "mouseup",
                                v = s ? "touchmove" : "mousemove",
                                f = e => {
                                    var t, n;
                                    "touches" in e ? (r = null == (t = e.touches) ? void 0 : t[0].clientX, i = null == (n = e.touches) ? void 0 : n[0].clientY) : (r = e.clientX, i = e.clientY)
                                },
                                m = e => {
                                    f(e), o = !0
                                },
                                g = () => {
                                    o = !1
                                };
                            return e.addEventListener(v, f, {
                                passive: !1
                            }), e.addEventListener(u, m), e.addEventListener(d, g), e.addEventListener("mouseleave", g), () => {
                                e.removeEventListener(v, f), e.removeEventListener(u, m), e.removeEventListener(d, g), e.removeEventListener("mouseleave", g);
                                let t = setInterval(() => {
                                    n && 0 === a.length && (cancelAnimationFrame(n), clearInterval(t), 0 == --tZ && c.remove())
                                }, 500)
                            }
                        }(t.current, l)
                    }, [n, l]), t
                },
                tY = () => {
                    let e = "_rk_coolMode",
                        t = document.getElementById(e);
                    if (t) return t;
                    let n = document.createElement("div");
                    return n.setAttribute("id", e), n.setAttribute("style", "overflow:hidden;position:fixed;height:100%;top:0;left:0;right:0;bottom:0;pointer-events:none;z-index:2147483647"), document.body.appendChild(n), n
                },
                tZ = 0,
                tV = e => {
                    let {
                        as: t = "button",
                        currentlySelected: n = !1,
                        iconBackground: l,
                        iconUrl: a,
                        name: o,
                        onClick: i,
                        ready: c,
                        recent: s,
                        testId: u,
                        ...d
                    } = e, v = tH(a), [f, m] = (0, r.useState)(!1), {
                        i18n: g
                    } = (0, r.useContext)(K);
                    return r.createElement(L, {
                        display: "flex",
                        flexDirection: "column",
                        onMouseEnter: () => m(!0),
                        onMouseLeave: () => m(!1),
                        ref: v
                    }, r.createElement(L, {
                        as: t,
                        borderRadius: "menuButton",
                        borderStyle: "solid",
                        borderWidth: "1",
                        className: n ? void 0 : ["g5kl0l0", k({
                            active: "shrink"
                        })],
                        disabled: n,
                        onClick: i,
                        padding: "5",
                        style: {
                            willChange: "transform"
                        },
                        testId: u,
                        transition: "default",
                        width: "full",
                        ...n ? {
                            background: "accentColor",
                            borderColor: "selectedOptionBorder",
                            boxShadow: "selectedWallet"
                        } : {
                            background: {
                                hover: "menuItemBackground"
                            }
                        },
                        ...d
                    }, r.createElement(L, {
                        color: n ? "accentColorForeground" : "modalText",
                        disabled: !c,
                        fontFamily: "body",
                        fontSize: "16",
                        fontWeight: "bold",
                        transition: "default"
                    }, r.createElement(L, {
                        alignItems: "center",
                        display: "flex",
                        flexDirection: "row",
                        gap: "12"
                    }, r.createElement(R, {
                        background: l,
                        ...f ? {} : {
                            borderColor: "actionButtonBorder"
                        },
                        borderRadius: "6",
                        height: "28",
                        src: a,
                        width: "28"
                    }), r.createElement(L, null, r.createElement(L, {
                        style: {
                            marginTop: s ? -2 : void 0
                        }
                    }, o), s && r.createElement(e4, {
                        color: n ? "accentColorForeground" : "accentColor",
                        size: "12",
                        style: {
                            lineHeight: 1,
                            marginTop: -1
                        },
                        weight: "medium"
                    }, g.t("connect.recent")))))))
                };
            tV.displayName = "ModalSelection";
            var tG = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                        n = e.replace("#", "");
                    3 === n.length && (n = "".concat(n[0]).concat(n[0]).concat(n[1]).concat(n[1]).concat(n[2]).concat(n[2]));
                    let l = parseInt(n.substring(0, 2), 16),
                        a = parseInt(n.substring(2, 4), 16),
                        o = parseInt(n.substring(4, 6), 16);
                    return t > 1 && t <= 100 && (t /= 100), "rgba(".concat(l, ",").concat(a, ",").concat(o, ",").concat(t, ")")
                },
                tJ = e => e ? [tG(e, .2), tG(e, .14), tG(e, .1)] : null,
                tK = e => /^#([0-9a-f]{3}){1,2}$/i.test(e),
                t$ = async () => (await n.e(3599).then(n.bind(n, 63599))).default,
                tQ = () => F(t$),
                t3 = () => r.createElement(R, {
                    background: "#515a70",
                    borderColor: "generalBorder",
                    borderRadius: "10",
                    height: "48",
                    src: t$,
                    width: "48"
                }),
                t6 = async () => (await n.e(2324).then(n.bind(n, 82324))).default,
                t1 = () => F(t6),
                t7 = () => r.createElement(R, {
                    background: "#e3a5e8",
                    borderColor: "generalBorder",
                    borderRadius: "10",
                    height: "48",
                    src: t6,
                    width: "48"
                }),
                t0 = async () => (await n.e(9155).then(n.bind(n, 49155))).default,
                t2 = () => F(t0),
                t4 = () => r.createElement(R, {
                    background: "#515a70",
                    borderColor: "generalBorder",
                    borderRadius: "10",
                    height: "48",
                    src: t0,
                    width: "48"
                }),
                t8 = async () => (await n.e(1532).then(n.bind(n, 91532))).default,
                t5 = () => F(t8),
                t9 = () => r.createElement(R, {
                    background: "#515a70",
                    borderColor: "generalBorder",
                    borderRadius: "10",
                    height: "48",
                    src: t8,
                    width: "48"
                }),
                ne = (e, t) => {
                    let n = Array.prototype.slice.call(C.create(e, {
                            errorCorrectionLevel: t
                        }).modules.data, 0),
                        l = Math.sqrt(n.length);
                    return n.reduce((e, t, n) => (n % l == 0 ? e.push([t]) : e[e.length - 1].push(t)) && e, [])
                };

            function nt(e) {
                let {
                    ecl: t = "M",
                    logoBackground: n,
                    logoMargin: l = 10,
                    logoSize: a = 50,
                    logoUrl: o,
                    size: i = 200,
                    uri: c
                } = e, s = i - 2 * parseInt("20", 10), u = (0, r.useMemo)(() => {
                    let e = [],
                        n = ne(c, t),
                        l = s / n.length;
                    [{
                        x: 0,
                        y: 0
                    }, {
                        x: 1,
                        y: 0
                    }, {
                        x: 0,
                        y: 1
                    }].forEach(t => {
                        let {
                            x: a,
                            y: o
                        } = t, i = (n.length - 7) * l * a, c = (n.length - 7) * l * o;
                        for (let t = 0; t < 3; t++) e.push(r.createElement("rect", {
                            fill: t % 2 != 0 ? "white" : "black",
                            height: l * (7 - 2 * t),
                            key: "".concat(t, "-").concat(a, "-").concat(o),
                            rx: -((t - 2) * 5) + (0 === t ? 2 : 0),
                            ry: -((t - 2) * 5) + (0 === t ? 2 : 0),
                            width: l * (7 - 2 * t),
                            x: i + l * t,
                            y: c + l * t
                        }))
                    });
                    let o = Math.floor((a + 25) / l),
                        i = n.length / 2 - o / 2,
                        u = n.length / 2 + o / 2 - 1;
                    return n.forEach((t, a) => {
                        t.forEach((t, o) => {
                            !n[a][o] || a < 7 && o < 7 || a > n.length - 8 && o < 7 || a < 7 && o > n.length - 8 || a > i && a < u && o > i && o < u || e.push(r.createElement("circle", {
                                cx: a * l + l / 2,
                                cy: o * l + l / 2,
                                fill: "black",
                                key: "circle-".concat(a, "-").concat(o),
                                r: l / 3
                            }))
                        })
                    }), e
                }, [t, a, s, c]), d = s / 2 - a / 2, v = a + 2 * l;
                return r.createElement(L, {
                    borderColor: "generalBorder",
                    borderRadius: "menuButton",
                    borderStyle: "solid",
                    borderWidth: "1",
                    className: "_1vwt0cg0",
                    padding: "20",
                    width: "max"
                }, r.createElement(L, {
                    style: {
                        height: s,
                        userSelect: "none",
                        width: s
                    },
                    userSelect: "none"
                }, r.createElement(L, {
                    display: "flex",
                    justifyContent: "center",
                    position: "relative",
                    style: {
                        height: 0,
                        top: d,
                        width: s
                    },
                    width: "full"
                }, r.createElement(R, {
                    background: n,
                    borderColor: {
                        custom: "rgba(0, 0, 0, 0.06)"
                    },
                    borderRadius: "13",
                    height: a,
                    src: o,
                    width: a
                })), r.createElement("svg", {
                    height: s,
                    style: {
                        all: "revert"
                    },
                    width: s
                }, r.createElement("title", null, "QR Code"), r.createElement("defs", null, r.createElement("clipPath", {
                    id: "clip-wrapper"
                }, r.createElement("rect", {
                    height: v,
                    width: v
                })), r.createElement("clipPath", {
                    id: "clip-logo"
                }, r.createElement("rect", {
                    height: a,
                    width: a
                }))), r.createElement("rect", {
                    fill: "transparent",
                    height: s,
                    width: s
                }), u)))
            }
            var nn = async () => {
                    switch (eH()) {
                        case "Arc":
                            return (await n.e(6591).then(n.bind(n, 66591))).default;
                        case "Brave":
                            return (await n.e(7036).then(n.bind(n, 47036))).default;
                        case "Chrome":
                            return (await n.e(6569).then(n.bind(n, 36569))).default;
                        case "Edge":
                            return (await n.e(576).then(n.bind(n, 70576))).default;
                        case "Firefox":
                            return (await n.e(5240).then(n.bind(n, 55240))).default;
                        case "Opera":
                            return (await n.e(9306).then(n.bind(n, 39306))).default;
                        case "Safari":
                            return (await n.e(9631).then(n.bind(n, 79631))).default;
                        default:
                            return (await n.e(1007).then(n.bind(n, 1007))).default
                    }
                },
                nl = () => F(nn),
                na = async () => {
                    switch (eZ()) {
                        case "Windows":
                            return (await n.e(62).then(n.bind(n, 62))).default;
                        case "macOS":
                            return (await n.e(8386).then(n.bind(n, 88386))).default;
                        default:
                            return (await n.e(8246).then(n.bind(n, 8246))).default
                    }
                },
                no = () => F(na);

            function nr(e) {
                let {
                    getWalletDownload: t,
                    compactModeEnabled: n
                } = e, l = eQ().splice(0, 5), {
                    i18n: a
                } = (0, r.useContext)(K);
                return r.createElement(L, {
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    height: "full",
                    marginTop: "18",
                    width: "full"
                }, r.createElement(L, {
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    gap: "28",
                    height: "full",
                    width: "full"
                }, null == l ? void 0 : l.filter(e => {
                    var t;
                    return e.extensionDownloadUrl || e.desktopDownloadUrl || e.qrCode && (null == (t = e.downloadUrls) ? void 0 : t.qrCode)
                }).map(e => {
                    let {
                        downloadUrls: n,
                        iconBackground: l,
                        iconUrl: o,
                        id: i,
                        name: c,
                        qrCode: s
                    } = e, u = (null == n ? void 0 : n.qrCode) && s, d = !!e.extensionDownloadUrl, v = (null == n ? void 0 : n.qrCode) && d, f = (null == n ? void 0 : n.qrCode) && !!e.desktopDownloadUrl;
                    return r.createElement(L, {
                        alignItems: "center",
                        display: "flex",
                        gap: "16",
                        justifyContent: "space-between",
                        key: e.id,
                        width: "full"
                    }, r.createElement(L, {
                        alignItems: "center",
                        display: "flex",
                        flexDirection: "row",
                        gap: "16"
                    }, r.createElement(R, {
                        background: l,
                        borderColor: "actionButtonBorder",
                        borderRadius: "10",
                        height: "48",
                        src: o,
                        width: "48"
                    }), r.createElement(L, {
                        display: "flex",
                        flexDirection: "column",
                        gap: "2"
                    }, r.createElement(e4, {
                        color: "modalText",
                        size: "14",
                        weight: "bold"
                    }, c), r.createElement(e4, {
                        color: "modalTextSecondary",
                        size: "14",
                        weight: "medium"
                    }, v ? a.t("get.mobile_and_extension.description") : f ? a.t("get.mobile_and_desktop.description") : u ? a.t("get.mobile.description") : d ? a.t("get.extension.description") : null))), r.createElement(L, {
                        display: "flex",
                        flexDirection: "column",
                        gap: "4"
                    }, r.createElement(e5, {
                        label: a.t("get.action.label"),
                        onClick: () => t(i),
                        type: "secondary"
                    })))
                })), r.createElement(L, {
                    alignItems: "center",
                    borderRadius: "10",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8",
                    justifyContent: "space-between",
                    marginBottom: "4",
                    paddingY: "8",
                    style: {
                        maxWidth: 275,
                        textAlign: "center"
                    }
                }, r.createElement(e4, {
                    color: "modalText",
                    size: "14",
                    weight: "bold"
                }, a.t("get.looking_for.title")), r.createElement(e4, {
                    color: "modalTextSecondary",
                    size: "14",
                    weight: "medium"
                }, n ? a.t("get.looking_for.desktop.compact_description") : a.t("get.looking_for.desktop.wide_description"))))
            }

            function ni(e) {
                var t;
                let {
                    changeWalletStep: n,
                    compactModeEnabled: l,
                    connectionError: a,
                    onClose: o,
                    qrCodeUri: i,
                    reconnect: c,
                    wallet: s
                } = e, {
                    downloadUrls: u,
                    iconBackground: d,
                    iconUrl: v,
                    name: f,
                    qrCode: m,
                    ready: g,
                    showWalletConnectModal: h
                } = s, C = null == (t = s.desktop) ? void 0 : t.getUri, p = eX(), {
                    i18n: j
                } = (0, r.useContext)(K), b = !!s.extensionDownloadUrl, E = (null == u ? void 0 : u.qrCode) && b, w = (null == u ? void 0 : u.qrCode) && !!s.desktopDownloadUrl, y = m && i, x = h ? {
                    description: l ? j.t("connect.walletconnect.description.compact") : j.t("connect.walletconnect.description.full"),
                    label: j.t("connect.walletconnect.open.label"),
                    onClick: () => {
                        o(), h()
                    }
                } : y ? {
                    description: j.t("connect.secondary_action.get.description", {
                        wallet: f
                    }),
                    label: j.t("connect.secondary_action.get.label"),
                    onClick: () => n(E || w ? "DOWNLOAD_OPTIONS" : "DOWNLOAD")
                } : null, {
                    width: k
                } = eF();
                return (0, r.useEffect)(() => {
                    nl(), no()
                }, []), r.createElement(L, {
                    display: "flex",
                    flexDirection: "column",
                    height: "full",
                    width: "full"
                }, y ? r.createElement(L, {
                    alignItems: "center",
                    display: "flex",
                    height: "full",
                    justifyContent: "center"
                }, r.createElement(nt, {
                    logoBackground: d,
                    logoSize: l ? 60 : 72,
                    logoUrl: v,
                    size: l ? 318 : k && k < 768 ? Math.max(280, Math.min(k - 308, 382)) : 382,
                    uri: i
                })) : r.createElement(L, {
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "center",
                    style: {
                        flexGrow: 1
                    }
                }, r.createElement(L, {
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8"
                }, r.createElement(L, {
                    borderRadius: "10",
                    height: "44",
                    overflow: "hidden"
                }, r.createElement(R, {
                    height: "44",
                    src: v,
                    width: "44"
                })), r.createElement(L, {
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    gap: "4",
                    paddingX: "32",
                    style: {
                        textAlign: "center"
                    }
                }, r.createElement(e4, {
                    color: "modalText",
                    size: "18",
                    weight: "bold"
                }, g ? j.t("connect.status.opening", {
                    wallet: f
                }) : b ? j.t("connect.status.not_installed", {
                    wallet: f
                }) : j.t("connect.status.not_available", {
                    wallet: f
                })), !g && b ? r.createElement(L, {
                    paddingTop: "20"
                }, r.createElement(e5, {
                    href: s.extensionDownloadUrl,
                    label: j.t("connect.secondary_action.install.label"),
                    type: "secondary"
                })) : null, g && !y && r.createElement(r.Fragment, null, r.createElement(L, {
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center"
                }, r.createElement(e4, {
                    color: "modalTextSecondary",
                    size: "14",
                    textAlign: "center",
                    weight: "medium"
                }, j.t("connect.status.confirm"))), r.createElement(L, {
                    alignItems: "center",
                    color: "modalText",
                    display: "flex",
                    flexDirection: "row",
                    height: "32",
                    marginTop: "8"
                }, a ? r.createElement(e5, {
                    label: j.t("connect.secondary_action.retry.label"),
                    onClick: C ? async () => {
                        let e = await C();
                        window.open(e, p ? "_blank" : "_self")
                    } : () => {
                        c(s)
                    }
                }) : r.createElement(L, {
                    color: "modalTextSecondary"
                }, r.createElement(W, null))))))), r.createElement(L, {
                    alignItems: "center",
                    borderRadius: "10",
                    display: "flex",
                    flexDirection: "row",
                    gap: "8",
                    height: "28",
                    justifyContent: "space-between",
                    marginTop: "12"
                }, g && x && r.createElement(r.Fragment, null, r.createElement(e4, {
                    color: "modalTextSecondary",
                    size: "14",
                    weight: "medium"
                }, x.description), r.createElement(e5, {
                    label: x.label,
                    onClick: x.onClick,
                    type: "secondary"
                }))))
            }
            var nc = e => {
                let {
                    actionLabel: t,
                    description: n,
                    iconAccent: l,
                    iconBackground: a,
                    iconUrl: o,
                    isCompact: i,
                    onAction: c,
                    title: s,
                    url: u,
                    variant: d
                } = e, v = "browser" === d, f = !v && l && tJ(l);
                return r.createElement(L, {
                    alignItems: "center",
                    borderRadius: "13",
                    display: "flex",
                    justifyContent: "center",
                    overflow: "hidden",
                    paddingX: i ? "18" : "44",
                    position: "relative",
                    style: {
                        flex: 1,
                        isolation: "isolate"
                    },
                    width: "full"
                }, r.createElement(L, {
                    borderColor: "actionButtonBorder",
                    borderRadius: "13",
                    borderStyle: "solid",
                    borderWidth: "1",
                    style: {
                        bottom: "0",
                        left: "0",
                        position: "absolute",
                        right: "0",
                        top: "0",
                        zIndex: 1
                    }
                }), v && r.createElement(L, {
                    background: "downloadTopCardBackground",
                    height: "full",
                    position: "absolute",
                    style: {
                        zIndex: 0
                    },
                    width: "full"
                }, r.createElement(L, {
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    style: {
                        bottom: "0",
                        filter: "blur(20px)",
                        left: "0",
                        position: "absolute",
                        right: "0",
                        top: "0",
                        transform: "translate3d(0, 0, 0)"
                    }
                }, r.createElement(L, {
                    style: {
                        filter: "blur(100px)",
                        marginLeft: -27,
                        marginTop: -20,
                        opacity: .6,
                        transform: "translate3d(0, 0, 0)"
                    }
                }, r.createElement(R, {
                    borderRadius: "full",
                    height: "200",
                    src: o,
                    width: "200"
                })), r.createElement(L, {
                    style: {
                        filter: "blur(100px)",
                        marginRight: 0,
                        marginTop: 105,
                        opacity: .6,
                        overflow: "auto",
                        transform: "translate3d(0, 0, 0)"
                    }
                }, r.createElement(R, {
                    borderRadius: "full",
                    height: "200",
                    src: o,
                    width: "200"
                })))), !v && f && r.createElement(L, {
                    background: "downloadBottomCardBackground",
                    style: {
                        bottom: "0",
                        left: "0",
                        position: "absolute",
                        right: "0",
                        top: "0"
                    }
                }, r.createElement(L, {
                    position: "absolute",
                    style: {
                        background: "radial-gradient(50% 50% at 50% 50%, ".concat(f[0], " 0%, ").concat(f[1], " 25%, rgba(0,0,0,0) 100%)"),
                        height: 564,
                        left: -215,
                        top: -197,
                        transform: "translate3d(0, 0, 0)",
                        width: 564
                    }
                }), r.createElement(L, {
                    position: "absolute",
                    style: {
                        background: "radial-gradient(50% 50% at 50% 50%, ".concat(f[2], " 0%, rgba(0, 0, 0, 0) 100%)"),
                        height: 564,
                        left: -1,
                        top: -76,
                        transform: "translate3d(0, 0, 0)",
                        width: 564
                    }
                })), r.createElement(L, {
                    alignItems: "flex-start",
                    display: "flex",
                    flexDirection: "row",
                    gap: "24",
                    height: "max",
                    justifyContent: "center",
                    style: {
                        zIndex: 1
                    }
                }, r.createElement(L, null, r.createElement(R, {
                    height: "60",
                    src: o,
                    width: "60",
                    ...a ? {
                        background: a,
                        borderColor: "generalBorder",
                        borderRadius: "10"
                    } : null
                })), r.createElement(L, {
                    display: "flex",
                    flexDirection: "column",
                    gap: "4",
                    style: {
                        flex: 1
                    },
                    width: "full"
                }, r.createElement(e4, {
                    color: "modalText",
                    size: "14",
                    weight: "bold"
                }, s), r.createElement(e4, {
                    color: "modalTextSecondary",
                    size: "14",
                    weight: "medium"
                }, n), r.createElement(L, {
                    marginTop: "14",
                    width: "max"
                }, r.createElement(e5, {
                    href: u,
                    label: t,
                    onClick: c,
                    size: "medium"
                })))))
            };

            function ns(e) {
                let {
                    changeWalletStep: t,
                    wallet: n
                } = e, l = eH(), a = eZ(), o = "compact" === (0, r.useContext)(eW), {
                    desktop: i,
                    desktopDownloadUrl: c,
                    extension: s,
                    extensionDownloadUrl: u,
                    mobileDownloadUrl: d
                } = n, {
                    i18n: v
                } = (0, r.useContext)(K);
                return (0, r.useEffect)(() => {
                    t1(), t5(), t2(), tQ()
                }, []), r.createElement(L, {
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    gap: "24",
                    height: "full",
                    marginBottom: "8",
                    marginTop: "4",
                    width: "full"
                }, r.createElement(L, {
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8",
                    height: "full",
                    justifyContent: "center",
                    width: "full"
                }, u && r.createElement(nc, {
                    actionLabel: v.t("get_options.extension.download.label", {
                        browser: l
                    }),
                    description: v.t("get_options.extension.description"),
                    iconUrl: nn,
                    isCompact: o,
                    onAction: () => t((null == s ? void 0 : s.instructions) ? "INSTRUCTIONS_EXTENSION" : "CONNECT"),
                    title: v.t("get_options.extension.title", {
                        wallet: n.name,
                        browser: l
                    }),
                    url: u,
                    variant: "browser"
                }), c && r.createElement(nc, {
                    actionLabel: v.t("get_options.desktop.download.label", {
                        platform: a
                    }),
                    description: v.t("get_options.desktop.description"),
                    iconUrl: na,
                    isCompact: o,
                    onAction: () => t((null == i ? void 0 : i.instructions) ? "INSTRUCTIONS_DESKTOP" : "CONNECT"),
                    title: v.t("get_options.desktop.title", {
                        wallet: n.name,
                        platform: a
                    }),
                    url: c,
                    variant: "desktop"
                }), d && r.createElement(nc, {
                    actionLabel: v.t("get_options.mobile.download.label", {
                        wallet: n.name
                    }),
                    description: v.t("get_options.mobile.description"),
                    iconAccent: n.iconAccent,
                    iconBackground: n.iconBackground,
                    iconUrl: n.iconUrl,
                    isCompact: o,
                    onAction: () => {
                        t("DOWNLOAD")
                    },
                    title: v.t("get_options.mobile.title", {
                        wallet: n.name
                    }),
                    variant: "app"
                })))
            }

            function nu(e) {
                let {
                    changeWalletStep: t,
                    wallet: n
                } = e, {
                    downloadUrls: l,
                    qrCode: a
                } = n, {
                    i18n: o
                } = (0, r.useContext)(K);
                return (0, r.useEffect)(() => {
                    t1(), t5()
                }, []), r.createElement(L, {
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    gap: "24",
                    height: "full",
                    width: "full"
                }, r.createElement(L, {
                    style: {
                        maxWidth: 220,
                        textAlign: "center"
                    }
                }, r.createElement(e4, {
                    color: "modalTextSecondary",
                    size: "14",
                    weight: "semibold"
                }, o.t("get_mobile.description"))), r.createElement(L, {
                    height: "full"
                }, (null == l ? void 0 : l.qrCode) ? r.createElement(nt, {
                    logoSize: 0,
                    size: 268,
                    uri: l.qrCode
                }) : null), r.createElement(L, {
                    alignItems: "center",
                    borderRadius: "10",
                    display: "flex",
                    flexDirection: "row",
                    gap: "8",
                    height: "34",
                    justifyContent: "space-between",
                    marginBottom: "12",
                    paddingY: "8"
                }, r.createElement(e5, {
                    label: o.t("get_mobile.continue.label"),
                    onClick: () => t((null == a ? void 0 : a.instructions) ? "INSTRUCTIONS_MOBILE" : "CONNECT")
                })))
            }
            var nd = {
                connect: () => r.createElement(t3, null),
                create: () => r.createElement(t7, null),
                install: e => r.createElement(R, {
                    background: e.iconBackground,
                    borderColor: "generalBorder",
                    borderRadius: "10",
                    height: "48",
                    src: e.iconUrl,
                    width: "48"
                }),
                refresh: () => r.createElement(t4, null),
                scan: () => r.createElement(t9, null)
            };

            function nv(e) {
                var t, n, l, a;
                let {
                    connectWallet: o,
                    wallet: i
                } = e, {
                    i18n: c
                } = (0, r.useContext)(K);
                return r.createElement(L, {
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    height: "full",
                    width: "full"
                }, r.createElement(L, {
                    display: "flex",
                    flexDirection: "column",
                    gap: "28",
                    height: "full",
                    justifyContent: "center",
                    paddingY: "32",
                    style: {
                        maxWidth: 320
                    }
                }, null == (n = null == (t = null == i ? void 0 : i.qrCode) ? void 0 : t.instructions) ? void 0 : n.steps.map((e, t) => {
                    var n;
                    return r.createElement(L, {
                        alignItems: "center",
                        display: "flex",
                        flexDirection: "row",
                        gap: "16",
                        key: t
                    }, r.createElement(L, {
                        borderRadius: "10",
                        height: "48",
                        minWidth: "48",
                        overflow: "hidden",
                        position: "relative",
                        width: "48"
                    }, null == (n = nd[e.step]) ? void 0 : n.call(nd, i)), r.createElement(L, {
                        display: "flex",
                        flexDirection: "column",
                        gap: "4"
                    }, r.createElement(e4, {
                        color: "modalText",
                        size: "14",
                        weight: "bold"
                    }, c.t(e.title)), r.createElement(e4, {
                        color: "modalTextSecondary",
                        size: "14",
                        weight: "medium"
                    }, c.t(e.description))))
                })), r.createElement(L, {
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12",
                    justifyContent: "center",
                    marginBottom: "16"
                }, r.createElement(e5, {
                    label: c.t("get_instructions.mobile.connect.label"),
                    onClick: () => o(i)
                }), r.createElement(L, {
                    as: "a",
                    className: k({
                        active: "shrink",
                        hover: "grow"
                    }),
                    display: "block",
                    href: null == (a = null == (l = null == i ? void 0 : i.qrCode) ? void 0 : l.instructions) ? void 0 : a.learnMoreUrl,
                    paddingX: "12",
                    paddingY: "4",
                    rel: "noreferrer",
                    style: {
                        willChange: "transform"
                    },
                    target: "_blank",
                    transition: "default"
                }, r.createElement(e4, {
                    color: "accentColor",
                    size: "14",
                    weight: "bold"
                }, c.t("get_instructions.mobile.learn_more.label")))))
            }

            function nf(e) {
                var t, n, l, a;
                let {
                    wallet: o
                } = e, {
                    i18n: i
                } = (0, r.useContext)(K);
                return r.createElement(L, {
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    height: "full",
                    width: "full"
                }, r.createElement(L, {
                    display: "flex",
                    flexDirection: "column",
                    gap: "28",
                    height: "full",
                    justifyContent: "center",
                    paddingY: "32",
                    style: {
                        maxWidth: 320
                    }
                }, null == (n = null == (t = null == o ? void 0 : o.extension) ? void 0 : t.instructions) ? void 0 : n.steps.map((e, t) => {
                    var n;
                    return r.createElement(L, {
                        alignItems: "center",
                        display: "flex",
                        flexDirection: "row",
                        gap: "16",
                        key: t
                    }, r.createElement(L, {
                        borderRadius: "10",
                        height: "48",
                        minWidth: "48",
                        overflow: "hidden",
                        position: "relative",
                        width: "48"
                    }, null == (n = nd[e.step]) ? void 0 : n.call(nd, o)), r.createElement(L, {
                        display: "flex",
                        flexDirection: "column",
                        gap: "4"
                    }, r.createElement(e4, {
                        color: "modalText",
                        size: "14",
                        weight: "bold"
                    }, i.t(e.title)), r.createElement(e4, {
                        color: "modalTextSecondary",
                        size: "14",
                        weight: "medium"
                    }, i.t(e.description))))
                })), r.createElement(L, {
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12",
                    justifyContent: "center",
                    marginBottom: "16"
                }, r.createElement(e5, {
                    label: i.t("get_instructions.extension.refresh.label"),
                    onClick: window.location.reload.bind(window.location)
                }), r.createElement(L, {
                    as: "a",
                    className: k({
                        active: "shrink",
                        hover: "grow"
                    }),
                    display: "block",
                    href: null == (a = null == (l = null == o ? void 0 : o.extension) ? void 0 : l.instructions) ? void 0 : a.learnMoreUrl,
                    paddingX: "12",
                    paddingY: "4",
                    rel: "noreferrer",
                    style: {
                        willChange: "transform"
                    },
                    target: "_blank",
                    transition: "default"
                }, r.createElement(e4, {
                    color: "accentColor",
                    size: "14",
                    weight: "bold"
                }, i.t("get_instructions.extension.learn_more.label")))))
            }

            function nm(e) {
                var t, n, l, a;
                let {
                    connectWallet: o,
                    wallet: i
                } = e, {
                    i18n: c
                } = (0, r.useContext)(K);
                return r.createElement(L, {
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    height: "full",
                    width: "full"
                }, r.createElement(L, {
                    display: "flex",
                    flexDirection: "column",
                    gap: "28",
                    height: "full",
                    justifyContent: "center",
                    paddingY: "32",
                    style: {
                        maxWidth: 320
                    }
                }, null == (n = null == (t = null == i ? void 0 : i.desktop) ? void 0 : t.instructions) ? void 0 : n.steps.map((e, t) => {
                    var n;
                    return r.createElement(L, {
                        alignItems: "center",
                        display: "flex",
                        flexDirection: "row",
                        gap: "16",
                        key: t
                    }, r.createElement(L, {
                        borderRadius: "10",
                        height: "48",
                        minWidth: "48",
                        overflow: "hidden",
                        position: "relative",
                        width: "48"
                    }, null == (n = nd[e.step]) ? void 0 : n.call(nd, i)), r.createElement(L, {
                        display: "flex",
                        flexDirection: "column",
                        gap: "4"
                    }, r.createElement(e4, {
                        color: "modalText",
                        size: "14",
                        weight: "bold"
                    }, c.t(e.title)), r.createElement(e4, {
                        color: "modalTextSecondary",
                        size: "14",
                        weight: "medium"
                    }, c.t(e.description))))
                })), r.createElement(L, {
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12",
                    justifyContent: "center",
                    marginBottom: "16"
                }, r.createElement(e5, {
                    label: c.t("get_instructions.desktop.connect.label"),
                    onClick: () => o(i)
                }), r.createElement(L, {
                    as: "a",
                    className: k({
                        active: "shrink",
                        hover: "grow"
                    }),
                    display: "block",
                    href: null == (a = null == (l = null == i ? void 0 : i.desktop) ? void 0 : l.instructions) ? void 0 : a.learnMoreUrl,
                    paddingX: "12",
                    paddingY: "4",
                    rel: "noreferrer",
                    style: {
                        willChange: "transform"
                    },
                    target: "_blank",
                    transition: "default"
                }, r.createElement(e4, {
                    color: "accentColor",
                    size: "14",
                    weight: "bold"
                }, c.t("get_instructions.desktop.learn_more.label")))))
            }

            function ng(e) {
                let t, {
                        onClose: n
                    } = e,
                    l = eX(),
                    [a, o] = (0, r.useState)(),
                    [i, c] = (0, r.useState)(),
                    [s, u] = (0, r.useState)(),
                    d = !!(null == i ? void 0 : i.qrCode) && s,
                    [v, f] = (0, r.useState)(!1),
                    m = (0, r.useContext)(eW) === eU.COMPACT,
                    {
                        disclaimer: g
                    } = (0, r.useContext)(eO),
                    {
                        i18n: h
                    } = (0, r.useContext)(K),
                    C = (0, r.useRef)(!1),
                    {
                        connector: p
                    } = (0, r.useContext)(ez),
                    j = eQ().filter(e => e.ready || !!e.extensionDownloadUrl).sort((e, t) => e.groupIndex - t.groupIndex),
                    b = function(e, t) {
                        let n = {};
                        for (let l of e) {
                            let e = t(l);
                            e && (n[e] || (n[e] = []), n[e].push(l))
                        }
                        return n
                    }(j, e => e.groupName),
                    E = ["Recommended", "Other", "Popular", "More", "Others"];
                (0, r.useEffect)(() => {
                    p && !C.current && (B("CONNECT"), y(p), C.current = !0)
                }, [p]);
                let w = e => {
                        var t, n, a;
                        if (f(!1), e.ready) {
                            null == (n = null == (t = null == e ? void 0 : e.connect) ? void 0 : t.call(e)) || n.catch(() => {
                                f(!0)
                            });
                            let o = null == (a = e.desktop) ? void 0 : a.getUri;
                            o && setTimeout(async () => {
                                let e = await o();
                                window.open(e, l ? "_blank" : "_self")
                            }, 0)
                        }
                    },
                    y = e => {
                        var t, n;
                        if (n = e.id, localStorage.setItem(tz, n), w(e), o(e.id), e.ready) {
                            let n = !1;
                            null == (t = null == e ? void 0 : e.onConnecting) || t.call(e, async () => {
                                var t, l;
                                if (n) return;
                                n = !0;
                                let a = j.find(t => e.id === t.id),
                                    o = await (null == (t = null == a ? void 0 : a.qrCode) ? void 0 : t.getUri());
                                u(o), setTimeout(() => {
                                    c(a), B("CONNECT")
                                }, o ? 0 : 50);
                                let r = await (null == a ? void 0 : a.connector.getProvider()),
                                    i = null == (l = null == r ? void 0 : r.signer) ? void 0 : l.connection;
                                if ((null == i ? void 0 : i.on) && (null == i ? void 0 : i.off)) {
                                    let t = () => {
                                            n(), y(e)
                                        },
                                        n = () => {
                                            i.off("close", t), i.off("open", n)
                                        };
                                    i.on("close", t), i.on("open", n)
                                }
                            })
                        } else c(e), B((null == e ? void 0 : e.extensionDownloadUrl) ? "DOWNLOAD_OPTIONS" : "CONNECT")
                    },
                    x = () => {
                        o(void 0), c(void 0), u(void 0)
                    },
                    B = function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        t && "GET" === e && "GET" === D ? x() : t || "GET" !== e ? t || "CONNECT" !== e || T("CONNECT") : T("GET"), I(e)
                    },
                    [D, T] = (0, r.useState)("NONE"),
                    [S, I] = (0, r.useState)("NONE"),
                    _ = null,
                    N = null,
                    A = null;
                (0, r.useEffect)(() => {
                    f(!1)
                }, [S, i]);
                let O = !!((null == i ? void 0 : i.extensionDownloadUrl) && (null == i ? void 0 : i.mobileDownloadUrl));
                switch (S) {
                    case "NONE":
                        _ = r.createElement(tW, {
                            getWallet: () => B("GET")
                        });
                        break;
                    case "LEARN_COMPACT":
                        _ = r.createElement(tW, {
                            compactModeEnabled: m,
                            getWallet: () => B("GET")
                        }), N = h.t("intro.title"), A = "NONE";
                        break;
                    case "GET":
                        _ = r.createElement(nr, {
                            getWalletDownload: e => {
                                var t;
                                o(e);
                                let n = j.find(t => e === t.id),
                                    l = null == (t = null == n ? void 0 : n.downloadUrls) ? void 0 : t.qrCode,
                                    a = !!(null == n ? void 0 : n.desktopDownloadUrl),
                                    r = !!(null == n ? void 0 : n.extensionDownloadUrl);
                                c(n), l && (r || a) ? B("DOWNLOAD_OPTIONS") : l ? B("DOWNLOAD") : a ? B("INSTRUCTIONS_DESKTOP") : B("INSTRUCTIONS_EXTENSION")
                            },
                            compactModeEnabled: m
                        }), N = h.t("get.title"), A = m ? "LEARN_COMPACT" : "NONE";
                        break;
                    case "CONNECT":
                        _ = i && r.createElement(ni, {
                            changeWalletStep: B,
                            compactModeEnabled: m,
                            connectionError: v,
                            onClose: n,
                            qrCodeUri: s,
                            reconnect: w,
                            wallet: i
                        }), N = d && ("WalletConnect" === i.name ? h.t("connect_scan.fallback_title") : h.t("connect_scan.title", {
                            wallet: i.name
                        })), A = m ? p ? null : "NONE" : null, t = m ? p ? () => {} : x : () => {};
                        break;
                    case "DOWNLOAD_OPTIONS":
                        _ = i && r.createElement(ns, {
                            changeWalletStep: B,
                            wallet: i
                        }), N = i && h.t("get_options.short_title", {
                            wallet: i.name
                        }), A = p ? "CONNECT" : m ? "NONE" : null;
                        break;
                    case "DOWNLOAD":
                        _ = i && r.createElement(nu, {
                            changeWalletStep: B,
                            wallet: i
                        }), N = i && h.t("get_mobile.title", {
                            wallet: i.name
                        }), A = O ? "DOWNLOAD_OPTIONS" : D;
                        break;
                    case "INSTRUCTIONS_MOBILE":
                        _ = i && r.createElement(nv, {
                            connectWallet: y,
                            wallet: i
                        }), N = i && h.t("get_options.title", {
                            wallet: m && i.shortName || i.name
                        }), A = "DOWNLOAD";
                        break;
                    case "INSTRUCTIONS_EXTENSION":
                        _ = i && r.createElement(nf, {
                            wallet: i
                        }), N = i && h.t("get_options.title", {
                            wallet: m && i.shortName || i.name
                        }), A = "DOWNLOAD_OPTIONS";
                        break;
                    case "INSTRUCTIONS_DESKTOP":
                        _ = i && r.createElement(nm, {
                            connectWallet: y,
                            wallet: i
                        }), N = i && h.t("get_options.title", {
                            wallet: m && i.shortName || i.name
                        }), A = "DOWNLOAD_OPTIONS"
                }
                return r.createElement(L, {
                    display: "flex",
                    flexDirection: "row",
                    style: {
                        maxHeight: m ? 468 : 504
                    }
                }, (!m || "NONE" === S) && r.createElement(L, {
                    className: m ? "_1vwt0cg4" : "_1vwt0cg3",
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "16"
                }, r.createElement(L, {
                    display: "flex",
                    justifyContent: "space-between"
                }, m && g && r.createElement(L, {
                    marginLeft: "16",
                    width: "28"
                }, r.createElement(tX, {
                    onClick: () => B("LEARN_COMPACT")
                })), m && !g && r.createElement(L, {
                    marginLeft: "16",
                    width: "28"
                }), r.createElement(L, {
                    marginLeft: m ? "0" : "6",
                    paddingBottom: "8",
                    paddingTop: "2",
                    paddingX: "18"
                }, r.createElement(e4, {
                    as: "h1",
                    color: "modalText",
                    id: "rk_connect_title",
                    size: "18",
                    weight: "heavy",
                    testId: "connect-header-label"
                }, h.t("connect.title"))), m && r.createElement(L, {
                    marginRight: "16"
                }, r.createElement(te, {
                    onClose: n
                }))), r.createElement(L, {
                    className: "_1vwt0cg2 ju367v7a ju367v7v",
                    paddingBottom: "18"
                }, Object.entries(b).map((e, t) => {
                    let [n, l] = e;
                    return l.length > 0 && r.createElement(r.Fragment, {
                        key: t
                    }, n ? r.createElement(L, {
                        marginBottom: "8",
                        marginTop: "16",
                        marginX: "6"
                    }, r.createElement(e4, {
                        color: "modalTextSecondary",
                        size: "14",
                        weight: "bold"
                    }, E.includes(n) ? h.t("connector_group.".concat(n.toLowerCase())) : n)) : null, r.createElement(L, {
                        display: "flex",
                        flexDirection: "column",
                        gap: "4"
                    }, l.map(e => r.createElement(tV, {
                        currentlySelected: e.id === a,
                        iconBackground: e.iconBackground,
                        iconUrl: e.iconUrl,
                        key: e.id,
                        name: e.name,
                        onClick: () => y(e),
                        ready: e.ready,
                        recent: e.recent,
                        testId: "wallet-option-".concat(e.id)
                    }))))
                })), m && r.createElement(r.Fragment, null, r.createElement(L, {
                    background: "generalBorder",
                    height: "1",
                    marginTop: "-1"
                }), g ? r.createElement(L, {
                    paddingX: "24",
                    paddingY: "16",
                    textAlign: "center"
                }, r.createElement(g, {
                    Link: tR,
                    Text: tU
                })) : r.createElement(L, {
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "space-between",
                    paddingX: "24",
                    paddingY: "16"
                }, r.createElement(L, {
                    paddingY: "4"
                }, r.createElement(e4, {
                    color: "modalTextSecondary",
                    size: "14",
                    weight: "medium"
                }, h.t("connect.new_to_ethereum.description"))), r.createElement(L, {
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "row",
                    gap: "4",
                    justifyContent: "center"
                }, r.createElement(L, {
                    className: k({
                        active: "shrink",
                        hover: "grow"
                    }),
                    cursor: "pointer",
                    onClick: () => B("LEARN_COMPACT"),
                    paddingY: "4",
                    style: {
                        willChange: "transform"
                    },
                    transition: "default"
                }, r.createElement(e4, {
                    color: "accentColor",
                    size: "14",
                    weight: "bold"
                }, h.t("connect.new_to_ethereum.learn_more.label"))))))), (!m || "NONE" !== S) && r.createElement(r.Fragment, null, !m && r.createElement(L, {
                    background: "generalBorder",
                    minWidth: "1",
                    width: "1"
                }), r.createElement(L, {
                    display: "flex",
                    flexDirection: "column",
                    margin: "16",
                    style: {
                        flexGrow: 1
                    }
                }, r.createElement(L, {
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "12"
                }, r.createElement(L, {
                    width: "28"
                }, A && r.createElement(L, {
                    as: "button",
                    className: k({
                        active: "shrinkSm",
                        hover: "growLg"
                    }),
                    color: "accentColor",
                    onClick: () => {
                        A && B(A, !0), null == t || t()
                    },
                    paddingX: "8",
                    paddingY: "4",
                    style: {
                        boxSizing: "content-box",
                        height: 17,
                        willChange: "transform"
                    },
                    transition: "default",
                    type: "button"
                }, r.createElement(tP, null))), r.createElement(L, {
                    display: "flex",
                    justifyContent: "center",
                    style: {
                        flexGrow: 1
                    }
                }, N && r.createElement(e4, {
                    color: "modalText",
                    size: "18",
                    textAlign: "center",
                    weight: "heavy"
                }, N)), r.createElement(te, {
                    onClose: n
                })), r.createElement(L, {
                    display: "flex",
                    flexDirection: "column",
                    style: {
                        minHeight: m ? 396 : 432
                    }
                }, r.createElement(L, {
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    gap: "6",
                    height: "full",
                    justifyContent: "center",
                    marginX: "8"
                }, _)))))
            }
            var nh = e => {
                let {
                    wallet: t
                } = e;
                return r.createElement("svg", {
                    className: "_1am14413",
                    viewBox: "0 0 86 86",
                    width: "86",
                    height: "86"
                }, r.createElement("title", null, "Loading"), r.createElement("rect", {
                    x: "3",
                    y: "3",
                    width: 80,
                    height: 80,
                    rx: 20,
                    ry: 20,
                    strokeDasharray: "".concat(53.333333333333336, " ").concat(320 / 3),
                    strokeDashoffset: 160,
                    className: "_1am14412",
                    style: {
                        stroke: (null == t ? void 0 : t.iconAccent) || "#0D3887"
                    }
                }))
            };

            function nC(e) {
                let {
                    onClose: t,
                    wallet: n,
                    connecting: l
                } = e, {
                    connect: a,
                    connector: o,
                    iconBackground: i,
                    iconUrl: c,
                    id: s,
                    mobile: u,
                    name: d,
                    onConnecting: v,
                    ready: f,
                    shortName: m
                } = n, g = null == u ? void 0 : u.getUri, h = tH(c), C = (0, r.useRef)(!1), {
                    i18n: p
                } = (0, r.useContext)(K), j = (0, r.useCallback)(async () => {
                    var e;
                    "walletConnect" === s && (null == t || t()), null == (e = null == a ? void 0 : a()) || e.catch(() => {});
                    let n = !1;
                    null == v || v(async () => {
                        if (!n && (n = !0, g)) {
                            let e = await g();
                            if (("walletConnect" === o.id || "walletConnectLegacy" === o.id) && function(e) {
                                    let {
                                        mobileUri: t,
                                        name: n
                                    } = e;
                                    localStorage.setItem(tl, JSON.stringify({
                                        href: t.split("?")[0],
                                        name: n
                                    }))
                                }({
                                    mobileUri: e,
                                    name: d
                                }), e.startsWith("http")) {
                                let t = document.createElement("a");
                                t.href = e, t.target = "_blank", t.rel = "noreferrer noopener", t.click()
                            } else window.location.href = e
                        }
                    })
                }, [o, a, g, v, t, d, s]);
                return (0, r.useEffect)(() => {
                    l && !C.current && (j(), C.current = !0)
                }, [l, j]), r.createElement(L, {
                    as: "button",
                    color: f ? "modalText" : "modalTextSecondary",
                    disabled: !f,
                    fontFamily: "body",
                    key: s,
                    onClick: j,
                    ref: h,
                    style: {
                        overflow: "visible",
                        textAlign: "center"
                    },
                    testId: "wallet-option-".concat(s),
                    type: "button",
                    width: "full"
                }, r.createElement(L, {
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center"
                }, r.createElement(L, {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingBottom: "8",
                    paddingTop: "10",
                    position: "relative"
                }, l ? r.createElement(nh, {
                    wallet: n
                }) : null, r.createElement(R, {
                    background: i,
                    borderRadius: "13",
                    boxShadow: "walletLogo",
                    height: "60",
                    src: c,
                    width: "60"
                })), l ? null : r.createElement(L, {
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center"
                }, r.createElement(e4, {
                    as: "h2",
                    color: n.ready ? "modalText" : "modalTextSecondary",
                    size: "13",
                    weight: "medium"
                }, r.createElement(L, {
                    as: "span",
                    position: "relative"
                }, null != m ? m : d, !n.ready && " (unsupported)")), n.recent && r.createElement(e4, {
                    color: "accentColor",
                    size: "12",
                    weight: "medium"
                }, p.t("connect.recent")))))
            }

            function np(e) {
                var t;
                let {
                    onClose: n
                } = e, l = eQ(), {
                    disclaimer: a,
                    learnMoreUrl: o
                } = (0, r.useContext)(eO), i = null, c = null, s = !1, u = null, [d, v] = (0, r.useState)("CONNECT"), {
                    i18n: f
                } = (0, r.useContext)(K), m = S();
                switch (d) {
                    case "CONNECT":
                        i = f.t("connect.title"), s = !0, c = r.createElement(L, null, r.createElement(L, {
                            background: "profileForeground",
                            className: "_1am14410",
                            display: "flex",
                            paddingBottom: "20",
                            paddingTop: "6"
                        }, r.createElement(L, {
                            display: "flex",
                            style: {
                                margin: "0 auto"
                            }
                        }, l.filter(e => e.ready).map(e => r.createElement(L, {
                            key: e.id,
                            paddingX: "20"
                        }, r.createElement(L, {
                            width: "60"
                        }, r.createElement(nC, {
                            onClose: n,
                            wallet: e
                        })))))), r.createElement(L, {
                            background: "generalBorder",
                            height: "1",
                            marginBottom: "32",
                            marginTop: "-1"
                        }), r.createElement(L, {
                            alignItems: "center",
                            display: "flex",
                            flexDirection: "column",
                            gap: "32",
                            paddingX: "32",
                            style: {
                                textAlign: "center"
                            }
                        }, r.createElement(L, {
                            display: "flex",
                            flexDirection: "column",
                            gap: "8",
                            textAlign: "center"
                        }, r.createElement(e4, {
                            color: "modalText",
                            size: "16",
                            weight: "bold"
                        }, f.t("intro.title")), r.createElement(e4, {
                            color: "modalTextSecondary",
                            size: "16"
                        }, f.t("intro.description")))), r.createElement(L, {
                            paddingTop: "32",
                            paddingX: "20"
                        }, r.createElement(L, {
                            display: "flex",
                            gap: "14",
                            justifyContent: "center"
                        }, r.createElement(e5, {
                            label: f.t("intro.get.label"),
                            onClick: () => v("GET"),
                            size: "large",
                            type: "secondary"
                        }), r.createElement(e5, {
                            href: o,
                            label: f.t("intro.learn_more.label"),
                            size: "large",
                            type: "secondary"
                        }))), a && r.createElement(L, {
                            marginTop: "28",
                            marginX: "32",
                            textAlign: "center"
                        }, r.createElement(a, {
                            Link: tR,
                            Text: tU
                        })));
                        break;
                    case "GET":
                        {
                            i = f.t("get.title"),
                            u = "CONNECT";
                            let e = null == (t = null == l ? void 0 : l.filter(e => {
                                var t, n, l;
                                return (null == (t = e.downloadUrls) ? void 0 : t.ios) || (null == (n = e.downloadUrls) ? void 0 : n.android) || (null == (l = e.downloadUrls) ? void 0 : l.mobile)
                            })) ? void 0 : t.splice(0, 3);c = r.createElement(L, null, r.createElement(L, {
                                alignItems: "center",
                                display: "flex",
                                flexDirection: "column",
                                height: "full",
                                marginBottom: "36",
                                marginTop: "5",
                                paddingTop: "12",
                                width: "full"
                            }, e.map((t, n) => {
                                let {
                                    downloadUrls: l,
                                    iconBackground: a,
                                    iconUrl: o,
                                    name: i
                                } = t;
                                return (null == l ? void 0 : l.ios) || (null == l ? void 0 : l.android) || (null == l ? void 0 : l.mobile) ? r.createElement(L, {
                                    display: "flex",
                                    gap: "16",
                                    key: t.id,
                                    paddingX: "20",
                                    width: "full"
                                }, r.createElement(L, {
                                    style: {
                                        minHeight: 48,
                                        minWidth: 48
                                    }
                                }, r.createElement(R, {
                                    background: a,
                                    borderColor: "generalBorder",
                                    borderRadius: "10",
                                    height: "48",
                                    src: o,
                                    width: "48"
                                })), r.createElement(L, {
                                    display: "flex",
                                    flexDirection: "column",
                                    width: "full"
                                }, r.createElement(L, {
                                    alignItems: "center",
                                    display: "flex",
                                    height: "48"
                                }, r.createElement(L, {
                                    width: "full"
                                }, r.createElement(e4, {
                                    color: "modalText",
                                    size: "18",
                                    weight: "bold"
                                }, i)), r.createElement(e5, {
                                    href: (m ? null == l ? void 0 : l.ios : null == l ? void 0 : l.android) || (null == l ? void 0 : l.mobile),
                                    label: f.t("get.action.label"),
                                    size: "small",
                                    type: "secondary"
                                })), n < e.length - 1 && r.createElement(L, {
                                    background: "generalBorderDim",
                                    height: "1",
                                    marginY: "10",
                                    width: "full"
                                }))) : null
                            })), r.createElement(L, {
                                style: {
                                    marginBottom: "42px"
                                }
                            }), r.createElement(L, {
                                alignItems: "center",
                                display: "flex",
                                flexDirection: "column",
                                gap: "36",
                                paddingX: "36",
                                style: {
                                    textAlign: "center"
                                }
                            }, r.createElement(L, {
                                display: "flex",
                                flexDirection: "column",
                                gap: "12",
                                textAlign: "center"
                            }, r.createElement(e4, {
                                color: "modalText",
                                size: "16",
                                weight: "bold"
                            }, f.t("get.looking_for.title")), r.createElement(e4, {
                                color: "modalTextSecondary",
                                size: "16"
                            }, f.t("get.looking_for.mobile.description")))))
                        }
                }
                return r.createElement(L, {
                    display: "flex",
                    flexDirection: "column",
                    paddingBottom: "36"
                }, r.createElement(L, {
                    background: s ? "profileForeground" : "modalBackground",
                    display: "flex",
                    flexDirection: "column",
                    paddingBottom: "4",
                    paddingTop: "14"
                }, r.createElement(L, {
                    display: "flex",
                    justifyContent: "center",
                    paddingBottom: "6",
                    paddingX: "20",
                    position: "relative"
                }, u && r.createElement(L, {
                    display: "flex",
                    position: "absolute",
                    style: {
                        left: 0,
                        marginBottom: -20,
                        marginTop: -20
                    }
                }, r.createElement(L, {
                    alignItems: "center",
                    as: "button",
                    className: k({
                        active: "shrinkSm",
                        hover: "growLg"
                    }),
                    color: "accentColor",
                    display: "flex",
                    marginLeft: "4",
                    marginTop: "20",
                    onClick: () => v(u),
                    padding: "16",
                    style: {
                        height: 17,
                        willChange: "transform"
                    },
                    transition: "default",
                    type: "button"
                }, r.createElement(tP, null))), r.createElement(L, {
                    marginTop: "4",
                    textAlign: "center",
                    width: "full"
                }, r.createElement(e4, {
                    as: "h1",
                    color: "modalText",
                    id: "rk_connect_title",
                    size: "20",
                    weight: "bold"
                }, i)), r.createElement(L, {
                    alignItems: "center",
                    display: "flex",
                    height: "32",
                    paddingRight: "14",
                    position: "absolute",
                    right: "0"
                }, r.createElement(L, {
                    style: {
                        marginBottom: -20,
                        marginTop: -20
                    }
                }, r.createElement(te, {
                    onClose: n
                }))))), r.createElement(L, {
                    display: "flex",
                    flexDirection: "column"
                }, c))
            }
            var nj = e => {
                let {
                    onClose: t
                } = e, {
                    connector: n
                } = (0, r.useContext)(ez), {
                    i18n: l
                } = (0, r.useContext)(K), a = (null == n ? void 0 : n.name) || "";
                return r.createElement(L, null, r.createElement(L, {
                    display: "flex",
                    paddingBottom: "32",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "profileForeground",
                    flexDirection: "column"
                }, r.createElement(L, {
                    width: "full",
                    display: "flex",
                    justifyContent: "flex-end",
                    marginTop: "18",
                    marginRight: "24"
                }, r.createElement(te, {
                    onClose: t
                })), r.createElement(L, {
                    width: "60"
                }, r.createElement(nC, {
                    onClose: t,
                    wallet: n,
                    connecting: !0
                })), r.createElement(L, {
                    marginTop: "20"
                }, r.createElement(e4, {
                    textAlign: "center",
                    color: "modalText",
                    size: "18",
                    weight: "semibold"
                }, l.t("connect.status.connect_mobile", {
                    wallet: a
                }))), r.createElement(L, {
                    maxWidth: "full",
                    marginTop: "8"
                }, r.createElement(e4, {
                    textAlign: "center",
                    color: "modalText",
                    size: "16",
                    weight: "medium"
                }, l.t("connect.status.confirm_mobile", {
                    wallet: a
                })))))
            };

            function nb(e) {
                let {
                    onClose: t
                } = e, {
                    connector: n
                } = (0, r.useContext)(ez);
                return I() ? n ? r.createElement(nj, {
                    onClose: t
                }) : r.createElement(np, {
                    onClose: t
                }) : r.createElement(ng, {
                    onClose: t
                })
            }

            function nE(e) {
                let {
                    onClose: t,
                    open: n
                } = e, l = "rk_connect_title", a = T(), {
                    disconnect: o
                } = (0, s.qL)(), {
                    isConnecting: i
                } = (0, s.mA)(), c = r.useCallback(() => {
                    t(), o()
                }, [t, o]), u = r.useCallback(() => {
                    i && o(), t()
                }, [t, o, i]);
                return "disconnected" === a ? r.createElement(tg, {
                    onClose: u,
                    open: n,
                    titleId: l
                }, r.createElement(th, {
                    bottomSheetOnMobile: !0,
                    padding: "0",
                    wide: !0
                }, r.createElement(nb, {
                    onClose: u
                }))) : "unauthenticated" === a ? r.createElement(tg, {
                    onClose: c,
                    open: n,
                    titleId: l
                }, r.createElement(th, {
                    bottomSheetOnMobile: !0,
                    padding: "0"
                }, r.createElement(tn, {
                    onClose: c,
                    onCloseModal: t
                }))) : null
            }

            function nw() {
                let [e, t] = (0, r.useState)(!1);
                return {
                    closeModal: (0, r.useCallback)(() => t(!1), []),
                    isModalOpen: e,
                    openModal: (0, r.useCallback)(() => t(!0), [])
                }
            }
            var ny = (0, r.createContext)({
                accountModalOpen: !1,
                chainModalOpen: !1,
                connectModalOpen: !1
            });

            function nx(e) {
                let {
                    children: t
                } = e, {
                    closeModal: n,
                    isModalOpen: l,
                    openModal: a
                } = nw(), {
                    closeModal: o,
                    isModalOpen: i,
                    openModal: c
                } = nw(), {
                    closeModal: u,
                    isModalOpen: d,
                    openModal: v
                } = nw(), f = T(), {
                    chain: m
                } = (0, s.LN)(), g = !(null == m ? void 0 : m.unsupported);

                function h() {
                    let {
                        keepConnectModalOpen: e = !1
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    e || n(), o(), u()
                }
                let C = "unauthenticated" === D();
                return (0, s.mA)({
                    onConnect: () => h({
                        keepConnectModalOpen: C
                    }),
                    onDisconnect: () => h()
                }), r.createElement(ny.Provider, {
                    value: (0, r.useMemo)(() => ({
                        accountModalOpen: i,
                        chainModalOpen: d,
                        connectModalOpen: l,
                        openAccountModal: g && "connected" === f ? c : void 0,
                        openChainModal: "connected" === f ? v : void 0,
                        openConnectModal: "disconnected" === f || "unauthenticated" === f ? a : void 0
                    }), [f, g, i, d, l, c, v, a])
                }, t, r.createElement(nE, {
                    onClose: n,
                    open: l
                }), r.createElement(tA, {
                    onClose: o,
                    open: i
                }), r.createElement(tF, {
                    onClose: u,
                    open: d
                }))
            }
            var nk = () => {};

            function nB(e) {
                var t, n, l, a;
                let {
                    children: o
                } = e, i = function() {
                    let [e, t] = (0, r.useState)(!1);
                    return (0, r.useEffect)(() => (t(!0), () => {
                        t(!1)
                    }), []), (0, r.useCallback)(() => e, [e])
                }(), {
                    address: c
                } = (0, s.mA)(), u = ey(c), d = ew(u), v = eC(), f = null != (t = D()) ? t : void 0, {
                    chain: m
                } = (0, s.LN)(), g = m ? v[m.id] : void 0, h = null != (n = null == g ? void 0 : g.name) ? n : void 0, C = null != (l = null == g ? void 0 : g.iconUrl) ? l : void 0, p = null != (a = null == g ? void 0 : g.iconBackground) ? a : void 0, j = z(C), E = (0, r.useContext)(eq), w = e_().some(e => {
                    let {
                        status: t
                    } = e;
                    return "pending" === t
                }) && E, {
                    showBalance: y
                } = eb(), x = !y || b(y)[I() ? "smallScreen" : "largeScreen"], {
                    data: k
                } = (0, s.KQ)({
                    address: x ? c : void 0
                }), B = k ? "".concat(tj(parseFloat(k.formatted)), " ").concat(k.symbol) : void 0, {
                    openConnectModal: T
                } = function() {
                    let {
                        connectModalOpen: e,
                        openConnectModal: t
                    } = (0, r.useContext)(ny);
                    return {
                        connectModalOpen: e,
                        openConnectModal: t
                    }
                }(), {
                    openChainModal: S
                } = function() {
                    let {
                        chainModalOpen: e,
                        openChainModal: t
                    } = (0, r.useContext)(ny);
                    return {
                        chainModalOpen: e,
                        openChainModal: t
                    }
                }(), {
                    openAccountModal: _
                } = function() {
                    let {
                        accountModalOpen: e,
                        openAccountModal: t
                    } = (0, r.useContext)(ny);
                    return {
                        accountModalOpen: e,
                        openAccountModal: t
                    }
                }(), {
                    accountModalOpen: N,
                    chainModalOpen: L,
                    connectModalOpen: A
                } = function() {
                    let {
                        accountModalOpen: e,
                        chainModalOpen: t,
                        connectModalOpen: n
                    } = (0, r.useContext)(ny);
                    return {
                        accountModalOpen: e,
                        chainModalOpen: t,
                        connectModalOpen: n
                    }
                }();
                return r.createElement(r.Fragment, null, o({
                    account: c ? {
                        address: c,
                        balanceDecimals: null == k ? void 0 : k.decimals,
                        balanceFormatted: null == k ? void 0 : k.formatted,
                        balanceSymbol: null == k ? void 0 : k.symbol,
                        displayBalance: B,
                        displayName: u ? tE(u) : tb(c),
                        ensAvatar: null != d ? d : void 0,
                        ensName: null != u ? u : void 0,
                        hasPendingTransactions: w
                    } : void 0,
                    accountModalOpen: N,
                    authenticationStatus: f,
                    chain: m ? {
                        hasIcon: !!C,
                        iconBackground: p,
                        iconUrl: j,
                        id: m.id,
                        name: null != h ? h : m.name,
                        unsupported: m.unsupported
                    } : void 0,
                    chainModalOpen: L,
                    connectModalOpen: A,
                    mounted: i(),
                    openAccountModal: null != _ ? _ : nk,
                    openChainModal: null != S ? S : nk,
                    openConnectModal: null != T ? T : nk
                }))
            }
            nB.displayName = "ConnectButton.Custom";
            var nD = {
                accountStatus: "full",
                chainStatus: {
                    largeScreen: "full",
                    smallScreen: "icon"
                },
                label: "Connect Wallet",
                showBalance: {
                    largeScreen: !0,
                    smallScreen: !1
                }
            };

            function nT(e) {
                let {
                    accountStatus: t = nD.accountStatus,
                    chainStatus: n = nD.chainStatus,
                    label: l = nD.label,
                    showBalance: a = nD.showBalance
                } = e, o = eg(), i = T(), {
                    setShowBalance: c
                } = eb(), [s, u] = (0, r.useState)(!1), {
                    i18n: d
                } = (0, r.useContext)(K);
                return (0, r.useEffect)(() => {
                    c(a), s || u(!0)
                }, [a, c]), s ? r.createElement(nB, null, e => {
                    var c, s, u;
                    let {
                        account: v,
                        chain: f,
                        mounted: m,
                        openAccountModal: g,
                        openChainModal: h,
                        openConnectModal: C
                    } = e, p = m && "loading" !== i, E = null != (c = null == f ? void 0 : f.unsupported) && c;
                    return r.createElement(L, {
                        display: "flex",
                        gap: "12",
                        ...!p && {
                            "aria-hidden": !0,
                            style: {
                                opacity: 0,
                                pointerEvents: "none",
                                userSelect: "none"
                            }
                        }
                    }, p && v && "connected" === i ? r.createElement(r.Fragment, null, f && (o.length > 1 || E) && r.createElement(L, {
                        alignItems: "center",
                        "aria-label": "Chain Selector",
                        as: "button",
                        background: E ? "connectButtonBackgroundError" : "connectButtonBackground",
                        borderRadius: "connectButton",
                        boxShadow: "connectButton",
                        className: k({
                            active: "shrink",
                            hover: "grow"
                        }),
                        color: E ? "connectButtonTextError" : "connectButtonText",
                        display: j(n, e => "none" === e ? "none" : "flex"),
                        fontFamily: "body",
                        fontWeight: "bold",
                        gap: "6",
                        key: E ? "unsupported" : "supported",
                        onClick: h,
                        paddingX: "10",
                        paddingY: "8",
                        testId: E ? "wrong-network-button" : "chain-button",
                        transition: "default",
                        type: "button"
                    }, E ? r.createElement(L, {
                        alignItems: "center",
                        display: "flex",
                        height: "24",
                        paddingX: "4"
                    }, d.t("connect_wallet.wrong_network.label")) : r.createElement(L, {
                        alignItems: "center",
                        display: "flex",
                        gap: "6"
                    }, f.hasIcon ? r.createElement(L, {
                        display: j(n, e => "full" === e || "icon" === e ? "block" : "none"),
                        height: "24",
                        width: "24"
                    }, r.createElement(R, {
                        alt: null != (s = f.name) ? s : "Chain icon",
                        background: f.iconBackground,
                        borderRadius: "full",
                        height: "24",
                        src: f.iconUrl,
                        width: "24"
                    })) : null, r.createElement(L, {
                        display: j(n, e => "icon" !== e || f.iconUrl ? "full" === e || "name" === e ? "block" : "none" : "block")
                    }, null != (u = f.name) ? u : f.id)), r.createElement(Y, null)), !E && r.createElement(L, {
                        alignItems: "center",
                        as: "button",
                        background: "connectButtonBackground",
                        borderRadius: "connectButton",
                        boxShadow: "connectButton",
                        className: k({
                            active: "shrink",
                            hover: "grow"
                        }),
                        color: "connectButtonText",
                        display: "flex",
                        fontFamily: "body",
                        fontWeight: "bold",
                        onClick: g,
                        testId: "account-button",
                        transition: "default",
                        type: "button"
                    }, v.displayBalance && r.createElement(L, {
                        display: j(a, e => e ? "block" : "none"),
                        padding: "8",
                        paddingLeft: "12"
                    }, v.displayBalance), r.createElement(L, {
                        background: b(a)[I() ? "smallScreen" : "largeScreen"] ? "connectButtonInnerBackground" : "connectButtonBackground",
                        borderColor: "connectButtonBackground",
                        borderRadius: "connectButton",
                        borderStyle: "solid",
                        borderWidth: "2",
                        color: "connectButtonText",
                        fontFamily: "body",
                        fontWeight: "bold",
                        paddingX: "8",
                        paddingY: "6",
                        transition: "default"
                    }, r.createElement(L, {
                        alignItems: "center",
                        display: "flex",
                        gap: "6",
                        height: "24"
                    }, r.createElement(L, {
                        display: j(t, e => "full" === e || "avatar" === e ? "block" : "none")
                    }, r.createElement(H, {
                        address: v.address,
                        imageUrl: v.ensAvatar,
                        loading: v.hasPendingTransactions,
                        size: 24
                    })), r.createElement(L, {
                        alignItems: "center",
                        display: "flex",
                        gap: "6"
                    }, r.createElement(L, {
                        display: j(t, e => "full" === e || "address" === e ? "block" : "none")
                    }, v.displayName), r.createElement(Y, null)))))) : r.createElement(L, {
                        as: "button",
                        background: "accentColor",
                        borderRadius: "connectButton",
                        boxShadow: "connectButton",
                        className: k({
                            active: "shrink",
                            hover: "grow"
                        }),
                        color: "accentColorForeground",
                        fontFamily: "body",
                        fontWeight: "bold",
                        height: "40",
                        key: "connect",
                        onClick: C,
                        paddingX: "14",
                        testId: "connect-button",
                        transition: "default",
                        type: "button"
                    }, m && "Connect Wallet" === l ? d.t("connect_wallet.label") : l))
                }) : r.createElement(r.Fragment, null)
            }

            function nS(e) {
                return "groupName" in e[0] ? nI(e) : nI([{
                    groupName: "",
                    wallets: e
                }])()
            }
            nT.__defaultProps = nD, nT.Custom = nB;
            var nI = e => () => {
                let t = -1,
                    n = [],
                    l = [],
                    a = [],
                    o = [];
                return e.forEach((e, n) => {
                    let {
                        groupName: o,
                        wallets: r
                    } = e;
                    r.forEach(e => {
                        if (t++, (null == e ? void 0 : e.iconAccent) && !tK(null == e ? void 0 : e.iconAccent)) throw Error("Property `iconAccent` is not a hex value for wallet: ".concat(e.name));
                        let r = { ...e,
                            groupIndex: n,
                            groupName: o,
                            index: t
                        };
                        "function" == typeof e.hidden ? a.push(r) : l.push(r)
                    })
                }), [...l, ...a].forEach(e => {
                    let t, {
                        createConnector: l,
                        groupIndex: a,
                        groupName: r,
                        hidden: i,
                        index: c,
                        ...s
                    } = e;
                    if ("function" == typeof i && i({
                            wallets: [...o.map(e => {
                                let {
                                    connector: t,
                                    id: n,
                                    installed: l,
                                    name: a
                                } = e;
                                return {
                                    connector: t,
                                    id: n,
                                    installed: l,
                                    name: a
                                }
                            })]
                        })) return;
                    let {
                        connector: u,
                        ...d
                    } = Object.fromEntries(Object.entries(l()).filter(e => {
                        let [t, n] = e;
                        return void 0 !== n
                    }));
                    if ("walletConnect" === s.id && d.qrCode && !I()) {
                        let {
                            chains: e,
                            options: l
                        } = u;
                        t = new p.z({
                            chains: e,
                            options: { ...l,
                                showQrModal: !0
                            }
                        }), n.push(t)
                    }
                    let v = {
                        connector: u,
                        groupIndex: a,
                        groupName: r,
                        index: c,
                        walletConnectModalConnector: t,
                        ...s,
                        ...d
                    };
                    o.push(v), n.includes(u) || (n.push(u), u._wallets = []), u._wallets.push(v)
                }), n
            }
        }
    }
]);