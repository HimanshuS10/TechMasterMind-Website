import Sitemap from 'react-router-sitemap';  // Correct import for default export

const router = [
  { path: '/', routes: [{ path: '/about' }, { path: '/case-studies' }, { path: '/support' }] },
];

new Sitemap(router)  // Instantiate the Sitemap class
  .build('https://techmastermind.ca')  // Replace with your site’s URL
  .save('./public/sitemap.xml');
