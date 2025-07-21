

const Footer = () => {
  return (
    <>
     <footer className="p-5 duration-700 bg-black border-t-2 sm:rounded-t-full  hover:border-purple  text-custom-green font-quicksand shadow-[rgba(255,255,255,0.3)] shadow-lg hover:border-[#ffff] hover:shadow-[rgba(255,255,255,0.3)] hover:shadow-2xl hover:duration-700 ">
      <div className="container mx-auto text-center ">
        <p className="flex flex-col sm:flex-row justify-center items-center">&copy; {new Date().getFullYear()} Hassan Abbas.    <span className="px-1">All rights reserved. </span>      <span>Just an ordinary React Dev 🎃</span> </p>
      </div>
    </footer>
    </>
  )
}

export default Footer