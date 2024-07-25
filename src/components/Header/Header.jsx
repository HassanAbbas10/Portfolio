

const Header = () => {
  return (<>
    <header className="p-5 text-white bg-gray-800">
    <div className="container flex items-center justify-between mx-auto">
      <h1 className="text-3xl font-bold">My Portfolio</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#about" className="hover:underline">About</a></li>
          <li><a href="#projects" className="hover:underline">Projects</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
  </>
  )
}

export default Header