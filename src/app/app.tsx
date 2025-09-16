import logo from "../images/logo.png"
import img1 from "../images/img1.png"
import img2 from "../images/img2.png"
import img3 from "../images/img3.png"
import img4 from "../images/img4.png"

function App() {
  return (
    <div className="h-full w-full bg-background font-poppins pt-4 md:pt-6 lg:pt-8">
      {/* Section hero */}
      <div>
        {/* Top bar */}
        <div className="left-0 right-0 h-12 flex items-center justify-between px-6 z-50 md:h-24">
          <img src={logo} alt="Logo" className="h-10 w-auto md:h-24"  />
          <p className="text-lg font-bold text-primary">LOG IN</p>
        </div>
        {/* Hero content */}
        <div className="flex items-start justify-center min-h-screen mt-16">
          <div className="">
            <div className="flex flex-col items-center w-full md:flex-row md:px-8 lg:px-32"  >
              <img src={img1} alt="img1" className="w-1/2 h-auto md:h-96 md:w-auto" />
              <div className="mt-4 flex items-center flex-col">
                <h1 className="text-center mx-4">Let's take care of your car</h1>
                <h4 className="text-center mx-4 mt-2">Your support for maintenance, servicing, and car modifications.</h4>
                <button className="h-16 w-52 bg-primary text-background rounded-3xl text-2xl mt-8 font-bold">JOIN NOW</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
