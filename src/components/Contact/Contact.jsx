

const Contact = () => {
  return (
    <>
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="mb-4 text-4xl font-bold">Contact</h2>
        <p className="mb-8 text-gray-700">Feel free to get in touch with me for any project inquiries or just to say hello!</p>
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
          <button type="submit" className="w-full p-3 text-white bg-gray-800 rounded-lg">Send Message</button>
        </form>
      </div>
    </section>
    </>
  )
}

export default Contact