import Header from './components/Header/Header.jsx';
import CoreConceptsSection from './components/CoreConceptsSection.jsx';
import Examples from './components/Examples.jsx';


function App() {

  return (
    <div>
      <Header />
      <main>
        <CoreConceptsSection />
        <Examples />
      </main>
    </div>
  );
}

export default App;