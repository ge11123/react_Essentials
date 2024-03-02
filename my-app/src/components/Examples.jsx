import TabButton from './TabButton.jsx'
import { useState } from 'react'
import { EXAMPLES } from '../data.js'


export default function Examples() {

    const [selectedTopic, setSelectedTopic] = useState();

    const handleSelct = (selectButton) => {
        // tabContent = selectButton;
        setSelectedTopic(selectButton);
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


    return <section id="examples">
        <h2>Examples</h2>
        <menu>
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelct('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelct('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelct('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelct('state')}>State</TabButton>
        </menu>
        {tabContext}
    </section>
}