export interface WikiEntry {
  id: string;
  titleNp: string;
  titleEn: string;
  text: string;
  gloss: string;
}

// Nepali health-awareness notes, each readable aloud via the browser's
// speechSynthesis API. Keep sentences short and simple — they're written
// in the plain register used on public-health posters.
export const wikiEntries: WikiEntry[] = [
  {
    id: "clean-water",
    titleNp: "सफा पानी, स्वस्थ जीवन",
    titleEn: "Clean water, healthy life",
    text: "पानी सधैं उमालेर वा फिल्टर गरेर मात्र पिउनुहोस्। फोहोर पानीले पखाला र टाइफाइड जस्ता रोग फैलाउन सक्छ।",
    gloss:
      "Always drink boiled or filtered water. Dirty water can spread illnesses like diarrhoea and typhoid.",
  },
  {
    id: "handwashing",
    titleNp: "हात धुने बानी बसाऔं",
    titleEn: "Build the handwashing habit",
    text: "खाना खानुअघि र शौचालय प्रयोग गरेपछि साबुन पानीले कम्तिमा २० सेकेन्ड हात धुनुहोस्।",
    gloss:
      "Wash your hands with soap and water for at least 20 seconds before eating and after using the toilet.",
  },
  {
    id: "blood-pressure",
    titleNp: "रक्तचाप नियमित जाँच गर्नुहोस्",
    titleEn: "Check blood pressure regularly",
    text: "उच्च रक्तचापमा प्रायः कुनै लक्षण देखिँदैन। महिनाको एक पटक जाँच गर्नुहोस् र नुनको मात्रा घटाउनुहोस्।",
    gloss:
      "High blood pressure often shows no symptoms. Get it checked monthly and cut back on salt.",
  },
  {
    id: "diabetes",
    titleNp: "मधुमेह सचेतना",
    titleEn: "Diabetes awareness",
    text: "बढी तिर्खा लाग्नु, बारम्बार पिसाब लाग्नु र थकान मधुमेहका लक्षण हुन सक्छन्। समयमै जाँच गराउनुहोस्।",
    gloss: "Excess thirst, frequent urination and fatigue can signal diabetes. Get tested early.",
  },
  {
    id: "vaccination",
    titleNp: "बच्चाको खोप नछुटाउनुहोस्",
    titleEn: "Don't miss your child's vaccines",
    text: "सरकारी खोप तालिका अनुसार आफ्नो बच्चालाई समयमै खोप लगाउनुहोस्। यसले धेरै गम्भीर रोगबाट बचाउँछ।",
    gloss: "Vaccinate your child on schedule. It protects against many serious diseases.",
  },
  {
    id: "seasonal-flu",
    titleNp: "मौसम परिवर्तनमा रुघाखोकी",
    titleEn: "Seasonal flu care",
    text: "मौसम बदलिँदा घाँटी दुख्ने र रुघा लाग्ने समस्या बढ्छ। गुनगुने पानी पिउनुहोस् र भीडभाड ठाउँमा मास्क लगाउनुहोस्।",
    gloss:
      "Sore throats and colds rise with changing weather. Drink warm water and mask up in crowds.",
  },
];
