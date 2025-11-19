import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { ItemCustomizer } from "@/components/menu/ItemCustomizer";

type Props = {
  params: { slug: string };
};

export default async function ItemDetailPage({ params }: Props) {
  const item = await prisma.item.findUnique({
    where: { slug: params.slug },
  });

  if (!item) {
    notFound();
  }

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div className="aspect-[4/3] bg-slate-200 rounded-xl flex items-center justify-center text-sm text-slate-500">
        Item image goes here
      </div>

      <div className="space-y-4">
        <div>
          <h1 className="text-2xl font-semibold">{item.name}</h1>
          {item.description && (
            <p className="text-slate-600 text-sm mt-1">
              {item.description}
            </p>
          )}
          <p className="font-semibold mt-2">
            Base price: ${item.basePrice.toFixed(2)}
          </p>
        </div>

        {/* All the customisation & Add to Cart lives here */}
        <ItemCustomizer
          item={{
            id: item.id,
            name: item.name,
            basePrice: item.basePrice,
          }}
        />
      </div>
    </div>
  );
}
