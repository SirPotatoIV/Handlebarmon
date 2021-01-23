module.exports = (sequelize, DataTypes) => {
  const Pokemon = sequelize.define(
    'Pokemon',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lvl: {
        type: DataTypes.NUMBER,
        allowNull: false,
        defaultValue: 1,
      },
    },
    {
      sequelize,
      modelName: 'Pokemon',
      timeStamps: false,
    },
  );

  Pokemon.associate = (models) => {
    Pokemon.belongs(models.Pokemon, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Pokemon;
};
