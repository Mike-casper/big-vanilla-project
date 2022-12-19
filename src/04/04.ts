const ages = [18, 20, 99, 91, 79, 1, 42, 19, 15, 5];

export const predicate = (age: number)=>  age > 90;


type CoursesType = {
    title: string
    price: number
}

const courses = [
    {title: "css", price: 100},
    {title: "JS", price: 200},
    {title: "JS", price: 250}
]

export const cheapPredicate = (courses: CoursesType) => {
    return courses.price < 201;
}
const chipCourses = [
    {title: "css", price: 100},
    {title: "JS", price: 200},
];

