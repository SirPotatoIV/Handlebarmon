module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      badgeCount: {
        type: DataTypes.NUMBER,
        allowNull: false,
        defaultVaule: 0,
      },
    },
    {
      sequelize,
      modelName: 'User',
      timeStamps: false,
    },
  );

  User.associate = (models) => {
    User.hasMany(models.Pokemon, {
      onDelete: 'cascade',
    });
  };

  return User;
};
