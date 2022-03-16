'use strict';

/**
 *  page controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::page.page', ({ strapi }) =>  ({
   
   
    async findBySlug(ctx, next) {
      
      let { slug } = ctx.params;
      console.log(slug);
    
     
  
      const entry = await strapi.db.query('api::page.page').findOne({
       
        where: { slug : slug },
        populate : true,
      });
      
      return entry;
    
    
    
    }
    
  }));
  
  
