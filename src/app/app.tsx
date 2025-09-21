import logo from "../images/logo.png"
import img1 from "../images/img1.png"
import img2 from "../images/img2.png"
import img3 from "../images/img3.png"
import img4 from "../images/img4.png"
import Card from "components/card"
import ButtonSmall from "components/ButtonSmall"
import ButtonLarge from "components/ButtonLarge"
import ButtonText from "components/ButtonText"

function App() {
  return (
    <div className="h-full w-full bg-background font-poppins pt-4 px-4 sm:pt-6 sm:px-8 lg:pt-8 lg:px-32">
      {/* Section hero */}
      <div>
        {/* Top bar */}
        <div className="left-0 right-0 h-12 flex items-center justify-between z-50 sm:h-24">
          <img src={logo} alt="Logo" className="h-10 w-auto sm:h-24" />
          {/* <ButtonText text="LOG IN" /> */}
        </div>
        {/* Hero content */}
        <div className="flex items-start justify-center mt-16">
          <div className="">
            <div className="flex flex-col items-center w-full sm:flex-row"  >
              <img src={img1} alt="img1" className="w-1/2 h-auto sm:h-96 sm:w-auto" />
              <div className="mt-4 flex items-center flex-col">
                <h1 className="text-center mx-4">Let's take care of your car</h1>
                <h4 className="text-center mx-4 mt-2">Your support for maintenance, servicing, and car modifications.</h4>
                <ButtonSmall text="cooming soon" onClick={() => {}} />
              </div>
            </div>
          </div>
        </div>

      </div>
      {/* Middle section*/}
      <div className="flex justify-center pt-16 items-center flex-col">
        <h2>Features and benefits</h2>
        <Card title="NOTIFICATIONS" content="Lorem ipsum odor amet, consectetuer adipiscing elit. Malesuada potenti conubia aliquam in accumsan dolor tempus pharetra euismod. Posuere maecenas ex etiam nam sodales pellentesque?" image={img2}/>
        <Card title="EXPENSE LOG" content="Class quisque bibendum class massa tempor neque sit habitant. Venenatis montes ligula dictum inceptos eros conubia natoque. Tempor ultrices lobortis quis tristique" image={img3}  reverseOrder={true}/>
        <Card title="AI SUPPORT" content="CEx dolor proin vitae donec at sed augue. Torquent aptent semper consectetur eu vitae. Elit primis non torquent a; nullam at finibus." image={img4} />
      </div>

      {/* <ButtonLarge upperText="GET STARTED" bottomText="IT'S FREE" icon="" onClick={() => {}} /> */}
    </div>
  );
}

export default App;
