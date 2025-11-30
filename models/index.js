const Student = require('./students');
const IdentityCard = require('./identitycard');
const Departement = require('./department')


Student.hasOne(IdentityCard);
IdentityCard.belongsTo(Student);

Departement.hasMany(Student);
Student.belongsTo(Departement);

module.exports = {
    Student,
    IdentityCard,
    Departement
}