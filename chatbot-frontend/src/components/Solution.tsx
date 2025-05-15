import { Card, CardContent } from "./ui/card";

export default function Solution() {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container">
        <h2 className="text-2xl font-bold text-center mb-10">
          FLIN Di Sini <span className="text-blue-600">Untuk Anda</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <img
                  src="/placeholder.svg?height=64&width=64"
                  alt="Icon"
                  width={64}
                  height={64}
                />
              </div>
              <h3 className="font-medium mb-2">Solusi Yang Komprehensif</h3>
              <p className="text-xs text-gray-600">
                Dapatkan semua solusi untuk setiap permasalahan keuangan dalam
                satu aplikasi
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <img
                  src="/placeholder.svg?height=64&width=64"
                  alt="Icon"
                  width={64}
                  height={64}
                />
              </div>
              <h3 className="font-medium mb-2">Teknologi Inovatif</h3>
              <p className="text-xs text-gray-600">
                Dapatkan teknologi terbaik untuk memudahkan pengelolaan keuangan
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <img
                  src="/placeholder.svg?height=64&width=64"
                  alt="Icon"
                  width={64}
                  height={64}
                />
              </div>
              <h3 className="font-medium mb-2">Melalui Tim Ahli</h3>
              <p className="text-xs text-gray-600">
                Dapatkan konsultasi dari para ahli dan spesialis keuangan untuk
                solusi yang tepat
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
