const tasks = [
  {
    id: "c101",
    title: "Replace logo",
    description: "Update the company logo on the website.",
    labels: [
      { id: "l1", title: "Design", color: "#f0f0f0" },
      { id: "l2", title: "Urgent", color: "#ff4d4d" },
    ],
    members: [
      { _id: "u102", fullname: "Sean Mamistalov" },
      { _id: "u104", fullname: "Pavel Yelsukov" },
    ],
    dueDate: "2024-08-25T00:00:00Z",
    priority: "High",
    status: "In Progress",
    comments: [
      {
        id: "cm1",
        byMember: { _id: "u102", fullname: "Sean Mamistalov" },
        title: "Started working on the logo update.",
        createdAt: "2024-08-15T10:00:00Z",
      },
      {
        id: "cm2",
        byMember: { _id: "u104", fullname: "Pavel Yelsukov" },
        title: "Reviewing the new logo designs.",
        createdAt: "2024-08-16T11:00:00Z",
      },
    ],
    checklists: [
      {
        id: "ch1",
        title: "Checklist 1",
        todos: [
          { id: "t1", title: "Design new logo", isDone: true },
          { id: "t2", title: "Get approval", isDone: false },
        ],
      },
    ],
  },
  {
    id: "c102",
    title: "Add Samples",
    description: "Include sample data for the new feature.",
    labels: [{ id: "l3", title: "Development", color: "#b3e5fc" }],
    members: [{ _id: "u105", fullname: "Daniel Yacovi" }],
    dueDate: "2024-09-01T00:00:00Z",
    priority: "Medium",
    status: "To Do",
    comments: [],
    checklists: [],
  },
  {
    id: "c104",
    title: "Help me",
    description:
      "This task is about helping with the new feature implementation.",
    status: "In Progress",
    priority: "High",
    dueDate: "2024-09-24T00:00:00Z",
    labels: [
      { id: "l101", title: "Urgent", color: "#ff6b6b" },
      { id: "l102", title: "Frontend", color: "#1e90ff" },
    ],
    members: [
      { _id: "u105", fullname: "Daniel Yacovi", imgUrl: "" },
      { _id: "u104", fullname: "Pavel Yelsukov", imgUrl: "" },
    ],
    comments: [
      {
        id: "ZdPnm",
        title: "also @yaronb please CR this",
        createdAt: "2024-08-15T12:00:00Z",
        byMember: { _id: "u102", fullname: "Sean Mamistalov", imgUrl: "" },
      },
    ],
    checklists: [
      {
        id: "YEhmF",
        title: "Checklist",
        todos: [
          { id: "212jX", title: "To Do 1", isDone: false },
          { id: "321jX", title: "To Do 2", isDone: true },
        ],
      },
    ],
    style: { backgroundColor: "#26de81" },
  },
];

export function getTaskById(taskId) {
  return tasks.find((task) => task.id === taskId);
}
