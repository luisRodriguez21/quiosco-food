import Image from "next/image"
import useQuiosco from "@/hooks/useQuiosco"
import Categoria from "@/components/Categoria"

const Sidebar = () => {
    const { categorias } = useQuiosco()


    return (
        <>
            <Image priority={true} width={300} height={100} src="/assets/img/logo.svg" alt="imagen logotipo" />
            <nav className="mt-10">
                {categorias.map((categoria) => (
                    <Categoria 
                        key={categoria.id} 
                        categoria={categoria} 
                    />
                ))}
            </nav>
        </>
    )
}

export default Sidebar
