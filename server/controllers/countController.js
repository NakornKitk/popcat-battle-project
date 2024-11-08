const Countmodel = require('../models/count')


exports.add = async (req,res)=>{
    try {
        // Find the latest document in the Count collection
        let count = await Countmodel.findOne().sort({ _id: -1 });

        // If no document exists, create the first one with numCount = 1
        if (!count) {
            count = new Count({ numCount: 1 });
        } else {
            // Otherwise, increment numCount by 1
            count.numCount += 1;
        }

        // Save the updated count
        await count.save();

        // Send a success response with the updated count
        res.status(200).json({
            message: 'Count incremented successfully',
            data: count,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error incrementing count',
            error: error.message,
        });
    }
}


exports.get = async (req,res) =>{
    try {
        let count = await Countmodel.findOne().sort({ _id: -1 });
        
        res.status(200).json({
            message: 'GET successfully',
            data: count,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error GET',
            error: error.message,
        });
    }
}