import { FaCheckCircle } from 'react-icons/fa';
import Navbar from '@/components/layout/Navbar';
import Link from 'next/link';

const services = [
  {
    title: "Muhasebe Hizmetleri",
    items: [
      "Vergi ve ilgili diğer mevzuata ve Tek Düzen muhasebe standartlarına uygun şekilde muhasebe defterlerinin tutulması, raporlanması, ilgililere raporların sunulması.",
      "Bilanço, kar-zarar tablosu, bildirge, beyannameler ve diğer belgelerin düzenlenip tahakkuk işlemlerinin yapılması.",
      "Yapılmış olan muhasebe kayıtlarının TMS' ye uygunluğunun kontrolü.",
      "Küçük ve orta ölçekli işletmeler için bilgisayarlı muhasebe yazılım programlarının seçimi ve muhasebe sistemi altyapısının oluşturulması.",
      "Muhasebe uygulamaları konusunda danışmanlık yapmak."
    ]
  },
  {
    title: "Personel ve SGK İşlemleri",
    items: [
      "İşletme personeline ait ücret bordrolarının, hesap pusulalarının hazırlanması, işçilerce imzalanmak üzere işverene sunulması.",
      "Aylık prim ve hizmet belgelerinin tahakkuk ettirilerek firmaya iletilmesi.",
      "İşe giren personelin işe giriş işlemlerinin yapılması.",
      "İşten ayrılan personelin Kıdem ve İhbar Tazminatları'nın hesaplanması; işten ayrılma ile ilgili tüm belgelerin hazırlanması.",
      "SGK ve İş Mevzuatı konusunda danışmanlık yapmak."
    ]
  },
  {
    title: "Vergi ve Beyanname İşlemleri",
    items: [
      "KDV, aylık ve üçer aylık Muhtasar ve Geçici Vergi, yıllık Gelir ve Kurumlar Vergisi Beyannamelerinin hazırlanması, kontrolü ve tahakkuk ettirilerek, Tahakkuk Fişi'nin mükellefe sunulması.",
      "Vergi mevzuatı konusunda danışmanlık yapmak."
    ]
  },
  {
    title: "Şirket İşlemleri ve Genel Danışmanlık",
    items: [
      "Her türlü şirket Ana sözleşmeleri hazırlamak, Ticaret Odası, Vergi Dairesi, SGK ve diğer ilgili resmi makamlardaki başvurularını yapmak, işlemleri sonuçlandırıp mükellefiyet tesislerini gerçekleştirmek.",
      "Gerçek ve tüzel kişiler şube, depo ve irtibat bürosu gibi diğer şube işyerlerinin açılış ve kapanış işlemlerini yapmak.",
      "SGK, İş, Vergi ve ilgili diğer mevzuat konusunda genel danışmanlık yapmak. Mükelleflerin zaman içinde karşılaşabilecekleri muhtemel risklere karşı erkenden uyarılmasını sağlamak. Emeklilik işlemleri konusunda bilgi vermek, yardımcı olmak.",
      "Mükelleflerin ön muhasebe elemanlarını eğitmek, eğitim sonrası kontrolünü yaparak, ön muhasebenin kusursuz işleyişini sağlamak."
    ]
  }
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 pt-20">
        <div className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Hizmetlerimiz
            </h1>
            <div className="h-1 w-24 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Profesyonel mali müşavirlik ve danışmanlık hizmetlerimiz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-6">
                  {service.title}
                </h2>
                <ul className="space-y-4">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <FaCheckCircle className="text-blue-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Detaylı bilgi ve danışmanlık için bizimle iletişime geçebilirsiniz.
            </p>
            <Link
              href="/#contact"
              className="inline-block mt-6 px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-xl"
            >
              İletişime Geçin
            </Link>
          </div>
        </div>
      </div>
    </>
  );
} 