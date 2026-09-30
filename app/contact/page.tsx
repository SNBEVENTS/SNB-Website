import ContactForm from "./ContactForm";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

export default function Contact() {
  return (
    <>
      {/* Hero — split: B&W photo left, contact info right */}
      <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 pt-16 md:pt-0">
        {/* Left — B&W photo with text overlay */}
        <div className="relative overflow-hidden min-h-[55vh] md:min-h-screen">
          <img
            src="/team-ari.jpg"
            alt="SNB Event Agency team"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-ink/50" />
          <div className="absolute inset-0 flex flex-col justify-end p-10 md:p-16">
            <p className="text-[11px] font-semibold text-gold tracking-[0.4em] uppercase mb-5">
              Get In Touch
            </p>
            <h1 className="font-heading text-[clamp(3.5rem,8vw,7rem)] text-surface leading-[0.92] tracking-tight">
              Let&apos;s<br /><em>Talk</em>
            </h1>
          </div>
        </div>

        {/* Right — contact details on dark background */}
        <div className="bg-ink px-10 md:px-16 py-20 md:py-0 md:flex md:flex-col md:justify-center">
          <Link href="/" className="inline-flex mb-10">
            <Image
              src={logo}
              alt="SNB Event Agency"
              className="h-11 w-auto object-contain invert opacity-90"
            />
          </Link>
          <p className="text-surface/60 leading-relaxed mb-14 max-w-sm">
            Whether you have a detailed brief or just a spark of an idea, we&apos;d love to hear
            from you. We respond to every enquiry personally.
          </p>

          <div className="space-y-10">
            <div>
              <p className="text-[11px] font-semibold text-gold tracking-[0.3em] uppercase mb-3">
                Email
              </p>
              <a
                href="mailto:info@strawsnberries.com"
                className="text-surface hover:text-gold transition-colors"
              >
                info@strawsnberries.com
              </a>
            </div>

            <div>
              <p className="text-[11px] font-semibold text-gold tracking-[0.3em] uppercase mb-3">
                Phone & WhatsApp
              </p>
              <a
                href="https://wa.me/34936096253"
                className="text-surface hover:text-gold transition-colors"
              >
                +34 936 096 253
              </a>
            </div>

            <div>
              <p className="text-[11px] font-semibold text-gold tracking-[0.3em] uppercase mb-3">
                Based In
              </p>
              <p className="text-surface/70">Barcelona, Spain</p>
            </div>

            <div className="pt-8 border-t border-surface/10">
              <p className="text-[11px] font-semibold text-gold tracking-[0.3em] uppercase mb-3">
                What Happens Next
              </p>
              <p className="text-surface/60 text-sm leading-relaxed">
                We review every enquiry personally and aim to respond within 48 hours. If it&apos;s
                a good fit, we&apos;ll arrange a call to learn more about your event.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form section */}
      <section className="py-24 md:py-32 px-6 bg-[#b85c3e]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-14">
            <p className="text-[11px] font-semibold text-surface/60 tracking-[0.3em] uppercase mb-4">
              Send Us a Brief
            </p>
            <h2 className="font-heading text-3xl md:text-5xl text-surface">
              Tell Us About Your Event
            </h2>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
