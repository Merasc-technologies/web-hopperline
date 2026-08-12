import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/lib/site-config";
import { localeAlternates } from "@/lib/alternates";
import type { Locale } from "@/i18n/routing";

const metaTitles: Record<Locale, string> = {
  tr: "Gizlilik Politikası · HopperLine",
  en: "Privacy Policy · HopperLine",
};

const content: Record<
  Locale,
  {
    title: string;
    lastUpdated: string;
    sections: { heading: string; body: React.ReactNode }[];
  }
> = {
  tr: {
    title: "Gizlilik Politikası",
    lastUpdated: "Son güncelleme: 12 Ağustos 2026",
    sections: [
      {
        heading: "1. Kimiz ve bu politika neyi kapsıyor",
        body: (
          <p>
            HopperLine (&ldquo;biz&rdquo;, &ldquo;HopperLine&rdquo;), güzellik
            salonları, kuaförler, tırnak stüdyoları, estetik merkezleri ve diş
            klinikleri için WhatsApp ve Instagram üzerinden çalışan yapay zeka
            destekli bir resepsiyon ve randevu asistanı hizmetidir. Bu
            gizlilik politikası, hopperline.com pazarlama sitesini ve
            app.hopperline.com üzerinden erişilen ürün panelini
            (&ldquo;Hizmet&rdquo;) kullanırken topladığımız kişisel verileri,
            bunları neden topladığımızı, kimlerle paylaştığımızı ve nasıl
            koruduğumuzu açıklar.
          </p>
        ),
      },
      {
        heading: "2. Hangi verileri topluyoruz",
        body: (
          <>
            <p>
              HopperLine&apos;ı bir işletme olarak kullanan doğrudan
              müşterilerimizden (salon, kuaför, klinik sahipleri ve
              çalışanları) ve onların WhatsApp/Instagram üzerinden mesaj
              gönderen son müşterilerinden veri topluyoruz. Topladığımız veri
              kategorileri şunlardır:
            </p>
            <ul>
              <li>
                <strong>İşletme kayıtları:</strong> işletme adı, iletişim
                bilgileri, adres ve çalışma saatleri gibi bilgiler.
              </li>
              <li>
                <strong>Personel hesapları:</strong> panele erişen çalışanların
                ad, e-posta ve rol bilgileri.
              </li>
              <li>
                <strong>Hizmet ve fiyat kataloğu:</strong> işletmenin sunduğu
                hizmetler, süreleri ve fiyatlandırması.
              </li>
              <li>
                <strong>Müşteri kayıtları:</strong> işletmenin son
                müşterilerine ait ad, telefon numarası, yaş, notlar ve ziyaret
                geçmişi gibi bilgiler. Bu veriler çoğunlukla, müşteriler
                işletmeyle WhatsApp veya Instagram üzerinden yazıştıkça
                otomatik olarak oluşturulur.
              </li>
              <li>
                <strong>Randevu kayıtları:</strong> randevu tarihi, saati,
                talep edilen hizmet ve randevu durumu.
              </li>
              <li>
                <strong>WhatsApp ve Instagram mesaj içerikleri:</strong>{" "}
                yapay zeka asistanımızın soruları yanıtlayabilmesi ve randevu
                oluşturabilmesi için, işletme ile son müşteri arasındaki tüm
                sohbet içeriğini okur ve işler.
              </li>
              <li>
                <strong>Kampanya verileri:</strong> işletmenin oluşturduğu
                pazarlama/hatırlatma kampanyalarına ait içerik ve hedef kitle
                bilgileri.
              </li>
              <li>
                <strong>Entegrasyon kimlik bilgileri:</strong> işletmenin
                WhatsApp Business API ve Instagram Messaging API
                bağlantılarına ait erişim anahtarları (access token),
                işletmenin `business_integrations` kaydı altında güvenli
                şekilde saklanır.
              </li>
            </ul>
          </>
        ),
      },
      {
        heading: "3. Verileri neden topluyoruz",
        body: (
          <p>
            Verileri, HopperLine&apos;ın temel işlevini yerine getirmek için
            işliyoruz: gelen WhatsApp ve Instagram mesajlarını okuyup yapay
            zeka ile yanıtlamak, müşteri sorularını cevaplamak, randevu
            oluşturmak, CRM kayıtlarını güncel tutmak ve işletmeye panel
            üzerinden bu verileri yönetme imkânı sunmak. HopperLine&apos;ın
            doğrudan müşterisi işletmenin kendisidir (salon, kuaför veya
            klinik); işletmenin son müşterilerinin WhatsApp/Instagram
            üzerinden gönderdiği veriler, işletme adına ve işletmenin
            talimatıyla işlenir.
          </p>
        ),
      },
      {
        heading: "4. Verileri kimlerle paylaşıyoruz",
        body: (
          <>
            <p>
              Hizmeti çalıştırabilmek için verileri, işlevleri yerine
              getirmelerine yetecek ölçüde aşağıdaki hizmet
              sağlayıcılarımızla (alt işlemciler) paylaşırız:
            </p>
            <ul>
              <li>
                <strong>Meta Platforms, Inc.</strong> — WhatsApp Business API
                ve Instagram Messaging API üzerinden mesaj gönderip almak
                için.
              </li>
              <li>
                <strong>OpenAI</strong> — yapay zeka yanıtlarını üretmek
                amacıyla mesaj içeriğini işlemek için.
              </li>
              <li>
                <strong>Supabase</strong> — veritabanı barındırma hizmeti
                için.
              </li>
              <li>
                <strong>Stripe</strong> — faturalandırma ve ödeme işlemleri
                için.
              </li>
              <li>
                <strong>Resend</strong> — işlemsel (transactional) e-posta
                gönderimi için.
              </li>
              <li>
                <strong>Sentry</strong> — hata izleme ve uygulama kararlılığı
                için.
              </li>
              <li>
                <strong>Vercel</strong> — uygulama barındırma altyapısı için.
              </li>
            </ul>
            <p>
              HopperLine, kişisel verileri hiçbir şekilde satmaz. Verileri
              yalnızca yukarıdaki hizmet sağlayıcılarla, Hizmet&apos;i
              çalıştırmak için gerekli olduğu ölçüde ve yasal yükümlülükler
              gerektirdiğinde yetkili makamlarla paylaşırız.
            </p>
          </>
        ),
      },
      {
        heading: "5. Güvenlik",
        body: (
          <p>
            Veritabanımızda, her işletmenin yalnızca kendi verilerine
            erişebilmesini sağlamak için Postgres Row Level Security (satır
            düzeyinde güvenlik) kullanıyoruz; erişim `business_id` alanına
            göre izole edilir. Meta&apos;dan gelen webhook bildirimlerinin
            gerçekten Meta&apos;dan geldiğini doğrulamak için HMAC tabanlı
            imza doğrulaması (`x-hub-signature-256`) uyguluyoruz. Bu önlemler
            veri güvenliğini artırmayı amaçlar; hiçbir sistem yüzde yüz
            güvenli değildir.
          </p>
        ),
      },
      {
        heading: "6. Veri saklama süresi",
        body: (
          <p>
            Verileri, ilgili işletme hesabı aktif olduğu sürece saklarız.
            Verilerin nasıl silineceğine dair ayrıntılı bilgi için{" "}
            <Link href="/data-deletion">Veri Silme</Link> sayfamıza bakabilirsiniz;
            silme sürecinin ayrıntılarını burada tekrarlamıyoruz.
          </p>
        ),
      },
      {
        heading: "7. Haklarınız",
        body: (
          <p>
            Hakkınızda işlenen kişisel verilere erişme, bunların
            düzeltilmesini talep etme veya silinmesini isteme hakkına
            sahipsiniz. Bu haklarınızı kullanmak için bizimle{" "}
            <a href={`mailto:${siteConfig.privacyEmail}`}>
              {siteConfig.privacyEmail}
            </a>{" "}
            adresinden iletişime geçebilirsiniz.
          </p>
        ),
      },
      {
        heading: "8. Çocukların verileri",
        body: (
          <p>
            HopperLine, işletmelere yönelik bir B2B aracıdır ve çocuklara
            yönelik olarak tasarlanmamıştır. İşletme müşterilerimizin, bir
            çocuğa ait kişisel verileri uygun ebeveyn bağlamı olmadan
            &ldquo;müşteri kaydı&rdquo; olarak bilerek sisteme girmemesini
            bekliyoruz.
          </p>
        ),
      },
      {
        heading: "9. Uluslararası veri aktarımı ve KVKK",
        body: (
          <p>
            HopperLine&apos;ın öncelikli pazarı Türkiye&apos;dir. Bu politika,
            6698 sayılı Kişisel Verilerin Korunması Kanunu&apos;nun (KVKK)
            temel ilkeleriyle uyumlu olacak şekilde, genel iyi uygulama ve
            GDPR benzeri ilkeler gözetilerek hazırlanmıştır. Kullandığımız
            hizmet sağlayıcılardan bazıları verileri Türkiye dışındaki
            sunucularda işleyebilir. Bu politikanın resmi hukuki incelemesi
            devam etmektedir ve gerektiğinde güncellenecektir.
          </p>
        ),
      },
      {
        heading: "10. Bu politikadaki değişiklikler",
        body: (
          <p>
            Bu gizlilik politikasını zaman zaman güncelleyebiliriz. Önemli
            değişiklikler bu sayfada güncellenmiş tarih ile birlikte
            yayınlanacaktır. Hizmeti kullanmaya devam etmeniz, güncellenmiş
            politikayı kabul ettiğiniz anlamına gelir.
          </p>
        ),
      },
      {
        heading: "11. İletişim",
        body: (
          <p>
            Bu politika veya kişisel verilerinizin işlenmesi hakkında
            sorularınız için bize{" "}
            <a href={`mailto:${siteConfig.privacyEmail}`}>
              {siteConfig.privacyEmail}
            </a>{" "}
            adresinden ulaşabilirsiniz.
          </p>
        ),
      },
      {
        heading: "12. Bir not",
        body: (
          <p>
            Bu metin, HopperLine ekibi tarafından resmi hukuki inceleme
            öncesinde hazırlanmış ilk taslak niteliğindedir ve hukuki tavsiye
            teşkil etmez; bir avukat tarafından gözden geçirilene kadar
            geçerli en güncel sürüm olarak kullanılmaktadır ve gerektiğinde
            revize edilecektir.
          </p>
        ),
      },
    ],
  },
  en: {
    title: "Privacy Policy",
    lastUpdated: "Last updated: August 12, 2026",
    sections: [
      {
        heading: "1. Who we are and what this policy covers",
        body: (
          <p>
            HopperLine (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;HopperLine&rdquo;)
            operates an AI-powered receptionist and booking assistant that
            works over WhatsApp and Instagram for beauty salons, hair
            salons, nail studios, aesthetic centers, and dental clinics. This
            Privacy Policy explains what personal data we collect when you
            use the hopperline.com marketing site and the product dashboard
            at app.hopperline.com (together, the &ldquo;Service&rdquo;), why
            we collect it, who we share it with, and how we protect it.
          </p>
        ),
      },
      {
        heading: "2. What data we collect",
        body: (
          <>
            <p>
              We collect data both from our direct customers — the
              businesses (salons, clinics, and their staff) that sign up for
              HopperLine — and from those businesses&apos; own customers who
              message them on WhatsApp or Instagram. The categories of data
              we collect include:
            </p>
            <ul>
              <li>
                <strong>Business records:</strong> business name, contact
                details, address, and working hours.
              </li>
              <li>
                <strong>Staff accounts:</strong> names, email addresses, and
                roles of employees who access the dashboard.
              </li>
              <li>
                <strong>Service and pricing catalogs:</strong> the services a
                business offers, their duration, and pricing.
              </li>
              <li>
                <strong>Customer records:</strong> name, phone number, age,
                notes, and visit history belonging to the business&apos;s own
                customers. Most of this data is generated automatically as
                customers message the business on WhatsApp or Instagram.
              </li>
              <li>
                <strong>Appointment records:</strong> appointment date, time,
                requested service, and status.
              </li>
              <li>
                <strong>Full WhatsApp and Instagram message content:</strong>{" "}
                our AI reads and responds to the full conversation between a
                business and its customers in order to answer questions and
                book appointments.
              </li>
              <li>
                <strong>Campaign data:</strong> content and target audience
                information for marketing or reminder campaigns a business
                creates.
              </li>
              <li>
                <strong>Integration credentials:</strong> access tokens for a
                business&apos;s WhatsApp Business API and Instagram Messaging
                API connections, stored securely under that business&apos;s
                `business_integrations` record.
              </li>
            </ul>
          </>
        ),
      },
      {
        heading: "3. Why we collect it and our legal basis",
        body: (
          <p>
            We process this data to operate the core of HopperLine: reading
            and responding to incoming WhatsApp and Instagram messages with
            AI, answering customer questions, booking appointments,
            maintaining an up-to-date CRM, and giving the business a
            dashboard to manage all of it. HopperLine&apos;s direct customer
            is the business itself (the salon, kuaför, or clinic); data sent
            by a business&apos;s end customers over WhatsApp or Instagram is
            processed on that business&apos;s behalf and under its
            instructions.
          </p>
        ),
      },
      {
        heading: "4. Who we share data with",
        body: (
          <>
            <p>
              To run the Service, we share data with the following service
              providers (subprocessors), limited to what each needs to
              perform its function:
            </p>
            <ul>
              <li>
                <strong>Meta Platforms, Inc.</strong> — required to send and
                receive messages via the WhatsApp Business API and Instagram
                Messaging API.
              </li>
              <li>
                <strong>OpenAI</strong> — processes message content to
                generate AI responses.
              </li>
              <li>
                <strong>Supabase</strong> — database hosting.
              </li>
              <li>
                <strong>Stripe</strong> — billing and payment processing.
              </li>
              <li>
                <strong>Resend</strong> — transactional email delivery.
              </li>
              <li>
                <strong>Sentry</strong> — error monitoring and application
                stability.
              </li>
              <li>
                <strong>Vercel</strong> — application hosting infrastructure.
              </li>
            </ul>
            <p>
              HopperLine does not sell personal data. We share data with the
              providers above only as needed to operate the Service, and
              with authorities when required by law.
            </p>
          </>
        ),
      },
      {
        heading: "5. Security",
        body: (
          <p>
            Our database uses Postgres Row Level Security to enforce tenant
            isolation, so each business can only access its own data,
            scoped by `business_id`. Incoming webhook events from Meta are
            verified using HMAC-based signature verification
            (`x-hub-signature-256`) to confirm they genuinely originate from
            Meta. These measures are intended to reduce risk; no system can
            be guaranteed to be completely secure.
          </p>
        ),
      },
      {
        heading: "6. Data retention",
        body: (
          <p>
            We retain data for as long as the associated business account
            remains active. For details on how to request deletion of your
            data, see our <Link href="/data-deletion">Data Deletion</Link> page —
            we don&apos;t duplicate that process here.
          </p>
        ),
      },
      {
        heading: "7. Your rights",
        body: (
          <p>
            You have the right to access, correct, or request deletion of
            your personal data. To exercise these rights, contact us at{" "}
            <a href={`mailto:${siteConfig.privacyEmail}`}>
              {siteConfig.privacyEmail}
            </a>
            .
          </p>
        ),
      },
      {
        heading: "8. Children's data",
        body: (
          <p>
            HopperLine is a B2B tool built for businesses and is not
            directed at children. We expect our business customers not to
            knowingly submit a child&apos;s personal data as a
            &ldquo;customer&rdquo; record without appropriate parental
            context.
          </p>
        ),
      },
      {
        heading: "9. International transfers and KVKK",
        body: (
          <p>
            HopperLine&apos;s primary market is Turkey. This policy is
            intended to align with the core principles of Turkey&apos;s Law
            on the Protection of Personal Data (KVKK, Law No. 6698), while
            also following general good-practice and GDPR-style principles.
            Some of the service providers we use may process data on
            servers located outside Turkey. Formal legal review of this
            policy is still pending, and it will be updated as needed.
          </p>
        ),
      },
      {
        heading: "10. Changes to this policy",
        body: (
          <p>
            We may update this Privacy Policy from time to time. Material
            changes will be reflected on this page along with an updated
            date. Continued use of the Service after an update means you
            accept the revised policy.
          </p>
        ),
      },
      {
        heading: "11. Contact",
        body: (
          <p>
            If you have questions about this policy or how your personal
            data is processed, reach us at{" "}
            <a href={`mailto:${siteConfig.privacyEmail}`}>
              {siteConfig.privacyEmail}
            </a>
            .
          </p>
        ),
      },
      {
        heading: "12. A note on this draft",
        body: (
          <p>
            This policy was prepared by the HopperLine team as a first draft
            ahead of formal legal review. It is not legal advice, and we
            expect to revise it as that review progresses.
          </p>
        ),
      },
    ],
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
    alternates: localeAlternates("/privacy-policy"),
  };
}

export default async function PrivacyPolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const resolvedLocale = (locale as Locale) in content ? (locale as Locale) : "tr";
  const { title, lastUpdated, sections } = content[resolvedLocale];

  return (
    <LegalPage title={title} lastUpdated={lastUpdated}>
      {sections.map((section) => (
        <section key={section.heading}>
          <h2>{section.heading}</h2>
          {section.body}
        </section>
      ))}
    </LegalPage>
  );
}
