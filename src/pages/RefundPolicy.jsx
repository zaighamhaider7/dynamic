import React from 'react';
import Footer from '../components/Generic/Footer';
import Navbar from '../components/Generic/Navbar';

export default function RefundPolicy() {
  return (
    <>
    <div>
      <Navbar />
</div>
      <main className="data-handling-page">
        <h1 className="main-heading">Refund Policy</h1>

        <section>
          <h2 className="section-heading">Overview</h2>
          <p className="section-text">
            Wizspeed has prepared this refund policy to explain situations under which we provide a refund. This includes the refund claiming procedure and our responsibilities. By registering for any of our services, you accept and agree with the terms of this refund policy.
          </p>
        </section>

        <section>
          <h2 className="section-heading">Scope & Coverage</h2>
          <p className="section-text">
            This policy covers refunds by Wizspeed or websites managed/owned by us. It does not apply to companies not owned or controlled by Wizspeed, or to persons not employed by Wizspeed. Third-party policies and websites linked to us are also excluded.
          </p>
        </section>

        <section>
          <h2 className="section-heading">Filing a Complaint</h2>
          <p className="section-text">
            Refunds should only be considered when issues are totally out of hand. You should first contact us at <a href="mailto:claims@old.wizspeed.us">claims@old.wizspeed.us</a> for discussion before claiming a refund.
          </p>
        </section>

        <section>
          <h2 className="section-heading">Refund Eligibility</h2>
          <p className="section-text">
            While every project is important and executed with expertise, refunds are considered if the client is not satisfied with results. Specific refund policies per service are:
          </p>
          <ul className="section-text">
            <li><strong>Website / App Design / Web Management:</strong> Full refund if project has not started, processed within 180 days of upfront payment.</li>
            <li><strong>WordPress Specialist:</strong> Full refund if project has not started, processed within 180 days of upfront payment.</li>
            <li><strong>Digital Marketing Services:</strong>
              <ul>
                <li>Full Refund: Project not started.</li>
                <li>Proportionate Refund: Partial work completed before cancellation.</li>
                <li>No Refund: Once service provided; any issues must be discussed immediately.</li>
              </ul>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="section-heading">Liability Limits</h2>
          <p className="section-text">
            Wizspeed’s liability is limited to the value of the project at the time of cancellation. Refund restrictions include:
          </p>
          <ul className="section-text">
            <li>No refund on premium template sites or graphic/web design services after three revisions.</li>
            <li>No refund for marketing or SEO campaigns.</li>
            <li>No refund for bulk hour purchases or requests beyond seven calendar days after first payment.</li>
          </ul>
        </section>

        <section>
          <h2 className="section-heading">Refunding Process</h2>
          <p className="section-text">
            Partial refunds are processed within 180 business days, and full refunds within 50 business days after project cancellation and mutual discussion. Refunds are transferred according to the pre-decided payment method.
          </p>
        </section>

        <section>
          <h2 className="section-heading">Changes</h2>
          <p className="section-text">
            Wizspeed may amend this policy at any time without prior notice. Continued use of the website after modifications constitutes acceptance of the updated policy.
          </p>
        </section>

        <section>
          <h2 className="section-heading">Contact Us</h2>
          <p className="section-text">
            For questions regarding this policy, contact us at <a href="mailto:contact@old.wizspeed.us">contact@old.wizspeed.us</a>.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
