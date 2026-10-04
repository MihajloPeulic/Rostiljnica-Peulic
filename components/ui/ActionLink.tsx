import { Link } from "@/i18n/navigation";

export default function ActionLink({ href, children, variant = "primary", external = false, className = "" }: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "text";
  external?: boolean;
  className?: string;
}) {
  const styles = `action-link action-link--${variant} ${className}`;
  if (external || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return <a href={href} className={styles} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>{children}</a>;
  }
  return <Link href={href} className={styles}>{children}</Link>;
}
