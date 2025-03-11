import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              SMMM Selma ÇETİN
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              1995'ten beri Ankara'da güvenilir mali müşavirlik ve danışmanlık hizmetleri.
              Vergi, muhasebe ve danışmanlık ihtiyaçlarınız için profesyonel çözümler.
            </p>
            <div className="flex gap-4">
              <a
                href="#contact"
                className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
              >
                İletişime Geçin
              </a>
              <a
                href="#services"
                className="px-8 py-4 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition duration-300"
              >
                Hizmetlerimiz
              </a>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="w-full h-[400px] relative">
              <Image
                src="/hero-image.jpg"
                alt="Güçlü Mali Müşavirlik"
                fill
                className="object-cover rounded-xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
    </section>
  );
};

export default Hero; 