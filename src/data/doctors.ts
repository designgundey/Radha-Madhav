import type { L } from "../i18n";

export interface Availability {
  /** Short day key: Mon, Tue, ... Sun (translated via ui "day.*") */
  day: "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun";
  /** e.g. "10:00 AM – 1:00 PM" */
  time: string;
}

export interface Doctor {
  slug: string;
  name: L;
  specialty: L;
  location: L;
  /** One-line summary shown on the homepage card. */
  summary: L;
  /** Longer intro shown on the /doctors/ profile. */
  bio: L;
  /** Special skills / areas of focus. */
  skills: L[];
  /** Weekly availability. Set `timingsConfirmed: false` while these are placeholders. */
  availability: Availability[];
  timingsConfirmed: boolean;
  languages?: string[];
  /** Portrait in public/images. Set `photoIsPlaceholder: false` once it's the real doctor. */
  photo: string;
  photoIsPlaceholder: boolean;
  /** A reserved slot on the homepage grid until a real doctor is added. Not shown on /doctors/. */
  isPlaceholder?: boolean;
}

const GM: L = {
  en: "General Medicine & Primary Care",
  ne: "जनरल मेडिसिन र प्राथमिक हेरचाह",
  bn: "জেনারেল মেডিসিন ও প্রাথমিক চিকিৎসা",
};
const CABIN: L = {
  en: "OPD Cabin 101 (Ground Floor)",
  ne: "OPD केबिन १०१ (भुइँतला)",
  bn: "OPD কেবিন ১০১ (নিচতলা)",
};

