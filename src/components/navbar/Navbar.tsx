import Container from '@/utils/Container'
import { IoIosMenu } from "react-icons/io";
function Navbar() {
    return (
        <nav className='sticky top-0 left-0 w-full py-6 border-b border-gray-200'>
            <Container>
                <div>
                    <span className='text-2xl text-[#10B981]'><IoIosMenu /></span>
                    <div>
                        
                    </div>
                </div>
            </Container>
        </nav>
    )
}

export default Navbar