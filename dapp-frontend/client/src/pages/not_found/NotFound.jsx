export default function NotFound() {
  return (
    <main>
      <div className="z-10 max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
        <div className="max-w-lg mx-auto text-center">
          <div className="pb-6 hover:scale-105 duration-700">
            <a href="https://crypto-clicks-frontend.vercel.app/">
              <img
                src="/src/assets/logos/crypto_clicks_logo.png"
                width={150}
                className="mx-auto"
              />
            </a>
          </div>
          <h3 className="text-white text-4xl font-semibold sm:text-5xl">
            Error 404
          </h3>
          <h3 className="text-white text-4xl font-semibold sm:text-5xl">
            Page Not Found
          </h3>

          <p className="text-gray-600 mt-3">
            Sorry, the page you are looking for is gone :( {"   "}
          </p>
          <a
            href="https://crypto-clicks-frontend.vercel.app/"
            className="text-green-700 underline"
          >
            {" "}
            redirect to Home page?{" "}
          </a>
        </div>
      </div>
    </main>
  );
}
