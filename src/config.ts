export const siteConfig = {
  name: "Dhaval Parmar",
  title: "PHP Laravel Developer | Shopify App Developer",
  description:
    "Portfolio of Dhaval Parmar, a PHP developer with 4+ years of experience building Laravel and CodeIgniter applications and Shopify public and private apps.",
  accentColor: "#22C55E",
  social: {
    email: "dhavalsunnyparmar@gmail.com",
    linkedin: "https://www.linkedin.com/in/dhaval-parmar-35bb6b237/",
    github: "https://github.com/dhaval1627",
  },
  aboutMe:
    "PHP developer with 4+ years building scalable web applications and Shopify apps shipped to the App Store. Experienced in CRM systems, third-party integrations (QuickBooks, DocuSign, Klaviyo, Google Maps), and end-to-end feature delivery from design to deployment. I focus on clean architecture, reliable API integration, and products that solve real merchant and business pain points.",
  skills: {
    Backend: ["PHP", "Laravel", "CodeIgniter"],
    Frontend: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "jQuery"],
    Database: ["MySQL", "MariaDB"],
    "APIs & Integrations": [
      "Shopify API",
      "REST APIs",
      "Webhooks",
      "QuickBooks API",
      "DocuSign API",
    ],
    Tools: ["Git", "Postman", "Linux"],
  },
  projects: [
    {
      name: "Mobile App Builder",
      category: "Shopify Public App",
      description: "A Shopify public app that lets merchants build, customize, and publish native Android and iOS apps for their stores — no code required. I own the backend that turns store data (products, collections, pages, themes) into a live mobile experience, plus the merchant-facing configuration dashboard and publish/versioning pipeline. Integrates Klaviyo for mobile push and email marketing sync, Growave for loyalty, reviews, and rewards, and RecurPay for subscription checkout inside the app.",
      skills: [
        "PHP",
        "Laravel",
        "Shopify API",
        "REST APIs",
        "Webhooks",
        "Klaviyo API",
        "Growave API",
        "RecurPay API",
      ],
      highlights: [
        "End-to-end store-to-app data sync driven by Shopify webhooks",
        "Merchant dashboard for drag-and-drop screen and theme configuration",
        "Multi-integration architecture with per-store feature toggles",
      ],
    },
    {
      name: "Innovate Real Estate",
      category: "Vertical SaaS · Real Estate CRM",
      description: "A full-cycle real estate CRM that connects lead tracking through to closed deals and agent payouts. I built the transaction lifecycle module (listing → offer → agreement → registration), commission calculation engine with configurable split rules, agent and team management, and MIS/reporting dashboards. Integrated QuickBooks for automated invoice and payment sync, DocuSign and DocuSeal for digital agreement execution, and AMCads for listing syndication and lead capture.",
      skills: [
        "PHP",
        "CodeIgniter",
        "MySQL",
        "QuickBooks API",
        "DocuSign API",
        "DocuSeal API",
        "AMCads API",
        "REST APIs",
        "Webhooks",
      ],
      highlights: [
        "Configurable commission engine handling multi-agent and builder splits",
        "Two e-signature providers behind one abstraction layer",
        "Accounting reconciliation between CRM payments and QuickBooks",
      ],
    },
    {
      name: "Wishlist App",
      category: "Shopify Private App · Customer Engagement",
      description: "Private Shopify app that lets shoppers save products and organize them into named wishlist categories (Gifts, Later, Compare). Handles guest wishlists via session/localStorage with seamless merge on login, stock and price-change alerts, and shareable wishlist links so customers can send lists to friends and family.",
      skills: [
        "PHP",
        "Laravel",
        "Shopify API",
        "JavaScript",
        "Liquid"
      ],
      highlights: [
        "Guest-to-authenticated wishlist merging without data loss",
        "Back-in-stock and price-drop notifications from webhook events",
      ],
    },
    {
      name: "Product Price Drop App",
      category: "Shopify Private App · Pricing Automation",
      description: "Automates scheduled discount campaigns across large catalogs. Merchants define start/end windows and percentage or fixed reductions; a queue-based scheduler applies changes to product variants in batches, restores original prices automatically at campaign end, and logs every change so pricing is fully auditable and reversible.",
      skills: [
        "PHP",
        "Laravel",
        "Shopify API",
        "Task Scheduling",
        "Queues"
      ],
      highlights: [
        "Bulk variant updates within Shopify rate limits using chunked jobs",
        "Automatic rollback with a full before/after price audit trail",
      ],
    },
    {
      name: "Order Export Tools",
      category: "Shopify Private App · Reporting & Automation",
      description: "Reporting automation that pulls orders, line items, fulfilment, and customer data and delivers it as formatted Google Sheets and CSV/text files over email. Supports scheduled runs (daily/weekly/monthly), custom column mapping, date-range and status filters, and multi-store aggregation for merchants running several storefronts.",
      skills: [
        "PHP",
        "Laravel",
        "Shopify API",
        "Google Sheets API",
        "Scheduler / Cron",
      ],
      highlights: [
        "Eliminated manual CSV exports for operations and finance teams",
        "Rate-limit-safe pagination across high-volume order archives",
      ],
    },
    {
      name: "Photo Confirmation App",
      category: "Shopify Private App · Order Trust & Verification",
      description: "Builds trust before dispatch by emailing customers a photo of their actual packed product or order alongside the confirmation. Listens to order and fulfilment events, attaches operator-uploaded images to the right order, and renders branded HTML emails with product, variant, and shipment details.",
      skills: [
        "PHP",
        "Laravel",
        "Shopify API",
        "Email Templates",
        "Webhooks"
      ],
      highlights: [
        "Reduced pre-delivery 'where is my order' and wrong-item support tickets",
        "Image upload workflow tied directly to fulfilment status transitions",
      ],
    },
    {
      name: "Multi-Store Locator App",
      category: "Shopify Private App · Storefront Widget",
      description: "Google Maps–powered store locator embedded in the storefront. Customers search by city or pincode and get nearby outlets sorted by distance, with drive-time directions, opening hours, contact details, and an admin panel where staff bulk-import locations via spreadsheet.",
      skills: [
        "PHP",
        "Laravel",
        "Google Maps API",
        "Geocoding",
        "REST APIs",
        "Liquid",
      ],
      highlights: [
        "Distance-based sorting with server-side geocoding and caching",
        "Bulk location import with duplicate and invalid-address detection",
      ],
    },
    {
      name: "Payfy",
      category: "Shopify Public App · Payments & Checkout",
      description: "Public Shopify app focused on payment and checkout flows for merchants. Worked on order and payment state handling, refund and failure edge cases, and the merchant onboarding/configuration screens shipped to the Shopify App Store.",
      skills: [
        "PHP",
        "Laravel",
        "Shopify API",
        "Payment Flows",
        "REST APIs"
      ],
    },
    {
      name: "Shipfy",
      category: "Shopify Public App · Shipping & Fulfilment",
      description: "Public shipping app used by Shopify merchants to manage rates, labels, and shipment tracking. Contributed to carrier rate handling, tracking-number sync back to Shopify orders, and fulfilment status updates triggered by webhook events.",
      skills: [
        "PHP",
        "Laravel",
        "Shopify API",
        "Webhooks",
        "REST APIs"
      ],
    },
    {
      name: "Form Builder",
      category: "Shopify Public App · Forms & Lead Capture",
      description: "Drag-and-drop form builder for Shopify storefronts — contact, quote, customisation and pre-order forms with configurable fields and validation. Built field-type rendering, submission storage and export, plus email notifications and anti-spam handling.",
      skills: [
        "PHP",
        "Laravel",
        "Shopify API",
        "JavaScript",
        "Liquid"
      ],
    },
    {
      name: "Instafeed",
      category: "Shopify Public App · Social Commerce",
      description: "Instagram feed and shoppable-gallery app for Shopify themes. Handled Instagram content ingestion, image caching and CDN delivery, gallery layout settings exposed in the theme customizer, and product-tag linking so posts map back to store products.",
      skills: [
        "PHP",
        "Laravel",
        "Shopify API",
        "Instagram API",
        "Caching"
      ],
    },
  ],
  experience: [
    {
      company: "CrawlApps Technologies",
      title: "PHP Laravel Developer",
      dateRange: "August 2025 – November 2025",
      bullets: [
        "Building a Shopify Public App (Mobile App Builder) that lets merchants create and publish native Android/iOS apps for their store.",
        "Architecting integrations with Klaviyo (push/email), Growave (loyalty & reviews), and RecurPay (subscriptions) with webhook-driven data sync.",
        "Developing the merchant configuration dashboard and publish pipeline that turns store data into a live mobile experience.",
      ],
    },
    {
      company: "Techomax Solutions",
      title: "PHP CodeIgniter Developer",
      dateRange: "November 2024 – July 2025",
      bullets: [
        "Built core modules for a real estate CRM: transaction lifecycle, agent management, configurable commission engine, and MIS reporting.",
        "Integrated QuickBooks for automated payment/invoice sync and DocuSign + DocuSeal for digital contract execution.",
        "Connected AMCads listing syndication for lead capture and property distribution across portals.",
      ],
    },
    {
      company: "Cirkle Studio Pvt. Ltd.",
      title: "PHP Laravel Developer",
      dateRange: "June 2022 – October 2024",
      bullets: [
        "Developed and maintained multiple Shopify private apps (Wishlist, Price Drop, Order Export, Photo Confirmation, Store Locator) used by merchants globally.",
        "Contributed to four public Shopify apps (Payfy, Shipfy, Form Builder, Instafeed) shipped to the Shopify App Store.",
        "Built automation tools for scheduled pricing, order export to Google Sheets, and customer notification workflows — reducing manual operations for merchants.",
      ],
    },
  ],
  education: [
    {
      school: "Veer Narmad South Gujarat University",
      degree: "Bachelor of Computer Applications (BCA)",
      dateRange: "2022",
      achievements: [
        "Result: 76.10% aggregate",
        "Relevant coursework: PHP, OOP, DBMS, Web Technologies",
      ],
    },
    {
      school: "G.S.H.S.E.B.",
      degree: "Higher Secondary Certificate (H.S.C.) – Commerce",
      dateRange: "2019",
      achievements: [
        "Result: 41.6%",
      ],
    },
    {
      school: "G.S.H.S.E.B.",
      degree: "Secondary School Certificate (S.S.C.)",
      dateRange: "2015",
      achievements: [
        "Result: 56.4%",
      ],
    },
  ],
};
