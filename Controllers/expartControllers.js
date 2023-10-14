const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.applyExpart = async (req, res, next) =>{
    try {
        const { projects, expartise, address, phone,name,email, getInterView, hired } = req.body;
        // Validation can be added here
        const result = await prisma.expert.create({
          data: {
            email,
            name,
            phone,
            address,
            projects,
            expartise,
            getInterView,
            hired
          },
        });
    
        res.json(result);
      } catch (error) {
        next(error);
      }
}

exports.allExpart = async (req, res, next) =>{
    try {
        const result = await prisma.expert.findMany()
        res.json(result)
      } catch (error) {
        res.json({ error: `No post was found` })
      }
}