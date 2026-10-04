<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Roštiljnica Peulić — vodič kroz sajt

## Namjena i pokretanje

Ovo je dvojezični prezentacijski sajt restorana u Prnjavoru. Posjetioci mogu pregledati jelovnik i fotografije, pročitati osnovne informacije, otvoriti mapu, pozvati restoran ili poslati poruku.

- Stack: Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4, `next-intl` 4, Resend.
- `npm install` instalira zavisnosti; `npm run dev` pokreće lokalni server.
- `npm run lint` provjerava stil koda; `npm run build` provjerava produkcijsku kompilaciju i tipove.
- `npm run start` služi već izgrađenu produkcijsku verziju.
- `proxy.ts` upravlja `next-intl` rutiranjem. Podrazumijevani jezik je `ba`, drugi je `en`; detekcija jezika preglednika je isključena.

## Rute i sadržaj

Svaka javna stranica ima prefiks jezika: `/ba` ili `/en`, zatim opciono `/menu`, `/gallery`, `/about` ili `/contact`. Korijenska ruta `/` prolazi kroz proxy i vodi na podrazumijevani jezik.

- `app/[locale]/page.tsx`: početna; hero, istaknuta jela, priča, galerija, recenzije, lokacija i poziv na rezervaciju.
- `app/[locale]/menu/page.tsx`: kategorije i stavke jelovnika iz prevoda, sa navigacijom po kategorijama.
- `app/[locale]/gallery/page.tsx`: fotografije; `galeryGrid.tsx` je klijentska galerija sa pregledom slika i tastaturnim komandama Escape / strelice.
- `app/[locale]/about/page.tsx`: priča, vrijednosti i završni poziv na kontakt.
- `app/[locale]/contact/page.tsx`: telefon, adresa, radno vrijeme, kontakt forma i mapa.

Tekstovi i jelovnik su u `messages/ba.json` i `messages/en.json`. Svaka promjena sadržaja treba biti unesena u oba jezika. Fotografije su u `public/images`. Za sadržajne slike koristiti `next/image`, smislene `alt` opise i odgovarajući `sizes`.

## Komponente i stil

- `components/Navbar.tsx`, `Footer.tsx` i `PageWrapper.tsx` čine zajednički okvir stranica.
- `components/ui/ActionLink.tsx` standardizuje unutrašnje, vanjske i telefonske akcije.
- `components/ui/PageIntro.tsx` i `SectionHeading.tsx` standardizuju hijerarhiju naslova.
- `components/ui/RestaurantMap.tsx` je zajednički Google Maps prikaz.
- `components/ContactForm.tsx` je klijentska forma; serverska akcija je `actions/sendEmail.ts`.
- `app/globals.css` sadrži bazne stilove i rasporede. `app/brand.css` je završni sloj vizuelnog identiteta: šumsko zelena, ton papira i svijetla limeta, izraženiji raspored sekcija, animirana traka i scrollbar prilagođen paleti. Pri izmjeni boja i vizuelnih detalja održavati ovaj sloj i izbjeći dodatna ad hoc nadjačavanja.
- `PageWrapper.tsx` uključuje dekorativni indikator napretka skrolovanja; CSS animacija radi samo u preglednicima koji podržavaju scroll timeline i isključuje se pri smanjenom kretanju.
- Klijentske komponente koristiti samo tamo gdje je potrebna interakcija. Ostale stranice i elementi ostaju serverske komponente.

Centralni javni podaci restorana (naziv, telefon, adresa, radno vrijeme, društvena mreža i URL) su u `lib/site.ts`. Mijenjati ih tamo. Ako se promijeni radno vrijeme ili adresa, provjeriti i `Restaurant` JSON-LD u `app/[locale]/layout.tsx`.
Godina osnivanja prikazana na početnoj stranici je 2012. Sav vidljivi sadržaj treba ostati na latinici u oba jezika; prije objave pregledati prevode i nove tekstove radi slučajno unesenih ćiriličnih znakova.

## SEO

`lib/seo.ts` daje jedinstvene title i description podatke za svaku rutu i jezik, canonical URL, `hreflang`, Open Graph i Twitter karticu. Svaka stranica izvozi `generateMetadata` i poziva `pageMetadata(locale, route)`. `app/sitemap.ts` generiše obje jezičke verzije svih pet ruta, a `app/robots.ts` objavljuje sitemap. Layout postavlja `html lang` i `Restaurant` strukturirane podatke.

`NEXT_PUBLIC_SITE_URL` treba postaviti na konačni javni origin, bez putanje. Fallback je `https://rostiljnicapeulic.com`; prije objave provjeriti da je to stvarna glavna domena. Ako se domena mijenja, canonical, sitemap, robots i JSON-LD je koriste preko `lib/site.ts`.

## Kontakt forma i okruženje

Forma predaje `FormData` serverskoj akciji. Akcija provjerava obavezna polja, email i granice dužine, zatim šalje tekstualni email preko Resenda. Uspjeh i greška se prikazuju u formi; nakon uspjeha polja se prazne. Rezervacije se primarno iniciraju telefonskim linkom.

- `RESEND_API_KEY`: obavezan za slanje poruka.
- `CONTACT_FROM_EMAIL`: opciona verifikovana Resend adresa pošiljaoca; ako izostane, koristi se testna `onboarding@resend.dev`, koja nije pogodna za produkcijsko slanje na proizvoljne adrese.
- `CONTACT_TO_EMAIL`: opciona adresa primaoca; postojeći fallback je konfigurisan u `actions/sendEmail.ts`.
- Tajne čuvati samo u `.env.local` ili u postavkama hostinga. Ne unositi ih u Git.

Prije objave uživo potvrditi domenu, telefon, adresu, radno vrijeme, primaoca poruka, Resend verified sender i sadržaj jelovnika. Nije implementirano online rezervisanje niti cijene u jelovniku; UI to ne obećava.

## Pravila za naredne promjene

1. Prije izmjena Next.js API-ja pročitati odgovarajući vodič u `node_modules/next/dist/docs/`, kako zahtijeva pravilo na vrhu ovog fajla.
2. Za nove javne stranice dodati rutu za oba jezika, prevode, SEO zapis u `lib/seo.ts` i rutu u `lib/site.ts` da se uključi u sitemap.
3. Ponovljene UI obrasce proširiti u `components/ui/` umjesto kopiranja stilova. Sačuvati semantička zaglavlja, tastaturnu navigaciju, vidljive fokuse i mobilni raspored.
4. Nakon promjena pokrenuti `npm run lint`, `npm run build` i pregledati 320 px, 768 px, 1024 px i 1440 px prikaze.
