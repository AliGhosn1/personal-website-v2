import PWV2 from './assets/projects/PWV2.png'
import CRWN from './assets/projects/CRWN.png'
import WA from './assets/projects/Weather.png'
import NA from './assets/projects/News.png'
import SM from './assets/projects/Matter.png'
import PWV1 from './assets/projects/PWV1.png'
import RPG from './assets/projects/RPG.png'
import BH from './assets/projects/Unity.png'
import Tron from './assets/projects/Tron.png'
import CLC from './assets/projects/CLC.png'
import Blog from './assets/projects/Blog.png'
import Dice from './assets/projects/Dice.png'
import Drum from './assets/projects/Drum.png'
import Rolodex from './assets/projects/Rolodex.png'
import BMI from './assets/projects/BMI.png'
import Simon from './assets/projects/Simon.png'
import Todo from './assets/projects/Todo.png'
import Paint from './assets/projects/Paint.png'

export const PROJECT_DATA = [
    {
        name: 'Personal Website V2',
        filters: ['Front-End'],
        description: <div>You are currently on my personal website, a front-end React app that showcases my skills and projects. The website is designed to highlight my expertise and experience in web development, providing a platform to display my portfolio. The website utilizes dynamic routes with React Router, making it easy for visitors to navigate between different pages and access relevant information. In addition, the website has organized styles using styled-components, creating a visually appealing and consistent user experience.</div>,
        technologies: ['React.js', 'Styled-Components', 'GitHub'],
        github: 'https://github.com/AliGhosn1/personal-website-v2',
        liveLink: null,
        imageSrc: PWV2,
        priority: 4
    },
    {
        name: 'CRWN Clothing',
        filters: ['Front-End', 'Back-End'],
        description: <div>This e-commerce website allows users to sign in with their Google account or by providing an email and password. Once logged in, users can add or remove items from their cart as needed. The checkout process is secure and straightforward with the integration of Stripe payment gateway. The website uses dynamic routes with React Router, making it easy for users to navigate between pages and access relevant information. <br /><br />Furthermore, the website has organized styles using styled-components, creating a visually appealing and consistent user experience. These features enable users to shop efficiently and quickly find the products they are looking for. Overall, this e-commerce site provides a user-friendly, secure, and organized platform for users to purchase products online.</div>,
        technologies: ['React.js', 'TypeScript', 'Firebase', 'Redux', 'GitHub'],
        github: 'https://github.com/AliGhosn1/EcommerceWebsite',
        liveLink: 'https://crwn-shop.netlify.app/',
        imageSrc: CRWN,
        priority: 5
    },
    {
        name: 'Weather App',
        filters: ['Back-End'],
        description: <div>This weather app utilizes a public weather API to provide users with up-to-date weather information. The app is designed to be easy to use and foolproof, ensuring that users can access accurate weather data without any hassle.</div>,
        technologies: ['Express.js', 'Public API'],
        github: 'https://github.com/AliGhosn1/WeatherApp',
        liveLink: 'https://aliweather.cyclic.app/',
        imageSrc: WA,
        priority: 2
    },
    {
        name: 'Newsletter App',
        filters: ['Back-End'],
        description: <div>This newsletter app is designed to provide a convenient and efficient way for users to stay up-to-date with their favorite brands, companies, or content creators. The app uses the Mailchimp API to streamline the newsletter creation and delivery process, making it easy for users to sign up and receive regular updates.</div>,
        technologies: ['Express.js', 'Public API'],
        github: 'https://github.com/AliGhosn1/Newsletter',
        liveLink: 'https://alinews.cyclic.app/',
        imageSrc: NA,
        priority: 3
    },
    {
        name: 'Social-Media Website',
        filters: ['Front-End', 'Back-End'],
        description: <div>This social media site is built using React on the front-end and Django on the back-end. Users can create an account and login using user authentication. The website allows users to post images and interact with other users, fostering a community-driven experience.<br /><br />The website's backend is built using Django, which uses SQLite3 for database management. SQLite3 is an efficient and lightweight database engine that is ideal for small to medium-sized web applications. Overall, this social media site provides a user-friendly and efficient platform for users to connect with one another, showcase their interests and engage in online conversations.</div>,
        technologies: ['Django', 'React.js', 'Custom APIs', 'SQLite3', 'GitHub'],
        github: 'https://github.com/AliGhosn1/Social-Media-Website-FrontEnd-v1_WIP',
        liveLink: null,
        imageSrc: SM,
        priority: 4
    },
    {
        name: 'Personal Website V1',
        filters: ['Front-End'],
        description: <div>This older personal website was one of my earliest front-end projects, built using HTML, CSS, and JavaScript. The website was designed to showcase my skills and projects, and served as a platform for me to share my work with others. Although the website may not be as polished or complex as some of my more recent projects, it remains a testament to my passion for web development and my dedication to honing my skills over time. Despite its age, this personal website still serves as a reminder of my journey as a developer, and the many hours I spent learning and growing as a programmer.</div>,
        technologies: ['HTML', 'CSS', 'Javascript'],
        github: 'https://github.com/AliGhosn1/Personal-Website',
        liveLink: null,
        imageSrc: PWV1,
        priority: 2
    },
    {
        name: 'Top-Down RPG',
        filters: ['Others'],
        description: <div>This top-down RPG is built with Pygame and features 5 levels, 3 custom bosses, and custom sprites. The game uses object-oriented programming (OOP) design to create an immersive and engaging gameplay experience. With its unique design and challenging gameplay, this RPG is a great option for gamers who enjoy exploring new worlds and battling tough enemies.</div>,
        technologies: ['Python', 'PyGame', 'Tiled', 'Photoshop'],
        github: 'https://github.com/AliGhosn1/Top-down-rpg-game',
        liveLink: null,
        imageSrc: RPG,
        priority: 3
    },
    {
        name: 'Bullet Hell',
        filters: ['Others'],
        description: <div>This Unity-built bullet hell game features advanced physics, vectors, and multiple external packages, offering an immersive and challenging gaming experience. With intense battles and engaging gameplay mechanics, this game is sure to captivate players of all skill levels and provide an exciting, action-packed adventure.</div>,
        technologies: ['Unity', 'C++', 'Tiled', 'Photoshop'],
        github: 'https://github.com/AliGhosn1/UnityGame-WIP',
        liveLink: null,
        imageSrc: BH,
        priority: 3
    },
    {
        name: 'Tron Remake',
        filters: ['Others'],
        description: <div>This Tron remake features a custom AI opponent for players to face, with each player having three lives to battle it out. With a score counter to keep track of progress, and custom sprites to enhance the visuals, this game provides a fun and exciting take on the classic Tron gameplay.</div>,
        technologies: ['Java', 'Photoshop'],
        github: 'https://github.com/AliGhosn1/Tron-Game',
        liveLink: null,
        imageSrc: Tron,
        priority: 2
    },
    {
        name: 'Foolproof Calculator',
        filters: ['Others'],
        description: <div>This command-line calculator, coded in C, boasts both unary and binary operations, along with recallable memory and support for variables. With a foolproof design and intuitive user interface, it provides a simple yet powerful tool for quick calculations and computations on the go.</div>,
        technologies: ['C'],
        github: 'https://github.com/AliGhosn1/Foolproof-calculator',
        liveLink: null,
        imageSrc: CLC,
        priority: 2
    },
    {
        name: 'Blog Site',
        filters: ['Front-End', 'Back-End'],
        description: <div>This blog site, powered by an Express server, features EJS templates for a seamless and dynamic user experience. With MongoDB storage, it offers efficient and secure data management for all blog posts and user information. Perfect for those looking to create and share their thoughts and ideas online.</div>,
        technologies: ['Express.js', 'MongoDB', 'EJS'],
        github: 'https://github.com/AliGhosn1/Blog-Site',
        liveLink: null,
        imageSrc: Blog,
        priority: 2
    },
    {
        name: 'Dice Game',
        filters: ['Front-End'],
        description: <div>This basic HTML/CSS/JS simple dice game generates random results to provide an interactive user experience.</div>,
        technologies: ['HTML', 'CSS', 'Javascript'],
        github: 'https://github.com/AliGhosn1/Dice-Game',
        liveLink: null,
        imageSrc: Dice,
        priority: 1
    },
    {
        name: 'Drum Kit',
        filters: ['Front-End'],
        description: <div>The virtual drum kit is a web application that allows users to play drums on their computer using keyboard inputs to trigger sounds.</div>,
        technologies: ['HTML', 'CSS', 'Javascript'],
        github: 'https://github.com/AliGhosn1/Drum-Kit',
        liveLink: null,
        imageSrc: Drum,
        priority: 1
    },
    {
        name: 'Monsters Rolodex',
        filters: ['Front-End'],
        description: <div>The Rolodex is a web application built with React, using the useEffect and useState hooks. This was my first project with React, and it allows users to search for items and filter them based on various categories.</div>,
        technologies: ['React.js'],
        github: 'https://github.com/AliGhosn1/Monsters-Rolodex',
        liveLink: null,
        imageSrc: Rolodex,
        priority: 2
    },
    {
        name: 'BMI Calculator',
        filters: ['Back-End'],
        description: <div>As my first project using HTML, CSS, and JS, I created a simple calculator that takes user input and performs basic calculations.</div>,
        technologies: ['HTML', 'CSS', 'Javascript'],
        github: 'https://github.com/AliGhosn1/BMI-Calculator',
        liveLink: null,
        imageSrc: BMI,
        priority: 1
    },
    {
        name: 'Simon Game',
        filters: ['Front-End'],
        description: <div>As my first more advanced project using HTML/CSS/JS, I created a clone of the classic Simon game. The game allowed for user input and used random sequences to increase difficulty as the player progressed. It was a great way to practice coding logic and improve my skills in front-end development.</div>,
        technologies: ['HTML', 'CSS', 'Javascript'],
        github: 'https://i.imgur.com/0j4eaFs.png',
        liveLink: null,
        imageSrc: Simon,
        priority: 2
    },
    {
        name: 'To-Do List',
        filters: ['Front-End', 'Back-End'],
        description: <div>The "Todo List" project is a web-based application that allows users to manage their tasks. It uses an array to store the items that users add to the list and features a responsive design that works well on all devices. Users can add, edit, and delete items from the list, making it easy to keep track of their tasks.</div>,
        technologies: ['HTML', 'CSS', 'Javascript'],
        github: 'https://github.com/AliGhosn1/To-Do-List',
        liveLink: null,
        imageSrc: Todo,
        priority: 2
    },
    {
        name: 'Terraria Themed Paint',
        filters: ['Others'],
        description: <div>As my first project in Pygame, I created a clone of a paint program. It features custom art and design, and includes undo/redo functionality. The user can draw and paint with different colors and brush sizes. It was a great learning experience in game development and graphical user interface (GUI) programming.</div>,
        technologies: ['Python', 'PyGame', 'Photoshop'],
        github: 'https://github.com/AliGhosn1/Terraria-Themed-Paint',
        liveLink: null,
        imageSrc: Paint,
        priority: 3
    },
]