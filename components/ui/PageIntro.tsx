export default function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <header className="page-intro">
      <div className="container-page">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <span className="page-intro-mark" aria-hidden="true">P/</span>
    </header>
  );
}
