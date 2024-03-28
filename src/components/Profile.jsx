import { useTypewriter } from 'react-simple-typewriter'

export const Profile = () => {

    const [typeEffect] = useTypewriter({
        words: ["Front End Developer", "React Developer"],
        loop: {},
        typeSpeed: 200,
        deleteSpeed: 40
    })

    return (<div>
        <div className=" my-48 mx-10 w-8/12 font-NanumMyeongjo ">
            <div className="">
                <h1 className="text-gray-300 text-6xl font-NanumMyeongjo my-5">Hi ,I'm <span className='text-[#a7ef45] font-semibold'>Vaikarai..</span></h1>
            </div>
            <p className='text-6xl text-gray-300'>
                {"I'm a "}
                <span className=" text-[#a7ef45] font-semibold border-r-2 border-[#a7ef45F] ">{typeEffect}</span>
            </p>
            <p className='text-gray-200 my-10 w-[30em] text-xl'>An aspiring frontend developer with a strong hold on JavaScript, CSS, TailwindCSS , Redux and other UI frameworks and diving deep into the vast knowledge of ReactJS.</p>
        </div>
    </div >
    )
}


{/* <img className="w-14 hover:animate-spin animate-[spin 1s ease-out]" src="https://assets-global.website-files.com/6459361b94a94b67e304d75e/655e87b6f962e71df2b1df89_Designfly_Icon.svg" /> */ }