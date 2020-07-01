module.exports = (sequelize, dataTypes) => {
  let alias = "Movie";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    created_at: {
        type: dataTypes.DATE
    },

    updated_at: {
        type: dataTypes.DATE
    },

    title: {
      type: dataTypes.STRING,
    },

    rating: {
      type: dataTypes.DECIMAL(3, 1),
    },

    awards: {
      type: dataTypes.INTEGER,
    },

    release_date: {
      type: dataTypes.DATE,
    },

    length: {
      type: dataTypes.INTEGER,
    },

    genre_id: {
      type: dataTypes.INTEGER,
    }

  };

  let config = {
    tableName: "movies",
    timestamps: false,
  };

  const Movie = sequelize.define(alias, cols, config);

  return Movie;
};
