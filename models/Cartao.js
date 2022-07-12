module.exports = (sequelize, DataTypes) => {
    const Cartao = sequelize.define(
        "Cartao",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },

            apelido_cartao: DataTypes.STRING,

            numero_cartao: DataTypes.STRING,

            cvv: DataTypes.STRING,

            vencimento_cartao: DataTypes.STRING,

            nome_cartao: DataTypes.STRING,

            cliente_id: Sequelize.INTEGER,
            // cliente_id: {
            //     type: Sequelize.INTEGER,
            //     allowNull: false,
            //     references: {
            //         model: "clientes",
            //         key: 'id'
            //     }
            // },

            created_at: {
                type: DataTypes.DATE,
            },

            updated_at: {
                type: DataTypes.DATE,
            },
        },
        {
            tableName: 'cartoes',
            timestamp: true
        }
    );

    Cartao.associate = (listaDeModels) => {
        Cartao.belongTo(listaDeModels.Cartao, {
            foreingKey: "cliente_id",
            as: 'cliente'
        })
    };

    return Cartao;
};
