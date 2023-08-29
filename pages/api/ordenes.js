import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
    console.log("ordenesss")
    const prisma = new PrismaClient();
    const { nombre, total, pedido, fecha } = req.body;


    // obtener ordenes    
    const ordenes = await prisma.orden.findMany({
        where: {
            estado: false
        }
    });
    
    res.status(200).json(ordenes);
    

    // crear orden
    if (req.method === "POST") {
        const orden = await prisma.orden.create({
            data: {
                nombre: nombre,
                total: total,
                pedido: JSON.stringify(pedido),
                fecha: fecha,
            },
        });
        res.status(200).json(orden);
    }
} 
