const User = require('./User');
const Post = require('./Post');

User.hasMany(Post, {
  foreignKey: 'id',
  onDelete: 'CASCADE',
});

Post.belongsTo(User, {
  foreignKey: 'id',
});

Post.hasMany(Comment, {
  foreignKey: 'id',
  onDelete: 'CASCADE',
});

Comment.belongsTo(Post, {
  foreignKey: 'id',
});

module.exports = { User, Pet };
