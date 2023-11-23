import CheatSheet from "./cheatsheet";
import Editor from "./editor";
import Header from "./header";
import Previewer from "./previewer";
import { useState } from "react";

export default function MarkdownPreviewer({ syntax }) {

    const [markdown, setMarkdown] = useState("");

    return (
        <>
            <Header />
            <div className="app__main">
                <Editor markdown={markdown} setmarkdown={setMarkdown}/>
                <Previewer markdown={markdown}/>
                <CheatSheet syntax={syntax}/>
            </div>
        </>
    );
}