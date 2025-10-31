import React from 'react';
import Footer from '../components/Generic/Footer';
import Navbar from '../components/Generic/Navbar';

export default function ServiceLevelAgreement() {
  return (
    <>
    <div>
      <Navbar />
</div>
      <main className="data-handling-page">
        <h1 className="main-heading">Service Level Agreement (SLA)</h1>

        <section>
          <h2 className="section-heading">1. Service Availability</h2>
          <p className="section-text">
            Wizspeed commits to maintaining an operational uptime of 99.9% for all client websites and hosted services. This excludes planned outages for which clients are notified in advance or emergency maintenance scenarios.
          </p>
        </section>

        <section>
          <h2 className="section-heading">2. Support Response and Resolution</h2>
          <p className="section-text">
            <strong>Initial Response:</strong> All technical support requests are acknowledged within 4 hours during business hours.<br />
            <strong>Resolution:</strong> Issues are categorized by severity. Critical issues are addressed within 24 hours; non-critical issues are resolved according to a mutually agreed timeline.
          </p>
        </section>

        <section>
          <h2 className="section-heading">3. Maintenance</h2>
          <p className="section-text">
            <strong>Scheduled Maintenance:</strong> Clients will be notified 48 hours in advance of any maintenance.<br />
            <strong>Emergency Maintenance:</strong> In case of critical issues, clients will be notified as soon as possible with details and expected resolution time.
          </p>
        </section>

        <section>
          <h2 className="section-heading">4. Performance and Benchmarks</h2>
          <p className="section-text">
            <strong>Website Performance:</strong> Websites are optimized to load within 3 seconds on standard internet connections.<br />
            <strong>Data Backup:</strong> Monthly backups of all client data will be conducted, with a retention period of 30 days.
          </p>
        </section>

        <section>
          <h2 className="section-heading">5. Compensation and Remedies</h2>
          <p className="section-text">
            Clients receive a credit of 5% of their monthly fee for each hour of downtime beyond the committed uptime, capped at 50% of their monthly bill.
          </p>
        </section>

        <section>
          <h2 className="section-heading">6. SLA Review</h2>
          <p className="section-text">
            This SLA is reviewed annually to reflect the latest service standards and technological capabilities, ensuring alignment with industry best practices and client needs.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
