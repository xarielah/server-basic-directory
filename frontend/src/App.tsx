import Snowfall from "react-snowfall";
import DisplayLinks from "./components/links/display-links";
import Footer from "./components/ui/footer";
import NavigationBar from "./components/ui/nav";

function App() {
  return (
    <>
      <Snowfall
        snowflakeCount={140}
        speed={[0.5, 0.5]}
        wind={[-0.5, -0.5]}
        radius={[0.5, 1]}
      />
      <div className="h-screen flex items-center justify-center flex-col w-screen">
        <NavigationBar />
        <main className="w-full md:p-0 p-2">
          <DisplayLinks />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
