const AboutPage = () => (
  <div className="container py-16 max-w-3xl">
    <h1 className="text-4xl font-bold">Over Wiki Tech</h1>
    <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
      Wiki Tech is een platform dat mensen helpt om technologie beter te begrijpen.
      Net zoals Wikipedia willen wij een centrale plek zijn waar je betrouwbare informatie
      kunt vinden over technische apparaten.
    </p>
    <h2 className="mt-12 text-2xl font-bold">Onze waarden</h2>
    <ul className="mt-4 space-y-2">
      {["Betrouwbaarheid", "Duidelijkheid", "Toegankelijkheid", "Samenwerking", "Kwaliteit boven snelheid"].map((v) => (
        <li key={v} className="flex items-center gap-3 text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-accent" />
          {v}
        </li>
      ))}
    </ul>
  </div>
);

export default AboutPage;
