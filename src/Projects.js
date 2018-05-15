import nationalParks from './assets/nationalParksFinder.png';
import accentio from './assets/accentio.png';
import apartmentPromo from './assets/apartmentPromo.png';
import bikeFinder from './assets/bikeFinder.png';
import carshare from './assets/carshare.png';
import darkWeb from './assets/darkWeb.png';
import electoralMap from './assets/electoralMap.png';
import pcords from './assets/pcords.png';
import boulderFinder from './assets/boulderFinder.png';
import chi from './assets/chi.png';
import bouldr from './assets/bouldr.png';
import blackjack from './assets/blackjack.png';
import dac from './assets/dac.png';
import eteh from './assets/etech.png';
import gis from './assets/gis.png';
import hcm from './assets/hcm.png';
import iot from './assets/iot.gif';
import perk from './assets/perk.png';
import processor from './assets/processor.png';
import su from './assets/StudentVoice.png';
import whispers from './assets/whispers.png';


export const tags = {
  WEB: 'web',
  MOBILE: 'mobile',
  HARDWARE: 'hardware',
  DATA: 'data',
  DESIGN: 'design',
  OTHER: 'other',
};

export const technologies = {
  REACT: 'react',
  D3: 'D3',
  NOSQL: 'noSQL',
  EXPRESS: 'express',
  NODE: 'node',
  REDUX: 'redux',
  PROCESSING: 'processing',
  GIS: 'GIS',
  BIGDATA: 'big data',
  PYTHON: 'python',
  ML: 'machine learning',
  CV: 'computer vision',
  SWIFT: 'swift',
  ARDUINO: 'arduino',
  PHP: 'php',
  JAVA: 'java',
  BLE: 'bluetooth low energy',
  R: 'R',
  CORDOVA: 'cordova',
  MINECRAFT: 'minecraft',
  WORDPRESS: 'wordpress',
  JQ: 'jQuery',
};

