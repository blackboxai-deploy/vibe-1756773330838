export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-green-700 to-emerald-600">
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Store interior background image */}
      <div className="absolute inset-0">
        <img 
          src="https://placehold.co/1920x1080?text=Luxurious+green+perfume+store+interior+with+elegant+glass+shelves+warm+lighting+and+botanical+decor" 
          alt="Luxurious green perfume store interior with elegant glass shelves, warm lighting and botanical decor"
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Store name with backlit effect */}
        <div className="mb-8">
          <h1 className="font-playfair text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight">
            <span className="inline-block bg-gradient-to-r from-white via-green-100 to-white bg-clip-text text-transparent">
              Verdant
            </span>
          </h1>
          <h2 className="font-playfair text-4xl md:text-6xl font-light text-green-100 tracking-widest">
            ESSENCE
          </h2>
        </div>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-green-50 mb-8 font-light leading-relaxed">
          Where Nature Meets Luxury in Perfect Harmony
        </p>

        {/* Description */}
        <p className="text-lg text-green-100/90 mb-12 max-w-2xl mx-auto leading-relaxed">
          Step into our sophisticated perfume boutique where fresh green themes blend seamlessly 
          with elegant design. Discover exquisite fragrances in an atmosphere of natural luxury.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-white text-green-800 font-semibold rounded-lg hover:bg-green-50 transition-all duration-300 transform hover:scale-105">
            Explore Collections
          </button>
          <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-800 transition-all duration-300">
            Virtual Store Tour
          </button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
        <div className="text-center">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full mx-auto mb-2 flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
          <p className="text-sm">Scroll to explore</p>
        </div>
      </div>

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
    </section>
  );
}