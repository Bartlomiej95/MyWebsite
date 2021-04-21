import homepantryIcon from "../assets/screens/homepantry.PNG";
import minesweeperIcon from "../assets/screens/minesweeper.PNG";
import zdrowieIcon from "../assets/screens/zdrowiena100.PNG";
import plannerIcon from "../assets/screens/planner.PNG";
import htmlIcon from "../assets/tech/html.svg";
import cssIcon from "../assets/tech/css.svg";
import javascriptIcon from "../assets/tech/js.svg";
import reactIcon from "../assets/tech/react.svg";


export const screens = [
    
        {
            id: 1,
            icon: homepantryIcon,
            path: require("../assets/screens/homepantry.PNG"),
            live: 'https://bartlomiej95.github.io/HomePantry/',
            code: 'https://github.com/Bartlomiej95/HomePantry'
        },
        {
            id: 2,
            icon: zdrowieIcon,
            path: require("../assets/screens/zdrowiena100.PNG"),
            live: 'https://hungry-jones-1c9e3d.netlify.app/',
            code: 'https://github.com/Bartlomiej95/ZdowieNa100'
        },
        {
            id: 3,
            icon: minesweeperIcon,
            path: require("../assets/screens/minesweeper.PNG"),
            live: 'https://bartlomiej95.github.io/Minesweeper/',
            code: 'https://github.com/Bartlomiej95/Minesweeper'
        },
        {
            id: 4,
            icon: plannerIcon,
            path: require("../assets/screens/planner.PNG"),
            live: 'https://planer-app.netlify.app/',
            code: 'https://github.com/Bartlomiej95/Planner',
        }
    
];

export const technology = [
    {
        id: 1,
        name: "html",
        description: "HTML5, semantyczny html, metodologia BEM",
        icon: htmlIcon,
        alt: "napis html"
    },

    {
        id: 2,
        name: "css",
        description: "CSS3, preprocesor SASS",
        icon: cssIcon,
        alt: "napis css"
    },

    {
        id: 3,
        name: "javascript",
        description: "ECMAScript 6 m.in. funkcje strzałkowe, destrukturyzacja, programowanie obiektowe oraz funkcyjne, klasy",
        icon: javascriptIcon,
        alt: "napis javascript"
    },

    {
        id: 4,
        name: "react",
        description: "Styled-components, React-router, Higher-Order Components, Redux, Hooks, Prop-Types",
        icon: reactIcon,
        alt: "napis react"
    }
]
