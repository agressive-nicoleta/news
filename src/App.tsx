import NewsForm from "./components/NewsForm";
import NewsList from "./components/NewsList";
import "primereact/resources/themes/arya-purple/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons

function App() {
  return (
    <div id="App">
      <h1>News App</h1>
      <NewsForm />
      <NewsList />
    </div>
  );
}

export default App;
