import {cheapPredicate, predicate} from "./04";

test ("should take old men older then 90", ()=>{
    const ages = [18, 20, 99, 91, 79, 1, 42, 19, 15, 5];

    const oldAges = ages.filter(predicate);

    expect(oldAges.length).toBe(2);
    expect(oldAges[0]).toBe(99);
})

test ("should take courses chipper 160", ()=>{
    const courses = [
        {title: "css", price: 100},
        {title: "JS", price: 200},
        {title: "JS", price: 250}
    ]

    // const chipCourses = courses.filter(cheapPredicate);
    const chipCourses = courses.filter(courses => courses.price < 201);

    expect(chipCourses.length).toBe(2);
    expect(chipCourses[0].title).toBe("css");
    expect(chipCourses[1].title).toBe("JS");
})

test("get only uncomplieted tasks", ()=>{
    const tasks = [
        {id:1, title: "Bread", isDone:false},
        {id:2, title: "Milk", isDone:true},
        {id:3, title: "Solt", isDone:false},
        {id:4, title: "Sugar", isDone:true},
        {id:5, title: "Www", isDone:false},
    ]
    const completedTasks = tasks.filter(task=>!task.isDone)
    expect(completedTasks.length).toBe(3);
    expect(completedTasks[0].id).toBe(1);
    expect(completedTasks[1].id).toBe(3);
    expect(completedTasks[2].id).toBe(5);
})



