import { Link, Outlet, Navigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Logo from '@/components/Logo'
import NavMenu from '@/components/NavMenu'
import { useAuth } from '@/hooks/useAuth'

export default function AppLayout() {

    const { data, isError, isLoading } = useAuth()
    if(isLoading) return 'Cargando...'
    if(isError) {
        return <Navigate to='/auth/login' />
    }

    if(data) return (
        <>
            <header className='bg-blue-800 py-5'>
                <div className=' max-w-screen-2xl mx-auto flex flex-col lg:flex-row justify-between items-center'>
                    <div className='w-64'>
                        <Link to={'/'}>
                            <Logo />
                        </Link>
                    </div>

                    <NavMenu 
                        name={data.name}
                    />
                </div>
            </header>

            <section className='max-w-screen-2xl mx-auto mt-10 p-5'>
                <Outlet />
            </section>

            <footer className='py-5'>
                <p className='text-center'>
                Lenguaje de Programación Web - Ingeniería de Ejecución en Computación e Informática. {new Date().getFullYear()}
                </p>
                <p className='text-center'>
                Walter Gallegos - Maximiliano Gómez
                </p>
            </footer>

            <ToastContainer
                pauseOnHover={false}
                pauseOnFocusLoss={false}
            />
        </>
    )
}
