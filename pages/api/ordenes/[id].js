import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
    const { id } = req.query;
    console.log("edit2: ",req.query)
    

    if (req.method === "POST") {

        const ordenActualizada = await prisma.orden.update({
            where: {
                id: parseInt(id),
            },
            data: {
                estado: true,
            },
        });

        res.status(200).json(ordenActualizada);
    }

} 