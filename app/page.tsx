import { QuoteForm } from "@/components/QuoteForm";

const phoneDisplay = "(254) 931-4787";
const phoneHref = "tel:2549314787";

const services = [
  {
    title: "Roofing Repair & Replacement",
    text: "Protect your home with Belton roofing and Temple roofing help for repairs, replacements, and storm-worn areas that need a closer look.",
  },
  {
    title: "Interior Renovations",
    text: "From detail work to bigger Belton renovations, we help refresh interior spaces with quality work and clear project options.",
  },
  {
    title: "Exterior Renovations",
    text: "Improve curb appeal, function, and long-term comfort with exterior improvements planned around your home and budget.",
  },
  {
    title: "Fencing Repair & Replacement",
    text: "Need fencing repair in Belton TX or a full replacement? We help restore privacy, curb appeal, and everyday function.",
  },
  {
    title: "Siding Replacement",
    text: "For siding replacement in Belton TX and nearby communities, we help homeowners address worn, damaged, or aging exterior surfaces.",
  },
  {
    title: "General Home Projects",
    text: "Have a repair or construction project that does not fit neatly in one category? Call for local project help and practical next steps.",
  },
];

const reasons = [
  "We listen to your concerns before recommending work",
  "Clear project options",
  "Fair, straightforward pricing",
  "Quality-focused workmanship",
  "Interior and exterior project experience",
  "Local Belton/Temple service",
];

const reviewHighlights = [
  "Listened to our concerns",
  "Gave us great options",
  "Fair cost and quality work",
  "Very pleased with the final result",
];

const projectTypes = [
  "Roof repairs",
  "Roof replacement",
  "Fence repair",
  "Fence replacement",
  "Siding replacement",
  "Interior updates",
  "Exterior improvements",
  "Small home projects",
  "Renovation work",
  "Property repair projects",
];

