import type { L } from "../i18n";

export interface TimelineItem {
  year: string;
  title: L;
  text: L;
}

// The story of Dr. Swapan Kumar Kundu and Radha Madhav Medical Hall.
// Years marked "c." are approximate: confirm dates, names and events with the family
// before publishing, and replace the stand-in portrait in public/images/dr-kundu.jpg.
export const founder = {
  name: {
    en: "Dr. Swapan Kumar Kundu",
    ne: "डा. स्वपन कुमार कुण्डु",
    bn: "ডা. স্বপন কুমার কুণ্ডু",
  } as L,
  role: {
    en: "Founder. Physician to Mirik for five decades",
    ne: "संस्थापक। पाँच दशकदेखि मिरिकका चिकित्सक",
    bn: "প্রতিষ্ঠাতা। পাঁচ দশক ধরে মিরিকের চিকিৎসক",
  } as L,
  photo: "/images/dr-kundu.jpg",
  photoIsPlaceholder: true,
  intro: [
    {
      en: "For close to fifty years, one name has been spoken in Mirik whenever someone fell ill: Dr. Swapan Kumar Kundu. Long before the town had the clinics it has today, his door at Krishnanagar was open to tea-garden workers, students, traders and travellers alike.",
      ne: "लगभग पचास वर्षदेखि मिरिकमा कोही बिरामी पर्दा एउटै नाम लिइन्छ: डा. स्वपन कुमार कुण्डु। सहरमा आजका क्लिनिकहरू हुनुभन्दा धेरै अघिदेखि कृष्णनगरको उहाँको ढोका चिया बगानका कामदार, विद्यार्थी, व्यापारी र यात्रु सबैका लागि खुला थियो।",
      bn: "প্রায় পঞ্চাশ বছর ধরে মিরিকে কেউ অসুস্থ হলে একটি নামই উচ্চারিত হয়েছে: ডা. স্বপন কুমার কুণ্ডু। শহরে আজকের ক্লিনিকগুলো আসার অনেক আগে থেকেই কৃষ্ণনগরে তাঁর দরজা চা-বাগানের শ্রমিক, ছাত্র, ব্যবসায়ী আর পর্যটক সবার জন্য খোলা ছিল।",
    },
    {
      en: "Radha Madhav Medical Hall grew out of that practice. A doctor who saw patients every day knew exactly which medicines the hills needed and how hard they were to find. So the counter was stocked with them, kept genuine, and priced for the people who queued outside.",
      ne: "राधा माधव मेडिकल हल त्यही अभ्यासबाट जन्मियो। हरेक दिन बिरामी हेर्ने डाक्टरलाई पहाडलाई कुन औषधि चाहिन्छ र ती पाउन कति गाह्रो छ भन्ने राम्ररी थाहा थियो। त्यसैले काउन्टरमा ती औषधि राखियो, असली राखियो, र बाहिर लाइन लाग्ने मानिसका लागि मूल्य तोकियो।",
      bn: "রাধা মাধব মেডিক্যাল হল সেই প্র্যাকটিস থেকেই জন্ম নেয়। যে ডাক্তার প্রতিদিন রোগী দেখতেন, তিনি ঠিক জানতেন পাহাড়ের কোন ওষুধ দরকার আর তা পাওয়া কত কঠিন। তাই কাউন্টারে সেগুলোই রাখা হল, আসল রাখা হল, আর বাইরে লাইনে দাঁড়ানো মানুষের জন্য দাম রাখা হল।",
    },
    {
      en: "Health camps in the tea gardens, free check-ups on Sundays, medicines sent up to villages by whoever was heading that way. None of it was called community service at the time. It was simply how the hall worked, and it still is.",
      ne: "चिया बगानमा स्वास्थ्य शिविर, आइतबार निःशुल्क जाँच, त्यता जाने जोसुकैको हातमा गाउँसम्म पठाइने औषधि। त्यतिबेला यसलाई सामुदायिक सेवा भनिएन। हल यसरी नै चल्थ्यो, र अझै पनि त्यसरी नै चल्छ।",
      bn: "চা-বাগানে স্বাস্থ্য শিবির, রবিবারে বিনামূল্যে চেক-আপ, যে-ই সেদিকে যাচ্ছে তার হাতে গ্রামে পাঠানো ওষুধ। তখন এসবকে সমাজসেবা বলা হত না। হলটা এভাবেই চলত, আর এখনও এভাবেই চলে।",
    },
  ] as L[],
  quote: {
    en: "A pharmacy is not a shop. It is the last person a sick family talks to before they sleep.",
    ne: "फार्मेसी पसल होइन। बिरामी परिवारले सुत्नुअघि कुरा गर्ने अन्तिम व्यक्ति हो।",
    bn: "ফার্মেসি কোনো দোকান নয়। অসুস্থ পরিবার ঘুমোতে যাওয়ার আগে যার সঙ্গে শেষ কথা বলে, সে-ই।",
  } as L,
};

