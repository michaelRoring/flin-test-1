import { Button } from "./ui/button";

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <a href="/" className="flex items-center gap-2">
            <img
              src="https://flin.co.id/wp-content/uploads/2024/08/Full-Logo-Blue-and-Black.webp"
              alt="FLIN Logo"
              width={80}
              height={30}
            />
          </a>
          <nav className="hidden md:flex gap-6">
            <a href="#" className="text-sm font-medium text-blue-600">
              Tentang Kami
            </a>
            <a href="#" className="text-sm font-medium">
              Produk Kami
            </a>
            <a href="#" className="text-sm font-medium">
              Blog
            </a>
            <a href="#" className="text-sm font-medium">
              Karir
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden md:flex">
            Masuk
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            Daftar Sekarang
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
