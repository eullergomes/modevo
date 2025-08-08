import Image from "next/image";

import brandsData from "@/app/constants/brands.json";

interface Brand {
  id: number;
  nome: string;
  imageUrl: string;
}

const BrandSelector = () => {
  const brands: Brand[] = brandsData.brands;

  return ( 
    <div className="space-y-6">
      <h3 className="text-sm font-semibold px-5">Marcas parceiras</h3>
      <div className="px-5 flex w-full gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="flex-shrink-0 w-16 h-16 bg-white rounded-2xl border border-gray-200 flex items-center justify-center p-2 hover:border-gray-300 transition-colors cursor-pointer"
          >
            <Image
              src={brand.imageUrl}
              alt={`Logo ${brand.nome}`}
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
   );
}
 
export default BrandSelector;