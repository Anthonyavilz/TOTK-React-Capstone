const { Helm, Chest, Leg } = require('../models/appModels')

module.exports = {
    getHelms: async (req, res) => {
        try {
            const helms = await Helm.findAll();
            res.status(200).send(helms);
        } catch (err) {
            console.log(err);
        }
    },
    
    getChestArmor: async (req, res) => {
        try {
            const chestArmor = await Chest.findAll();
            res.status(200).send(chestArmor);
        } catch (err) {
            console.log(err);
        }
    },
    
    getLegArmor: async (req, res) => {
        try {
            const legArmor = await Leg.findAll();
            res.status(200).send(legArmor);
        } catch (err) {
            console.log(err);
        }
    },
}