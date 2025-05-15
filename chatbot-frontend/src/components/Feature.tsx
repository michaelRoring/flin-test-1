import { Card, CardContent } from "./ui/card";

export default function Feature() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container">
        <div className="text-center mb-10">
          <p className="text-sm text-gray-600">
            2 dari 10 penduduk di Indonesia memiliki masalah with keuangan yang
            dapat berdampak negatif pada kehidupan mereka. Bahkan menyebabkan
            beban psikologis dan tekanan pada hidup yang dijalani.
          </p>
          <p className="text-sm font-medium mt-6 text-gray-700">
            Pinjaman Tanpa Bunga dan Tanpa Denda dari FLIN
          </p>
          <p className="text-sm text-gray-600 mt-2">
            FLIN menawarkan produk, teknologi, dan layanan yang tepat. Membantu
            hidup sejahtera dan keuanganmu menjadi lebih baik.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <img
                  src="/placeholder.svg?height=48&width=48"
                  alt="Icon"
                  width={48}
                  height={48}
                />
              </div>
              <h3 className="font-medium text-sm mb-2">
                Konsultasi Finansial FLIN
              </h3>
              <p className="text-xs text-gray-600">
                Dapatkan arahan untuk solusi yang tepat berdasarkan kebutuhan
                Anda
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <img
                  src="/placeholder.svg?height=48&width=48"
                  alt="Icon"
                  width={48}
                  height={48}
                />
              </div>
              <h3 className="font-medium text-sm mb-2">
                Kemudahan Akses via Hp Anda
              </h3>
              <p className="text-xs text-gray-600">
                Manajemen keuangan cukup di layar handphone
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <img
                  src="/placeholder.svg?height=48&width=48"
                  alt="Icon"
                  width={48}
                  height={48}
                />
              </div>
              <h3 className="font-medium text-sm mb-2">
                Kemudahan Pengajuan Pinjaman
              </h3>
              <p className="text-xs text-gray-600">
                Proses persetujuan cepat, langsung cair
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <img
                  src="/placeholder.svg?height=48&width=48"
                  alt="Icon"
                  width={48}
                  height={48}
                />
              </div>
              <h3 className="font-medium text-sm mb-2">
                Kemudahan Pengajuan Online
              </h3>
              <p className="text-xs text-gray-600">
                Dapatkan layanan kami dengan mudah
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
