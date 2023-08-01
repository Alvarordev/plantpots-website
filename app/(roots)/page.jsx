import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Container>
        <Billboard/>
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8 py-10">
          <ProductList title="Productos destacados"/>
        </div>
      </Container>
    </main>
  );
}