// Names, specialties and cabin are real. Skills are typical for each specialty and
// the availability rows are PLACEHOLDERS, confirm with each doctor, then flip
// `timingsConfirmed` to true so the "to be confirmed" badge disappears.
export const doctors: Doctor[] = [
  {
    slug: "abul-bashar-laskar",
    photo: "/images/doctor-1.jpg",
    photoIsPlaceholder: true,
    name: { en: "Dr. Abul Bashar Laskar", ne: "डा. अबुल बशर लस्कर", bn: "ডা. আবুল বাশার লস্কর" },
    specialty: GM,
    location: CABIN,
    summary: {
      en: "Everyday illness, chronic-care follow-ups and preventive check-ups.",
      ne: "दैनिक बिरामी, दीर्घरोगको फलोअप र रोकथाम जाँच।",
      bn: "দৈনন্দিন অসুখ, দীর্ঘমেয়াদি রোগের ফলো-আপ ও প্রতিরোধমূলক পরীক্ষা।",
    },
    bio: {
      en: "Dr. Laskar sees patients of all ages for fevers, infections, diabetes and blood-pressure follow-ups, and general health concerns. First point of contact for most walk-in patients.",
      ne: "डा. लस्करले ज्वरो, संक्रमण, मधुमेह र रक्तचापको फलोअप र सामान्य स्वास्थ्य समस्याका लागि सबै उमेरका बिरामी हेर्नुहुन्छ। धेरैजसो वाक-इन बिरामीका लागि पहिलो सम्पर्क।",
      bn: "ডা. লস্কর জ্বর, সংক্রমণ, ডায়াবেটিস ও রক্তচাপের ফলো-আপ এবং সাধারণ স্বাস্থ্য সমস্যায় সব বয়সের রোগী দেখেন। বেশিরভাগ ওয়াক-ইন রোগীর প্রথম যোগাযোগ।",
    },
    skills: [
      {
        en: "Fever & infection management",
        ne: "ज्वरो र संक्रमण व्यवस्थापन",
        bn: "জ্বর ও সংক্রমণ ব্যবস্থাপনা",
      },
      {
        en: "Diabetes & hypertension follow-up",
        ne: "मधुमेह र उच्च रक्तचाप फलोअप",
        bn: "ডায়াবেটিস ও উচ্চ রক্তচাপ ফলো-আপ",
      },
      {
        en: "Preventive health check-ups",
        ne: "रोकथाम स्वास्थ्य जाँच",
        bn: "প্রতিরোধমূলক স্বাস্থ্য পরীক্ষা",
      },
      { en: "Referrals to specialists", ne: "विशेषज्ञकहाँ रेफर", bn: "বিশেষজ্ঞের কাছে রেফার" },
    ],
    availability: [
      { day: "Mon", time: "10:00 AM – 1:00 PM" },
      { day: "Wed", time: "10:00 AM – 1:00 PM" },
      { day: "Fri", time: "10:00 AM – 1:00 PM" },
    ],
    timingsConfirmed: false,
    languages: ["Bengali", "Hindi", "English"],
  },
  {
    slug: "debasish-basak",
    photo: "/images/doctor-2.jpg",
    photoIsPlaceholder: true,
    name: { en: "Dr. Debasish Basak", ne: "डा. देबाशिष बसाक", bn: "ডা. দেবাশিস বসাক" },
    specialty: GM,
    location: CABIN,
    summary: {
      en: "General consultations, seasonal illness and long-term medication reviews.",
      ne: "सामान्य परामर्श, मौसमी बिरामी र दीर्घकालीन औषधि समीक्षा।",
      bn: "সাধারণ পরামর্শ, মৌসুমি অসুখ ও দীর্ঘমেয়াদি ওষুধ পর্যালোচনা।",
    },
    bio: {
      en: "Dr. Basak handles general consultations and medication reviews, with particular attention to patients managing several prescriptions at once.",
      ne: "डा. बसाकले सामान्य परामर्श र औषधि समीक्षा गर्नुहुन्छ, खासगरी एकैपटक धेरै प्रेस्क्रिप्सन लिइरहेका बिरामीमा ध्यान दिँदै।",
      bn: "ডা. বসাক সাধারণ পরামর্শ ও ওষুধ পর্যালোচনা করেন, বিশেষ করে যাঁরা একসঙ্গে একাধিক প্রেসক্রিপশন সামলাচ্ছেন তাঁদের দিকে নজর দিয়ে।",
    },
    skills: [
      {
        en: "Seasonal illness & allergies",
        ne: "मौसमी बिरामी र एलर्जी",
        bn: "মৌসুমি অসুখ ও অ্যালার্জি",
      },
      {
        en: "Medication review & dosage guidance",
        ne: "औषधि समीक्षा र मात्रा निर्देशन",
        bn: "ওষুধ পর্যালোচনা ও ডোজ নির্দেশনা",
      },
      {
        en: "Gastric & digestive complaints",
        ne: "ग्यास्ट्रिक र पाचन समस्या",
        bn: "গ্যাস্ট্রিক ও হজমের সমস্যা",
      },
      { en: "Elderly care", ne: "वृद्ध हेरचाह", bn: "বয়স্কদের যত্ন" },
    ],
    availability: [
      { day: "Tue", time: "5:00 PM – 8:00 PM" },
      { day: "Thu", time: "5:00 PM – 8:00 PM" },
    ],
    timingsConfirmed: false,
    languages: ["Bengali", "Hindi", "English"],
  },
  {
    slug: "richard-narjinary",
    photo: "/images/doctor-3.jpg",
    photoIsPlaceholder: true,
    name: {
      en: "Dr. Richard Narjinary",
      ne: "डा. रिचर्ड नार्जिनारी",
      bn: "ডা. রিচার্ড নার্জিনারি",
    },
    specialty: { en: "ENT & Head/Neck", ne: "ENT (कान, नाक, घाँटी)", bn: "ENT (কান, নাক, গলা)" },
    location: CABIN,
    summary: {
      en: "Ear, nose and throat problems, sinus issues and hearing concerns.",
      ne: "कान, नाक र घाँटीका समस्या, साइनस र सुनाइ सम्बन्धी समस्या।",
      bn: "কান, নাক ও গলার সমস্যা, সাইনাস ও শ্রবণ সংক্রান্ত সমস্যা।",
    },
    bio: {
      en: "Dr. Narjinary consults on ear, nose and throat conditions. From recurring tonsillitis and sinusitis to hearing loss and neck swellings. And advises when a procedure or hospital referral is needed.",
      ne: "डा. नार्जिनारीले कान, नाक र घाँटीका रोग, बारम्बार हुने टन्सिल र साइनसदेखि सुनाइ कमी र घाँटी सुन्निनेसम्म, हेर्नुहुन्छ, र प्रक्रिया वा अस्पताल रेफर चाहिँदा सल्लाह दिनुहुन्छ।",
      bn: "ডা. নার্জিনারি কান, নাক ও গলার রোগে পরামর্শ দেন, বারবার হওয়া টনসিল ও সাইনাস থেকে শ্রবণশক্তি হ্রাস ও গলার ফোলা পর্যন্ত, এবং কখন প্রসিডিওর বা হাসপাতালে রেফার দরকার তা জানান।",
    },
    skills: [
      {
        en: "Ear infections & hearing loss",
        ne: "कानको संक्रमण र सुनाइ कमी",
        bn: "কানের সংক্রমণ ও শ্রবণশক্তি হ্রাস",
      },
      { en: "Sinusitis & nasal blockage", ne: "साइनस र नाक बन्द हुने", bn: "সাইনাস ও নাক বন্ধ" },
      { en: "Tonsillitis & throat conditions", ne: "टन्सिल र घाँटीका रोग", bn: "টনসিল ও গলার রোগ" },
      {
        en: "Neck lumps & thyroid screening",
        ne: "घाँटीको गाँठो र थाइरोइड जाँच",
        bn: "গলার ফোলা ও থাইরয়েড স্ক্রিনিং",
      },
    ],
    // From drrichardnarjinary.co.in ("Visiting Hours, Monday: 9:30 AM – 12:00 PM").
    availability: [{ day: "Mon", time: "9:30 AM – 12:00 PM" }],
    timingsConfirmed: false,
    languages: ["Bodo", "Bengali", "Hindi", "English"],
  },
  {
    slug: "saurav-sardar",
    photo: "/images/saurav-sardar.jpg",
    photoIsPlaceholder: false,
    name: { en: "Dr. Saurav Sardar", ne: "डा. सौरभ सरदार", bn: "ডা. সৌরভ সর্দার" },
    specialty: GM,
    location: CABIN,
    summary: {
      en: "Walk-in consultations, minor injuries and child & family health.",
      ne: "वाक-इन परामर्श, साना चोटपटक र बालबालिका तथा परिवार स्वास्थ्य।",
      bn: "ওয়াক-ইন পরামর্শ, ছোটখাটো আঘাত এবং শিশু ও পারিবারিক স্বাস্থ্য।",
    },
    bio: {
      en: "Dr. Sardar covers walk-in consultations including minor injuries, childhood illnesses and routine family health, and runs the monthly free BP & sugar camp.",
      ne: "डा. सरदारले साना चोटपटक, बालरोग र नियमित परिवार स्वास्थ्यसहित वाक-इन परामर्श हेर्नुहुन्छ, र मासिक निःशुल्क BP र सुगर शिविर चलाउनुहुन्छ।",
      bn: "ডা. সর্দার ছোটখাটো আঘাত, শিশুরোগ ও নিয়মিত পারিবারিক স্বাস্থ্যসহ ওয়াক-ইন পরামর্শ দেন, আর মাসিক বিনামূল্যের BP ও সুগার শিবির চালান।",
    },
    skills: [
      {
        en: "Child & family health",
        ne: "बालबालिका र परिवार स्वास्थ्य",
        bn: "শিশু ও পারিবারিক স্বাস্থ্য",
      },
      {
        en: "Minor injuries & wound care",
        ne: "साना चोटपटक र घाउ हेरचाह",
        bn: "ছোট আঘাত ও ক্ষতের যত্ন",
      },
      {
        en: "Blood pressure & sugar screening",
        ne: "रक्तचाप र सुगर जाँच",
        bn: "রক্তচাপ ও সুগার স্ক্রিনিং",
      },
      { en: "Vaccination guidance", ne: "खोप सम्बन्धी सल्लाह", bn: "টিকাকরণ পরামর্শ" },
    ],
    availability: [
      { day: "Mon", time: "5:00 PM – 8:00 PM" },
      { day: "Thu", time: "5:00 PM – 8:00 PM" },
      { day: "Sat", time: "5:00 PM – 8:00 PM" },
    ],
    timingsConfirmed: false,
    languages: ["Bengali", "Hindi", "English"],
  },
  {
    slug: "nayeem-ali",
    photo: "/images/nayeem-ali.jpg",
    photoIsPlaceholder: false,
    name: { en: "Dr. Nayeem Ali", ne: "डा. नईम अली", bn: "ডা. নঈম আলি" },
    specialty: {
      en: "Specialty to be confirmed",
      ne: "विशेषज्ञता पुष्टि हुन बाँकी",
      bn: "বিশেষত্ব নিশ্চিত হওয়া বাকি",
    },
    location: CABIN,
    summary: {
      en: "Consults at Radhamadhav Medical Hall. Details and timings coming soon.",
      ne: "राधामाधव मेडिकल हलमा परामर्श दिनुहुन्छ। विवरण र समय चाँडै आउँदैछ।",
      bn: "রাধামাধব মেডিক্যাল হলে পরামর্শ দেন। বিবরণ ও সময় শিগগিরই আসছে।",
    },
    bio: {
      en: "Dr. Nayeem Ali is one of the visiting doctors at the hall. His specialty, areas of focus and weekly timings will be listed here once confirmed. Call the counter to book.",
      ne: "डा. नईम अली हलमा आउने डाक्टरहरूमध्ये एक हुनुहुन्छ। उहाँको विशेषज्ञता, फोकस क्षेत्र र साप्ताहिक समय पुष्टि भएपछि यहाँ राखिनेछ। बुक गर्न काउन्टरमा फोन गर्नुहोस्।",
      bn: "ডা. নঈম আলি হলের আগত ডাক্তারদের একজন। তাঁর বিশেষত্ব, ফোকাসের ক্ষেত্র ও সাপ্তাহিক সময় নিশ্চিত হলে এখানে দেওয়া হবে। বুক করতে কাউন্টারে কল করুন।",
    },
    skills: [],
    availability: [],
    timingsConfirmed: false,
  },
];

