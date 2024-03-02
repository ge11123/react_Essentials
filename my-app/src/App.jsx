import Header from './components/Header/Header.jsx'
import CoreConcept from './components/CoreConcept.jsx'
import { CORE_CONCEPTS, EXAMPLES } from './data.js'
import TabButton from './components/TabButton.jsx'
import { useState } from 'react'

function App() {

  const [selectedTopic, setSelectedTopic] = useState();

  const handleSelct = (selectButton) => {
    // tabContent = selectButton;
    setSelectedTopic(selectButton);
    console.log(selectedTopic);
  }

  let tabContext = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContext = <div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>
          {EXAMPLES[selectedTopic].code}
        </code>
      </pre>
    </div>
  }

  console.log('app component executing');

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelct('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelct('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelct('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelct('state')}>State</TabButton>
          </menu>
          {tabContext}
        </section>
      </main>
    </div>
  );
}

export default App;
