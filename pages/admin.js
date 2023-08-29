import useSWR from "swr"
import axios from "axios"
import AdminLayout from "@/layout/AdminLayout"
import Orden from "@/components/Orden"

export default function Admin() {
    const fetcher = () => axios('/api/ordenes').then(data => data.data)
    const { data, error, isLoading } = useSWR('/api/ordenes', fetcher, { refreshInterval: 100 })




    return (
        <AdminLayout title="Admin">
            <h1 className="text-4xl font-black ">Panel de Administracion</h1>
            <p className="text-2xl my-5"> Administra las ordenes </p>


            {
                data && data.length > 0 ? 
                data.map(orden => (
                    <Orden 
                        key={orden.id}
                        orden={orden}
                        pedido={JSON.parse(orden.pedido)}
                    />
                ))
                :
                <p className="text-2xl my-5"> No hay ordenes  pendientes</p>
            }

        </AdminLayout>
    )
}
