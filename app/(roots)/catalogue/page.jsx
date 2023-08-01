import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

const Catalogue = () => {
  return (
    <div>
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
            <ProductList title="Catalogo"/>
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            </div>
        </div>
      </Container>
    </div>
  );
};

export default Catalogue;
