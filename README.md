# Roštiljnica Peulić

Dvojezični sajt restorana u Prnjavoru, izgrađen u Next.js 16.

```bash
npm install
npm run dev
```

Otvorite [http://localhost:3000/ba](http://localhost:3000/ba) ili [http://localhost:3000/en](http://localhost:3000/en).

Za provjeru koristite `npm run lint` i `npm run build`. Arhitektura, rute, SEO i varijable okruženja opisani su u [AGENTS.md](./AGENTS.md).

## Kontakt forma

Forma šalje poruke na `kontakt@rostiljnicapeulic.com` putem Resenda. Da bi slanje radilo lokalno i na hostingu:

1. Verifikujte domen `rostiljnicapeulic.com` u Resendu i podesite DNS zapise koje Resend traži.
2. U `.env.local` postavite `RESEND_API_KEY=...` (na hostingu dodajte istu tajnu u environment variables).
3. Podrazumijevana adresa pošiljaoca je `Roštiljnica Peulić <kontakt@rostiljnicapeulic.com>`. Ako u Resendu koristite drugu verifikovanu adresu, postavite `CONTACT_FROM_EMAIL`.

`.env.local` se ne dodaje u Git. Bez API ključa forma prikazuje poruku da slanje nije dostupno.
