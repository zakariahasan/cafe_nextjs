import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="grid gap-8 md:grid-cols-2 items-center">
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Fresh coffee, homemade meals, right at your fingertips.
          </h1>
          <p className="text-slate-600">
            Order your favourite dishes, customise ingredients, and choose
            pickup or delivery. Simple, fast, and delicious.
          </p>
          <div className="flex gap-3">
            <Link
              href="/menu"
              className="rounded-full bg-amber-600 text-white px-5 py-2 text-sm font-medium hover:bg-amber-700"
            >
              Order Now
            </Link>
            <Link
              href="/offers"
              className="rounded-full border border-amber-600 text-amber-700 px-5 py-2 text-sm font-medium hover:bg-amber-50"
            >
              View Special Offers
            </Link>
          </div>
        </div>
        <div className="aspect-[4/3] bg-slate-200 rounded-xl shadow-inner flex items-center justify-center text-slate-500 text-sm">
          Hero image of cafe / food goes here
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="bg-white rounded-xl shadow-sm border p-4">
          <h2 className="font-semibold mb-3">Opening Hours</h2>
          <ul className="text-sm space-y-1">
            <li>Mon–Fri: 8:00am – 9:00pm</li>
            <li>Sat: 9:00am – 10:00pm</li>
            <li>Sun: 9:00am – 8:00pm</li>
          </ul>
        </div>
        <div className="bg-white rounded-xl shadow-sm border p-4">
          <h2 className="font-semibold mb-3">Location</h2>
          <p className="text-sm text-slate-600">
            123 Bean Street, Sydney NSW 2000
          </p>
          <div className="mt-3 h-40 bg-slate-200 rounded-lg flex items-center justify-center text-xs text-slate-500">
            Embedded map goes here
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold">Special Offers</h2>
          <Link href="/offers" className="text-xs text-amber-700">
            View all
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="bg-white border rounded-xl p-3 text-sm">
            <p className="font-medium">Happy Hour Coffee</p>
            <p className="text-slate-600 text-xs">
              2-for-1 espresso between 3–5pm weekdays.
            </p>
          </div>
          <div className="bg-white border rounded-xl p-3 text-sm">
            <p className="font-medium">Breakfast Combo</p>
            <p className="text-slate-600 text-xs">
              Any coffee + pastry for $9.90.
            </p>
          </div>
          <div className="bg-white border rounded-xl p-3 text-sm">
            <p className="font-medium">Family Burger Night</p>
            <p className="text-slate-600 text-xs">
              4 burgers + fries + drinks bundle.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
