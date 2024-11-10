const NavBar = () => {
  const authUser = true;
  const isOrganizer = true;

  return (
    <div className="shadow-sm">
      <div className="container mx-auto flex items-center justify-between p-4">
        <a href="/" className="text-4xl font-bold text-primary-600">
          Etkinlikler.com
        </a>

        <div className="space-x-4">
          {isOrganizer ? (
            <a
              href="/create"
              className="text-primary-600 hover:text-primary-700 hover:underline"
            >
              Etkinlik Oluştur
            </a>
          ) : (
            <a
              href="/apply"
              className="text-primary-600 hover:text-primary-700 hover:underline"
            >
              Organizatör Olun
            </a>
          )}
          <a
            href="/contact"
            className="text-primary-600 hover:text-primary-700 hover:underline"
          >
            İletişim
          </a>
          <a
            href="/about"
            className="text-primary-600 hover:text-primary-700 hover:underline"
          >
            Hakkımızda
          </a>
          {authUser ? (
            <a
              href="/profile"
              className="text-primary-600 hover:text-primary-700 hover:underline"
            >
              Profilim
            </a>
          ) : (
            <a
              href="/register"
              className="text-primary-600 hover:text-primary-700 hover:underline"
            >
              Giriş Yap / Kayıt Ol
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
