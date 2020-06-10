module.exports = (sequelize, DataTypes) => {
    const Message = sequelize.define('Message', {
      name: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: true,
        },
      },
      onde: DataTypes.STRING,
      phone: {
        type: DataTypes.DOUBLE,
        validate: {
          len: [8, 12],
        },
      },
      message: DataTypes.STRING,
    });
  
    return Message;
  };