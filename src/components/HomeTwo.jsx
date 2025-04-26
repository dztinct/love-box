import box from '../images/love-box.jpg'

const HomeTwo = () => {
  return (
    <div>
      <div className="min-h-screen bg-white flex justify-center items-center">
        <div className="container flex justify-center">
          <div className="max-w-sm">
            <div className="bg-red-700 relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
              <img className="rounded-lg h-[26rem] md:h-96 lg:h-96 w-full" src={box} alt="love-box" />
              <div className="py-6 px-8 rounded-lg bg-red-700">
                <h1 className="text-gray-100 font-bold text-2xl mb-3  hover:cursor-pointer">You are one click away from experiencing the LOVE BOX.</h1>
                <p className="text-gray-100 tracking-wide text-center">Send a WhatsApp message through the link below.</p>
                <a href="https://wa.me/message/N7RLKYVMOWZSN1" className="mt-6 py-2 px-4 block bg-white text-red-700 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center">Click here</a>
              </div>
              {/* <div className="absolute top-2 right-2 py-2 px-4 bg-white rounded-lg">
                <span className="text-md">$150</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeTwo
