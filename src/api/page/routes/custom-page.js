module.exports = {
    routes: [
      { // Path defined with a URL parameter
        method: 'GET',
        path: '/pages/find/:slug',
        handler: 'page.findBySlug',
        
      },
    ],
  };
     
   