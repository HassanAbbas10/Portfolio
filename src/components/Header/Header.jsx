import { Link } from "react-scroll"


const Header = () => {
  return (<>
  <header className="p-5 font-bold uppercase duration-700 bg-black border-b-2 rounded-b-full shadow-2xl hover:border-purpletext-4xl text-custom-teal font-quicksand border-custom-teal shadow-custom-green hover:shadow-custom-teal hover:duration-700">
  <div className="container flex flex-wrap items-center justify-center mx-auto sm:justify-between">
    <h1 className="text-3xl font-extrabold font-quicksand text-custom-green sm:pl-8">Hassan Abbas</h1>
    <nav className="w-full md:w-auto">
      <ul className="flex-col items-center justify-center mt-2 space-y-2 text-center cursor-pointer sm:items-center sm:flex sm:flex-row md:space-y-0 md:space-x-4 md:mt-0 sm:pr-12">
        <li>
          <Link to="about" smooth={true} duration={500} className="duration-500 font-quicksand hover:text-custom-orange">About</Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500} className="duration-500 font-quicksand hover:text-custom-orange">Projects</Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} className="duration-500 font-quicksand hover:text-custom-orange">Contact</Link>
        </li>
      </ul>
    </nav>
  </div>
</header>

  </>
  )
}

export default Header