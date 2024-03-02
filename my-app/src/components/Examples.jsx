import TabButton from './TabButton.jsx';
import { useState } from 'react';
import { EXAMPLES } from '../data.js';
import Sections from './Sections.jsx';

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


    return <Sections id={"examples"}>
        <h2>Examples</h2>
        <menu>
            <TabButton isSelected={selectedTopic === 'components'}
                onClick={() => handleSelct('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'}
                onClick={() => handleSelct('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'}
                onClick={() => handleSelct('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'}
                onClick={() => handleSelct('state')}>State</TabButton>
        </menu>
        {tabContext}
    </Sections>
}