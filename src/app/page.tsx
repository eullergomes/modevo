import Image from "next/image";

import BrandSelector from "@/components/common/brand-selector";
import CategorySelector from "@/components/common/category-selector";
import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import ProductList from "@/components/common/product-list";
import { db } from "@/db";

const Home = async () => {
  const products = await db.query.productTable.findMany({
    with: {
      variants: true,
    },
  });

  const categories = await db.query.categoryTable.findMany({});
  const newCreatedProducts = await db.query.productTable.findMany({
    orderBy: (table, { desc }) => desc(table.createdAt),
    with: {
      variants: true,
    }
  });

  return (
    <>
      <Header />
      <div className="space-y-6">
        <div className="px-5">
          <Image
          src="/banner-01.png"
          alt="Leve uma vida com mais estilo"
          height={0}
          width={0}
          sizes="100vw"
          className="h-auto w-full"
        />
        </div>

        <BrandSelector />

        <ProductList title="Produtos em destaque" products={products} />

        <div className="px-5">
          <CategorySelector categories={categories} />
        </div>

        <div className="px-5">
          <Image
          src="/banner-02.png"
          alt="Leve uma vida com mais estilo"
          height={0}
          width={0}
          sizes="100vw"
          className="h-auto w-full px-5"
        />
        </div>

        <ProductList title="Novos produtos" products={newCreatedProducts} />

        <Footer />
      </div>
    </>
  );
};

export default Home;
