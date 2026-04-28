import React, { useState, useEffect } from 'react';
import { SectionWrapper } from './SectionWrapper';

export const DynamicProductGridBlock = {
  fields: {
    title: { type: "text", label: "Section Title" },
    subtitle: { type: "textarea", label: "Section Subtitle" },
    
    // Data Source
    sourceType: {
      type: "select",
      label: "Product Source",
      options: [
        { label: "Demo Data", value: "demo" },
        { label: "REST API (JSON URL)", value: "api" },
        { label: "Shopify Storefront", value: "shopify" },
      ]
    },
    apiUrl: { type: "text", label: "API URL / JSON URL" },
    
    // Layout Settings
    columns: {
      type: "select",
      label: "Grid Columns",
      options: [
        { label: "2 Columns", value: "2" },
        { label: "3 Columns", value: "3" },
        { label: "4 Columns", value: "4" },
        { label: "5 Columns", value: "5" },
      ]
    },
    cardStyle: {
      type: "select",
      label: "Card Visual Style",
      options: [
        { label: "Premium Shadow", value: "shadow" },
        { label: "Modern Outline", value: "outline" },
        { label: "Minimalist", value: "minimal" },
      ]
    },
    borderRadius: { type: "text", label: "Border Radius (px)" },
    primaryColor: { type: "text", label: "Primary Theme Color (Hex)" },
    
    // Features
    showQuickView: { type: "radio", label: "Enable Quick View", options: [{ label: "On", value: true }, { label: "Off", value: false }] },
    showStock: { type: "radio", label: "Show Stock Status", options: [{ label: "On", value: true }, { label: "Off", value: false }] },
  },
  defaultProps: {
    title: "Dynamic Collections",
    subtitle: "Explore our latest arrivals fetched in real-time from your catalog.",
    sourceType: "demo",
    columns: "4",
    cardStyle: "shadow",
    borderRadius: "20",
    primaryColor: "#C83214",
    showQuickView: true,
    showStock: true,
  },
  render: ({ title, subtitle, sourceType, apiUrl, columns, cardStyle, borderRadius, primaryColor, showQuickView, showStock }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedProduct, setSelectedProduct] = useState(null);

    // Demo Data
    const demoProducts = [
      { id: 1, title: "Barto 145/80/13 Efficient", price: 82.00, oldPrice: 105.00, image: "https://images.unsplash.com/photo-1551218372-a202996a67c3?auto=format&fit=crop&w=800&q=80", stock: "In Stock", discount: "20% OFF" },
      { id: 2, title: "BMP Masters 16\" Yuki", price: 319.00, oldPrice: 380.00, image: "https://images.unsplash.com/photo-1583267746897-4a4452cc3f82?auto=format&fit=crop&w=800&q=80", stock: "In Stock", discount: "SALE" },
      { id: 3, title: "Alurim 18\" MotionPro", price: 188.00, oldPrice: 220.00, image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=800&q=80", stock: "Low Stock", discount: "15% OFF" },
      { id: 4, title: "Barto Euro Summer K900", price: 98.00, oldPrice: 125.00, image: "https://images.unsplash.com/photo-1594731802114-035392ecb39c?auto=format&fit=crop&w=800&q=80", stock: "In Stock", discount: "HOT" },
    ];

    useEffect(() => {
      if (sourceType === 'demo') {
        setProducts(demoProducts);
        setLoading(false);
      } else if (sourceType === 'api' && apiUrl) {
        setLoading(true);
        fetch(apiUrl)
          .then(res => res.json())
          .then(data => {
            // Assume data is array or has products property
            const fetched = Array.isArray(data) ? data : (data.products || []);
            setProducts(fetched.slice(0, 10));
            setLoading(false);
          })
          .catch(() => {
            setProducts(demoProducts);
            setLoading(false);
          });
      }
    }, [sourceType, apiUrl]);

    const gridClass = {
      "2": "grid-cols-1 sm:grid-cols-2",
      "3": "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
      "4": "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
      "5": "grid-cols-1 sm:grid-cols-2 lg:grid-cols-5",
    }[columns];

    const cardStyles = {
      shadow: "bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)]",
      outline: "bg-white border border-gray-100 hover:border-black",
      minimal: "bg-transparent",
    }[cardStyle];

    return (
      <SectionWrapper>
        <div className="max-w-[1400px] mx-auto px-8 py-16 font-sans">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-black text-black tracking-tighter uppercase mb-4">{title}</h2>
            <p className="text-gray-500 font-medium max-w-2xl mx-auto">{subtitle}</p>
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="w-12 h-12 border-4 border-gray-100 border-t-black rounded-full animate-spin"></div>
            </div>
          ) : (
            <div className={`grid ${gridClass} gap-8`}>
              {products.map((product) => (
                <div 
                  key={product.id} 
                  className={`group relative transition-all duration-500 overflow-hidden flex flex-col ${cardStyles}`}
                  style={{ borderRadius: `${borderRadius}px` }}
                >
                  {/* Badge */}
                  {product.discount && (
                    <div className="absolute top-4 left-4 z-10">
                      <span style={{ backgroundColor: primaryColor }} className="text-white text-[10px] font-black px-3 py-1.5 rounded-full shadow-lg uppercase tracking-widest">
                        {product.discount}
                      </span>
                    </div>
                  )}

                  {/* Image Container */}
                  <div className="aspect-[4/5] overflow-hidden bg-gray-50 relative">
                    <img 
                      src={product.image || product.thumbnail || product.imageUrl || "https://via.placeholder.com/400x500"} 
                      alt={product.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Hover Actions */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                      {showQuickView && (
                        <button 
                          onClick={() => setSelectedProduct(product)}
                          className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all text-black"
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex-1">
                      {showStock && (
                        <div className="flex items-center gap-2 mb-2">
                          <div className={`w-2 h-2 rounded-full ${product.stock?.toLowerCase().includes('in stock') ? 'bg-green-500' : 'bg-orange-500'}`}></div>
                          <span className="text-[10px] font-black uppercase text-gray-400 tracking-wider">{product.stock || 'Low Stock'}</span>
                        </div>
                      )}
                      <h3 className="text-lg font-black text-gray-900 leading-tight mb-2 group-hover:text-blue-600 transition-colors">
                        {product.title}
                      </h3>
                      <div className="flex items-center gap-3">
                        <span className="text-xl font-black text-black">${product.price}</span>
                        {product.oldPrice && (
                          <span className="text-sm text-gray-400 line-through font-medium">${product.oldPrice}</span>
                        )}
                      </div>
                    </div>

                    <button 
                      className="mt-6 w-full py-4 rounded-xl text-xs font-black uppercase tracking-[0.2em] transition-all relative overflow-hidden group/btn"
                      style={{ backgroundColor: 'black', color: 'white' }}
                    >
                      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform"></div>
                      <span className="relative z-10">Add to Cart</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Quick View Modal */}
          {selectedProduct && (
            <div className="fixed inset-0 z-[10000] flex items-center justify-center p-6">
              <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={() => setSelectedProduct(null)}></div>
              <div className="relative bg-white w-full max-w-4xl rounded-[32px] overflow-hidden shadow-2xl flex flex-col md:flex-row animate-in zoom-in duration-300">
                <button 
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:text-black hover:bg-gray-200 transition-all z-20"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>

                <div className="flex-1 aspect-square bg-gray-50">
                  <img src={selectedProduct.image} alt={selectedProduct.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 p-12 flex flex-col justify-center">
                   <div className="text-[10px] font-black uppercase text-blue-600 tracking-widest mb-4">Quick Preview</div>
                   <h2 className="text-4xl font-black text-black tracking-tighter uppercase mb-6 leading-none">{selectedProduct.title}</h2>
                   <div className="flex items-center gap-4 mb-8">
                      <span className="text-3xl font-black text-black">${selectedProduct.price}</span>
                      {selectedProduct.oldPrice && <span className="text-xl text-gray-400 line-through font-medium">${selectedProduct.oldPrice}</span>}
                   </div>
                   <p className="text-gray-500 font-medium mb-10 leading-relaxed">
                     Experience the ultimate in quality and design. Our products are crafted for durability and performance, ensuring you get the best value for your investment.
                   </p>
                   <div className="flex gap-4">
                     <button className="flex-1 bg-black text-white py-5 rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-all">Add to Cart</button>
                     <button className="w-16 h-16 border-2 border-gray-100 rounded-2xl flex items-center justify-center hover:border-black transition-all">
                       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                     </button>
                   </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </SectionWrapper>
    );
  },
};
