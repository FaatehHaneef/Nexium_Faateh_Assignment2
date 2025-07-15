export type Blog = {
  title: string;
  summary: string;
  urduSummary: string;
  hashtags: string[];
};

export const sampleBlogs: Blog[] = [
  {
    title: "How OpenAI Is Rewiring the Digital Brain",
    summary:
      "From ChatGPT to DALL·E, OpenAI is rewriting the rules of the internet. These powerful tools are revolutionizing how we create, communicate, and collaborate - making artificial intelligence a part of everyday life. Whether it's generating creative art, writing human-like responses, or translating languages in real-time, OpenAI's models are pushing the boundaries of what machines can do. With every new update, the gap between human and machine capabilities continues to shrink, redefining the future of digital interaction.",
    urduSummary:
      "چیٹ جی پی ٹی سے لے کر ڈی اے ایل ایل·ای تک، اوپن اے آئی انٹرنیٹ کی دنیا کے اصولوں کو بدل رہا ہے۔ یہ طاقتور ٹولز ہماری تخلیق، گفتگو اور اشتراک کے طریقوں کو نئی جہتیں دے رہے ہیں، اور مصنوعی ذہانت کو ہماری روزمرہ زندگی کا حصہ بنا رہے ہیں۔ چاہے تخلیقی تصاویر بنانا ہو، انسان جیسے جوابات دینا ہوں یا حقیقی وقت میں زبانوں کا ترجمہ کرنا ہو -اوپن اے آئی کی ٹیکنالوجی مشینوں کی صلاحیتوں کو نئی بلندیوں پر لے جا رہی ہے۔ ہر نئی اپ ڈیٹ کے ساتھ انسان اور مشین کے درمیان فاصلہ کم ہوتا جا رہا ہے، اور ڈیجیٹل رابطے کا مستقبل نئی شکل اختیار کر رہا ہے۔",
    hashtags: ["#OpenAI", "#ChatGPT", "#AIRevolution", "#Dalle", "#DigitalFuture", "#MachineLearning"]
  },
  {
    title: "Machine Learning: The Silent Genius Behind Smart Tech",
    summary:
      "Machine Learning is the invisible force behind everything from Netflix recommendations to self-driving cars. By learning from patterns in data, it helps machines make decisions almost like humans - only faster. Whether it's detecting fraud in banks, predicting customer behavior in e-commerce, or personalizing news feeds, machine learning has become an essential part of our digital ecosystem. Its ability to adapt and improve over time means it's constantly evolving, making technologies smarter, faster, and more intuitive.",
    urduSummary:
      "مشین لرننگ وہ خاموش ذہانت ہے جو نیٹ فلکس کی تجاویز سے لے کر خودکار گاڑیوں تک جدید ٹیکنالوجی کے پیچھے کام کر رہی ہے۔ یہ ڈیٹا کے نمونوں سے سیکھ کر مشینوں کو انسانوں جیسی، مگر کہیں زیادہ تیز فیصلہ سازی کی صلاحیت دیتی ہے۔ چاہے وہ بینکوں میں دھوکہ دہی کا پتہ لگانا ہو، ای کامرس میں گاہکوں کے رویوں کی پیش گوئی ہو یا خبروں کی فیڈ کو ذاتی بنانا ہو - مشین لرننگ ہمارے ڈیجیٹل نظام کی ریڑھ کی ہڈی بن چکی ہے۔ اس کی وقت کے ساتھ بہتر ہونے کی صلاحیت ٹیکنالوجی کو دن بہ دن مزید سمجھ دار، تیز اور ذہین بنا رہی ہے۔",
    hashtags: ["#MachineLearning", "#SmartTech", "#AIinEveryday", "#DataDriven", "#TechTrends", "#FutureAI"]
  },
  {
    title: "Taylor Swift: The Era-Defining Voice of a Generation",
    summary:
      "Taylor Swift isn’t just a pop star - she’s a cultural reset. With poetic storytelling, iconic reinventions, and fearless activism, she’s built a legacy that transcends music and speaks directly to the heart of her generation. From country roots to global pop stardom, her ability to evolve while staying deeply personal has made her relatable to millions. Whether she’s penning heartbreak anthems or re-recording her masters, Swift continues to reclaim her narrative and inspire a generation to find power in their own voice.",
    urduSummary:
      "ٹیلر سوئفٹ صرف ایک پاپ اسٹار نہیں، بلکہ ایک ثقافتی انقلاب ہیں۔ اُن کی شاعرانہ کہانیاں، جرات مندانہ تبدیلیاں، اور بے باک سرگرمیاں اُنہیں محض موسیقی سے آگے لے جا چکی ہیں - وہ ایک نسل کی آواز بن چکی ہیں۔ دیہی موسیقی سے شروع ہو کر عالمی شہرت یافتہ پاپ آئیکون بننے تک، سوئفٹ نے ہر مرحلے پر خود کو نئے انداز میں پیش کیا ہے۔ اُن کے گیتوں میں درد، سچائی اور ذاتی تجربات کی جھلک اُنہیں دنیا بھر کے مداحوں سے جوڑتی ہے۔ چاہے وہ دل شکستہ نغمے ہوں یا اپنے پرانے گیتوں کا دوبارہ اجرا، ٹیلر مسلسل اپنا بیانیہ خود لکھ رہی ہیں - اور دوسروں کو بھی ایسا کرنے کا حوصلہ دے رہی ہیں۔",
    hashtags: ["#TaylorSwift", "#PopCulture", "#Swifties", "#EraTour", "#MusicAI", "#AIxPop"]
  },
  {
    title: "Sabrina Carpenter's Glow-Up Era: From Disney to Diva",
    summary:
      "Sabrina Carpenter has gracefully transitioned from a Disney Channel sweetheart to a rising icon in the pop music world. With bold visuals, authentic lyrics, and a distinctive voice, she’s carving a space that’s uniquely hers. Her latest releases reveal a confident artist who’s not afraid to experiment with sound, style, and storytelling. Backed by a growing fanbase and critical acclaim, Sabrina’s evolution is more than a rebrand - it’s a statement of her artistic independence and vision.",
    urduSummary:
      "سبریانہ کارپنٹر نے ڈزنی چینل کی معصوم اداکارہ سے ایک پرکشش پاپ آئیکون بننے تک کا سفر نہایت خوبصورتی سے طے کیا ہے۔ اُن کی حالیہ موسیقی میں واضح خود اعتمادی، منفرد انداز اور جذباتی سچائی کی جھلک نظر آتی ہے۔ وہ نہ صرف آواز اور انداز میں تجربے کر رہی ہیں بلکہ کہانی گوئی میں بھی نئے افق تلاش کر رہی ہیں۔ مداحوں کی بڑھتی ہوئی حمایت اور ناقدین کی پذیرائی کے ساتھ، سبریانہ کا یہ ارتقاء صرف تبدیلی نہیں بلکہ اُن کی تخلیقی آزادی کا بھرپور اظہار ہے۔",
    hashtags: ["#SabrinaCarpenter", "#GlowUp", "#PopStar", "#DisneyToDiva", "#NewEra", "#MusicTrends"]
  },
  {
    title: "Can AI Be Ethical? Exploring the Moral Dilemmas of Smart Machines",
    summary:
      "As artificial intelligence continues to integrate into decision-making systems - from hiring to law enforcement - ethical questions grow more urgent. Who is responsible when an AI makes a harmful choice? How can we detect bias in code? These are not just technical questions, but moral ones that impact real lives. Developers, ethicists, and policymakers are now racing to establish frameworks that ensure fairness, transparency, and accountability in AI systems, before the technology outpaces our ability to control it.",
    urduSummary:
      "جب مصنوعی ذہانت روزمرہ فیصلوں کا حصہ بن رہی ہے - چاہے وہ ملازمتوں کی بھرتی ہو یا قانون نافذ کرنے والے ادارے - تو اخلاقی سوالات زیادہ پیچیدہ ہو گئے ہیں۔ اگر کوئی AI نقصان دہ فیصلہ کرے تو اس کی ذمہ داری کس پر عائد ہوگی؟ کیا ہم کوڈ میں تعصب کی شناخت کر سکتے ہیں؟ یہ صرف تکنیکی نہیں بلکہ اخلاقی سوالات ہیں جو حقیقی زندگیوں کو متاثر کرتے ہیں۔ اب ماہرین، انجینئرز اور پالیسی ساز ایسی حکمت عملیاں تیار کر رہے ہیں جو AI میں شفافیت، انصاف اور جوابدہی کو یقینی بنائیں، اس سے پہلے کہ یہ ٹیکنالوجی ہمارے کنٹرول سے باہر ہو جائے۔",
    hashtags: ["#EthicalAI", "#AIethics", "#MoralTech", "#AIBias", "#ResponsibleAI", "#AIRegulation"]
  },
  {
    title: "Climate Crisis Countdown: What the Next Decade Holds",
    summary:
      "The climate crisis is no longer a far-off possibility - it's happening now. From melting glaciers to destructive wildfires, the signs are undeniable. Governments and communities around the world are beginning to act, but time is short. The next ten years will determine whether we shift toward renewable energy, rethink consumption habits, and protect vulnerable ecosystems - or risk irreversible damage. The clock is ticking, and the responsibility belongs to all of us.",
    urduSummary:
      "ماحولیاتی بحران اب کوئی دور کا خطرہ نہیں رہا - یہ ہماری آنکھوں کے سامنے وقوع پذیر ہو رہا ہے۔ پگھلتے گلیشیئرز، جنگلات کی تباہ کن آگ، اور شدید موسم اس بات کا ناقابل تردید ثبوت ہیں۔ دنیا بھر میں حکومتیں اور عوامی حلقے ایکشن میں آ چکے ہیں، لیکن وقت بہت کم ہے۔ اگلا عشرہ یہ طے کرے گا کہ ہم قابل تجدید توانائی کی طرف بڑھتے ہیں یا نہیں، اپنے استعمال کی عادات پر نظرثانی کرتے ہیں یا ماحول کو ناقابل تلافی نقصان پہنچاتے ہیں۔ گھڑی چل رہی ہے، اور ذمہ داری ہم سب کی ہے۔",
    hashtags: ["#ClimateCrisis", "#EcoFuture", "#GreenTech", "#SustainableAI", "#ClimateAction", "#ActNow"]
  }
];
