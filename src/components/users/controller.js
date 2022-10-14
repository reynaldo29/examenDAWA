import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const findAll = async (req, res) =>{
    try{
        const users = await prisma.user.findMany({
            select:{
                id:true,
                name:true,
                email:true,
                password:true
            }
        })
        res.json({
            ok: true,
            data:users
        });
    }catch(error){
        res.json({
        });
    }
};
export const create = async(req,res) => {
    try{
        const { body } = req;
        const user = await prisma.user.create({
            data:{
                ...body
            }
        });
        res.json({
            ok:true,
            data:user
        })
    }catch(error){
        res.json({
            ok:false,
            data:error.message
        });

    }
}

export const login = async (req,res) => {
    try{
      const {body} = req;
  
      const user = await prisma.user.findUnique({
        where:{
          email:body.email
        }
      })
  
      if(!(body.email && body.password)){
        res.status(400).send("enter email and password");
      }
      if(await body.password===user.password){
       
        return res.status(200).send({
          msg:'Logged',
          user
        })
      }else{
        res.status(403).send("Invalid credentials");
      }
    }catch(err){
      console.log(err)
    }
  }
