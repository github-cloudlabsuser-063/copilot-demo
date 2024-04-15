import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownEditor = () => {
    const [markdown, setMarkdown] = useState('type markdown here');

    const handleMarkdownChange = (event) => {
        setMarkdown(event.target.value);
    };

    return (
        <div>
            <textarea value={markdown} onChange={handleMarkdownChange} />
            <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
    );
};

export default MarkdownEditor;

// take a sentence as input
const sentence = "This is a sentence.";

// reverse the input sentence
const reversedSentence = sentence.split('').reverse().join('');

// the start of the sentence must start with a capital
const capitalizedSentence = reversedSentence.charAt(0).toUpperCase() + reversedSentence.slice(1);

// for javascript
console.log(capitalizedSentence);

const data = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Bob' },
];

const names = data.map(item => item.name);
console.log(names);