export default [
  {
    title: "Find Your National Park",
    image: nationalParks,
    tags: [tags.WEB, tags.DATA, tags.DESIGN],
    technologies: [technologies.REACT, technologies.D3, technologies.NODE],
    date: 'May, 2018',
    awards: ['Voted Best Design'],
    link: 'https://epadz.github.io/NationalParks',
    overview: 'Find Your National Park is a group project I did for a masters-level data visualization class my senior year of college. Our goal was to create a web app to help users explore national parks with a special emphasis placed on species biodiversity. Users can explore individual parks and learn about their weather, visitation trends and the species that reside there. Likewise, they can search for specific plants and animals to get recommendations for which parks to visit. Overall, our objective was to inspire users to go out and explore this amazing resources we have in America, especially as National Parks are evermore threatened by climate change and limited governmental support. I did the user interface, search functionality and app infrastructure (the other group members were responsible for compiling and preparing the data and building the charts, graphs and maps).',
  }, {
    title: "Accent.io",
    image: accentio,
    tags: [tags.WEB, tags.DESIGN],
    technologies: [technologies.REACT, technologies.NOSQL, technologies.EXPRESS, technologies.NODE, technologies.REDUX],
    date: 'December, 2017',
    overview: 'Accent.io is a project I built my senior year of college for a class called Software Engineering Workshop. The objective of the course was to have students spend an entire semester on one project to teach the fundamentals of bringing something from the idea phase to a fully-fledged product. Inspired by my frustrations with reading assignments for my Spanish classes, I wanted to create an e-reader specifically design for language learners. It has features like click-to-translate and contextually-aware annotations. Moreover, I added a quiz feature so users can study the words they look up. Ultimately I hoped to make reading in a new language easier and a more effective way to acquire the vocabulary. This project is not currently hosted online.'
  }, {
    title: "Community Health Index",
    image: chi,
    tags: [tags.WEB, tags.DATA],
    technologies: [technologies.REACT, technologies.EXPRESS, technologies.NODE, technologies.R],
    date: 'April, 2018',
    url: 'https://devpost.com/software/community-health-index',
    awards: ['Best Hack Addressing Socioeconomic Health Disparities by Centene', 'Best Big (Open) Data Hack by WashU Institute for Informatics'],
    overview: 'Community Health Index is a project I worked on my senior year of college with a couple of friends for ArchHacks 2017, a large health tech-themed hackathon held at Washington University in St. Louis. We wanted to build a tool to make it easier for people to access, search and gain insights from publicly available health and environmental data. We wanted to help better inform the public about the environmental and health risks they face in their communities and consequently empower them to affect change. We won two of the seventeen categories despite being up against 65 other teams from all over the country. (note: the link is to the hackathon project profile page. The app itself is not currently hosted online)',
    link: 'https://devpost.com/software/community-health-index',
  }, {
    title: "Boulder Finder Independent Study",
    image: boulderFinder,
    tags: [tags.DATA],
    technologies: [technologies.PYTHON, technologies.GIS, technologies.BIGDATA, technologies.ML, technologies.CV],
    date: 'April, 2018',
    overview: 'This was an independent study I did my senior year of college. Inspired by my passion for rock climbing, I wanted to build a tool to analyze LIDAR topographical scans to search for new bouldering (a discipline of climbing) destinations. This project tied together several disparate fields of computer science including big data analysis, distributed computing, GIS, computer vision and machine learning. The algorithm I developed was successful and I discovered a large amount of previously unknown climbing destinations. ',
    link: 'https://docs.google.com/document/d/1A63ih4MVbISsLL3yhgAdoQfLpAZz8RwqjTsbLUDUaxg/edit?usp=sharing',
  }, {
    title: "Car Share Configurator",
    image: carshare,
    tags: [tags.DESIGN, tags.WEB],
    technologies: [technologies.REACT],
    date: 'April, 2018',
    overview: 'The car share configurator is a project I built for a UX/UI art school design class I took my senior year of college. The assignment was to build a configurator for some sort of product or service. I chose this project because of my frustrations with the reservation maker for the car share service sponsored by my university.',
    link: 'https://epadz.github.io/carshare/',
  }, {
    title: "Electoral Map",
    image: electoralMap,
    tags: [tags.WEB, tags.DATA],
    technologies: [technologies.REACT, technologies.D3],
    date: 'March, 2018',
    overview: 'This is a project I did for a masters-level data visualization class I took my senior year of college. We were tasked with using historical election result data to make an interactive electoral map.',
    link: 'https://epadz.github.io/CSE557/EliotPadzensky_a4/',
  }, {
    title: "Online Bike Store",
    image: bikeFinder,
    tags: [tags.DESIGN, tags.WEB],
    technologies: [technologies.REACT],
    date: 'February, 2018',
    overview: 'I did this project for a UX/UI art school design class I took my senior year of college. The assignment was to build an e-commerce site for a bike store. Accomplishing this required balancing form and functionality to make it intuitive to use while also being aesthetically pleasing and conveying a brand identity. One of the largest challenges was to find ways to display large amounts of information without cluttering the UI or overwhelming the user. ',
    link: 'https://epadz.github.io/bike-finder/',
  }, {
    title: "Bouldr",
    image: bouldr,
    tags: [tags.MOBILE, tags.DATA],
    technologies: [technologies.SWIFT],
    date: 'December, 2016',
    overview: 'year of college. The idea for the app was to use weather and location data to create a recommendation engine for users to suggest where to climb during a given weekend. My contribution was building the user interface and app infrastructure. The other group members handled the data and backend infrastructure.',
  }, {
    title: "IOT Sous Vide",
    image: iot,
    tags: [tags.MOBILE, tags.HARDWARE],
    technologies: [technologies.BLE, technologies.ARDUINO, technologies.CORDOVA],
    date: 'April, 2017',
    overview: 'This was a project I did for an internet of things class I took my junior year of college. I was tasked with using a Bluetooth-enabled microprocessor to create an IOT device controlled by a mobile application. This was inspired by DIY guides I had previously come across for building a sous vide cooker with a slow cooker, digital thermometer, digital relay and microprocessor. The accompanying app I developed allows users to control cooking time and temperature and monitor both of these during cooking.',
  }, {
    title: "32-Bit Minecraft Processor",
    image: processor,
    tags: [tags.OTHER],
    technologies: [technologies.MINECRAFT],
    date: 'November, 2016',
    overview: 'I got my first taste of computer engineering in a class I took my junior year of college. The course progressively built up, starting with simple logic circuits and culminating in designing a fully operational processor in VHDL. At the time, I had a summer job teaching classes for a technology camp. Many of the most popular courses involved the computer game Minecraft. I was inspired to explore whether it was feasible to use Minecraft to teach the fundamentals of the content we were covering in my digital logic design course. Over the course of the semester, I replicated in the game many of the things we learned. While I ultimately decided against developing the new curriculum, I continued to use Minecraft as a tool to help me better understand what I was learning in the class. The culmination of this was creating a fully functional 32-bit processor complete with two kilobytes of disk space and a utility for writing assembly programs. I found a plugin which allowed me to copy and paste blocks and thus I could rapidly build the large and complex structures involved. As far as I can tell, this is one of the most advanced and realistic processors ever constructed in Minecraft. ',
  }, {
    title: "Olympic Medals Visualization",
    image: pcords,
    tags: [tags.DATA],
    technologies: [technologies.PROCESSING],
    date: 'March, 2018',
    overview: 'This is a project I did for a masters-level data visualization class I took my senior year of college. We were tasked with using Processing to design an interactive parallel coordinates graph to display multidimensional data. The 2018 Winter Olympics were going on at the time so I decided to create a visualization of Olympic medal counts by country over time. Because this was built in Processing, one of the most challenging parts was figuring out all the math necessary for drawing the visualization. ',
  }, {
    title: "Food Deserts in Chicago",
    image: gis,
    tags: [tags.DATA],
    technologies: [technologies.GIS],
    date: 'December, 2017',
    overview: 'This is a project I did for a GIS course I took my senior year of college. I wanted to explore how socioeconomic factors and access to nutrition related to health trends in Chicago. I had to acquire data from a variety of sources and use ArcMap to query it to gain insights and create maps to display the data in a clear, intuitive way. Ultimately, I was able to confirm my hypothesis that living in a low income or predominantly black or Latino area correlates with decreased access to supermarkets and that both of these factors correlate with poorer health and decreased lifespan.',
    link: './gisPaper.pdf',
  }, {
    title: "Free Apartment Promotion",
    image: apartmentPromo,
    tags: [tags.DESIGN, tags.MOBILE, tags.WEB],
    technologies: [technologies.REACT],
    date: 'March, 2018',
    overview: 'The free apartment promotion is a project I did for a UX/UI art school design class I took my senior year of college. We were tasked with creating a mobile-oriented website to advertise a promotion and collect contact information from users. This meant considering all the constraints imposed by designing for a small screen. Moreover, the site was required to function and look good on larger screen sizes.',
    link: 'https://epadz.github.io/apartment-promo/',
  }, {
    title: "Visualizing the Dark Web",
    image: darkWeb,
    tags: [tags.WEB, tags.DATA],
    technologies: [technologies.D3],
    date: 'March, 2018',
    overview: 'This is a project I did for a masters-level data visualization class I took my senior year of college. We needed to find a news article and use a related dataset to create an interactive visualization to accompany it. In other words, the purpose of the assignment was to challenge us to use data to tell a story. I chose to look at the breakdown of transactions on the dark web. My solution was an interactive pie chart that allows users to click a wedge to see the breakdown of the subcategories of transactions for the category represented by the wedge.',
    link: 'https://epadz.github.io/CSE557/EliotPadzensky_a5/',
  }, {
    title: "Java Blackjack",
    image: blackjack,
    tags: [tags.OTHER],
    technologies: [technologies.JAVA],
    date: 'May, 2014',
    overview: 'Java blackjack is a project I built my senior year of high school for AP computer science. This course was my first exposure to Java and object oriented programming. Although we were only required to make a command line-based interface, I wanted to challenge myself to build an actual user interface.',
  }, {
    title: "Student Voice",
    image: su,
    tags: [tags.WEB],
    technologies: [technologies.WORDPRESS],
    date: 'April, 2016',
    overview: 'Student Voice is a WordPress site I built for the Washington University Student Union Senate. I was the Student Union web developer throughout most of college and this was one of my first sites. I was tasked with making a forum where students could post requests for things they think could be improved at the university. The site tracks the progress of projects and allows the Senate to post updates as they are completed. Due to the requirements of the project, I had to do a lot of under-the-hood coding to get around the constraints of WordPress.',
    link: 'https://studentvoice.wustl.edu/',
  }, {
    title: "Diversity Affairs Council",
    image: dac,
    tags: [tags.WEB],
    technologies: [technologies.WORDPRESS],
    date: 'September, 2016',
    overview: 'This is a WordPress site I built for the Washington University Diversity Affairs Council in my capacity as the Student Union web developer.',
    link: 'http://dac.wustl.edu/',
  }, {
    title: "Health Cost Manager",
    image: hcm,
    tags: [tags.WEB],
    technologies: [technologies.JQ, technologies.PHP],
    date: 'April, 2016',
    overview: 'Health Cost Manager is a web app operated by Employee Tech, a small HR technology consulting company for which I had previously done a WordPress site. I was on the small team of developers that built the first version. This was my first exposure to both full stack web development and working as a member of a team in a professional context. I primarily did frontend development and UI design, however, I also did some PHP backend scripting.',
  }, {
    title: "Employee Tech",
    image: eteh,
    tags: [tags.WEB],
    technologies: [technologies.WORDPRESS],
    date: 'August, 2015',
    overview: 'Employee Tech is a small HR technology consulting company. The owner wanted to be able to easily maintain the site and wanted the site to be built in WordPress.',
    link: 'http://employeetech.com/',
  }, {
    title: 'Mosaic Whispers',
    image: whispers,
    tags: [tags.WEB],
    technologies: [technologies.WORDPRESS],
    date: 'October, 2017',
    overview: 'Mosaic Whispers is an a cappella group at Washington University in St. Louis. As the Student Union web developer, I was tasked with redoing their site after their old one was defaced by hackers. This meant extracting a lot of content from corrupted files which made the project more difficult than most of the other projects I worked on in that job.',
    link: 'https://mosaicwhispers.wustl.edu',
  }, {
    title: "Perk Center Cafe",
    image: perk,
    tags: [tags.WEB],
    technologies: [technologies.PHP],
    date: '2011',
    overview: 'The Perk Center Café is a small, nonprofit café that hires individuals with special needs to give them real world job experience and training. I started volunteering there as a job coach at age twelve and continued to be involved for the next six years. After learning that they lacked a web site, I volunteered to make one pro-bono when I was fourteen. As my programming skills progressed, I continued to improve the site over time. This included creating a PHP admin dashboard so the owners could post events. ',
    link: 'www.perkcentercafe.org',
  }
]