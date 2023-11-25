import MarkdownPreviewer from './markdownpreviewer';
import { MARKDOWNSYNTAX } from './markdownsyntax';
import { useState } from 'react';
import './style.css';

export default function App() {

    const [neon, setNeon] = useState("main");

    return (
        <main className={neon === "main" ? 'app neon--main' : 'app'}>
            <MarkdownPreviewer syntax={MARKDOWNSYNTAX} neon={neon} setNeon={setNeon}/>
        </main>
    )
}