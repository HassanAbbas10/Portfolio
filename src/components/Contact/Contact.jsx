

const Contact = () => {
  return (
    <>
    <section id="contact" className="mb-8 mt-5 ">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl py-4 font-bold uppercase text-custom-teal font-quicksand">Contact</h2>
        <p className="mb-8 text-white ">Feel free to get in touch with me for any project inquiries or just to say hello!</p>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <input type="text" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Name" />
          </div>
          <div className="mb-4">
            <input type="email" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Email" />
          </div>
          <div className="mb-4">
            <textarea className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Message" rows="5"></textarea>
          </div>
          <button type="submit" className="w-full p-3 font-quicksand animate-shimmer items-center justify-center border border-custom-green bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">Send Message</button>
        </form>
      </div>
    </section>
    </>
  )
}

export default Contact