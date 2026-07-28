export default function FinalCTA() {
  return (
    <section className="relative py-40 overflow-hidden reveal">
      <img
        src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1800&q=80"
        alt="Restaurant food"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/75" />

      <div className="relative max-w-4xl mx-auto text-center px-6">
        <p className="uppercase tracking-[0.5em] text-amber-400">
          Rezerviši danas
        </p>

        <h2 className="font-heading text-7xl mt-8">
          Vidimo se za stolom
        </h2>

        <button
          className="
            mt-12
            bg-amber-500
            text-black
            px-12
            py-5
            rounded-full
            text-lg
            font-semibold
            hover:scale-110
            transition
          "
        >
          Rezerviši sto
        </button>
      </div>
    </section>
  );
}