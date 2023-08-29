import Image from "next/image"
import axios from "axios"
import { toast } from "react-toastify"
import { formatMoney } from "@/helpers/general"


const Orden = ({ orden, pedido }) => {
    const { id, total, nombre } = orden

    const completarOrden = async () => {
        console.log("completando... ", id)

        try {
            
            const data = await axios.post(`/api/ordenes/${id}`)
            toast.success("Orden completada")

        } catch (error) {
            toast.success("Hubo un error")
        }

    }


    return (
        <div className="border p-10 space-y-5">
            <h3 className="text-2xl font-bold ">Orden: {id}</h3>
            <p className="text-lg font-bold">Cliente: {nombre} </p>

            <div>
                {
                    pedido.map(articulo => (
                        <div key={articulo.id} className="py-3 flex border-b last-of-type:border-0 items-center ">
                            <div className="w-32">
                                <Image
                                    width={400}
                                    height={500}
                                    src={`/assets/img/${articulo.imagen}.jpg`}
                                    alt={`Imagen platillo ${articulo.nombre}`}
                                />
                            </div>
                            <div className="p-5 space-y-2">
                                <h4 className="text-xl font-bold text-amber-500">{articulo.nombre}</h4>
                                <p className="text-lg font-bold">Cantidad: {articulo.cantidad}</p>


                            </div>
                        </div>
                    ))
                }
            </div>

            <div className="md:flex md:items-center md:justify-between my-10">
                <p className="mt-5 font-black text-4xl text-amber-600">
                    Total a pagar: {formatMoney(total)}
                </p>
                <button
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-10 uppercase rounded-lg mt-2"
                    type="button"
                    onClick={() => completarOrden()}
                >
                    Completar oden
                </button>
            </div>



        </div>
    )
}

export default Orden
