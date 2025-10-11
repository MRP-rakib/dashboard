'use client'
import { useAppDispatch } from '@/redux/hooks';
import { toggleSidebar } from '@/redux/sidebarSlice';
import Container from '@/utils/Container'
import { IoIosMenu } from "react-icons/io";
function Navbar() {
    const dispatch = useAppDispatch()
    return (
        <nav className='sticky top-0 left-0 w-full py-6 border-b border-gray-20 z-50 bg-white'>
            <Container>
                <div>
                    <button onClick={()=>dispatch(toggleSidebar())} className='text-2xl text-[#10B981] cursor-pointer'><IoIosMenu /></button>
                    <div>
                        
                    </div>
                </div>
            </Container>
        </nav>
    )
}

export default Navbar