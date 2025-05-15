import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

export default function Statistic() {
  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <h2 className="text-2xl font-bold text-center mb-2">
          Langkah Menuju Indonesia yang Lebih Sejahtera
        </h2>
        <p className="text-center text-blue-600 mb-8">Finansial bersama FLIN</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="border-0 bg-blue-600 text-white">
            <CardContent className="p-6 text-center">
              <h3 className="text-2xl font-bold">20+</h3>
              <p className="text-xs">PENGALAMAN INDUSTRI</p>
            </CardContent>
          </Card>

          <Card className="border-0 bg-blue-600 text-white">
            <CardContent className="p-6 text-center">
              <h3 className="text-2xl font-bold">10+</h3>
              <p className="text-xs">PARTNER TERPERCAYA</p>
            </CardContent>
          </Card>

          <Card className="border-0 bg-blue-600 text-white">
            <CardContent className="p-6 text-center">
              <h3 className="text-2xl font-bold">0%</h3>
              <p className="text-xs">BUNGA DAN DENDA PINJAMAN</p>
            </CardContent>
          </Card>

          <Card className="border-0 bg-blue-600 text-white">
            <CardContent className="p-6 text-center">
              <h3 className="text-2xl font-bold">0 Jam</h3>
              <p className="text-xs">PROSES PENCAIRAN DANA</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" className="text-blue-600 border-blue-600">
            Pelajari Selengkapnya Tentang FLIN
          </Button>
        </div>
      </div>
    </section>
  );
}
