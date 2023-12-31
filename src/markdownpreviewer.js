import CheatSheet from "./cheatsheet";
import Editor from "./editor";
import Header from "./header";
import Previewer from "./previewer";
import { PRESENTATION } from "./presentation";
import { useState } from "react";

export default function MarkdownPreviewer({ syntax, neon, setNeon }) {

    const [markdown, setMarkdown] = useState(PRESENTATION);

    const handlePreviewerState = () => {
        return markdown !== "" ? setNeon("previewer") : setNeon("main");
    }

    return (
        <>
            <Header />
            <div className="app__main">
                <Editor 
                markdown={markdown} 
                setmarkdown={setMarkdown}
                neon={neon}
                setneon={setNeon}
                prevstate={handlePreviewerState}
                />
                <Previewer 
                markdown={markdown}
                neon={neon}
                />
                <CheatSheet 
                syntax={syntax}
                neon={neon}
                setneon={setNeon}
                prevstate={handlePreviewerState}
                />
            </div>
        </>
    );
}