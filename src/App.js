import logo from "./logo.svg";
import "./App.css";
import profile from "./images/profile.jpg";
function App() {
  return (
    <div className=" min-h-screen flex flex-col justify-center items-center  font-Montserrat">
      {/* intro  */}
      <div className="h-screen p-12 flex justify-center items-start flex-col">
        <div className="text-6xl font-bold leading-tight max-w-4xl">
          Hi, my name is <span className="text-teal-500">Johan Suh </span> I'm a
          React JS Developer
        </div>
        <button className="bg-transparent outline text-teal-500 p-3 px-8 my-6  outline-teal-500 text-3xl font-semibold ">
          Know more
        </button>
      </div>

      {/* info intro */}
      <div className="w-full  h-screen p-4  flex flex-col items-center justify-center bg-teal-500 text-white ">
        <h3 className="text-4xl font-bold my-5">ABOUT ME</h3>
        <div className="flex flex-col max-w-lg gap-8 lg:flex-row lg:max-w-5xl ">
          <img class="shadow-xl w-[32rem]" src={profile} alt="" />
          <p>
            As a React developer trained in General Assembly, I enjoy computer
            programming as crafts like woodworking or pottery: design plan &
            patiently improve the product, seeing it to grow to something I made,
            something I am proud of. Here are some values I hold on to when I
            work. I choose to do hard things. I strive to be incredibly patient. I
            love efficiency but not shortcut. I welcome new idea but approach
            minimalistically. consistent slow changes are good. I am adaptable
            because I enjoy learning. I use habits as task automations.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
