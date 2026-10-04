export type Review = { name: string; text: string; rating: number; source: string };

// Highlight quotes from the Google review summary (not attributed to individuals).
// TODO: verify — add full reviews (with reviewer permission) from the Google listing, or embed a live reviews widget.
export const reviews: Review[] = [
  { name: "Google reviewer", text: "Good in quality, service, competitive quote and time of delivery.", rating: 5, source: "Google" },
  { name: "Google reviewer", text: "Customer friendly with unique designs in nominal price range.", rating: 5, source: "Google" },
  { name: "Google reviewer", text: "AA Interior Design Studio did a good home interiors work in our home.", rating: 5, source: "Google" },
];

export const reviewThemes = ["Elegant design", "Customisation", "Affordability", "False ceiling", "Professionalism", "Attention to detail", "Transparency", "On-time delivery"];
