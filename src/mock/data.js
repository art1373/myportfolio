import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Serverless Alireza', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to My Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Armin Tavakol',
  subtitle: 'a Web and Mobile Application Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Proficient software engineer with strengths in building high-scale web and mobile applications',
  paragraphTwo:
    'Experienced in agile development and developed fully functional responsive prototypes based on Business Requirements using HTML5, CSS3, JavaScript, and Modern JavaScript Frameworks such as Reactjs and Vue',
  paragraphThree:
    'Seasoned Reactjs and Mobile application developer using ReactNative. Self-Taught with a “Never Give Up Attitude”',
  resume:
    'https://docs.google.com/document/d/1ro_iG9q-uEKgefkn9iX6mZ5Uoz0l1epVZ8J51W8GmRI/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'Project1.PNG',
    title: 'King Clothing',
    info: 'an Ecommerce Web App',
    info2: 'React,Redux,Redux saga, Firebase, Netlify',
    url: 'https://kingclothing.netlify.com/',
    repo: 'https://github.com/art1373/KingClothing', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'Project2.PNG',
    title: 'Smart Brain',
    info: 'A faceDetection Web App',
    info2: 'Pure React, Heroku,Nodejs',
    url: 'https://art-smart-brain.herokuapp.com/',
    repo: 'https://github.com/art1373/smartbrain', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    // img: 'narvin.jpg',
    title: 'NarvinPay',
    info: 'A React Native Payment App',
    info2: 'ReactNative, Hooks,Context Api',
    url:
      'https://www.linkedin.com/posts/alireza-tavakol73_reactnative-react-appdevelopment-activity-6631153544017915904-lRY9',
    repo: 'https://github.com/art1373/NarvinPay', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'pleo.PNG',
    title: 'Front End Challange',
    info: 'A Replica Expenses Web App Please Download the Api from the repo',
    info2: 'React, Hooks, Context Api, NodeJs,CircleCi,Jest,Enzyme',
    url: 'https://pleo-alireza.netlify.com/',
    repo: 'https://github.com/art1373/Pleo-FrontChallenge', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Contact Me',
  email: 'Alirezatk73@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'twitter',
      url: 'https://twitter.com/Alirezatk73',
    },
    {
      id: uuidv1(),
      name: 'telegram',
      url: 'https://telegram.me/Alirezatkkk',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/alireza-tavakol73/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/art1373',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
