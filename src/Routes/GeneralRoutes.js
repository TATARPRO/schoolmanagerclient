import React from 'react';

//Static
const Home = React.lazy(() => import('../views/CMS/preliminary/Index'));
const Contact = React.lazy(() => import('../views/CMS/preliminary/Contact'));
const About = React.lazy(() => import('../views/CMS/preliminary/About'));
const Events = React.lazy(() => import('../views/CMS/preliminary/Events'));
const Blog = React.lazy(() => import('../views/CMS/preliminary/Blog'));
const BlogPost = React.lazy(() => import('../views/CMS/preliminary/BlogPost'));
const Admissions = React.lazy(() => import('../views/CMS/preliminary/Admissions'));
const Gallery = React.lazy(() => import('../views/CMS/preliminary/Gallery'));
const ResultPage = React.lazy(() => import('../views/Dashboard/msc/ResultPage'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const GeneralRoutes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/index', name: 'Home', component: Home },

  { path: '/contact-us', name: 'Contact', component: Contact },
  { path: '/about-us', name: 'About', component: About },
  { path: '/recent-events', name: 'Events', component: Events },
  { path: '/blog', name: 'Blog', component: Blog },
  { path: '/blog-post/:id', name: 'Blog post', component: BlogPost },
  { path: '/article', name: 'Admissions', component: Admissions },
  { path: '/gallery', name: 'Gallery', component: Gallery },
  { path: '/result-sheet', name: 'Result sheet', component: ResultPage }
];

export default GeneralRoutes;
//