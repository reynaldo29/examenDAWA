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
                user:{
                    select:{
                        song:{
                            where:{
                                id:Number(id)
                            }
                        }
                    }
                }
            }  
        })
        res.json({
            ok:true,
            data:detailPlaylist
        })
    }catch(error){
        res.json({
            ok:false,
            data:error.message
        })
    }
}

export const findOnePlayList= async(req, res)=>{
    try{
      const{id} = req.params;
      const playlistDetalle = await prisma.playList.findUnique({
        where:{
          id:Number(id)
        },
      })
      const{songId} = playlistDetalle
      const song = await prisma.song.findMany({
        where:{
          id:Number(songId)
        },
        select:{
                id:true,
                name:true,
                artist:true,
                album:true,
                year:true,
                genre:true,
                duration:true
        },
      })
      return res.json({
          ok:true,
          data: playlistDetalle, song
      })
    }catch(error){
      return res.json({
        ok:false,
        error:error.message
      })
    }
  }
