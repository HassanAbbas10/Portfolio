

const Footer = () => {
  return (
    <>
     <footer className="p-5 duration-700 bg-black border-t-2 sm:rounded-t-full  hover:border-purple  text-custom-green font-quicksand shadow-custom-green border-custom-teal  hover:shadow-custom-teal hover:duration-700 shadow-inner">
      <div className="container mx-auto text-center ">
        <p className="flex flex-col sm:flex-row justify-center items-center">&copy; {new Date().getFullYear()} Hassan Abbas.    <span className="px-1">All rights reserved. </span>      <span>Just an ordinary React Dev 🎃</span> </p>
      </div>
    </footer>
    </>
  )
}

export default Footer