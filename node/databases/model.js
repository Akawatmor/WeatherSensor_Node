const {Sequelize, DataTypes} = require('sequelize');

// Init Sequelize
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS, {
        host: process.env.DB_HOST,
        dialect: 'mysql'
    }
);

const Device = sequelize.define('Device', { } );
const Sensor = sequelize.define('Sensor', { 
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    unit: {
        type: DataTypes.STRING,
        allowNull: false
    }
} );
const Reading = sequelize.define('Reading', { 
    value: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    measuredAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
} );

// Define relationships
Device.hasMany(Sensor, { 
    foreignKey: 'deviceId',
    onDelete: 'CASCADE'
    });
Sensor.belongsTo(Device, { foreignKey: 'deviceId' });

Sensor.hasMany(Reading, { foreignKey: 'sensorId' });
Reading.belongsTo(Sensor, { 
    foreignKey: 'sensorId' ,
    onDelete: 'CASCADE'
    });

// Export models and sequelize instance
module.exports = {
    sequelize,
    Device,
    Sensor,
    Reading
};