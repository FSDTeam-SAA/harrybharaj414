import React from "react";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Terms & Conditions",
  description: "Read the terms and conditions for services provided by Destiny Abroad FZ-LLC.",
  path: "/t&c",
});

const Page = () => {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-16">
      <div className="mb-12">
        <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
          Terms & Conditions
        </h1>

        <p className="text-base leading-8 text-muted-foreground md:text-lg">
          These Terms & Conditions govern the use of the website, services,
          consultations, onboarding procedures, payments, and communication
          channels operated by <strong>Destiny Abroad FZ-LLC</strong>. By
          accessing the website, making any payment, booking consultations,
          participating in webinars, submitting documents, or communicating
          with the company, the user confirms voluntary acceptance of these
          terms.
        </p>
      </div>

      <div className="space-y-12">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">1. Nature of Services</h2>
          <p className="leading-8 text-muted-foreground">
            <strong>Destiny Abroad FZ-LLC</strong> provides professional
            consultation, documentation support, administrative coordination,
            profile evaluation, employer coordination assistance, and embassy
            filing support services only. The company does not operate as an
            employer, manpower supplier, government authority, or recruitment
            agency unless explicitly stated otherwise in writing.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">
            2. No Guarantee of Outcome
          </h2>
          <p className="leading-8 text-muted-foreground">
            The company does not guarantee visas, work permits, embassy
            approvals, immigration approvals, residence permits, nationality
            approvals, appointments, interview selections, employment offers,
            travel permissions, or government decisions. All decisions remain
            solely under the authority of embassies, immigration departments,
            employers, VFS centers, consulates, or government bodies.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">
            3. Stripe Payments & Registration Fees
          </h2>
          <p className="leading-8 text-muted-foreground">
            Payments made through Stripe or other payment methods are
            considered voluntary professional service payments. Registration
            fees, onboarding fees, profile evaluation charges, administrative
            charges, consultation fees, and documentation support fees become
            strictly non-refundable once onboarding, consultation,
            communication handling, profile review, administrative work,
            employer coordination, or documentation processing has commenced.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">
            4. Chargeback & Payment Dispute Policy
          </h2>
          <p className="leading-8 text-muted-foreground">
            The customer acknowledges that all payments are made voluntarily
            after reviewing the company&apos;s disclaimers, service
            descriptions, and terms. <strong>Destiny Abroad FZ-LLC</strong>{" "}
            reserves the right to contest misleading or fraudulent chargebacks
            using invoices, onboarding records, agreements, digital
            acknowledgments, email confirmations, payment logs, webinar
            recordings, IP logs, communication history, WhatsApp records, and
            other supporting evidence.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">
            5. Topmate Consultation Disclaimer
          </h2>
          <p className="leading-8 text-muted-foreground">
            All consultations booked through Topmate or other advisory
            platforms are informational and advisory in nature only.
            Consultation fees compensate professional time, business
            expertise, and advisory services and are strictly non-refundable
            once booking confirmation or session access has been issued.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">6. Webinar Disclaimer</h2>
          <p className="leading-8 text-muted-foreground">
            Participation in webinars, workshops, live sessions, or
            informational events does not constitute a guarantee of
            immigration approval, employment, visa issuance, or service
            eligibility. Any examples, success stories, timelines, or case
            discussions presented during webinars are for informational
            purposes only and may vary based on individual circumstances and
            authority decisions.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">
            7. No Control Over Third-Party Decisions
          </h2>
          <p className="leading-8 text-muted-foreground">
            <strong>Destiny Abroad FZ-LLC</strong> has no control over embassy
            decisions, government approvals, immigration policies, employer
            selections, quota availability, legal changes, interview
            outcomes, processing timelines, delays, refusals, appointment
            availability, or external third-party actions.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">
            8. Processing Timelines
          </h2>
          <p className="leading-8 text-muted-foreground">
            All timelines communicated by the company are estimated only and
            may change without notice due to embassy backlog, quota
            limitations, employer requirements, operational delays, legal
            changes, public holidays, strikes, force majeure events, or
            government procedures.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">
            9. Client Responsibilities
          </h2>
          <p className="leading-8 text-muted-foreground">
            Users and clients are solely responsible for providing accurate,
            truthful, valid, and complete information and documentation.
            Submission of misleading, fake, altered, incomplete, or
            fraudulent documents may result in immediate termination of
            services without refund.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">
            10. Communication & Conduct Policy
          </h2>
          <p className="leading-8 text-muted-foreground">
            The company reserves the right to suspend communication or
            terminate services in cases involving abusive conduct,
            harassment, threats, reputational attacks, false allegations,
            excessive disruptive behavior, misuse of communication channels,
            or defamatory conduct toward the company, staff, partners, or
            representatives.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">
            11. Digital Acceptance & Electronic Consent
          </h2>
          <p className="leading-8 text-muted-foreground">
            Digital signatures, checkbox confirmations, scanned signatures,
            webinar participation acknowledgments, email confirmations,
            WhatsApp acknowledgments, typed confirmations, and online
            acceptance mechanisms shall be considered legally valid forms of
            acknowledgment and acceptance.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">
            12. Limitation of Liability
          </h2>
          <p className="leading-8 text-muted-foreground">
            <strong>Destiny Abroad FZ-LLC</strong> shall not be held liable
            for refusals, delays, losses, rejections, appointment
            unavailability, employer decisions, immigration outcomes, travel
            expenses, emotional distress, relocation costs, missed
            opportunities, or indirect damages arising from third-party
            actions or government decisions. The company&apos;s liability, if
            any, shall remain strictly limited to the amount directly paid
            for the relevant service.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">
            13. Privacy & Data Usage
          </h2>
          <p className="leading-8 text-muted-foreground">
            Client information and documentation may be stored, processed,
            and shared with relevant authorities, employers, legal
            representatives, partner institutions, or processing entities
            where necessary for service-related operational purposes.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">
            14. Governing Law & Jurisdiction
          </h2>
          <p className="leading-8 text-muted-foreground">
            These Terms & Conditions shall be governed under the applicable
            laws and regulations of the United Arab Emirates. Any dispute
            arising from the use of the website or company services shall
            fall under the applicable jurisdiction and legal framework of
            the UAE.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">
            15. Final Acknowledgment
          </h2>
          <p className="leading-8 text-muted-foreground">
            By using the website, booking consultations, participating in
            webinars, making payments, or proceeding with onboarding, the
            user confirms that they have read, understood, and voluntarily
            accepted the Terms & Conditions, Legal Disclaimer, Refund
            Policy, and service limitations of{" "}
            <strong>Destiny Abroad FZ-LLC</strong>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Page;
