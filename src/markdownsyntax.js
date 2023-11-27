export const MARKDOWNSYNTAX = [
    {element: 'heading', syntax: ['# H1', '## H2', '### H3']},
    {element: 'bold', syntax: ['**bold text**']},
    {element: 'italic', syntax: ['*italicized text*']},
    {element: 'bold and italic', syntax: ['**_bold AND italic text_**']},
    {element: 'blockquote', syntax: ['> blockquote']},
    {element: 'ordered list (ol)', syntax: ['1. First item', '2. Second item', '3. Third item']},
    {element: 'unordered list (ul)', syntax: ['- First item', '- Second item', '- Third item']},
    {element: 'code', syntax: ['`code`']},
    {element: 'link', syntax: ['[title](https://www.example.com)']},
    {element: 'image', syntax: ['![alt text](image.jpg)']},
    {element: 'table', syntax: ['My first header | My second header', '------------ | -------------', 'Content one | Content two', 'Content three | Content four']},
    {element: 'code block', syntax: ['```', '{', '"firstName": "John",', '"lastName": "Smith",', '"age": 25', '}', '```']},
    {element: 'strikethrough', syntax: ['~~The world is flat.~~']},
    {element: 'task list', syntax: ['- [x] Write the press release', '- [ ] Update the website', '- [ ] Contact the media']}
];