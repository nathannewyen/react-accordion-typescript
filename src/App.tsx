import './App.css';
import { Accordion } from './components/Accordion';


const accordionList = [
  {
    title: "Horses can sleep both lying down and, standing up. Domestic horses have a lifespan of around 25 years.",
    icon: "🐴",
  },
  {
    title: "Rhino skin maybe thick but it can be quite sensitive to sunburns and insect bites which is why they like wallow so much.",
    icon: "🦏",
  },
  {
    title: "If you looking to hunt a unicorn, but don't know where to begin, try Lake Superior State University in Sault Ste. Marie, Michigan.",
    icon: "🦄",
  }
]
function App() {
  return (
    <div className="App">
      <div className="App-header">
        {accordionList.map((accordion, index) => (
          <ul className="accordion-list" key={index}>
            <div className="accordion-item">
              <Accordion accordion={accordion} />
            </div>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default App;
