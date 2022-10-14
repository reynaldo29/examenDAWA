import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const findAll = async (req, res) =>{
    try{
        const songs = await prisma.song.findMany({
            select:{
                id:true,
                name:true,
                artist:true,
                album:true,
                year:true,
                genre:true,
                duration:true
            }
        })
        res.json({
            ok: true,
            data:songs
        });
    }catch(error){
        res.json({
        });
    }
};

export const create = async(req,res) => {
    try{
        const { body } = req;
        const song = await prisma.song.create({
            data:{
                ...body
            }
        });
        res.json({
            ok:true,
            data:song
        })
    }catch(error){
        res.json({
            ok:false,
            data:error.message
        });

    }
}

export const read = async(req,res) => {
    try{
        const { id } = req.params;
        const readCharacter = await prisma.song.findUnique({
            where:{
                id:Number(id)
            },
            select:{
                id:true,
                name:true,
                artist:true,
                album:true,
                year:true,
                genre:true,
                duration:true
            } 
        })
        res.json({
            ok:true,
            data:readCharacter
        })
    }catch(error){
        res.json({
            ok:false,
            data:error.message
        })
    }
}