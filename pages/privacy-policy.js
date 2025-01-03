import dynamic from "next/dynamic";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
const PageHead = dynamic(() => import("../components/elements/PageHead"));
const Layout = dynamic(() => import("../components/layout/Layout"));
const Image = dynamic(() => import("next/image"));

const Privacy = () => {
  const tocRef = useRef(null);

  useEffect(() => {
    const toc = tocRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          toc.classList.remove("sticky");
        } else {
          toc.classList.add("sticky");
        }
      },
      {
        root: null,
        threshold: 0,
        rootMargin: `-100px 0px 0px 0px`, // Adjust this based on your header height
      }
    );

    if (toc) {
      observer.observe(toc);
    }

    return () => {
      if (toc) {
        observer.unobserve(toc);
      }
    };
  }, []);
  return (
    <>
      <PageHead
        title={"Privacy Policy"}
        canonical={"https://nextgrowthlabs.com/privacy-policy"}
      />

      <Layout>
        <div className="section pt-40 content-term">
          <div className="box-bg-term" />
          <div className="container">
            <div className="breadcrumbs">
              <ul>
                <li>
                  <Link href="/">
                    <svg
                      className="w-6 h-6 icon-16"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/privacy">Privacy Policy</Link>
                </li>
              </ul>
            </div>
            <div className="content-main mt-50">
              <div className="text-center">
                <h1 className="color-brand-1 mb-10">Privacy Policy</h1>
                <p className="font-lg color-grey-500">
                  Please review our privacy policy to understand how we handle
                  information.
                </p>
                <div className="box-image-head mt-50 mb-50">
                  <Image
                    className="bd-rd8"
                    width={1408}
                    height={413}
                    src="/assets/imgs/page/privacy/privacy.png"
                    alt="iori"
                    layout="responsive"
                  />
                </div>
              </div>
              <div className="border-bottom"></div>

              <div className="row mt-70">
                <div className="col-lg-2 col-md-3">
                  <div ref={tocRef}>
                    <h6 className="color-brand-1 mb-15">Table of contents</h6>
                    <ul className="list-terms">
                      <li>
                        <Link href="#section1">
                          How NextLabs Collects Information
                        </Link>
                      </li>
                      <li>
                        <Link href="#section2">
                          How NextLabs Uses Information
                        </Link>
                      </li>
                      <li>
                        <Link href="#section3">
                          How NextLabs Discloses Information
                        </Link>
                      </li>
                      <li>
                        <Link href="#section4">
                          Transfer To Other Countries
                        </Link>
                      </li>
                      <li>
                        <Link href="#section5">Data Retention</Link>
                      </li>
                      <li>
                        <Link href="#section6">Our Commitment To Security</Link>
                      </li>
                      <li>
                        <Link href="#section7">Children&apos;s Privacy</Link>
                      </li>
                      <li>
                        <Link href="#section8">Do Not Track</Link>
                      </li>
                      <li>
                        <Link href="#section9">Your Rights and Choices</Link>
                      </li>
                      <li>
                        <Link href="#section10">How To Contact Us</Link>
                      </li>
                      <li>
                        <Link href="#section11">
                          Updates To This Privacy Policy
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-8 col-md-7">
                  <p className="font-md color-grey-500 mb-30">
                    NextGrowthLabs (referred to as NextLabs, together with its
                    affiliates, including entities listed in Section 10 of this
                    policy, “NextLabs,” or “Us/We/Our”) cares about the privacy
                    of individuals who visit our website at https://Nextlabs.io
                    or access our API (the “Sites”), and otherwise do business
                    with us.
                  </p>
                  <p className="font-md color-grey-500 mb-30">
                    ‍ This Privacy Policy explains how NextLabs collects, uses,
                    processes, discloses, and safeguards the information we
                    obtain from and about our customers, visitors to our Sites,
                    and business prospects and partners (collectively, “You”),
                    including information we collect when you visit our
                    websites, use or other services offered by NextLabs, or
                    purchase our products and services (collectively, our
                    “Services”).
                  </p>
                  <p className="font-md color-grey-500 mb-30">
                    It also tells you about your rights and choices with respect
                    to your information, and how you can contact us if you have
                    any questions or concerns. Your use of the Services is
                    subject to this Privacy Policy and to our Terms of Service.
                  </p>
                  <h4 className="color-brand-1 mb-20" id="section1">
                    1. How NextLabs Collects Information
                  </h4>
                  <p className="font-md color-grey-500 mb-30">
                    For the purpose of this Privacy Policy, “Personal
                    Information” means any information relating to an identified
                    or identifiable individual. We obtain Personal Information
                    relating to you, our business partner, from various sources
                    described below. Where applicable, we indicate whether and
                    why you must provide us with Personal Information, as well
                    as the consequences of failing to do so. If you do not
                    provide Personal Information when requested, you may not be
                    able to benefit from our Services if that information is
                    necessary to provide you with the service or if we are
                    legally required to collect it.
                  </p>
                  <h5 className="color-brand-1 mb-20">
                    1.1. Personal Information Provided By You
                  </h5>
                  <h5 className="color-brand-1 mb-20">
                    1.1.1. Registration, Orders, and Other Information You
                    Provide
                  </h5>
                  <p className="font-md color-grey-500 mb-30">
                    We collect your information, including your sign-in
                    credentials, name, email address and phone number, when you
                    complete an order form, register to use our Services,
                    request that we contact you or provide additional
                    information to you, or attend an event. Some of our pages
                    (such as those accepting job applications) utilize framing
                    techniques to serve content from our partners while
                    preserving the look and feel of our Sites. Please be aware
                    that you are providing your Personal Information to these
                    third parties and not to NextLabs.
                  </p>
                  <h5 className="color-brand-1 mb-20">1.1.2. Communications</h5>
                  <p className="font-md color-grey-500 mb-30">
                    If you contact us directly, such as to request information
                    or access to the Services, or for Customer Support, we may
                    receive additional information about you, such as your
                    contact information and the contents of your communication.
                    We may receive information when you complete a form on our
                    Sites.
                  </p>
                  <h5 className="color-brand-1 mb-20">
                    1.1.3. Payment Information
                  </h5>
                  <p className="font-md color-grey-500 mb-30">
                    If you pay for access to our Services, we may collect
                    payment information that you provide, such as bank account
                    information and other information necessary to transfer
                    funds.
                  </p>
                  <h5 className="color-brand-1 mb-20">
                    1.1.4. Third Party Account Credentials
                  </h5>
                  <p className="font-md color-grey-500 mb-30">
                    In order to use certain NextLabs Services, you may provide
                    NextLabs with credentials that grant access to third party
                    websites and services, such as your developer or advertising
                    account credentials.
                  </p>
                  <h5 className="color-brand-1 mb-20">
                    1.2. Information We Collect When You Use The Services
                  </h5>
                  <h5 className="color-brand-1 mb-20">
                    1.2.1. Device Information
                  </h5>
                  <p className="font-md color-grey-500 mb-30">
                    We receive information about your device, including IP
                    address, web browser type, operating system version, mobile
                    device model, device manufacturer and model, language codes,
                    your Internet Service Provider (ISP), unique device
                    identifiers.
                  </p>
                  <h5 className="color-brand-1 mb-20">
                    1.2.2. Usage Information
                  </h5>
                  <p className="font-md color-grey-500 mb-30">
                    We automatically receive information about your interactions
                    with our Services, like the pages or other content you view,
                    the dates and times of your interactions, the searches you
                    conduct, how often you use our Services.
                  </p>
                  <h5 className="color-brand-1 mb-20">1.2.3. Location Data</h5>
                  <p className="font-md color-grey-500 mb-30">
                    We may infer your location from information we collect (for
                    example, your IP address indicates the general geographic
                    region from which you are connecting to the Internet). We
                    may use location information to provide you with features,
                    notifications, marketing, or other content that is
                    influenced by your location (such as showing you the
                    Services in your local language).
                  </p>
                  <h5 className="color-brand-1 mb-20">
                    1.2.4. Cookies and Similar Technologies
                  </h5>
                  <p className="font-md color-grey-500 mb-30">
                    A cookie is a text-only string of information that a website
                    transfers to the cookie file of the browser on your computer
                    or mobile device. When you use our Services, we and our
                    third party service providers may collect information from
                    you through cookies, web beacons, web server logs, and
                    similar technologies. We may use both session cookies and
                    persistent cookies. By using the Services, you consent to
                    the placement of cookies, beacons, and similar technologies
                    in your browser and on emails in accordance with this
                    Privacy Policy. If you disable cookies on your browser, some
                    parts of the Services may not work fully. We work with
                    analytics providers such as Google Analytics, which use
                    cookies and similar technologies to collect and analyze
                    information about use of the Services and report on
                    activities and trends. Google Analytics may also collect
                    information regarding the use of other websites, apps and
                    online resources.
                  </p>
                  <p className="font-md color-grey-500 mb-30">
                    You can learn about Google&apos;s practices by going
                    to&nbsp;
                    <Link
                      href="https://www.nextlabs.io/privacy-policy#"
                      style={{ textDecoration: "underline" }}
                    >
                      https://www.google.com/policies/privacy/partners/&nbsp;
                    </Link>
                    , and opt out of them by downloading the Google Analytics
                    opt-out browser add-on, available at&nbsp;
                    <Link
                      href="https://www.nextlabs.io/privacy-policy#"
                      style={{ textDecoration: "underline" }}
                    >
                      https://tools.google.com/dlpage/gaoptout
                    </Link>
                    &nbsp;. We partner with third parties to manage our
                    advertising on other sites. Our third party partners may use
                    technologies such as cookies to gather information about
                    your activities on this website and other sites in order to
                    provide you advertising based upon your browsing activities
                    and interests. Some of our advertising partners are members
                    of the Network Advertising Initiative or the Digital
                    Advertising Alliance . If you do not wish to receive our
                    personalized ads, please visit their opt-out pages to learn
                    about how you may opt out of receiving personalized ads from
                    member companies (or if located in the European Union, click
                    here ). Please note this does not opt you out of being
                    served ads. You will continue to receive generic ads. Please
                    visit your device&apos;s settings or install the AppChoices
                    app to learn more about how you may opt out of receiving
                    personalized ads in mobile apps. Our Services may include
                    links, features or components supplied by third parties,
                    such as the Facebook “Like” button or other interactive
                    tools. Such third-parties may have information practices
                    different than those set forth herein and their use of
                    cookies and similar technologies is not covered by this
                    Privacy Policy. We do not have access to or control over
                    such third parties and encourage you to consult the privacy
                    notices provided by those third parties.
                  </p>
                  <h5 className="color-brand-1 mb-20">
                    1.3. Information We Obtain From Third Parties
                  </h5>
                  <p id="section-2" className="font-md color-grey-500 mb-30">
                    We may receive information about you from our third party
                    partners, such as business or marketing partners. We may
                    combine this information with the other information we
                    collect about you to provide more useful information to you
                    regarding our services. This information may include, for
                    example, your name, address, and billing information.We also
                    receive information when you register through a NextLabs
                    partner (e.g., a partner who co-hosts an event, webinar, or
                    whitepaper).
                  </p>
                  {/* added this next tool auth verification */}
                  <h5 className="color-brand-1 mb-20">
                    1.4. Google User Data Usage and Sharing
                  </h5>
                  <h5 className="color-brand-1 mb-20">
                    1.4.1. Purpose of Google User Data Collection
                  </h5>
                  <p className="font-md color-grey-500 mb-30">
                    We collect Google user data solely to enhance the functionality of our application. This includes using data to provide users with interactive analytics, data tables, filters, and other features that allow for in-depth analysis and insights. All user data is processed and displayed solely within the application to improve performance and user experience. We do not use Google user data for any purposes beyond delivering a robust and insightful user experience.
                  </p>
                  <h5 className="color-brand-1 mb-20">
                    1.4.2. Transfer of Google User Data to Third Parties
                  </h5>
                  <p className="font-md color-grey-500 mb-30">
                    We use Google user data exclusively in an analytics capacity within our tool and do not transfer or share this data with any third parties. No data is used for advertising, marketing, or any purposes outside of the application’s performance and analytics features. All data handling remains strictly within the scope of improving the user’s experience and delivering analytical insights within the application.
                  </p>
                  <h4 className="color-brand-1 mb-20" id="section2">
                    2. How NextLabs Uses Information
                  </h4>
                  <p className="font-md color-grey-500 mb-30">
                    NextLabs will use information, including Personal
                    Information, for the following purposes:
                  </p>
                  <h5 className="color-brand-1 mb-20">
                    2.1. Providing The Service
                  </h5>
                  <p className="font-md color-grey-500 mb-30">
                    We use your information to provide, enhance, improve, and
                    personalize our Services.
                  </p>
                  <h5 className="color-brand-1 mb-20">
                    2.2. Facilitating Transactions
                  </h5>
                  <p className="font-md color-grey-500 mb-30">
                    We use your payment information to facilitate your
                    transactions and payments.
                  </p>
                  <h5 className="color-brand-1 mb-20">2.3. Analytics</h5>
                  <p className="font-md color-grey-500 mb-30">
                    We will use your information to understand and analyze how
                    you use our Services.
                  </p>
                  <h5 className="color-brand-1 mb-20">
                    2.4. Marketing and Advertising
                  </h5>
                  <p className="font-md color-grey-500 mb-30">
                    We will use your information for marketing purposes, such as
                    contacting you about NextLabs&apos;s products and services,
                    providing you with promotional materials that may be useful,
                    relevant, valuable or otherwise of interest to you. We use
                    Personal Information that we collect in connection with the
                    Services, such as your location and your activities on the
                    Services, to determine whether NextLabs may wish to contact
                    you in order to offer you NextLabs&apos;s services and to
                    facilitate the delivery of advertisements. We may send you
                    (a) information about topics or content that we think may
                    interest you, or (b) updates about the latest developments
                    or features on the Services. We also may send push
                    notifications to your device and a newsletter or similar
                    materials to the email address you provide to us in the
                    event that you subscribe to receive such a newsletter.
                  </p>
                  <h5 className="color-brand-1 mb-20">2.5. Communications</h5>
                  <p id="section-3" className="font-md color-grey-500 mb-30">
                    NextLabs will use your information to communicate with you,
                    including to respond to your inquiries and to send emails to
                    an email address you provide to us for customer-service or
                    technical-support purposes.If you are located in the
                    European Economic Area, we only process your Personal
                    Information based on a valid legal ground, including
                    when:You have consented to the use of your Personal
                    Information, for example, to receive marketing
                    communications. You may withdraw any consent you previously
                    provided to us regarding the processing of your Personal
                    Information, at any time and free of charge. We will apply
                    your preferences going forward and this will not affect the
                    lawfulness of the processing before your consent
                    withdrawal;We need your Personal Information to provide you
                    with the Services, including for account registration, or to
                    respond to your inquiries;We have a legal obligation to use
                    your Personal Information; and We or a third party, have a
                    legitimate interest in using your Personal Information. In
                    particular, we have a legitimate interest in using your
                    Personal Information to conduct business analytics, and
                    otherwise improve the safety, security, and performance of
                    our Services.
                  </p>
                  <h4 className="color-brand-1 mb-20" id="section3">
                    3. How NextLabs Discloses Information
                  </h4>
                  <h5 className="color-brand-1 mb-20">
                    3.1. Corporate Affiliates
                  </h5>
                  <p className="font-md color-grey-500 mb-30">
                    NextLabs may share your information with and receive
                    information from NextLabs&apos;s offices throughout the
                    world, subject to this Privacy Policy.
                  </p>
                  <h5 className="color-brand-1 mb-20">
                    3.2. Service Providers
                  </h5>
                  <p className="font-md color-grey-500 mb-30">
                    We may share your information with our vendors, service
                    providers, and other third parties that perform services on
                    our behalf.
                  </p>
                  <h5 className="color-brand-1 mb-20">
                    3.3. Advertising Partners
                  </h5>
                  <p className="font-md color-grey-500 mb-30">
                    NextLabs may work with and share your Personal Information
                    with our third party advertising partners to provide you with advertisements regarding
                    NextLabs&apos;s Services. For more information about our
                    advertising and marketing practices and those of the third
                    party advertising partners, please see the Cookies and
                    Related Technologies section above.
                  </p>
                  <h5 className="color-brand-1 mb-20">
                    3.4. As Required By Law and Similar Disclosures
                  </h5>
                  <p className="font-md color-grey-500 mb-30">
                    We may disclose information about you:
                  </p>
                  <p className="font-md color-grey-500 mb-30">
                    (i) if we are required to do so by law, regulation, or legal
                    process, such as a court order or subpoena;
                  </p>
                  <p className="font-md color-grey-500 mb-30">
                    (ii) in response to requests by government agencies, such as
                    law enforcement authorities;
                  </p>
                  <p className="font-md color-grey-500 mb-30">
                    (iii) when we believe disclosure is necessary or appropriate
                    to protect against or respond to physical, financial or
                    other harm, injury, or loss to property; or
                  </p>
                  <p className="font-md color-grey-500 mb-30">
                    (iv) in connection with an investigation of suspected or
                    actual unlawful activity.
                  </p>
                  <h5 className="color-brand-1 mb-20">
                    3.5. Merger, Sale or Other Asset Transfers
                  </h5>
                  <p className="font-md color-grey-500 mb-30">
                    NextLabs may disclose your Personal Information to a
                    potential or actual acquirer, successor, or assignee as part
                    of any reorganization, merger, sale, joint venture,
                    assignment, transfer or other disposition of all or any
                    portion of our business, assets or stock (including in
                    bankruptcy or similar proceedings).
                  </p>
                  <h5 className="color-brand-1 mb-20">3.6. Consent</h5>
                  <p id="section-4" className="font-md color-grey-500 mb-30">
                    NextLabs may further disclose your Personal Information with
                    your consent.
                  </p>
                  <h4 className="color-brand-1 mb-20" id="section4">
                    4. Transfer To Other Countries
                  </h4>
                  <p id="section-5" className="font-md color-grey-500 mb-30">
                    If you are using the Services from regions with laws
                    governing data collection and use, then please note that we
                    may transfer your Personal information to multiple countries
                    throughout the world, including the United States. These
                    countries may not have the same data protection laws as the
                    country in which you initially provided the information. By
                    providing your Personal Information to the Service, you
                    consent to any transfer and processing in accordance with
                    this Policy.If you are located in the EEA or Switzerland, we
                    comply with applicable data protection law when transferring
                    your Personal Information outside of this area. In
                    particular, we may transfer your Personal Information to
                    countries for which adequacy decisions have been issued, use
                    contractual protections for the transfer of Personal
                    Information to our U.S. headquarters or third parties, such
                    as the European Commission&apos;s Standard Contractual
                    Clauses, or rely on third parties&apos; certification to the
                    EU-U.S. or Swiss-U.S. Privacy Shield frameworks, where
                    applicable. You may contact us as specified below to obtain
                    a copy of the safeguards we use to transfer Personal
                    Information outside of the EEA.
                  </p>
                  <h4 className="color-brand-1 mb-20" id="section5">
                    5. Data Retention
                  </h4>
                  <p id="section-6" className="font-md color-grey-500 mb-30">
                    We take measures to delete your Personal Information or keep
                    it in a form that does not permit identifying you when this
                    information is no longer necessary for the purposes for
                    which we process it, unless we are required by law to keep
                    this information for a longer period or to, or such
                    information is necessary to resolve disputes and enforce our
                    agreements. When determining the retention period, we take
                    into account various criteria, such as the type of products
                    and services requested by or provided to you, the nature and
                    length of our relationship with you, possible re-enrolment
                    with our products or services, the impact on the services we
                    provide if we delete some information from or about you,
                    mandatory retention periods provided by law and the statute
                    of limitations.
                  </p>
                  <h4 className="color-brand-1 mb-20" id="section6">
                    6. Our Commitment To Security
                  </h4>
                  <p id="section-7" className="font-md color-grey-500 mb-30">
                    NextLabs employs a variety of security technologies and
                    procedures designed to help prevent unauthorized disclosure
                    of, access to and use of Information that NextLabs collects
                    or receives.
                  </p>
                  <h4 className="color-brand-1 mb-20" id="section7">
                    7. Children&apos;s Privacy
                  </h4>
                  <p id="section-8" className="font-md color-grey-500 mb-30">
                    We do not knowingly collect, maintain, or use Personal
                    Information from children under 16 years of age, and no part
                    of the Service is directed to children under the age of 16.
                    If you learn that your child has provided us with personal
                    information without your consent, then you may alert us at
                    contact@nextaso.com. If we learn that we have collected any
                    Personal Information from children under 16, then we will
                    promptly take steps to delete such information.
                  </p>
                  <h4 className="color-brand-1 mb-20" id="section8">
                    8. Do Not Track
                  </h4>
                  <p id="section-9" className="font-md color-grey-500 mb-30">
                    Some web browsers incorporate a “Do Not Track” feature.
                    Because there is not yet an accepted standard for how to
                    respond to Do Not Track signals, our website does not
                    currently respond to such signals.
                  </p>
                  <h4 className="color-brand-1 mb-20" id="section9">
                    9. Your Rights and Choices
                  </h4>
                  <h5 className="color-brand-1 mb-20">9.1. Global Rights</h5>
                  <p className="font-md color-grey-500 mb-30">
                    Upon request, NextLabs will provide you with information
                    about whether we hold any of your Personal Information. You
                    can update or correct Personal Information (e.g., your email
                    address) by accessing your account. You can also access or
                    rectify your information by reaching out to us at
                    contact@nextaso.com . You can delete your information by
                    sending an email to contact@nextaso.com . with your first
                    name, last name, and the respective email addresses you
                    would like for us to delete. To opt-out of receiving our
                    newsletters or marketing emails, you can follow the
                    unsubscribe instructions included in the emails
                    communications you receive, access the email preferences in
                    your account settings page, or contact us at the above email
                    address. Please note that we have the right to reject
                    deletion requests that are unduly burdensome or repetitive
                    or that cannot be honored in light of legal obligations or
                    ongoing disputes, or where retention is necessary to enforce
                    our agreements or protect our or another party&apos;s
                    rights, property, safety, or security.
                  </p>
                  <h5 className="color-brand-1 mb-20">9.2. European Rights</h5>
                  <p id="section-10" className="font-md color-grey-500 mb-30">
                    If you are located in the European Economic Area or
                    Switzerland, you may have the right to exercise your right
                    to data portability to easily transfer your Personal
                    Information to another company. In addition, you may also
                    have the right to lodge a complaint with a supervisory
                    authority, including in your country of residence, place of
                    work or where an incident took place.
                  </p>
                  <h4 className="color-brand-1 mb-20" id="section10">
                    10. How To Contact Us
                  </h4>
                  <p id="section-11" className="font-md color-grey-500 mb-30">
                    If you have any questions or concerns about this Privacy
                    Policy or its implementation, you may contact NextLabs via
                    email ( contact@nextaso.com or contact@nextlabs.io ).
                  </p>
                  <h4 className="color-brand-1 mb-20" id="section11">
                    11. Updates To This Privacy Policy
                  </h4>
                  <p className="font-md color-grey-500 mb-30">
                    We will post any adjustments to this Privacy Policy on this
                    page, and the revised version will be effective when it is
                    posted. If we materially change the ways in which we use or
                    share Personal Information previously collected from you
                    through our Service, we will notify you through our Service,
                    by email, or other communication.
                  </p>
                  <p className="font-md color-grey-500 mb-30">
                    If you are using the Services from regions with laws
                    governing data collection and use, then please note that we
                    may transfer your Personal information to multiple countries
                    throughout the world, including the United States. These
                    countries may not have the same data protection laws as the
                    country in which you initially provided the information. By
                    providing your Personal Information to the Service, you
                    consent to any transfer and processing in accordance with
                    this Policy.If you are located in the EEA or Switzerland, we
                    comply with applicable data protection law when transferring
                    your Personal Information outside of this area. In
                    particular, we may transfer your Personal Information to
                    countries for which adequacy decisions have been issued, use
                    contractual protections for the transfer of Personal
                    Information to our U.S. headquarters or third parties, such
                    as the European Commission&apos;s Standard Contractual
                    Clauses, or rely on third parties&apos; certification to the
                    EU-U.S. or Swiss-U.S. Privacy Shield frameworks, where
                    applicable. You may contact us as specified below to obtain
                    a copy of the safeguards we use to transfer Personal
                    Information outside of the EEA.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Privacy;
