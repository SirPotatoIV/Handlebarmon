module.exports = function (sequelize, DataTypes) {
  let Trainer = sequelize.define('Trainer', {
    // Giving the Trainer model a name of type STRING
    name: { type: DataTypes.STRING, allowNull: false },
    badgeCount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  });

  Trainer.associate = function (models) {
    // Associating Trainer with Pokemons
    // When an Trainer is deleted, also delete any associated Pokemons
    Trainer.hasMany(models.Pokemon, {
      onDelete: 'cascade',
    });
  };

  return Trainer;
};
