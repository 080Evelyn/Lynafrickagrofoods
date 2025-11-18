// pages/ProductDetail.jsx
import { useParams } from 'react-router-dom';

const dummyProducts = [
  { id: 0, name: 'Banga Soup', price: 56, image: '/images/banga.png', description: 'Delicious palm nut soup from South-South Nigeria.' },
  // more dummy products...
];

function ProductDetail() {
  const { id } = useParams();
  const product = dummyProducts.find(p => p.id === Number(id));

  if (!product) return <div>Product not found</div>;

  return (
    <div className="p-4 md:p-12">
      <div className="grid md:grid-cols-2 gap-6">
        <img src={product.image} alt={product.name} className="w-full h-auto object-cover" />
        <div>
          <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
          <p className="text-lg font-semibold text-green-600 mb-4">${product.price}</p>
          <p className="text-sm text-gray-600 mb-6">{product.description}</p>
          <button className="bg-[#009688] text-white px-4 py-2 rounded">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
