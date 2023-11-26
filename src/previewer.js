import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function Previewer({ markdown, neon, setneon }) {

    return (
        <article className={neon === "previewer" ? "content content--previewer neon" : "content content--previewer"}>
            <h2>Previewer</h2>
            <p className='content__subheading'>Your markdown renders here.</p>
            <div className="content__render" id='preview'>
                <Markdown remarkPlugins={[remarkGfm]}>
                    {markdown}
                </Markdown>
            </div>
        </article>
    );
}