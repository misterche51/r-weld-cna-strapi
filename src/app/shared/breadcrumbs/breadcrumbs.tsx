import styles from "./breadcrumbs.module.css";
import Link from "next/link";

export type TBreadcrumbItem = {
  label: string;
  target: string;
};

type TBreadcrumbsProps = {
  breadcrumbs: TBreadcrumbItem[];
};

export default function Breadcrumbs({ breadcrumbs }: TBreadcrumbsProps) {
  const lastIndex = breadcrumbs.length - 1;
  const isSingleCrumb = breadcrumbs.length === 1;
  return (
    <ul className={styles.list}>
      {breadcrumbs.map((crumb, i) => (
        <li className={styles.item} key={i}>
          {i === lastIndex && !isSingleCrumb ? (
            crumb.label
          ) : (
            <Link href={`/${crumb.target}`}>{crumb.label}</Link>
          )}
        </li>
      ))}
    </ul>
  );
}
