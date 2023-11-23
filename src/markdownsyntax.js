export const MARKDOWNSYNTAX = [
    {element: 'heading', syntax: ['# H1', '## H2', '### H3']},
    {element: 'bold', syntax: ['**bold text**']},
    {element: 'italic', syntax: ['*italicized text*']},
    {element: 'blockquote', syntax: ['> blockquote']},
    {element: 'ordered list (ol)', syntax: ['1. First item', '2. Second item', '3. Third item']},
    {element: 'unordered list (ul)', syntax: ['- First item', '- Second item', '- Third item']},
    {element: 'code', syntax: ['`code`']},
    {element: 'horizontal rule (hr)', syntax: ['---']},
    {element: 'link', syntax: ['[title](https://www.example.com)']},
    {element: 'image', syntax: ['![alt text](image.jpg)']},
    {element: 'table', syntax: ['| Syntax | Description |', '| ----------- | ----------- |', '| Header | Title |', '| Paragraph | Text |']},
    {element: 'code block', syntax: ['```', '{', '"firstName": "John",', '"lastName": "Smith",', '"age": 25', '}', '```']},
    {element: 'footnote', syntax: ['Here\'s a sentence with a footnote. [^1]', '[^1]: This is the footnote.']},
    {element: 'heading ID', syntax: ['### My Great Heading {#custom-id}']},
    {element: 'definition list (dl)', syntax: ['term', ': definition']},
    {element: 'strikethrough', syntax: ['~~The world is flat.~~']},
    {element: 'task list', syntax: ['- [x] Write the press release', '- [ ] Update the website', '- [ ] Contact the media']},
    {element: 'emoji', syntax: ['That is so funny! :joy:']},
    {element: 'highlight', syntax: ['I need to highlight these ==very important words==.']},
    {element: 'subscript', syntax: ['H~2~O']},
    {element: 'superscript', syntax: ['X^2^']}
] 