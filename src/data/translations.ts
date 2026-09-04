export type LangCode = 'en' | 'ar' | 'fr' | 'es' | 'bn' | 'zh' | 'de';

export interface Language {
  code: LangCode;
  name: string;
  nativeName: string;
  flag: string;
  dir: 'ltr' | 'rtl';
}

export const LANGUAGES: Language[] = [
  { code: 'en', name: 'English',    nativeName: 'English',    flag: '🇬🇧', dir: 'ltr' },
  { code: 'ar', name: 'Arabic',     nativeName: 'العربية',    flag: '🇸🇦', dir: 'rtl' },
  { code: 'fr', name: 'French',     nativeName: 'Français',   flag: '🇫🇷', dir: 'ltr' },
  { code: 'es', name: 'Spanish',    nativeName: 'Español',    flag: '🇪🇸', dir: 'ltr' },
  { code: 'bn', name: 'Bengali',    nativeName: 'বাংলা',      flag: '🇧🇩', dir: 'ltr' },
  { code: 'zh', name: 'Chinese',    nativeName: '中文',        flag: '🇨🇳', dir: 'ltr' },
  { code: 'de', name: 'German',     nativeName: 'Deutsch',    flag: '🇩🇪', dir: 'ltr' },
];

export interface Translations {
  nav: {
    hero: string;
    about: string;
    projects: string;
    experience: string;
    contact: string;
    startProject: string;
  };
  hero: {
    badge: string;
    role1: string;
    role2: string;
    role3: string;
    cta1: string;
    cta2: string;
    stat1Label: string;
    stat2Label: string;
    stat3Label: string;
    stat4Label: string;
  };
  about: {
    eyebrow: string;
    heading: string;
    subheading: string;
    philosophy: string;
    service1: string;
    service2: string;
    service3: string;
  };
  projects: {
    eyebrow: string;
    heading: string;
    visitSite: string;
    viewAll: string;
  };
  experience: {
    eyebrow: string;
    heading: string;
  };
  contact: {
    eyebrow: string;
    heading: string;
    subheading: string;
    namePlaceholder: string;
    nameLabel: string;
    emailLabel: string;
    emailPlaceholder: string;
    serviceLabel: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitBtn: string;
    submitting: string;
    successTitle: string;
    successMsg: string;
  };
  footer: {
    backToTop: string;
    rights: string;
  };
}

