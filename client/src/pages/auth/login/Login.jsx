const Login = () => {
  const handleGoogleAuth = () => {
    console.log("Google Auth Clicked");
  };

  const handleAppleAuth = () => {
    console.log("Apple Auth Clicked");
  };

  return (
    <div className="h-screen overflow-hidden">
      {/* Navbar */}
      <div className="bg-primary-600 shadow-2xl">
        <div className="container mx-auto flex items-center justify-between p-4">
          {/* Logo */}
          <a href="/" className="text-3xl font-bold text-white">
            Etkinlikler.com
          </a>

          {/* Navigation Links  */}
          <div className="space-x-4">
            {/* <a href="/" className="text-white hover:text-primary-600">Anasayfa</a>  */}
            <a href="/contact" className="text-white hover:text-primary-100">
              İletişim
            </a>
            <a href="/about" className="text-white hover:text-primary-100">
              Hakkımızda
            </a>
          </div>
        </div>
      </div>

      <div className="flex min-h-screen items-center justify-center">
        <div className="w-full max-w-md bg-white p-8">
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-800">
            Yeni Bir Hesap Oluşturun
          </h2>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                {" "}
                Kullanıcı Adı{" "}
              </label>
              <input
                name="username"
                type="text"
                className="w-full rounded-lg border p-3 transition focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Kullanıcı adınızı girin"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                {" "}
                E-mail{" "}
              </label>
              <input
                name="email"
                type="email"
                className="w-full rounded-lg border p-3 transition focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="E-mail adresinizi girin"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                {" "}
                Şifre{" "}
              </label>
              <input
                name="password"
                type="password"
                className="w-full rounded-lg border p-3 transition focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Şifrenizi girin"
              />
            </div>

            <button
              type="submit"
              className="mt-4 w-full rounded-lg bg-primary-600 py-3 text-white transition hover:bg-primary-700"
            >
              Kayıt Ol
            </button>
          </form>

          <div className="relative flex items-center py-5">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 flex-shrink text-gray-500">ya da</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <div className="space-y-4">
            <button
              onClick={handleGoogleAuth}
              className="flex w-full items-center justify-center rounded-lg border border-gray-300 py-3 transition hover:bg-primary-100"
            >
              <img
                src="https://www.svgrepo.com/show/355037/google.svg"
                alt="Google"
                className="mr-2 h-5 w-5"
              />
              Google ile kayıt ol
            </button>

            <button
              onClick={handleAppleAuth}
              className="flex w-full items-center justify-center rounded-lg border border-gray-300 py-3 transition hover:bg-primary-100"
            >
              <img
                src="https://www.svgrepo.com/show/508761/apple.svg"
                alt="Apple"
                className="mr-2 h-5 w-5"
              />
              Apple ile kayıt ol
            </button>
          </div>

          <p className="mt-6 text-center text-sm text-gray-600">
            Zaten bir hesabınız var mı?
            <a href="/login" className="text-primary-600 hover:underline">
              {" "}
              Giriş Yap{" "}
            </a>
          </p>

          <div className="relative flex items-center py-5">
            <div className="flex-grow border-t border-gray-300"></div>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <div className="relative flex items-center">
            <p className="mx-auto max-w-md flex-grow text-center text-sm leading-relaxed text-gray-500">
              Kayıt olduğunuz takdirde
              <a href="#" className="underline hover:text-primary-700">
                Üyelik Koşulları
              </a>{" "}
              <br />
              ve{" "}
              <a href="#" className="underline hover:text-primary-700">
                Gizlilik Sözleşmesi
              </a>{" "}
              `ni kabul etmiş sayılırsınız. <br />
              Tüm hakları saklıdır. - Etkinlikler.com™
              {/* <br />  Copyright 2025&copy;   */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