/** Reserved homepage slots. Replace with real doctors (copy an entry above) and delete these. */
export const upcomingSlots: Doctor[] = [
  {
    slug: "slot-gynaecology",
    isPlaceholder: true,
    photo: "/images/counter-advice.jpg",
    photoIsPlaceholder: true,
    name: { en: "Gynaecologist", ne: "स्त्री रोग विशेषज्ञ", bn: "স্ত্রীরোগ বিশেষজ্ঞ" },
    specialty: { en: "Women's health", ne: "महिला स्वास्थ्य", bn: "নারী স্বাস্থ্য" },
    location: CABIN,
    summary: {
      en: "A visiting gynaecologist is being added. Call the counter for the latest schedule.",
      ne: "स्त्री रोग विशेषज्ञ थपिँदै छ। पछिल्लो तालिकाका लागि काउन्टरमा फोन गर्नुहोस्।",
      bn: "একজন স্ত্রীরোগ বিশেষজ্ঞ যুক্ত হচ্ছেন। সর্বশেষ সময়সূচির জন্য কাউন্টারে কল করুন।",
    },
    bio: { en: "", ne: "", bn: "" },
    skills: [],
    availability: [],
    timingsConfirmed: false,
  },
];

export const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] as const;

/** "Dr. Abul Bashar Laskar" -> "AB" (first two letters of the name after the title). */
export function initials(name: string): string {
  const words = name.replace(/^(Dr\.?|Vaidya)\s+/i, "").split(/\s+/);
  return words
    .slice(0, 2)
    .map((w) => w[0] ?? "")
    .join("")
    .toUpperCase();
}
