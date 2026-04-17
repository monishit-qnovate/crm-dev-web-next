import Link from "next/link";
import { FooterColumn } from "./types";

type FooterProps = {
  columns: FooterColumn[];
};

export default function Footer({ columns }: FooterProps) {
  return (
    <footer className="footer">
      {columns.map((column) => (
        <div key={column.title}>
          <strong>{column.title}</strong>
          {column.items.map((item) =>
            item.href ? (
              <p key={item.label}>
                <Link href={item.href}>{item.label}</Link>
              </p>
            ) : (
              <p key={item.label}>{item.label}</p>
            )
          )}
        </div>
      ))}
    </footer>
  );
}
