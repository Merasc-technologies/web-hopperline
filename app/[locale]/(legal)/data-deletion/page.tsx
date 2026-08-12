import { LegalPage } from "@/components/legal/legal-page";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/lib/site-config";
import { localeAlternates } from "@/lib/alternates";
import type { Locale } from "@/i18n/routing";

const metaTitles: Record<Locale, string> = {
  tr: "Veri Silme · HopperLine",
  en: "Data Deletion · HopperLine",
};

const content: Record<
  Locale,
  {
    title: string;
    lastUpdated: string;
    intro: string;
    sections: { heading: string; body: React.ReactNode }[];
  }
> = {
  tr: {
    title: "Veri Silme",
    lastUpdated: "Son güncelleme: 12 Ağustos 2026",
    intro:
      "Bu sayfa, HopperLine'ın sakladığı verilerin nasıl silinebileceğini açıklar. HopperLine; WhatsApp Business API ve Instagram Messaging API entegrasyonları kapsamında Meta tarafından istenen 'Veri Silme Talimatları' sayfası olarak yayınlanmıştır.",
    sections: [
      {
        heading: "Hangi verileri saklıyoruz",
        body: (
          <>
            <p>
              HopperLine; işletme kayıtları (salon/klinik bilgileri, personel ve
              hizmet listeleri), müşteri kayıtları (ad, telefon numarası,
              notlar, geçmiş ziyaretler), randevu kayıtları ve WhatsApp ile
              Instagram DM üzerinden yürütülen tüm konuşma içeriklerini
              saklar. Bu verilerin ne amaçla toplandığı, nerede barındırıldığı
              ve kimlerle paylaşıldığı hakkında ayrıntılı bilgi için{" "}
              <Link href="/privacy-policy">Gizlilik Politikamıza</Link> bakabilirsiniz.
            </p>
          </>
        ),
      },
      {
        heading: "İki tür silme talebi",
        body: (
          <>
            <p>
              <strong>(a) İşletme hesabının tamamen silinmesi:</strong>{" "}
              HopperLine kullanan bir salon, kuaför, güzellik merkezi, tırnak
              stüdyosu, estetik merkezi veya diş kliniği, kendi hesabının ve
              bu hesaba bağlı tüm verilerin silinmesini talep edebilir. Bu
              talep; aboneliği sonlandırır ve işletme kaydını, personel ve
              hizmet bilgilerini, müşteri kayıtlarını, randevuları ve mesaj
              geçmişini kalıcı olarak siler.
            </p>
            <p>
              <strong>(b) Bireysel bir son kullanıcının verilerinin silinmesi:</strong>{" "}
              HopperLine kullanan bir işletmeye WhatsApp veya Instagram
              üzerinden mesaj göndermiş bir kişi, kendi kişisel konuşma
              kaydının veya müşteri kaydının silinmesini isteyebilir.
              HopperLine&apos;ın doğrudan müşterisi işletmenin kendisi olduğu için,
              bu tür taleplerin önce doğrudan ilgili işletmeyle iletişime
              geçilerek yapılması önerilir. Ancak talep doğrudan{" "}
              <a href={`mailto:${siteConfig.privacyEmail}`}>
                {siteConfig.privacyEmail}
              </a>{" "}
              adresine iletilirse, HopperLine bu talebi ilgili işletmeye
              yönlendirerek veya verinin doğrudan HopperLine&apos;ın kontrolünde
              olduğu durumlarda kendisi işlem yaparak karşılar.
            </p>
          </>
        ),
      },
      {
        heading: "Silme talebi nasıl yapılır",
        body: (
          <>
            <p>
              Şu an için silme talepleri, e-posta yoluyla manuel olarak
              işlenmektedir; otomatik bir self-servis panel veya API entegrasyonu
              bulunmamaktadır. Talebinizi{" "}
              <a href={`mailto:${siteConfig.privacyEmail}`}>
                {siteConfig.privacyEmail}
              </a>{" "}
              adresine e-posta göndererek iletebilirsiniz:
            </p>
            <ul>
              <li>
                İşletme hesabı silme talepleri için: işletme adı ve hesapla
                ilişkili e-posta adresi.
              </li>
              <li>
                Bireysel veri silme talepleri için: telefon numaranız veya
                Instagram kullanıcı adınız ve mesajlaştığınız işletmenin adı.
              </li>
            </ul>
            <p>
              Talebin kimlik doğrulamasını kolaylaştırmak amacıyla, mümkünse
              hesabı veya konuşmayı tanımlayan ek bilgiler eklemenizi rica
              ederiz.
            </p>
          </>
        ),
      },
      {
        heading: "Talep sonrası süreç",
        body: (
          <p>
            Talebiniz alındıktan sonra ilgili veriler Supabase üzerinde
            barındırılan sistemlerimizde tespit edilir ve kalıcı olarak
            silinir. Hedefimiz bu işlemi talebin alınmasından itibaren{" "}
            <strong>30 gün içinde</strong> tamamlamaktır; bu süre, HopperLine
            ekibi tarafından süreç ve hukuki incelemeler tamamlandıkça
            kesinleştirilecek ve gerekirse güncellenecektir.
          </p>
        ),
      },
      {
        heading: "Silme sonrası saklanabilecek veriler",
        body: (
          <p>
            Yasal yükümlülükler nedeniyle (örneğin fatura ve muhasebe
            kayıtlarının vergi mevzuatı gereği saklanması) bazı sınırlı
            kayıtlar, silinen konuşma ve müşteri verilerinden ayrı olarak
            tutulmaya devam edebilir. Bu kayıtlar yalnızca yasal olarak
            gerekli olan asgari bilgilerle sınırlıdır.
          </p>
        ),
      },
      {
        heading: "İletişim",
        body: (
          <p>
            Veri silme talepleriniz ve sorularınız için bize{" "}
            <a href={`mailto:${siteConfig.privacyEmail}`}>
              {siteConfig.privacyEmail}
            </a>{" "}
            adresinden ulaşabilirsiniz. Verilerimizi nasıl topladığımız ve
            kullandığımız hakkında daha fazla bilgi için{" "}
            <Link href="/privacy-policy">Gizlilik Politikası</Link> sayfamızı
            inceleyebilirsiniz.
          </p>
        ),
      },
    ],
  },
  en: {
    title: "Data Deletion",
    lastUpdated: "Last updated: August 12, 2026",
    intro:
      "This page explains how you can request deletion of data held by HopperLine. It is published as the 'Data Deletion Instructions' page required by Meta for apps using the WhatsApp Business API and Instagram Messaging API.",
    sections: [
      {
        heading: "What data we store",
        body: (
          <p>
            HopperLine stores business records (salon/clinic details, staff,
            and service lists), customer records (name, phone number, notes,
            visit history), appointment records, and the full content of
            conversations conducted over WhatsApp and Instagram DM. For a
            complete explanation of what we collect, why, and where it is
            hosted, see our <Link href="/privacy-policy">Privacy Policy</Link>.
          </p>
        ),
      },
      {
        heading: "Two kinds of deletion requests",
        body: (
          <>
            <p>
              <strong>(a) Business account deletion:</strong> A salon, hair
              salon/kuaför, nail studio, aesthetic center, or dental clinic
              using HopperLine can request that its account and all
              associated data be deleted. This ends the subscription and
              permanently removes the business record, staff and service
              information, customer records, appointments, and message
              history.
            </p>
            <p>
              <strong>
                (b) An individual end-customer&apos;s data deletion request:
              </strong>{" "}
              Someone who has messaged a HopperLine-powered business on
              WhatsApp or Instagram can request that their personal
              conversation or customer record be deleted. Because
              HopperLine&apos;s direct customer is the business itself, we
              recommend contacting the business directly first. That said, if
              a request is sent directly to{" "}
              <a href={`mailto:${siteConfig.privacyEmail}`}>
                {siteConfig.privacyEmail}
              </a>
              , HopperLine will honor it by relaying it to the responsible
              business, or by acting on it directly in cases where HopperLine
              itself controls the data.
            </p>
          </>
        ),
      },
      {
        heading: "How to request deletion",
        body: (
          <>
            <p>
              At this time, deletion requests are handled manually by email —
              there is no self-service dashboard or automated API for this
              yet. To request deletion, email{" "}
              <a href={`mailto:${siteConfig.privacyEmail}`}>
                {siteConfig.privacyEmail}
              </a>{" "}
              with:
            </p>
            <ul>
              <li>
                For a business account deletion: the business name and the
                email address associated with the account.
              </li>
              <li>
                For an individual data deletion request: your phone number or
                Instagram handle, and the name of the business you messaged.
              </li>
            </ul>
            <p>
              Where possible, please include any additional details that help
              us identify the correct account or conversation, so we can
              verify and act on your request quickly.
            </p>
          </>
        ),
      },
      {
        heading: "What happens after a request",
        body: (
          <p>
            Once we receive your request, we locate the relevant data in our
            systems, hosted on Supabase, and permanently delete it. We aim to
            complete this <strong>within 30 days</strong> of receiving a
            verified request; this turnaround commitment will be confirmed
            and finalized by the HopperLine team as our processes and legal
            review are completed.
          </p>
        ),
      },
      {
        heading: "What may be retained after deletion",
        body: (
          <p>
            Some limited records may be retained where legally required — for
            example, billing and invoice records kept for tax and accounting
            purposes. Any such records are kept separately from the deleted
            conversational and customer data, and are limited to what is
            legally necessary.
          </p>
        ),
      },
      {
        heading: "Contact",
        body: (
          <p>
            For deletion requests or questions, reach us at{" "}
            <a href={`mailto:${siteConfig.privacyEmail}`}>
              {siteConfig.privacyEmail}
            </a>
            . For more on how we collect and use data, see our{" "}
            <Link href="/privacy-policy">Privacy Policy</Link>.
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
}) {
  const { locale } = await params;
  const resolved = (locale === "en" ? "en" : "tr") as Locale;
  return {
    title: metaTitles[resolved],
    alternates: localeAlternates("/data-deletion"),
  };
}

export default async function DataDeletionPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const resolved = (locale === "en" ? "en" : "tr") as Locale;
  const t = content[resolved];

  return (
    <LegalPage title={t.title} lastUpdated={t.lastUpdated}>
      <section>
        <p>{t.intro}</p>
      </section>
      {t.sections.map((section) => (
        <section key={section.heading}>
          <h2>{section.heading}</h2>
          {section.body}
        </section>
      ))}
      <section>
        <p>
          {resolved === "tr"
            ? "Bu sayfa, resmi hukuki ve operasyonel inceleme süreci tamamlanmadan önce hazırlanmış ilk taslak niteliğindedir ve hukuki tavsiye teşkil etmez."
            : "This page is an initial draft prepared ahead of formal legal and process review, and does not constitute legal advice."}
        </p>
      </section>
    </LegalPage>
  );
}
