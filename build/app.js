(function(FuseBox){FuseBox.$fuse$=FuseBox;
var __process_env__ = {"NODE_ENV":"development"};
FuseBox.pkg("default", {}, function(___scope___){
___scope___.file("index.jsx", function(exports, require, module, __filename, __dirname){
/* fuse:injection: */ var process = require("process");
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('process.env.NODE_ENV:', process.env.NODE_ENV);
const React = require("react");
const ReactDOM = require("react-dom");
const App_1 = require("./App");
const serviceWorker = require("./serviceWorker");
require("normalize.css/normalize.css");
require("@blueprintjs/icons/lib/css/blueprint-icons.css");
require("@blueprintjs/core/lib/css/blueprint.css");
require("./stylesheets/global.css");
require("./stylesheets/homePage.css");
require("./stylesheets/servicesPage.css");
require("./stylesheets/workshopPage.css");
require("./stylesheets/ressourcesPage.css");
require("./stylesheets/aboutPage.css");
ReactDOM.render(React.createElement(App_1.default, null), document.getElementById('root'));
serviceWorker.unregister();
//# sourceMappingURL=index.js.map
});
___scope___.file("App.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Header_1 = require("./components/Header");
const Main_1 = require("./components/Main");
const Footer_1 = require("./components/Footer");
class App extends React.Component {
    render() {
        return (React.createElement("div", { className: 'wrapper' },
            React.createElement(Header_1.default, null),
            React.createElement(Main_1.default, null),
            React.createElement(Footer_1.default, null)));
    }
}
exports.default = App;
//# sourceMappingURL=App.js.map
});
___scope___.file("components/Header.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const fuse_react_1 = require("fuse-react");
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.activate = this.activate.bind(this);
        this.state = {
            activeItem: 'HOME'
        };
    }
    componentDidMount() {
        let page = window.location.pathname;
        if (page === '/')
            this.setState({ activeItem: 'HOME' });
        else if (page === '/services')
            this.setState({ activeItem: 'SERVICES' });
        else if (page === '/workshop-preregistration')
            this.setState({ activeItem: 'WORKSHOPS' });
        else if (page === '/ressources')
            this.setState({ activeItem: 'RESSOURCES' });
        else if (page === '/about')
            this.setState({ activeItem: 'ABOUT' });
    }
    activate(item) {
        this.setState({ activeItem: item });
    }
    render() {
        return (React.createElement("nav", { className: "nav" },
            React.createElement("ul", null,
                React.createElement("li", null,
                    React.createElement(fuse_react_1.Link, { className: this.state.activeItem === 'HOME' ? 'active' : '', onClick: this.activate.bind(this, 'HOME'), to: "/" }, "HOME")),
                React.createElement("li", null,
                    React.createElement(fuse_react_1.Link, { className: this.state.activeItem === 'SERVICES' ? 'active' : '', onClick: this.activate.bind(this, 'SERVICES'), to: "/services" }, "SERVICES")),
                React.createElement("li", null,
                    React.createElement(fuse_react_1.Link, { className: this.state.activeItem === 'WORKSHOPS' ? 'active' : '', onClick: this.activate.bind(this, 'WORKSHOPS'), to: "/workshop-preregistration" }, "WORKSHOPS")),
                React.createElement("li", null,
                    React.createElement(fuse_react_1.Link, { className: this.state.activeItem === 'RESSOURCES' ? 'active' : '', onClick: this.activate.bind(this, 'RESSOURCES'), to: "/ressources" }, "RESSOURCES")),
                React.createElement("li", null,
                    React.createElement(fuse_react_1.Link, { className: this.state.activeItem === 'ABOUT' ? 'active' : '', onClick: this.activate.bind(this, 'ABOUT'), to: "/about" }, "ABOUT")))));
    }
}
exports.default = Header;
//# sourceMappingURL=Header.js.map
});
___scope___.file("components/Main.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Home_1 = require("../pages/Home");
const Services_1 = require("../pages/Services");
const WorkshopPreRegistration_1 = require("../pages/WorkshopPreRegistration");
const Ressources_1 = require("../pages/Ressources");
const About_1 = require("../pages/About");
const fuse_react_1 = require("fuse-react");
class Main extends React.Component {
    render() {
        return (React.createElement("main", null,
            React.createElement(fuse_react_1.Switch, null,
                React.createElement(fuse_react_1.Route, { exact: true, path: '/', component: Home_1.default }),
                React.createElement(fuse_react_1.Route, { exact: true, path: '/services', component: Services_1.default }),
                React.createElement(fuse_react_1.Route, { exact: true, path: '/workshop-preregistration', component: WorkshopPreRegistration_1.default }),
                React.createElement(fuse_react_1.Route, { exact: true, path: '/ressources', component: Ressources_1.default }),
                React.createElement(fuse_react_1.Route, { exact: true, path: '/about', component: About_1.default }))));
    }
}
exports.default = Main;
//# sourceMappingURL=Main.js.map
});
___scope___.file("pages/Home.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class Home extends React.Component {
    render() {
        return (React.createElement("div", { id: 'homePage' },
            React.createElement("div", { id: 'hero-homePage', className: "hero" },
                React.createElement("h1", null, "BITCOIN STUDIO #1"),
                React.createElement("p", null, "Expertise on blockchain tech, particularly Bitcoin. A network of real experts, design studio, web/interface that blah blah blah. In all seriousness, we can pretty much write whatever we want here and chances are, nobody will notice. The itsy bitsy spider went up the water spout. Down came the rain, and washed the spider out. See what we mean? Scroll down and find out why this happens...")),
            React.createElement("section", { id: 'pictures-homePage' },
                React.createElement("figure", { id: 'picture1' },
                    React.createElement("img", { src: "https://loremflickr.com/760/420", alt: "Tree frog" }),
                    React.createElement("figcaption", null, "Random placeholder carefully chosen")),
                React.createElement("figure", { id: 'picture2' },
                    React.createElement("img", { src: "https://loremflickr.com/436/420", alt: "Tree frog" }),
                    React.createElement("figcaption", null, "Random placeholder carefully chosen"))),
            React.createElement("section", { id: 'services-homePage' },
                React.createElement("div", { className: "hr" },
                    React.createElement("hr", null)),
                React.createElement("h2", null, "THE BEST BITCOIN STUDIO"),
                React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consequuntur dicta expedita magni minus numquam perspiciatis quod sint sunt vero? Laboriosam non pariatur repellat repellendus similique. Inventore nemo quidem vitae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consequuntur dicta expedita magni minus numquam perspiciatis quod sint sunt vero? Laboriosam non pariatur repellat repellendus similique. Inventore nemo quidem vitae. "),
                React.createElement("p", null, "Consectetur adipisicing elit. Aliquid consequuntur dicta expedita magni minus numquam perspiciatis quod sint sunt vero? Laboriosam non pariatur repellat repellendus similique. Inventore nemo quidem vitae. "),
                React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consequuntur dicta expedita magni minus numquam perspiciatis quod sint sunt vero? Laboriosam non pariatur repellat repellendus similique. Inventore nemo quidem vitae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consequuntur dicta expedita magni minus numquam perspiciatis quod sint sunt vero? Laboriosam non pariatur repellat repellendus similique. Inventore nemo quidem vitae. ")),
            React.createElement("section", { id: 'servicesDetails-homePage' },
                React.createElement("div", { className: 'serviceItem' },
                    React.createElement("img", { src: "https://loremflickr.com/200/150", alt: "img22" }),
                    React.createElement("p", null,
                        React.createElement("span", null,
                            React.createElement("em", null, "When the web meets Bitcoin")),
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam doloremque ex hic itaque non, perspiciatis totam voluptas? Debitis doloribus nulla omnis quaerat quis reprehenderit similique totam ut veniam voluptate!")),
                React.createElement("div", { className: 'serviceItem' },
                    React.createElement("img", { src: "https://loremflickr.com/200/150", alt: "img22" }),
                    React.createElement("p", null,
                        React.createElement("span", null,
                            React.createElement("em", null, "Help people grasp the tech")),
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam doloremque ex hic itaque non, perspiciatis totam voluptas? Debitis doloribus nulla omnis quaerat quis reprehenderit similique totam ut veniam voluptate!")),
                React.createElement("div", { className: 'serviceItem' },
                    React.createElement("img", { src: "https://loremflickr.com/200/150", alt: "img22" }),
                    React.createElement("p", null,
                        React.createElement("span", null,
                            React.createElement("em", null, "Help companies build products")),
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam doloremque ex hic itaque non, perspiciatis totam voluptas? Debitis doloribus nulla omnis quaerat quis reprehenderit similique totam ut veniam voluptate!")),
                React.createElement("div", { className: 'serviceItem' },
                    React.createElement("img", { src: "https://loremflickr.com/200/150", alt: "img22" }),
                    React.createElement("p", null,
                        React.createElement("span", null,
                            React.createElement("em", null, "Node installation")),
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam doloremque ex hic itaque non, perspiciatis totam voluptas? Debitis doloribus nulla omnis quaerat quis reprehenderit similique totam ut veniam voluptate!")),
                React.createElement("div", { className: 'serviceItem' },
                    React.createElement("img", { src: "https://loremflickr.com/200/150", alt: "img22" }),
                    React.createElement("p", null,
                        React.createElement("span", null,
                            React.createElement("em", null, "Node as a Service")),
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam doloremque ex hic itaque non, perspiciatis totam voluptas? Debitis doloribus nulla omnis quaerat quis reprehenderit similique totam ut veniam voluptate!"))),
            React.createElement("section", { id: 'workshops-homePage' },
                React.createElement("div", { className: "hr" },
                    React.createElement("hr", null)),
                React.createElement("h2", null, "A NETWORK OF TALENTED PEOPLE"),
                React.createElement("p", null,
                    React.createElement("span", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus commodi, deleniti dicta eos error eum fugit, officiis quaerat quas quibusdam provident?"),
                    React.createElement("span", null, "Alias culpa magni obcaecati tempore. Alias aspernatur incidunt nam quas reprehenderit ut voluptatum. Ab adipisci aut  magni modi molestias nam perferendis quibusdam tenetur, voluptatibus."),
                    React.createElement("span", null, "Adipisci aliquam, animi beatae cum delectus deleniti dignissimos exercitationem fugit ipsam iure laborum  officia sint velit veniam. Cumque debitis eius est ipsam itaque iusto molestiae mollitia rem!")),
                React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam amet aperiam at cumque esse ipsam itaque laboriosam laudantium molestias reiciendis rem sequi, similique sint, sit suscipit totam ullam, vitae?")),
            React.createElement("section", { id: "call2action-homePage" },
                React.createElement("div", { id: "call2action_ribbon" },
                    React.createElement("h1", null, "STOP BEING A FOLLOWER"),
                    React.createElement("p", null, "Are you tired of the financial system? Let\u2019s talk for real then.")),
                React.createElement("div", { id: "call2action_ribbon_prop", className: "" },
                    React.createElement("div", { className: "ribbon_prop_1" },
                        React.createElement("div", { className: "inside" },
                            React.createElement("span", null,
                                React.createElement("a", { href: "mailto:hello@bitcoin-studio.co", className: "clickhere" }, "Click Here to")),
                            React.createElement("span", null,
                                React.createElement("a", { href: "mailto:hello@bitcoin-studio.co", className: "request" }, "REQUEST")),
                            React.createElement("span", null,
                                React.createElement("a", { href: "mailto:hello@bitcoin-studio.co", className: "proposal" }, "a Proposal")))),
                    React.createElement("div", { className: "ribbon_prop_2" },
                        React.createElement("div", { className: "inside" },
                            React.createElement("span", null,
                                React.createElement("a", { href: "mailto:hello@bitcoin-studio.co", className: "clickhere" }, "Click Here to")),
                            React.createElement("span", null,
                                React.createElement("a", { href: "mailto:hello@bitcoin-studio.co", className: "request" }, "REQUEST")),
                            React.createElement("span", null,
                                React.createElement("a", { href: "mailto:hello@bitcoin-studio.co", className: "proposal" }, "a Proposal"))))))));
    }
}
exports.default = Home;
//# sourceMappingURL=Home.js.map
});
___scope___.file("pages/Services.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class Services extends React.Component {
    render() {
        return (React.createElement("div", { id: 'servicesPage' },
            React.createElement("div", { className: "hero", id: 'hero-servicesPage' },
                React.createElement("h1", null, "OUR SERVICES"),
                React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eius illum ipsum, itaque laboriosam magni natus quasi quisquam quos rerum similique sint ut, veritatis voluptas, voluptatem! Aut dolorem inventore ipsum?")),
            React.createElement("section", { id: 'workshops-servicesPage' },
                React.createElement("div", { className: "hr" },
                    React.createElement("hr", null)),
                React.createElement("h2", null, "WORKSHOPS"),
                React.createElement("p", null, "Practical: Bitcoin workshop 1 day"),
                React.createElement("p", null, "Essentials: Bitcoin workshop 2 days"),
                React.createElement("p", null, "In-depth: Bitcoin workshop 5 days"),
                React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consequuntur dicta expedita magni minus numquam perspiciatis quod sint sunt vero? Laboriosam non pariatur repellat repellendus similique. Inventore nemo quidem vitae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consequuntur dicta expedita magni minus numquam perspiciatis quod sint sunt vero? Laboriosam non pariatur repellat repellendus similique. Inventore nemo quidem vitae. ")),
            React.createElement("section", { id: 'consultingForCompanies-servicesPage' },
                React.createElement("div", { className: "hr" },
                    React.createElement("hr", null)),
                React.createElement("h2", null, "CONSULTING & DEVELOPMENT FOR COMPANIES"),
                React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consequuntur dicta expedita magni minus numquam perspiciatis quod sint sunt vero? Laboriosam non pariatur repellat repellendus similique. Inventore nemo quidem vitae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consequuntur dicta expedita magni minus numquam perspiciatis quod sint sunt vero? Laboriosam non pariatur repellat repellendus similique. Inventore nemo quidem vitae. "),
                React.createElement("p", null, "Custom Bitcoin development (layer 1, layer 2)"),
                React.createElement("ul", null,
                    React.createElement("li", null, "Choose a technology for your need"),
                    React.createElement("li", null, "Bitcoin: architecture, custom development, complex transaction, scripts, \u2026"),
                    React.createElement("li", null, "System architecture"),
                    React.createElement("li", null, "Node installation (Bitcoin, LN, BTCPay, Tor) / System administration"),
                    React.createElement("li", null, "Node as a service"))),
            React.createElement("section", { id: 'consultingForIndividuals-servicesPage' },
                React.createElement("div", { className: "hr" },
                    React.createElement("hr", null)),
                React.createElement("h2", null, "PRIVATE CONSULTING & DEVELOPMENT FOR INDIVIDUALS"),
                React.createElement("p", null, "Custom Bitcoin development (layer 1, layer 2)"),
                React.createElement("p", null, "Bitcoin server/node installation"),
                React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consequuntur dicta expedita magni minus numquam perspiciatis quod sint sunt vero? Laboriosam non pariatur repellat repellendus similique. Inventore nemo quidem vitae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consequuntur dicta expedita magni minus numquam perspiciatis quod sint sunt vero? Laboriosam non pariatur repellat repellendus similique. Inventore nemo quidem vitae. "),
                React.createElement("ul", null,
                    React.createElement("li", null, "Privately or in group"),
                    React.createElement("li", null, "Learn wallet/key management best practices"),
                    React.createElement("li", null, "General help, 1 day training"),
                    React.createElement("li", null, "Recover coins of bitcoin forks")))));
    }
}
exports.default = Services;
//# sourceMappingURL=Services.js.map
});
___scope___.file("pages/WorkshopPreRegistration.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const bitcoin_essentials_png_1 = require("../img/bitcoin_essentials.png");
class WorkshopPreRegistration extends React.Component {
    render() {
        return (React.createElement("div", { id: 'workshopPage' },
            React.createElement("div", { id: 'hero-workshopPage', className: 'hero' },
                React.createElement("h1", null, "BITCOIN WORKSHOPS"),
                React.createElement("p", null, "Do you wonder how Bitcoin and blockchain works and how to use it? Let\u2019s explore the first, most mature, secure and decentralized blockchain that has given birth to a whole new industry! Bitcoin Studio offers you three different courses on Bitcoin depending on your needs (Practical, Essentials, In-depth).")),
            React.createElement("section", { id: 'section1-workshopPage' },
                React.createElement("div", { className: "hr" },
                    React.createElement("hr", null)),
                React.createElement("h2", null, "MASTER THE KING OF CRYPTO"),
                React.createElement("p", null, "If you plan to work anywhere in the blockchain industry, mastering Bitcoin is an essential skill. It is the first of its kind, which means the most attacked and therefore the most robust blockchain. Bitcoin Core developers are highly experienced, the ecosystem is big, has the biggest market capitalization, etc. More than 75% of the blockchains today are, directly or indirectly, software forks of Bitcoin."),
                React.createElement("p", null, "Bitcoin is also a great start because it has the simplest protocol design, with a non-Turing-complete smart-contract functionality. Finally, the new micropayment feature Lightning Network is bringing tremendous new business opportunities.")),
            React.createElement("section", { id: "workshopFlyer-workshopPage" },
                React.createElement("img", { src: bitcoin_essentials_png_1.default, alt: "bitcoin essential flyer" }),
                React.createElement("div", { id: 'teaserWorkshop' },
                    React.createElement("p", null,
                        "Got 3 tickets for 2 bought! ",
                        React.createElement("br", null),
                        "First session @ 10 people ",
                        React.createElement("br", null),
                        "Satisfied or refunded!"))),
            React.createElement("section", { id: "offers-workshopPage" },
                React.createElement("section", { className: 'practical-offer-workshopPage' },
                    React.createElement("div", { className: "hr hr75pc" },
                        React.createElement("hr", null)),
                    React.createElement("h2", null, "Practical Bitcoin workshop 1 day"),
                    React.createElement("div", null,
                        React.createElement("h3", null, "Price"),
                        React.createElement("p", null, "100\u20AC inc. VAT. Satisfied or refunded")),
                    React.createElement("div", { className: 'goals-workshopPage' },
                        React.createElement("h3", null, "Goals"),
                        React.createElement("p", null, "Focused on the practical use of Bitcoin, after this course you will be able to understand the basics of the technology and manage your bitcoins like a pro. We will cover all the most important things to know, how the Bitcoin blockchain works, how Bitcoin wallets works, the different types of transactions, the broader ecosystem like exchanges and main companies, etc."),
                        React.createElement("p", null, "If there is enough interest we will transact bitcoin in Javascript using the Bitcoin.js library in order to get the real feeling of how powerful is this technology. You will also learn where to search for relevant sources of information and you will be able to ask for any remaining questions. After a day chances are that you will never look at money the same way.")),
                    React.createElement("div", { className: 'public-workshopPage' },
                        React.createElement("h3", null, "Public and Prerequisite"),
                        React.createElement("p", null, "This workshop is a hands-on training accessible to everybody. Attendees don't need prior knowledge on Bitcoin, blockchain or computer science.")),
                    React.createElement("div", { className: 'programme-workshopPage' },
                        React.createElement("h3", null, "Programme"),
                        React.createElement("p", null, "We will talk about all the main topics you need to know to be comfortable with Bitcoin. Mining, wallet, key management, transaction, fees, Lightning Network instant payment etc."),
                        React.createElement("p", null, "The day will end with an informal Q&A session."))),
                React.createElement("section", { className: 'essentials-offer-workshopPage' },
                    React.createElement("div", { className: "hr hr75pc" },
                        React.createElement("hr", null)),
                    React.createElement("h2", null, "Essentials Bitcoin workshop 2 days"),
                    React.createElement("div", null,
                        React.createElement("h3", null, "Price"),
                        React.createElement("p", null, "369\u20AC inc. VAT. Satisfied or refunded")),
                    React.createElement("div", { className: 'goals-workshopPage' },
                        React.createElement("h3", null, "Goals"),
                        React.createElement("p", null, "Exploring the technology more closely, this intermediary course will give you a solid basis to start your Bitcoin journey. Without going too technical, the goal is really to learn the different protocols that compose the Bitcoin blockchain. We will review the basics of how Bitcoin works in enough details, diving into several Bitcoin Improvement Proposals (the formal specifications) and looking into the broader ecosystem. You will learn all the specific concepts and vocabulary in use."),
                        React.createElement("p", null, "Same as with the Practical course, if there is enough interest we will transact bitcoin in Javascript using the Bitcoin.js library because this exercise is a very good way to really grasp the beauty of this technology.")),
                    React.createElement("div", { className: 'public-workshopPage' },
                        React.createElement("h3", null, "Public and Prerequisite"),
                        React.createElement("p", null, "While technical, it should stay accessible as long as you have a basic knowledge of computer science. It is intended to all individuals wishing to deepen their knowledge of Bitcoin and blockchain technology, either you are a developer, product manager, attorney, coffee maker, builder, entrepreneur, etc.")),
                    React.createElement("div", { className: 'programme-workshopPage' },
                        React.createElement("h3", null, "Programme"),
                        React.createElement("p", null, "Focusing on the essentials, this course will teach you the main technologies that compose Bitcoin (asymmetric cryptography, P2P networking, proof-of-work consensus and mining) and other good-to-knows."),
                        React.createElement("p", null, "Depending on the audience we may alternate between lecture and coding in Javascript."))),
                React.createElement("section", { className: 'indepth-offer-workshopPage' },
                    React.createElement("div", { className: "hr hr75pc" },
                        React.createElement("hr", null)),
                    React.createElement("h2", null, "In-depth Bitcoin workshop 5 days"),
                    React.createElement("div", null,
                        React.createElement("h3", null, "Price"),
                        React.createElement("p", null, "500\u20AC inc. VAT. Satisfied or refunded")),
                    React.createElement("div", { className: 'goals-workshopPage' },
                        React.createElement("h3", null, "Goals"),
                        React.createElement("p", null, "After an introduction to cryptography and Elliptic Curves in particular we will study the Bitcoin protocols quite in-depth, including the layer 2 Lightning Network. We will also have a look at various other aspects like its historical context, the broader ecosystem, the socio-economic implications, the governance of open source decentralized systems, etc."),
                        React.createElement("p", null, "Designed with an academic approach, we will alternate between theory and code practice (command line, Javascript). This training will allow you to deeply understand and evaluate blockchain protocols and will provide you a solid basis to work on Bitcoin or on any blockchain."),
                        React.createElement("input", { className: "toggle-box", id: "goalsInDepthToggle", type: "checkbox" }),
                        React.createElement("label", { htmlFor: "goalsInDepthToggle" }, "Read More"),
                        React.createElement("div", { id: "expandCollapsible" },
                            React.createElement("p", null, "Together we will explore the scripting language and Lightning Network. Focusing on the new Segregated Witness transaction format, we will learn how to construct regular transactions, P2WSH smart contracts, multi-signatures and timelock transactions; composing raw transactions using Javascript libraries."),
                            React.createElement("p", null, "After this course, you\u2019ll know everything you need to be able to separate fact from fiction when reading claims about Bitcoin and other cryptocurrencies. You\u2019ll have the conceptual foundations you need in order to develop on top of Bitcoin or any blockchain."))),
                    React.createElement("div", { className: 'public-workshopPage' },
                        React.createElement("h3", null, "Public and Prerequisite"),
                        React.createElement("p", null, "This course is intended to individuals that needs a deep-dive into Bitcoin protocols. Ideal if you already have a project, a business idea, or simply the strong desire to learn Bitcoin seriously. Bitcoin In-depth is primarily intended to developers that already master the basics of blockchain, otherwise it is recommended to take the Bitcoin Essentials course before.")),
                    React.createElement("div", { className: 'programme-workshopPage' },
                        React.createElement("h3", null, "Programme"),
                        React.createElement("p", null, "This five days training has been thought to be the most comprehensive as possible. Starting with some general background, we will talk about the Cypherpunk movement, cryptography, followed by some Bitcoin background (project history, block size debate, main Core developers, governance model, ...)."),
                        React.createElement("p", null, "We will then study quite extensively all the different technologies that compose Bitcoin, naming the P2P network, mining, consensus, forks, wallets, keys, addresses, the different types of transactions in detail, advanced scripting, layer two scaling solution Lightning Network, atomic swaps, privacy solutions, etc. We will alternate between lecture and coding in Javascript."))))));
    }
}
exports.default = WorkshopPreRegistration;
//# sourceMappingURL=WorkshopPreRegistration.js.map
});
___scope___.file("img/bitcoin_essentials.png", function(exports, require, module, __filename, __dirname){

});
___scope___.file("pages/Ressources.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class Ressources extends React.Component {
    render() {
        return (React.createElement("div", { id: "ressourcesPage" },
            React.createElement("div", { className: 'hero', id: 'hero-ressourcesPage' },
                React.createElement("h1", null, "Ressources"),
                React.createElement("p", null, "Have a look at our work. You can view and download some of the Bitcoin presentations made by St\u00E9phane Roche, exploring a variety of aspects like cryptographic keys, HD wallet, consensus, mining, forks, transactions (legacy and segwit format), ... More soon!")),
            React.createElement("div", { id: "hr-slides-ressourcesPage" },
                React.createElement("div", { className: "hr" },
                    React.createElement("hr", null))),
            React.createElement("section", { id: 'slides-ressourcesPage' },
                React.createElement("h2", null, "BITCOIN TRAININGS SLIDES"),
                React.createElement("div", { className: 'slideItemContainer2' },
                    React.createElement("div", { className: 'slideItemContainer' },
                        React.createElement("object", { className: 'slideItem', type: "application/pdf", data: "workshopSlides/Bitcoin_forks_history_S_Roche.pdf" })),
                    React.createElement("button", null,
                        React.createElement("a", { href: "workshopSlides/Bitcoin_forks_history_S_Roche.pdf", download: true }, "DOWNLOAD"))),
                React.createElement("div", { className: 'slideItemContainer2' },
                    React.createElement("div", { className: 'slideItemContainer' },
                        React.createElement("object", { className: 'slideItem', type: "application/pdf", data: "workshopSlides/Bitcoin_keys_addresses_wallets_S_Roche.pdf" })),
                    React.createElement("button", null,
                        React.createElement("a", { href: "workshopSlides/Bitcoin_keys_addresses_wallets_S_Roche.pdf", download: true }, "DOWNLOAD"))),
                React.createElement("div", { className: 'slideItemContainer2' },
                    React.createElement("div", { className: 'slideItemContainer' },
                        React.createElement("object", { className: 'slideItem', type: "application/pdf", data: "workshopSlides/Mining_consensus_forks_S_Roche.pdf" })),
                    React.createElement("button", null,
                        React.createElement("a", { href: "workshopSlides/Mining_consensus_forks_S_Roche.pdf", download: true }, "DOWNLOAD"))),
                React.createElement("div", { className: 'slideItemContainer2' },
                    React.createElement("div", { className: 'slideItemContainer' },
                        React.createElement("object", { className: 'slideItem', type: "application/pdf", data: "workshopSlides/Next_challenges_of_Bitcoin_S_Roche.pdf" })),
                    React.createElement("button", null,
                        React.createElement("a", { href: "workshopSlides/Next_challenges_of_Bitcoin_S_Roche.pdf", download: true }, "DOWNLOAD"))),
                React.createElement("div", { className: 'slideItemContainer2' },
                    React.createElement("div", { className: 'slideItemContainer' },
                        React.createElement("object", { className: 'slideItem', type: "application/pdf", data: "workshopSlides/Bitcoin_transaction_S_Roche.pdf" })),
                    React.createElement("button", null,
                        React.createElement("a", { href: "workshopSlides/Bitcoin_transaction_S_Roche.pdf", download: true }, "DOWNLOAD"))),
                React.createElement("div", { className: 'slideItemContainer2' },
                    React.createElement("div", { className: 'slideItemContainer' },
                        React.createElement("object", { className: 'slideItem', type: "application/pdf", data: "workshopSlides/TheBeginningOfYourBlockchainJourney_S_Roche.pdf" })),
                    React.createElement("button", null,
                        React.createElement("a", { href: "workshopSlides/TheBeginningOfYourBlockchainJourney_S_Roche.pdf", download: true }, "DOWNLOAD"))),
                React.createElement("div", { className: 'slideItemContainer2 fakeItemContainer' },
                    React.createElement("div", { className: 'slideItemContainer' },
                        React.createElement("object", { className: 'slideItem fakeItem', data: "workshopSlides/slide_fake.png" })),
                    React.createElement("button", null,
                        React.createElement("a", null, "DOWNLOAD"))),
                React.createElement("div", { className: 'slideItemContainer2 fakeItemContainer' },
                    React.createElement("div", { className: 'slideItemContainer' },
                        React.createElement("object", { className: 'slideItem fakeItem', data: "workshopSlides/slide_fake.png" })),
                    React.createElement("button", null,
                        React.createElement("a", null, "DOWNLOAD"))))));
    }
}
exports.default = Ressources;
//# sourceMappingURL=Ressources.js.map
});
___scope___.file("pages/About.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class About extends React.Component {
    render() {
        return (React.createElement("div", { id: 'aboutPage' },
            React.createElement("div", { className: 'hero', id: 'hero-aboutPage' },
                React.createElement("h1", null, "About"),
                React.createElement("p", null, "Based in Lisbon, Portugal, Bitcoin Studio is led by St\u00E9phane Roche, P2P decentralized consensus systems aka blockchain developer, and strong advocate of crypto-anarchy. The company also has a vast network of talented people in France, Portugal and all over the world.")),
            React.createElement("section", { id: 'description-aboutPage' },
                React.createElement("div", { className: "hr" },
                    React.createElement("hr", null)),
                React.createElement("h2", null, "STEPHANE - CEO/CTO"),
                React.createElement("p", null,
                    "St\u00E9phane starts working on Bitcoin in 2015 at the hardware wallet company Ledger. From 2016 to mid-2017 he is working on the Ethereum Platform. He has co-founded the french non-profit organization Asseth to promote Ethereum, now the biggest Ethereum non-profit across Europe and created the website ",
                    React.createElement("a", { href: "http://asseth.fr", target: "_blank" }, "asseth.fr"),
                    ". Research work on the UI of dao1901, using Web3 and state of the art Javascript librairies (React, Redux, Redux-sagas). Heavily involved in the making of the ",
                    React.createElement("a", { href: "https://dether.io/", target: "_blank" }, "Dether.io"),
                    " smart contracts and the Javascript tests."),
                React.createElement("p", null, "Since mid-2017, he is focusing on Bitcoin, building a solid expertise, and now offering Bitcoin Workshops (Practical, Essentials, In-depth) and custom development. At Bitcoin Studio we use the best web technologies (Typescript, Fusebox, React, Redux, Redux-sagas, ...) and the latest Bitcoin developments. Over the years he gained lot of experience on Bitcoin and blockchain technology."),
                React.createElement("p", null,
                    "Contact us at ",
                    React.createElement("a", { href: 'mailto:rste%70%68ane@%70rot%6Fn%6Dail.%63om' }, "rstephane@protonmail.com")))));
    }
}
exports.default = About;
//# sourceMappingURL=About.js.map
});
___scope___.file("components/Footer.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class Footer extends React.Component {
    render() {
        return (React.createElement("footer", { className: "footer" },
            React.createElement("div", { id: "services_footer" },
                React.createElement("h2", null, "SERVICES"),
                React.createElement("nav", null,
                    React.createElement("ul", null,
                        React.createElement("li", null,
                            React.createElement("a", { href: "./" }, "Homepage")),
                        React.createElement("li", null,
                            React.createElement("a", { href: "./about" }, "About our Studio")),
                        React.createElement("li", null,
                            React.createElement("a", { href: "./ressources" }, "Selected Works")),
                        React.createElement("li", null,
                            React.createElement("a", { href: 'mailto:rsteph%61ne%40%70ro%74%6Fn%6Dail.co%6D' }, "Contact Information"))))),
            React.createElement("div", { id: "connect" },
                React.createElement("h2", null, "CONNECT"),
                React.createElement("nav", null,
                    React.createElement("ul", null,
                        React.createElement("li", null,
                            React.createElement("a", { href: 'mailto:rsteph%61ne%40%70ro%74%6Fn%6Dail.co%6D' }, "Email us")),
                        React.createElement("li", null,
                            React.createElement("a", { target: "_blank", href: "http://twitter.com/JanakaSteph" }, "Follow @JanakaSteph on Twitter")),
                        React.createElement("li", null,
                            React.createElement("a", { target: "_blank", href: "https://www.linkedin.com/in/stephane-roche" }, "Follow St\u00E9phane on Linkedin")),
                        React.createElement("li", null,
                            React.createElement("a", { href: 'mailto:rsteph%61ne%40%70ro%74%6Fn%6Dail.co%6D' }, "Work with Us")))))));
    }
}
exports.default = Footer;
//# sourceMappingURL=Footer.js.map
});
___scope___.file("serviceWorker.js", function(exports, require, module, __filename, __dirname){
/* fuse:injection: */ var process = require("process");
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isLocalhost = Boolean(window.location.hostname === 'localhost' ||
    window.location.hostname === '[::1]' ||
    window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
        const publicUrl = new URL(process.env.PUBLIC_URL, window.location);
        if (publicUrl.origin !== window.location.origin) {
            return;
        }
        window.addEventListener('load', () => {
            const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
            if (isLocalhost) {
                checkValidServiceWorker(swUrl, config);
                navigator.serviceWorker.ready.then(() => {
                    console.log('This web app is being served cache-first by a service ' +
                        'worker. To learn more, visit https://goo.gl/SC7cgQ');
                });
            }
            else {
                registerValidSW(swUrl, config);
            }
        });
    }
}
exports.register = register;
function registerValidSW(swUrl, config) {
    navigator.serviceWorker
        .register(swUrl)
        .then(registration => {
        registration.onupdatefound = () => {
            const installingWorker = registration.installing;
            installingWorker.onstatechange = () => {
                if (installingWorker.state === 'installed') {
                    if (navigator.serviceWorker.controller) {
                        console.log('New content is available; please refresh.');
                        if (config.onUpdate) {
                            config.onUpdate(registration);
                        }
                    }
                    else {
                        console.log('Content is cached for offline use.');
                        if (config.onSuccess) {
                            config.onSuccess(registration);
                        }
                    }
                }
            };
        };
    })
        .catch(error => {
        console.error('Error during service worker registration:', error);
    });
}
function checkValidServiceWorker(swUrl, config) {
    fetch(swUrl)
        .then(response => {
        if (response.status === 404 ||
            response.headers.get('content-type').indexOf('javascript') === -1) {
            navigator.serviceWorker.ready.then(registration => {
                registration.unregister().then(() => {
                    window.location.reload();
                });
            });
        }
        else {
            registerValidSW(swUrl, config);
        }
    })
        .catch(() => {
        console.log('No internet connection found. App is running in offline mode.');
    });
}
function unregister() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then(registration => {
            registration.unregister();
        });
    }
}
exports.unregister = unregister;
//# sourceMappingURL=app.js.map
});
___scope___.file("stylesheets/global.css", function(exports, require, module, __filename, __dirname){


require("fuse-box-css")("stylesheets/global.css", "/**\n    Polices\n\n    TrumpGothicEastMedium => Pathway Gothic One  (headers)\n\n    republic-web => roboto slab (normal text)\n\n    pill-gothic => roboto condensed (bold text)\n\n\n\n    CSS Grid\n    .wrapper => 5 cols (1, 2, 6, 2, 1)  nav, main, footer\n\n    main > div => 3 cols (2, 6, 2)\n\n\n    Colors\n    primary: #39444a;\n    secondary: #fffff;\n */\n\nbody {\n    margin: 0;\n    padding: 0;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    background: #e4e8e9 url(/assets/background.jpg) repeat left top;\n    color: #39444a;\n    line-height: 180%;\n}\n\n.wrapper {\n    display:grid;\n    grid-template-columns: 1fr 2fr 6fr 2fr 1fr;\n    grid-template-areas:\n            \".     .        nav     .       .\"\n            \".     main     main    main    .\"\n            \".     footer   footer  footer  .\";\n}\n\n\n\n/**\n    Main\n */\nmain {\n    grid-area: main;\n}\nmain > div {\n    display: grid;\n    grid-template-columns: 2fr 6fr 2fr;\n\n    font-family: \"Roboto Slab\",serif;\n    font-size: 14px;\n    letter-spacing: 0.3px;\n}\n\n/**\n    Hero\n */\n.hero h1 {\n    font-family: 'Pathway Gothic One', Helvetica, Arial, \"Trebuchet MS\", sans-serif;\n    font-size: 8em;\n    font-weight: bold;\n}\n.hero p {\n    font-family: \"Roboto Condensed\", sans-serif;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 20px;\n    line-height: 160%;\n    margin-bottom: 30px;\n}\n\n\n/**\n    Lines\n */\n.hr {\n    clear: both;\n    height: 6px;\n    background: url(/assets/border.png) top repeat-x;\n    width: 100%;\n}\n.hr hr {\n    display: none;\n}\n.hr75pc {\n    clear: both;\n    height: 6px;\n    background: url(/assets/border.png) top repeat-x;\n    width: 75%;\n}\n\n/**\n    HEADERS\n */\nh1, h2, h3 {\n    font-family: 'Pathway Gothic One', Helvetica, Arial, \"Trebuchet MS\", sans-serif;\n    letter-spacing: 4px;\n    text-transform: uppercase;\n}\nh1 { font-size: 8em;}\nh2 {\n    font-size: 2.75em;\n    margin: 15px 0 25px 0;\n}\nh3 {\n    font-size: 2em;\n    margin: 30px 0 15px 0;\n}\n\nsection {\n    margin: 20px 0;\n}\n\n\n\n/**\n    Navigation - Header\n */\n.nav {\n    grid-area: nav;\n}\n\n.nav ul {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n\n    display: flex;\n    justify-content: space-between;\n}\n\n.nav ul li {\n    font-family: 'Pathway Gothic One', Helvetica, Arial, \"Trebuchet MS\", sans-serif;\n    font-size: 25px;\n    font-weight: normal;\n}\n\n.nav ul li a {\n    height: 145px;\n    width: 100px;\n    color: #39444a;\n    display: block;\n    padding-top: 70px;\n    text-align: center;\n}\n\n.nav ul li a:hover {\n    background: url(/assets/nav_item_hover.png) top no-repeat;\n    text-decoration: none;\n}\n\n.nav ul li a.active {\n    background: url(/assets/nav_item_active.png) no-repeat 0px 0px;\n    color: #fff;\n}\n\n\n/**\n    FOOTER\n */\nfooter {\n    grid-area: footer;\n    /*background-color: #e9e826;*/\n\n    display: flex;\n\n    width: 1200px;\n    height: 207px;\n    /*height: 166px;*/\n    margin-top: 50px;\n    margin-bottom: 50px;\n    padding-left: 240px;\n    line-height: 140%;\n\n    background: url(/assets/footer_right_207px.png) no-repeat scroll right bottom,\n    url(/assets/footer_left_207px.png) no-repeat scroll left bottom,\n    url(/assets/footer_bg_207px.png) repeat scroll right bottom transparent;\n}\n\nfooter > div {\n    width: 248px;\n    padding-top: 20px;\n}\n\nfooter > div > h2 {\n    font-family: 'Pathway Gothic One', Helvetica, Arial, \"Trebuchet MS\", sans-serif;\n    font-size: 26px;\n    font-weight: normal;\n    letter-spacing: 3px;\n    margin-right: 20px;\n    margin-bottom: 10px;\n}\n\nfooter > div > nav > ul {\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n}\n\nfooter > div > nav > ul > li {\n    font-family: \"Roboto Condensed\", sans-serif;\n    font-size: 14px;\n    letter-spacing: normal;\n    line-height: 175%;\n}\n\nfooter > div > nav > ul > li > a {\n    color: #39444a;\n    text-decoration: none;\n    padding-left: 14px;\n    background: url(/assets/footer_li_arrow.png) no-repeat 0px 1px;\n}\n\nfooter > div > nav > ul > li > a:hover {\n    color: #fff;\n    text-decoration: none;\n    padding-left: 14px;\n    background: url(/assets/footer_li_arrow.png) no-repeat 0px -18px;\n}\n\n\n/**\n    Collapsible\n */\n.toggle-box {\n    display: none;\n}\n\n.toggle-box + label {\n    cursor: pointer;\n    display: block;\n    line-height: 21px;\n    margin: 25px 0;\n}\n\n.toggle-box + label + div {\n    opacity: 0;\n    margin-bottom: 10px;\n    height: 0px;\n    transition: height 2s, opacity 2s;\n}\n.toggle-box:checked + label + div {\n    display: block;\n    opacity: 1;\n    height: 350px;\n}\n\n.toggle-box + label:before {\n    padding-left: 1px;\n    background-color: #39444ab8;\n    -webkit-border-radius: 10px;\n    -moz-border-radius: 10px;\n    border-radius: 10px;\n    color: #FFFFFF;\n    content: \"+\";\n    display: block;\n    float: left;\n    font-weight: bold;\n    height: 20px;\n    line-height: 20px;\n    margin-right: 5px;\n    text-align: center;\n    width: 20px;\n}\n\n.toggle-box:checked + label:before {\n    content: \"\\2212\";\n}")
});
___scope___.file("stylesheets/homePage.css", function(exports, require, module, __filename, __dirname){


require("fuse-box-css")("stylesheets/homePage.css", "main > div#homePage {\n    grid-template-areas:\n            \".                 hero-hp           .\"\n            \"pictures-hp       pictures-hp      pictures-hp\"\n            \"services-hp       services-hp       services-hp\"\n            \"details-hp  details-hp details-hp\"\n            \"workshops-hp      workshops-hp      workshops-hp\"\n            \"call2action-hp    call2action-hp    call2action-hp\";\n}\n\n\n\n/**\n    Hero\n */\n#hero-homePage {\n    grid-area: hero-hp;\n}\n\n\n/**\n    Services (text content 1)\n */\n#services-homePage {\n    grid-area: services-hp;\n    grid-column: 2 / 3;\n}\n#servicesDetails-homePage {\n    grid-area: details-hp;\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    grid-column-gap: 1em;\n}\n#stuff-homePage {\n    grid-area: stuff-hp;\n}\n#workshops-homePage {\n    grid-area: workshops-hp;\n    grid-column: 2 / 3;\n}\n\n#servicesDetails-homePage .serviceItem {\n    text-align: center;\n}\n#servicesDetails-homePage .serviceItem p {\n    text-align: initial;\n}\n#servicesDetails-homePage .serviceItem p span {\n    margin-bottom: 5px;\n    display: block;\n}\n/**\n    Call 2 action\n */\n#call2action-homePage {\n    grid-area: call2action-hp;\n    display: grid;\n    grid-template-columns: 5fr 1fr;\n}\n\n#call2action_ribbon {\n    display: grid;\n    grid-template-columns: 6fr 6fr;\n    align-items: baseline;\n    padding-top: 63px;\n    padding-left: 60px;\n    background: url(/assets/call2action_ribbon.jpg) no-repeat left center,\n    url(/assets/call2action.png) repeat-x center left;\n}\n\n#call2action_ribbon h1 {\n    margin-right: 30px;\n    justify-self: center;\n}\n\n#call2action_ribbon_prop {\n    width: 206px;\n    height: 207px;\n    position: relative;\n    text-align: center;\n    background: url(/assets/call2action_circle_bg.png) left no-repeat;\n}\n\n#call2action_ribbon_prop .inside {\n    margin-top: 49px;\n\n}\n\n#call2action_ribbon_prop span:nth-child(odd) {\n    font-size: 16px;\n    font-style: italic;\n    font-family: times;\n}\n\n#call2action_ribbon h1 {\n    font-family: 'Pathway Gothic One', Helvetica, Arial, \"Trebuchet MS\", sans-serif;\n    font-size: 33px;\n    letter-spacing: 2px;\n}\n\n.ribbon_prop_1 {\n    position: absolute;\n    background: url(/assets/call2action_circle.png) left 0px no-repeat;\n    width: 206px;\n    height: 205px;\n    z-index: 2;\n}\n\n.ribbon_prop_1 .inside span > a {\n    color: #ffffff;\n}\n\n.ribbon_prop_2 .inside span > a {\n    color: #39444a;\n}\n\n.ribbon_prop_1:hover {\n    opacity: 0;\n    cursor: pointer;\n}\n\n.ribbon_prop_2 {\n    position: absolute;\n    background: url(/assets/call2action_circle.png) left -205px no-repeat;\n    width: 206px;\n    height: 205px;\n}\n\n.ribbon_prop_2:hover {\n    opacity: 1;\n}\n\n\n\n/**\n\n */\n.request {\n    font-family: 'Pathway Gothic One', Helvetica, Arial, \"Trebuchet MS\", sans-serif;\n    font-size: 2.75em;\n    line-height: 100%;\n    margin-top: 10px;\n    letter-spacing: 3px;\n    display: block;\n}\n\n/**\n    Pictures home page\n */\n#pictures-homePage {\n    grid-area: pictures-hp;\n    display: grid;\n    grid-template-columns: 8fr 4fr;\n    grid-column-gap: 2em;\n    margin-top: 0;\n}\n\n#pictures-homePage figure {\n    margin: 0;\n}\n\n#pictures-homePage img {\n    border: 10px solid #fff;\n    width: 100%;\n    height: 400px;\n}\n\n#picture1 {\n    grid-area: picture1;\n    grid-column: 1 / 2;\n}\n\n#picture2 {\n    grid-area: picture2;\n    grid-column: 2 / 3;\n}")
});
___scope___.file("stylesheets/servicesPage.css", function(exports, require, module, __filename, __dirname){


require("fuse-box-css")("stylesheets/servicesPage.css", "/**\n    Services Page Stylesheet\n */\n\nmain > div#servicesPage {\n    grid-template-areas:\n            \".                               hero-sp        .\"\n            \"workshops-sp                    workshops-sp                    workshops-sp\"\n            \"consultingForCompanies-sp       consultingForCompanies-sp       consultingForCompanies-sp\"\n            \"consultingForIndividuals-sp     consultingForIndividuals-sp     consultingForIndividuals-sp\";\n}\n\n\n/**\n    Hero Services Page\n */\n#hero-servicesPage {\n    grid-area: hero-sp;\n}\n#workshops-servicesPage {\n    grid-area: workshops-sp;\n}\n#consultingForCompanies-servicesPage {\n    grid-area: consultingForCompanies-sp;\n}\n#consultingForIndividuals-servicesPage {\n    grid-area: consultingForIndividuals-sp;\n}")
});
___scope___.file("stylesheets/workshopPage.css", function(exports, require, module, __filename, __dirname){


require("fuse-box-css")("stylesheets/workshopPage.css", "main > div#workshopPage {\n    grid-template-areas:\n            \".                 hero-wp           .\"\n            \"workshopFlyer-wp  workshopFlyer-wp  workshopFlyer-wp\"\n            \"section1-wp section1-wp section1-wp\"\n            \"offers-wp         offers-wp         offers-wp\";\n}\n\n#hero-workshopPage {\n    grid-area: hero-wp\n}\n#hero-workshopPage.hero h1 {\n    line-height: 100%;\n    margin: 30px 0;\n}\n#workshopFlyer-workshopPage {\n    grid-area: workshopFlyer-wp;\n    display: grid;\n    grid-template-columns: 8fr 4fr;\n    grid-column-gap: 1.5em;\n}\n#workshopFlyer-workshopPage img {\n    width:100%;\n    border: 7px solid #fff;\n}\n#offers-workshopPage {\n    display: grid;\n    grid-area: offers-wp;\n    grid-template-columns: 4fr 4fr 4fr;\n    grid-column-gap: 5em;\n}\n\n#offers-workshopPage h2 {\n    line-height: 110%;\n}\n\n#offers-workshopPage .goals-workshopPage {\n    min-height: 500px;\n}\n#teaserWorkshop {\n    font-weight: bold;\n    line-height: 3em;\n    font-size: 2em;\n    text-align: center;\n    border: 7px solid #fff;\n    align-self: center;\n}\n#section1-workshopPage {\n    grid-area: section1-wp;\n    grid-column: 2 / 3;\n}\n\n.public-workshopPage {\n    height: 260px;\n}\n.programme-workshopPage {\n    height: 420px;\n}")
});
___scope___.file("stylesheets/ressourcesPage.css", function(exports, require, module, __filename, __dirname){


require("fuse-box-css")("stylesheets/ressourcesPage.css", "main > div#ressourcesPage {\n    grid-template-areas:\n            \".            hero-rp        .\"\n            \"hr-slides-rp hr-slides-rp   hr-slides-rp\"\n            \"slides       slides         slides\";\n}\n\n#hero-ressourcesPage {\n    grid-area: hero-rp;\n}\n\n#slides-ressourcesPage {\n    grid-area: slides;\n\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: row;\n    justify-content: space-between;\n}\n\n.slideItemContainer {\n    overflow: hidden;\n    height: 169px;\n}\n\n.slideItemContainer2 {\n    height: 169px;\n    margin-bottom: 50px;\n    width: calc(1 / 4 * 100% - (1 - 1 / 4) * 20px);\n}\n.slideItemContainer2 button {\n    outline: none;\n    width: 100%;\n    border-radius: 0.1px;\n    cursor: pointer;\n    margin-top: 5px;\n    border: 1px groove;\n    background-color: rgba(0, 0, 0, 0);\n\n    color: rgba(255,255,255,1);\n    -webkit-transition: all 0.5s;\n    -moz-transition: all 0.5s;\n    -o-transition: all 0.5s;\n    transition: all 0.5s;\n    border: 1px groove rgba(57, 68, 74, 0.3);\n    position: relative;\n}\n\n.slideItemContainer2 button a {\n    text-decoration: none;\n    color: #39444a;\n    z-index: 2;\n    display: block;\n    width: 100%;\n    height: 100%;\n\n    font-weight: bold;\n    font-family: \"Pathway Gothic One\",serif;\n    font-size: 14px;\n    letter-spacing: 10px;\n}\n\n.slideItemContainer2 button::before{\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: -1;\n    opacity: 0;\n    background-color: rgba(255,255,255,0.5);\n    -webkit-transition: all 0.4s;\n    -moz-transition: all 0.4s;\n    -o-transition: all 0.4s;\n    transition: all 0.4s;\n    -webkit-transform: scale(0.5, 1);\n    transform: scale(0.5, 1);\n}\n.slideItemContainer2.fakeItemContainer button::before{\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: -1;\n    opacity: 0;\n    background-color: rgba(201, 24, 0, 0.5);\n    -webkit-transition: all 0.4s;\n    -moz-transition: all 0.4s;\n    -o-transition: all 0.4s;\n    transition: all 0.4s;\n    -webkit-transform: scale(0.5, 1);\n    transform: scale(0.5, 1);\n}\n.slideItemContainer2 button:hover::before{\n    opacity: 1;\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1);\n}\n\n\nobject.slideItem {\n    top: -56px;\n    position: relative;\n    height: 225px;\n}\n\nobject.slideItem.fakeItem {\n    filter: blur(0.3rem);\n}\n\n#slides-ressourcesPage h2 {\n    width: 100%;\n    margin-bottom: 1.5em;\n}\n\n#hr-slides-ressourcesPage {\n    grid-area: hr-slides-rp;\n    position: relative;\n    top: 27px;\n    margin-top: 30px;\n}")
});
___scope___.file("stylesheets/aboutPage.css", function(exports, require, module, __filename, __dirname){


require("fuse-box-css")("stylesheets/aboutPage.css", "main > div#aboutPage {\n    grid-template-areas:\n            \".           hero-ap        .\"\n            \"desc-ap     desc-ap        desc-ap\";\n}\n\n#hero-aboutPage {\n    grid-area: hero-ap;\n}\n\n#description-aboutPage {\n    grid-area: desc-ap;\n}")
});
return ___scope___.entry = "index.jsx";
});
FuseBox.pkg("fusebox-hot-reload", {}, function(___scope___){
___scope___.file("index.js", function(exports, require, module, __filename, __dirname){

"use strict";
/**
 * @module listens to `source-changed` socket events and actions hot reload
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Client = require('fusebox-websocket').SocketClient, bundleErrors = {}, outputElement = document.createElement('div'), styleElement = document.createElement('style'), minimizeToggleId = 'fuse-box-toggle-minimized', hideButtonId = 'fuse-box-hide', expandedOutputClass = 'fuse-box-expanded-output', localStoragePrefix = '__fuse-box_';
function storeSetting(key, value) {
    localStorage[localStoragePrefix + key] = value;
}
function getSetting(key) {
    return localStorage[localStoragePrefix + key] === 'true' ? true : false;
}
var outputInBody = false, outputMinimized = getSetting(minimizeToggleId), outputHidden = false;
outputElement.id = 'fuse-box-output';
styleElement.innerHTML = "\n    #" + outputElement.id + ", #" + outputElement.id + " * {\n        box-sizing: border-box;\n    }\n    #" + outputElement.id + " {\n        z-index: 999999999999;\n        position: fixed;\n        top: 10px;\n        right: 10px;\n        width: 400px;\n        overflow: auto;\n        background: #fdf3f1;\n        border: 1px solid #eca494;\n        border-radius: 5px;\n        font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n        box-shadow: 0px 3px 6px 1px rgba(0,0,0,.15);\n    }\n    #" + outputElement.id + "." + expandedOutputClass + " {\n        height: auto;\n        width: auto;\n        left: 10px;\n        max-height: calc(100vh - 50px);\n    }\n    #" + outputElement.id + " .fuse-box-errors {\n        display: none;\n    }\n    #" + outputElement.id + "." + expandedOutputClass + " .fuse-box-errors {\n        display: block;\n        border-top: 1px solid #eca494;\n        padding: 0 10px;\n    }\n    #" + outputElement.id + " button {\n        border: 1px solid #eca494;\n        padding: 5px 10px;\n        border-radius: 4px;\n        margin-left: 5px;\n        background-color: white;\n        color: black;\n        box-shadow: 0px 2px 2px 0px rgba(0,0,0,.05);\n    }\n    #" + outputElement.id + " .fuse-box-header {\n        padding: 10px;\n    }\n    #" + outputElement.id + " .fuse-box-header h4 {\n        display: inline-block;\n        margin: 4px;\n    }";
styleElement.type = 'text/css';
document.getElementsByTagName('head')[0].appendChild(styleElement);
function displayBundleErrors() {
    var errorMessages = Object.keys(bundleErrors).reduce(function (allMessages, bundleName) {
        var bundleMessages = bundleErrors[bundleName];
        return allMessages.concat(bundleMessages.map(function (message) {
            var messageOutput = message
                .replace(/\n/g, '<br>')
                .replace(/\t/g, '&nbsp;&nbps;&npbs;&nbps;')
                .replace(/ /g, '&nbsp;');
            return "<pre>" + messageOutput + "</pre>";
        }));
    }, []), errorOutput = errorMessages.join('');
    if (errorOutput && !outputHidden) {
        outputElement.innerHTML = "\n        <div class=\"fuse-box-header\" style=\"\">\n            <h4 style=\"\">Fuse Box Bundle Errors (" + errorMessages.length + "):</h4>\n            <div style=\"float: right;\">\n                <button id=\"" + minimizeToggleId + "\">" + (outputMinimized ? 'Expand' : 'Minimize') + "</button>\n                <button id=\"" + hideButtonId + "\">Hide</button>\n            </div>\n        </div>\n        <div class=\"fuse-box-errors\">\n            " + errorOutput + "\n        </div>\n        ";
        document.body.appendChild(outputElement);
        outputElement.className = outputMinimized ? '' : expandedOutputClass;
        outputInBody = true;
        document.getElementById(minimizeToggleId).onclick = function () {
            outputMinimized = !outputMinimized;
            storeSetting(minimizeToggleId, outputMinimized);
            displayBundleErrors();
        };
        document.getElementById(hideButtonId).onclick = function () {
            outputHidden = true;
            displayBundleErrors();
        };
    }
    else if (outputInBody) {
        document.body.removeChild(outputElement);
        outputInBody = false;
    }
}
exports.connect = function (port, uri, reloadFullPage) {
    if (FuseBox.isServer) {
        return;
    }
    port = port || window.location.port;
    var client = new Client({
        port: port,
        uri: uri,
    });
    client.connect();
    client.on('page-reload', function (data) {
        return window.location.reload();
    });
    client.on('page-hmr', function (data) {
        FuseBox.flush();
        FuseBox.dynamic(data.path, data.content);
        if (FuseBox.mainFile) {
            try {
                FuseBox.import(FuseBox.mainFile);
            }
            catch (e) {
                if (typeof e === 'string') {
                    if (/not found/.test(e)) {
                        return window.location.reload();
                    }
                }
                console.error(e);
            }
        }
    });
    client.on('source-changed', function (data) {
        console.info("%cupdate \"" + data.path + "\"", 'color: #237abe');
        if (reloadFullPage) {
            return window.location.reload();
        }
        /**
         * If a plugin handles this request then we don't have to do anything
         **/
        for (var index = 0; index < FuseBox.plugins.length; index++) {
            var plugin = FuseBox.plugins[index];
            if (plugin.hmrUpdate && plugin.hmrUpdate(data)) {
                return;
            }
        }
        if (data.type === "hosted-css") {
            var fileId = data.path.replace(/^\//, '').replace(/[\.\/]+/g, '-');
            var existing = document.getElementById(fileId);
            if (existing) {
                existing.setAttribute("href", data.path + "?" + new Date().getTime());
            }
            else {
                var node = document.createElement('link');
                node.id = fileId;
                node.type = 'text/css';
                node.rel = 'stylesheet';
                node.href = data.path;
                document.getElementsByTagName('head')[0].appendChild(node);
            }
        }
        if (data.type === 'js' || data.type === "css") {
            FuseBox.flush();
            FuseBox.dynamic(data.path, data.content);
            if (FuseBox.mainFile) {
                try {
                    FuseBox.import(FuseBox.mainFile);
                }
                catch (e) {
                    if (typeof e === 'string') {
                        if (/not found/.test(e)) {
                            return window.location.reload();
                        }
                    }
                    console.error(e);
                }
            }
        }
    });
    client.on('error', function (error) {
        console.log(error);
    });
    client.on('bundle-error', function (_a) {
        var bundleName = _a.bundleName, message = _a.message;
        console.error("Bundle error in " + bundleName + ": " + message);
        var errorsForBundle = bundleErrors[bundleName] || [];
        errorsForBundle.push(message);
        bundleErrors[bundleName] = errorsForBundle;
        displayBundleErrors();
    });
    client.on('update-bundle-errors', function (_a) {
        var bundleName = _a.bundleName, messages = _a.messages;
        messages.forEach(function (message) { return console.error("Bundle error in " + bundleName + ": " + message); });
        bundleErrors[bundleName] = messages;
        displayBundleErrors();
    });
};

});
return ___scope___.entry = "index.js";
});
FuseBox.pkg("fusebox-websocket", {}, function(___scope___){
___scope___.file("index.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var events = require('events');
var SocketClient = /** @class */ (function () {
    function SocketClient(opts) {
        opts = opts || {};
        var port = opts.port || window.location.port;
        var protocol = location.protocol === 'https:' ? 'wss://' : 'ws://';
        var domain = location.hostname || 'localhost';
        this.url = opts.host || "" + protocol + domain + ":" + port;
        if (opts.uri) {
            this.url = opts.uri;
        }
        this.authSent = false;
        this.emitter = new events.EventEmitter();
    }
    SocketClient.prototype.reconnect = function (fn) {
        var _this = this;
        setTimeout(function () {
            _this.emitter.emit('reconnect', { message: 'Trying to reconnect' });
            _this.connect(fn);
        }, 5000);
    };
    SocketClient.prototype.on = function (event, fn) {
        this.emitter.on(event, fn);
    };
    SocketClient.prototype.connect = function (fn) {
        var _this = this;
        console.log('%cConnecting to fusebox HMR at ' + this.url, 'color: #237abe');
        setTimeout(function () {
            _this.client = new WebSocket(_this.url);
            _this.bindEvents(fn);
        }, 0);
    };
    SocketClient.prototype.close = function () {
        this.client.close();
    };
    SocketClient.prototype.send = function (eventName, data) {
        if (this.client.readyState === 1) {
            this.client.send(JSON.stringify({ event: eventName, data: data || {} }));
        }
    };
    SocketClient.prototype.error = function (data) {
        this.emitter.emit('error', data);
    };
    /** Wires up the socket client messages to be emitted on our event emitter */
    SocketClient.prototype.bindEvents = function (fn) {
        var _this = this;
        this.client.onopen = function (event) {
            console.log('%cConnected', 'color: #237abe');
            if (fn) {
                fn(_this);
            }
        };
        this.client.onerror = function (event) {
            _this.error({ reason: event.reason, message: 'Socket error' });
        };
        this.client.onclose = function (event) {
            _this.emitter.emit('close', { message: 'Socket closed' });
            if (event.code !== 1011) {
                _this.reconnect(fn);
            }
        };
        this.client.onmessage = function (event) {
            var data = event.data;
            if (data) {
                var item = JSON.parse(data);
                _this.emitter.emit(item.type, item.data);
                _this.emitter.emit('*', item);
            }
        };
    };
    return SocketClient;
}());
exports.SocketClient = SocketClient;

});
return ___scope___.entry = "index.js";
});
FuseBox.pkg("events", {}, function(___scope___){
___scope___.file("index.js", function(exports, require, module, __filename, __dirname){

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
if (FuseBox.isServer) {
    module.exports = global.require("events");
} else {
    function EventEmitter() {
        this._events = this._events || {};
        this._maxListeners = this._maxListeners || undefined;
    }
    module.exports = EventEmitter;

    // Backwards-compat with node 0.10.x
    EventEmitter.EventEmitter = EventEmitter;

    EventEmitter.prototype._events = undefined;
    EventEmitter.prototype._maxListeners = undefined;

    // By default EventEmitters will print a warning if more than 10 listeners are
    // added to it. This is a useful default which helps finding memory leaks.
    EventEmitter.defaultMaxListeners = 10;

    // Obviously not all Emitters should be limited to 10. This function allows
    // that to be increased. Set to zero for unlimited.
    EventEmitter.prototype.setMaxListeners = function(n) {
        if (!isNumber(n) || n < 0 || isNaN(n))
            throw TypeError("n must be a positive number");
        this._maxListeners = n;
        return this;
    };

    EventEmitter.prototype.emit = function(type) {
        var er, handler, len, args, i, listeners;

        if (!this._events)
            this._events = {};

        // If there is no 'error' event listener then throw.
        if (type === "error") {
            if (!this._events.error ||
                (isObject(this._events.error) && !this._events.error.length)) {
                er = arguments[1];
                if (er instanceof Error) {
                    throw er; // Unhandled 'error' event
                }
                throw TypeError("Uncaught, unspecified \"error\" event.");
            }
        }

        handler = this._events[type];

        if (isUndefined(handler))
            return false;

        if (isFunction(handler)) {
            switch (arguments.length) {
                // fast cases
                case 1:
                    handler.call(this);
                    break;
                case 2:
                    handler.call(this, arguments[1]);
                    break;
                case 3:
                    handler.call(this, arguments[1], arguments[2]);
                    break;
                    // slower
                default:
                    args = Array.prototype.slice.call(arguments, 1);
                    handler.apply(this, args);
            }
        } else if (isObject(handler)) {
            args = Array.prototype.slice.call(arguments, 1);
            listeners = handler.slice();
            len = listeners.length;
            for (i = 0; i < len; i++)
                listeners[i].apply(this, args);
        }

        return true;
    };

    EventEmitter.prototype.addListener = function(type, listener) {
        var m;

        if (!isFunction(listener))
            throw TypeError("listener must be a function");

        if (!this._events)
            this._events = {};

        // To avoid recursion in the case that type === "newListener"! Before
        // adding it to the listeners, first emit "newListener".
        if (this._events.newListener)
            this.emit("newListener", type,
                isFunction(listener.listener) ?
                listener.listener : listener);

        if (!this._events[type])
        // Optimize the case of one listener. Don't need the extra array object.
            this._events[type] = listener;
        else if (isObject(this._events[type]))
        // If we've already got an array, just append.
            this._events[type].push(listener);
        else
        // Adding the second element, need to change to array.
            this._events[type] = [this._events[type], listener];

        // Check for listener leak
        if (isObject(this._events[type]) && !this._events[type].warned) {
            if (!isUndefined(this._maxListeners)) {
                m = this._maxListeners;
            } else {
                m = EventEmitter.defaultMaxListeners;
            }

            if (m && m > 0 && this._events[type].length > m) {
                this._events[type].warned = true;
                console.error("(node) warning: possible EventEmitter memory " +
                    "leak detected. %d listeners added. " +
                    "Use emitter.setMaxListeners() to increase limit.",
                    this._events[type].length);
                if (typeof console.trace === "function") {
                    // not supported in IE 10
                    console.trace();
                }
            }
        }

        return this;
    };

    EventEmitter.prototype.on = EventEmitter.prototype.addListener;

    EventEmitter.prototype.once = function(type, listener) {
        if (!isFunction(listener))
            throw TypeError("listener must be a function");

        var fired = false;

        function g() {
            this.removeListener(type, g);

            if (!fired) {
                fired = true;
                listener.apply(this, arguments);
            }
        }

        g.listener = listener;
        this.on(type, g);

        return this;
    };

    // emits a 'removeListener' event iff the listener was removed
    EventEmitter.prototype.removeListener = function(type, listener) {
        var list, position, length, i;

        if (!isFunction(listener))
            throw TypeError("listener must be a function");

        if (!this._events || !this._events[type])
            return this;

        list = this._events[type];
        length = list.length;
        position = -1;

        if (list === listener ||
            (isFunction(list.listener) && list.listener === listener)) {
            delete this._events[type];
            if (this._events.removeListener)
                this.emit("removeListener", type, listener);

        } else if (isObject(list)) {
            for (i = length; i-- > 0;) {
                if (list[i] === listener ||
                    (list[i].listener && list[i].listener === listener)) {
                    position = i;
                    break;
                }
            }

            if (position < 0)
                return this;

            if (list.length === 1) {
                list.length = 0;
                delete this._events[type];
            } else {
                list.splice(position, 1);
            }

            if (this._events.removeListener)
                this.emit("removeListener", type, listener);
        }

        return this;
    };

    EventEmitter.prototype.removeAllListeners = function(type) {
        var key, listeners;

        if (!this._events)
            return this;

        // not listening for removeListener, no need to emit
        if (!this._events.removeListener) {
            if (arguments.length === 0)
                this._events = {};
            else if (this._events[type])
                delete this._events[type];
            return this;
        }

        // emit removeListener for all listeners on all events
        if (arguments.length === 0) {
            for (key in this._events) {
                if (key === "removeListener") continue;
                this.removeAllListeners(key);
            }
            this.removeAllListeners("removeListener");
            this._events = {};
            return this;
        }

        listeners = this._events[type];

        if (isFunction(listeners)) {
            this.removeListener(type, listeners);
        } else if (listeners) {
            // LIFO order
            while (listeners.length)
                this.removeListener(type, listeners[listeners.length - 1]);
        }
        delete this._events[type];

        return this;
    };

    EventEmitter.prototype.listeners = function(type) {
        var ret;
        if (!this._events || !this._events[type])
            ret = [];
        else if (isFunction(this._events[type]))
            ret = [this._events[type]];
        else
            ret = this._events[type].slice();
        return ret;
    };

    EventEmitter.prototype.listenerCount = function(type) {
        if (this._events) {
            var evlistener = this._events[type];

            if (isFunction(evlistener))
                return 1;
            else if (evlistener)
                return evlistener.length;
        }
        return 0;
    };

    EventEmitter.listenerCount = function(emitter, type) {
        return emitter.listenerCount(type);
    };

    function isFunction(arg) {
        return typeof arg === "function";
    }

    function isNumber(arg) {
        return typeof arg === "number";
    }

    function isObject(arg) {
        return typeof arg === "object" && arg !== null;
    }

    function isUndefined(arg) {
        return arg === void 0;
    }
}

});
return ___scope___.entry = "index.js";
});
FuseBox.import("fusebox-hot-reload").connect(3000, "", false)
FuseBox.target = "browser"

FuseBox.import("default/index.jsx");
FuseBox.main("default/index.jsx");
})
(FuseBox)
//# sourceMappingURL=app.js.map