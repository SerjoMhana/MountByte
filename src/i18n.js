import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      works: 'Our Works',
      articles: 'Articles',
      contact: 'Contact Us'
    },
    home: {
      welcome: 'Welcome to our company!',
      description: 'We are a company that does things.'
    },
    hero: {
      title1: 'We create digital solutions',
      title2: 'innovative for your business future',
      feature1: 'Modern designs and advanced technologies',
      feature2: 'Custom solutions that meet your ambitions',
      feature3: 'Support and maintenance to ensure optimal performance',
      button: 'Contact Us'
    },
    "about": {
      "hero": {
        "title": "Innovating for a Brighter Future",
        "subtitle": "We are a team of passionate creators dedicated to building exceptional digital experiences."
      },
      "story": {
        "title": "Our Story",
        "paragraph1": "Founded in 20XX, our journey began with a simple yet powerful vision: to empower businesses with cutting-edge technology and design. From humble beginnings, we've grown into a dynamic agency, driven by a commitment to excellence and a passion for innovation.",
        "paragraph2": "Over the years, we've collaborated with diverse clients, transforming ideas into impactful digital solutions. Our success is built on a foundation of strong relationships, continuous learning, and a relentless pursuit of perfection."
      },
      "mission": {
        "title": "Our Mission & Values",
        "innovation": {
          "title": "Innovation",
          "description": "We constantly explore new technologies and creative approaches to deliver groundbreaking solutions."
        },
        "community": {
          "title": "Collaboration",
          "description": "We believe in working closely with our clients, fostering a partnership that drives mutual success."
        },
        "integrity": {
          "title": "Integrity",
          "description": "We uphold the highest standards of honesty and transparency in all our interactions."
        }
      }
    },
    whyus: {
      title: 'Why Us',
      card1: {
        title: 'Unique Design'
      },
      card2: {
        title: 'High Performance'
      },
      card3: {
        title: 'Continuous Support'
      }
    },
    services: {
      title: 'Our Services',
      card1: {
        title: 'Website Development',
        desc: 'We build modern, fast, and responsive websites and web applications that meet your business needs.'
      },
      card2: {
        title: 'Technical Solutions',
        desc: 'We provide innovative solutions to complex technical problems and improve the performance of your existing systems.'
      },
      card3: {
        title: 'Technical Support',
        desc: 'Continuous technical support to ensure the continuity of your site and solve any emerging problems.'
      },
      card4: {
        title: 'Optimization and SEO',
        desc: 'We optimize your site for search engines to increase visibility and reach a wider audience.'
      }
    },
    blog: {
      title: 'Technical Articles',
      card1: {
        title: 'Latest Web Development Trends for 2024',
        description: 'An in-depth look at the new technologies and frameworks shaping the future of web development.',
        author: 'Ahmed Ali',
        date: 'June 15, 2024'
      },
      card2: {
        title: 'A Beginner\'s Guide to Artificial Intelligence',
        description: 'A simplified explanation of AI concepts and their practical applications in our daily lives.',
        author: 'Fatima Mohammed',
        date: 'May 28, 2024'
      }
    },
    "works": {
      "hero": {
        "title": "Our Creative Portfolio",
        "subtitle": "Explore a selection of our best work, showcasing our expertise in web development and design."
      },
      "filters": {
        "all": "All",
        "websites": "Websites",
        "designs": "Designs"
      },
      "no_projects": "No projects found for this category."
    },
    "articles": {
      "hero": {
        "title": "Our Articles",
        "subtitle": "Explore a selection of our best articles, showcasing our expertise in programming, design, and technical support."
      },
      "filters": {
        "all": "All",
        "programming": "Programming",
        "design": "Design",
        "technical-support": "Technical Support"
      },
      "no_articles": "No articles found for this category."
    },
    "contact": {
      "hero": {
        "title": "Get in Touch",
        "subtitle": "We'd love to hear from you! Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions."
      },
      "info": {
        "title": "Contact Information",
        "address": {
          "title": "Address",
          "value": "Bab Ben Ghashir, 82510, Tripoli, Libya"
        },
        "email": {
          "title": "Email Service",
          "value": "cs@ls.ly"
        },
        "phone": {
          "title": "Phone",
          "value": "+218 21 3632323"
        }
      },
      "form": {
        "title": "Send us a Message",
        "name": "Your Name",
        "email": "Your Email",
        "message": "Your Message",
        "submit": "Send Message",
        "success": "Thank you for your message! We will get back to you soon."
      }
    },
    footer: {
      solutions: {
        title: 'Solutions',
        marketing: 'Marketing',
        analytics: 'Analytics',
        automation: 'Automation',
        commerce: 'Commerce',
        insights: 'Insights'
      },
      support: {
        title: 'Support',
        submit_ticket: 'Submit Ticket',
        documentation: 'Documentation',
        guides: 'Guides'
      },
      company: {
        title: 'Company',
        about_us: 'About Us',
        blog: 'Blog',
        jobs: 'Jobs',
        press: 'Press'
      },
      newsletter: {
        title: 'Subscribe to our newsletter',
        description: 'The latest news, articles, and resources, sent to your inbox weekly.',
        placeholder: 'Enter your email',
        subscribe_button: 'Subscribe'
      },
      copyright: '© 2024 Your Company. All rights reserved.'
    }
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'عن الشركة',
      works: 'أعمالنا',
      articles: 'مقالات',
      contact: 'اتصل بنا'
    },
    home: {
      welcome: 'مرحبا بكم في شركتنا!',
      description: 'نحن شركة تقوم بأشياء.'
    },
    hero: {
      title1: 'نصنع لك حلولاً رقمية',
      title2: 'مبتكرة لمستقبل أعمالك',
      feature1: 'تصاميم عصرية وتقنيات متطورة',
      feature2: 'حلول مخصصة تلبي طموحاتك',
      feature3: 'دعم وصيانة لضمان الأداء الأمثل',
      button: 'تواصل معنا'
    },
    "about": {
      "hero": {
        "title": "الابتكار لمستقبل أكثر إشراقًا",
        "subtitle": "نحن فريق من المبدعين المتحمسين المكرسين لبناء تجارب رقمية استثنائية."
      },
      "story": {
        "title": "قصتنا",
        "paragraph1": "تأسست في عام 20XX، بدأت رحلتنا برؤية بسيطة ولكنها قوية: تمكين الشركات بأحدث التقنيات والتصاميم. من بدايات متواضعة، نمونا إلى وكالة ديناميكية، مدفوعة بالالتزام بالتميز والشغف بالابتكار.",
        "paragraph2": "على مر السنين، تعاونا مع عملاء متنوعين، محولين الأفكار إلى حلول رقمية مؤثرة. يعتمد نجاحنا على أساس من العلاقات القوية، والتعلم المستمر، والسعي الدؤوب نحو الكمال."
      },
      "mission": {
        "title": "مهمتنا وقيمنا",
        "innovation": {
          "title": "الابتكار",
          "description": "نستكشف باستمرار التقنيات الجديدة والأساليب الإبداعية لتقديم حلول رائدة."
        },
        "community": {
          "title": "التعاون",
          "description": "نؤمن بالعمل عن كثب مع عملائنا، وتعزيز الشراكة التي تدفع النجاح المتبادل."
        },
        "integrity": {
          "title": "النزاهة",
          "description": "نلتزم بأعلى معايير الصدق والشفافية في جميع تعاملاتنا."
        }
      }
    },
    whyus: {
      title: 'لماذا نحن',
      card1: {
        title: 'تصميم فريد'
      },
      card2: {
        title: 'أداء عالي'
      },
      card3: {
        title: 'دعم متواصل'
      }
    },
    services: {
      title: 'خدماتنا',
      card1: {
        title: 'تطوير المواقع',
        desc: 'نقوم ببناء مواقع وتطبيقات ويب حديثة وسريعة الاستجابة تلبي احتياجات عملك.'
      },
      card2: {
        title: 'حلول تقنية',
        desc: 'نقدم حلولاً مبتكرة للمشاكل التقنية المعقدة ونحسن أداء أنظمتك الحالية.'
      },
      card3: {
        title: 'دعم فني',
        desc: 'دعم فني متواصل لضمان استمرارية عمل موقعك وحل أي مشاكل طارئة.'
      },
      card4: {
        title: 'تحسين وأرشفة',
        desc: 'نحسن موقعك لمحركات البحث لزيادة الظهور والوصول إلى جمهور أوسع.'
      }
    },
    blog: {
      title: 'مقالات تقنية',
      card1: {
        title: 'أحدث اتجاهات تطوير الويب لعام 2024',
        description: 'نظرة متعمقة على التقنيات والأطر الجديدة التي تشكل مستقبل تطوير الويب.',
        author: 'أحمد علي',
        date: '15 يونيو 2024'
      },
      card2: {
        title: 'دليل المبتدئين إلى الذكاء الاصطناعي',
        description: 'شرح مبسط لمفاهيم الذكاء الاصطناعي وتطبيقاته العملية في حياتنا اليومية.',
        author: 'فاطمة محمد',
        date: '28 مايو 2024'
      }
    },
    footer: {
      solutions: {
        title: 'الحلول',
        marketing: 'التسويق',
        analytics: 'التحليلات',
        automation: 'الأتمتة',
        commerce: 'التجارة',
        insights: 'الإحصاءات'
      },
      support: {
        title: 'الدعم',
        submit_ticket: 'إرسال تذكرة',
        documentation: 'التوثيق',
        guides: 'الأدلة'
      },
      company: {
        title: 'الشركة',
        about_us: 'من نحن',
        blog: 'المدونة',
        jobs: 'الوظائف',
        press: 'الصحافة'
      },
      newsletter: {
        title: 'اشترك في نشرتنا الإخبارية',
        description: 'آخر الأخبار والمقالات والموارد، يتم إرسالها إلى بريدك الوارد أسبوعيًا.',
        placeholder: 'أدخل بريدك الإلكتروني',
        subscribe_button: 'اشتراك'
      },
      copyright: '© 2024 شركتك. جميع الحقوق محفوظة.'
    },
    "works": {
      "hero": {
        "title": "أعمالنا الإبداعية",
        "subtitle": "استكشف مجموعة مختارة من أفضل أعمالنا، والتي تعرض خبرتنا في تطوير الويب والتصميم."
      },
      "filters": {
        "all": "الكل",
        "websites": "المواقع الإلكترونية",
        "designs": "التصاميم"
      },
      "no_projects": "لم يتم العثور على مشاريع لهذه الفئة."
    },
    "articles": {
      "hero": {
        "title": "مقالاتنا",
        "subtitle": "استكشف مجموعة مختارة من أفضل مقالاتنا، والتي تعرض خبرتنا في البرمجة والتصميم والدعم الفني."
      },
      "filters": {
        "all": "الكل",
        "programming": "برمجة",
        "design": "تصميم",
        "technical-support": "دعم فني"
      },
      "no_articles": "لم يتم العثور على مقالات لهذه الفئة."
    },
    "contact": {
      "hero": {
        "title": "تواصل معنا",
        "subtitle": "نحن نحب أن نسمع منك! سواء كان لديك سؤال حول خدماتنا أو أسعارنا أو أي شيء آخر، فإن فريقنا مستعد للإجابة على جميع أسئلتك."
      },
      "info": {
        "title": "معلومات الاتصال",
        "address": {
          "title": "العنوان",
          "value": "باب بن غشير، 82510، طرابلس، ليبيا"
        },
        "email": {
          "title": "خدمة البريد الإلكتروني",
          "value": "cs@ls.ly"
        },
        "phone": {
          "title": "الهاتف",
          "value": "+218 21 3632323"
        }
      },
      "form": {
        "title": "أرسل لنا رسالة",
        "name": "اسمك",
        "email": "بريدك الإلكتروني",
        "message": "رسالتك",
        "submit": "إرسال الرسالة",
        "success": "شكرا لك على رسالتك! سوف نعود اليك قريبا."
      }
    }
  }
};

const i18n = createI18n({
  legacy: false, 
  locale: 'ar', 
  fallbackLocale: 'en', 
  messages,
});

export default i18n;
