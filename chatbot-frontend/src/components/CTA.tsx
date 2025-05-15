import { Button } from "./ui/button";

export default function CTA() {
  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <div className="bg-blue-500 rounded-lg overflow-hidden">
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-8 text-white">
              <h2 className="text-xl font-bold mb-2">
                Dapatkan Solusi Untuk Bebas Dari Beban Pinjaman
              </h2>
              <p className="text-sm mb-4">Solusi terbaik bersama FLIN</p>
              <Button className="bg-white text-blue-600 hover:bg-gray-100">
                Mulai Sekarang
              </Button>
              <div className="mt-4 flex items-center gap-2">
                <div className="bg-white rounded-full p-1">
                  <img
                    src="/placeholder.svg?height=24&width=24"
                    alt="Check"
                    width={24}
                    height={24}
                  />
                </div>
                <p className="text-xs">Proses mudah dan cepat</p>
              </div>
            </div>
            <div className="relative h-[300px] flex items-center justify-center">
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Happy FLIN customer"
                className="object-contain max-h-full max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
