export default function ContactCTA() {
  return (
    <div
      id="contact"
      className="bento-card mt-6 rounded-2xl bg-primary px-6 py-16 text-center text-on-primary md:px-8 md:py-20"
    >
      <h2 className="mb-6 text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">
        Ready to build something exceptional?
      </h2>
      <p className="mx-auto mb-10 max-w-2xl text-lg opacity-90">
        I&apos;m currently open to architectural consulting and senior leadership roles. Let&apos;s
        discuss how I can help your team ship faster, cleaner code.
      </p>
      <div className="flex flex-wrap justify-center gap-4 md:gap-6">
        <button className="rounded-xl bg-on-primary px-10 py-3 font-mono text-sm font-semibold uppercase text-primary shadow-lg transition-all hover:bg-tertiary-fixed active:scale-95">
          Send an Email
        </button>
        <button className="rounded-xl border-2 border-on-primary px-10 py-3 font-mono text-sm font-semibold uppercase text-on-primary transition-all hover:bg-on-primary/10 active:scale-95">
          Schedule a Call
        </button>
      </div>
    </div>
  );
}
