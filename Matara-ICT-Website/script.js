const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const topButton = document.getElementById("topButton");
const languageSelect = document.getElementById("languageSelect");

// Mobile menu
menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    menuToggle.setAttribute(
        "aria-expanded",
        navMenu.classList.contains("active")
    );
});

document.querySelectorAll("#navMenu a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});

// Copyright year
document.getElementById("year").textContent =
    new Date().getFullYear();

// Back to top
window.addEventListener("scroll", () => {
    topButton.classList.toggle("show", window.scrollY > 300);
});

topButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// FULL WEBSITE TRANSLATIONS
// Format: English text: [Sinhala, Tamil]

const translations = {

    "MATARA TECHNICAL COLLEGE": [
        "මාතර තාක්ෂණ විද්‍යාලය",
        "மாத்தறை தொழில்நுட்பக் கல்லூரி"
    ],

    "Information & Communication Technology": [
        "තොරතුරු හා සන්නිවේදන තාක්ෂණය",
        "தகவல் மற்றும் தொடர்பாடல் தொழில்நுட்பம்"
    ],

    "Home": ["මුල් පිටුව", "முகப்பு"],
    "About": ["අප ගැන", "எங்களைப் பற்றி"],
    "Subjects": ["විෂයයන්", "பாடங்கள்"],
    "Projects": ["ව්‍යාපෘති", "திட்டங்கள்"],
    "Gallery": ["ඡායාරූප", "புகைப்படங்கள்"],
    "Contact": ["සම්බන්ධ වන්න", "தொடர்பு"],

    "2026 ICT 2nd Batch": [
        "2026 ICT දෙවන කණ්ඩායම",
        "2026 ICT இரண்டாம் தொகுதி"
    ],

    "• LEARN • CREATE • INNOVATE": [
        "• ඉගෙන ගනිමු • නිර්මාණය කරමු • නවෝත්පාදනය කරමු",
        "• கற்போம் • உருவாக்குவோம் • புதுமை படைப்போம்"
    ],

    "Explore the World of": [
        "තොරතුරු තාක්ෂණ ලෝකය ගවේෂණය කරමු",
        "தகவல் தொழில்நுட்ப உலகை ஆராய்வோம்"
    ],

    "Discover Our Programme": [
        "අපගේ පාඨමාලාව හඳුනාගන්න",
        "எங்கள் பாடநெறியை அறிந்துகொள்ளுங்கள்"
    ],

    "Explore Curriculum": [
        "විෂය මාලාව බලන්න",
        "பாடத்திட்டத்தைப் பாருங்கள்"
    ],

    "Welcome to the ICT Programme of Matara Technical College. Discover technology, develop practical skills and prepare for a digital future.": [
        "මාතර තාක්ෂණ විද්‍යාලයේ ICT පාඨමාලාවට සාදරයෙන් පිළිගනිමු. තාක්ෂණය හඳුනාගෙන ප්‍රායෝගික කුසලතා වර්ධනය කරගෙන ඩිජිටල් අනාගතයකට සූදානම් වෙමු.",
        "மாத்தறை தொழில்நுட்பக் கல்லூரியின் ICT பாடநெறிக்கு உங்களை அன்புடன் வரவேற்கிறோம். தொழில்நுட்பத்தை அறிந்து நடைமுறைத் திறன்களை வளர்த்து டிஜிட்டல் எதிர்காலத்திற்குத் தயாராகுங்கள்."
    ],

    "Months Duration": [
        "මාස 6ක කාලසීමාව",
        "6 மாத காலம்"
    ],

    "National Vocational Qualification": [
        "ජාතික වෘත්තීය සුදුසුකම",
        "தேசிய தொழில்சார் தகைமை"
    ],

    "WHO WE ARE": ["අප කවුරුන්ද?", "நாங்கள் யார்?"],
    "About Our ICT Programme": [
        "අපගේ ICT පාඨමාලාව ගැන",
        "எங்கள் ICT பாடநெறி பற்றி"
    ],

    "Building knowledge and skills for the digital world.": [
        "ඩිජිටල් ලෝකය සඳහා දැනුම හා කුසලතා ගොඩනැගීම.",
        "டிஜிட்டல் உலகிற்கான அறிவையும் திறன்களையும் வளர்த்தல்."
    ],

    "Learning Beyond the Classroom": [
        "පන්ති කාමරයෙන් ඔබ්බට ඉගෙනීම",
        "வகுப்பறைக்கு அப்பாற்பட்ட கற்றல்"
    ],

    "The ICT Programme at Matara Technical College introduces students to the world of Information and Communication Technology through learning and practical activities.": [
        "මාතර තාක්ෂණ විද්‍යාලයේ ICT පාඨමාලාව මඟින් ඉගෙනුම් සහ ප්‍රායෝගික ක්‍රියාකාරකම් හරහා සිසුන්ට තොරතුරු හා සන්නිවේදන තාක්ෂණ ලෝකය හඳුන්වා දෙයි.",
        "மாத்தறை தொழில்நுட்பக் கல்லூரியின் ICT பாடநெறி கற்றல் மற்றும் நடைமுறைச் செயற்பாடுகள் மூலம் மாணவர்களுக்கு தகவல் மற்றும் தொடர்பாடல் தொழில்நுட்ப உலகை அறிமுகப்படுத்துகிறது."
    ],

    "Students explore computing, software, web technologies and other areas of information technology while developing problem-solving and teamwork skills.": [
        "සිසුන් පරිගණකකරණය, මෘදුකාංග, වෙබ් තාක්ෂණය සහ තොරතුරු තාක්ෂණයේ වෙනත් ක්ෂේත්‍ර අධ්‍යයනය කරමින් ගැටලු විසඳීමේ සහ කණ්ඩායම් වැඩ කිරීමේ කුසලතා වර්ධනය කරගනිති.",
        "மாணவர்கள் கணினி, மென்பொருள், இணையத் தொழில்நுட்பங்கள் மற்றும் தகவல் தொழில்நுட்பத்தின் பிற துறைகளைக் கற்றுக்கொண்டு பிரச்சினைகளைத் தீர்க்கும் மற்றும் குழுவாகச் செயல்படும் திறன்களை வளர்த்துக் கொள்கின்றனர்."
    ],

    "Explore our curriculum →": [
        "අපගේ විෂය මාලාව බලන්න →",
        "எங்கள் பாடத்திட்டத்தைப் பாருங்கள் →"
    ],

    "Technology & Innovation": [
        "තාක්ෂණය සහ නවෝත්පාදනය",
        "தொழில்நுட்பம் மற்றும் புதுமை"
    ],

    "Developing digital knowledge through learning and practice.": [
        "ඉගෙනීම සහ පුහුණුව තුළින් ඩිජිටල් දැනුම වර්ධනය කිරීම.",
        "கற்றல் மற்றும் பயிற்சி மூலம் டிஜிட்டல் அறிவை வளர்த்தல்."
    ],

    "WHAT WE LEARN": ["අප ඉගෙන ගන්නා දේ", "நாம் கற்பவை"],

    "Our ICT Curriculum": [
        "අපගේ ICT විෂය මාලාව",
        "எங்கள் ICT பாடத்திட்டம்"
    ],

    "Explore the curriculum modules of the Information and Communication Technology Technician programme.": [
        "තොරතුරු හා සන්නිවේදන තාක්ෂණ ශිල්පී පාඨමාලාවේ විෂය ඒකක හඳුනාගන්න.",
        "தகவல் மற்றும் தொடர்பாடல் தொழில்நுட்பத் தொழில்நுட்பவியலாளர் பாடநெறியின் பாட அலகுகளை ஆராயுங்கள்."
    ],

    "Maintaining Files & Folders": [
        "ගොනු සහ ෆෝල්ඩර කළමනාකරණය",
        "கோப்புகள் மற்றும் கோப்புறைகளைப் பராமரித்தல்"
    ],

    "File management, folders, backups and computer operations.": [
        "ගොනු කළමනාකරණය, ෆෝල්ඩර, උපස්ථ පිටපත් සහ පරිගණක මෙහෙයුම්.",
        "கோப்பு மேலாண்மை, கோப்புறைகள், காப்புப் பிரதிகள் மற்றும் கணினிச் செயல்பாடுகள்."
    ],

    "Word Processing": [
        "වචන සැකසීම",
        "சொல் செயலாக்கம்"
    ],

    "Creating, editing and formatting professional documents.": [
        "වෘත්තීය ලේඛන නිර්මාණය කිරීම, සංස්කරණය කිරීම සහ හැඩගැන්වීම.",
        "தொழில்முறை ஆவணங்களை உருவாக்குதல், திருத்துதல் மற்றும் வடிவமைத்தல்."
    ],

    "Spreadsheets": ["පැතුරුම්පත්", "விரிதாள்கள்"],

    "Formulas, functions, charts, data tools and analysis.": [
        "සූත්‍ර, ශ්‍රිත, ප්‍රස්ථාර, දත්ත මෙවලම් සහ විශ්ලේෂණය.",
        "சூத்திரங்கள், சார்புகள், வரைபடங்கள், தரவுக் கருவிகள் மற்றும் பகுப்பாய்வு."
    ],

    "Presentations": ["ඉදිරිපත් කිරීම්", "விளக்கக்காட்சிகள்"],

    "Creating and delivering multimedia presentations.": [
        "බහුමාධ්‍ය ඉදිරිපත් කිරීම් නිර්මාණය කිරීම සහ ඉදිරිපත් කිරීම.",
        "பல்லூடக விளக்கக்காட்சிகளை உருவாக்கி வழங்குதல்."
    ],

    "Cloud Computing, Internet & Email": [
        "වලාකුළු පරිගණකකරණය, අන්තර්ජාලය සහ විද්‍යුත් තැපෑල",
        "மேகக் கணினியியல், இணையம் மற்றும் மின்னஞ்சல்"
    ],

    "Internet services, email, online collaboration and cloud storage.": [
        "අන්තර්ජාල සේවා, විද්‍යුත් තැපෑල, මාර්ගගත සහයෝගීතාව සහ වලාකුළු ගබඩාකරණය.",
        "இணையச் சேவைகள், மின்னஞ்சல், இணையவழி ஒத்துழைப்பு மற்றும் மேகச் சேமிப்பு."
    ],

    "Database Manipulation": [
        "දත්ත සමුදා කළමනාකරණය",
        "தரவுத்தளக் கையாளுதல்"
    ],

    "Creating databases, tables, relationships, forms and reports.": [
        "දත්ත සමුදා, වගු, සම්බන්ධතා, පෝරම සහ වාර්තා නිර්මාණය කිරීම.",
        "தரவுத்தளங்கள், அட்டவணைகள், தொடர்புகள், படிவங்கள் மற்றும் அறிக்கைகளை உருவாக்குதல்."
    ],

    "Computer Systems & Networks": [
        "පරිගණක පද්ධති සහ ජාල",
        "கணினி அமைப்புகள் மற்றும் வலையமைப்புகள்"
    ],

    "Hardware, operating systems, peripherals and networking.": [
        "දෘඩාංග, මෙහෙයුම් පද්ධති, පර්යන්ත උපාංග සහ ජාලකරණය.",
        "வன்பொருள், இயக்க முறைமைகள், புறச் சாதனங்கள் மற்றும் வலையமைப்பு."
    ],

    "Print Layout & Multimedia": [
        "මුද්‍රණ සැලසුම්කරණය සහ බහුමාධ්‍ය",
        "அச்சு வடிவமைப்பு மற்றும் பல்லூடகம்"
    ],

    "Graphic design, image editing, page layout and multimedia creation.": [
        "ග්‍රැෆික් නිර්මාණය, රූප සංස්කරණය, පිටු සැලසුම්කරණය සහ බහුමාධ්‍ය නිර්මාණය.",
        "வரைகலை வடிவமைப்பு, படத் திருத்தம், பக்க வடிவமைப்பு மற்றும் பல்லூடக உருவாக்கம்."
    ],

    "Systems Analysis & Designing": [
        "පද්ධති විශ්ලේෂණය සහ සැලසුම්කරණය",
        "அமைப்பு பகுப்பாய்வு மற்றும் வடிவமைப்பு"
    ],

    "Requirements, system modelling, diagrams and software testing.": [
        "අවශ්‍යතා හඳුනාගැනීම, පද්ධති ආකෘතිකරණය, රූපසටහන් සහ මෘදුකාංග පරීක්ෂාව.",
        "தேவைகள், அமைப்பு மாதிரியாக்கம், வரைபடங்கள் மற்றும் மென்பொருள் சோதனை."
    ],

    "Relational Databases & SQL": [
        "සම්බන්ධතා දත්ත සමුදා සහ SQL",
        "தொடர்புடைய தரவுத்தளங்கள் மற்றும் SQL"
    ],

    "Database design, SQL statements, queries and data management.": [
        "දත්ත සමුදා සැලසුම්කරණය, SQL විධාන, විමසුම් සහ දත්ත කළමනාකරණය.",
        "தரவுத்தள வடிவமைப்பு, SQL கட்டளைகள், வினவல்கள் மற்றும் தரவு மேலாண்மை."
    ],

    "Static Website Designing": [
        "ස්ථිතික වෙබ් අඩවි නිර්මාණය",
        "நிலையான இணையதள வடிவமைப்பு"
    ],

    "Developing websites using HTML and CSS.": [
        "HTML සහ CSS භාවිතයෙන් වෙබ් අඩවි නිර්මාණය කිරීම.",
        "HTML மற்றும் CSS ஐப் பயன்படுத்தி இணையதளங்களை உருவாக்குதல்."
    ],

    "Desktop Applications": [
        "ඩෙස්ක්ටොප් යෙදුම්",
        "கணினி மேசை பயன்பாடுகள்"
    ],

    "Programming fundamentals, application development and testing.": [
        "ක්‍රමලේඛන මූලධර්ම, යෙදුම් සංවර්ධනය සහ පරීක්ෂා කිරීම.",
        "நிரலாக்க அடிப்படைகள், பயன்பாட்டு மேம்பாடு மற்றும் சோதனை."
    ],

    "Based on the National Competency Standard and Competency-Based Training Curriculum for Information and Communication Technology Technician, NVQ Levels 2, 3 and 4.": [
        "තොරතුරු හා සන්නිවේදන තාක්ෂණ ශිල්පී පාඨමාලාව සඳහා වන ජාතික නිපුණතා ප්‍රමිතිය සහ නිපුණතා පාදක පුහුණු විෂය මාලාව මත පදනම් වේ. NVQ මට්ටම් 2, 3 සහ 4.",
        "தகவல் மற்றும் தொடர்பாடல் தொழில்நுட்பத் தொழில்நுட்பவியலாளருக்கான தேசிய திறன் தரநிலை மற்றும் திறன் அடிப்படையிலான பயிற்சிப் பாடத்திட்டத்தை அடிப்படையாகக் கொண்டது. NVQ நிலைகள் 2, 3 மற்றும் 4."
    ],

    "OUR MEMORIES": ["අපගේ මතකයන්", "எங்கள் நினைவுகள்"],

    "Photo Gallery": ["ඡායාරූප එකතුව", "புகைப்படத் தொகுப்பு"],

    "A glimpse into our ICT programme.": [
        "අපගේ ICT පාඨමාලාවේ මතක සටහන් කිහිපයක්.",
        "எங்கள் ICT பாடநெறியின் சில நினைவுகள்."
    ],

    "Classroom Activities": [
        "පන්තිකාමර ක්‍රියාකාරකම්",
        "வகுப்பறைச் செயல்பாடுகள்"
    ],

    "College Events": ["විද්‍යාලීය උත්සව", "கல்லூரி நிகழ்வுகள்"],

    "Student Activities": [
        "ශිෂ්‍ය ක්‍රියාකාරකම්",
        "மாணவர் செயல்பாடுகள்"
    ],

    "Achievements": ["ජයග්‍රහණ", "சாதனைகள்"],

    "GET IN TOUCH": ["අප හා සම්බන්ධ වන්න", "எங்களைத் தொடர்புகொள்ளுங்கள்"],

    "Contact Us": ["අප අමතන්න", "எங்களைத் தொடர்புகொள்ளுங்கள்"],

    "Learn more about Matara Technical College.": [
        "මාතර තාක්ෂණ විද්‍යාලය පිළිබඳ වැඩිදුර දැනගන්න.",
        "மாத்தறை தொழில்நுட்பக் கல்லூரி பற்றி மேலும் அறியுங்கள்."
    ],

    "Meddawatta, Matara, Sri Lanka": [
        "මෙද්දවත්ත, මාතර, ශ්‍රී ලංකාව",
        "மெத்தவத்தை, மாத்தறை, இலங்கை"
    ],

    "Telephone:": ["දුරකථන:", "தொலைபேசி:"],
    "Email:": ["විද්‍යුත් තැපෑල:", "மின்னஞ்சல்:"],
    "Official Website:": ["නිල වෙබ් අඩවිය:", "அதிகாரப்பூர்வ இணையதளம்:"],

    "Department of Technical Education & Training": [
        "තාක්ෂණ අධ්‍යාපන හා පුහුණු දෙපාර්තමේන්තුව",
        "தொழில்நுட்பக் கல்வி மற்றும் பயிற்சித் திணைக்களம்"
    ],

    "ICT Programme": ["ICT පාඨමාලාව", "ICT பாடநெறி"],

    "Find Us on Google Maps": [
        "Google Maps මඟින් අපව සොයාගන්න",
        "Google Maps இல் எங்களைக் கண்டறியுங்கள்"
    ],

    "ICT Programme | Learn • Create • Innovate": [
        "ICT පාඨමාලාව | ඉගෙන ගනිමු • නිර්මාණය කරමු • නවෝත්පාදනය කරමු",
        "ICT பாடநெறி | கற்போம் • உருவாக்குவோம் • புதுமை படைப்போம்"
    ],

    "Matara Technical College ICT Programme.": [
        "මාතර තාක්ෂණ විද්‍යාලයේ ICT පාඨමාලාව.",
        "மாத்தறை தொழில்நுட்பக் கல்லூரியின் ICT பாடநெறி."
    ],

    "Your browser does not support video.": [
        "ඔබගේ බ්‍රවුසරය වීඩියෝ සඳහා සහාය නොදක්වයි.",
        "உங்கள் உலாவி காணொளியை ஆதரிக்கவில்லை."
    ]
};


// Translate all visible text nodes
function changeLanguage(language) {

    if (!["en", "si", "ta"].includes(language)) {
        language = "en";
    }

    document.documentElement.lang = language;

    const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT
    );

    const textNodes = [];

    while (walker.nextNode()) {
        textNodes.push(walker.currentNode);
    }

    textNodes.forEach(node => {

        const original = node.textContent;
        const cleanText = original.replace(/\s+/g, " ").trim();

        if (!cleanText) return;

        const translation = translations[cleanText];

        if (language === "en") {
            if (node.__originalText !== undefined) {
                node.textContent = node.__originalText;
            }
        } else if (translation) {

            if (node.__originalText === undefined) {
                node.__originalText = original;
            }

            const leading = original.match(/^\s*/)[0];
            const trailing = original.match(/\s*$/)[0];

            node.textContent =
                leading + translation[language === "si" ? 0 : 1] + trailing;
        }
    });

    // Translate page title
    const titles = {
        en: "ICT Programme | Matara Technical College",
        si: "ICT පාඨමාලාව | මාතර තාක්ෂණ විද්‍යාලය",
        ta: "ICT பாடநெறி | மாத்தறை தொழில்நுட்பக் கல்லூரி"
    };

    document.title = titles[language];

    // Translate image alternative text
    document.querySelectorAll("img").forEach((img, index) => {

        const number = index + 1;

        if (img.alt.includes("Classroom Activity")) {
            img.alt = language === "si"
                ? `පන්තිකාමර ක්‍රියාකාරකම ${number}`
                : language === "ta"
                ? `வகுப்பறைச் செயல்பாடு ${number}`
                : `Classroom Activity ${number}`;
        }

        if (img.alt.includes("College Event")) {
            img.alt = language === "si"
                ? `විද්‍යාලීය උත්සවය ${number}`
                : language === "ta"
                ? `கல்லூரி நிகழ்வு ${number}`
                : `College Event ${number}`;
        }

        if (img.alt.includes("Student Activity")) {
            img.alt = language === "si"
                ? `ශිෂ්‍ය ක්‍රියාකාරකම ${number}`
                : language === "ta"
                ? `மாணவர் செயல்பாடு ${number}`
                : `Student Activity ${number}`;
        }

        if (img.alt.includes("Achievement")) {
            img.alt = language === "si"
                ? `ජයග්‍රහණය ${number}`
                : language === "ta"
                ? `சாதனை ${number}`
                : `Achievement ${number}`;
        }
    });

    // Back to top accessibility label
    const topLabels = {
        en: "Back to top",
        si: "ඉහළට යන්න",
        ta: "மேலே செல்ல"
    };

    topButton.setAttribute("aria-label", topLabels[language]);

    // Save selected language
    localStorage.setItem("websiteLanguage", language);
}


// Language selector
languageSelect.addEventListener("change", function () {
    changeLanguage(this.value);
});

// Restore previously selected language
const savedLanguage =
    localStorage.getItem("websiteLanguage") || "en";

languageSelect.value = savedLanguage;
changeLanguage(savedLanguage);