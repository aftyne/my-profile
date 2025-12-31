import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa"
import { LuMousePointerClick } from "react-icons/lu"
import { Link } from "react-router-dom"
import logo from '../src/assets/logo.jpg';

const menus = [
  {
    icon: <LuMousePointerClick className="text-xl text-gray-800 "/>,
    name: "Portofolio",
    url: ""
  },
  {
    icon: <FaInstagram className="text-xl text-gray-800"/>,
    name: "Instagram",
    url: "https://www.instagram.com/marcoism_14/"
  },
  {
    icon: <FaWhatsapp className="text-xl text-gray-800"/>,
    name: "Whatsapp",
    url: "https://wa.me/6282245394005"
  },
  {
    icon: <FaLinkedinIn className="text-xl text-gray-800"/>,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/brian-marco-agustian"
  },
]

const App = () => {
  return (
    <div className="flex justify-center items-center h-[100vh] bg-[url('/bg.webp')] bg-center bg-cover relative">
      <div className="bg-white/80 absolute h-[100vh] w-full top-0 left-0"></div>
      <div className="max-w-sm w-full p-3 z-20">
        <div className="flex flex-col items-center gap-y-3 mb-5">
          <div className="size-28 bg-[#adff2f] border-2 border-dashed border-black  relative rounded-full overflow-hidden shadow-img flex justify-center items-center text-3xl font-bold">
            BMA
          </div>
          <h1 className="font-bold text-3xl">Brian Marco Agustian</h1>
          <p className="w-64 text-center font-medium text-gray-900 text-sm">@marcoism_14</p>
          <p className="w-64 text-center font-medium text-gray-900">Discovery my work and see where you can find</p>
        </div>
        <div className="flex flex-col gap-y-8 p-3 md:p-0">
          {
            menus && menus.map((item, index) => (
              <Link key={item.url} to={item.url} className="flex items-center border-2 border-dashed border-black gap-x-3 bg-[#adff2f] p-3  rounded-full shadow-block duration-500 hover:-translate-y-2">
                {item.icon}
                <p className="lg:text-lg font-medium">{item.name}</p>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default App