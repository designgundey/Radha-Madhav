export interface Review {
  name: string;
  rating: 1 | 2 | 3 | 4 | 5;
  when: string;
  text: string;
  ownerReply?: string;
}

// Copied from the public Google Business listing (4.9 ★ · 16 ratings; these are the
// written ones). Google doesn't offer a free live feed for a static site, so refresh
// this list by hand now and then, or wire up the Places API later.
export const reviews: Review[] = [
  {
    name: "Aki Y",
    rating: 5,
    when: "Google review",
    text: "The best place for medical help in Mirik. The compounder uncle and girls are doing a wonderful job by helping everyone.",
    ownerReply: "Thank you for your support. We wish to serve you further.",
  },
  {
    name: "Sivakrishna Paluru",
    rating: 5,
    when: "Local Guide · Google review",
    text: "The only destination for good quality medicines in Mirik.",
    ownerReply: "Thank you so much. We value your opinion.",
  },
  {
    name: "Sourav Sardar",
    rating: 5,
    when: "Google review",
    text: "Only destination for good quality medicine in Mirik.",
    ownerReply: "Thank you. Looking forward to serving you better.",
  },
];

export const reviewHighlights = [
  "The only destination for good quality medicines in Mirik.",
  "Owner can help you with your problems.",
];
