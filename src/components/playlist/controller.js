import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const create = async(req,res) => {
    try{
        const { body } = req;
        const playlist = await prisma.playList.create({
            data:{
                ...body
            }
        });
        res.json({
            ok:true,
            data:playlist
        })
    }catch(error){
        res.json({
            ok:false,
            data:error.message
        });
    }
}

export const detail = async(req,res) => {
    try{
        const { id } = req.params;
        const detailPlaylist = await prisma.playList.findUnique({
            where:{
                id:Number(id)
            },
            include:{
                song:{
                    select:{
                        tittle:true
                    }
                }
            }  
        })
        res.json({
            ok:true,
            data:detailCharacter
        })
    }catch(error){
        res.json({
            ok:false,
            data:error.message
        })
    }
}
