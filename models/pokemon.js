module.exports = function (sequelize, DataTypes) {
  var Pokemon = sequelize.define('Pokemon', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lvl: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
  });

  Pokemon.associate = function (models) {
    // We're saying that a Pokemon should belong to an Author
    // A Pokemon can't be created without an Author due to the foreign key constraint
    Pokemon.belongsTo(models.Trainer, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Pokemon;
};
