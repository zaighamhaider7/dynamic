import React from 'react';
import Footer from '../components/Generic/Footer';
import Navbar from '../components/Generic/Navbar';

export default function ChangeManagement() {
  return (
    <>
    <div>
      <Navbar />
</div>
      <main className="data-handling-page">
        <h1 className="main-heading">Change Management</h1>

        <section>
          <h2 className="section-heading">1. Change Request Initiation</h2>
          <p className="section-text">
            Clients must formally request changes to the scope of services in writing. The request should specify the desired changes and the reasons for the changes.
          </p>
        </section>

        <section>
          <h2 className="section-heading">2. Impact Assessment</h2>
          <p className="section-text">
            Wizspeed evaluates the potential impacts on project timelines, costs, and resource allocation. An impact assessment report is prepared, including a revised proposal if necessary.
          </p>
        </section>

        <section>
          <h2 className="section-heading">3. Approval Process</h2>
          <p className="section-text">
            Change orders must be approved in writing by authorized representatives from both Wizspeed and the client. No implementation occurs until approval is obtained.
          </p>
        </section>

        <section>
          <h2 className="section-heading">4. Change Implementation</h2>
          <p className="section-text">
            Approved changes are incorporated into the project plan. All relevant team members are informed of the changes to ensure alignment and proper execution.
          </p>
        </section>

        <section>
          <h2 className="section-heading">5. Documentation and Tracking</h2>
          <p className="section-text">
            All changes, including details of the request, impact assessments, approvals, and revised timelines or costs, are documented. This serves as a record for future reference and ensures transparency.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