const schema = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: "Gonzalez&Co Construction/Roofing",
  address: {
    "@type": "PostalAddress",
    streetAddress: "436 N Beal St",
    addressLocality: "Belton",
    addressRegion: "TX",
    postalCode: "76513",
    addressCountry: "US",
  },
  telephone: "+12549314787",
  url: "https://business.google.com/gonzalez-co",
  areaServed: ["Belton, TX", "Temple, TX", "Central Texas"],
  serviceType: [
    "Roofing",
    "Renovations",
    "Interior work",
    "Exterior work",
    "Fencing repair and replacement",
    "Siding replacement",
    "General construction",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "21",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <header className="sticky top-0 z-40 border-b border-white/10 bg-charcoal/95 text-white backdrop-blur">
        <nav
          className="container-pad flex min-h-20 items-center justify-between gap-4"
          aria-label="Main navigation"
        >
          <a href="#top" className="focus-ring flex items-center gap-3 rounded-md">
            <span className="flex h-12 w-12 overflow-hidden rounded-full bg-white p-1">
              <img
                src="/gonzalez-co-logo.png"
                alt="Gonzalez&Co logo"
                className="h-full w-full rounded-full object-cover"
              />
            </span>
            <span className="max-w-[190px] text-sm font-extrabold leading-tight sm:max-w-none sm:text-base">
              Gonzalez&Co Construction/Roofing
            </span>
          </a>

          <div className="hidden items-center gap-7 text-sm font-semibold text-white/85 lg:flex">
            <a className="focus-ring rounded-sm hover:text-gold" href="#services">
              Services
            </a>
            <a className="focus-ring rounded-sm hover:text-gold" href="#why-us">
              Why Us
            </a>
            <a className="focus-ring rounded-sm hover:text-gold" href="#reviews">
              Reviews
            </a>
            <a className="focus-ring rounded-sm hover:text-gold" href="#service-area">
              Service Area
            </a>
            <a className="focus-ring rounded-sm hover:text-gold" href="#contact">
              Contact
            </a>
          </div>

          <a
            className="focus-ring hidden min-h-11 items-center justify-center rounded-md bg-gold px-5 text-sm font-extrabold text-charcoal transition hover:bg-[#d79b38] sm:inline-flex"
            href={phoneHref}
          >
            Call Now
          </a>
          <a
            className="focus-ring inline-flex min-h-11 items-center justify-center rounded-md border border-white/20 px-4 text-sm font-extrabold text-white sm:hidden"
            href={phoneHref}
            aria-label={`Call Gonzalez&Co at ${phoneDisplay}`}
          >
            Call
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="relative overflow-hidden bg-charcoal text-white">
          <div className="absolute inset-0 opacity-20">
            <div className="h-full w-full bg-[linear-gradient(120deg,#1f2524_0%,#1f2524_42%,#c58a2a_42%,#c58a2a_43%,#303936_43%,#303936_100%)]" />
          </div>
          <div className="container-pad relative grid gap-10 py-16 sm:py-20 lg:min-h-[690px] lg:grid-cols-[1.06fr_.94fr] lg:items-center lg:py-24">
            <div>
              <h1 className="max-w-4xl text-4xl font-black leading-[1.04] sm:text-5xl lg:text-6xl">
                Reliable Construction, Roofing, and Home Renovation Help in
                Belton & Temple
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82 sm:text-xl">
                From interior detail work to larger exterior projects,
                Gonzalez&Co Construction/Roofing helps local homeowners get
                quality work, clear options, and dependable results.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  className="focus-ring inline-flex min-h-14 items-center justify-center rounded-md bg-gold px-7 text-base font-extrabold text-charcoal shadow-lg shadow-black/20 transition hover:bg-[#d79b38]"
                  href={phoneHref}
                >
                  Call for a Free Quote
                </a>
                <a
                  className="focus-ring inline-flex min-h-14 items-center justify-center rounded-md border border-white/25 px-7 text-base font-extrabold text-white transition hover:border-gold hover:text-gold"
                  href="#services"
                >
                  View Services
                </a>
              </div>
              <dl className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  ["5.0", "Google Rating"],
                  ["21", "Local Reviews"],
                  ["Latino-Owned", "Contractor"],
                  ["Belton & Temple", "Service Area"],
                ].map(([value, label]) => (
                  <div
                    key={value}
                    className="rounded-lg border border-white/12 bg-white/8 p-4"
                  >
                    <dt className="text-lg font-black text-gold">{value}</dt>
                    <dd className="mt-1 text-xs font-bold uppercase tracking-wide text-white/70">
                      {label}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-lg border border-white/12 bg-white shadow-2xl shadow-black/30">
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80"
                  alt="Contractor reviewing exterior home project details"
                  className="h-[320px] w-full object-cover sm:h-[440px]"
                />
                <div className="grid gap-0 border-t border-stone-200 bg-white text-charcoal sm:grid-cols-3">
                  {["Quality", "Care", "Guarantee"].map((word) => (
                    <div key={word} className="border-stone-200 p-4 sm:border-r last:sm:border-r-0">
                      <p className="text-xs font-bold uppercase tracking-wide text-rust">
                        Brand Promise
                      </p>
                      <p className="mt-1 text-xl font-black">{word}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="section-pad bg-linen">
          <div className="container-pad">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-black sm:text-4xl">
                Services for Homes That Need the Work Done Right
              </h2>
              <p className="mt-4 text-lg leading-8 text-slatework">
                Call a Belton general contractor for roofing, repairs,
                renovations, fencing, siding, and practical local project help
                across Central Texas.
              </p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="rounded-lg border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-charcoal text-gold">
                    <ToolIcon />
                  </div>
                  <h3 className="text-xl font-black">{service.title}</h3>
                  <p className="mt-3 leading-7 text-slatework">{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="why-us" className="section-pad bg-white">
          <div className="container-pad grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-black sm:text-4xl">
                Why Homeowners Call Gonzalez&Co
              </h2>
              <p className="mt-4 text-lg leading-8 text-slatework">
                Whether it’s an interior detail job or if you’re tackling another
                home project, we are here to help. You can expect plain talk,
                local service, and a team that listens before recommending work.
              </p>
              <a
                className="focus-ring mt-7 inline-flex min-h-12 items-center justify-center rounded-md bg-charcoal px-6 text-base font-extrabold text-white transition hover:bg-slatework"
                href={phoneHref}
              >
                Call {phoneDisplay}
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {reasons.map((reason, index) => (
                <div
                  key={reason}
                  className="flex gap-4 rounded-lg border border-stone-200 bg-linen p-5"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-gold text-sm font-black text-charcoal">
                    {index + 1}
                  </span>
                  <p className="font-bold leading-6 text-charcoal">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="section-pad bg-sand">
          <div className="container-pad">
            <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
              <div>
                <h2 className="text-3xl font-black sm:text-4xl">
                  Review Highlights from Local Customers
                </h2>
                <p className="mt-4 text-lg leading-8 text-slatework">
                  Customers mention that the team listens to concerns, offers
                  helpful options, provides fair costs, and delivers results they
                  are pleased with.
                </p>
              </div>
              <div className="rounded-lg bg-charcoal p-6 text-white">
                <p className="text-5xl font-black text-gold">5.0</p>
                <p className="mt-2 text-lg font-bold">Google rating with 21 local reviews</p>
                <a
                  href="https://business.google.com/gonzalez-co"
                  className="focus-ring mt-4 inline-flex rounded-md text-sm font-bold text-gold underline-offset-4 hover:underline"
                >
                  View Google profile
                </a>
              </div>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {reviewHighlights.map((highlight) => (
                <article key={highlight} className="rounded-lg bg-white p-5 shadow-sm">
                  <p className="text-2xl font-black text-gold">“</p>
                  <h3 className="mt-1 text-lg font-black">{highlight}</h3>
                  <p className="mt-3 text-sm leading-6 text-slatework">
                    A paraphrased theme from Gonzalez&Co’s Google review
                    reputation.
                  </p>
                </article>
              ))}
            </div>
            <div className="mt-10 rounded-lg border border-gold/30 bg-white p-6 sm:flex sm:items-center sm:justify-between sm:gap-6">
              <p className="text-xl font-black">
                Want the same reliable help for your next project?
              </p>
              <a
                className="focus-ring mt-5 inline-flex min-h-12 items-center justify-center rounded-md bg-gold px-6 font-extrabold text-charcoal sm:mt-0"
                href={phoneHref}
              >
                Call Gonzalez&Co Today
              </a>
            </div>
          </div>
        </section>

        <section className="section-pad bg-charcoal text-white">
          <div className="container-pad">
            <h2 className="max-w-3xl text-3xl font-black sm:text-4xl">
              Projects We Can Help With
            </h2>
            <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {projectTypes.map((project) => (
                <div
                  key={project}
                  className="rounded-md border border-white/12 bg-white/7 px-4 py-4 font-bold text-white/90"
                >
                  {project}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="service-area" className="section-pad bg-linen">
          <div className="container-pad grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-black sm:text-4xl">
                Proudly Serving Belton, Temple, and Nearby Central Texas
              </h2>
              <p className="mt-4 text-lg leading-8 text-slatework">
                Located in Belton, Gonzalez&Co Construction/Roofing helps
                homeowners across the Belton and Temple area with reliable
                construction, roofing, renovation, fencing, and siding work.
              </p>
              <div className="mt-6 grid gap-3 text-base font-bold text-charcoal">
                <p>436 N Beal St, Belton, TX 76513</p>
                <p>Service Area: Belton, Temple, and nearby Central Texas communities</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg border border-stone-200 bg-white shadow-soft">
              <div className="relative h-80 bg-[#d8d0c1]">
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(31,37,36,.12)_1px,transparent_1px),linear-gradient(rgba(31,37,36,.12)_1px,transparent_1px)] bg-[size:42px_42px]" />
                <div className="absolute left-[18%] top-[58%] h-4 w-[68%] -rotate-6 rounded-full bg-white/70" />
                <div className="absolute left-[8%] top-[33%] h-4 w-[78%] rotate-12 rounded-full bg-white/70" />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-charcoal px-5 py-4 text-center text-white shadow-soft">
                  <p className="text-sm font-bold uppercase tracking-wide text-gold">
                    Map Placeholder
                  </p>
                  <p className="mt-1 text-xl font-black">Belton, Texas</p>
                  <p className="mt-1 text-sm text-white/75">No API key required</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section-pad bg-white">
          <div className="container-pad grid gap-10 lg:grid-cols-[.82fr_1.18fr]">
            <div>
              <h2 className="text-3xl font-black sm:text-4xl">
                Tell Us About Your Project
              </h2>
              <p className="mt-4 text-lg leading-8 text-slatework">
                Share a few details and the team can follow up about timing,
                options, and next steps. For the fastest response, call directly.
              </p>
              <div className="mt-8 space-y-5 rounded-lg bg-charcoal p-6 text-white">
                <ContactLine label="Phone" value={phoneDisplay} href={phoneHref} />
                <ContactLine
                  label="Address"
                  value="436 N Beal St, Belton, TX 76513"
                />
                <ContactLine label="Service Area" value="Belton / Temple" />
              </div>
            </div>
            <QuoteForm />
          </div>
        </section>
      </main>

      <footer className="bg-charcoal pb-24 pt-12 text-white sm:pb-12">
        <div className="container-pad grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <span className="flex h-14 w-14 overflow-hidden rounded-full bg-white p-1">
                <img
                  src="/gonzalez-co-logo.png"
                  alt="Gonzalez&Co logo"
                  className="h-full w-full rounded-full object-cover"
                />
              </span>
              <p className="text-lg font-black">Gonzalez&Co Construction/Roofing</p>
            </div>
            <p className="mt-5 max-w-lg text-sm leading-6 text-white/70">
              Project availability, scheduling, and estimates may vary. Contact
              Gonzalez&Co Construction/Roofing directly for current details.
            </p>
          </div>
          <div>
            <h3 className="font-black text-gold">Services</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              <li>Roofing</li>
              <li>Renovations</li>
              <li>Fencing</li>
              <li>Siding</li>
              <li>General home projects</li>
            </ul>
          </div>
          <div>
            <h3 className="font-black text-gold">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              <li>
                <a className="focus-ring rounded-sm hover:text-gold" href={phoneHref}>
                  {phoneDisplay}
                </a>
              </li>
              <li>436 N Beal St, Belton, TX 76513</li>
              <li>Belton, Temple, Central Texas</li>
            </ul>
          </div>
        </div>
        <div className="container-pad mt-10 border-t border-white/10 pt-6 text-sm text-white/55">
          © {new Date().getFullYear()} Gonzalez&Co Construction/Roofing. All rights
          reserved.
        </div>
      </footer>

      <a
        href={phoneHref}
        className="focus-ring fixed inset-x-4 bottom-4 z-50 inline-flex min-h-14 items-center justify-center rounded-md bg-gold px-6 text-base font-extrabold text-charcoal shadow-2xl shadow-black/25 sm:hidden"
      >
        Call Now: {phoneDisplay}
      </a>
    </>
  );
}

function ToolIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4l-5.1 5.1a2 2 0 0 0 2.8 2.8l5.1-5.1a4 4 0 0 0 5.4-5.4l-2.8 2.8-2.6-2.6 2.6-3Z" />
    </svg>
  );
}

function ContactLine({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-wide text-gold">{label}</p>
      {href ? (
        <a className="focus-ring mt-1 inline-flex rounded-sm text-lg font-black" href={href}>
          {value}
        </a>
      ) : (
        <p className="mt-1 text-lg font-black">{value}</p>
      )}
    </div>
  );
}
