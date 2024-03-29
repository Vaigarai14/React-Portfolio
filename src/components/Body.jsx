import backgroundimage from '../assets/backgroundimage.png'
import { Header } from './Header'


export const Body = () => {

    const myStyle = {
        backgroundPosition: "center",
        // backgroundRepeat: "norepeat",
        backgroundImage: `url('https://assets-global.website-files.com/62e3ee10882dc50bcae8d07a/631a5d4631d4c55a475f3e34_noise-50.png')`,
    }

    return (
        <div style={myStyle} className=" h-screen backdrop-blur-md bg-[#16171b]" >
            <Header style={myStyle} />
        </div>
    )
}