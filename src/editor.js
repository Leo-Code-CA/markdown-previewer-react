export default function Editor({ markdown, setmarkdown, neon, setneon, prevstate }) {

    return (
        <form className={neon === "editor" ? "content content--editor neon" : "content content--editor"}>
            <label htmlFor="editor">
                <h2>Editor</h2>
                <p>Enter your markdown here.</p>
            </label>
            <textarea 
            id="editor" 
            name="editor"
            value={markdown}
            onChange={e => setmarkdown(e.target.value)}
            onFocus={() => setneon("editor")}
            onBlur={prevstate}>
            </textarea>
            <div>
                <button 
                type="button"
                onClick={() => navigator.clipboard.writeText(markdown)}
                >Copy</button>
                <button 
                type="reset"
                onClick={() => setmarkdown("")}>Reset</button>
            </div>
        </form>
    );
}