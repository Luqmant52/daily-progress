const Users = sequelize.define('user',{
    name: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING},
    password: {type: DataTypes.STRING},
    cpassword: {type: DataTypes.STRING},
})