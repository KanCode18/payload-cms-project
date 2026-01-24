export async function fetchPage(slug: string, locale: string = 'en') {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/pages?where[slug][equals]=${slug}&locale=${locale}&depth=3&fallbackLocale=en`, // Add locale & fallbackLocale
    { cache: 'no-store' }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch page');
  }

  const data = await res.json();
  return data.docs[0];
}