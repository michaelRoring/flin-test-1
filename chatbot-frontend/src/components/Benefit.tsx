import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";

export default function Benefit() {
  return (
    <section className="py-12 md:py-16 container">
      <h2 className="text-2xl font-bold mb-8">
        Beragam Benefit,{" "}
        <span className="text-blue-600">Hidup Bebas Sulit</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div className="space-y-1">
            <h3 className="font-medium">Bebas dari bunga</h3>
            <p className="text-sm text-gray-600">
              Tidak dikenakan bunga yang dapat memberatkan dan tidak diperlukan
              jaminan
            </p>
          </div>

          <div className="space-y-1">
            <h3 className="font-medium">Bebas resiko denda</h3>
            <p className="text-sm text-gray-600">
              Tidak dikenakan denda jika terlambat bayar — ini untuk profesional
              karena kami tahu ada saat-saat sulit dalam hidup
            </p>
          </div>

          <div className="space-y-1">
            <h3 className="font-medium">Bebas dari biaya tersembunyi</h3>
            <p className="text-sm text-gray-600">
              Biayanya jelas & tidak ada biaya yang tidak diinformasikan
            </p>
          </div>

          <div className="space-y-1">
            <h3 className="font-medium">Gratis pendampingan</h3>
            <p className="text-sm text-gray-600">
              Konsultasi gratis dengan pakar FLIN - 24 jam/hari
            </p>
          </div>

          <Button variant="outline" className="flex items-center gap-2">
            Cari Tahu Isi Sini <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="relative h-[300px] flex items-center justify-center">
          <img
            src="https://flin.co.id/wp-content/uploads/2025/01/home-benefits.webp"
            alt="Family enjoying benefits"
            className="object-contain max-h-full max-w-full"
          />
        </div>
      </div>
    </section>
  );
}
