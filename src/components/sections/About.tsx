import Image from 'next/image';
import { FaCheck } from 'react-icons/fa';

const values = [
  "Mesleki etik değerlere bağlılık",
  "Güvenilirlik ve şeffaflık",
  "Müşteri odaklı hizmet anlayışı",
  "Güncel mevzuat takibi",
  "Hızlı ve etkili çözümler"
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative w-full h-[500px]">
              <Image
                src="/about-image.jpg"
                alt="Güçlü Mali Müşavirlik Ofisi"
                fill
                className="object-cover rounded-xl shadow-xl"
              />
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Hakkımızda
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Güçlü Mali Müşavirlik olarak, 1995 yılından bu yana Ankara'da mali müşavirlik ve danışmanlık hizmetleri sunmaktayız. 
              SMMM Selma ÇETİN liderliğinde, deneyimli kadromuzla müşterilerimize en iyi hizmeti sunmak için çalışıyoruz.
              Mesleki gelişmeleri ve değişen mevzuatı yakından takip ederek, müşterilerimize güncel ve doğru bilgiyi aktarıyoruz.
            </p>
            
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Değerlerimiz
              </h3>
              <ul className="space-y-3">
                {values.map((value, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <FaCheck className="text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="grid grid-cols-2 gap-6 text-center">
              <div className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md">
                <div className="text-3xl font-bold text-blue-600 mb-2">28+</div>
                <div className="text-gray-600 dark:text-gray-300">Yıllık Tecrübe</div>
              </div>
              <div className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md">
                <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
                <div className="text-gray-600 dark:text-gray-300">Mutlu Müşteri</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 