export const TRANSLATIONS: Record<LangCode, Translations> = {
  en: {
    nav: {
      hero: 'Overview',
      about: 'About',
      projects: 'Projects',
      experience: 'Experience',
      contact: 'Contact',
      startProject: 'Start a Project',
    },
    hero: {
      badge: 'Available for Strategic Projects',
      role1: 'Creative',
      role2: 'Director',
      role3: '',
      cta1: 'Start A Project',
      cta2: 'Explore 60+ Sites',
      stat1Label: 'Live Platforms Built',
      stat2Label: 'Years CMS Mastery',
      stat3Label: 'Client Retention',
      stat4Label: 'Avg Conversion Uplift',
    },
    about: {
      eyebrow: 'Profile & Philosophy',
      heading: 'Fusing Technical Architecture With Business Growth',
      subheading: 'A decade of engineering digital ecosystems that perform, scale, and convert.',
      philosophy: 'Great design should feel invisible — seamlessly guiding users to take action while the brand narrative unfolds naturally in the background.',
      service1: 'Bespoke WordPress & WooCommerce Engineering',
      service2: 'Brand Direction & High-Converting Web Architecture',
      service3: 'Full-Stack Security, Headless & Performance Tuning',
    },
    projects: {
      eyebrow: 'Featured Client Deployments & Case Studies',
      heading: 'Platforms Built to Perform',
      visitSite: 'Visit Site',
      viewAll: 'View All Projects',
    },
    experience: {
      eyebrow: 'Career Track Record & Leadership',
      heading: 'Professional Experience & Agency Impact',
    },
    contact: {
      eyebrow: 'Initiate Engagement // Direct Inquiries',
      heading: 'Ready to Engineer Your Next Digital Breakthrough?',
      subheading: 'Whether you need a full WordPress ecosystem rebuild, speed hardening, or an enterprise e-commerce portal, let\'s connect.',
      namePlaceholder: 'e.g. Sarah Jenkins',
      nameLabel: 'Full Name / Company',
      emailLabel: 'Work Email Address',
      emailPlaceholder: 'sarah@company.com',
      serviceLabel: 'Required Service Focus',
      messageLabel: 'Project Goals & Timeline',
      messagePlaceholder: 'Briefly describe your business goals, target deliverables, or current website bottleneck...',
      submitBtn: 'Send Project Inquiry',
      submitting: 'Dispatching Inquiry...',
      successTitle: 'Transmission Dispatched Successfully!',
      successMsg: 'Your inquiry has been routed to Asaduzzaman Rocky\'s inbox. Expect a response within 2 hours.',
    },
    footer: {
      backToTop: 'Back to Top',
      rights: 'All Rights Reserved.',
    },
  },

  ar: {
    nav: {
      hero: 'نظرة عامة',
      about: 'نبذة عني',
      projects: 'المشاريع',
      experience: 'الخبرة',
      contact: 'تواصل',
      startProject: 'ابدأ مشروعاً',
    },
    hero: {
      badge: 'متاح للمشاريع الاستراتيجية',
      role1: 'مدير',
      role2: 'إبداعي',
      role3: '',
      cta1: 'ابدأ مشروعاً',
      cta2: 'استعرض +60 موقعاً',
      stat1Label: 'منصة مُنشأة',
      stat2Label: 'سنوات خبرة',
      stat3Label: 'رضا العملاء',
      stat4Label: 'متوسط رفع التحويل',
    },
    about: {
      eyebrow: 'الملف الشخصي والفلسفة',
      heading: 'دمج الهندسة التقنية مع نمو الأعمال',
      subheading: 'عقد من الزمن في بناء منظومات رقمية تُحقق النتائج.',
      philosophy: 'التصميم الرائع يجب أن يكون غير مرئي — يوجّه المستخدمين بسلاسة نحو اتخاذ القرار.',
      service1: 'هندسة WordPress و WooCommerce المخصصة',
      service2: 'توجيه العلامة التجارية وهندسة الويب عالية التحويل',
      service3: 'الأمان والأداء والحلول بدون رأس',
    },
    projects: {
      eyebrow: 'نشرات العملاء المميزة ودراسات الحالة',
      heading: 'منصات مصممة للأداء',
      visitSite: 'زيارة الموقع',
      viewAll: 'عرض جميع المشاريع',
    },
    experience: {
      eyebrow: 'سجل المسيرة المهنية والقيادة',
      heading: 'الخبرة المهنية وتأثير الوكالة',
    },
    contact: {
      eyebrow: 'ابدأ التواصل // استفسارات مباشرة',
      heading: 'هل أنت مستعد لبناء انطلاقتك الرقمية التالية؟',
      subheading: 'سواء كنت تحتاج إلى إعادة بناء منظومة WordPress أو تسريع موقعك، دعنا نتحدث.',
      namePlaceholder: 'مثال: أحمد محمد',
      nameLabel: 'الاسم الكامل / الشركة',
      emailLabel: 'البريد الإلكتروني للعمل',
      emailPlaceholder: 'ahmed@company.com',
      serviceLabel: 'الخدمة المطلوبة',
      messageLabel: 'أهداف المشروع والجدول الزمني',
      messagePlaceholder: 'صِف بإيجاز أهداف عملك والتسليمات المطلوبة...',
      submitBtn: 'إرسال استفسار المشروع',
      submitting: 'جارٍ الإرسال...',
      successTitle: 'تم إرسال رسالتك بنجاح!',
      successMsg: 'تم توجيه استفسارك إلى صندوق بريد Asaduzzaman Rocky. توقع رداً خلال ساعتين.',
    },
    footer: {
      backToTop: 'العودة للأعلى',
      rights: 'جميع الحقوق محفوظة.',
    },
  },

  fr: {
    nav: {
      hero: 'Accueil',
      about: 'À propos',
      projects: 'Projets',
      experience: 'Expérience',
      contact: 'Contact',
      startProject: 'Démarrer un projet',
    },
    hero: {
      badge: 'Disponible pour projets stratégiques',
      role1: 'Directeur',
      role2: 'Créatif',
      role3: '',
      cta1: 'Démarrer un projet',
      cta2: 'Explorer 60+ sites',
      stat1Label: 'Plateformes créées',
      stat2Label: 'Ans d\'expérience',
      stat3Label: 'Fidélisation clients',
      stat4Label: 'Hausse de conversion',
    },
    about: {
      eyebrow: 'Profil & Philosophie',
      heading: 'Fusionner l\'architecture technique avec la croissance commerciale',
      subheading: 'Une décennie d\'ingénierie d\'écosystèmes numériques performants.',
      philosophy: 'Un excellent design doit être invisible — guidant les utilisateurs vers l\'action de manière fluide.',
      service1: 'Ingénierie WordPress & WooCommerce sur mesure',
      service2: 'Direction de marque & architecture web haute conversion',
      service3: 'Sécurité, Headless & optimisation des performances',
    },
    projects: {
      eyebrow: 'Déploiements clients & études de cas',
      heading: 'Plateformes conçues pour performer',
      visitSite: 'Visiter le site',
      viewAll: 'Voir tous les projets',
    },
    experience: {
      eyebrow: 'Parcours professionnel & leadership',
      heading: 'Expérience professionnelle & impact agence',
    },
    contact: {
      eyebrow: 'Initier un engagement // Demandes directes',
      heading: 'Prêt à créer votre prochaine percée digitale ?',
      subheading: 'Que vous ayez besoin d\'une refonte WordPress ou d\'un portail e-commerce, contactez-nous.',
      namePlaceholder: 'ex. Marie Dupont',
      nameLabel: 'Nom complet / Entreprise',
      emailLabel: 'Email professionnel',
      emailPlaceholder: 'marie@societe.com',
      serviceLabel: 'Service requis',
      messageLabel: 'Objectifs & délais du projet',
      messagePlaceholder: 'Décrivez brièvement vos objectifs, livrables ou problèmes actuels...',
      submitBtn: 'Envoyer la demande',
      submitting: 'Envoi en cours...',
      successTitle: 'Message envoyé avec succès !',
      successMsg: 'Votre demande a été transmise à Asaduzzaman Rocky. Attendez une réponse sous 2 heures.',
    },
    footer: {
      backToTop: 'Retour en haut',
      rights: 'Tous droits réservés.',
    },
  },

  es: {
    nav: {
      hero: 'Inicio',
      about: 'Acerca de',
      projects: 'Proyectos',
      experience: 'Experiencia',
      contact: 'Contacto',
      startProject: 'Iniciar proyecto',
    },
    hero: {
      badge: 'Disponible para proyectos estratégicos',
      role1: 'Director',
      role2: 'Creativo',
      role3: '',
      cta1: 'Iniciar proyecto',
      cta2: 'Explorar 60+ sitios',
      stat1Label: 'Plataformas creadas',
      stat2Label: 'Años de experiencia',
      stat3Label: 'Retención de clientes',
      stat4Label: 'Aumento de conversión',
    },
    about: {
      eyebrow: 'Perfil y Filosofía',
      heading: 'Fusionando la arquitectura técnica con el crecimiento empresarial',
      subheading: 'Una década de ingeniería de ecosistemas digitales que rinden resultados.',
      philosophy: 'El gran diseño debe sentirse invisible — guiando a los usuarios hacia la acción de forma fluida.',
      service1: 'Ingeniería WordPress & WooCommerce a medida',
      service2: 'Dirección de marca y arquitectura web de alta conversión',
      service3: 'Seguridad, Headless y optimización de rendimiento',
    },
    projects: {
      eyebrow: 'Despliegues de clientes destacados y casos de estudio',
      heading: 'Plataformas diseñadas para rendir',
      visitSite: 'Visitar sitio',
      viewAll: 'Ver todos los proyectos',
    },
    experience: {
      eyebrow: 'Trayectoria y liderazgo',
      heading: 'Experiencia profesional e impacto de agencia',
    },
    contact: {
      eyebrow: 'Iniciar contacto // Consultas directas',
      heading: '¿Listo para impulsar tu próximo avance digital?',
      subheading: 'Si necesitas una reconstrucción de WordPress o un portal e-commerce, hablemos.',
      namePlaceholder: 'ej. Carlos García',
      nameLabel: 'Nombre completo / Empresa',
      emailLabel: 'Email de trabajo',
      emailPlaceholder: 'carlos@empresa.com',
      serviceLabel: 'Servicio requerido',
      messageLabel: 'Objetivos y plazos del proyecto',
      messagePlaceholder: 'Describe brevemente tus objetivos de negocio, entregables o problemas actuales...',
      submitBtn: 'Enviar consulta del proyecto',
      submitting: 'Enviando...',
      successTitle: '¡Mensaje enviado con éxito!',
      successMsg: 'Tu consulta ha sido enviada a Asaduzzaman Rocky. Espera una respuesta en 2 horas.',
    },
    footer: {
      backToTop: 'Volver arriba',
      rights: 'Todos los derechos reservados.',
    },
  },

  bn: {
    nav: {
      hero: 'হোম',
      about: 'পরিচিতি',
      projects: 'প্রজেক্ট',
      experience: 'অভিজ্ঞতা',
      contact: 'যোগাযোগ',
      startProject: 'প্রজেক্ট শুরু করুন',
    },
    hero: {
      badge: 'কৌশলগত প্রজেক্টের জন্য উপলব্ধ',
      role1: 'ক্রিয়েটিভ',
      role2: 'ডিরেক্টর',
      role3: '',
      cta1: 'প্রজেক্ট শুরু করুন',
      cta2: '৬০+ সাইট দেখুন',
      stat1Label: 'লাইভ প্ল্যাটফর্ম',
      stat2Label: 'বছরের অভিজ্ঞতা',
      stat3Label: 'ক্লায়েন্ট সন্তুষ্টি',
      stat4Label: 'গড় কনভার্সন বৃদ্ধি',
    },
    about: {
      eyebrow: 'প্রোফাইল ও দর্শন',
      heading: 'প্রযুক্তিগত আর্কিটেকচার ও ব্যবসায়িক প্রবৃদ্ধির সমন্বয়',
      subheading: 'এক দশকের ডিজিটাল ইকোসিস্টেম ইঞ্জিনিয়ারিং।',
      philosophy: 'চমৎকার ডিজাইন অদৃশ্য অনুভব করা উচিত — ব্যবহারকারীদের স্বাভাবিকভাবে কাজের দিকে পরিচালিত করে।',
      service1: 'কাস্টম WordPress ও WooCommerce ইঞ্জিনিয়ারিং',
      service2: 'ব্র্যান্ড ডিরেকশন ও হাই-কনভার্টিং ওয়েব আর্কিটেকচার',
      service3: 'ফুল-স্ট্যাক নিরাপত্তা, হেডলেস ও পারফরম্যান্স টিউনিং',
    },
    projects: {
      eyebrow: 'বিশেষ ক্লায়েন্ট ডেপ্লয়মেন্ট ও কেস স্টাডি',
      heading: 'পারফরম্যান্সের জন্য তৈরি প্ল্যাটফর্ম',
      visitSite: 'সাইট দেখুন',
      viewAll: 'সকল প্রজেক্ট দেখুন',
    },
    experience: {
      eyebrow: 'ক্যারিয়ার ট্র্যাক রেকর্ড ও নেতৃত্ব',
      heading: 'পেশাদার অভিজ্ঞতা ও এজেন্সি প্রভাব',
    },
    contact: {
      eyebrow: 'যোগাযোগ শুরু করুন // সরাসরি অনুসন্ধান',
      heading: 'আপনার পরবর্তী ডিজিটাল সাফল্য গড়তে প্রস্তুত?',
      subheading: 'WordPress পুনর্নির্মাণ বা ই-কমার্স পোর্টাল — যা-ই দরকার হোক, আমরা কথা বলি।',
      namePlaceholder: 'যেমন: রাহেলা বেগম',
      nameLabel: 'পূর্ণ নাম / কোম্পানি',
      emailLabel: 'কাজের ইমেইল',
      emailPlaceholder: 'rahela@company.com',
      serviceLabel: 'প্রয়োজনীয় সেবা',
      messageLabel: 'প্রজেক্টের লক্ষ্য ও সময়সীমা',
      messagePlaceholder: 'আপনার ব্যবসার লক্ষ্য, ডেলিভারেবল বা বর্তমান সমস্যা সংক্ষেপে বর্ণনা করুন...',
      submitBtn: 'প্রজেক্ট ইনকোয়ারি পাঠান',
      submitting: 'পাঠানো হচ্ছে...',
      successTitle: 'সফলভাবে পাঠানো হয়েছে!',
      successMsg: 'আপনার অনুসন্ধান Asaduzzaman Rocky-র ইনবক্সে পৌঁছেছে। ২ ঘণ্টার মধ্যে উত্তর আশা করুন।',
    },
    footer: {
      backToTop: 'উপরে যান',
      rights: 'সর্বস্বত্ব সংরক্ষিত।',
    },
  },

  zh: {
    nav: {
      hero: '首页',
      about: '关于我',
      projects: '项目',
      experience: '经验',
      contact: '联系',
      startProject: '开始项目',
    },
    hero: {
      badge: '开放战略项目合作',
      role1: '创意',
      role2: '总监',
      role3: '',
      cta1: '开始项目',
      cta2: '浏览60+网站',
      stat1Label: '已建平台',
      stat2Label: '年经验',
      stat3Label: '客户留存率',
      stat4Label: '平均转化提升',
    },
    about: {
      eyebrow: '个人简介与理念',
      heading: '融合技术架构与商业增长',
      subheading: '十年数字生态系统工程经验，交付卓越成果。',
      philosophy: '卓越的设计应该是无形的——自然地引导用户采取行动。',
      service1: '定制 WordPress 与 WooCommerce 工程',
      service2: '品牌方向与高转化率网站架构',
      service3: '全栈安全、Headless 架构与性能优化',
    },
    projects: {
      eyebrow: '精选客户项目与案例研究',
      heading: '为高性能而打造的平台',
      visitSite: '访问网站',
      viewAll: '查看所有项目',
    },
    experience: {
      eyebrow: '职业履历与领导力',
      heading: '专业经验与机构影响',
    },
    contact: {
      eyebrow: '开始合作 // 直接咨询',
      heading: '准备好打造您的下一个数字突破了吗？',
      subheading: '无论是 WordPress 全面重建还是企业电商门户，让我们联系。',
      namePlaceholder: '例如：李明',
      nameLabel: '全名 / 公司',
      emailLabel: '工作邮箱',
      emailPlaceholder: 'liming@company.com',
      serviceLabel: '所需服务',
      messageLabel: '项目目标与时间线',
      messagePlaceholder: '简述您的业务目标、交付物或当前网站瓶颈...',
      submitBtn: '发送项目咨询',
      submitting: '发送中...',
      successTitle: '消息发送成功！',
      successMsg: '您的咨询已发送至 Asaduzzaman Rocky 的收件箱，请在 2 小时内期待回复。',
    },
    footer: {
      backToTop: '返回顶部',
      rights: '保留所有权利。',
    },
  },

  de: {
    nav: {
      hero: 'Startseite',
      about: 'Über mich',
      projects: 'Projekte',
      experience: 'Erfahrung',
      contact: 'Kontakt',
      startProject: 'Projekt starten',
    },
    hero: {
      badge: 'Verfügbar für strategische Projekte',
      role1: 'Kreativer',
      role2: 'Direktor',
      role3: '',
      cta1: 'Projekt starten',
      cta2: '60+ Seiten entdecken',
      stat1Label: 'Live-Plattformen',
      stat2Label: 'Jahre Erfahrung',
      stat3Label: 'Kundenbindung',
      stat4Label: 'Konversionssteigerung',
    },
    about: {
      eyebrow: 'Profil & Philosophie',
      heading: 'Technische Architektur mit Geschäftswachstum verbinden',
      subheading: 'Ein Jahrzehnt Engineering digitaler Ökosysteme, die performen.',
      philosophy: 'Großartiges Design sollte unsichtbar sein — Nutzer fließend zur Aktion leiten.',
      service1: 'Maßgeschneiderte WordPress & WooCommerce Entwicklung',
      service2: 'Markenführung & hochkonvertierende Web-Architektur',
      service3: 'Sicherheit, Headless-Architektur & Performance-Optimierung',
    },
    projects: {
      eyebrow: 'Ausgewählte Kundenprojekte & Fallstudien',
      heading: 'Plattformen für höchste Leistung',
      visitSite: 'Website besuchen',
      viewAll: 'Alle Projekte anzeigen',
    },
    experience: {
      eyebrow: 'Karriereverlauf & Führung',
      heading: 'Berufserfahrung & Agenturwirkung',
    },
    contact: {
      eyebrow: 'Kontakt aufnehmen // Direkte Anfragen',
      heading: 'Bereit für Ihren nächsten digitalen Durchbruch?',
      subheading: 'Ob WordPress-Neuaufbau oder Enterprise E-Commerce-Portal — lassen Sie uns sprechen.',
      namePlaceholder: 'z.B. Hans Müller',
      nameLabel: 'Vollständiger Name / Unternehmen',
      emailLabel: 'Geschäftliche E-Mail',
      emailPlaceholder: 'hans@unternehmen.de',
      serviceLabel: 'Benötigter Service',
      messageLabel: 'Projektziele & Zeitplan',
      messagePlaceholder: 'Beschreiben Sie kurz Ihre Geschäftsziele, gewünschten Lieferumfang oder aktuelle Probleme...',
      submitBtn: 'Projektanfrage senden',
      submitting: 'Wird gesendet...',
      successTitle: 'Nachricht erfolgreich gesendet!',
      successMsg: 'Ihre Anfrage wurde an Asaduzzaman Rocky weitergeleitet. Erwarten Sie eine Antwort innerhalb von 2 Stunden.',
    },
    footer: {
      backToTop: 'Nach oben',
      rights: 'Alle Rechte vorbehalten.',
    },
  },
};
