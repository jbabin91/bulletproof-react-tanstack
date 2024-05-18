import createDOMPurify from 'dompurify';
import { parse } from 'marked';

const DOMPurify = createDOMPurify(window);

export function MarkdownPreview({ value = '' }: { value: string }) {
  return (
    <div
      className="prose prose-slate w-full p-2"
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(parse(value) as string),
      }}
    />
  );
}
