const ContactPage = () => (
  <div className="container py-16 max-w-2xl">
    <h1 className="text-4xl font-bold">Contact</h1>
    <p className="mt-4 text-muted-foreground">
      Heb je vragen of wil je bijdragen aan Wiki Tech?
    </p>
    <div className="mt-8 space-y-4">
      <div className="rounded-xl border bg-card p-6">
        <p className="text-sm font-semibold text-muted-foreground">Email</p>
        <p className="mt-1">info@wikitech.nl</p>
      </div>
      <div className="rounded-xl border bg-card p-6">
        <p className="text-sm font-semibold text-muted-foreground">Discord</p>
        <p className="mt-1">Wiki Tech Team</p>
      </div>
      <div className="rounded-xl border bg-card p-6">
        <p className="text-sm font-semibold text-muted-foreground">Locatie</p>
        <p className="mt-1">Nederland 🇳🇱</p>
      </div>
    </div>
  </div>
);

export default ContactPage;
