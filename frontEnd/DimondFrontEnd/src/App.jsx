
import AppRouter from "./component/appRouter/appRouter";
import Footer from "./component/Footer/footer";
import Navbar from "./component/Navbar/navbar";



function App() {

  return (
    <div className='w-full min-h-screen flex flex-col justify-between font-montserrat'>
      <Navbar />
      <div className='grow'>
        <AppRouter/>
      </div>
        <Footer/>
    </div>
  );
}

export default App;
