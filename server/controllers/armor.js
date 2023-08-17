const { Helm, Chest, Leg, ArmorSet } = require('../models/appModels')

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

    addArmorSet: async (req, res) => {
        try {
            const { nameEntry, helmEntry, chestEntry, legEntry } = req.body
            const newArmorSet = await ArmorSet.create({
                armorName: nameEntry, 
                helmArmor_id: helmEntry, 
                chestArmor_id: chestEntry, 
                legArmor_id: legEntry
            })
            res.sendStatus(200)
            console.log('line 41', newArmorSet)
        } catch (err) {
            console.log('armor Not added', err)
            res.sendStatus(400)
        }
    },

    getArmorSets: async (req, res) => {
        try {
            const sets = await ArmorSet.findAll();
            res.status(200).send(sets)
        } catch (error) {
            console.log(error)
        }
    }
}