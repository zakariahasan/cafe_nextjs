'use client';

import Link from "next/link";
import Image from "next/image";
import MenuItemCardType from "@/types/components/menuItemCard/menuItemCard";

// export type SimpleMenuItem = {
//   id: string;
//   slug: string;
//   name: string;
//   description?: string | null;
//   basePrice: number | null;
//   isMultiPrice: boolean,
//   multiPrice: string | null
//   imageUrl?: string | null;
// };

type Props = {
  item: MenuItemCardType;
};

export function MenuItemCard({ item }: Props) {

  const t = item.multiPrice ? JSON.parse(item.multiPrice) : {}
  console.log(item.basePrice)
  console.log(t)
  return (
    <article className="bg-white border rounded-xl p-3 flex flex-col gap-2">
      <div className="aspect-video rounded-lg bg-slate-200 flex items-center justify-center text-xs text-slate-500">
        {item.imageUrl ? <Image src={item.imageUrl}
                                alt={item.name}
                                height={400}
                                width={400}
                                sizes="100%" /> 
                        : null}
      </div>
      <div className="flex-1 space-y-1">
        <h2 className="font-medium text-sm">{item.name}</h2>
        {item.description && (
          <p className="text-xs text-slate-600 line-clamp-2">
            {item.description}
          </p>
        )}
        <p className="text-sm font-semibold">${item.basePrice}</p>
      </div>
      <div className="flex items-center justify-between mt-2">
        <Link
          href={`/menu/${item.slug}`}
          className="text-xs text-amber-700 hover:underline"
        >
          Customise
        </Link>
        <button className="text-xs rounded-full bg-amber-600 text-white px-3 py-1 hover:bg-amber-700">
          Add to Cart
        </button>
      </div>
    </article>
  );
}
