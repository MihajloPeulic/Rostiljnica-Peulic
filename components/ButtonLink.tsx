import Link from "next/link";

type ButtonLinkProps = {
  href: string;
  text: string;
  icon: React.ReactNode;
  external?: boolean;
  className?: string
};

export default function ButtonLink({
  href,
  text,
  icon,
  external = false,
  className
}: ButtonLinkProps) {
  const classNameing = className

  const content = (
    <>
      {icon}

      {text}

      <span
        className="
          transition-transform
          duration-300
          group-hover:translate-x-1
        "
      >
        →
      </span>
    </>
  );


  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classNameing}
      >
        {content}
      </a>
    );
  }


  return (
    <Link
      href={href}
      className={classNameing}
    >
      {content}
    </Link>
  );
}