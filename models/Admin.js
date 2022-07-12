module.exports = (sequelize, DataTypes) => {
    const Admin = sequelize.define(
        "Admin",
        {
            nome: DataTypes.STRING,
            funcao: DataTypes.STRING,
            matricula_colaborador: DataTypes.STRING,
            email: DataTypes.STRING,
            senha: DataTypes.STRING,
            // created_at: DataTypes.DATE,
            // updated_at: DataTypes.DATE
        },
        {
            tableName: 'administradores',
            timestamp: true
        }
    );

    return Admin;
};
