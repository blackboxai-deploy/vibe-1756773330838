export default function StorefrontSection() {
  return (
    <section id="store" className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-green-800 mb-4">
            Our Boutique
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience luxury redefined in our elegantly designed store where every detail 
            reflects our commitment to natural beauty and sophisticated fragrance.
          </p>
        </div>

        {/* Storefront Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 lg:order-1">
            <h3 className="font-playfair text-3xl font-bold text-green-800 mb-6">
              Elegant Storefront
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our striking storefront features large glass windows with green-tinted frames, 
              creating an inviting entrance that showcases our exquisite perfume collections. 
              The minimalist shelving design allows each fragrance to shine while maintaining 
              the clean, sophisticated aesthetic our customers love.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Large glass windows with green-tinted frames</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Minimalist display shelving</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Elegant backlit store signage</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Curated perfume bottle displays</span>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-green-200 to-transparent rounded-2xl transform rotate-1"></div>
              <img 
                src="https://placehold.co/600x400?text=Modern+perfume+store+storefront+with+green+tinted+glass+windows+and+elegant+display+shelves" 
                alt="Modern perfume store storefront with green tinted glass windows and elegant display shelves"
                className="relative z-10 w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Interior Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Flooring */}
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full mx-auto mb-6 flex items-center justify-center">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-200 to-amber-300 rounded-lg"></div>
            </div>
            <h4 className="font-playfair text-xl font-bold text-green-800 mb-3">
              Premium Flooring
            </h4>
            <p className="text-gray-600">
              Polished light wood and marble with subtle green veining creates an elegant 
              foundation for our luxurious retail space.
            </p>
          </div>

          {/* Wall Design */}
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full mx-auto mb-6 flex items-center justify-center">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-500 rounded-lg relative">
                <div className="absolute inset-2 bg-green-300 rounded opacity-50"></div>
              </div>
            </div>
            <h4 className="font-playfair text-xl font-bold text-green-800 mb-3">
              Botanical Walls
            </h4>
            <p className="text-gray-600">
              Soft matte green paint and textured wallpaper featuring botanical patterns 
              of leaves and vines bring nature indoors.
            </p>
          </div>

          {/* Lighting */}
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full mx-auto mb-6 flex items-center justify-center">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-200 to-yellow-400 rounded-full relative">
                <div className="absolute inset-1 bg-yellow-100 rounded-full animate-pulse"></div>
              </div>
            </div>
            <h4 className="font-playfair text-xl font-bold text-green-800 mb-3">
              Ambient Lighting
            </h4>
            <p className="text-gray-600">
              Warm, diffused ceiling lights combined with strategic spotlights create 
              the perfect ambiance while highlighting our perfume displays.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}