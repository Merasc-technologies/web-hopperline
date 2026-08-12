import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";
import { siteConfig } from "@/lib/site-config";
import { localeAlternates } from "@/lib/alternates";
import type { Locale } from "@/i18n/routing";

const metaTitles: Record<Locale, string> = {
  tr: "Kullanım Şartları · HopperLine",
  en: "Terms of Service · HopperLine",
};

const content: Record<
  Locale,
  {
    title: string;
    lastUpdated: string;
    sections: { heading: string; paragraphs: string[]; list?: string[] }[];
    closingNote: string;
  }
> = {
  tr: {
    title: "Kullanım Şartları",
    lastUpdated: "Son güncelleme: 12 Ağustos 2026",
    sections: [
      {
        heading: "1. Şartların Kabulü",
        paragraphs: [
          "app.hopperline.com üzerinden bir HopperLine hesabı oluşturarak veya HopperLine panelini herhangi bir şekilde kullanarak, işletmeniz adına bu Kullanım Şartları'nı kabul etmiş olursunuz. Bu şartları kabul etmiyorsanız HopperLine hizmetlerini kullanmamalısınız.",
          "Bu şartlar HopperLine ile hesabı oluşturan işletme arasındaki ilişkiyi düzenler. Hesabı işletmeniz adına oluşturan kişi, işletmeyi bu şartlara bağlama yetkisine sahip olduğunu beyan eder.",
        ],
      },
      {
        heading: "2. Hizmet Tanımı",
        paragraphs: [
          "HopperLine, işletmenizin WhatsApp Business numarasına ve Instagram hesabına bağlanarak müşteri sorularını yanıtlayan ve randevu rezervasyonlarını yöneten bir yapay zekâ resepsiyonist hizmetidir. Hizmet ayrıca müşteri ilişkileri (CRM), takvim yönetimi, kampanya ve analiz araçlarını içeren bir yönetim paneli sunar.",
          "HopperLine zaman içinde yeni iletişim kanalları ve özellikler ekleyebilir; bu şartlar, o an aktif olan tüm HopperLine hizmetleri için geçerli olmaya devam eder. Hangi özelliklerin canlı olduğu ürün içinde ve pazarlama sayfalarımızda güncel olarak belirtilir.",
        ],
      },
      {
        heading: "3. Uygunluk ve Hesaplar",
        paragraphs: [
          "HopperLine, yasal olarak faaliyet gösteren, gerçek işletmeler için tasarlanmıştır (güzellik salonları, kuaförler, tırnak stüdyoları, estetik merkezleri, diş klinikleri ve benzeri hizmet işletmeleri). Hesap oluştururken sağladığınız bilgilerin (işletme adı, iletişim bilgileri, WhatsApp/Instagram hesap bağlantıları vb.) doğru ve güncel olmasından işletmeniz sorumludur.",
          "Hesap kimlik bilgilerinizin (kullanıcı adı, şifre, erişim jetonları dahil) gizliliğinden ve hesabınız üzerinden gerçekleştirilen tüm işlemlerden işletmeniz sorumludur. Yetkisiz bir erişim şüphesi durumunda bizimle derhal iletişime geçmenizi rica ederiz.",
        ],
      },
      {
        heading: "4. Kabul Edilebilir Kullanım",
        paragraphs: [
          "HopperLine, müşterilerinizle WhatsApp ve Instagram üzerinden mesajlaşırken Meta'nın Teknoloji Sağlayıcısı (Tech Provider) olarak işletmeniz adına hareket eder. Bu nedenle HopperLine'ı kullanırken Meta'nın WhatsApp Business Mesajlaşma Politikası ve Instagram Platform Politikası'na uymayı kabul edersiniz.",
          "Aşağıdaki kullanımlar kesinlikle yasaktır:",
        ],
        list: [
          "Mesajlaşma kanallarını yasa dışı, taciz edici, yanıltıcı veya istenmeyen (spam) içerik göndermek için kullanmak",
          "Müşterilerin açık rızası olmadan pazarlama mesajları göndermek veya Meta'nın onay (opt-in) kurallarını ihlal etmek",
          "Yapay zekâ sistemini tersine mühendislik yapmaya çalışmak, kötüye kullanmak veya sistemi aşırı yüklemek amacıyla otomatik/kötü niyetli trafik göndermek",
          "Hizmeti, üçüncü tarafların haklarını ihlal edecek veya HopperLine'ın Meta ile olan iş ortaklığı statüsünü tehlikeye atacak şekilde kullanmak",
        ],
      },
      {
        heading: "5. Yapay Zekâ Resepsiyonist Hakkında Önemli Uyarı",
        paragraphs: [
          "HopperLine'ın yapay zekâ resepsiyonisti, mevcut yapay zekâ teknolojilerinin doğası gereği zaman zaman hata yapabilir; yanlış anlayabilir, yanlış bilgi verebilir veya bir randevuyu yanlış kaydedebilir. İşletmenizin, özellikle diş sağlığı gibi hassas alanlarda randevu doğruluğu açısından, panel üzerinden randevuları ve yapay zekâ ile yapılan konuşmaları düzenli olarak gözden geçirmesini önemle tavsiye ederiz.",
          "HopperLine, işletmenizin müşteri hizmetleri sürecine yardımcı olacak bir araçtır; işletmenizin kendi mesleki değerlendirmesinin, klinik/hizmet sorumluluğunun ve müşteri iletişiminin yerini almaz. Nihai sorumluluk her zaman işletmenize aittir.",
        ],
      },
      {
        heading: "6. Abonelik ve Deneme Süresi",
        paragraphs: [
          "HopperLine, yeni işletmeler için ücretsiz bir deneme süresi sunar. Deneme süresinin sona ermesinin ardından hizmete devam edebilmek için ödeme anında seçilen plana uygun aktif bir ücretli aboneliğe sahip olmanız gerekir.",
          "Güncel fiyatlandırma bilgileri Fiyatlandırma sayfamızda yer alır ve zaman zaman güncellenebilir. Abonelik ücretleri, seçilen plana göre peşin ve tekrarlayan şekilde (aylık veya yıllık) faturalandırılır.",
          "Aboneliğinizi, panel içinde açıklanan iptal süreci üzerinden dilediğiniz zaman iptal edebilirsiniz. İptal, mevcut fatura döneminin sonunda geçerli olur; aksi açıkça belirtilmedikçe kısmi dönemler için geri ödeme yapılmaz.",
        ],
      },
      {
        heading: "7. Fikri Mülkiyet",
        paragraphs: [
          "HopperLine yazılımı, markası, tasarımı ve alttaki teknolojisi (yapay zekâ modelleri, entegrasyonlar ve panel dahil) HopperLine'a veya lisans verenlerine aittir. Bu şartlar size yazılımı kullanma hakkı verir; yazılım üzerinde herhangi bir mülkiyet hakkı devretmez.",
          "İşletmenize ait iş verileri, müşteri verileri ve müşterilerinizle olan mesaj geçmişi işletmenize aittir. HopperLine bu verileri yalnızca hizmeti sunmak, sürdürmek ve iyileştirmek amacıyla işler.",
        ],
      },
      {
        heading: "8. Fesih",
        paragraphs: [
          "İşletmeniz, aboneliğini istediği zaman iptal ederek hizmeti sonlandırabilir. HopperLine, bu şartların ihlali, ödeme sorunları veya Meta politikalarının ihlali gibi durumlarda hesabınıza erişimi askıya alabilir veya sonlandırabilir.",
          "Fesih sonrasında hesabınıza erişiminiz sona erer. Verilerinizin saklanması ve silinmesine ilişkin süreç için Veri Silme sayfamıza (/data-deletion) bakınız; süreci burada tekrar detaylandırmıyoruz.",
        ],
      },
      {
        heading: "9. Sorumluluğun Sınırlandırılması",
        paragraphs: [
          "HopperLine hizmeti \"olduğu gibi\" ve \"mevcut olduğu şekliyle\" sunulur. Hizmetin kesintisiz, hatasız veya her koşulda beklentilerinizi tam olarak karşılayacak şekilde çalışacağını garanti etmiyoruz.",
          "Yürürlükteki mevzuatın izin verdiği azami ölçüde, HopperLine'ın işletmenize karşı sorumluluğu, olayın gerçekleştiği tarihten önceki 12 ay içinde HopperLine'a ödediğiniz abonelik ücretleriyle sınırlıdır. Dolaylı, arızi veya sonuç niteliğindeki zararlardan (kâr kaybı, veri kaybı, iş kaybı dahil) sorumlu tutulamayız.",
        ],
      },
      {
        heading: "10. Şartlarda Değişiklik",
        paragraphs: [
          "HopperLine bu Kullanım Şartları'nı zaman zaman güncelleyebilir. Önemli değişiklikler bu sayfada güncellenmiş tarih ile birlikte yayınlanır ve mümkün olduğunda işletmenize e-posta veya panel içi bildirim yoluyla ayrıca duyurulur. Değişiklikler sonrasında hizmeti kullanmaya devam etmeniz, güncellenmiş şartları kabul ettiğiniz anlamına gelir.",
        ],
      },
      {
        heading: "11. Uygulanacak Hukuk",
        paragraphs: [
          "HopperLine ilk olarak Türkiye'de faaliyete geçtiği için, bu şartların Türkiye Cumhuriyeti kanunlarına tabi olacağını varsayıyoruz; ancak bu maddenin ve şartların bütününün, resmî olarak yürürlüğe girmeden önce bir hukuk danışmanı tarafından teyit edilmesi gerektiğini de belirtmek isteriz.",
        ],
      },
      {
        heading: "12. İletişim",
        paragraphs: [
          `Bu Kullanım Şartları hakkında sorularınız için bizimle ${siteConfig.contactEmail} adresinden iletişime geçebilirsiniz.`,
        ],
      },
    ],
    closingNote:
      "Not: Bu metin, resmi hukuki inceleme öncesinde hazırlanmış ilk taslak niteliğindedir ve hukuki danışmanlık teşkil etmez. Meta uygulama incelemesi ve genel şeffaflık amacıyla yayınlanmıştır; nihai sürüm bir hukuk danışmanı tarafından gözden geçirildikten sonra güncellenecektir.",
  },
  en: {
    title: "Terms of Service",
    lastUpdated: "Last updated: August 12, 2026",
    sections: [
      {
        heading: "1. Acceptance of Terms",
        paragraphs: [
          "By creating a HopperLine account at app.hopperline.com, or by otherwise accessing or using the HopperLine dashboard, you agree to these Terms of Service on behalf of your business. If you do not agree to these terms, you should not use HopperLine.",
          "These terms govern the relationship between HopperLine and the business that creates the account. The person creating the account on behalf of a business represents that they are authorized to bind that business to these terms.",
        ],
      },
      {
        heading: "2. Description of Service",
        paragraphs: [
          "HopperLine provides an AI receptionist that connects to your business's WhatsApp Business number and Instagram account to answer customer questions and manage appointment bookings. The service also includes a dashboard with CRM, calendar management, campaign, and analytics tools.",
          "HopperLine may add additional communication channels and features over time. These terms continue to apply to all HopperLine services that are active at any given time. Which features are live is described accurately in the product and on our marketing pages.",
        ],
      },
      {
        heading: "3. Eligibility and Accounts",
        paragraphs: [
          "HopperLine is designed for legitimate, registered businesses operating lawfully (such as beauty salons, hair salons, nail studios, aesthetic centers, dental clinics, and similar service businesses). Your business is responsible for the accuracy of the information you provide when creating an account, including business details and connected WhatsApp/Instagram accounts.",
          "Your business is responsible for keeping its account credentials (usernames, passwords, and access tokens) secure and for all activity that occurs under your account. Please contact us immediately if you suspect unauthorized access.",
        ],
      },
      {
        heading: "4. Acceptable Use",
        paragraphs: [
          "HopperLine acts as a Meta Tech Provider on your business's behalf when messaging your customers via WhatsApp and Instagram. By using HopperLine, you agree to comply with Meta's WhatsApp Business Messaging Policy and Instagram Platform Policy at all times.",
          "The following uses are strictly prohibited:",
        ],
        list: [
          "Using the messaging channels for illegal, harassing, deceptive, or unsolicited (spam) content",
          "Sending marketing messages without proper customer consent, or otherwise violating Meta's opt-in requirements",
          "Attempting to reverse-engineer, abuse, or overload the AI system, including sending automated or malicious traffic",
          "Using the service in a way that infringes third-party rights or jeopardizes HopperLine's partnership status with Meta",
        ],
      },
      {
        heading: "5. AI Receptionist Disclaimer",
        paragraphs: [
          "HopperLine's AI receptionist, like any current AI technology, can make mistakes — it may misunderstand a request, provide incorrect information, or record a booking incorrectly. We strongly recommend that your business periodically review bookings and AI conversations in the dashboard, particularly for anything sensitive, such as scheduling accuracy for dental or medical-adjacent appointments.",
          "HopperLine is a tool designed to assist your business's customer service — it is not a substitute for your own professional judgment, clinical or service responsibility, or direct communication with customers where needed. Final responsibility always rests with your business.",
        ],
      },
      {
        heading: "6. Subscription and Trial",
        paragraphs: [
          "HopperLine offers a free trial period for new businesses. After the trial ends, continued use of the service requires an active paid subscription corresponding to the plan you selected at checkout.",
          "Current pricing is available on our Pricing page and may be updated from time to time. Subscription fees are billed in advance on a recurring basis (monthly or annually, depending on the plan selected).",
          "You may cancel your subscription at any time through the cancellation process described in the dashboard. Cancellation takes effect at the end of the current billing period, and fees are non-refundable for partial periods unless explicitly stated otherwise.",
        ],
      },
      {
        heading: "7. Intellectual Property",
        paragraphs: [
          "The HopperLine software, branding, design, and underlying technology (including AI models, integrations, and the dashboard) are owned by HopperLine or its licensors. These terms grant you a right to use the software; they do not transfer any ownership rights in it.",
          "Your business retains ownership of its own business data, customer data, and message history with your customers. HopperLine processes this data solely to provide, maintain, and improve the service.",
        ],
      },
      {
        heading: "8. Termination",
        paragraphs: [
          "Your business may cancel its subscription and stop using the service at any time. HopperLine may suspend or terminate access to your account for reasons including breach of these terms, payment issues, or violations of Meta's policies.",
          "Upon termination, your access to the service ends. For details on how your data is retained and deleted afterward, see our Data Deletion page (/data-deletion) — we do not duplicate that process here.",
        ],
      },
      {
        heading: "9. Limitation of Liability",
        paragraphs: [
          "The HopperLine service is provided \"as is\" and \"as available.\" We do not guarantee that the service will be uninterrupted, error-free, or that it will meet every expectation in all circumstances.",
          "To the maximum extent permitted by applicable law, HopperLine's liability to your business is limited to the subscription fees you paid to HopperLine in the 12 months preceding the event giving rise to the claim. We are not liable for indirect, incidental, or consequential damages, including lost profits, lost data, or lost business.",
        ],
      },
      {
        heading: "10. Changes to These Terms",
        paragraphs: [
          "HopperLine may update these Terms of Service from time to time. Material changes will be reflected on this page with an updated date and, where feasible, communicated to your business by email or an in-dashboard notice. Continuing to use the service after changes take effect means you accept the updated terms.",
        ],
      },
      {
        heading: "11. Governing Law",
        paragraphs: [
          "Since HopperLine is launching first in Turkey, we currently assume these terms will be governed by the laws of the Republic of Turkey. That said, this section — and these terms as a whole — should be confirmed with legal counsel before being treated as final.",
        ],
      },
      {
        heading: "12. Contact",
        paragraphs: [
          `If you have questions about these Terms of Service, please contact us at ${siteConfig.contactEmail}.`,
        ],
      },
    ],
    closingNote:
      "Note: This document is a first draft prepared ahead of formal legal review and does not constitute legal advice. It is published to support our Meta app review process and general transparency; the final version will be updated once reviewed by legal counsel.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const resolvedLocale = (locale as Locale) in metaTitles ? (locale as Locale) : "tr";
  return {
    title: metaTitles[resolvedLocale],
    alternates: localeAlternates("/terms-of-service"),
  };
}

export default async function TermsOfServicePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const resolvedLocale = (locale as Locale) in content ? (locale as Locale) : "tr";
  const t = content[resolvedLocale];

  return (
    <LegalPage title={t.title} lastUpdated={t.lastUpdated}>
      {t.sections.map((section) => (
        <section key={section.heading}>
          <h2>{section.heading}</h2>
          {section.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          {section.list ? (
            <ul>
              {section.list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : null}
        </section>
      ))}
      <section>
        <p>{t.closingNote}</p>
      </section>
    </LegalPage>
  );
}
