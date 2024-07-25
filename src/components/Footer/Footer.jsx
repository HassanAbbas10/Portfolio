

const Footer = () => {
  return (
    <>
     <footer className="p-5 text-white bg-gray-800">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </div>
    </footer>
    </>
  )
}

export default Footer