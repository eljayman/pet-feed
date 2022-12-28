const User = require('./User');
const Post = require('./Post');

User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

// Post.hasMany(Comment, {
//   foreignKey: 'id',
//   onDelete: 'CASCADE',
// });

// Comment.belongsTo(Post, {
//   foreignKey: 'id',
// });

module.exports = { User, Post };
