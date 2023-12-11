var myQuestions = [
	{
        SectionTitle: "HTML Basics",
		question: "Which HTML element is used to define the main content area of a web page??",
		answers: {
			 A: "<body>",
             B: "<div>",
             C: "<section>",
		},
		correctAnswer: "A"
	},
	{
        SectionTitle: "HTML Basics",
		question: "Which HTML attribute is used to specify an image's alternative text for accessibility purposes?",
		answers: {
			A:"alt",
            B:"title",
            C:"src",
		},
		correctAnswer: "A"
	},

    {
        SectionTitle: "HTML Basics:",
        question: "How do you create a bulleted list in HTML?",
        answers : {
            A:"Use the <ul> tag to enclose the list items, and place each item within an <li> tag.",
            B:"Nest the <li> tag within the <ul> tag, and add the bullet point in the <li> content.",
            C:"Use a combination of <ul>, <li>, and <p> tags to define the list structure.",

        },
        correctAnswer: "A"
    
    },    

    {
    SectionTitle: "CSS Fundamentals",
    question :"Which CSS property is used to set the font family of an element?",
    answers: {
    A: "font-style", 
    B: "font-weight",
    C: "font-family",

    },
correctAnswer: "A"

    },

{
SectionTitle: "CSS Fundamentals",
    question :"Which CSS unit is used to specify the width of an element in pixels?",
    answers:{
    A: "px" ,
    B: "em",
    C: "%",

    },
    correctAnswer:"A" 
},

{
    SectionTitle: "CSS Fundamentals",
    question :"Which CSS property is used to define a border around an element?",
    answers: {
    A: "border",
    B: "border-width",
    C: "border-style",

    },
    correctAnswer:"B",
},

{
    SectionTitle: "Javascript Fundamentals",
    question :"What is the primary purpose of JavaScript?",
    answers: {
   A: "To create dynamic and interactive web pages.", 
   B: "To handle server-side logic and data processing.",
   C: "To design user interfaces and layout elements.",
    },
    correctAnswer:"A",
},

{
    SectionTitle: "Javascript Fundamentals",
    question :"What is the syntax for creating an alert box in JavaScript?",
    answers: {
 A: alert("Message"),
 B: prompt("Question", "Default value"),
 C: confirm("Do you want to proceed?"),

    },
    correctAnswer:"A",
},

{
    SectionTitle: "Javascript Fundamentals",
    question :"Which JavaScript method is used to access and modify the DOM (Document Object Model)?",
    answers: {
A: querySelector(),
B: getElementById(),
C: getElementsByTagName(),

    },
    correctAnswer:"B",
},

];

export function questions() {
var myQuestions;
}

var sectionOneTitle = "HTML Basics"

var questionOneHTML = "Which HTML element is used to define the main content area of a web page?"
// A. <body>
// B. <div>
// C. <section>
// correct answer A
var questionTwoHTML = "Which HTML attribute is used to specify an image's alternative text for accessibility purposes?"
// A. alt
// B. title
// C. src
// correct answer A
var questionThreeHTML = "How do you create a bulleted list in HTML?"
// A. Use the <ul> tag to enclose the list items, and place each item within an <li> tag.
// B. Nest the <li> tag within the <ul> tag, and add the bullet point in the <li> content.
// C. Use a combination of <ul>, <li>, and <p> tags to define the list structure.
// correct answer A


// CSS Fundamentals:

// // 1. Which CSS property is used to set the font family of an element?

// A. font-style (Correct)
// B. font-weight
// C. font-family

// 3. Which CSS unit is used to specify the width of an element in pixels?

// A. px (Correct)
// B. em
// C. %


// 5. Which CSS property is used to define a border around an element?

// A. border
// B. border-width (Correct)
// C. border-style

// Javascipt Bit
// 1.What is the primary purpose of JavaScript?

// A. To create dynamic and interactive web pages. (Correct)
// B. To handle server-side logic and data processing.
// C. To design user interfaces and layout elements.

// 2. Which JavaScript method is used to access and modify the DOM (Document Object Model)?

// A. getElementById() (Correct)
// B. querySelector()
// C. getElementsByTagName()

// 3. How do you create a JavaScript function?

// A. Using the function keyword followed by the function name and parentheses. (Correct)
// B. Enclosing the function code within curly braces {} without the function keyword.
// C. Using the def keyword followed by the function name and parentheses.

// 4. What is the purpose of the document.addEventListener() method?

// A. To attach event listeners to HTML elements to respond to user interactions. (Correct)
// B. To dynamically create HTML elements and modify the DOM.
// C. To manage the browser's navigation history and URL.

// 5. What is the syntax for creating an alert box in JavaScript?

// A. alert("Message"), (Correct)
// B. prompt("Question", "Default value"),
// C. confirm("Do you want to proceed?"),