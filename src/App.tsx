import HomeLayout from "./components/HomeLayout";

function App() {
  return (
    <div className="p-7 text-2xl font-semibold flex-1 h-screen w-full ">
      <HomeLayout />
      {/* <LoginModal isOpen={isModalOpen} onClose={closeModal} /> */}
    </div>
  );
}

export default App;
