import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
// import Login from "./pages/login";
import Menu from "./pages/menu/menu";

function App() {
  return (
    <div className="App">
      <Menu />
      <ListarTarefa />
      {/* <Login /> */}
    </div>
  );
}

export default App;
