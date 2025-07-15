// utils.ts

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility: Classnames + Tailwind merge
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const dictionary: Record<string, string> = {
  // === AI & Tech ===
  "ai": "مصنوعی ذہانت",
  "artificial": "مصنوعی",
  "intelligence": "ذہانت",
  "usability": "قابل استعمالیت",
  "boundaries": "حدود",
  "canvas": "کینوس",
  "upgrade": "اپ گریڈ",
  "users": "صارفین",
  "interact": "تعامل",
  "productivity": "کارکردگی",
  "coding": "کوڈنگ",
  "content": "مواد",
  "generation": "تخلیق",
  "brainstorming": "خیالات کے تبادلے",
  "feature": "خصوصیت",
  "visual": "بصری",
  "interactive": "تعاملی",
  "workspace": "ورک اسپیس",
  "structured": "ساختی",
  "draggable": "قابل حرکت",
  "thought": "خیال",
  "maps": "نقشے",
  "tool": "اوزار",
  "help": "مدد کرنا",
  "think": "سوچنا",
  "space": "جگہ",
  "words": "الفاظ",
  "rollout": "رول آؤٹ",
  "subscribers": "سبسکرائبرز",
  "devices": "آلات",
  "mobile": "موبائل",
  "app": "ایپ",
  "website": "ویب سائٹ",
  "dynamic": "متحرک",
  "interface": "انٹرفیس",
  "manipulate": "جوڑنے",
  "building": "عمارت",
  "blocks": "بلاکس",
  "dragging": "کھینچنا",
  "organizing": "ترتیب دینا",
  "expanding": "بڑھانا",
  "branching": "شاخوں میں تقسیم",
  "ideas": "خیالات",
  "spatial": "مکانی",
  "environment": "ماحول",
  "co-pilot": "کو-پائلٹ",

  // === General ===
  "your": "آپ کا",
  "partner": "ساتھی",
  "digital": "ڈیجیٹل",
  "transformation": "تبدیلی",
  "reserved": "محفوظ",
  "once": "ایک بار",
  "again": "دوبارہ",
  "major": "بڑا",
  "way": "طریقہ",
  "millions": "لاکھوں",
  "daily": "روزانہ",
  "according": "کے مطابق",
  "designed": "ڈیزائن کیا گیا",
  "gradually": "آہستہ آہستہ",
  "including": "بشمول",
  "essentially": "بنیادی طور پر",
  "turns": "تبدیل کرتا ہے",
  "into": "میں",
  "for": "کے لیے",
  "with": "کے ساتھ",
  "of": "کا",
  "to": "تک",
  "in": "میں",
  "on": "پر",
  "at": "پر",
  "by": "کے ذریعہ",
  "is": "ہے",
  "are": "ہیں",
  "be": "ہونا",
  "can": "سکتا ہے",
  "will": "ہوگا",
  "not": "نہیں",
  "just": "صرف",
  "and": "اور",
  "or": "یا",
  "but": "لیکن",
  "this": "یہ",
  "that": "وہ",
  "it": "یہ",
  "as": "بطور",
  "a": "ایک",
  "an": "ایک",
  "the": "دی",
  "has": "ہے",
  "have": "ہے",
  "been": "رہا ہے",
  "was": "تھا",
  "were": "تھے",
  "had": "تھا",
  "does": "کرتا ہے",
  "did": "کیا",
  "done": "کیا گیا",
  "make": "بنانا",
  "made": "بنایا گیا",
  "creating": "بنانا",
  "created": "بنایا گیا"
};


// 🔁 Smart English → Urdu Translator
export function translateToUrdu(text: string): string {
  return text
    .split(/\s+/)
    .map((word) => {
      const trimmed = word.toLowerCase().replace(/[.,!?;:()"'“”]/g, "");
      const translated = dictionary[trimmed];
      return translated ? word.replace(new RegExp(trimmed, "i"), translated) : word;
    })
    .join(" ");
}

// ✅ Supabase (lazy loaded)
import { createClient } from "@supabase/supabase-js";

let supabase: ReturnType<typeof createClient> | null = null;

function getSupabaseClient() {
  if (!supabase) {
    if (!process.env.SUPABASE_URL || !process.env.SUPABASE_KEY) {
      throw new Error("Missing Supabase environment variables.");
    }
    supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);
  }
  return supabase;
}

export async function saveToSupabase(summary: string) {
  const client = getSupabaseClient();
  await client.from("summaries").insert([{ summary }]);
}


export function getWordCount(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

const hashtagMap: Record<string, string[]> = {
  ai: ["#AI", "#ArtificialIntelligence", "#MachineLearning", "#AIFuture"],
  tech: ["#Tech", "#Innovation", "#FutureIsNow", "#DigitalWorld"],
  music: ["#Music", "#PopCulture", "#NowPlaying", "#MusicLovers"],
  taylor: ["#TaylorSwift", "#Swifties", "#ErasTour", "#SpeakNow"],
  sabrina: ["#SabrinaCarpenter", "#FeatherEra", "#PopPrincess", "#GirlPower"],
  climate: ["#ClimateCrisis", "#Sustainability", "#EcoAwareness", "#ActNow"],
  ethics: ["#AIethics", "#ResponsibleTech", "#BiasInAI", "#MoralTech"],
  generation: ["#GenZ", "#Millennials", "#VoiceOfAGeneration", "#CultureShift"],
};

export function generateHashtags(text: string): string[] {
  const keywords = Object.keys(hashtagMap);
  const lowerText = text.toLowerCase();

  const hashtags = new Set<string>();

  for (const key of keywords) {
    if (lowerText.includes(key)) {
      hashtagMap[key].forEach((tag) => hashtags.add(tag));
    }
  }

  if (hashtags.size === 0) {
    hashtags.add("#BlogEssence");
    hashtags.add("#AI");
    hashtags.add("#GeneratedSummary");
  }

  return Array.from(hashtags).slice(0, 6); // limit to 6
}
