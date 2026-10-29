(() => {
    "use strict";

    const TOTAL_QUESTIONS = 20;

    const questions = [
        {
            type: "single",
            title: "What does the HTML <hr> element represent?",
            hint: "Think about meaning, not just appearance.",
            options: [
                {
                    text: "A thematic break between sections of content",
                    correct: true,
                },
                {
                    text: "A horizontal line that must always be visible",
                    correct: false,
                },
                { text: "A container for text and images", correct: false },
                {
                    text: "An empty paragraph with extra spacing",
                    correct: false,
                },
            ],
            explanation:
                "The <hr> element represents a thematic break, such as a shift in topic or scene. Browsers commonly display it as a horizontal rule, but its meaning is more important than its appearance.",
        },
        {
            type: "single",
            title: "Which HTML element is appropriate for a thematic break?",
            hint: "Choose the semantic HTML element.",
            options: [
                { text: "<line>", correct: false },
                { text: "<break>", correct: false },
                { text: "<hr>", correct: true },
                { text: "<border>", correct: false },
            ],
            explanation:
                "<hr> is the standard HTML element for a thematic break. Elements such as <line> and <border> are not standard HTML elements.",
        },
        {
            type: "single",
            title: "Is <hr> a void element?",
            hint: "Consider whether it can contain child elements.",
            options: [
                {
                    text: "Yes. It has no content and no closing tag.",
                    correct: true,
                },
                { text: "No. It must contain text.", correct: false },
                { text: "Only when CSS is enabled.", correct: false },
                { text: "Only inside an article.", correct: false },
            ],
            explanation:
                "<hr> is a void element. Write <hr> or <hr />; do not use a separate </hr> closing tag or place content inside it.",
        },
        {
            type: "single",
            title: "How do you create a solid top border that is 2px wide?",
            hint: "Which CSS declaration uses the correct order?",
            code: ".divider {\n    /* choose the correct declaration */\n}",
            options: [
                { text: "border-top: solid 2px;", correct: true },
                { text: "line-top: 2px solid;", correct: false },
                { text: "border-style: 2px solid top;", correct: false },
                { text: "top-border: 2px;", correct: false },
            ],
            explanation:
                "The border shorthand accepts width, style, and color values in flexible order. `border-top: solid 2px;` creates a 2px solid top border.",
        },
        {
            type: "multi",
            title: "Which values are valid CSS border styles?",
            hint: "Select all that apply.",
            options: [
                { text: "solid", correct: true },
                { text: "dashed", correct: true },
                { text: "dotted", correct: true },
                { text: "double", correct: true },
                { text: "wavy", correct: false },
            ],
            explanation:
                "Common valid border styles include none, solid, dashed, dotted, double, groove, ridge, inset, and outset. `wavy` is not a standard value for border-style.",
        },
        {
            type: "single",
            title: "Which property changes the color of a border?",
            hint: "You can apply it to one side or all sides.",
            options: [
                { text: "border-color", correct: true },
                { text: "border-paint", correct: false },
                { text: "line-color", correct: false },
                { text: "outline-fill", correct: false },
            ],
            explanation:
                "`border-color` sets border colors. You can also target individual sides with properties such as `border-top-color`.",
        },
        {
            type: "single",
            title: "What does margin control?",
            hint: "Think about the space outside an element's border.",
            options: [
                { text: "Space outside the border", correct: true },
                { text: "Space between text and its border", correct: false },
                { text: "The border's color", correct: false },
                { text: "The font size inside an element", correct: false },
            ],
            explanation:
                "Margin creates space outside an element's border, helping separate it from neighboring elements.",
        },
        {
            type: "single",
            title: "What does padding control?",
            hint: "Think about the space between content and border.",
            options: [
                {
                    text: "Space between the content and the border",
                    correct: true,
                },
                { text: "Space between two separate elements", correct: false },
                { text: "The thickness of a border only", correct: false },
                { text: "The gap between browser tabs", correct: false },
            ],
            explanation:
                "Padding is the inner space between an element's content and its border. Unlike margin, it is inside the border.",
        },
        {
            type: "multi",
            title: "Which statements about margin and padding are correct?",
            hint: "Select every correct statement.",
            options: [
                {
                    text: "Margin creates space outside the border.",
                    correct: true,
                },
                {
                    text: "Padding creates space inside the border.",
                    correct: true,
                },
                { text: "Padding can have negative values.", correct: false },
                {
                    text: "Margin and padding always do exactly the same thing.",
                    correct: false,
                },
            ],
            explanation:
                "Margin is outside the border, while padding is between the content and border. CSS padding values cannot be negative; margins can be negative.",
        },
        {
            type: "single",
            title: "What does this CSS do?",
            hint: "Read the shorthand declaration.",
            code: ".divider {\n    margin: 24px 0;\n}",
            options: [
                {
                    text: "Adds 24px of vertical margin and 0 horizontal margin",
                    correct: true,
                },
                {
                    text: "Adds 24px of padding on all four sides",
                    correct: false,
                },
                { text: "Sets a 24px border width", correct: false },
                { text: "Makes the divider 24px wide", correct: false },
            ],
            explanation:
                "With two margin values, the first applies to top and bottom, and the second applies to left and right. Therefore, this adds 24px vertically and 0px horizontally.",
        },
        {
            type: "single",
            title: "Which declaration creates a dotted divider in terracotta?",
            hint: "Assume the color is #e88768.",
            options: [
                { text: "border-top: 2px dotted #e88768;", correct: true },
                { text: "border-top: dotted #e88768 2;", correct: false },
                { text: "border-color: dotted #e88768;", correct: false },
                { text: "divider: 2px dotted terracotta;", correct: false },
            ],
            explanation:
                "`border-top` is a shorthand for the top border. It accepts a width, a style, and a color. Use a valid CSS length such as `2px`.",
        },
        {
            type: "multi",
            title: "Which properties can style an element's borders?",
            hint: "Select all valid CSS properties.",
            options: [
                { text: "border-width", correct: true },
                { text: "border-style", correct: true },
                { text: "border-color", correct: true },
                { text: "border-radius", correct: true },
                { text: "border-font", correct: false },
            ],
            explanation:
                "`border-width`, `border-style`, and `border-color` control the border's thickness, appearance, and color. `border-radius` rounds corners. `border-font` is not a CSS property.",
        },
        {
            type: "single",
            title: "What happens with this declaration?",
            hint: "The element already has a 1px solid border.",
            code: ".card {\n    border: none;\n}",
            options: [
                { text: "The border is removed.", correct: true },
                { text: "The border becomes dotted.", correct: false },
                {
                    text: "The border becomes transparent but keeps its style.",
                    correct: false,
                },
                { text: "The border becomes 1px thick.", correct: false },
            ],
            explanation:
                "`border: none` removes the visible border by setting its style to none. It is a common reset when styling an <hr> from scratch.",
        },
        {
            type: "single",
            title: "Which CSS is a reliable starting point for a custom <hr>?",
            hint: "You want a 1px line with a custom color.",
            options: [
                {
                    text: "hr { border: 0; border-top: 1px solid #d8cec5; }",
                    correct: true,
                },
                {
                    text: "hr { font-size: 1px; color: #d8cec5; }",
                    correct: false,
                },
                { text: "hr { text-decoration: line; }", correct: false },
                { text: "hr { border-style: color; }", correct: false },
            ],
            explanation:
                "Resetting the default border and setting a specific top border gives you predictable control over the divider's thickness, style, and color.",
        },
        {
            type: "single",
            title: "What is the usual effect of width: 50% on a block divider?",
            hint: "Assume its containing block is 400px wide.",
            code: "hr {\n    width: 50%;\n}",
            options: [
                { text: "Its width is 200px.", correct: true },
                { text: "Its width is always 50px.", correct: false },
                { text: "Its height becomes 50%.", correct: false },
                { text: "It fills the entire viewport.", correct: false },
            ],
            explanation:
                "A percentage width is relative to the containing block's width. Half of 400px is 200px.",
        },
        {
            type: "multi",
            title: "Which statements about the CSS box model are correct?",
            hint: "Select all correct statements.",
            options: [
                { text: "Content is the innermost area.", correct: true },
                {
                    text: "Padding sits between content and border.",
                    correct: true,
                },
                { text: "Border sits outside padding.", correct: true },
                {
                    text: "Margin sits inside the content area.",
                    correct: false,
                },
            ],
            explanation:
                "From the inside out, the box model consists of content, padding, border, and margin. Margin is the outer spacing around the border.",
        },
        {
            type: "single",
            title: "Which declaration adds space above and below an <hr>?",
            hint: "Use the logical block-axis shorthand.",
            options: [
                { text: "margin-block: 2rem;", correct: true },
                { text: "padding-color: 2rem;", correct: false },
                { text: "border-block: margin;", correct: false },
                { text: "spacing-y: 2rem;", correct: false },
            ],
            explanation:
                "`margin-block` sets the start and end margins in the block direction. In a typical horizontal writing mode, these correspond to the top and bottom margins.",
        },
        {
            type: "single",
            title: "Why might a developer use border-bottom instead of <hr>?",
            hint: "Consider what the line means in the document.",
            options: [
                {
                    text: "To visually separate or underline an existing element without adding a thematic break",
                    correct: true,
                },
                {
                    text: "Because <hr> cannot be styled with CSS",
                    correct: false,
                },
                {
                    text: "Because border-bottom creates semantic HTML automatically",
                    correct: false,
                },
                {
                    text: "Because <hr> only works inside tables",
                    correct: false,
                },
            ],
            explanation:
                "Use <hr> when the content has a thematic break. A border on an existing element is useful for decoration or visual separation when no semantic break is intended.",
        },
        {
            type: "single",
            title: "What is the result of this shorthand?",
            hint: "Remember the four-value order.",
            code: ".box {\n    margin: 4px 8px 12px 16px;\n}",
            options: [
                {
                    text: "Top 4px, right 8px, bottom 12px, left 16px",
                    correct: true,
                },
                {
                    text: "Top 4px, right 16px, bottom 12px, left 8px",
                    correct: false,
                },
                {
                    text: "Top and bottom 4px, left and right 8px",
                    correct: false,
                },
                { text: "16px margin on every side", correct: false },
            ],
            explanation:
                "Four-value margin shorthand follows clockwise order: top, right, bottom, left. A helpful memory trick is TRBL (trouble).",
        },
        {
            type: "multi",
            title: "Which are good practices when styling dividers?",
            hint: "Choose all appropriate practices.",
            options: [
                {
                    text: "Use semantic <hr> when there is a thematic break.",
                    correct: true,
                },
                {
                    text: "Choose border styles and colors for sufficient contrast.",
                    correct: true,
                },
                {
                    text: "Use margin to control space around the divider.",
                    correct: true,
                },
                {
                    text: "Add a closing </hr> tag to every divider.",
                    correct: false,
                },
                {
                    text: "Use multiple empty paragraphs for every spacing adjustment.",
                    correct: false,
                },
            ],
            explanation:
                "Use semantic HTML where it fits, control appearance with CSS, and manage surrounding space with margin. <hr> is a void element, and CSS spacing is preferable to piles of empty paragraphs.",
        },
    ];

    const elements = {
        progressCount: document.querySelector("#progress-count"),
        progressBar: document.querySelector("#progress-bar"),
        progressFill: document.querySelector("#progress-fill"),
        progressCaption: document.querySelector("#progress-caption"),
        questionType: document.querySelector("#question-type"),
        questionIndex: document.querySelector("#question-index"),
        questionTitle: document.querySelector("#question-title"),
        questionHint: document.querySelector("#question-hint"),
        questionCode: document.querySelector("#question-code"),
        codeContent: document.querySelector("#code-content"),
        answers: document.querySelector("#answers"),
        answerForm: document.querySelector("#answer-form"),
        answerNotice: document.querySelector("#answer-notice"),
        checkButton: document.querySelector("#check-button"),
        feedback: document.querySelector("#feedback"),
        feedbackSymbol: document.querySelector("#feedback-symbol"),
        feedbackTitle: document.querySelector("#feedback-title"),
        feedbackText: document.querySelector("#feedback-text"),
        nextButton: document.querySelector("#next-button"),
        quizPanel: document.querySelector("#quiz-panel"),
        quizLayout: document.querySelector(".quiz-layout"),
        finishScreen: document.querySelector("#finish-screen"),
        resultTitle: document.querySelector("#result-title"),
        finalScore: document.querySelector("#final-score"),
        resultMessage: document.querySelector("#result-message"),
        resultFill: document.querySelector("#result-fill"),
        correctCount: document.querySelector("#correct-count"),
        incorrectCount: document.querySelector("#incorrect-count"),
        finalPercent: document.querySelector("#final-percent"),
        restartButton: document.querySelector("#restart-button"),
    };

    let quizQuestions = [];
    let currentIndex = 0;
    let score = 0;
    let answered = false;
    let wrongCount = 0;

    function shuffle(items) {
        const result = [...items];

        for (let i = result.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [result[i], result[j]] = [result[j], result[i]];
        }

        return result;
    }

    function startQuiz() {
        quizQuestions = shuffle(questions).map((question) => ({
            ...question,
            options: shuffle(question.options),
        }));

        currentIndex = 0;
        score = 0;
        wrongCount = 0;
        answered = false;

        elements.quizLayout.hidden = false;
        elements.finishScreen.hidden = true;
        elements.quizPanel.hidden = false;

        renderQuestion();
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function renderQuestion() {
        answered = false;

        const question = quizQuestions[currentIndex];
        const number = currentIndex + 1;
        const progress = (currentIndex / TOTAL_QUESTIONS) * 100;

        elements.progressCount.textContent = String(number).padStart(2, "0");
        elements.progressFill.style.width = `${progress}%`;
        elements.progressBar.setAttribute(
            "aria-valuenow",
            String(currentIndex),
        );
        elements.progressCaption.textContent =
            currentIndex === 0
                ? "A good line starts with a good question."
                : `${currentIndex} question${currentIndex === 1 ? "" : "s"} completed. Keep going.`;

        elements.questionType.textContent =
            question.type === "multi" ? "MULTIPLE ANSWERS" : "SINGLE ANSWER";
        elements.questionIndex.textContent = `QUESTION ${String(number).padStart(2, "0")} / ${TOTAL_QUESTIONS}`;
        elements.questionTitle.textContent = question.title;
        elements.questionHint.textContent = question.hint || "";

        elements.questionCode.hidden = !question.code;

        if (question.code) {
            elements.codeContent.textContent = question.code;
        }

        elements.answers.replaceChildren();
        elements.answerNotice.textContent = "";
        elements.feedback.hidden = true;
        elements.feedback.classList.remove("is-incorrect");
        elements.checkButton.hidden = false;
        elements.checkButton.disabled = false;
        elements.nextButton.textContent =
            currentIndex === TOTAL_QUESTIONS - 1
                ? "See my results"
                : "Next question →";

        question.options.forEach((option, index) => {
            const wrapper = document.createElement("div");
            wrapper.className = "answer-option";

            const input = document.createElement("input");
            input.type = question.type === "multi" ? "checkbox" : "radio";
            input.name = "answer";
            input.id = `answer-${number}-${index}`;
            input.value = String(index);

            const label = document.createElement("label");
            label.htmlFor = input.id;

            const marker = document.createElement("span");
            marker.className = "option-marker";

            const letter = document.createElement("span");
            letter.className = "option-letter";
            letter.textContent = String.fromCharCode(65 + index);
            marker.append(letter);

            const text = document.createElement("span");
            text.className = "option-text";
            text.textContent = option.text;

            label.append(marker, text);
            wrapper.append(input, label);
            elements.answers.append(wrapper);
        });
    }

    function getSelectedAnswers() {
        return [...elements.answers.querySelectorAll("input:checked")].map(
            (input) => Number(input.value),
        );
    }

    function checkAnswer(event) {
        event.preventDefault();

        if (answered) return;

        const selected = getSelectedAnswers();

        if (selected.length === 0) {
            elements.answerNotice.textContent =
                "Choose an answer before continuing.";
            return;
        }

        const question = quizQuestions[currentIndex];
        const correctIndexes = question.options
            .map((option, index) => (option.correct ? index : -1))
            .filter((index) => index !== -1);

        const isCorrect =
            selected.length === correctIndexes.length &&
            selected.every((index) => correctIndexes.includes(index));

        answered = true;

        if (isCorrect) {
            score++;
        } else {
            wrongCount++;
        }

        elements.answerNotice.textContent = "";
        elements.checkButton.hidden = true;
        elements.feedback.hidden = false;
        elements.feedback.classList.toggle("is-incorrect", !isCorrect);
        elements.feedbackSymbol.textContent = isCorrect ? "✓" : "!";
        elements.feedbackTitle.textContent = isCorrect
            ? "Exactly right."
            : "Not quite.";
        elements.feedbackText.textContent = question.explanation;

        [...elements.answers.querySelectorAll(".answer-option")].forEach(
            (wrapper, index) => {
                const input = wrapper.querySelector("input");
                input.disabled = true;

                if (question.options[index].correct) {
                    wrapper.classList.add("is-correct");
                } else if (input.checked) {
                    wrapper.classList.add("is-wrong");
                }
            },
        );

        const progress = ((currentIndex + 1) / TOTAL_QUESTIONS) * 100;
        elements.progressFill.style.width = `${progress}%`;
        elements.progressBar.setAttribute(
            "aria-valuenow",
            String(currentIndex + 1),
        );
        elements.progressCaption.textContent = `${currentIndex + 1} of ${TOTAL_QUESTIONS} questions answered.`;

        elements.feedback.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
        });
    }

    function nextQuestion() {
        if (!answered) return;

        if (currentIndex < TOTAL_QUESTIONS - 1) {
            currentIndex++;
            renderQuestion();
            elements.quizPanel.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        } else {
            showResults();
        }
    }

    function showResults() {
        elements.quizLayout.hidden = true;
        elements.finishScreen.hidden = false;

        const percent = Math.round((score / TOTAL_QUESTIONS) * 100);

        elements.finalScore.textContent = String(score);
        elements.correctCount.textContent = String(score);
        elements.incorrectCount.textContent = String(TOTAL_QUESTIONS - score);
        elements.finalPercent.textContent = `${percent}%`;
        elements.resultFill.style.width = `${percent}%`;

        if (percent >= 90) {
            elements.resultTitle.textContent = "Beautifully done.";
            elements.resultMessage.textContent =
                "Excellent work. You understand the essentials of dividers, borders, and spacing. Keep building.";
        } else if (percent >= 70) {
            elements.resultTitle.textContent = "A solid line.";
            elements.resultMessage.textContent =
                "Good progress. Review any tricky explanations and practise applying these CSS properties in a real layout.";
        } else if (percent >= 50) {
            elements.resultTitle.textContent = "Keep drawing.";
            elements.resultMessage.textContent =
                "You are getting there. Revisit the lesson, especially the difference between margin, padding, and border, then try again.";
        } else {
            elements.resultTitle.textContent = "Every expert starts here.";
            elements.resultMessage.textContent =
                "Take another look at the lesson and come back for a fresh attempt. Learning the fundamentals takes practice.";
        }

        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    elements.answerForm.addEventListener("submit", checkAnswer);
    elements.nextButton.addEventListener("click", nextQuestion);
    elements.restartButton.addEventListener("click", startQuiz);

    startQuiz();
})();
