(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{303:function(n,e,t){"use strict";t.r(e);var a=t(2),i=t.n(a),r=t(73),o=t.n(r),l=t(74),c=t(75),s=t(20),p=t(83),m=t(82),d=t(7),u=t(76),g=t.n(u),h=t(8),f=t(77);function x(){var n=Object(d.a)(["\n    height: 150px;\n    width: 150px;\n    border-radius: 50%;\n    border: 3px solid #b61924;\n    overflow: hidden;\n    position: relative;\n    margin-right: 40px;\n    img {\n        width: 155px;\n        height: 155px;\n        display: block;\n        position: absolute;\n        object-fit: cover;\n        object-position: -3px;\n    }\n"]);return x=function(){return n},n}function b(){var n=Object(d.a)(["\n    position: absolute; \n    top: 0px;\n    left: 0px;\n    width: 100%;\n    padding: 30px 300px 0px 80px;\n    color: white;\n    > h1 {\n        font-size: 150px; \n        font-family: 'Righteous', cursive;\n        text-align: left;\n        margin-left: 200px;\n        width: max-content;\n    }\n\n    .about-me-buttons {\n        text-align: center;\n        transition: all 0.3s ease-in-out;\n        > button {\n            padding: 10px 20px;\n            margin: 20px;\n            margin-top: 40px;\n            background: white;\n            color: #b61924;\n            font-weight: bold;\n            font-size: larger;\n            border-radius: 3px;\n            letter-spacing: 1px;\n            transition: all 0.3s ease-in-out;\n        }\n        > button:hover {\n            cursor: pointer;\n            box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.67);\n            letter-spacing: 2px;\n            width: max-content;\n            transform: scale(1.1);\n            transition: all 0.3s ease-in-out;\n        }\n        > button:active {\n            transform: scale(1.05);\n            transition: none;\n        } \n    }\n\n    #about-me {\n        display: flex;\n        flex-direction: row;\n        width: max-content;\n        align-items: center;\n        margin-left: auto;\n\n        > div:nth-child(1) {\n            align-self: center;\n        }\n\n        > div:nth-child(2) {\n            display: flex;\n            flex-direction: column;\n        }\n\n        > div > h2 {\n            font-size: 70px;\n            font-weight: 500;\n            font-family: 'Roboto', sans-serif;\n            text-align: right;\n            margin-bottom: 20px;\n                > span {\n                    font-size: 50px;\n                }\n        }\n\n        div > p {\n            width: 570px;\n            text-align: justify;\n            font-family: 'Roboto', sans-serif;\n            line-height: '10px';\n            font-weight: 400;\n            font-size: 22px;\n        }\n    }\n\n    @media (max-width: 1200px) {\n        top: 20px;\n        left: 0;\n        right: 0;\n        margin: 0 auto;\n        padding: 0px;\n        width: max-content;\n        > h1 {\n            font-size: 120px;\n            text-align: left;\n            width: max-content;\n            margin-left: 0;\n        }\n        #about-me {\n            flex-direction: row; \n            justify-content: center;\n            align-items: center;\n            width: 100%;\n\n            > div:nth-child(1) {\n                div {\n                    margin: 0 auto;\n                }\n            }\n\n            > div:nth-child(2) {\n                display: flex;\n                flex-direction: column;\n            }\n\n            > div > h2 {\n                font-size: 40px;\n                text-align: center;\n                margin-top: 20px;\n                    > span {\n                        font-size: 22px;\n                    }\n            }\n\n            div > p {\n                width: 500px;\n                padding: 0 30px;\n                font-size: 20px;\n                text-align: justify;\n            }\n        }\n    }\n    \n    @media (max-width: 650px) {\n        top: 20px;\n        left: 0;\n        right: 0;\n        margin: 0 auto;\n        padding: 0px;\n        width: max-content;\n        > h1 {\n            font-size: 100px;\n            margin: 0 auto;\n            width: max-content;\n        }\n\n        .about-me-buttons {\n            > button {\n                font-size: small;\n                margin: 10px;\n                margin-top: 40px;\n            }\n        }\n\n        #about-me {\n            flex-direction: column; \n            justify-content: center;\n            width: 100%;\n            align-items: center;\n\n            > div:nth-child(1) {\n                align-self: center;\n                div {\n                    margin: 0 auto;\n                }\n            }\n\n            > div:nth-child(2) {\n                display: flex;\n                flex-direction: column;\n            }\n\n            > div > h2 {\n                font-size: 40px;\n                text-align: center;\n                margin-top: 20px;\n                    > span {\n                        font-size: 22px;\n                    }\n            }\n\n            div > p {\n                width: 100vw;\n                padding: 0 30px;\n                font-size: 20px;\n                text-align: center;\n            }\n        }\n    }\n"]);return b=function(){return n},n}function v(){var n=Object(d.a)(["\n    position: relative;\n    background: #b61936;\n    min-height: 770px;\n\n    #scroll-down {\n        position: absolute; \n        bottom: 40px;\n        left: 50%;\n        transform: translate(-50%,-50%);\n        cursor: pointer;\n        > h4 {\n            color: white;\n            letter-spacing: 1px;\n            margin-bottom: 5px;\n            font-weight: normal;\n        }\n        #chevron {\n            height: 20px;\n            width: 20px;\n            margin: 0 auto;\n            transform: rotate(45deg);\n            border-right: 3px solid white;\n            border-bottom: 3px solid white;\n            animation: pulse 2s ease-in-out infinite;\n        }\n        @keyframes pulse {\n            0% {\n                transform: translate(0,0) rotate(45deg);\n            }\n            50% {\n                transform: translate(0,10px) rotate(45deg);\n            }\n            100% {\n                transform: translate(0,0) rotate(45deg);\n            }\n        }\n    }\n"]);return v=function(){return n},n}var w=h.a.div(v()),E=h.a.div(b()),y=h.a.div(x()),k=function(n){Object(p.a)(t,n);var e=Object(m.a)(t);function t(n){var a;return Object(l.a)(this,t),(a=e.call(this,n)).handleClick=a.handleClick.bind(Object(s.a)(a)),a.handleButtonNav=a.handleButtonNav.bind(Object(s.a)(a)),a}return Object(c.a)(t,[{key:"handleClick",value:function(){document.getElementById("tech-stack").scrollIntoView()}},{key:"handleButtonNav",value:function(n){var e=n.target.name||"projects";"resume"!==e&&document.getElementById(e).scrollIntoView()}},{key:"render",value:function(){return i.a.createElement(w,null,i.a.createElement(g.a,{height:"770px",params:f}),i.a.createElement(E,null,i.a.createElement("h1",{"data-aos":"fade-up","data-aos-offset":"-100","data-aos-duration":"1500","data-aos-easing":"ease-out-back","data-aos-delay":"200"},"Hello,"),i.a.createElement("div",{id:"about-me"},i.a.createElement("div",{"data-aos":"fade-right","data-aos-offset":"-100","data-aos-duration":"1500","data-aos-easing":"ease-out-back","data-aos-delay":"200"},i.a.createElement(y,null,i.a.createElement("img",{src:"dp2.jpg",alt:"A geeky guy"}))),i.a.createElement("div",{"data-aos":"fade-down","data-aos-offset":"-100","data-aos-duration":"1500","data-aos-easing":"ease-out-back","data-aos-delay":"200"},i.a.createElement("h2",null,i.a.createElement("span",null,"I'm")," Revanth Raghu."),i.a.createElement("p",null,"An aspiring full stack developer proficient in MERN stack. If you are looking for a curious and adaptible team player. Then, I'm the man for the job."),i.a.createElement("div",{className:"about-me-buttons"},i.a.createElement("button",{name:"projects",onClick:this.handleButtonNav},"Projects"),i.a.createElement("button",{name:"contact",onClick:this.handleButtonNav},"Contact"),i.a.createElement("button",{name:"resume",onClick:this.handleButtonNav},"Resume"))))),i.a.createElement("div",{id:"scroll-down",onClick:this.handleClick},i.a.createElement("h4",null,"SCROLL DOWN"),i.a.createElement("div",{id:"chevron"})))}}]),t}(i.a.Component);function j(){var n=Object(d.a)(["\n    display: flex;\n    width: 100%;\n    padding: 30px 0px;\n    justify-content: center;\n    align-items: center;\n    color: #909090;\n    flex-direction: row;\n    max-width: 700px;\n    min-width: 300px;\n    flex-wrap: wrap;\n\n    div {\n        margin-right: 20px;\n        margin-left: 20px;\n        font-family: 'sans-serif';\n        font-size: 18px;\n    }\n\n    div > i {\n        color: #707070;\n        margin-right: 15px;\n    }\n"]);return j=function(){return n},n}function O(){var n=Object(d.a)(["\n    max-width: 800px;\n    margin: auto;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    line-height: 1.7rem;\n    padding: 20px;\n    margin-bottom: 40px;\n    h1 {\n        font-size: 33px;\n        font-weight: bold;\n        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n        color: #707070;\n        margin: 30px 0px 15px 0px;\n    }\n\n    h2 {\n        font-size: 19px;\n        font-weight: 500;\n        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n        color: #707070;\n    }\n\n    p {\n        max-width: 550px;\n        text-align: center;\n        color: #909090;\n        font-family: 'Roboto';\n        font-size: 18px;\n    }\n"]);return O=function(){return n},n}var z=h.a.section(O()),C=h.a.div(j());var S=function(){return i.a.createElement(z,{id:"contact"},i.a.createElement(C,null,i.a.createElement("div",null,i.a.createElement("i",{className:"fas fa-map-marker-alt"}),"Bangalore, India"),i.a.createElement("div",null,i.a.createElement("i",{className:"fas fa-phone-alt"}),"+91 914 811 5695"),i.a.createElement("div",null,i.a.createElement("i",{className:"fas fa-envelope"}),"revabob@gmail.com")))};function B(){var n=Object(d.a)(["\n    text-align: center;\n    margin: 60px 0;\n"]);return B=function(){return n},n}function N(){var n=Object(d.a)(["\n    display: grid;\n    align-items: center;\n    justify-items: center;\n    width: max-content;\n    margin: auto;\n    grid-row-gap: 30px;\n    grid-template-columns: repeat(4, 60px);\n    grid-template-rows: 92px 92px;\n\n    figure {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n    }\n\n    figure img {\n        width: 60px;\n        height: 60px;\n        margin: auto;\n    }\n    figcaption {\n        line-height: 2rem;\n        letter-spacing: 1px;\n        font-weight: bold;\n        font-size: small;\n        font-family: 'Alata', sans-serif;\n    }\n\n    @media (max-width: 575px) {\n        grid-column-gap: 30px;\n        figcaption {\n            font-size: x-small;\n        }\n    }\n\n    @media (min-width: 576px) {\n        grid-column-gap: 35px;\n    }\n\n    @media (min-width: 700px) {\n        grid-column-gap: 60px;\n    }\n\n    @media (min-width: 1000px) {\n    grid-template-columns: repeat(4, 70px);\n    grid-template-rows: 82px 82px;\n    grid-column-gap: 90px;\n    grid-row-gap: 50px;\n\n        figure img {\n            width: 70px;\n            height: 70px;\n            margin: auto;\n        }\n    }\n\n"]);return N=function(){return n},n}var T=h.a.div(N()),_=h.a.h1(B());var A=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(_,{id:"tech-stack"},"Proficiencies"),i.a.createElement(T,null,i.a.createElement("figure",null,i.a.createElement("img",{src:"html5.svg",alt:""}),i.a.createElement("figcaption",null,"HTML5")),i.a.createElement("figure",null,i.a.createElement("img",{style:{transform:"scale(1.25)"},src:"css3.svg",alt:""}),i.a.createElement("figcaption",null,"CSS3")),i.a.createElement("figure",null,i.a.createElement("img",{src:"js.svg",alt:""}),i.a.createElement("figcaption",null,"JAVASCRIPT")),i.a.createElement("figure",null,i.a.createElement("img",{src:"bootstrap.svg",alt:""}),i.a.createElement("figcaption",null,"BOOTSTRAP")),i.a.createElement("figure",null,i.a.createElement("img",{src:"mongodb.svg",alt:""}),i.a.createElement("figcaption",null,"MONGODB")),i.a.createElement("figure",null,i.a.createElement("img",{src:"expressjs.svg",alt:""}),i.a.createElement("figcaption",null,"EXPRESS")),i.a.createElement("figure",null,i.a.createElement("img",{style:{transform:"scale(1.15)"},src:"react.svg",alt:""}),i.a.createElement("figcaption",null,"REACT")),i.a.createElement("figure",null,i.a.createElement("img",{src:"nodejs.svg",alt:""}),i.a.createElement("figcaption",null,"NODE.JS"))))};function R(){var n=Object(d.a)(["\n    margin: 30px 0 20px 0; \n    a {\n        border: 1px solid #B71C1C;\n        background: white;\n        color: #B71C1C;\n        font-size: large;\n        border-radius: 3px;\n        padding: 4px 15px;\n        text-decoration-line: none;\n        transition: all 0.3s ease-in-out\n    }\n\n    a:hover {\n        background: #E53935;\n        color: white;\n        transition: all 0.3s ease-in-out\n    }\n\n    a > i {\n        margin-right: 5px;\n    }\n\n    a:nth-child(1) {\n        margin-right: 20px; \n    }\n"]);return R=function(){return n},n}function I(){var n=Object(d.a)(["\n    box-shadow: -1px -2.8px 3.2px 1px rgba(0, 0, 0, 0.1);\n    border: 1px solid #ccc;\n    height: 100%;\n    transition: all 0.3s ease-in-out;\n\n    :hover {\n        transform: scale(1.06);\n        transition: all 0.3s ease-in-out;\n        h4 {\n            background: #1976D2;\n            color: white;\n            padding: 3px 15px;\n            margin: 12px 0;\n            border-radius: 3px;\n            transition: all 0.3s ease-in-out;\n        }\n    }\n\n    img {\n        width: 100%;\n        height: 200px;\n        display: block;\n    }\n\n    h4 {\n        margin: 15px 0;\n        width: max-content;\n        transition: all 0.3s ease-in-out;\n    }\n\n    .card-body {\n        padding: 0 20px;\n    }\n"]);return I=function(){return n},n}var D=h.a.div(I()),P=h.a.div(R());var M=function(n){var e=n.img,t=n.alt,a=n.heading,r=n.description,o=n.demo,l=n.github;return i.a.createElement(D,null,i.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:o},i.a.createElement("img",{src:e,alt:t})),i.a.createElement("div",{className:"card-body"},i.a.createElement("h4",null,a),i.a.createElement("p",null,r),i.a.createElement(P,null,i.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:o},i.a.createElement("i",{class:"fal fa-globe"}),"Demo"),i.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:l},i.a.createElement("i",{class:"fab fa-github"}),"Github"))))},J=t(81);function F(){var n=Object(d.a)(["\n    text-align: center;\n    margin-top: 60px;\n"]);return F=function(){return n},n}function W(){var n=Object(d.a)(["\n    display: grid;\n    align-items: center;\n    justify-items: center;\n    width: max-content;\n    margin: 50px auto;\n    grid-column-gap: 50px;\n    grid-auto-rows: 360px;\n\n    @media (max-width: 733px) {\n        grid-template-columns: repeat(1, 320px);\n        grid-row-gap: 35px;\n    }\n    @media (min-width: 734px) {\n        grid-template-columns: repeat(2, 320px);\n        grid-row-gap: 40px;\n    }\n    @media (min-width: 1200px) {\n        grid-template-columns: repeat(3, 320px);\n        grid-column-gap: 80px;\n        grid-row-gap: 60px;\n    }\n"]);return W=function(){return n},n}var H=h.a.div(W()),U=h.a.h1(F());var L=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(U,{id:"projects"},"Projects"),i.a.createElement(H,null,J.map((function(n){return i.a.createElement(M,{key:n.heading,img:n.img,alt:n.alt,heading:n.heading,description:n.description,demo:n.demo,github:n.github})}))))};var V=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(k,null),i.a.createElement(A,null),i.a.createElement(L,null),i.a.createElement(S,null))};o.a.render(i.a.createElement(V,null),document.getElementById("root"))},77:function(n){n.exports=JSON.parse('{"particles":{"number":{"value":30,"density":{"enable":true,"value_area":800}},"color":{"value":"#dddddd"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":true,"speed":1,"opacity_min":0,"sync":false}},"size":{"value":10,"random":true,"anim":{"enable":false,"speed":80,"size_min":0.1,"sync":false}},"line_linked":{"enable":false,"distance":300,"color":"#cccccc","opacity":0.4,"width":2},"move":{"enable":true,"speed":3,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"grab"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":800,"line_linked":{"opacity":1}},"bubble":{"distance":800,"size":80,"duration":2,"opacity":0.8,"speed":3},"repulse":{"distance":400,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true}')},81:function(n){n.exports=JSON.parse('[{"img":"/omdb_search.png","alt":"OMDB Search","heading":"OMDB Search","description":"A movies and series search engine using OMDB API.","demo":"https://omdbsearch.netlify.app/","github":"https://github.com/revanthraghu/masai-sprint-3"},{"img":"/tic_tac_toe2.png","alt":"Tic Tac Toe","heading":"Tic Tac Toe","description":"Tic-tac-toe game with with a focus on minimalistic design.","demo":"https://paper-tic-tac-toe.netlify.app/","github":"https://github.com/revanthraghu/masai-sprint-4/"},{"img":"/timer.png","alt":"Timer and Stopwatch","heading":"Timer and Stopwatch","description":"A clone of the google timer and stopwatch widget.","demo":"https://timer-stopwatch.netlify.app/","github":"https://github.com/revanthraghu/timer-stopwatch"},{"img":"/todo.jpg","alt":"To-Do App","heading":"To-Do App","description":"To-do app with create, edit, delete functionality.","demo":"https://app-todo-react.netlify.app","github":"https://github.com/revanthraghu/masai-sprint-1"},{"img":"/partake.jpg","alt":"e-Commerce Website Clone","heading":"e-Commerce Website Clone","description":"A clone of the Partake e-commerce website.","demo":"https://partake-clone.netlify.app/","github":"https://github.com/revanthraghu/masai-sprint-1"},{"img":"/oneweather.png","alt":"One Weather","heading":"One Weather","description":"A web app that provides local weather data using openweather API.","demo":"https://oneweather.netlify.app/","github":"https://github.com/revanthraghu/one-weather/"}]')},84:function(n,e,t){n.exports=t(303)}},[[84,1,2]]]);
//# sourceMappingURL=main.47140df3.chunk.js.map