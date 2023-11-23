export default function Previewer({ markdown }) {

    return (
        <article className="content content--previewer">
            <h2>Previewer</h2>
            <div>
                {markdown}
            </div>
            
        </article>
    );
}