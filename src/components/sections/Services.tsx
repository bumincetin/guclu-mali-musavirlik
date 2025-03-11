import { FaCalculator, FaChartLine, FaFileInvoiceDollar, FaHandshake, FaBalanceScale, FaBook } from 'react-icons/fa';

const services = [
  {
    icon: FaCalculator,
    title: "Mali Müşavirlik",
    description: "Defter tutma, beyanname düzenleme, bildirge hazırlama ve vergi danışmanlığı hizmetleri."
  },
  {
    icon: FaFileInvoiceDollar,
    title: "Vergi Danışmanlığı",
    description: "Vergi planlaması, vergi uyuşmazlıkları çözümü ve vergi denetimi konularında danışmanlık."
  },
  {
    icon: FaBook,
    title: "Sosyal Güvenlik ve İş Hukuku",
    description: "SGK işlemleri, personel özlük işlemleri ve iş hukuku danışmanlığı."
  },
  {
    icon: FaHandshake,
    title: "Şirket Kuruluş ve Kapanış",
    description: "Limited ve Anonim şirket kuruluşu, şirket kapanış işlemleri ve tasfiye süreçleri."
  },
  {
    icon: FaChartLine,
    title: "Danışmanlık Hizmetleri",
    description: "Finansal planlama, bütçeleme ve yönetim danışmanlığı hizmetleri."
  },
  {
    icon: FaBalanceScale,
    title: "Resmi Kurum İşlemleri",
    description: "Ticaret sicil, vergi dairesi, SGK ve diğer resmi kurum işlemlerinin takibi."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Hizmetlerimiz
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Profesyonel ve güvenilir mali müşavirlik hizmetleri
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 rounded-xl bg-gray-50 dark:bg-gray-800 hover:shadow-xl transition duration-300"
            >
              <service.icon className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 