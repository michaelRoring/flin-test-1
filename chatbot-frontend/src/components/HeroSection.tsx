import { Button } from "./ui/button";

function HeroSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 container">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900">
            Hidup Bebas Utang,
            <br />
            Bisa Masa Depan Cemerlang
          </h1>
          <p className="text-gray-600 max-w-md">
            FLIN membantu Anda mengelola keuangan dengan bijak, mewujudkan
            impian, dan mencapai kebebasan.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700">
            Daftar Sekarang
          </Button>
        </div>
        <div className="relative h-[300px] md:h-[400px] flex items-center justify-center">
          <img
            src="https://flin.co.id/wp-content/uploads/2025/01/banner-home-2.webp"
            alt="Family enjoying financial freedom"
            className="object-contain max-h-full max-w-full"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
