import DOMPurify from 'dompurify';
import { marked } from 'marked';

marked.use({
    gfm: true,
    breaks: true
  });

export default function Previewer({ markdown, neon }) {

    const clean = DOMPurify.sanitize(marked.parse(markdown));

    const markup = { __html: clean };

    return (
        <article className={neon === "previewer" ? "content content--previewer neon" : "content content--previewer"}>
            <h2>Previewer</h2>
            <p className='content__subheading'>Your markdown renders here.</p>
            <div className="content__render" id='preview' dangerouslySetInnerHTML={markup}></div>
        </article>
    );
}