import { Profile } from "./Profile"


export const Header = ({ style }) => {

  const navList = {

  }

  return (
    <div style={style} className="py-5 backdrop-blur-lg" >
      < div className="flex justify-between items-center mx-24" >
        <h1 className="animate__animated animate__slideInLeft text-3xl text-[#a7ef45] " >{"<Vaikarai />"}</h1>
        <ul className="inline-flex p-4 text-[#a7ef45] animate__animated animate__slideInRight">
          <li className="mx-2 text-xl">About</li>
          <li className="mx-2  text-xl">Skills</li>
          <li className="mx-2  text-xl">Education</li>
          <li className="mx-2  text-xl">Projects</li>
          <li className="mx-2  text-xl animate-[slideOutRight]">Github</li>
        </ul>
      </div >
      <hr
        class="my-2 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-80 dark:via-neutral-400" />
      <Profile />
    </div >
  )
}