export const timeline: TimelineItem[] = [
  {
    year: "c. 1975",
    title: {
      en: "A young doctor comes to Mirik",
      ne: "एक युवा डाक्टर मिरिक आउनुहुन्छ",
      bn: "এক তরুণ ডাক্তার মিরিকে আসেন",
    },
    text: {
      en: "Dr. Swapan Kumar Kundu begins practising in the hill town, treating patients from Mirik and the surrounding tea gardens.",
      ne: "डा. स्वपन कुमार कुण्डुले पहाडी सहरमा अभ्यास सुरु गर्नुहुन्छ, मिरिक र वरपरका चिया बगानका बिरामीको उपचार गर्दै।",
      bn: "ডা. স্বপন কুমার কুণ্ডু পাহাড়ি শহরে প্র্যাকটিস শুরু করেন, মিরিক ও আশপাশের চা-বাগানের রোগীদের চিকিৎসা করে।",
    },
  },
  {
    year: "c. 1980s",
    title: {
      en: "Radha Madhav Medical Hall opens",
      ne: "राधा माधव मेडिकल हल खुल्छ",
      bn: "রাধা মাধব মেডিক্যাল হল খোলে",
    },
    text: {
      en: "The counter at Ward No. 5, Krishnanagar opens so that patients can find genuine medicines in town instead of travelling to Siliguri.",
      ne: "वार्ड नं. ५, कृष्णनगरको काउन्टर खुल्छ, ताकि बिरामीले सिलिगुडी नगई सहरमै असली औषधि पाऊन्।",
      bn: "ওয়ার্ড নং ৫, কৃষ্ণনগরে কাউন্টার খোলে, যাতে রোগীরা শিলিগুড়ি না গিয়ে শহরেই আসল ওষুধ পান।",
    },
  },
  {
    year: "c. 1990s",
    title: { en: "Camps in the tea gardens", ne: "चिया बगानमा शिविर", bn: "চা-বাগানে শিবির" },
    text: {
      en: "Regular health camps and free check-ups reach workers in Thurbo, Phuguri and neighbouring gardens.",
      ne: "थुर्बो, फुगुरी र छिमेकी बगानका कामदारसम्म नियमित स्वास्थ्य शिविर र निःशुल्क जाँच पुग्छ।",
      bn: "থুরবো, ফুগুরি ও পাশের বাগানের শ্রমিকদের কাছে নিয়মিত স্বাস্থ্য শিবির ও বিনামূল্যে চেক-আপ পৌঁছায়।",
    },
  },
  {
    year: "c. 2000s",
    title: {
      en: "A polyclinic under one roof",
      ne: "एउटै छानामुनि पोलिक्लिनिक",
      bn: "এক ছাদের নিচে পলিক্লিনিক",
    },
    text: {
      en: "Visiting specialists begin consulting at the hall, and OPD Cabin 101 becomes a fixture for the town.",
      ne: "आउने विशेषज्ञहरूले हलमा परामर्श दिन थाल्छन्, र OPD केबिन १०१ सहरको परिचित ठाउँ बन्छ।",
      bn: "আগত বিশেষজ্ঞরা হলে পরামর্শ দিতে শুরু করেন, আর OPD কেবিন ১০১ শহরের পরিচিত ঠিকানা হয়ে ওঠে।",
    },
  },
  {
    year: "2020",
    title: { en: "Through the pandemic", ne: "महामारीभरि", bn: "মহামারির মধ্য দিয়ে" },
    text: {
      en: "The counter stays open through lockdowns, delivering medicines and oxygen checks door to door across Mirik.",
      ne: "लकडाउनभरि काउन्टर खुला रहन्छ, मिरिकभरि घरघरमा औषधि र अक्सिजन जाँच पुर्‍याउँदै।",
      bn: "লকডাউনের মধ্যেও কাউন্টার খোলা থাকে, মিরিক জুড়ে দরজায় দরজায় ওষুধ আর অক্সিজেন চেক পৌঁছে দিয়ে।",
    },
  },
  {
    year: "Today",
    title: { en: "The next generation", ne: "अर्को पुस्ता", bn: "পরের প্রজন্ম" },
    text: {
      en: "Four visiting doctors, 4.9 stars on Google and the same promise: genuine medicines, honest advice, in the language you speak.",
      ne: "चार आउने डाक्टर, गुगलमा ४.९ तारा र उही वाचा: असली औषधि, इमानदार सल्लाह, तपाईंले बोल्ने भाषामा।",
      bn: "চারজন আগত ডাক্তার, গুগলে ৪.৯ তারা আর সেই একই প্রতিশ্রুতি: আসল ওষুধ, সৎ পরামর্শ, আপনার ভাষায়।",
    },
  },
];
