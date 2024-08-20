const tasks = [
    {
      id: "c104",
      title: "Help me",
      description: "This task is about helping with the new feature implementation.",
      status: "inProgress",
      priority: "high",
      dueDate: "2024-09-24",
      labels: [
        { id: "l101", title: "Urgent", color: "#ff6b6b" },
        { id: "l102", title: "Frontend", color: "#1e90ff" }
      ],
      members: [
        { _id: "u102", fullname: "Sean Mamistalov", imgUrl: "" },
        { _id: "u103", fullname: "Pavel Yelsukov", imgUrl: "" }
      ],
      comments: [
        {
          id: "ZdPnm",
          title: "also @yaronb please CR this",
          createdAt: 1590999817436,
          byMember: { _id: "u101", fullname: "Daniel Yacovi", imgUrl: "" }
        }
      ],
      checklists: [
        {
          id: "YEhmF",
          title: "Checklist",
          todos: [
            { id: "212jX", title: "To Do 1", isDone: false },
            { id: "321jX", title: "To Do 2", isDone: true }
          ]
        }
      ],
      style: { backgroundColor: "#26de81" }
    }
  ];
  
  export function getTaskById(taskId) {
    return tasks.find(task => task.id === taskId);
  }
  
  