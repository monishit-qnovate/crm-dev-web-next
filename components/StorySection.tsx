import Link from "next/link";
import { StoryItem } from "./types";

type StorySectionProps = {
  items: StoryItem[];
};

export default function StorySection({ items }: StorySectionProps) {
  return (
    <section className="story-stack">
      {items.map((item) => (
        <article key={item.number} className={`story-row${item.reverse ? " story-row--reverse" : ""} reveal`}>
          <div className="story-copy">
            <span className="story-number">{item.number}</span>
            <p className="eyebrow">{item.eyebrow}</p>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <Link className="story-link" href={item.href}>
              {item.linkLabel}
            </Link>
          </div>
          <div className={`story-visual ${item.visualClassName}`} />
        </article>
      ))}
    </section>
  );
}
