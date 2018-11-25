const {forwardTo} = require('prisma-binding');

const Query = {
  // forward it directly to db:
  items: forwardTo('db')

  // do it ourselves:
  // async items(parent, args, ctx, info) {
  //   const items = await ctx.db.query.items();
  //   return items;
  // }
};

module.exports = Query;
