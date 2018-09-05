(function($fsx){
// default/index.jsx
$fsx.f[42] = function(module,exports){
Object.defineProperty(exports, '__esModule', { value: true });
console.log('process.env.NODE_ENV:', 'production');
var React = $fsx.r(0);
var ReactDOM = $fsx.r(21);
var App_1 = $fsx.r(43);
var serviceWorker = $fsx.r(53);
$fsx.r(38);
$fsx.r(40);
$fsx.r(41);
$fsx.r(54);
$fsx.r(55);
$fsx.r(56);
$fsx.r(57);
$fsx.r(58);
$fsx.r(59);
ReactDOM.render(React.createElement(App_1.default, null), document.getElementById('root'));
serviceWorker.unregister();
}
// default/App.jsx
$fsx.f[43] = function(module,exports){
Object.defineProperty(exports, '__esModule', { value: true });
var tslib_1 = $fsx.r(24);
var React = $fsx.r(0);
var Header_1 = $fsx.r(44);
var Main_1 = $fsx.r(45);
var Footer_1 = $fsx.r(52);
var App = function (_super) {
    tslib_1.__extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return React.createElement('div', { className: 'wrapper' }, React.createElement(Header_1.default, null), React.createElement(Main_1.default, null), React.createElement(Footer_1.default, null));
    };
    return App;
}(React.Component);
exports.default = App;
}
// default/components/Header.jsx
$fsx.f[44] = function(module,exports){
Object.defineProperty(exports, '__esModule', { value: true });
var tslib_1 = $fsx.r(24);
var React = $fsx.r(0);
var fuse_react_1 = $fsx.r(25);
var Header = function (_super) {
    tslib_1.__extends(Header, _super);
    function Header(props) {
        var _this = _super.call(this, props) || this;
        _this.activate = _this.activate.bind(_this);
        _this.state = { activeItem: 'HOME' };
        return _this;
    }
    Header.prototype.activate = function (item) {
        this.setState({ activeItem: item });
    };
    Header.prototype.render = function () {
        return React.createElement('nav', { className: 'nav' }, React.createElement('ul', null, React.createElement('li', null, React.createElement(fuse_react_1.Link, {
            className: this.state.activeItem === 'HOME' ? 'active' : '',
            onClick: this.activate.bind(this, 'HOME'),
            to: '/'
        }, 'HOME')), React.createElement('li', null, React.createElement(fuse_react_1.Link, {
            className: this.state.activeItem === 'SERVICES' ? 'active' : '',
            onClick: this.activate.bind(this, 'SERVICES'),
            to: '/services'
        }, 'SERVICES')), React.createElement('li', null, React.createElement(fuse_react_1.Link, {
            className: this.state.activeItem === 'WORKSHOPS' ? 'active' : '',
            onClick: this.activate.bind(this, 'WORKSHOPS'),
            to: '/workshop-preregistration'
        }, 'WORKSHOPS')), React.createElement('li', null, React.createElement(fuse_react_1.Link, {
            className: this.state.activeItem === 'RESSOURCES' ? 'active' : '',
            onClick: this.activate.bind(this, 'RESSOURCES'),
            to: '/ressources'
        }, 'RESSOURCES')), React.createElement('li', null, React.createElement(fuse_react_1.Link, {
            className: this.state.activeItem === 'ABOUT' ? 'active' : '',
            onClick: this.activate.bind(this, 'ABOUT'),
            to: '/about'
        }, 'ABOUT'))));
    };
    return Header;
}(React.Component);
exports.default = Header;
}
// default/components/Main.jsx
$fsx.f[45] = function(module,exports){
Object.defineProperty(exports, '__esModule', { value: true });
var tslib_1 = $fsx.r(24);
var React = $fsx.r(0);
var Home_1 = $fsx.r(46);
var Services_1 = $fsx.r(47);
var WorkshopPreRegistration_1 = $fsx.r(48);
var Ressources_1 = $fsx.r(50);
var About_1 = $fsx.r(51);
var fuse_react_1 = $fsx.r(25);
var Main = function (_super) {
    tslib_1.__extends(Main, _super);
    function Main() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Main.prototype.render = function () {
        return React.createElement('main', null, React.createElement(fuse_react_1.Switch, null, React.createElement(fuse_react_1.Route, {
            exact: true,
            path: '/',
            component: Home_1.default
        }), React.createElement(fuse_react_1.Route, {
            exact: true,
            path: '/services',
            component: Services_1.default
        }), React.createElement(fuse_react_1.Route, {
            exact: true,
            path: '/workshop-preregistration',
            component: WorkshopPreRegistration_1.default
        }), React.createElement(fuse_react_1.Route, {
            exact: true,
            path: '/ressources',
            component: Ressources_1.default
        }), React.createElement(fuse_react_1.Route, {
            exact: true,
            path: '/about',
            component: About_1.default
        })));
    };
    return Main;
}(React.Component);
exports.default = Main;
}
// default/pages/Home.jsx
$fsx.f[46] = function(module,exports){
Object.defineProperty(exports, '__esModule', { value: true });
var tslib_1 = $fsx.r(24);
var React = $fsx.r(0);
var Home = function (_super) {
    tslib_1.__extends(Home, _super);
    function Home() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Home.prototype.render = function () {
        return React.createElement('div', { id: 'homePage' }, React.createElement('div', {
            id: 'hero-homePage',
            className: 'hero'
        }, React.createElement('h1', null, 'BITCOIN STUDIO #1'), React.createElement('p', null, 'Expertise on blockchain tech, particularly Bitcoin. A network of real experts, design studio, web/interface that blah blah blah. In all seriousness, we can pretty much write whatever we want here and chances are, nobody will notice. The itsy bitsy spider went up the water spout. Down came the rain, and washed the spider out. See what we mean? Scroll down and find out why this happens...')), React.createElement('section', { id: 'services-homePage' }, React.createElement('div', { className: 'hr' }, React.createElement('hr', null)), React.createElement('h2', null, 'THE BEST BITCOIN STUDIO'), React.createElement('p', null, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consequuntur dicta expedita magni minus numquam perspiciatis quod sint sunt vero? Laboriosam non pariatur repellat repellendus similique. Inventore nemo quidem vitae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consequuntur dicta expedita magni minus numquam perspiciatis quod sint sunt vero? Laboriosam non pariatur repellat repellendus similique. Inventore nemo quidem vitae. ')), React.createElement('section', { id: 'stuff-homePage' }, React.createElement('div', { className: 'hr' }, React.createElement('hr', null)), React.createElement('h2', null, 'WHEN THE WEB MEETS BITCOIN'), React.createElement('p', null, 'They just scan it. They glance at it in the same way you glance at advertisements in a magazine. Don\u2019t believe us? Just think about this for a second. Think about your own browsing behavior. How many times have you Googled a website, clicked on one of the first results, waited for the page to load, scrolled down, scrolled back up and then gone back to the results page? We\u2019re guessing more than once. Ten years ago you were wondering whether you even needed a website. Nowadays the question is: What can you do to your website so it will stop being invisible to your potential customers? You need to be authentic \u2014 you can\u2019t fake it anymore. The new consumer is choosier and more knowledgeable than ever before. They just won\u2019t consume brands, nor spend time on websites that don\u2019t ooze authenticity, passion and quality. Why should they? They\u2019ve got so many options to choose from and so little time to make their choices. This is where we come in. Through a streamlined, five-milestone process we will PLAN, DESIGN, BUILD, LAUNCH and MANAGE your professional and high-impact online presence for your company.')), React.createElement('section', { id: 'workshops-homePage' }, React.createElement('div', { className: 'hr' }, React.createElement('hr', null)), React.createElement('h2', null, 'WORD CLASS WORKSHOPS'), React.createElement('p', null, React.createElement('span', null, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus commodi, deleniti dicta eos error eum fugit, officiis quaerat quas quibusdam provident?'), React.createElement('span', null, 'Alias culpa magni obcaecati tempore. Alias aspernatur incidunt nam quas reprehenderit ut voluptatum. Ab adipisci aut  magni modi molestias nam perferendis quibusdam tenetur, voluptatibus.'), React.createElement('span', null, 'Adipisci aliquam, animi beatae cum delectus deleniti dignissimos exercitationem fugit ipsam iure laborum  officia sint velit veniam. Cumque debitis eius est ipsam itaque iusto molestiae mollitia rem!'), React.createElement('span', null, 'Architecto corporis deleniti dolorum eos esse est eveniet, ex exercitationem fugit laboriosam magnam. Itaque maxime nobis odio quasi, quia repellat rerum! Illo.')), React.createElement('ul', null, React.createElement('li', null, 'Bitcoin workshops', React.createElement('ul', null, React.createElement('li', null, 'Practical: Bitcoin workshop 1 day'), React.createElement('li', null, 'Essentials: Bitcoin workshop 2 days'), React.createElement('li', null, 'In-depth: Bitcoin workshop 5 days'))), React.createElement('li', null, 'Consulting for companies'), React.createElement('li', null, 'Private consulting for individuals'), React.createElement('li', null, 'Custom Bitcoin development (layer 1, layer 2)'), React.createElement('li', null, 'Bitcoin server / node installation / Node as a service'))), React.createElement('section', { id: 'call2action-homePage' }, React.createElement('div', { id: 'call2action_ribbon' }, React.createElement('h1', null, 'STOP BEING A FOLLOWER'), React.createElement('p', null, 'Are you tired of the financial system? Let\u2019s talk for real then.')), React.createElement('div', {
            id: 'call2action_ribbon_prop',
            className: ''
        }, React.createElement('div', { className: 'ribbon_prop_1' }, React.createElement('div', { className: 'inside' }, React.createElement('span', null, React.createElement('a', {
            href: 'mailto:hello@bitcoin-studio.co',
            className: 'clickhere'
        }, 'Click Here to')), React.createElement('span', null, React.createElement('a', {
            href: 'mailto:hello@bitcoin-studio.co',
            className: 'request'
        }, 'REQUEST')), React.createElement('span', null, React.createElement('a', {
            href: 'mailto:hello@bitcoin-studio.co',
            className: 'proposal'
        }, 'a Proposal')))), React.createElement('div', { className: 'ribbon_prop_2' }, React.createElement('div', { className: 'inside' }, React.createElement('span', null, React.createElement('a', {
            href: 'mailto:hello@bitcoin-studio.co',
            className: 'clickhere'
        }, 'Click Here to')), React.createElement('span', null, React.createElement('a', {
            href: 'mailto:hello@bitcoin-studio.co',
            className: 'request'
        }, 'REQUEST')), React.createElement('span', null, React.createElement('a', {
            href: 'mailto:hello@bitcoin-studio.co',
            className: 'proposal'
        }, 'a Proposal')))))));
    };
    return Home;
}(React.Component);
exports.default = Home;
}
// default/pages/Services.jsx
$fsx.f[47] = function(module,exports){
Object.defineProperty(exports, '__esModule', { value: true });
var tslib_1 = $fsx.r(24);
var React = $fsx.r(0);
var Services = function (_super) {
    tslib_1.__extends(Services, _super);
    function Services() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Services.prototype.render = function () {
        return React.createElement('div', { id: 'servicesPage' }, React.createElement('div', {
            className: 'hero',
            id: 'hero-servicesPage'
        }, React.createElement('h1', null, 'OUR SERVICES'), React.createElement('p', null, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eius illum ipsum, itaque laboriosam magni natus quasi quisquam quos rerum similique sint ut, veritatis voluptas, voluptatem! Aut dolorem inventore ipsum?')), React.createElement('section', { id: 'workshops-servicesPage' }, React.createElement('div', { className: 'hr' }, React.createElement('hr', null)), React.createElement('h2', null, 'WORKSHOPS'), React.createElement('p', null, 'Practical: Bitcoin workshop 1 day'), React.createElement('p', null, 'Essentials: Bitcoin workshop 2 days'), React.createElement('p', null, 'In-depth: Bitcoin workshop 5 days'), React.createElement('p', null, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consequuntur dicta expedita magni minus numquam perspiciatis quod sint sunt vero? Laboriosam non pariatur repellat repellendus similique. Inventore nemo quidem vitae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consequuntur dicta expedita magni minus numquam perspiciatis quod sint sunt vero? Laboriosam non pariatur repellat repellendus similique. Inventore nemo quidem vitae. ')), React.createElement('section', { id: 'consultingForCompanies-servicesPage' }, React.createElement('div', { className: 'hr' }, React.createElement('hr', null)), React.createElement('h2', null, 'CONSULTING & DEVELOPMENT FOR COMPANIES'), React.createElement('p', null, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consequuntur dicta expedita magni minus numquam perspiciatis quod sint sunt vero? Laboriosam non pariatur repellat repellendus similique. Inventore nemo quidem vitae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consequuntur dicta expedita magni minus numquam perspiciatis quod sint sunt vero? Laboriosam non pariatur repellat repellendus similique. Inventore nemo quidem vitae. '), React.createElement('p', null, 'Custom Bitcoin development (layer 1, layer 2)'), React.createElement('ul', null, React.createElement('li', null, 'Choose a technology for your need'), React.createElement('li', null, 'Bitcoin: architecture, custom development, complex transaction, scripts, \u2026'), React.createElement('li', null, 'System architecture'), React.createElement('li', null, 'Node installation (Bitcoin, LN, BTCPay, Tor) / System administration'), React.createElement('li', null, 'Node as a service'))), React.createElement('section', { id: 'consultingForIndividuals-servicesPage' }, React.createElement('div', { className: 'hr' }, React.createElement('hr', null)), React.createElement('h2', null, 'PRIVATE CONSULTING & DEVELOPMENT FOR INDIVIDUALS'), React.createElement('p', null, 'Custom Bitcoin development (layer 1, layer 2)'), React.createElement('p', null, 'Bitcoin server/node installation'), React.createElement('p', null, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consequuntur dicta expedita magni minus numquam perspiciatis quod sint sunt vero? Laboriosam non pariatur repellat repellendus similique. Inventore nemo quidem vitae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consequuntur dicta expedita magni minus numquam perspiciatis quod sint sunt vero? Laboriosam non pariatur repellat repellendus similique. Inventore nemo quidem vitae. '), React.createElement('ul', null, React.createElement('li', null, 'Privately or in group'), React.createElement('li', null, 'Learn wallet/key management best practices'), React.createElement('li', null, 'General help, 1 day training'), React.createElement('li', null, 'Recover coins of bitcoin forks'))));
    };
    return Services;
}(React.Component);
exports.default = Services;
}
// default/pages/WorkshopPreRegistration.jsx
$fsx.f[48] = function(module,exports){
Object.defineProperty(exports, '__esModule', { value: true });
var tslib_1 = $fsx.r(24);
var React = $fsx.r(0);
var bitcoin_essentials_png_1 = $fsx.r(49);
var WorkshopPreRegistration = function (_super) {
    tslib_1.__extends(WorkshopPreRegistration, _super);
    function WorkshopPreRegistration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WorkshopPreRegistration.prototype.render = function () {
        return React.createElement('div', { id: 'workshopPage' }, React.createElement('div', {
            id: 'hero-workshopPage',
            className: 'hero'
        }, React.createElement('h1', null, 'WORKSHOP ', React.createElement('br', null), ' PRE-REGISTRATION'), React.createElement('p', null, 'Interested in Bitcoin and blockchain? Do you wonder how it works? Let\u2019s study the first, most mature, secure and decentralized blockchain that has given birth to a whole new industry! Stéphane Roche/D10eConsulting offer you a 15 hours immersive course on Bitcoin (Practical, Essentials, In-depth)'), React.createElement('p', null, ' If you plan to work anywhere in the blockchain industry, mastering Bitcoin is an essential skill. It is the first of its kind, which means the most attacked and therefore the most robust blockchain. Main Bitcoin Core developers are highly experienced, the ecosystem is big, it has the biggest market capitalization, etc. More than 75% of the blockchains today are, directly or indirectly, software forks of Bitcoin (Litecoin, Dash, Zcash, Decred, Komodo, Factom, Particl, Dogecoin, and thousands of others). Working in the field but skipping Bitcoin is in our view irresponsible. Bitcoin is also a great start because it has the simplest protocol design, with a non-Turing-complete smart-contract functionality. Finally, Lightning Network, the new micropayment feature, should bring tremendous new business opportunities.'), React.createElement('p', null, '25% off'), React.createElement('p', null, 'Sign Up!'), React.createElement('p', null, '3 tickets for 2'), React.createElement('p', null, 'First session: 10 people'), React.createElement('p', null, 'Get refunded at any time')), React.createElement('img', {
            id: 'workshopFlyer-workshopPage',
            src: bitcoin_essentials_png_1.default,
            alt: 'bitcoin essential flyer'
        }), React.createElement('section', { id: 'offers-workshopPage' }, React.createElement('section', { className: 'practical-offer-workshopPage' }, React.createElement('div', { className: 'hr40pc' }, React.createElement('hr', null)), React.createElement('h2', null, 'Practical Bitcoin workshop 1 day'), React.createElement('h3', null, 'Price'), React.createElement('p', null, '100\u20AC inc. VAT. Satisfied or refunded'), React.createElement('h3', null, 'Goals'), React.createElement('p', null, 'Focused on practical use of Bitcoin. Important things to know. Knowing where to search'), React.createElement('h3', null, 'Public and Prerequisite'), React.createElement('p', null, 'This workshop is a first hands-on Bitcoin. Accessible by everyone'), React.createElement('h3', null, 'Programme'), React.createElement('p', null, 'Wallet, key management, transaction, fees, Lightning Network instant payment. Q&A')), React.createElement('section', { className: 'essentials-offer-workshopPage' }, React.createElement('div', { className: 'hr40pc' }, React.createElement('hr', null)), React.createElement('h2', null, 'Essentials Bitcoin workshop 2 days'), React.createElement('h3', null, 'Price'), React.createElement('p', null, '369\u20AC inc. VAT. Satisfied or refunded'), React.createElement('h3', null, 'Goals'), React.createElement('p', null, 'Starts your Bitcoin journey on solid basis'), React.createElement('h3', null, 'Public and Prerequisite'), React.createElement('p', null, 'This workshop is intended to curious people wanting to better understand Bitcoin and blockchain technology. This workshop is technical but should stay accessible as long as you have a basic understanding of computer science. It is intended to all individuals wishing to deepen their knowledge of Bitcoin and blockchain technology, either you are a developer, product manager, attorney, designer, builder, entrepreneur, etc.'), React.createElement('h3', null, 'Programme'), React.createElement('p', null, 'Focus on the essentials')), React.createElement('section', { className: 'indepth-offer-workshopPage' }, React.createElement('div', { className: 'hr40pc' }, React.createElement('hr', null)), React.createElement('h2', null, 'In-depth Bitcoin workshop 5 days'), React.createElement('h3', null, 'Price'), React.createElement('p', null, '500\u20AC inc. VAT. Satisfied or refunded'), React.createElement('h3', null, 'Goals'), React.createElement('p', null, 'In this course we will study the Bitcoin protocol quite in-depth and various other aspects like its historical context, the broader ecosystem, the socio-economic implications, the governance of open source decentralized systems, etc. You will also learn all the specific concepts and vocabulary used in this technology. Designed with an academic approach, we will alternate between theory and code practice (command line, Javascript, Python). This training will allow you to deeply understand and evaluate blockchain protocols and will provide you a solid basis to work on Bitcoin or on any blockchain.'), React.createElement('p', null, 'Bitcoin In-depth is primarily intended to developers. Together we will explore the scripting language and Lightning Network. Focusing on the new Segregated Witness transaction format, we will learn how to construct regular transactions, P2WSH smart contracts, multi-signatures and timelock transactions; composing raw transactions and using Javascript libraries. Attendees are expected to master the main aspects of Bitcoin, otherwise it is recommended to take the Bitcoin Essentials course before. Also, in order to make sure that this course suits you well, you will have a small interview with our team.'), React.createElement('p', null, 'After this course, you\u2019ll know everything you need to be able to separate fact from fiction when reading claims about Bitcoin and other cryptocurrencies. You\u2019ll have the conceptual foundations you need, and you\u2019ll be able to integrate ideas from Bitcoin in your own projects.'), React.createElement('h3', null, 'Public and Prerequisite'), React.createElement('p', null, 'This course is intended to individuals that needs a deep-dive into Bitcoin protocols. Ideal if you already have a project, a business idea, or simply the strong desire to learn Bitcoin seriously.'), React.createElement('h3', null, 'Programme'), React.createElement('ul', null, 'General background', React.createElement('li', null, 'Emergence of cryptography'), React.createElement('li', null, 'The Cypherpunks movement'), React.createElement('li', null, 'Internet'), React.createElement('li', null, 'Blockchain ecosystem')), React.createElement('ul', null, 'Bitcoin background', React.createElement('li', null, 'Project history'), React.createElement('li', null, 'Block size debate'), React.createElement('li', null, 'Main Core developers'), React.createElement('li', null, 'Ecosystem'), React.createElement('li', null, 'Governance model')), React.createElement('ul', null, 'Cryptography 101', React.createElement('li', null, 'General cryptography concepts'), React.createElement('li', null, 'Symmetrical and asymmetrical encryption'), React.createElement('li', null, 'Digital signatures'), React.createElement('li', null, 'Hash functions'), React.createElement('li', null, 'Merkle trees, \u2026')), React.createElement('ul', null, 'P2P network', React.createElement('li', null, 'Topology'), React.createElement('li', null, 'Different types of node')), React.createElement('ul', null, 'Mining, consensus and forks', React.createElement('li', null, 'Proof of Work'), React.createElement('li', null, 'Blockchain mechanisms')), React.createElement('ul', null, 'Wallets, keys and addresses', React.createElement('li', null, 'Elliptic curve digital signature algorithm (ECDSA)'), React.createElement('li', null, 'Bitcoin address'), React.createElement('li', null, 'HD wallets'), React.createElement('li', null, 'Mnemonic backup')), React.createElement('ul', null, 'Transactions', React.createElement('li', null, 'Structure (input, output, witness)'), React.createElement('li', null, 'Signing and verification'), React.createElement('li', null, 'Different types (regular, smart contracts)'), React.createElement('li', null, 'Different versions (legacy, Segwit nested in legacy, native Segwit)'), React.createElement('li', null, 'Data recording output (colored coins)')), React.createElement('ul', null, 'Advanced scripting and transactions', React.createElement('li', null, 'Main language opcodes'), React.createElement('li', null, 'P2WSH smart contracts'), React.createElement('li', null, 'Multi-signatures'), React.createElement('li', null, 'Timelocks'), React.createElement('li', null, 'Payment channels (Lightning Network)')))));
    };
    return WorkshopPreRegistration;
}(React.Component);
exports.default = WorkshopPreRegistration;
}
// default/img/bitcoin_essentials.png
$fsx.f[49] = function(module,exports){
}
// default/pages/Ressources.jsx
$fsx.f[50] = function(module,exports){
Object.defineProperty(exports, '__esModule', { value: true });
var tslib_1 = $fsx.r(24);
var React = $fsx.r(0);
var Ressources = function (_super) {
    tslib_1.__extends(Ressources, _super);
    function Ressources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Ressources.prototype.render = function () {
        return React.createElement('div', { id: 'ressourcesPage' }, React.createElement('div', {
            className: 'hero',
            id: 'hero-ressourcesPage'
        }, React.createElement('h1', null, 'Ressources'), React.createElement('p', null, 'Workshop slides - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequatur delectus doloremque eos mollitia, nihil sint velit. Aspernatur fuga iste labore perferendis quasi rem! A delectus enim ipsum modi quam.'), React.createElement('p', null, 'Keys, wallet, addresses, Consensus, mining, forks, All about transactions (legacy and segwit format)')), React.createElement('div', { id: 'hr-slides-ressourcesPage' }, React.createElement('div', { className: 'hr' }, React.createElement('hr', null))), React.createElement('section', { id: 'slides-ressourcesPage' }, React.createElement('h2', null, 'BITCOIN TRAININGS SLIDES'), React.createElement('div', { className: 'slideItemContainer2' }, React.createElement('div', { className: 'slideItemContainer' }, React.createElement('object', {
            className: 'slideItem',
            type: 'application/pdf',
            data: 'workshopSlides/Bitcoin_forks_history_S_Roche.pdf'
        })), React.createElement('button', null, React.createElement('a', {
            href: 'workshopSlides/Bitcoin_forks_history_S_Roche.pdf',
            download: true
        }, 'DOWNLOAD'))), React.createElement('div', { className: 'slideItemContainer2' }, React.createElement('div', { className: 'slideItemContainer' }, React.createElement('object', {
            className: 'slideItem',
            type: 'application/pdf',
            data: 'workshopSlides/Bitcoin_keys_addresses_wallets_S_Roche.pdf'
        })), React.createElement('button', null, React.createElement('a', {
            href: 'workshopSlides/Bitcoin_keys_addresses_wallets_S_Roche.pdf',
            download: true
        }, 'DOWNLOAD'))), React.createElement('div', { className: 'slideItemContainer2' }, React.createElement('div', { className: 'slideItemContainer' }, React.createElement('object', {
            className: 'slideItem',
            type: 'application/pdf',
            data: 'workshopSlides/Mining_consensus_forks_S_Roche.pdf'
        })), React.createElement('button', null, React.createElement('a', {
            href: 'workshopSlides/Mining_consensus_forks_S_Roche.pdf',
            download: true
        }, 'DOWNLOAD'))), React.createElement('div', { className: 'slideItemContainer2' }, React.createElement('div', { className: 'slideItemContainer' }, React.createElement('object', {
            className: 'slideItem',
            type: 'application/pdf',
            data: 'workshopSlides/Next_challenges_of_Bitcoin_S_Roche.pdf'
        })), React.createElement('button', null, React.createElement('a', {
            href: 'workshopSlides/Next_challenges_of_Bitcoin_S_Roche.pdf',
            download: true
        }, 'DOWNLOAD'))), React.createElement('div', { className: 'slideItemContainer2' }, React.createElement('div', { className: 'slideItemContainer' }, React.createElement('object', {
            className: 'slideItem',
            type: 'application/pdf',
            data: 'workshopSlides/Bitcoin_transaction_S_Roche.pdf'
        })), React.createElement('button', null, React.createElement('a', {
            href: 'workshopSlides/Bitcoin_transaction_S_Roche.pdf',
            download: true
        }, 'DOWNLOAD'))), React.createElement('div', { className: 'slideItemContainer2' }, React.createElement('div', { className: 'slideItemContainer' }, React.createElement('object', {
            className: 'slideItem',
            type: 'application/pdf',
            data: 'workshopSlides/TheBeginningOfYourBlockchainJourney_S_Roche.pdf'
        })), React.createElement('button', null, React.createElement('a', {
            href: 'workshopSlides/TheBeginningOfYourBlockchainJourney_S_Roche.pdf',
            download: true
        }, 'DOWNLOAD'))), React.createElement('div', { className: 'slideItemContainer2 fakeItemContainer' }, React.createElement('div', { className: 'slideItemContainer' }, React.createElement('object', {
            className: 'slideItem fakeItem',
            data: 'workshopSlides/slide_fake.png'
        })), React.createElement('button', null, React.createElement('a', null, 'DOWNLOAD'))), React.createElement('div', { className: 'slideItemContainer2 fakeItemContainer' }, React.createElement('div', { className: 'slideItemContainer' }, React.createElement('object', {
            className: 'slideItem fakeItem',
            data: 'workshopSlides/slide_fake.png'
        })), React.createElement('button', null, React.createElement('a', null, 'DOWNLOAD')))));
    };
    return Ressources;
}(React.Component);
exports.default = Ressources;
}
// default/pages/About.jsx
$fsx.f[51] = function(module,exports){
Object.defineProperty(exports, '__esModule', { value: true });
var tslib_1 = $fsx.r(24);
var React = $fsx.r(0);
var About = function (_super) {
    tslib_1.__extends(About, _super);
    function About() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    About.prototype.render = function () {
        return React.createElement('div', { id: 'aboutPage' }, React.createElement('div', {
            className: 'hero',
            id: 'hero-aboutPage'
        }, React.createElement('h1', null, 'About'), React.createElement('p', null, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid autem blanditiis delectus deserunt doloribus ducimus ea earum error explicabo harum, iusto nihil omnis optio quia sunt voluptates? Necessitatibus, repudiandae.')), React.createElement('section', { id: 'description-aboutPage' }, React.createElement('p', null, 'Over the past years, I have dedicated myself to P2P decentralized consensus systems, aka blockchain, (mainly Bitcoin and Ethereum) and became a strong advocate of crypto-anarchy. I highly appreciate working in a field at the crossroad of a multitude of varying disciplines, like computer science, economics, politics, game theory, cryptography, ... I founded D10e Consulting to offer blockchain technical trainings (Bitcoin, Ethereum and a variety of related topics) and application development on Bitcoin and Ethereum.'), React.createElement('div', null, React.createElement('ul', null, React.createElement('li', null, 'I start working on Bitcoin in 2015 at the Hardware wallet company Ledger.'), React.createElement('li', null, 'Worked on Ethereum in 2016 - mid-2017'), React.createElement('li', null, 'Co-found the french non-profit organization Asseth to pomote Ethereum. Now the biggest non-profit across Europe. Did several talks, and did the website asseth.fr'), React.createElement('li', null, 'Research work on the UI of dao1901, using Web3 and state of the art Javascript librairies (React, Redux, Redux-sagas)'), React.createElement('li', null, 'Dether.io. Heavily involved in the making of the smart contracts and Javascript tests'), React.createElement('li', null, 'Bitcoin Workshops (Practical, Essentials, In-depth)'), React.createElement('li', null, 'Bitcoin development'))), React.createElement('p', null, 'Contact form')));
    };
    return About;
}(React.Component);
exports.default = About;
}
// default/components/Footer.jsx
$fsx.f[52] = function(module,exports){
Object.defineProperty(exports, '__esModule', { value: true });
var tslib_1 = $fsx.r(24);
var React = $fsx.r(0);
var Footer = function (_super) {
    tslib_1.__extends(Footer, _super);
    function Footer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Footer.prototype.render = function () {
        return React.createElement('footer', { className: 'footer' }, React.createElement('div', { id: 'services_footer' }, React.createElement('h2', null, 'SERVICES'), React.createElement('nav', null, React.createElement('ul', null, React.createElement('li', null, React.createElement('a', { href: 'http://teixido.co/' }, 'Homepage')), React.createElement('li', null, React.createElement('a', { href: 'http://teixido.co/studio' }, 'About our Studio')), React.createElement('li', null, React.createElement('a', { href: 'http://teixido.co/work' }, 'Selected Works')), React.createElement('li', null, React.createElement('a', { href: 'mailto:hello@teixido.co' }, 'Contact Information'))))), React.createElement('div', { id: 'connect' }, React.createElement('h2', null, 'CONNECT'), React.createElement('nav', null, React.createElement('ul', null, React.createElement('li', null, React.createElement('a', { href: 'mailto:hello@teixido.co' }, 'Email us at hello@bitcoin-studio-one.co')), React.createElement('li', null, React.createElement('a', {
            target: '_blank',
            href: 'http://twitter.com/Teixido'
        }, 'Follow @JanakaSteph on Twitter')), React.createElement('li', null, React.createElement('a', {
            target: '_blank',
            href: 'http://www.flickr.com/photos/juanmateixido'
        }, 'Flickr Stream')), React.createElement('li', null, React.createElement('a', {
            target: '_blank',
            href: 'mailto:rstephane@teixido.co'
        }, 'Work with Us'))))));
    };
    return Footer;
}(React.Component);
exports.default = Footer;
}
// default/serviceWorker.js
$fsx.f[53] = function(module,exports){
Object.defineProperty(exports, '__esModule', { value: true });
var isLocalhost = Boolean(window.location.hostname === 'localhost' || window.location.hostname === '[::1]' || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
    if ('production' === 'production' && 'serviceWorker' in navigator) {
        var publicUrl = new URL(undefined, window.location);
        if (publicUrl.origin !== window.location.origin) {
            return;
        }
        window.addEventListener('load', function () {
            var swUrl = undefined + '/service-worker.js';
            if (isLocalhost) {
                checkValidServiceWorker(swUrl, config);
                navigator.serviceWorker.ready.then(function () {
                    console.log('This web app is being served cache-first by a service ' + 'worker. To learn more, visit https://goo.gl/SC7cgQ');
                });
            } else {
                registerValidSW(swUrl, config);
            }
        });
    }
}
exports.register = register;
function registerValidSW(swUrl, config) {
    navigator.serviceWorker.register(swUrl).then(function (registration) {
        registration.onupdatefound = function () {
            var installingWorker = registration.installing;
            installingWorker.onstatechange = function () {
                if (installingWorker.state === 'installed') {
                    if (navigator.serviceWorker.controller) {
                        console.log('New content is available; please refresh.');
                        if (config.onUpdate) {
                            config.onUpdate(registration);
                        }
                    } else {
                        console.log('Content is cached for offline use.');
                        if (config.onSuccess) {
                            config.onSuccess(registration);
                        }
                    }
                }
            };
        };
    }).catch(function (error) {
        console.error('Error during service worker registration:', error);
    });
}
function checkValidServiceWorker(swUrl, config) {
    fetch(swUrl).then(function (response) {
        if (response.status === 404 || response.headers.get('content-type').indexOf('javascript') === -1) {
            navigator.serviceWorker.ready.then(function (registration) {
                registration.unregister().then(function () {
                    window.location.reload();
                });
            });
        } else {
            registerValidSW(swUrl, config);
        }
    }).catch(function () {
        console.log('No internet connection found. App is running in offline mode.');
    });
}
function unregister() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then(function (registration) {
            registration.unregister();
        });
    }
}
exports.unregister = unregister;
}
// default/stylesheets/global.css
$fsx.f[54] = function(){
$fsx.r(39)('stylesheets/global.css', '/**\n    Polices\n\n    TrumpGothicEastMedium => Pathway Gothic One  (headers)\n\n    republic-web => roboto slab (normal text)\n\n    pill-gothic => roboto condensed (bold text)\n\n\n\n    CSS Grid\n    .wrapper => 5 cols (1, 2, 6, 2, 1)  nav, main, footer\n\n    main > div => 3 cols (2, 6, 2)\n\n\n    Colors\n    primary: #39444a;\n    secondary: #fffff;\n */\n\nbody {\n    margin: 0;\n    padding: 0;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    background: #e4e8e9 url(/assets/background.jpg) repeat left top;\n    color: #39444a;\n    line-height: 150%;\n}\n\n.wrapper {\n    display:grid;\n    grid-template-columns: 1fr 2fr 6fr 2fr 1fr;\n    grid-template-areas:\n            ".     .        nav     .       ."\n            ".     main     main    main    ."\n            ".     footer   footer  footer  .";\n}\n\n\n\n/**\n    Main\n */\nmain {\n    grid-area: main;\n}\nmain > div {\n    display: grid;\n    grid-template-columns: 2fr 6fr 2fr;\n\n    font-family: "Roboto Slab",serif;\n    font-size: 14px;\n    letter-spacing: 0.3px;\n}\n\n/**\n    Hero\n */\n.hero h1 {\n    font-family: \'Pathway Gothic One\', Helvetica, Arial, "Trebuchet MS", sans-serif;\n    font-size: 8em;\n    font-weight: bold;\n}\n.hero p {\n    font-family: "Roboto Condensed", sans-serif;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 20px;\n    line-height: 160%;\n    margin-bottom: 30px;\n}\n\n\n/**\n    Lines\n */\n.hr {\n    clear: both;\n    height: 6px;\n    background: url(/assets/border.png) top repeat-x;\n    width: 100%;\n}\n.hr40pc {\n    clear: both;\n    height: 6px;\n    background: url(/assets/border.png) top repeat-x;\n    width: 40%;\n}\n\nh1, h2, h3 {\n    font-family: \'Pathway Gothic One\', Helvetica, Arial, "Trebuchet MS", sans-serif;\n    letter-spacing: 4px;\n    text-transform: uppercase;\n}\nh1 { font-size: 8em;}\nh2 { font-size: 2.75em;}\nh3 { font-size: 2em}\n\nsection {\n    margin: 25px 0;\n}\n\n\n\n/**\n    Navigation - Header\n */\n.nav {\n    grid-area: nav;\n}\n\n.nav ul {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n\n    display: flex;\n    justify-content: space-between;\n}\n\n.nav ul li {\n    font-family: \'Pathway Gothic One\', Helvetica, Arial, "Trebuchet MS", sans-serif;\n    font-size: 25px;\n    font-weight: normal;\n    /*letter-spacing: 1px;*/\n}\n\n.nav ul li a {\n    height: 145px;\n    width: 100px;\n    color: #39444a;\n    display: block;\n    padding-top: 70px;\n    text-align: center;\n}\n\n.nav ul li a:hover {\n    background: url(/assets/nav_item_hover.png) top no-repeat;\n    text-decoration: none;\n}\n\n.nav ul li a.active {\n    background: url(/assets/nav_item_active.png) no-repeat 0px 0px;\n    color: #fff;\n}\n\n\n/**\n    FOOTER\n */\nfooter {\n    grid-area: footer;\n    /*background-color: #e9e826;*/\n\n    display: flex;\n\n    width: 1200px;\n    height: 207px;\n    /*height: 166px;*/\n    margin-top: 50px;\n    margin-bottom: 50px;\n    padding-left: 240px;\n    line-height: 140%;\n\n    background: url(/assets/footer_right_207px.png) no-repeat scroll right bottom,\n    url(/assets/footer_left_207px.png) no-repeat scroll left bottom,\n    url(/assets/footer_bg_207px.png) repeat scroll right bottom transparent;\n}\n\nfooter > div {\n    width: 248px;\n    padding-top: 20px;\n}\n\nfooter > div > h2 {\n    font-family: \'Pathway Gothic One\', Helvetica, Arial, "Trebuchet MS", sans-serif;\n    font-size: 26px;\n    font-weight: normal;\n    letter-spacing: 3px;\n    margin-right: 20px;\n    margin-bottom: 10px;\n}\n\nfooter > div > nav > ul {\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n}\n\nfooter > div > nav > ul > li {\n    font-family: "Roboto Condensed", sans-serif;\n    font-size: 14px;\n    letter-spacing: normal;\n    line-height: 175%;\n}\n\nfooter > div > nav > ul > li > a {\n    color: #39444a;\n    text-decoration: none;\n    padding-left: 14px;\n    background: url(/assets/footer_li_arrow.png) no-repeat 0px 1px;\n}\n\nfooter > div > nav > ul > li > a:hover {\n    color: #fff;\n    text-decoration: none;\n    padding-left: 14px;\n    background: url(/assets/footer_li_arrow.png) no-repeat 0px -18px;\n}\n/**\n    END FOOTER\n */');
}
// default/stylesheets/homePage.css
$fsx.f[55] = function(){
$fsx.r(39)('stylesheets/homePage.css', 'main > div#homePage {\n    grid-template-areas:\n            ".           hero        ."\n            "services    services    services"\n            "stuff       stuff       stuff"\n            "workshops      workshops      workshops"\n            "call2action call2action call2action";\n}\n\n\n\n/**\n    Hero\n */\n#hero-homePage {\n    grid-area: hero;\n}\n\n\n/**\n    Services (text content 1)\n */\n#services-homePage {\n    grid-area: services;\n    grid-column: 2 / 3;\n}\n#stuff-homePage {\n    grid-area: stuff;\n}\n#workshops-homePage {\n    grid-area: workshops;\n    grid-column: 2 / 3;\n}\n\n\n\n/**\n    Call 2 action\n */\n#call2action-homePage {\n    grid-area: call2action;\n    display: grid;\n    grid-template-columns: 5fr 1fr;\n}\n\n#call2action_ribbon {\n    display: grid;\n    grid-template-columns: 6fr 6fr;\n    align-items: baseline;\n    padding-top: 63px;\n    padding-left: 60px;\n    background: url(/assets/call2action_invisible.gif) no-repeat 352px 47px,\n    url(/assets/call2action_ribbon.jpg) no-repeat left center,\n    url(/assets/call2action.png) repeat-x center left;\n}\n\n#call2action_ribbon h1 {\n    margin-right: 30px;\n    justify-self: center;\n}\n\n#call2action_ribbon_prop {\n    width: 206px;\n    height: 207px;\n    position: relative;\n    text-align: center;\n    background: url(/assets/call2action_circle_bg.png) left no-repeat;\n}\n\n#call2action_ribbon_prop .inside {\n    margin-top: 49px;\n\n}\n\n#call2action_ribbon_prop span:nth-child(odd) {\n    font-size: 16px;\n    font-style: italic;\n    font-family: times;\n}\n\n#call2action_ribbon h1 {\n    font-family: \'Pathway Gothic One\', Helvetica, Arial, "Trebuchet MS", sans-serif;\n    font-size: 33px;\n    letter-spacing: 2px;\n}\n\n.ribbon_prop_1 {\n    position: absolute;\n    background: url(/assets/call2action_circle.png) left 0px no-repeat;\n    width: 206px;\n    height: 205px;\n    z-index: 2;\n}\n\n.ribbon_prop_1 .inside span > a {\n    color: #ffffff;\n}\n\n.ribbon_prop_2 .inside span > a {\n    color: #39444a;\n}\n\n.ribbon_prop_1:hover {\n    opacity: 0;\n    cursor: pointer;\n}\n\n.ribbon_prop_2 {\n    position: absolute;\n    background: url(/assets/call2action_circle.png) left -205px no-repeat;\n    width: 206px;\n    height: 205px;\n}\n\n.ribbon_prop_2:hover {\n    opacity: 1;\n}\n\n\n\n/**\n\n */\n.request {\n    font-family: \'Pathway Gothic One\', Helvetica, Arial, "Trebuchet MS", sans-serif;\n    font-size: 2.75em;\n    line-height: 100%;\n    margin-top: 10px;\n    letter-spacing: 3px;\n    display: block;\n}');
}
// default/stylesheets/servicesPage.css
$fsx.f[56] = function(){
$fsx.r(39)('stylesheets/servicesPage.css', '/**\n    Services Page Stylesheet\n */\n\nmain > div#servicesPage {\n    grid-template-areas:\n            ".                               hero-sp        ."\n            "workshops-sp                    workshops-sp                    workshops-sp"\n            "consultingForCompanies-sp       consultingForCompanies-sp       consultingForCompanies-sp"\n            "consultingForIndividuals-sp     consultingForIndividuals-sp     consultingForIndividuals-sp";\n}\n\n\n/**\n    Hero Services Page\n */\n#hero-servicesPage {\n    grid-area: hero-sp;\n}\n#workshops-servicesPage {\n    grid-area: workshops-sp;\n}\n#consultingForCompanies-servicesPage {\n    grid-area: consultingForCompanies-sp;\n}\n#consultingForIndividuals-servicesPage {\n    grid-area: consultingForIndividuals-sp;\n}');
}
// default/stylesheets/workshopPage.css
$fsx.f[57] = function(){
$fsx.r(39)('stylesheets/workshopPage.css', 'main > div#workshopPage {\n    grid-template-areas:\n            ".                hero-wp          ."\n            "workshopFlyer-wp workshopFlyer-wp workshopFlyer-wp"\n            "offers-wp        offers-wp        offers-wp";\n}\n\n#hero-workshopPage {\n    grid-area: hero-wp\n}\n#hero-workshopPage.hero h1 {\n    line-height: 100%;\n}\n#workshopFlyer-workshopPage {\n    grid-area: workshopFlyer-wp;\n    grid-column: 1 / 4;\n    width:100%;\n}\n#offers-workshopPage {\n    grid-area: offers-wp;\n    grid-template-columns: 4fr 4fr 4fr;\n    display: grid;\n}\n\n#offers-workshopPage h2 {\n    line-height: 110%;\n}');
}
// default/stylesheets/ressourcesPage.css
$fsx.f[58] = function(){
$fsx.r(39)('stylesheets/ressourcesPage.css', 'main > div#ressourcesPage {\n    grid-template-areas:\n            ".            hero-rp        ."\n            "hr-slides-rp hr-slides-rp   hr-slides-rp"\n            "slides       slides         slides";\n}\n\n#hero-ressourcesPage {\n    grid-area: hero-rp;\n}\n\n#slides-ressourcesPage {\n    grid-area: slides;\n\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: row;\n    justify-content: space-between;\n}\n\n.slideItemContainer {\n    overflow: hidden;\n    height: 169px;\n}\n\n.slideItemContainer2 {\n    height: 169px;\n    margin-bottom: 50px;\n    width: calc(1 / 4 * 100% - (1 - 1 / 4) * 20px);\n}\n.slideItemContainer2 button {\n    outline: none;\n    width: 100%;\n    border-radius: 0.1px;\n    cursor: pointer;\n    margin-top: 5px;\n    border: 1px groove;\n    background-color: rgba(0, 0, 0, 0);\n\n    color: rgba(255,255,255,1);\n    -webkit-transition: all 0.5s;\n    -moz-transition: all 0.5s;\n    -o-transition: all 0.5s;\n    transition: all 0.5s;\n    border: 1px groove rgba(57, 68, 74, 0.3);\n    position: relative;\n}\n\n.slideItemContainer2 button a {\n    text-decoration: none;\n    color: #39444a;\n    z-index: 2;\n    display: block;\n    width: 100%;\n    height: 100%;\n\n    font-weight: bold;\n    font-family: "Pathway Gothic One",serif;\n    font-size: 14px;\n    letter-spacing: 10px;\n}\n\n.slideItemContainer2 button::before{\n    content: \'\';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: -1;\n    opacity: 0;\n    background-color: rgba(255,255,255,0.5);\n    -webkit-transition: all 0.4s;\n    -moz-transition: all 0.4s;\n    -o-transition: all 0.4s;\n    transition: all 0.4s;\n    -webkit-transform: scale(0.5, 1);\n    transform: scale(0.5, 1);\n}\n.slideItemContainer2.fakeItemContainer button::before{\n    content: \'\';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: -1;\n    opacity: 0;\n    background-color: rgba(201, 24, 0, 0.5);\n    -webkit-transition: all 0.4s;\n    -moz-transition: all 0.4s;\n    -o-transition: all 0.4s;\n    transition: all 0.4s;\n    -webkit-transform: scale(0.5, 1);\n    transform: scale(0.5, 1);\n}\n.slideItemContainer2 button:hover::before{\n    opacity: 1;\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1);\n}\n\n\nobject.slideItem {\n    top: -56px;\n    position: relative;\n    height: 225px;\n}\n\nobject.slideItem.fakeItem {\n    filter: blur(0.3rem);\n}\n\n#slides-ressourcesPage h2 {\n    width: 100%;\n    margin-bottom: 1.5em;\n}\n\n#hr-slides-ressourcesPage {\n    grid-area: hr-slides-rp;\n    position: relative;\n    top: 27px;\n    margin-top: 30px;\n}');
}
// default/stylesheets/aboutPage.css
$fsx.f[59] = function(){
$fsx.r(39)('stylesheets/aboutPage.css', 'main > div#aboutPage {\n    grid-template-areas:\n            ".           hero-ap        ."\n            "desc-ap     desc-ap        desc-ap";\n}\n\n#hero-aboutPage {\n    grid-area: hero-ap;\n}\n\n#description-aboutPage {\n    grid-area: desc-ap;\n}');
}
$fsx.r(42)
})($fsx);