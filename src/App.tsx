import Panels from "./components/main/Panels";
import "@/styles/globals.css";

function App() {
    document.title = "Agus Website";

    return (
        <section className="flex flex-col p-2 min-h-screen w-screen lg:h-screen lg:p-4 md:flex-row md:min-h-fit ">
            <Panels />
        </section>
    );
}

export default App;
