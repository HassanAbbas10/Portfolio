import { Link } from "react-scroll"


const Header = () => {
  return (<>
    <header className="p-5 text-white bg-black border-b-2 shadow-2xl border-custom-teal shadow-custom-green hover:shadow-custom-teal hover:duration-500">
    <div className="container flex items-center justify-between mx-auto">
      <h1 className="text-3xl font-extrabold font-quicksand text-custom-green">Hassan Abbas</h1>
      <nav>
        <ul className="flex space-x-4 cursor-pointer">
          <Link to="about" smooth={true} duration={500}>About</Link>
          <Link to="projects" smooth={true} duration={500}>Projects</Link>
          <Link to="contact" smooth={true} duration={500}>Contact</Link>
        </ul>
      </nav>
    </div>
  </header>
  </>
  )
}

export default Header