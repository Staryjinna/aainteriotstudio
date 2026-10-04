import Link from "next/link";

export const metadata = { title: "Page not found", robots: { index: false } };

export default function NotFound() {
  return (
    <section className="section">
      <div className="container-x text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-dark">404</p>
        <h1 className="mt-3 text-5xl">This page can&apos;t be found</h1>
        <p className="mt-4 text-muted">The page may have moved. Let&apos;s get you back to the studio.</p>
        <Link href="/" className="btn btn-primary mt-8">Back to home</Link>
      </div>
    </section>
  );
}
