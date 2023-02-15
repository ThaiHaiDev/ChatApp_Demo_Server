const Message = require('../models/message.model');

const messController = {
    // GET ALL NOTIS
    async getAllMess (req, res) {
        try {
            const noti = await Message.find()
            res.status(200).json(noti)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    // ADD NOTI
    async addMess(req, res) {
        try{
            const formData = req.body
            const newMess = new Message(formData)
            const saveMess = await newMess.save()
            res.status(200).json(saveMess)
        } catch(err) {
            res.status(500).json(err)
        }
    },

   
}

module.exports = messController