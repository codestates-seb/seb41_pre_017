const formData = [
    [
        { 
            type: 0,
            id: 'title',
            label1: "Title",
            label2: "Be specific and imagine you're asking a question to another person.",
            placeholder: "e.g. Is there an R function for finding the index of an element in a vector?"
        },
        {
            title: "Writing a good title",
            content: "Your title should summarize the problem.",
            content2: "You might find that you have a better idea of your title after writing out the rest of the question."
        }
    ],
    [
        {
            type: 1,
            id: 'problem',
            label1: "What are the details of your problem?",
            label2: "Introduce the problem and expand on what you put in the title. Minimum 20 characters."
        },
        {
            title: "Introduce the problem",
            content: "Explain how you encountered the problem you're trying to solve, and any difficulties that have prevented you from solving it yourself."
        }
    ],
    [
        {
            type: 1,
            id: 'expect',
            label1: "What did you try and what were you expecting?",
            label2: "Describe what you tried, what you expected to happen, and what actually resulted. Minimum 20 characters."
        },
        {
            title: "Expand on the problem",
            content: "Show what you've tried, tell us what happened, and why it didn't meet your needs.",
            content2: "Not all questions benefit from including code, but if your problem is better understood with code you've written, you should include a minimal, reproducible example.",
            content3: "Please make sure to post code and errors as text directly to the question (and not as images), and format them appropriately."
        }
    ],
    [
        {
            type: 0,
            id: 'tag',
            label1: "Tags",
            label2: "Add up to 5 tags to describe what your question is about. Start typing to see suggestions.",
            placeholder: "e.g (spring laravel ajax)"
        },
        {
            title: "Adding tags",
            content: "Tags help ensure that your question will get attention from the right people.",
            content2: "Tag things in more than one way so people can find them more easily. Add tags for product lines, projects, teams, and the specific technologies or languages used.",
            content3: "Learn more about tagging"
        }
    ]
]

export default formData;