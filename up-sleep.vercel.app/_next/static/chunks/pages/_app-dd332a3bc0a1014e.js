(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [888], {
        4184: function(e, t) {
            var r;
            ! function() {
                "use strict";
                var o = {}.hasOwnProperty;

                function n() {
                    for (var e = [], t = 0; t < arguments.length; t++) {
                        var r = arguments[t];
                        if (r) {
                            var i = typeof r;
                            if ("string" === i || "number" === i) e.push(r);
                            else if (Array.isArray(r)) {
                                if (r.length) {
                                    var a = n.apply(null, r);
                                    a && e.push(a)
                                }
                            } else if ("object" === i)
                                if (r.toString === Object.prototype.toString)
                                    for (var s in r) o.call(r, s) && r[s] && e.push(s);
                                else e.push(r.toString())
                        }
                    }
                    return e.join(" ")
                }
                e.exports ? (n.default = n, e.exports = n) : void 0 === (r = function() {
                    return n
                }.apply(t, [])) || (e.exports = r)
            }()
        },
        6363: function(e, t, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
                return r(997)
            }])
        },
        7543: function(e, t, r) {
            "use strict";
            var o = r(5893),
                n = (r(7294), r(4184)),
                i = r.n(n),
                a = r(1182);

            function s(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function l(e, t) {
                if (null == e) return {};
                var r, o, n = function(e, t) {
                    if (null == e) return {};
                    var r, o, n = {},
                        i = Object.keys(e);
                    for (o = 0; o < i.length; o++) r = i[o], t.indexOf(r) >= 0 || (n[r] = e[r]);
                    return n
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (o = 0; o < i.length; o++) r = i[o], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
                }
                return n
            }
            t.Z = function(e) {
                var t = e.className,
                    r = e.children,
                    n = l(e, ["className", "children"]);
                return (0, o.jsx)("button", function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            o = Object.keys(r);
                        "function" === typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        })))), o.forEach((function(t) {
                            s(e, t, r[t])
                        }))
                    }
                    return e
                }({}, n, {
                    className: (0, a.overrideTailwindClasses)(i()("flex w-full items-center justify-center rounded-[5px] bg-brand-gradient py-4 px-8 text-sm font-semibold text-white hover:opacity-50 transition-all", t)),
                    children: r
                }))
            }
        },
        997: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return d
                }
            });
            var o = r(5893),
                n = (r(7107), r(7294)),
                i = r(3587),
                a = r(5726),
                s = r(7543);

            function l() {
                var e = (0, n.useState)(!1),
                    t = e[0],
                    r = e[1];
                (0, n.useEffect)((function() {
                    localStorage.getItem("consent") || r(!0)
                }), []);
                return (0, o.jsx)(i.u.Root, {
                    show: t,
                    as: n.Fragment,
                    children: (0, o.jsxs)(a.V, {
                        as: "div",
                        className: "relative z-[999]",
                        onClose: function() {},
                        children: [(0, o.jsx)(i.u.Child, {
                            as: n.Fragment,
                            enter: "ease-out duration-300",
                            enterFrom: "opacity-0",
                            enterTo: "opacity-100",
                            leave: "ease-in duration-200",
                            leaveFrom: "opacity-100",
                            leaveTo: "opacity-0",
                            children: (0, o.jsx)("div", {
                                className: "fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
                            })
                        }), (0, o.jsx)("div", {
                            className: "fixed inset-0 z-10 overflow-y-auto",
                            children: (0, o.jsxs)("div", {
                                className: "flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0",
                                children: [(0, o.jsx)("span", {
                                    className: "hidden sm:inline-block sm:h-screen sm:align-middle",
                                    "aria-hidden": "true",
                                    children: "\u200b"
                                }), (0, o.jsx)(i.u.Child, {
                                    as: n.Fragment,
                                    enter: "ease-out duration-300",
                                    enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                                    enterTo: "opacity-100 translate-y-0 sm:scale-100",
                                    leave: "ease-in duration-200",
                                    leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
                                    leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                                    children: (0, o.jsxs)(a.V.Panel, {
                                        className: "relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:w-full sm:max-w-3xl sm:p-6 sm:align-middle",
                                        children: [(0, o.jsx)("div", {
                                            children: (0, o.jsxs)("div", {
                                                className: "mt-3 text-center sm:mt-5",
                                                children: [(0, o.jsx)(a.V.Title, {
                                                    as: "h3",
                                                    className: "text-lg font-medium leading-6 text-gray-900",
                                                    children: "Sleep Ecosystem -Terms of Use"
                                                }), (0, o.jsxs)("div", {
                                                    className: "flex flex-col gap-2 mt-2 text-black",
                                                    children: [(0, o.jsx)("p", {
                                                        className: "text-sm text-left ",
                                                        children: "These are the Terms of Use of Sleep Ecosystem, \u201cwe\u201d or \u201cus\u201d. These Terms of Use to any access and use of our Platforms or website (the \u201cPlatform\u201d), and any of our services related to or utilizing any of the foregoing, which we refer to in these Terms of Use, collectively, as our \u201cServices\u201d."
                                                    }), (0, o.jsx)("span", {
                                                        className: "text-lg font-bold text-left",
                                                        children: "1. Preamble"
                                                    }), (0, o.jsx)("p", {
                                                        className: "text-sm text-left ",
                                                        children: "PLEASE READ THESE TERMS OF USE CAREFULLY. YOU AGREE TO BE BOUND BY THESE TERMS OF USE AND ALL TERMS INCORPORATED BY REFERENCE. If you do not agree to these Terms of Use, you must not use our Services. You can use our Services only if you can lawfully enter into an agreement to these Terms of Use under applicable law. If you use our Services, you agree to do so in compliance with these Terms of Use and with applicable laws and regulations. You shall ensure that your use of our Services is compliant with the laws and regulations of your country of residence. Please be aware that residents of the following countries should not enter into this agreement: Algeria, Egypt, Morocco, Bolivia, Colombia, Ecuador, Saudi Arabia, Bangladesh, Nepal, China, United States of America, Indonesia, Vietnam. In particular, if you are citizen, resident of, or a person located or domiciled in, the United States of America including its states, territories or the District of Columbia or any entity, including, without limitation, any corporation or partnership created or organized in or under the laws of the United States of America, any state or territory thereof or the District of Columbia (a \u201cU.S. person\u201d), or, if you are citizen, resident of, or a person located or domiciled in, or any entity, including, without limitation, any corporation or partnership created or organized in or under the laws of the People\u2019s Republic of China (a \u201cChinese person\u201d), do not enter into this agreement. We shall not be binding by any contract toward you. These Terms of Use constitute the understanding and agreement that we have with you regarding the general Sleep Ecosystem, specific terms of uses and conditions should be concluded in order to use our various products and services (such as NFT marketplace, Play-to-Earn games, tokens, etc.). By using our Services, you declare that all information provided to Sleep Ecosystem in connection with these Terms of Use are true, accurate and complete."
                                                    }), (0, o.jsx)("span", {
                                                        className: "text-lg font-bold text-left",
                                                        children: "2. Description of Services"
                                                    }), (0, o.jsx)("p", {
                                                        className: "text-sm text-left",
                                                        children: "You acknowledge to use the Platform with your own wallet. We do not provide any custodial wallet.\u2028\u2028You agree that you shall take the necessary precautions to ensure the safekeeping of your recovery phrase. YOU FULLY UNDERSTAND THAT ANY FAILURE TO MAKE AND PROTECT YOUR RECOVERY PHRASE MAY LEAD TO TOTAL LOSS OF THE CRYPTOCURRENCIES. Sleep Ecosystem may offer you the option to interact with some of the following services:"
                                                    }), (0, o.jsxs)("ul", {
                                                        className: "pl-8 text-sm text-left list-disc",
                                                        children: [(0, o.jsx)("li", {
                                                            children: "Staking"
                                                        }), (0, o.jsx)("li", {
                                                            children: "NFT Marketplace"
                                                        }), (0, o.jsx)("li", {
                                                            children: "Metaverse Games and services"
                                                        }), (0, o.jsx)("li", {
                                                            children: "Dapps"
                                                        }), (0, o.jsx)("li", {
                                                            children: "DeFi apps"
                                                        }), (0, o.jsx)("li", {
                                                            children: "Token"
                                                        })]
                                                    }), (0, o.jsx)("p", {
                                                        className: "text-sm text-left",
                                                        children: 'All those services are not already developed and implemented. Some of those services will only be available in the future. Each service will be framed by its own terms of use. You can find information on the current white paper of Sleep Ecosystem here: sleepecosystem.io \u2028\u2028You agree that those functionalities may be available only in some countries. Sleep Ecosystem may offer you the option to earn interest with a variable interest rate on your balance, via a decentralized interaction. You agree that those functionalities may be available only in some countries. In order to earn interest rate on your balance through the Platform, you will need to accept and consent to the terms of use of the dedicated service. In case Sleep Ecosystem uses third party provides, you would enter into a direct contractual relationship with them. We would then provide you with applicable terms of use of those services, by incorporating them by reference in the dedicated terms of use our service. We cannot and do not guarantee the fee rates applicable by our providers, and it is of your responsibility to check them when you enable interest rate on your balance. This functionality is based on a decentralized interaction and Sleep Ecosystem is not responsible for the decentralized interactions made through them. Sleep Ecosystem may offer you the option to perform interactions (the "Interactions") using third-party providers and/or protocols (the "Decentralized services"). As non-exhaustive examples, Interactions may take the form of:'
                                                    }), (0, o.jsxs)("ul", {
                                                        className: "pl-8 text-sm text-left list-disc",
                                                        children: [(0, o.jsx)("li", {
                                                            children: "Static or variable rewards and interest rates."
                                                        }), (0, o.jsx)("li", {
                                                            children: "Voting or other forms of participation in consensus mechanisms or other decentralized autonomous organizations."
                                                        }), (0, o.jsx)("li", {
                                                            children: "Cryptocurrency swaps using decentralized exchange platforms."
                                                        }), (0, o.jsx)("li", {
                                                            children: "Cryptocurrency position leverage, for example based on margin trading, on decentralized exchange platforms."
                                                        })]
                                                    }), (0, o.jsx)("p", {
                                                        className: "text-sm text-left",
                                                        children: "You accept that Interactions may come in various forms that can differ from the examples stated above. Interactions may be performed using an open protocol to connect to Decentralized services. Sleep Ecosystem cannot guarantee and will not guarantee the genuine character of the Decentralized services you connect to using. You accept that Interactions may impact the amount of cryptocurrencies in your wallet or through tokens issued by us. You accept that Interactions may impact your wallet and the cryptocurrencies it contains in a specified or unspecified logic, which can be built in the aforementioned Decentralized services or outside of them. You are fully responsible for all acts or omissions of any third party with access to your wallet. You accept and understand that you are fully responsible for all actions performed in the Platform when performing an Interaction. You accept and understand that you are fully responsible for verifying the genuine aspect of the Decentralized services you are using in the Platform. You acknowledge and accept that Sleep Ecosystem is not responsible for any errors or omissions that you make in connection"
                                                    }), (0, o.jsx)("span", {
                                                        className: "text-lg font-bold text-left",
                                                        children: "3. Disclaimer"
                                                    }), (0, o.jsx)("p", {
                                                        className: "text-sm text-left ",
                                                        children: "Sleep Ecosystem shall make its best effort, as far as possible, to keep the Platform accessible 7 days a week and 24 hours a day. However, you agree and acknowledge that the access to the Platform may be suspended due to technical maintenance, migration or updates, or due to breakdowns or constraints in relation with the operation of internet network or the blockchain.\u2028\u2028The networks on which the data flows have different characteristics and capacities and can be saturated at certain times of the day, which can affect their downloading times and their accessibility. Sleep Ecosystem will not be held liable for any malfunction or inability to access the Platform attributable to third parties, to a network congestion, to unsuitable your equipment, to a maintenance or update of the Platform or to any other circumstances not attributable to Sleep Ecosystem. Sleep Ecosystem does not guarantee continuous, uninterrupted, error-free or secure access to any part of the Platform and/or the Services. Your use of the Platform and Services provided through it is not guaranteed: Neither Sleep Ecosystem, nor any third party owner, licensor or supplier of equipment, software, systems, services or facilities used or made available in connection with the Platform is liable for any representation, warranty or condition, whether express or implied, concerning the Platform or the Services provided through it, including, without limitation, that the Platform will meet your needs or that the Platform will be available for use at any particular time or for any particular purpose or will operate error-free. Without limiting the foregoing, all express or implied, direct or indirect, representations, warranties and conditions in respect of the Platform and the Services provided through it arising or implied by law, custom, usage of trade, course of performance, course of dealing or otherwise, including, but not limited to, any warranties on conditions of quality and fitness for a particular purpose are expressly excluded to the full extent authorized by the applicable laws and regulations."
                                                    }), (0, o.jsx)("p", {
                                                        className: "text-sm text-left ",
                                                        children: "Sleep Ecosystem shall not be liable for delays, failure in performance or interruption of service which result directly or indirectly from any cause or condition beyond our reasonable control, including but not limited to, any delay or failure due to any act of God, act of civil or military authorities, act of terrorists, civil disturbance, war, strike or other labor dispute, fire, interruption in telecommunications or internet services or network provider services, failure of equipment and/or software, other catastrophe or any other occurrence which is beyond our reasonable control and shall not affect the validity and enforceability of any remaining provisions. The information included on the Platform does not constitute legal, financial or investment advice and is not intended as a recommendation for buying, trading or selling cryptocurrencies."
                                                    }), (0, o.jsx)("p", {
                                                        className: "text-sm text-left ",
                                                        children: "It is recommended to seek advice from legal and financial experts before starting buying, trading or selling cryptocurrencies or tokens. Sleep Ecosystem will not be responsible for the consequences of reliance upon any opinion or statement contained in the Platform or for any omission. You should be fully aware of the level of risk involved before trading any cryptocurrencies or tokens. Any loss of data, crypto assets or profit is your sole responsibility."
                                                    }), (0, o.jsx)("p", {
                                                        className: "text-sm text-left ",
                                                        children: "The information on the Platform does not constitute an offer or solicitation by anyone in any jurisdiction in which an offer or solicitation cannot legally be made, or to any person to whom it is unlawful to make a solicitation. Links to other web sites and data extracted from other sources are for convenience only. No endorsement of any independent third-party products, services or information is expressed or implied by any information, material or content of a third party contained in, referred to, included on, or linked from or to the Platform. Investing in cryptocurrencies and/or tokens entails a significant capital risk, which you acknowledge and accept. The value of cryptocurrencies may be subject to fluctuations, due to market forces and a varying balance of supply and demand. You understand and agree that the value of cryptocurrencies and/or tokens may increase or decrease at any time after purchase. You further understand that cryptocurrencies liquidity may be markedly different depending on the considered jurisdiction or exchange used to perform the trade. Sleep Ecosystem is not responsible for such fluctuations and will not be held liable for any loss incurred owing to such volatility or default of liquidity, if any. Cryptocurrencies and the blockchain protocols are a new, relatively untested technology. In addition to the risks mentioned herein, there are other risks that Sleep Ecosystem cannot yet identify or predict, and you should make your own enquiries, research and analysis thereof. Risks may also occur as unanticipated combinations or as changes in the risks stipulated herein. Sleep Ecosystem does not have any control over the underlying software protocol of the cryptocurrencies you are storing on your wallet. Sleep Ecosystem does not make any representation or guarantee and will to bear any liability regarding the quality, availability, or fitness for purpose of these cryptocurrencies or its continued support of the same. From time to time, the underlying protocol of a given cryptocurrency may change, which may have consequences on its key characteristic including but not limited to its name, its valuation or the way it operates. These events are called \u201cForks\u201d. There is an element of uncertainty attached to Forks, including but not limited to a risk that transactions initiated on a forking cryptocurrency may be misdirected or replicated. For this reason, Sleep Ecosystem may decide, in certain circumstances, to suspend its support of such cryptocurrency ahead of the Fork and for as long as Sleep Ecosystem deems necessary. When it does, Sleep Ecosystem will endeavor to give you advance notice, but may not be able to. In any case, you shall make yourself aware of the risk attached to Forks and it is your responsibility to keep yourself applicable of such events and to make all necessary arrangements."
                                                    }), (0, o.jsx)("p", {
                                                        className: "text-sm text-left ",
                                                        children: "Cryptocurrencies are based on blockchain protocols. Malfunctions, breakdowns, forks or abandonments of the said protocols may have a material effect on the cryptocurrencies, and you acknowledge that Sleep Ecosystem is not responsible for any such incident and will have no liability whatsoever in relation thereto. You acknowledge that the mining system of the blockchain protocols may be subject to attacks, including but not limited to double-spend attacks, majority mining power attacks, selfish-mining attacks and race condition attacks. You understand and agree that, following such attacks, you may be unable to recover cryptocurrencies related amounts at a reasonable price or at all, and accepts that Sleep Ecosystem shall bear no responsibility for such cybercriminal acts.\u2028\u2028You acknowledge and agree that such risks may lead to the loss of cryptocurrencies and accepts that Sleep Ecosystem will have no liability whatsoever in relation thereto. You acknowledge and agree that Sleep Ecosystem is not responsible for any errors or omissions that you make in connection with any cryptocurrency transaction initiated via the Services."
                                                    }), (0, o.jsx)("p", {
                                                        className: "text-sm text-left ",
                                                        children: "Please note that you are solely responsible for the way you use, store, and backup your information and data (including your recovery phrase) relating to your cryptocurrencies in connection with the use of the Platform. Services provided by Sleep Ecosystem through its Platform are only available in jurisdictions where they may be lawfully offered. Therefore, some Services may only be available in certain jurisdictions as stated above. You understand and agree that cryptocurrencies are currently in the process of being regulated. Some jurisdictions may apply existing regulations on cryptocurrencies or introduce new blockchain-technology-based rules, which may impact the use and/or value of cryptocurrencies or the availability of the Services. You understand and agree that Sleep Ecosystem may be subject to orders, notices, requests or rulings, in particular from a regulatory authority, or may be required to suspend or discontinue the use of the Services. You understand and agree that such laws, regulations or orders may impact, limit or impede the ability of Sleep Ecosystem to conduct business and provide the Services through the Platform, and that they may result in a local, partial or total cessation of activity. Such decision or the conduct of business in such circumstances is at the sole discretion of Sleep Ecosystem and Sleep Ecosystem shall not incur any liability of any kind because of it."
                                                    }), (0, o.jsx)("p", {
                                                        className: "text-sm text-left ",
                                                        children: "TO THE MAXIMUM EXTENT NOT PROHIBITED BY LAW, SLEEP ECOSYSTEM SHALL NOT BE LIABLE FOR DAMAGES OF ANY TYPE, WHETHER DIRECT OR INDIRECT, ARISING OUT OF OR IN ANY WAY RELATED TO YOUR USE OR INABILITY TO USE THE SERVICES, INCLUDING BUT NOT LIMITED TO DAMAGES ALLEGEDLY ARISING FROM THE COMPROMISE OR LOSS OF YOUR LOGIN CREDENTIALS OR CRYPTOCURRENCIES, OR LOSS OF OR INABILITY TO RESTORE ACCESS FROM YOUR RECOVERY PHRASE AND PIN CODE OR FOR MISTAKES, OMISSIONS, INTERRUPTIONS, DELAYS, DEFECTS AND/OR ERRORS IN THE SERVICES, OR FOR DIMINUTION OF VALUE OF ANY CRYPTOCURRENCIES. SLEEP ECOSYSTEM SHALL NOT BE LIABLE UNDER ANY CIRCUMSTANCES FOR ANY LOST PROFITS OR ANY SPECIAL, INCIDENTAL, INDIRECT, INTANGIBLE, OR CONSEQUENTIAL DAMAGES, WHETHER BASED IN CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY, OR OTHERWISE, ARISING OUT OF OR IN CONNECTION WITH AUTHORIZED OR UNAUTHORIZED USE OF THE SERVICES, EVEN IF AN AUTHORIZED REPRESENTATIVE OF SLEEP ECOSYSTEM HAS BEEN ADVISED OF OR KNEW OR SHOULD HAVE KNOWN OF THE POSSIBILITY OF SUCH DAMAGES. SLEEP ECOSYSTEM SHALL NOT BE LIABLE UNDER ANY CIRCUMSTANCES FOR DAMAGES ARISING OUT OF OR IN ANY WAY RELATED TO SOFTWARE, PRODUCTS, SERVICES, AND/OR INFORMATION OFFERED OR PROVIDED BY THIRD PARTIES AND ACCESSED THROUGH THE PLATFORM. EXCEPT AS OTHERWISE REQUIRED BY LAW, IN NO EVENT SHALL SLEEP ECOSYSTEM\u2019S TOTAL LIABILITY TO YOU FOR ALL DAMAGES (OTHER THAN AS MAY BE REQUIRED BY PLATFORMLICABLE LAW) EXCEED THE LESSER OF (I) FIVE HUNDRED EUROS (EUR 500) OR (II) THE AGGREGATE FEES YOU PAID DIRECTLY TO SLEEP ECOSYSTEM DURING THE TWELVE (12) MONTHS PRECEDING THE EVENT GIVING RISE TO THE LIABILITY. YOU EXPRESSLY ACKNOWLEDGE AND AGREE THAT USE OF THE SERVICES (INCLUDING ANY RECOVERY PHRASE OR PIN CODE STORAGE SERVICE OFFERED AS PART OF THE SERVICES, WHETHER CLOUD OR HARDWARE-BASED) IS AT YOUR SOLE RISK AND THAT THE ENTIRE RISK AS TO SATISFACTORY QUALITY, PERFORMANCE, ACCURACY AND EFFORT IS WITH YOU. THE SERVICES ARE PROVIDED ON AN \u201cAS IS\u201d AND \u201cAS AVAILABLE\u201d BASIS WITHOUT ANY REPRESENTATION OR WARRANTY, WHETHER EXPRESS, IMPLIED OR STATUTORY."
                                                    }), (0, o.jsx)("span", {
                                                        className: "text-lg font-bold text-left",
                                                        children: "4. Intellectual Property"
                                                    }), (0, o.jsx)("p", {
                                                        className: "text-sm text-left ",
                                                        children: "Sleep Ecosystem (and its licensors) owns and retains all intellectual property rights, interest, and title to the full extent and without limitation in the Platform and the Services provided through it."
                                                    }), (0, o.jsx)("p", {
                                                        className: "text-sm text-left ",
                                                        children: "The user may not copy, imitate, modify, alter, amend or use any of such content subject to intellectual property rights protection without the prior written consent of Sleep Ecosystem.\u2028\u2028"
                                                    }), (0, o.jsx)("p", {
                                                        className: "text-sm text-left ",
                                                        children: "Subject to your compliance with these Terms of Use, we grant you a limited, non-exclusive, non-transferable, non-sublicensable license to download, view and display the Platform solely in connection with your permitted use of the Services. We do not claim any ownership rights in any content you are uploading on the Platform through the use of the Services and nothing in these Terms of Use will be deemed to restrict any rights that you may have to use and exploit the content that you are uploading on the Platform through the use of the Services."
                                                    }), (0, o.jsx)("p", {
                                                        className: "text-sm text-left ",
                                                        children: "In order to operate and provide our Services, you grant us a worldwide, non-exclusive, royalty-free, sublicensable, and transferable license to use, copy, distribute, create derivative works of, display, and perform the content that you upload, submit, store, send, or receive on or through our Services. The rights you grant in this license are for the limited purpose of operating and providing our Services. You can remove the content you have uploaded on the Platform by specifically deleting it. However, in certain instances, some of your content may not be completely removed and copies of your content may continue to exist on the Services."
                                                    }), (0, o.jsx)("p", {
                                                        className: "text-sm text-left ",
                                                        children: "In order to operate and provide our Services, you grant us a worldwide, non-exclusive, royalty-free, sublicensable, and transferable license to use, copy, distribute, create derivative works of, display, and perform the content that you upload, submit, store, send, or receive on or through our Services. The rights you grant in this license are for the limited purpose of operating and providing our Services. You can remove the content you have uploaded on the Platform by specifically deleting it. However, in certain instances, some of your content may not be completely removed and copies of your content may continue to exist on the Services."
                                                    }), (0, o.jsx)("span", {
                                                        className: "text-lg font-bold text-left",
                                                        children: "5. Users\u2019 Obligations and Restrictions"
                                                    }), (0, o.jsx)("p", {
                                                        className: "text-sm text-left ",
                                                        children: "You are not authorized, under any circumstances, to use the Platform and the Services on behalf of third parties or provide such third parties access to the Platform. You are not authorized to:"
                                                    }), (0, o.jsxs)("ul", {
                                                        className: "pl-8 text-sm text-left list-disc",
                                                        children: [(0, o.jsx)("li", {
                                                            children: "infringe directly or indirectly our intellectual property right, our reputation, or any other of our right or interest, any other user of the Platform, or any other third party;"
                                                        }), (0, o.jsx)("li", {
                                                            children: "perform an act related to, or similar to money laundering, a fraud, a crime, or otherwise all acts infringing public order;"
                                                        }), (0, o.jsx)("li", {
                                                            children: "perform an act in breach of applicable law or regulation;"
                                                        }), (0, o.jsx)("li", {
                                                            children: "perform an act which infringes the integrity or the operating of the Platform and Services;"
                                                        }), (0, o.jsx)("li", {
                                                            children: "perform an act which constitutes or intends to constitute a double spending or duplicate transfer of cryptocurrencies;"
                                                        }), (0, o.jsx)("li", {
                                                            children: "open a wallet or use Platform in breach of these Terms of Use; or"
                                                        }), (0, o.jsx)("li", {
                                                            children: "perform an act we otherwise deem inappropriate."
                                                        })]
                                                    }), (0, o.jsx)("p", {
                                                        className: "text-sm text-left ",
                                                        children: "If you fail to comply with the above rules, the Platform may decide to terminate your account without notice."
                                                    }), (0, o.jsx)("p", {
                                                        className: "text-sm text-left ",
                                                        children: "You hereby agree that (i) all the activities that you carry out during the use of the Platform and the Services will be in compliance with the requirements of applicable laws, regulations, as well as the various guidelines of Sleep Ecosystem, as applicable, and that (ii) you will not be in violation of public interests, public ethics or any other party\u2019s legitimate interests."
                                                    }), (0, o.jsx)("p", {
                                                        className: "text-sm text-left ",
                                                        children: "By accessing the Service, you agree that Sleep Ecosystem shall have the right to unilaterally determine whether you have violated any of the above covenants and take actions to apply relevant rules without receiving your consent or giving prior notice to you."
                                                    }), (0, o.jsx)("p", {
                                                        className: "text-sm text-left ",
                                                        children: "You will indemnify and hold harmless Sleep Ecosystem and its officers, directors, employees and agents, from and against any claims, disputes, demands, liabilities, damages, losses, and costs and expenses, including, without limitation, reasonable legal and accounting fees arising out of or in any way connected with (i) your access to or use of the Services, (ii) any content you have uploaded on the Platform or (iii) your violation of these Terms of Use."
                                                    }), (0, o.jsx)("span", {
                                                        className: "text-lg font-bold text-left",
                                                        children: "6. Taxes"
                                                    }), (0, o.jsx)("p", {
                                                        className: "text-sm text-left ",
                                                        children: "You acknowledge, understand and agree that the acquisition and withdrawal of cryptocurrencies may have tax consequences which vary depending on the applicable jurisdictions."
                                                    }), (0, o.jsx)("p", {
                                                        className: "text-sm text-left ",
                                                        children: "You are solely responsible for ensuring compliance with your tax obligations and shall declare, bear and pay all such taxes, duties, imposts, levies, tariffs and surcharges as may be imposed by applicable laws and regulations."
                                                    }), (0, o.jsx)("p", {
                                                        className: "text-sm text-left ",
                                                        children: "You are responsible for carrying out a legal and tax analysis concerning the purchase and ownership of cryptocurrencies under laws and regulation applicable to you in function of your status, nationality and place of residence, fiscal residence, etc. You acknowledge and agree that Sleep Ecosystem waives any and all liability and responsibility with respect to your tax consequences, who hereby agrees to fully indemnify, defend and hold Sleep Ecosystem harmless from all claims, demands, damages, awards, fines, costs, expenses and liability associated with the foregoing obligations or otherwise with respect to all claims, demands or allegations of tax associated with these Terms of Use."
                                                    }), (0, o.jsx)("span", {
                                                        className: "text-lg font-bold text-left",
                                                        children: "7. Compliance and Investigation"
                                                    }), (0, o.jsx)("p", {
                                                        className: "text-sm text-left ",
                                                        children: "The Services and the Platform may be subject to export control regulations under applicable law."
                                                    }), (0, o.jsx)("p", {
                                                        className: "text-sm text-left ",
                                                        children: "By using the Services you represent that you are not an individual or entity that is, or an entity owned or controlled by persons or entities that are, (i) the subject of any sanctions administered or enforced by the U.S. Department of the Treasury\u2019s Office of Foreign Assets Control, the U.S. Department of State, the United Nations Security Council, the European Union, Her Majesty\u2019s Treasury, the Swiss government, or any other governmental authority with jurisdiction over Sleep Ecosystem or the Services; (ii) identified on the Denied Persons, Entity, or Unverified Lists of the U.S. Department of Commerce\u2019s Bureau of Industry and Security; or (iii) located, organized or resident in a country or territory that is, or whose government is, the subject of U.S. economic sanctions, including, without limitation, Cuba, Iran, North Korea, South Sudan, Sudan, or Syria."
                                                    }), (0, o.jsx)("p", {
                                                        className: "text-sm text-left ",
                                                        children: "Sleep Ecosystem reserves the right to investigate suspected violations of these Terms of Use. Sleep Ecosystem may seek to gather information from the user who is suspected of violating these Terms of Use, and from any other user. Sleep Ecosystem may suspend any users whose conduct are under investigation. You acknowledge and agree that Sleep Ecosystem shall fully co-operate with any law enforcement authorities or court order requesting or directing Sleep Ecosystem to disclose any available information relating to anyone using the Platform and the Services in a manner which violates these Terms of Use."
                                                    }), (0, o.jsx)("span", {
                                                        className: "text-lg font-bold text-left",
                                                        children: "8. Miscellaneous"
                                                    }), (0, o.jsx)("p", {
                                                        className: "text-sm text-left ",
                                                        children: "These Terms of Use constitutes the complete and exclusive understanding and agreement between you and Sleep Ecosystem regarding its subject matter and supersedes all prior or contemporaneous documents, exchanges, communications, presentations and marketing events, agreements or understandings, whether written or oral, relating to its subject-matter."
                                                    }), (0, o.jsx)("p", {
                                                        className: "text-sm text-left ",
                                                        children: "In the event of conflict between documents, policies or these Terms of Use, these Terms of Use will take precedence, unless expressly otherwise provided herein.\u2028\u2028The original and binding text of these Terms of Use is in English, and translated versions are for reference purposes only. In the event of conflict between the English and any translated version, the English version shall prevail."
                                                    }), (0, o.jsx)("p", {
                                                        className: "text-sm text-left ",
                                                        children: "Where a provision of these Terms of Use is held to be invalid, illegal, void or unenforceable, in whole or in part, the said provision shall be deemed severable from these Terms of Use in a manner which does not affect, impair or invalidate the remaining provisions."
                                                    }), (0, o.jsx)("p", {
                                                        className: "text-sm text-left ",
                                                        children: "All headings contained in these Terms of Use are inserted for identification and convenience only and will not be deemed part of these Terms of Use for purposes of interpretation."
                                                    }), (0, o.jsx)("p", {
                                                        className: "text-sm text-left ",
                                                        children: "Sleep Ecosystem may change, amend, delete or add to these Terms of Use, at any time and at its sole discretion, without prior notice. You will be notified of the changes directly in the Platform and shall accept and consent to the changes to continue using the Platform and the Services."
                                                    }), (0, o.jsx)("p", {
                                                        className: "text-sm text-left ",
                                                        children: "Sleep Ecosystem and yourself can terminate these Terms of Use at any time for any reason, with a seven-day notice."
                                                    }), (0, o.jsx)("p", {
                                                        className: "text-sm text-left ",
                                                        children: "The termination will take e\ufb00ect when the receipt of the notice of termination is received by the party that noti\ufb01ed the other of its desire to terminate the Terms of Use. The parties shall remain bound by the obligations that have arisen prior to the e\ufb00ective termination.\u2028\u2028"
                                                    }), (0, o.jsx)("p", {
                                                        className: "text-sm text-left ",
                                                        children: "The parties agree that all clauses which must survive the expiration or termination of the Terms of Use, for any reason whatsoever, will survive the term of the Terms of Use or any termination"
                                                    })]
                                                })]
                                            })
                                        }), (0, o.jsxs)("div", {
                                            className: "mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3",
                                            children: [(0, o.jsx)(s.Z, {
                                                type: "button",
                                                onClick: function() {
                                                    window.location.href = "https://sleepecosystem.io"
                                                },
                                                children: "Take me back"
                                            }), (0, o.jsx)(s.Z, {
                                                type: "button",
                                                onClick: function() {
                                                    localStorage.setItem("consent", "true"), r(!1), r(!1)
                                                },
                                                children: "I agree"
                                            })]
                                        })]
                                    })
                                })]
                            })
                        })]
                    })
                })
            }

            function c(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        o = Object.keys(r);
                    "function" === typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    })))), o.forEach((function(t) {
                        c(e, t, r[t])
                    }))
                }
                return e
            }
            var d = function(e) {
                var t = e.Component,
                    r = e.pageProps;
                return (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)(l, {}), (0, o.jsx)(t, u({}, r))]
                })
            }
        },
        7107: function() {},
        1182: function(e, t, r) {
            "use strict";
            var o = this && this.__assign || function() {
                    return o = Object.assign || function(e) {
                        for (var t, r = 1, o = arguments.length; r < o; r++)
                            for (var n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                        return e
                    }, o.apply(this, arguments)
                },
                n = this && this.__spreadArray || function(e, t, r) {
                    if (r || 2 === arguments.length)
                        for (var o, n = 0, i = t.length; n < i; n++) !o && n in t || (o || (o = Array.prototype.slice.call(t, 0, n)), o[n] = t[n]);
                    return e.concat(o || Array.prototype.slice.call(t))
                },
                i = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.overrideTailwindClasses = t.findTailwindProperties = void 0;
            var a = i(r(7896)),
                s = r(4200),
                l = {
                    prefix: "",
                    jit: !0,
                    ruleLookupCache: !0,
                    ignoreCssVariables: !0
                },
                c = function(e, t) {
                    var r, o;
                    return null === (o = null === (r = (0, s.getRules)(t).find((function(t) {
                        return t.regex.test(e)
                    }))) || void 0 === r ? void 0 : r.properties) || void 0 === o ? void 0 : o.filter((function(e) {
                        return !t.ignoreCssVariables || ! function(e) {
                            return e.startsWith("--")
                        }(e)
                    }))
                },
                u = (0, a.default)(c);
            t.findTailwindProperties = function(e, t) {
                return void 0 === t && (t = l), t.ruleLookupCache ? u(e, t) : c(e, t)
            };
            var d = function(e) {
                    return e.lastIndexOf(":")
                },
                p = function(e) {
                    var t = d(e);
                    return -1 === t ? "" : e.substring(0, t)
                },
                f = function(e, t) {
                    var r = function(e) {
                        return e.substring(d(e) + 1)
                    }(e);
                    return t.jit ? function(e) {
                        return function(e) {
                            return e.replace(/\/(\d|\.|\[|\])+$/g, "")
                        }(function(e) {
                            return e.replace(/^!/g, "")
                        }(e))
                    }(r) : r
                };
            t.overrideTailwindClasses = function(e, r) {
                void 0 === r && (r = l);
                var i = o(o({}, l), r);
                return e.split(/\s+/).reduce((function(e, r) {
                    var o = e.filter((function(e) {
                        return ! function(e, r, o) {
                            var n = p(e),
                                i = p(r),
                                a = (0, t.findTailwindProperties)(f(e, o), o),
                                s = (0, t.findTailwindProperties)(f(r, o), o);
                            return a && s && n === i && a.some((function(e) {
                                return s.includes(e)
                            }))
                        }(r, e, i)
                    }));
                    return n(n([], o, !0), [r], !1)
                }), []).join(" ")
            }
        },
        4200: function(e, t, r) {
            "use strict";
            var o = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getRules = void 0;
            var n = o(r(7896)),
                i = function(e) {
                    var t = e.prefix,
                        r = e.jit ? "\\[.+\\]" : "a^",
                        o = "((\\d|\\.|/)+|" + r + ")",
                        n = "($|-0|-" + r + ")",
                        i = "($|-" + o + ")",
                        a = "([a-zA-Z]|" + o + ")+",
                        s = "(-|[a-zA-Z]|" + o + ")+",
                        l = "($|-" + s + ")";
                    return [{
                        regex: "content-none",
                        properties: ["content"]
                    }, {
                        regex: "ease-(linear|in|out|in-out)",
                        properties: ["transition-timing-function"]
                    }, {
                        regex: "duration-" + o,
                        properties: ["transition-duration"]
                    }, {
                        regex: "delay-" + o,
                        properties: ["transition-delay"]
                    }, {
                        regex: "transition($|-all|-colors|-opacity|-shadow|-transform)",
                        properties: ["transition-duration", "transition-property", "transition-timing-function"]
                    }, {
                        regex: "transition-none",
                        properties: ["transition-property"]
                    }, {
                        regex: "backdrop-sepia" + n,
                        properties: ["--tw-backdrop-sepia"]
                    }, {
                        regex: "backdrop-saturate-" + o,
                        properties: ["--tw-backdrop-saturate"]
                    }, {
                        regex: "backdrop-opacity-" + o,
                        properties: ["--tw-backdrop-opacity"]
                    }, {
                        regex: "backdrop-invert" + n,
                        properties: ["--tw-backdrop-invert"]
                    }, {
                        regex: "-?backdrop-hue-rotate-" + o,
                        properties: ["--tw-backdrop-hue-rotate"]
                    }, {
                        regex: "backdrop-grayscale" + n,
                        properties: ["--tw-backdrop-grayscale"]
                    }, {
                        regex: "backdrop-contrast-" + o,
                        properties: ["--tw-backdrop-contrast"]
                    }, {
                        regex: "backdrop-brightness-" + o,
                        properties: ["--tw-backdrop-brightness"]
                    }, {
                        regex: "backdrop-blur" + l,
                        properties: ["--tw-backdrop-blur"]
                    }, {
                        regex: "backdrop-filter-none",
                        properties: ["-webkit-backdrop-filter", "backdrop-filter"]
                    }, {
                        regex: "backdrop-filter",
                        properties: ["--tw-backdrop-blur", "--tw-backdrop-brightness", "--tw-backdrop-contrast", "--tw-backdrop-grayscale", "--tw-backdrop-hue-rotate", "--tw-backdrop-invert", "--tw-backdrop-opacity", "--tw-backdrop-saturate", "--tw-backdrop-sepia", "-webkit-backdrop-filter", "backdrop-filter"]
                    }, {
                        regex: "sepia" + n,
                        properties: ["--tw-sepia"]
                    }, {
                        regex: "saturate-" + o,
                        properties: ["--tw-saturate"]
                    }, {
                        regex: "invert" + n,
                        properties: ["--tw-invert"]
                    }, {
                        regex: "-?hue-rotate-" + o,
                        properties: ["--tw-hue-rotate"]
                    }, {
                        regex: "grayscale" + n,
                        properties: ["--tw-grayscale"]
                    }, {
                        regex: "drop-shadow" + l,
                        properties: ["--tw-drop-shadow"]
                    }, {
                        regex: "contrast-" + o,
                        properties: ["--tw-contrast"]
                    }, {
                        regex: "brightness-" + o,
                        properties: ["--tw-brightness"]
                    }, {
                        regex: "blur" + l,
                        properties: ["--tw-blur"]
                    }, {
                        regex: "filter-none",
                        properties: ["filter"]
                    }, {
                        regex: "filter",
                        properties: ["--tw-blur", "--tw-brightness", "--tw-contrast", "--tw-drop-shadow", "--tw-grayscale", "--tw-hue-rotate", "--tw-invert", "--tw-saturate", "--tw-sepia", "filter"]
                    }, {
                        regex: "ring-offset-[A-Za-z].*",
                        properties: ["--tw-ring-offset-color"]
                    }, {
                        regex: "ring-offset-" + o,
                        properties: ["--tw-ring-offset-width"]
                    }, {
                        regex: "ring-opacity-" + o,
                        properties: ["--tw-ring-opacity"]
                    }, {
                        regex: "ring-(transparent|current)",
                        properties: ["--tw-ring-color"]
                    }, {
                        regex: "ring" + i,
                        properties: ["--tw-ring-offset-shadow", "--tw-ring-shadow", "box-shadow"]
                    }, {
                        regex: "ring-inset",
                        properties: ["--tw-ring-inset"]
                    }, {
                        regex: "ring-" + s,
                        properties: ["--tw-ring-color", "--tw-ring-opacity"]
                    }, {
                        regex: "outline-(none|white|black)",
                        properties: ["outline", "outline-offset"]
                    }, {
                        regex: "shadow" + l,
                        properties: ["--tw-shadow", "box-shadow"]
                    }, {
                        regex: "mix-blend-" + s,
                        properties: ["mix-blend-mode"]
                    }, {
                        regex: "bg-blend-" + s,
                        properties: ["background-blend-mode"]
                    }, {
                        regex: "opacity-" + o,
                        properties: ["opacity"]
                    }, {
                        regex: "caret-" + s,
                        properties: ["caret-color"]
                    }, {
                        regex: "(subpixel-antialiased|antialiased)",
                        properties: ["-moz-osx-font-smoothing", "-webkit-font-smoothing"]
                    }, {
                        regex: "(underline|line-through|no-underline)",
                        properties: ["text-decoration"]
                    }, {
                        regex: "text-opacity-" + o,
                        properties: ["--tw-text-opacity"]
                    }, {
                        regex: "text-(transparent|current)",
                        properties: ["color"]
                    }, {
                        regex: "text-(xs|sm|base|lg|xl|\\dxl)",
                        properties: ["font-size", "line-height"]
                    }, {
                        regex: "text-(left|center|right|justify)",
                        properties: ["text-align"]
                    }, {
                        regex: "text-" + s,
                        properties: ["--tw-text-opacity", "color"]
                    }, {
                        regex: "tracking-" + s,
                        properties: ["letter-spacing"]
                    }, {
                        regex: "leading-" + s,
                        properties: ["line-height"]
                    }, {
                        regex: "(diagonal-fractions|stacked-fractions)",
                        properties: ["--tw-numeric-fraction"]
                    }, {
                        regex: "(proportional-nums|tabular-nums)",
                        properties: ["--tw-numeric-spacing"]
                    }, {
                        regex: "(lining-nums|oldstyle-nums)",
                        properties: ["--tw-numeric-figure"]
                    }, {
                        regex: "slashed-zero",
                        properties: ["--tw-slashed-zero"]
                    }, {
                        regex: "normal-nums",
                        properties: ["font-variant-numeric"]
                    }, {
                        regex: "ordinal",
                        properties: ["--tw-numeric-figure", "--tw-numeric-fraction", "--tw-numeric-spacing", "--tw-ordinal", "--tw-slashed-zero", "font-variant-numeric"]
                    }, {
                        regex: "(italic|not-italic)",
                        properties: ["font-style"]
                    }, {
                        regex: "(uppercase|lowercase|capitalize|normal-case)",
                        properties: ["text-transform"]
                    }, {
                        regex: "font-(sans|serif|mono)",
                        properties: ["font-family"]
                    }, {
                        regex: "font-" + s,
                        properties: ["font-weight"]
                    }, {
                        regex: "align-" + s,
                        properties: ["vertical-align"]
                    }, {
                        regex: "pl-" + a,
                        properties: ["padding-left"]
                    }, {
                        regex: "pb-" + a,
                        properties: ["padding-bottom"]
                    }, {
                        regex: "pr-" + a,
                        properties: ["padding-right"]
                    }, {
                        regex: "pt-" + a,
                        properties: ["padding-top"]
                    }, {
                        regex: "py-" + a,
                        properties: ["padding-bottom", "padding-top"]
                    }, {
                        regex: "px-" + a,
                        properties: ["padding-left", "padding-right"]
                    }, {
                        regex: "p-" + a,
                        properties: ["padding"]
                    }, {
                        regex: "object-(bottom|center|left.*|right.*|top)",
                        properties: ["-o-object-position", "object-position"]
                    }, {
                        regex: "object-(contain|cover|fill|none|scale-down)",
                        properties: ["-o-object-fit", "object-fit"]
                    }, {
                        regex: "stroke-" + o,
                        properties: ["stroke-width"]
                    }, {
                        regex: "stroke-current",
                        properties: ["stroke"]
                    }, {
                        regex: "fill-current",
                        properties: ["fill"]
                    }, {
                        regex: "bg-origin-" + s,
                        properties: ["background-origin"]
                    }, {
                        regex: "bg-(no-)?repeat" + l,
                        properties: ["background-repeat"]
                    }, {
                        regex: "bg-(bottom|center|left.*|right.*|top)",
                        properties: ["background-position"]
                    }, {
                        regex: "bg-clip-text",
                        properties: ["-webkit-background-clip", "background-clip"]
                    }, {
                        regex: "bg-clip-(border|padding|content)",
                        properties: ["background-clip"]
                    }, {
                        regex: "bg-(fixed|local|scroll)",
                        properties: ["background-attachment"]
                    }, {
                        regex: "bg-(auto|cover|contain)",
                        properties: ["background-size"]
                    }, {
                        regex: "decoration-(slice|clone)",
                        properties: ["-webkit-box-decoration-break", "box-decoration-break"]
                    }, {
                        regex: "to-" + s,
                        properties: ["--tw-gradient-to"]
                    }, {
                        regex: "via-" + s,
                        properties: ["--tw-gradient-stops"]
                    }, {
                        regex: "from-" + s,
                        properties: ["--tw-gradient-from", "--tw-gradient-stops"]
                    }, {
                        regex: "bg-(none|gradient-to-" + s + ")",
                        properties: ["background-image"]
                    }, {
                        regex: "bg-opacity-" + o,
                        properties: ["--tw-bg-opacity"]
                    }, {
                        regex: "bg-(transparent|current)",
                        properties: ["background-color"]
                    }, {
                        regex: "bg-" + s,
                        properties: ["--tw-bg-opacity", "background-color"]
                    }, {
                        regex: "border-opacity-" + o,
                        properties: ["--tw-border-opacity"]
                    }, {
                        regex: "border-l" + i,
                        properties: ["border-left-width"]
                    }, {
                        regex: "border-b" + i,
                        properties: ["border-bottom-width"]
                    }, {
                        regex: "border-r" + i,
                        properties: ["border-right-width"]
                    }, {
                        regex: "border-t" + i,
                        properties: ["border-top-width"]
                    }, {
                        regex: "(divide-transparent|divide-current|border-transparent|border-current)",
                        properties: ["border-color"]
                    }, {
                        regex: "(divide|border)-(solid|dashed|dotted|double|none)",
                        properties: ["border-style"]
                    }, {
                        regex: "border-(collapse|separate)",
                        properties: ["border-collapse"]
                    }, {
                        regex: "border" + i,
                        properties: ["border-width"]
                    }, {
                        regex: "border-" + s,
                        properties: ["--tw-border-opacity", "border-color"]
                    }, {
                        regex: "rounded-bl" + l,
                        properties: ["border-bottom-left-radius"]
                    }, {
                        regex: "rounded-br" + l,
                        properties: ["border-bottom-right-radius"]
                    }, {
                        regex: "rounded-tr" + l,
                        properties: ["border-top-right-radius"]
                    }, {
                        regex: "rounded-tl" + l,
                        properties: ["border-top-left-radius"]
                    }, {
                        regex: "rounded-l" + l,
                        properties: ["border-bottom-left-radius", "border-top-left-radius"]
                    }, {
                        regex: "rounded-b" + l,
                        properties: ["border-bottom-left-radius", "border-bottom-right-radius"]
                    }, {
                        regex: "rounded-r" + l,
                        properties: ["border-bottom-right-radius", "border-top-right-radius"]
                    }, {
                        regex: "rounded-t" + l,
                        properties: ["border-top-left-radius", "border-top-right-radius"]
                    }, {
                        regex: "rounded" + l,
                        properties: ["border-radius"]
                    }, {
                        regex: "break-all",
                        properties: ["word-break"]
                    }, {
                        regex: "break-words",
                        properties: ["overflow-wrap"]
                    }, {
                        regex: "break-normal",
                        properties: ["overflow-wrap", "word-break"]
                    }, {
                        regex: "whitespace-(normal|nowrap|pre|pre-line|pre-wrap)",
                        properties: ["white-space"]
                    }, {
                        regex: "overflow-(clip|ellipsis)",
                        properties: ["text-overflow"]
                    }, {
                        regex: "truncate",
                        properties: ["overflow", "text-overflow", "white-space"]
                    }, {
                        regex: "overscroll-x-(auto|contain|none)",
                        properties: ["overscroll-behavior-x"]
                    }, {
                        regex: "overscroll-y-(auto|contain|none)",
                        properties: ["overscroll-behavior-y"]
                    }, {
                        regex: "overscroll-(auto|contain|none)",
                        properties: ["-ms-scroll-chaining", "overscroll-behavior"]
                    }, {
                        regex: "overflow-y-(auto|hidden|visible|scroll)",
                        properties: ["overflow-y"]
                    }, {
                        regex: "overflow-x-(auto|hidden|visible|scroll)",
                        properties: ["overflow-x"]
                    }, {
                        regex: "overflow-(auto|hidden|visible|scroll)",
                        properties: ["overflow"]
                    }, {
                        regex: "justify-self-(auto|start|end|center|stretch)",
                        properties: ["justify-self"]
                    }, {
                        regex: "self-(auto|start|end|center|stretch|baseline)",
                        properties: ["align-self"]
                    }, {
                        regex: "place-self-(auto|start|end|center|stretch)",
                        properties: ["place-self"]
                    }, {
                        regex: "divide-opacity-" + o,
                        properties: ["--tw-divide-opacity"]
                    }, {
                        regex: "divide-x-reverse",
                        properties: ["--tw-divide-x-reverse"]
                    }, {
                        regex: "divide-y-reverse",
                        properties: ["--tw-divide-y-reverse"]
                    }, {
                        regex: "divide-y" + i,
                        properties: ["--tw-divide-y-reverse", "border-bottom-width", "border-top-width"]
                    }, {
                        regex: "divide-x" + i,
                        properties: ["--tw-divide-x-reverse", "border-left-width", "border-right-width"]
                    }, {
                        regex: "divide-" + s,
                        properties: ["--tw-divide-opacity", "border-color"]
                    }, {
                        regex: "space-x-reverse",
                        properties: ["--tw-space-x-reverse"]
                    }, {
                        regex: "space-y-reverse",
                        properties: ["--tw-space-y-reverse"]
                    }, {
                        regex: "-?space-y-" + a,
                        properties: ["--tw-space-y-reverse", "margin-bottom", "margin-top"]
                    }, {
                        regex: "-?space-x-" + a,
                        properties: ["--tw-space-x-reverse", "margin-left", "margin-right"]
                    }, {
                        regex: "gap-y-" + a,
                        properties: ["row-gap"]
                    }, {
                        regex: "gap-x-" + a,
                        properties: ["-moz-column-gap", "column-gap"]
                    }, {
                        regex: "gap-" + a,
                        properties: ["gap"]
                    }, {
                        regex: "justify-items-(start|end|center|stretch)",
                        properties: ["justify-items"]
                    }, {
                        regex: "justify-(start|end|center|between|around|evenly)",
                        properties: ["justify-content"]
                    }, {
                        regex: "items-(start|end|center|baseline|stretch)",
                        properties: ["align-items"]
                    }, {
                        regex: "content-(center|start|end|between|around|evenly)",
                        properties: ["align-content"]
                    }, {
                        regex: "place-items-(start|end|center|stretch)",
                        properties: ["place-items"]
                    }, {
                        regex: "place-content-(center|start|end|between|around|evenly|stretch)",
                        properties: ["place-content"]
                    }, {
                        regex: "flex-(wrap|wrap-reverse|nowrap)",
                        properties: ["flex-wrap"]
                    }, {
                        regex: "flex-(row|row-reverse|col|col-reverse)",
                        properties: ["flex-direction"]
                    }, {
                        regex: "grid-rows-" + a,
                        properties: ["grid-template-rows"]
                    }, {
                        regex: "grid-cols-" + s,
                        properties: ["grid-template-columns"]
                    }, {
                        regex: "auto-rows-" + s,
                        properties: ["grid-auto-rows"]
                    }, {
                        regex: "grid-flow-" + s,
                        properties: ["grid-auto-flow"]
                    }, {
                        regex: "auto-cols-" + s,
                        properties: ["grid-auto-columns"]
                    }, {
                        regex: "appearance-none",
                        properties: ["-moz-appearance", "-webkit-appearance", "appearance"]
                    }, {
                        regex: "list-(none|disc|decimal)",
                        properties: ["list-style-type"]
                    }, {
                        regex: "list-(inside|outside)",
                        properties: ["list-style-position"]
                    }, {
                        regex: "resize(-none|-y|-x)?",
                        properties: ["resize"]
                    }, {
                        regex: "select-all",
                        properties: ["-moz-user-select", "-webkit-user-select", "user-select"]
                    }, {
                        regex: "select-(none|text|auto)",
                        properties: ["-moz-user-select", "-ms-user-select", "-webkit-user-select", "user-select"]
                    }, {
                        regex: "cursor-" + s,
                        properties: ["cursor"]
                    }, {
                        regex: "animate-" + s,
                        properties: ["-webkit-animation", "animation"]
                    }, {
                        regex: "scale-y-" + o,
                        properties: ["--tw-scale-y"]
                    }, {
                        regex: "scale-x-" + o,
                        properties: ["--tw-scale-x"]
                    }, {
                        regex: "scale-" + o,
                        properties: ["--tw-scale-x", "--tw-scale-y"]
                    }, {
                        regex: "-?skew-y-" + o,
                        properties: ["--tw-skew-y"]
                    }, {
                        regex: "-?skew-x-" + o,
                        properties: ["--tw-skew-x"]
                    }, {
                        regex: "-?rotate-" + o,
                        properties: ["--tw-rotate"]
                    }, {
                        regex: "-?translate-y-" + a,
                        properties: ["--tw-translate-y"]
                    }, {
                        regex: "-?translate-x-" + a,
                        properties: ["--tw-translate-x"]
                    }, {
                        regex: "transform-none",
                        properties: ["transform"]
                    }, {
                        regex: "transform(-gpu)?",
                        properties: ["--tw-rotate", "--tw-scale-x", "--tw-scale-y", "--tw-skew-x", "--tw-skew-y", "--tw-translate-x", "--tw-translate-y", "transform"]
                    }, {
                        regex: "origin-" + s,
                        properties: ["transform-origin"]
                    }, {
                        regex: "table-(auto|fixed)",
                        properties: ["table-layout"]
                    }, {
                        regex: "flex-grow" + n,
                        properties: ["flex-grow"]
                    }, {
                        regex: "flex-shrink" + n,
                        properties: ["flex-shrink"]
                    }, {
                        regex: "flex-" + s,
                        properties: ["flex"]
                    }, {
                        regex: "max-w-" + s,
                        properties: ["max-width"]
                    }, {
                        regex: "min-w-" + s,
                        properties: ["min-width"]
                    }, {
                        regex: "w-" + s,
                        properties: ["width"]
                    }, {
                        regex: "min-h-" + s,
                        properties: ["min-height"]
                    }, {
                        regex: "max-h-" + s,
                        properties: ["max-height"]
                    }, {
                        regex: "h-" + s,
                        properties: ["height"]
                    }, {
                        regex: "(block|inline-block|inline|flex|inline-flex|table|inline-table|table-caption|table-cell|table-column|table-column-group|table-footer-group|table-header-group|table-row-group|table-row|flow-root|grid|inline-grid|contents|list-item|hidden)",
                        properties: ["display"]
                    }, {
                        regex: "box-(border|content)",
                        properties: ["box-sizing"]
                    }, {
                        regex: "-?ml-" + a,
                        properties: ["margin-left"]
                    }, {
                        regex: "-?mb-" + a,
                        properties: ["margin-bottom"]
                    }, {
                        regex: "-?mr-" + a,
                        properties: ["margin-right"]
                    }, {
                        regex: "-?mt-" + a,
                        properties: ["margin-top"]
                    }, {
                        regex: "-?my-" + a,
                        properties: ["margin-bottom", "margin-top"]
                    }, {
                        regex: "-?mx-" + a,
                        properties: ["margin-left", "margin-right"]
                    }, {
                        regex: "-?m-" + a,
                        properties: ["margin"]
                    }, {
                        regex: "clear-(left|right|both|none)",
                        properties: ["clear"]
                    }, {
                        regex: "float-(right|left|none)",
                        properties: ["float"]
                    }, {
                        regex: "row-end-" + a,
                        properties: ["grid-row-end"]
                    }, {
                        regex: "row-start-" + a,
                        properties: ["grid-row-start"]
                    }, {
                        regex: "row-(auto|span-" + a + ")",
                        properties: ["grid-row"]
                    }, {
                        regex: "col-end-" + a,
                        properties: ["grid-column-end"]
                    }, {
                        regex: "col-start-" + a,
                        properties: ["grid-column-start"]
                    }, {
                        regex: "col-(auto|span-" + a + ")",
                        properties: ["grid-column"]
                    }, {
                        regex: "order-" + a,
                        properties: ["order"]
                    }, {
                        regex: "z-" + a,
                        properties: ["z-index"]
                    }, {
                        regex: "(isolate|isolation-auto)",
                        properties: ["isolation"]
                    }, {
                        regex: "-?left-" + s,
                        properties: ["left"]
                    }, {
                        regex: "-?bottom-" + s,
                        properties: ["bottom"]
                    }, {
                        regex: "-?right-" + s,
                        properties: ["right"]
                    }, {
                        regex: "-?top-" + s,
                        properties: ["top"]
                    }, {
                        regex: "-?inset-y-" + s,
                        properties: ["bottom", "top"]
                    }, {
                        regex: "-?inset-x-" + s,
                        properties: ["left", "right"]
                    }, {
                        regex: "-?inset-" + s,
                        properties: ["bottom", "left", "right", "top"]
                    }, {
                        regex: "(static|fixed|absolute|relative|sticky)",
                        properties: ["position"]
                    }, {
                        regex: "(visible|invisible)",
                        properties: ["visibility"]
                    }, {
                        regex: "pointer-events-(none|auto)",
                        properties: ["pointer-events"]
                    }, {
                        regex: "not-sr-only",
                        properties: ["clip", "height", "margin", "overflow", "padding", "position", "white-space", "width"]
                    }, {
                        regex: "sr-only",
                        properties: ["border-width", "clip", "height", "margin", "overflow", "padding", "position", "white-space", "width"]
                    }].map((function(e) {
                        return {
                            regex: new RegExp("^" + t + e.regex + "$"),
                            properties: e.properties
                        }
                    }))
                },
                a = (0, n.default)(i);
            t.getRules = function(e) {
                return e.ruleLookupCache ? a(e) : i(e)
            }
        },
        7896: function(e) {
            "use strict";

            function t(e, t, r, o) {
                var n, i = null == (n = o) || "number" === typeof n || "boolean" === typeof n ? o : r(o),
                    a = t.get(i);
                return "undefined" === typeof a && (a = e.call(this, o), t.set(i, a)), a
            }

            function r(e, t, r) {
                var o = Array.prototype.slice.call(arguments, 3),
                    n = r(o),
                    i = t.get(n);
                return "undefined" === typeof i && (i = e.apply(this, o), t.set(n, i)), i
            }

            function o(e, t, r, o, n) {
                return r.bind(t, e, o, n)
            }

            function n(e, n) {
                return o(e, this, 1 === e.length ? t : r, n.cache.create(), n.serializer)
            }

            function i() {
                return JSON.stringify(arguments)
            }

            function a() {
                this.cache = Object.create(null)
            }
            a.prototype.has = function(e) {
                return e in this.cache
            }, a.prototype.get = function(e) {
                return this.cache[e]
            }, a.prototype.set = function(e, t) {
                this.cache[e] = t
            };
            var s = {
                create: function() {
                    return new a
                }
            };
            e.exports = function(e, t) {
                var r = t && t.cache ? t.cache : s,
                    o = t && t.serializer ? t.serializer : i;
                return (t && t.strategy ? t.strategy : n)(e, {
                    cache: r,
                    serializer: o
                })
            }, e.exports.strategies = {
                variadic: function(e, t) {
                    return o(e, this, r, t.cache.create(), t.serializer)
                },
                monadic: function(e, r) {
                    return o(e, this, t, r.cache.create(), r.serializer)
                }
            }
        },
        9516: function(e, t, r) {
            "use strict";
            r.d(t, {
                d: function() {
                    return d
                },
                f: function() {
                    return u
                }
            });
            var o = r(7294),
                n = r(9946),
                i = r(2351),
                a = r(6723),
                s = r(3784);
            let l = (0, o.createContext)(null);

            function c() {
                let e = (0, o.useContext)(l);
                if (null === e) {
                    let e = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
                    throw Error.captureStackTrace && Error.captureStackTrace(e, c), e
                }
                return e
            }

            function u() {
                let [e, t] = (0, o.useState)([]);
                return [e.length > 0 ? e.join(" ") : void 0, (0, o.useMemo)((() => function(e) {
                    let r = (0, o.useCallback)((e => (t((t => [...t, e])), () => t((t => {
                            let r = t.slice(),
                                o = r.indexOf(e);
                            return -1 !== o && r.splice(o, 1), r
                        })))), []),
                        n = (0, o.useMemo)((() => ({
                            register: r,
                            slot: e.slot,
                            name: e.name,
                            props: e.props
                        })), [r, e.slot, e.name, e.props]);
                    return o.createElement(l.Provider, {
                        value: n
                    }, e.children)
                }), [t])]
            }
            let d = (0, i.yV)((function(e, t) {
                let r = c(),
                    o = `headlessui-description-${(0,n.M)()}`,
                    l = (0, s.T)(t);
                (0, a.e)((() => r.register(o)), [o, r.register]);
                let u = e,
                    d = {
                        ref: l,
                        ...r.props,
                        id: o
                    };
                return (0, i.sY)({
                    ourProps: d,
                    theirProps: u,
                    slot: r.slot || {},
                    defaultTag: "p",
                    name: r.name || "Description"
                })
            }))
        },
        5726: function(e, t, r) {
            "use strict";
            r.d(t, {
                V: function() {
                    return ue
                }
            });
            var o = r(7294),
                n = r(2984),
                i = r(2351),
                a = r(3784),
                s = r(1363),
                l = r(4103),
                c = r(9946);
            let u = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e => `${e}:not([tabindex='-1'])`)).join(",");
            var d, p, f = ((p = f || {})[p.First = 1] = "First", p[p.Previous = 2] = "Previous", p[p.Next = 4] = "Next", p[p.Last = 8] = "Last", p[p.WrapAround = 16] = "WrapAround", p[p.NoScroll = 32] = "NoScroll", p),
                h = (e => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(h || {}),
                m = ((d = m || {})[d.Previous = -1] = "Previous", d[d.Next = 1] = "Next", d);
            var g = (e => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(g || {});

            function y(e) {
                null == e || e.focus({
                    preventScroll: !0
                })
            }
            let b = ["textarea", "input"].join(",");

            function v(e, t) {
                let r, o = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument,
                    n = Array.isArray(e) ? function(e, t = (e => e)) {
                        return e.slice().sort(((e, r) => {
                            let o = t(e),
                                n = t(r);
                            if (null === o || null === n) return 0;
                            let i = o.compareDocumentPosition(n);
                            return i & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : i & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0
                        }))
                    }(e) : function(e = document.body) {
                        return null == e ? [] : Array.from(e.querySelectorAll(u))
                    }(e),
                    i = o.activeElement,
                    a = (() => {
                        if (5 & t) return 1;
                        if (10 & t) return -1;
                        throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
                    })(),
                    s = (() => {
                        if (1 & t) return 0;
                        if (2 & t) return Math.max(0, n.indexOf(i)) - 1;
                        if (4 & t) return Math.max(0, n.indexOf(i)) + 1;
                        if (8 & t) return n.length - 1;
                        throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
                    })(),
                    l = 32 & t ? {
                        preventScroll: !0
                    } : {},
                    c = 0,
                    d = n.length;
                do {
                    if (c >= d || c + d <= 0) return 0;
                    let e = s + c;
                    if (16 & t) e = (e + d) % d;
                    else {
                        if (e < 0) return 3;
                        if (e >= d) return 1
                    }
                    r = n[e], null == r || r.focus(l), c += a
                } while (r !== o.activeElement);
                return 6 & t && function(e) {
                    var t, r;
                    return null != (r = null == (t = null == e ? void 0 : e.matches) ? void 0 : t.call(e, b)) && r
                }(r) && r.select(), r.hasAttribute("tabindex") || r.setAttribute("tabindex", "0"), 2
            }
            var x = r(3855);

            function w(e, t, r, n) {
                let i = (0, x.E)(r);
                (0, o.useEffect)((() => {
                    function r(e) {
                        i.current(e)
                    }
                    return (e = null != e ? e : window).addEventListener(t, r, n), () => e.removeEventListener(t, r, n)
                }), [e, t, n])
            }
            var E = r(4879);

            function S(e) {
                return "undefined" == typeof window ? null : e instanceof Node ? e.ownerDocument : null != e && e.hasOwnProperty("current") && e.current instanceof Node ? e.current.ownerDocument : document
            }

            function T(...e) {
                return (0, o.useMemo)((() => S(...e)), [...e])
            }
            var O = (e => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(O || {});

            function R(e, t = 30, {
                initialFocus: r,
                containers: n
            } = {}) {
                let i = (0, o.useRef)(null),
                    a = (0, o.useRef)(null),
                    l = (0, E.t)(),
                    c = Boolean(16 & t),
                    u = Boolean(2 & t),
                    d = T(e);
                return (0, o.useEffect)((() => {
                    !c || i.current || (i.current = null == d ? void 0 : d.activeElement)
                }), [c, d]), (0, o.useEffect)((() => {
                    if (c) return () => {
                        y(i.current), i.current = null
                    }
                }), [c]), (0, o.useEffect)((() => {
                    if (!u) return;
                    let t = e.current;
                    if (!t) return;
                    let o = null == d ? void 0 : d.activeElement;
                    if (null != r && r.current) {
                        if ((null == r ? void 0 : r.current) === o) return void(a.current = o)
                    } else if (t.contains(o)) return void(a.current = o);
                    null != r && r.current ? y(r.current) : v(t, f.First) === h.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), a.current = null == d ? void 0 : d.activeElement
                }), [e, r, u, d]), w(null == d ? void 0 : d.defaultView, "keydown", (r => {
                    !(4 & t) || !e.current || r.key === s.R.Tab && (r.preventDefault(), v(e.current, (r.shiftKey ? f.Previous : f.Next) | f.WrapAround) === h.Success && (a.current = null == d ? void 0 : d.activeElement))
                })), w(null == d ? void 0 : d.defaultView, "focus", (r => {
                    if (!(8 & t)) return;
                    let o = new Set(null == n ? void 0 : n.current);
                    if (o.add(e), !o.size) return;
                    let i = a.current;
                    if (!i || !l.current) return;
                    let s = r.target;
                    s && s instanceof HTMLElement ? function(e, t) {
                        var r;
                        for (let o of e)
                            if (null != (r = o.current) && r.contains(t)) return !0;
                        return !1
                    }(o, s) ? (a.current = s, y(s)) : (r.preventDefault(), r.stopPropagation(), y(i)) : y(a.current)
                }), !0), i
            }
            var k = r(6723);
            let N = new Set,
                A = new Map;

            function I(e) {
                e.setAttribute("aria-hidden", "true"), e.inert = !0
            }

            function P(e) {
                let t = A.get(e);
                !t || (null === t["aria-hidden"] ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", t["aria-hidden"]), e.inert = t.inert)
            }

            function C(e, t = !0) {
                (0, k.e)((() => {
                    if (!t || !e.current) return;
                    let r = e.current,
                        o = S(r);
                    if (o) {
                        N.add(r);
                        for (let e of A.keys()) e.contains(r) && (P(e), A.delete(e));
                        return o.querySelectorAll("body > *").forEach((e => {
                            if (e instanceof HTMLElement) {
                                for (let t of N)
                                    if (e.contains(t)) return;
                                1 === N.size && (A.set(e, {
                                    "aria-hidden": e.getAttribute("aria-hidden"),
                                    inert: e.inert
                                }), I(e))
                            }
                        })), () => {
                            if (N.delete(r), N.size > 0) o.querySelectorAll("body > *").forEach((e => {
                                if (e instanceof HTMLElement && !A.has(e)) {
                                    for (let t of N)
                                        if (e.contains(t)) return;
                                    A.set(e, {
                                        "aria-hidden": e.getAttribute("aria-hidden"),
                                        inert: e.inert
                                    }), I(e)
                                }
                            }));
                            else
                                for (let e of A.keys()) P(e), A.delete(e)
                        }
                    }
                }), [t])
            }
            var j = r(3935);
            let D = (0, o.createContext)(!1);

            function L() {
                return (0, o.useContext)(D)
            }

            function Y(e) {
                return o.createElement(D.Provider, {
                    value: e.force
                }, e.children)
            }
            var F = r(2180);
            let U = o.Fragment,
                H = (0, i.yV)((function(e, t) {
                    let r = e,
                        n = (0, o.useRef)(null),
                        s = (0, a.T)((0, a.h)((e => {
                            n.current = e
                        })), t),
                        l = T(n),
                        c = function(e) {
                            let t = L(),
                                r = (0, o.useContext)(z),
                                n = T(e),
                                [i, a] = (0, o.useState)((() => {
                                    if (!t && null !== r || "undefined" == typeof window) return null;
                                    let e = null == n ? void 0 : n.getElementById("headlessui-portal-root");
                                    if (e) return e;
                                    if (null === n) return null;
                                    let o = n.createElement("div");
                                    return o.setAttribute("id", "headlessui-portal-root"), n.body.appendChild(o)
                                }));
                            return (0, o.useEffect)((() => {
                                null !== i && (null != n && n.body.contains(i) || null == n || n.body.appendChild(i))
                            }), [i, n]), (0, o.useEffect)((() => {
                                t || null !== r && a(r.current)
                            }), [r, a, t]), i
                        }(n),
                        [u] = (0, o.useState)((() => {
                            var e;
                            return "undefined" == typeof window ? null : null != (e = null == l ? void 0 : l.createElement("div")) ? e : null
                        })),
                        d = (0, F.H)();
                    return (0, k.e)((() => {
                        if (c && u) return c.appendChild(u), () => {
                            var e;
                            !c || !u || (c.removeChild(u), c.childNodes.length <= 0 && (null == (e = c.parentElement) || e.removeChild(c)))
                        }
                    }), [c, u]), d && c && u ? (0, j.createPortal)((0, i.sY)({
                        ourProps: {
                            ref: s
                        },
                        theirProps: r,
                        defaultTag: U,
                        name: "Portal"
                    }), u) : null
                })),
                M = o.Fragment,
                z = (0, o.createContext)(null),
                V = (0, i.yV)((function(e, t) {
                    let {
                        target: r,
                        ...n
                    } = e, s = {
                        ref: (0, a.T)(t)
                    };
                    return o.createElement(z.Provider, {
                        value: r
                    }, (0, i.sY)({
                        ourProps: s,
                        theirProps: n,
                        defaultTag: M,
                        name: "Popover.Group"
                    }))
                })),
                B = Object.assign(H, {
                    Group: V
                });
            var W = r(9516),
                G = r(6567);
            let _ = (0, o.createContext)((() => {}));
            _.displayName = "StackContext";
            var q = (e => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(q || {});

            function $({
                children: e,
                onUpdate: t,
                type: r,
                element: n
            }) {
                let i = (0, o.useContext)(_),
                    a = (0, o.useCallback)(((...e) => {
                        null == t || t(...e), i(...e)
                    }), [i, t]);
                return (0, k.e)((() => (a(0, r, n), () => a(1, r, n))), [a, r, n]), o.createElement(_.Provider, {
                    value: a
                }, e)
            }
            var Z = r(1021);

            function X(e, t, r) {
                let n = (0, x.E)(t);
                (0, o.useEffect)((() => {
                    function t(e) {
                        n.current(e)
                    }
                    return window.addEventListener(e, t, r), () => window.removeEventListener(e, t, r)
                }), [e, r])
            }
            var K = (e => (e[e.None = 1] = "None", e[e.IgnoreScrollbars = 2] = "IgnoreScrollbars", e))(K || {});
            var J = (e => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(J || {}),
                Q = (e => (e[e.SetTitleId = 0] = "SetTitleId", e))(Q || {});
            let ee = {
                    0: (e, t) => e.titleId === t.id ? e : { ...e,
                        titleId: t.id
                    }
                },
                te = (0, o.createContext)(null);

            function re(e) {
                let t = (0, o.useContext)(te);
                if (null === t) {
                    let t = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
                    throw Error.captureStackTrace && Error.captureStackTrace(t, re), t
                }
                return t
            }

            function oe(e, t) {
                return (0, n.E)(t.type, ee, e, t)
            }
            te.displayName = "DialogContext";
            let ne = i.AN.RenderStrategy | i.AN.Static,
                ie = (0, i.yV)((function(e, t) {
                    let {
                        open: r,
                        onClose: l,
                        initialFocus: u,
                        __demoMode: d = !1,
                        ...p
                    } = e, [f, h] = (0, o.useState)(0), m = (0, G.oJ)();
                    void 0 === r && null !== m && (r = (0, n.E)(m, {
                        [G.ZM.Open]: !0,
                        [G.ZM.Closed]: !1
                    }));
                    let g = (0, o.useRef)(new Set),
                        y = (0, o.useRef)(null),
                        b = (0, a.T)(y, t),
                        v = T(y),
                        E = e.hasOwnProperty("open") || null !== m,
                        k = e.hasOwnProperty("onClose");
                    if (!E && !k) throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
                    if (!E) throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
                    if (!k) throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
                    if ("boolean" != typeof r) throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${r}`);
                    if ("function" != typeof l) throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${l}`);
                    let N = r ? 0 : 1,
                        [A, I] = (0, o.useReducer)(oe, {
                            titleId: null,
                            descriptionId: null,
                            panelRef: (0, o.createRef)()
                        }),
                        P = (0, o.useCallback)((() => l(!1)), [l]),
                        j = (0, o.useCallback)((e => I({
                            type: 0,
                            id: e
                        })), [I]),
                        D = !!(0, F.H)() && (!d && 0 === N),
                        L = f > 1,
                        U = null !== (0, o.useContext)(te),
                        H = R(y, D ? (0, n.E)(L ? "parent" : "leaf", {
                            parent: O.RestoreFocus,
                            leaf: O.All & ~O.FocusLock
                        }) : O.None, {
                            initialFocus: u,
                            containers: g
                        });
                    C(y, !!L && D),
                        function(e, t, r = 1) {
                            let n = (0, o.useRef)(!1),
                                i = (0, x.E)((o => {
                                    if (n.current) return;
                                    n.current = !0, (0, Z.Y)((() => {
                                        n.current = !1
                                    }));
                                    let i = function e(t) {
                                            return "function" == typeof t ? e(t()) : Array.isArray(t) || t instanceof Set ? t : [t]
                                        }(e),
                                        a = o.target;
                                    if (a.ownerDocument.documentElement.contains(a)) {
                                        if (2 === (2 & r)) {
                                            let e = 20,
                                                t = a.ownerDocument.documentElement;
                                            if (o.clientX > t.clientWidth - e || o.clientX < e || o.clientY > t.clientHeight - e || o.clientY < e) return
                                        }
                                        for (let e of i) {
                                            if (null === e) continue;
                                            let t = e instanceof HTMLElement ? e : e.current;
                                            if (null != t && t.contains(a)) return
                                        }
                                        return t(o, a)
                                    }
                                }));
                            X("pointerdown", ((...e) => i.current(...e))), X("mousedown", ((...e) => i.current(...e)))
                        }((() => {
                            var e, t;
                            return [...Array.from(null != (e = null == v ? void 0 : v.querySelectorAll("body > *")) ? e : []).filter((e => !(!(e instanceof HTMLElement) || e.contains(H.current) || A.panelRef.current && e.contains(A.panelRef.current)))), null != (t = A.panelRef.current) ? t : y.current]
                        }), (() => {
                            0 === N && (L || P())
                        }), K.IgnoreScrollbars), w(null == v ? void 0 : v.defaultView, "keydown", (e => {
                            e.key === s.R.Escape && 0 === N && (L || (e.preventDefault(), e.stopPropagation(), P()))
                        })), (0, o.useEffect)((() => {
                            var e;
                            if (0 !== N || U) return;
                            let t = S(y);
                            if (!t) return;
                            let r = t.documentElement,
                                o = null != (e = t.defaultView) ? e : window,
                                n = r.style.overflow,
                                i = r.style.paddingRight,
                                a = o.innerWidth - r.clientWidth;
                            return r.style.overflow = "hidden", r.style.paddingRight = `${a}px`, () => {
                                r.style.overflow = n, r.style.paddingRight = i
                            }
                        }), [N, U]), (0, o.useEffect)((() => {
                            if (0 !== N || !y.current) return;
                            let e = new IntersectionObserver((e => {
                                for (let t of e) 0 === t.boundingClientRect.x && 0 === t.boundingClientRect.y && 0 === t.boundingClientRect.width && 0 === t.boundingClientRect.height && P()
                            }));
                            return e.observe(y.current), () => e.disconnect()
                        }), [N, y, P]);
                    let [M, z] = (0, W.f)(), V = `headlessui-dialog-${(0,c.M)()}`, _ = (0, o.useMemo)((() => [{
                        dialogState: N,
                        close: P,
                        setTitleId: j
                    }, A]), [N, A, P, j]), J = (0, o.useMemo)((() => ({
                        open: 0 === N
                    })), [N]), Q = {
                        ref: b,
                        id: V,
                        role: "dialog",
                        "aria-modal": 0 === N || void 0,
                        "aria-labelledby": A.titleId,
                        "aria-describedby": M,
                        onClick(e) {
                            e.stopPropagation()
                        }
                    };
                    return o.createElement($, {
                        type: "Dialog",
                        element: y,
                        onUpdate: (0, o.useCallback)(((e, t, r) => {
                            "Dialog" === t && (0, n.E)(e, {
                                [q.Add]() {
                                    g.current.add(r), h((e => e + 1))
                                },
                                [q.Remove]() {
                                    g.current.add(r), h((e => e - 1))
                                }
                            })
                        }), [])
                    }, o.createElement(Y, {
                        force: !0
                    }, o.createElement(B, null, o.createElement(te.Provider, {
                        value: _
                    }, o.createElement(B.Group, {
                        target: y
                    }, o.createElement(Y, {
                        force: !1
                    }, o.createElement(z, {
                        slot: J,
                        name: "Dialog.Description"
                    }, (0, i.sY)({
                        ourProps: Q,
                        theirProps: p,
                        slot: J,
                        defaultTag: "div",
                        features: ne,
                        visible: 0 === N,
                        name: "Dialog"
                    }))))))))
                })),
                ae = (0, i.yV)((function(e, t) {
                    let [{
                        dialogState: r,
                        close: n
                    }] = re("Dialog.Overlay"), s = (0, a.T)(t), u = `headlessui-dialog-overlay-${(0,c.M)()}`, d = (0, o.useCallback)((e => {
                        if (e.target === e.currentTarget) {
                            if ((0, l.P)(e.currentTarget)) return e.preventDefault();
                            e.preventDefault(), e.stopPropagation(), n()
                        }
                    }), [n]), p = (0, o.useMemo)((() => ({
                        open: 0 === r
                    })), [r]);
                    return (0, i.sY)({
                        ourProps: {
                            ref: s,
                            id: u,
                            "aria-hidden": !0,
                            onClick: d
                        },
                        theirProps: e,
                        slot: p,
                        defaultTag: "div",
                        name: "Dialog.Overlay"
                    })
                })),
                se = (0, i.yV)((function(e, t) {
                    let [{
                        dialogState: r
                    }, n] = re("Dialog.Backdrop"), s = (0, a.T)(t), l = `headlessui-dialog-backdrop-${(0,c.M)()}`;
                    (0, o.useEffect)((() => {
                        if (null === n.panelRef.current) throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")
                    }), [n.panelRef]);
                    let u = (0, o.useMemo)((() => ({
                        open: 0 === r
                    })), [r]);
                    return o.createElement(Y, {
                        force: !0
                    }, o.createElement(B, null, (0, i.sY)({
                        ourProps: {
                            ref: s,
                            id: l,
                            "aria-hidden": !0
                        },
                        theirProps: e,
                        slot: u,
                        defaultTag: "div",
                        name: "Dialog.Backdrop"
                    })))
                })),
                le = (0, i.yV)((function(e, t) {
                    let [{
                        dialogState: r
                    }, n] = re("Dialog.Panel"), s = (0, a.T)(t, n.panelRef), l = `headlessui-dialog-panel-${(0,c.M)()}`, u = (0, o.useMemo)((() => ({
                        open: 0 === r
                    })), [r]);
                    return (0, i.sY)({
                        ourProps: {
                            ref: s,
                            id: l
                        },
                        theirProps: e,
                        slot: u,
                        defaultTag: "div",
                        name: "Dialog.Panel"
                    })
                })),
                ce = (0, i.yV)((function(e, t) {
                    let [{
                        dialogState: r,
                        setTitleId: n
                    }] = re("Dialog.Title"), s = `headlessui-dialog-title-${(0,c.M)()}`, l = (0, a.T)(t);
                    (0, o.useEffect)((() => (n(s), () => n(null))), [s, n]);
                    let u = (0, o.useMemo)((() => ({
                        open: 0 === r
                    })), [r]);
                    return (0, i.sY)({
                        ourProps: {
                            ref: l,
                            id: s
                        },
                        theirProps: e,
                        slot: u,
                        defaultTag: "h2",
                        name: "Dialog.Title"
                    })
                })),
                ue = Object.assign(ie, {
                    Backdrop: se,
                    Panel: le,
                    Overlay: ae,
                    Title: ce,
                    Description: W.d
                })
        },
        1363: function(e, t, r) {
            "use strict";
            r.d(t, {
                R: function() {
                    return n
                }
            });
            var o, n = ((o = n || {}).Space = " ", o.Enter = "Enter", o.Escape = "Escape", o.Backspace = "Backspace", o.Delete = "Delete", o.ArrowLeft = "ArrowLeft", o.ArrowUp = "ArrowUp", o.ArrowRight = "ArrowRight", o.ArrowDown = "ArrowDown", o.Home = "Home", o.End = "End", o.PageUp = "PageUp", o.PageDown = "PageDown", o.Tab = "Tab", o)
        },
        3587: function(e, t, r) {
            "use strict";
            r.d(t, {
                u: function() {
                    return D
                }
            });
            var o = r(7294),
                n = r(2351),
                i = r(6567),
                a = r(2984),
                s = r(1021),
                l = r(9946),
                c = r(4879),
                u = r(6723),
                d = r(3855),
                p = r(2180),
                f = r(3784);

            function h() {
                let e = [],
                    t = [],
                    r = {
                        enqueue(e) {
                            t.push(e)
                        },
                        addEventListener: (e, t, o, n) => (e.addEventListener(t, o, n), r.add((() => e.removeEventListener(t, o, n)))),
                        requestAnimationFrame(...e) {
                            let t = requestAnimationFrame(...e);
                            return r.add((() => cancelAnimationFrame(t)))
                        },
                        nextFrame: (...e) => r.requestAnimationFrame((() => r.requestAnimationFrame(...e))),
                        setTimeout(...e) {
                            let t = setTimeout(...e);
                            return r.add((() => clearTimeout(t)))
                        },
                        add: t => (e.push(t), () => {
                            let r = e.indexOf(t);
                            if (r >= 0) {
                                let [t] = e.splice(r, 1);
                                t()
                            }
                        }),
                        dispose() {
                            for (let t of e.splice(0)) t()
                        },
                        async workQueue() {
                            for (let e of t.splice(0)) await e()
                        }
                    };
                return r
            }

            function m(e, ...t) {
                e && t.length > 0 && e.classList.add(...t)
            }

            function g(e, ...t) {
                e && t.length > 0 && e.classList.remove(...t)
            }
            var y, b = ((y = b || {}).Ended = "ended", y.Cancelled = "cancelled", y);

            function v(e, t, r, o) {
                let n = r ? "enter" : "leave",
                    i = h(),
                    s = void 0 !== o ? function(e) {
                        let t = {
                            called: !1
                        };
                        return (...r) => {
                            if (!t.called) return t.called = !0, e(...r)
                        }
                    }(o) : () => {},
                    l = (0, a.E)(n, {
                        enter: () => t.enter,
                        leave: () => t.leave
                    }),
                    c = (0, a.E)(n, {
                        enter: () => t.enterTo,
                        leave: () => t.leaveTo
                    }),
                    u = (0, a.E)(n, {
                        enter: () => t.enterFrom,
                        leave: () => t.leaveFrom
                    });
                return g(e, ...t.enter, ...t.enterTo, ...t.enterFrom, ...t.leave, ...t.leaveFrom, ...t.leaveTo, ...t.entered), m(e, ...l, ...u), i.nextFrame((() => {
                    g(e, ...u), m(e, ...c),
                        function(e, t) {
                            let r = h();
                            if (!e) return r.dispose;
                            let {
                                transitionDuration: o,
                                transitionDelay: n
                            } = getComputedStyle(e), [i, a] = [o, n].map((e => {
                                let [t = 0] = e.split(",").filter(Boolean).map((e => e.includes("ms") ? parseFloat(e) : 1e3 * parseFloat(e))).sort(((e, t) => t - e));
                                return t
                            }));
                            if (i + a !== 0) {
                                let o = [];
                                o.push(r.addEventListener(e, "transitionrun", (() => {
                                    o.splice(0).forEach((e => e())), o.push(r.addEventListener(e, "transitionend", (() => {
                                        t("ended"), o.splice(0).forEach((e => e()))
                                    }), {
                                        once: !0
                                    }), r.addEventListener(e, "transitioncancel", (() => {
                                        t("cancelled"), o.splice(0).forEach((e => e()))
                                    }), {
                                        once: !0
                                    }))
                                }), {
                                    once: !0
                                }))
                            } else t("ended");
                            r.add((() => t("cancelled"))), r.dispose
                        }(e, (r => ("ended" === r && (g(e, ...l), m(e, ...t.entered)), s(r))))
                })), i.dispose
            }

            function x({
                container: e,
                direction: t,
                classes: r,
                events: n,
                onStart: i,
                onStop: s
            }) {
                let l = (0, c.t)(),
                    p = function() {
                        let [e] = (0, o.useState)(h);
                        return (0, o.useEffect)((() => () => e.dispose()), [e]), e
                    }(),
                    f = (0, d.E)(t),
                    m = (0, d.E)((() => (0, a.E)(f.current, {
                        enter: () => n.current.beforeEnter(),
                        leave: () => n.current.beforeLeave(),
                        idle: () => {}
                    }))),
                    g = (0, d.E)((() => (0, a.E)(f.current, {
                        enter: () => n.current.afterEnter(),
                        leave: () => n.current.afterLeave(),
                        idle: () => {}
                    })));
                (0, u.e)((() => {
                    let t = h();
                    p.add(t.dispose);
                    let o = e.current;
                    if (o && "idle" !== f.current && l.current) return t.dispose(), m.current(), i.current(f.current), t.add(v(o, r.current, "enter" === f.current, (e => {
                        t.dispose(), (0, a.E)(e, {
                            [b.Ended]() {
                                g.current(), s.current(f.current)
                            },
                            [b.Cancelled]: () => {}
                        })
                    }))), t.dispose
                }), [t])
            }

            function w(e = "") {
                return e.split(" ").filter((e => e.trim().length > 1))
            }
            let E = (0, o.createContext)(null);
            E.displayName = "TransitionContext";
            var S, T = ((S = T || {}).Visible = "visible", S.Hidden = "hidden", S);
            let O = (0, o.createContext)(null);

            function R(e) {
                return "children" in e ? R(e.children) : e.current.filter((({
                    state: e
                }) => "visible" === e)).length > 0
            }

            function k(e) {
                let t = (0, d.E)(e),
                    r = (0, o.useRef)([]),
                    i = (0, c.t)(),
                    l = (0, d.E)(((e, o = n.l4.Hidden) => {
                        let l = r.current.findIndex((({
                            id: t
                        }) => t === e)); - 1 !== l && ((0, a.E)(o, {
                            [n.l4.Unmount]() {
                                r.current.splice(l, 1)
                            },
                            [n.l4.Hidden]() {
                                r.current[l].state = "hidden"
                            }
                        }), (0, s.Y)((() => {
                            var e;
                            !R(r) && i.current && (null == (e = t.current) || e.call(t))
                        })))
                    })),
                    u = (0, d.E)((e => {
                        let t = r.current.find((({
                            id: t
                        }) => t === e));
                        return t ? "visible" !== t.state && (t.state = "visible") : r.current.push({
                            id: e,
                            state: "visible"
                        }), () => l.current(e, n.l4.Unmount)
                    }));
                return (0, o.useMemo)((() => ({
                    children: r,
                    register: u,
                    unregister: l
                })), [u, l, r])
            }

            function N() {}
            O.displayName = "NestingContext";
            let A = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];

            function I(e) {
                var t;
                let r = {};
                for (let o of A) r[o] = null != (t = e[o]) ? t : N;
                return r
            }
            let P = n.AN.RenderStrategy,
                C = (0, n.yV)((function(e, t) {
                    let {
                        beforeEnter: r,
                        afterEnter: s,
                        beforeLeave: c,
                        afterLeave: u,
                        enter: h,
                        enterFrom: m,
                        enterTo: g,
                        entered: y,
                        leave: b,
                        leaveFrom: v,
                        leaveTo: S,
                        ...T
                    } = e, N = (0, o.useRef)(null), A = (0, f.T)(N, t), [C, j] = (0, o.useState)("visible"), D = T.unmount ? n.l4.Unmount : n.l4.Hidden, {
                        show: L,
                        appear: Y,
                        initial: F
                    } = function() {
                        let e = (0, o.useContext)(E);
                        if (null === e) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
                        return e
                    }(), {
                        register: U,
                        unregister: H
                    } = function() {
                        let e = (0, o.useContext)(O);
                        if (null === e) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
                        return e
                    }(), M = (0, o.useRef)(null), z = (0, l.M)(), V = (0, o.useRef)(!1), B = k((() => {
                        V.current || (j("hidden"), H.current(z))
                    }));
                    (0, o.useEffect)((() => {
                        if (z) return U.current(z)
                    }), [U, z]), (0, o.useEffect)((() => {
                        if (D === n.l4.Hidden && z) {
                            if (L && "visible" !== C) return void j("visible");
                            (0, a.E)(C, {
                                hidden: () => H.current(z),
                                visible: () => U.current(z)
                            })
                        }
                    }), [C, z, U, H, L, D]);
                    let W = (0, d.E)({
                            enter: w(h),
                            enterFrom: w(m),
                            enterTo: w(g),
                            entered: w(y),
                            leave: w(b),
                            leaveFrom: w(v),
                            leaveTo: w(S)
                        }),
                        G = function(e) {
                            let t = (0, o.useRef)(I(e));
                            return (0, o.useEffect)((() => {
                                t.current = I(e)
                            }), [e]), t
                        }({
                            beforeEnter: r,
                            afterEnter: s,
                            beforeLeave: c,
                            afterLeave: u
                        }),
                        _ = (0, p.H)();
                    (0, o.useEffect)((() => {
                        if (_ && "visible" === C && null === N.current) throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")
                    }), [N, C, _]);
                    let q = F && !Y,
                        $ = !_ || q || M.current === L ? "idle" : L ? "enter" : "leave";
                    x({
                        container: N,
                        classes: W,
                        events: G,
                        direction: $,
                        onStart: (0, d.E)((() => {})),
                        onStop: (0, d.E)((e => {
                            "leave" === e && !R(B) && (j("hidden"), H.current(z))
                        }))
                    }), (0, o.useEffect)((() => {
                        !q || (D === n.l4.Hidden ? M.current = null : M.current = L)
                    }), [L, q, C]);
                    let Z = T,
                        X = {
                            ref: A
                        };
                    return o.createElement(O.Provider, {
                        value: B
                    }, o.createElement(i.up, {
                        value: (0, a.E)(C, {
                            visible: i.ZM.Open,
                            hidden: i.ZM.Closed
                        })
                    }, (0, n.sY)({
                        ourProps: X,
                        theirProps: Z,
                        defaultTag: "div",
                        features: P,
                        visible: "visible" === C,
                        name: "Transition.Child"
                    })))
                })),
                j = (0, n.yV)((function(e, t) {
                    let {
                        show: r,
                        appear: s = !1,
                        unmount: l,
                        ...c
                    } = e, d = (0, f.T)(t);
                    (0, p.H)();
                    let h = (0, i.oJ)();
                    if (void 0 === r && null !== h && (r = (0, a.E)(h, {
                            [i.ZM.Open]: !0,
                            [i.ZM.Closed]: !1
                        })), ![!0, !1].includes(r)) throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
                    let [m, g] = (0, o.useState)(r ? "visible" : "hidden"), y = k((() => {
                        g("hidden")
                    })), [b, v] = (0, o.useState)(!0), x = (0, o.useRef)([r]);
                    (0, u.e)((() => {
                        !1 !== b && x.current[x.current.length - 1] !== r && (x.current.push(r), v(!1))
                    }), [x, r]);
                    let w = (0, o.useMemo)((() => ({
                        show: r,
                        appear: s,
                        initial: b
                    })), [r, s, b]);
                    (0, o.useEffect)((() => {
                        r ? g("visible") : R(y) || g("hidden")
                    }), [r, y]);
                    let S = {
                        unmount: l
                    };
                    return o.createElement(O.Provider, {
                        value: y
                    }, o.createElement(E.Provider, {
                        value: w
                    }, (0, n.sY)({
                        ourProps: { ...S,
                            as: o.Fragment,
                            children: o.createElement(C, {
                                ref: d,
                                ...S,
                                ...c
                            })
                        },
                        theirProps: {},
                        defaultTag: o.Fragment,
                        features: P,
                        visible: "visible" === m,
                        name: "Transition"
                    })))
                }));
            let D = Object.assign(j, {
                Child: function(e) {
                    let t = null !== (0, o.useContext)(E),
                        r = null !== (0, i.oJ)();
                    return o.createElement(o.Fragment, null, !t && r ? o.createElement(j, { ...e
                    }) : o.createElement(C, { ...e
                    }))
                },
                Root: j
            })
        },
        9946: function(e, t, r) {
            "use strict";
            r.d(t, {
                M: function() {
                    return c
                }
            });
            var o, n = r(7294),
                i = r(6723),
                a = r(2180);
            let s = 0;

            function l() {
                return ++s
            }
            let c = null != (o = n.useId) ? o : function() {
                let e = (0, a.H)(),
                    [t, r] = n.useState(e ? l : null);
                return (0, i.e)((() => {
                    null === t && r(l())
                }), [t]), null != t ? "" + t : void 0
            }
        },
        4879: function(e, t, r) {
            "use strict";
            r.d(t, {
                t: function() {
                    return i
                }
            });
            var o = r(7294),
                n = r(6723);

            function i() {
                let e = (0, o.useRef)(!1);
                return (0, n.e)((() => (e.current = !0, () => {
                    e.current = !1
                })), []), e
            }
        },
        6723: function(e, t, r) {
            "use strict";
            r.d(t, {
                e: function() {
                    return n
                }
            });
            var o = r(7294);
            const n = "undefined" != typeof window ? o.useLayoutEffect : o.useEffect
        },
        3855: function(e, t, r) {
            "use strict";
            r.d(t, {
                E: function() {
                    return i
                }
            });
            var o = r(7294),
                n = r(6723);

            function i(e) {
                let t = (0, o.useRef)(e);
                return (0, n.e)((() => {
                    t.current = e
                }), [e]), t
            }
        },
        2180: function(e, t, r) {
            "use strict";
            r.d(t, {
                H: function() {
                    return i
                }
            });
            var o = r(7294);
            let n = {
                serverHandoffComplete: !1
            };

            function i() {
                let [e, t] = (0, o.useState)(n.serverHandoffComplete);
                return (0, o.useEffect)((() => {
                    !0 !== e && t(!0)
                }), [e]), (0, o.useEffect)((() => {
                    !1 === n.serverHandoffComplete && (n.serverHandoffComplete = !0)
                }), []), e
            }
        },
        3784: function(e, t, r) {
            "use strict";
            r.d(t, {
                h: function() {
                    return i
                },
                T: function() {
                    return a
                }
            });
            var o = r(7294);
            let n = Symbol();

            function i(e, t = !0) {
                return Object.assign(e, {
                    [n]: t
                })
            }

            function a(...e) {
                let t = (0, o.useRef)(e);
                (0, o.useEffect)((() => {
                    t.current = e
                }), [e]);
                let r = (0, o.useCallback)((e => {
                    for (let r of t.current) null != r && ("function" == typeof r ? r(e) : r.current = e)
                }), [t]);
                return e.every((e => null == e || (null == e ? void 0 : e[n]))) ? void 0 : r
            }
        },
        6567: function(e, t, r) {
            "use strict";
            r.d(t, {
                up: function() {
                    return l
                },
                ZM: function() {
                    return a
                },
                oJ: function() {
                    return s
                }
            });
            var o = r(7294);
            let n = (0, o.createContext)(null);
            n.displayName = "OpenClosedContext";
            var i, a = ((i = a || {})[i.Open = 0] = "Open", i[i.Closed = 1] = "Closed", i);

            function s() {
                return (0, o.useContext)(n)
            }

            function l({
                value: e,
                children: t
            }) {
                return o.createElement(n.Provider, {
                    value: e
                }, t)
            }
        },
        4103: function(e, t, r) {
            "use strict";

            function o(e) {
                let t = e.parentElement,
                    r = null;
                for (; t && !(t instanceof HTMLFieldSetElement);) t instanceof HTMLLegendElement && (r = t), t = t.parentElement;
                let o = "" === (null == t ? void 0 : t.getAttribute("disabled"));
                return (!o || ! function(e) {
                    if (!e) return !1;
                    let t = e.previousElementSibling;
                    for (; null !== t;) {
                        if (t instanceof HTMLLegendElement) return !1;
                        t = t.previousElementSibling
                    }
                    return !0
                }(r)) && o
            }
            r.d(t, {
                P: function() {
                    return o
                }
            })
        },
        2984: function(e, t, r) {
            "use strict";

            function o(e, t, ...r) {
                if (e in t) {
                    let o = t[e];
                    return "function" == typeof o ? o(...r) : o
                }
                let n = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((e=>`"${e}"`)).join(", ")}.`);
                throw Error.captureStackTrace && Error.captureStackTrace(n, o), n
            }
            r.d(t, {
                E: function() {
                    return o
                }
            })
        },
        1021: function(e, t, r) {
            "use strict";

            function o(e) {
                "function" == typeof queueMicrotask ? queueMicrotask(e) : Promise.resolve().then(e).catch((e => setTimeout((() => {
                    throw e
                }))))
            }
            r.d(t, {
                Y: function() {
                    return o
                }
            })
        },
        2351: function(e, t, r) {
            "use strict";
            r.d(t, {
                AN: function() {
                    return s
                },
                l4: function() {
                    return l
                },
                oA: function() {
                    return f
                },
                yV: function() {
                    return p
                },
                sY: function() {
                    return c
                }
            });
            var o, n, i = r(7294),
                a = r(2984),
                s = ((n = s || {})[n.None = 0] = "None", n[n.RenderStrategy = 1] = "RenderStrategy", n[n.Static = 2] = "Static", n),
                l = ((o = l || {})[o.Unmount = 0] = "Unmount", o[o.Hidden = 1] = "Hidden", o);

            function c({
                ourProps: e,
                theirProps: t,
                slot: r,
                defaultTag: o,
                features: n,
                visible: i = !0,
                name: s
            }) {
                let l = d(t, e);
                if (i) return u(l, r, o, s);
                let c = null != n ? n : 0;
                if (2 & c) {
                    let {
                        static: e = !1,
                        ...t
                    } = l;
                    if (e) return u(t, r, o, s)
                }
                if (1 & c) {
                    let {
                        unmount: e = !0,
                        ...t
                    } = l;
                    return (0, a.E)(e ? 0 : 1, {
                        0: () => null,
                        1: () => u({ ...t,
                            hidden: !0,
                            style: {
                                display: "none"
                            }
                        }, r, o, s)
                    })
                }
                return u(l, r, o, s)
            }

            function u(e, t = {}, r, o) {
                let {
                    as: n = r,
                    children: a,
                    refName: s = "ref",
                    ...l
                } = h(e, ["unmount", "static"]), c = void 0 !== e.ref ? {
                    [s]: e.ref
                } : {}, u = "function" == typeof a ? a(t) : a;
                if (l.className && "function" == typeof l.className && (l.className = l.className(t)), n === i.Fragment && Object.keys(f(l)).length > 0) {
                    if (!(0, i.isValidElement)(u) || Array.isArray(u) && u.length > 1) throw new Error(['Passing props on "Fragment"!', "", `The current component <${o} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(l).map((e => `  - ${e}`)).join("\n"), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((e => `  - ${e}`)).join("\n")].join("\n"));
                    return (0, i.cloneElement)(u, Object.assign({}, d(u.props, f(h(l, ["ref"]))), c))
                }
                return (0, i.createElement)(n, Object.assign({}, h(l, ["ref"]), n !== i.Fragment && c), u)
            }

            function d(...e) {
                if (0 === e.length) return {};
                if (1 === e.length) return e[0];
                let t = {},
                    r = {};
                for (let o of e)
                    for (let e in o) e.startsWith("on") && "function" == typeof o[e] ? (null != r[e] || (r[e] = []), r[e].push(o[e])) : t[e] = o[e];
                if (t.disabled || t["aria-disabled"]) return Object.assign(t, Object.fromEntries(Object.keys(r).map((e => [e, void 0]))));
                for (let o in r) Object.assign(t, {
                    [o](e) {
                        let t = r[o];
                        for (let r of t) {
                            if (e.defaultPrevented) return;
                            r(e)
                        }
                    }
                });
                return t
            }

            function p(e) {
                var t;
                return Object.assign((0, i.forwardRef)(e), {
                    displayName: null != (t = e.displayName) ? t : e.name
                })
            }

            function f(e) {
                let t = Object.assign({}, e);
                for (let r in t) void 0 === t[r] && delete t[r];
                return t
            }

            function h(e, t = []) {
                let r = Object.assign({}, e);
                for (let o of t) o in r && delete r[o];
                return r
            }
        }
    },
    function(e) {
        var t = function(t) {
            return e(e.s = t)
        };
        e.O(0, [774, 179], (function() {
            return t(6363), t(880)
        }));
        var r = e.O();
        _N_E = r
    }
]);