import React from "react";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-gray-900" />
            <span className="text-xs font-semibold text-gray-600 tracking-wide uppercase">Legal</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 leading-tight">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500">
            Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </p>
          <div className="mt-4 h-1 w-16 bg-gray-900 rounded-full" />
        </div>

        {/* Intro card */}
        <div className="bg-white border border-gray-200 rounded-2xl px-6 py-5 mb-6 shadow-sm">
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            <span className="font-semibold text-gray-900">Ds' Painting Services</span> respects your
            privacy. This Privacy Policy explains how we collect, use, and protect the information you
            provide when you contact us, request an estimate, submit a lead form, or use our website.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-5">

          <Section number="01" title="Information We Collect">
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              We may collect the following personal information:
            </p>
            <ul className="space-y-2">
              {[
                "Full name",
                "Phone number",
                "Email address",
                "City / location",
                "Project details and scope",
                "Any other information you choose to provide related to your painting project",
              ].map((item) => (
                <BulletItem key={item}>{item}</BulletItem>
              ))}
            </ul>
          </Section>

          <Section number="02" title="How We Use Your Information">
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              Your information is used solely to serve you better:
            </p>
            <ul className="space-y-2">
              {[
                "Contact you about your painting project",
                "Provide accurate estimates",
                "Answer questions and follow up on service requests",
                "Schedule appointments",
                "Improve our customer communication",
              ].map((item) => (
                <BulletItem key={item}>{item}</BulletItem>
              ))}
            </ul>
          </Section>

          <Section number="03" title="How We Store Your Information">
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              Your information may be stored in:
            </p>
            <ul className="space-y-2">
              {[
                "Our customer or lead tracking system",
                "Email system",
                "Spreadsheets or other business tools used to manage inquiries and customer communication",
              ].map((item) => (
                <BulletItem key={item}>{item}</BulletItem>
              ))}
            </ul>
          </Section>

          <Section number="04" title="Sharing Your Information">
            <div className="flex items-start gap-3 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 mb-4">
              <svg className="w-4 h-4 text-gray-700 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <p className="text-sm text-gray-800 font-medium">
                We do <span className="underline">not</span> sell your personal information.
              </p>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              We may share information only when necessary to:
            </p>
            <ul className="space-y-2">
              {[
                "Provide our services to you",
                "Manage customer communication",
                "Comply with legal requirements",
                "Use trusted business tools that help us operate our business",
              ].map((item) => (
                <BulletItem key={item}>{item}</BulletItem>
              ))}
            </ul>
          </Section>

          <Section number="05" title="Contact Us">
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              If you have questions about this Privacy Policy, or want to request that your information
              be updated or removed, please reach out:
            </p>
            <div className="space-y-3">
              <ContactRow icon="building" label="Company" value="Ds' Painting Services" />
              <ContactRow icon="mail" label="Email" value="dspaintingservices1@gmail.com" href="mailto:dspaintingservices1@gmail.com" />
              <ContactRow icon="phone" label="Phone" value="+1-647-571-9868" href="tel:+16475719868" />
            </div>
          </Section>

        </div>

        <p className="text-center text-xs text-gray-400 mt-10">
          © {new Date().getFullYear()} Ds' Painting Services. All rights reserved.
        </p>
      </div>
    </main>
  );
}

function Section({ number, title, children }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl px-6 py-6 shadow-sm">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-xs font-bold text-gray-900 bg-gray-100 border border-gray-200 rounded-lg px-2.5 py-1 tracking-wider">
          {number}
        </span>
        <h2 className="text-base sm:text-lg font-semibold text-gray-900">{title}</h2>
      </div>
      {children}
    </div>
  );
}

function BulletItem({ children }) {
  return (
    <li className="flex items-start gap-2.5 text-sm text-gray-600">
      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-900 flex-shrink-0" />
      <span>{children}</span>
    </li>
  );
}

function ContactRow({ icon, label, value, href }) {
  const icons = {
    mail: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    phone: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    building: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  };

  return (
    <div className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3 border border-gray-100">
      <div className="w-8 h-8 bg-white border border-gray-200 rounded-lg flex items-center justify-center text-gray-700 flex-shrink-0">
        {icons[icon]}
      </div>
      <div>
        <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-0.5">{label}</p>
        {href ? (
          <a href={href} className="text-sm font-medium text-gray-900 hover:underline">
            {value}
          </a>
        ) : (
          <p className="text-sm font-medium text-gray-800">{value}</p>
        )}
      </div>
    </div>
  );
}