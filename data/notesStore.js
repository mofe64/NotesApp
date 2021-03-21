import categories from './categoryStore';
const notes = [
    {
        id: 1,
        title: "I'm Tired of Work ",
        content: "Sample Content 1",
        date: "Jan 27 2021",
        category: categories[0],
        deleted: false
    },
    {
        id: 2,
        title: "Things To Work On",
        content: "Sample Content 2",
        date: "Jan 28 2021",
        category: categories[0],
        deleted: false
    },
    {
        id: 3,
        title: "The Efficacy of FlatList components in React Native",
        content: "Sample Content 3",
        date: "Jan 28 2021",
        category: categories[1],
        deleted: false
    },
    {
        id: 4,
        title: "Sample Title 4",
        content: "Sample Content 4",
        date: "Jan 29 2021",
        category: categories[1],
        deleted: false
    }
]

export default notes;