import Main from "../components/Main";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <>
      <div className="fixed bg-amber-200 flex flex-col h-screen w-30 justify-center items-center">
        <Sidebar />
      </div>
      <div className="flex items-center justify-center ml-30">
        <Main />
      </div>
    </>
  );
};

export default Home;
