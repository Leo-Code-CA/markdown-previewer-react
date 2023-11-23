export default function Editor({ markdown, setmarkdown }) {

    return (
        <form className="content content--editor">
            <label htmlFor="editor">
                <h2>Editor</h2>
            </label>
            <textarea 
            id="editor" 
            name="editor"
            value={markdown}
            onChange={e => setmarkdown(e.target.value)}>
            </textarea>
            <div>
                <button type="button">Copy</button>
                <button type="reset">Reset</button>
            </div>
        </form>
    );
}