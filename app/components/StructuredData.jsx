export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CircuitLabs",
    "url": "https://circuitlabs.io",
    "logo": "https://circuitlabs.io/web-app-manifest-512x512.png",
    "description": "Quantum Resistant Blockchain Solutions",
    "sameAs": [] // добавь ссылки на соцсети когда будут
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}