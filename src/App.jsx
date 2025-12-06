import Header from "./components/Header";
import Image from "./components/Imgae";
import Slider from "./components/Slider";

const App = () => {
  return (
    <div className="bg-gray-950 h-screen">
      <Header />
      <Slider />
      {/* <Image /> */}
      <div className=" text-2xl text-gray-500">Hello world</div>
    </div>
  );
};

export default App;
