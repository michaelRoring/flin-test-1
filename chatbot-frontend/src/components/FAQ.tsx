import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export default function FAQ() {
  return (
    <section className="py-12 md:py-16 container">
      <h2 className="text-2xl font-bold text-center mb-8">
        Pertanyaan yang Sering Diajukan tentang{" "}
        <span className="text-blue-600">FLIN</span>
      </h2>

      <Accordion type="single" collapsible className="max-w-3xl mx-auto">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-left">
            Apakah FLIN merupakan perusahaan yang sudah terdaftar?
          </AccordionTrigger>
          <AccordionContent>
            Ya, FLIN adalah perusahaan yang terdaftar secara resmi dan memiliki
            izin operasional.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-left">
            Dimana saya bisa kontak FLIN?
          </AccordionTrigger>
          <AccordionContent>
            Anda dapat menghubungi kami melalui email, telepon, atau melalui
            formulir kontak di website kami.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-left">
            Kapan saya memperoleh FLIN?
          </AccordionTrigger>
          <AccordionContent>
            You can register anytime through our website or application.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-left">
            Apa saja dokumen untuk pengajuan layanan FLIN?
          </AccordionTrigger>
          <AccordionContent>
            Dokumen yang diperlukan biasanya adalah KTP, bukti penghasilan, dan
            dokumen pendukung lainnya.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
