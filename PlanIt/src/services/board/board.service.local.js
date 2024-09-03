import { storageService } from "../async-storage.service";
import { loadFromStorage, makeId, saveToStorage } from "../util.service";
import { userService } from "../user";

const STORAGE_KEY = "board";

export const boardService = {
  query,
  getById,
  save,
  remove,
  addBoardMsg,
  getStarredBoards,
  getLabels,
};
window.cs = boardService;

const data = [
  {
    _id: "b1",
    title: "Final Proj",
    isStarred: true,
    archivedAt: 1589983468418,
    createdBy: {
      _id: "u101",
      fullname: "Daniel Yacovi",
      imgUrl: "",
    },
    style: {
      background: { name: '', first: '', second: '' },
    },
    labels: [
      {
        id: "l101",
        title: "Done",
        color: "#4bce97",
      },
      {
        id: "l102",
        title: "Progress",
        color: "#9f8fef",
      },
      {
        id: "l103",
        title: "Full Of Bugs",
        color: "#579dff",
      },
      {
        id: "l104",
        title: "Check Before Done",
        color: "#f87168",
      },
      {
        id: "l105",
        title: "Next Round",
        color: "#fea362",
      },
      {
        id: "l106",
        title: "To Do",
        color: "#9f8fef",
      },
    ],
    members: [
      {
        _id: "u102",
        fullname: "Sean Mamistalov",
        color: "rgb(255, 152, 0)",
        imgUrl: "",
      },
      {
        _id: "u103",
        fullname: "Pavel Yelsukov",
        color: "rgb(0, 150, 136)",
        imgUrl: "",
      },
      {
        _id: "u101",
        fullname: "Daniel Yacovi",
        color: "rgb(33, 150, 243)",
        imgUrl: "",
      },
    ],
    groups: [
      {
        id: "g101",
        title: "Backlog Server",
        archivedAt: 1589983468418,
        tasks: [
          {
            id: "c101",
            title: "Fix Login Bug",
            archivedAt: null,
            status: "inProgress",
            priority: "high",
            dueDate: "2024-09-20",
            description: "Resolve the issue where users can't log in.",
            comments: [
              {
                id: "ZdPnm",
                title: "@seanm please review the login logic.",
                createdAt: 1590999817436,
                byMember: {
                  _id: "u101",
                  fullname: "Daniel Yacovi",
                  imgUrl: "",
                },
              },
            ],
            checklists: [
              {
                id: "YEhmF",
                title: "Checklist",
                todos: [
                  {
                    id: "212jX",
                    title: "Verify login error handling",
                    isDone: false,
                  },
                ],
              },
            ],
            members: [
              {
                _id: "u102",
                fullname: "Sean Mamistalov",
                color: "rgb(255, 152, 0)",
                imgUrl: "",
              },
            ],
            labels: [
              {
                id: "l103",
                title: "bug",
                color: "#ff4757",
              },
            ],
            byMember: {
              _id: "u103",
              fullname: "Pavel Yelsukov",
              color: "rgb(0, 150, 136)",
              imgUrl: "",
            },
            style: {
              backgroundColor: "#26de81",
            },
          },
          {
            id: "c102",
            title: "Implement Dark Mode",
            archivedAt: null,
            status: "todo",
            priority: "medium",
            dueDate: "2024-09-22",
            description: "Add a dark mode toggle to the settings.",
            comments: [],
            checklists: [
              {
                id: "YEhmF2",
                title: "Checklist",
                todos: [
                  {
                    id: "212jX2",
                    title: "Design dark mode color scheme",
                    isDone: false,
                  },
                ],
              },
            ],
            members: [
              {
                _id: "u103",
                fullname: "Pavel Yelsukov",
                color: "rgb(0, 150, 136)",
                imgUrl: "",
              },
              {
                _id: "u101",
                fullname: "Daniel Yacovi",
                color: "rgb(33, 150, 243)",
                imgUrl: "",
              },
            ],
            labels: [
              {
                id: "l104",
                title: "feature",
                color: "#1e90ff",
              },
            ],
            byMember: {
              _id: "u103",
              fullname: "Pavel Yelsukov",
              color: "rgb(0, 150, 136)",
              imgUrl: "",
            },
            style: {
              backgroundColor: "#fd9644",
            },
          },
        ],
        style: {},
      },
      {
        id: "g102",
        title: "Backlog Client",
        tasks: [
          {
            id: "c103",
            title: "Refactor Dashboard",
            archivedAt: null,
            status: "inProgress",
            priority: "high",
            dueDate: "2024-09-25",
            description: "Clean up the dashboard code and improve performance.",
            comments: [
              {
                id: "ZdPnm3",
                title: "This needs to be done ASAP.",
                createdAt: 1590999817437,
                byMember: {
                  _id: "u101",
                  fullname: "Daniel Yacovi",
                  imgUrl: "",
                },
              },
            ],
            checklists: [
              {
                id: "YEhmF3",
                title: "Checklist",
                todos: [
                  {
                    id: "212jX3",
                    title: "Optimize API calls",
                    isDone: false,
                  },
                ],
              },
            ],
            members: [
              {
                _id: "u102",
                fullname: "Sean Mamistalov",
                color: "rgb(255, 152, 0)",
                imgUrl: "",
              },

              {
                _id: "u101",
                fullname: "Daniel Yacovi",
                color: "rgb(33, 150, 243)",
                imgUrl: "",
              },
            ],
            labels: [
              {
                id: "l105",
                title: "refactor",
                color: "#ff6b81",
              },
            ],
            byMember: {
              _id: "u102",
              fullname: "Sean Mamistalov",
              color: "rgb(255, 152, 0)",
              imgUrl: "",
            },
            style: {
              backgroundColor: "#26de81",
            },
          },
          {
            id: "c104",
            title: "Help me",
            archivedAt: 1589983468418,
            status: "inProgress",
            priority: "high",
            dueDate: "2024-09-24",
            description: "Please help me to fix this bug",
            comments: [
              {
                id: "ZdPnm",
                title: "also @yaronb please CR this",
                createdAt: 1590999817436,
                byMember: {
                  _id: "u101",
                  fullname: "Daniel Yacovi",
                  imgUrl: "",
                },
              },
            ],
            checklists: [
              {
                id: "YEhmF",
                title: "Checklist",
                todos: [
                  {
                    id: "212jX",
                    title: "To Do 1",
                    isDone: false,
                  },
                ],
              },
            ],
            members: [
              {
                _id: "u101",
                fullname: "Daniel Yacovi",
                color: "rgb(33, 150, 243)",
                imgUrl: "",
              },
            ],
            labels: [
              {
                id: "l103",
                title: "full of bugs",
                color: "#579dff",
              },
            ],
            byMember: {
              _id: "u103",
              fullname: "Pavel Yelsukov",
              color: "rgb(0, 150, 136)",
              imgUrl: "",
            },
            style: {
              backgroundColor: "#26de81",
            },
          },
        ],
        style: {},
      },
      {
        id: "g103",
        title: "In development",
        archivedAt: 1589983468418,
        tasks: [
          {
            id: "c105",
            title: "Update Documentation",
            archivedAt: null,
            status: "todo",
            priority: "low",
            dueDate: "2024-09-30",
            description: "Review and update project documentation.",
            comments: [],
            checklists: [
              {
                id: "YEhmF4",
                title: "Checklist",
                todos: [
                  {
                    id: "212jX4",
                    title: "Update README file",
                    isDone: false,
                  },
                ],
              },
            ],
            members: [],
            labels: [
              {
                id: "l106",
                title: "documentation",
                color: "#a55eea",
              },
            ],
            byMember: {
              _id: "u101",
              fullname: "Daniel Yacovi",
              color: "rgb(33, 150, 243)",
              imgUrl: "",
            },
            style: {
              backgroundColor: "#fed330",
            },
          },
          {
            id: "c106",
            title: "Implement CI/CD Pipeline",
            archivedAt: null,
            status: "todo",
            priority: "high",
            dueDate: "2024-09-28",
            description: "Set up continuous integration and delivery pipeline.",
            comments: [
              {
                id: "ZdPnm6",
                title: "This will improve our deployment process.",
                createdAt: 1590999817438,
                byMember: {
                  _id: "u102",
                  fullname: "Sean Mamistalov",
                  imgUrl: "",
                },
              },
            ],
            checklists: [
              {
                id: "YEhmF6",
                title: "Checklist",
                todos: [
                  {
                    id: "212jX6",
                    title: "Research CI/CD tools",
                    isDone: false,
                  },
                ],
              },
            ],
            members: [
              {
                _id: "u101",
                fullname: "Daniel Yacovi",
                color: "rgb(33, 150, 243)",
                imgUrl: "",
              },
            ],
            labels: [
              {
                id: "l107",
                title: "deployment",
                color: "#20bf6b",
              },
            ],
            byMember: {
              _id: "u103",
              fullname: "Pavel Yelsukov",
              color: "rgb(0, 150, 136)",
              imgUrl: "",
            },
            style: {
              backgroundColor: "#26de81",
            },
          },
        ],
        style: {},
      },
      {
        id: "g104",
        title: "Done",
        archivedAt: 1589983468418,
        tasks: [
          {
            id: "c107",
            title: "Setup Dev Environment",
            archivedAt: null,
            status: "done",
            priority: "medium",
            dueDate: "2024-09-21",
            description:
              "Configure development environment for new developers.",
            comments: [],
            checklists: [
              {
                id: "YEhmF7",
                title: "Checklist",
                todos: [
                  {
                    id: "212jX7",
                    title: "Install necessary tools",
                    isDone: true,
                  },
                ],
              },
            ],
            members: [],
            labels: [
              {
                id: "l108",
                title: "setup",
                color: "#4b7bec",
              },
            ],
            byMember: {
              _id: "u101",
              fullname: "Daniel Yacovi",
              color: "rgb(33, 150, 243)",
              imgUrl: "",
            },
            style: {
              backgroundColor: "#f7b731",
            },
          },
          {
            id: "c108",
            title: "Fix Logout Bug",
            archivedAt: null,
            status: "inProgress",
            priority: "medium",
            dueDate: "2024-09-26",
            description: "Resolve the issue where users can't log out.",
            comments: [
              {
                id: "ZdPnm8",
                title: "@pavel check the session timeout.",
                createdAt: 1590999817439,
                byMember: {
                  _id: "u102",
                  fullname: "Sean Mamistalov",
                  imgUrl: "",
                },
              },
            ],
            checklists: [
              {
                id: "YEhmF8",
                title: "Checklist",
                todos: [
                  {
                    id: "212jX8",
                    title: "Check session management",
                    isDone: false,
                  },
                ],
              },
            ],
            members: [],
            labels: [
              {
                id: "l109",
                title: "bug",
                color: "#ff4757",
              },
            ],
            byMember: {
              _id: "u103",
              fullname: "Pavel Yelsukov",
              color: "rgb(0, 150, 136)",
              imgUrl: "",
            },
            style: {
              backgroundColor: "#fd9644",
            },
          },
        ],
        style: {},
      },
      {
        id: "g105",
        title: "QA",
        tasks: [
          {
            id: "c109",
            title: "Create User Profiles",
            archivedAt: null,
            status: "todo",
            priority: "high",
            dueDate: "2024-09-27",
            description: "Implement user profile functionality.",
            comments: [],
            checklists: [
              {
                id: "YEhmF9",
                title: "Checklist",
                todos: [
                  {
                    id: "212jX9",
                    title: "Design profile layout",
                    isDone: false,
                  },
                ],
              },
            ],
            members: [
              {
                _id: "u103",
                fullname: "Pavel Yelsukov",
                color: "rgb(0, 150, 136)",
                imgUrl: "",
              },
            ],
            labels: [
              {
                id: "l110",
                title: "feature",
                color: "#1e90ff",
              },
            ],
            byMember: {
              _id: "u103",
              fullname: "Pavel Yelsukov",
              color: "rgb(0, 150, 136)",
              imgUrl: "",
            },
            style: {
              backgroundColor: "#26de81",
            },
          },
          {
            id: "c111",
            title: "Implement Notifications",
            archivedAt: null,
            status: "todo",
            priority: "medium",
            dueDate: "2024-09-30",
            description: "Add notification functionality for task updates.",
            comments: [
              {
                id: "ZdPnm11",
                title: "Make sure to include push notifications.",
                createdAt: 1590999817441,
                byMember: {
                  _id: "u101",
                  fullname: "Daniel Yacovi",
                  imgUrl: "",
                },
              },
            ],
            checklists: [
              {
                id: "YEhmF11",
                title: "Checklist",
                todos: [
                  {
                    id: "212jX11",
                    title: "Implement push notifications",
                    isDone: false,
                  },
                ],
              },
            ],
            members: [
              {
                _id: "u102",
                fullname: "Sean Mamistalov",
                color: "rgb(255, 152, 0)",
                imgUrl: "",
              },
            ],
            labels: [
              {
                id: "l111",
                title: "feature",
                color: "#4b7bec",
              },
            ],
            byMember: {
              _id: "u103",
              fullname: "Pavel Yelsukov",
              color: "rgb(0, 150, 136)",
              imgUrl: "",
            },
            style: {
              backgroundColor: "#f7b731",
            },
          },
        ],
        style: {},
      },
      {
        id: "g106",
        title: "Ready for Production",
        tasks: [
          {
            id: "c112",
            title: "Improve Accessibility",
            archivedAt: null,
            status: "inProgress",
            priority: "high",
            dueDate: "2024-10-01",
            description: "Ensure the app is accessible to all users.",
            comments: [],
            checklists: [
              {
                id: "YEhmF12",
                title: "Checklist",
                todos: [
                  {
                    id: "212jX12",
                    title: "Add screen reader support",
                    isDone: false,
                  },
                ],
              },
            ],
            members: [],
            labels: [
              {
                id: "l112",
                title: "accessibility",
                color: "#a55eea",
              },
            ],
            byMember: {
              _id: "u101",
              fullname: "Daniel Yacovi",
              color: "rgb(33, 150, 243)",
              imgUrl: "",
            },
            style: {
              backgroundColor: "#fd9644",
            },
          },
          {
            id: "c113",
            title: "Refactor Authentication",
            archivedAt: null,
            status: "todo",
            priority: "high",
            dueDate: "2024-10-02",
            description:
              "Refactor the authentication system for better security.",
            comments: [
              {
                id: "ZdPnm13",
                title: "Ensure compatibility with OAuth2.",
                createdAt: 1590999817443,
                byMember: {
                  _id: "u102",
                  fullname: "Sean Mamistalov",
                  imgUrl: "",
                },
              },
            ],
            checklists: [
              {
                id: "YEhmF13",
                title: "Checklist",
                todos: [
                  {
                    id: "212jX13",
                    title: "Implement token-based authentication",
                    isDone: false,
                  },
                ],
              },
            ],
            members: [
              {
                _id: "u103",
                fullname: "Pavel Yelsukov",
                color: "rgb(0, 150, 136)",
                imgUrl: "",
              },
            ],
            labels: [
              {
                id: "l113",
                title: "security",
                color: "#eb3b5a",
              },
            ],
            byMember: {
              _id: "u103",
              fullname: "Pavel Yelsukov",
              color: "rgb(0, 150, 136)",
              imgUrl: "",
            },
            style: {
              backgroundColor: "#26de81",
            },
          },
        ],
        style: {},
      },
    ],
    activities: [
      {
        id: "a101",
        title: "Changed Color",
        createdAt: 154514,
        byMember: {
          _id: "u101",
          fullname: "Daniel Yacovi",
          imgUrl: "",
        },
        group: {
          id: "g101",
          title: "Backlog Server",
        },
        task: {
          id: "c101",
          title: "Replace Logo",
        },
      },
    ],
    cmpsOrder: ["StatusPicker", "MemberPicker", "DatePicker"],
  },
  {
    _id: "b2",
    title: "CodeIt",
    isStarred: true,
    archivedAt: 1589983468418,
    createdBy: {
      _id: "u101",
      fullname: "Daniel Yacovi",
      imgUrl: "",
    },
    style: {
      background: "",
    },
    labels: [
      {
        id: "l101",
        title: "Done",
        color: "#4bce97",
      },
      {
        id: "l102",
        title: "Progress",
        color: "#9f8fef",
      },
      {
        id: "l103",
        title: "Full Of Bugs",
        color: "#579dff",
      },
      {
        id: "l104",
        title: "Check Before Done",
        color: "#f87168",
      },
      {
        id: "l105",
        title: "Next Round",
        color: "#fea362",
      },
      {
        id: "l106",
        title: "To Do",
        color: "#9f8fef",
      },
    ],
    members: [
      {
        _id: "u102",
        fullname: "Sean Mamistalov",
        color: "rgb(255, 152, 0)",
        imgUrl: "",
      },
      {
        _id: "u103",
        fullname: "Pavel Yelsukov",
        color: "rgb(0, 150, 136)",
        imgUrl: "",
      },
      {
        _id: "u101",
        fullname: "Daniel Yacovi",
        color: "rgb(33, 150, 243)",
        imgUrl: "",
      },
    ],
    groups: [
      {
        id: "g101",
        title: "Backlog Server",
        archivedAt: 1589983468418,
        tasks: [
          {
            id: "c101",
            title: "Fix Login Bug",
            archivedAt: null,
            status: "inProgress",
            priority: "high",
            dueDate: "2024-09-20",
            description: "Resolve the issue where users can't log in.",
            comments: [
              {
                id: "ZdPnm",
                title: "@seanm please review the login logic.",
                createdAt: 1590999817436,
                byMember: {
                  _id: "u101",
                  fullname: "Daniel Yacovi",
                  imgUrl: "",
                },
              },
            ],
            checklists: [
              {
                id: "YEhmF",
                title: "Checklist",
                todos: [
                  {
                    id: "212jX",
                    title: "Verify login error handling",
                    isDone: false,
                  },
                ],
              },
            ],
            members: [
              {
                _id: "u102",
                fullname: "Sean Mamistalov",
                color: "rgb(255, 152, 0)",
                imgUrl: "",
              },
            ],
            labels: [
              {
                id: "l103",
                title: "bug",
                color: "#ff4757",
              },
            ],
            byMember: {
              _id: "u103",
              fullname: "Pavel Yelsukov",
              color: "rgb(0, 150, 136)",
              imgUrl: "",
            },
            style: {
              backgroundColor: "#26de81",
            },
          },
          {
            id: "c102",
            title: "Implement Dark Mode",
            archivedAt: null,
            status: "todo",
            priority: "medium",
            dueDate: "2024-09-22",
            description: "Add a dark mode toggle to the settings.",
            comments: [],
            checklists: [
              {
                id: "YEhmF2",
                title: "Checklist",
                todos: [
                  {
                    id: "212jX2",
                    title: "Design dark mode color scheme",
                    isDone: false,
                  },
                ],
              },
            ],
            members: [
              {
                _id: "u103",
                fullname: "Pavel Yelsukov",
                color: "rgb(0, 150, 136)",
                imgUrl: "",
              },
              {
                _id: "u101",
                fullname: "Daniel Yacovi",
                color: "rgb(33, 150, 243)",
                imgUrl: "",
              },
            ],
            labels: [
              {
                id: "l104",
                title: "feature",
                color: "#1e90ff",
              },
            ],
            byMember: {
              _id: "u103",
              fullname: "Pavel Yelsukov",
              color: "rgb(0, 150, 136)",
              imgUrl: "",
            },
            style: {
              backgroundColor: "#fd9644",
            },
          },
        ],
        style: {},
      },
      {
        id: "g102",
        title: "Backlog Client",
        tasks: [
          {
            id: "c103",
            title: "Refactor Dashboard",
            archivedAt: null,
            status: "inProgress",
            priority: "high",
            dueDate: "2024-09-25",
            description: "Clean up the dashboard code and improve performance.",
            comments: [
              {
                id: "ZdPnm3",
                title: "This needs to be done ASAP.",
                createdAt: 1590999817437,
                byMember: {
                  _id: "u101",
                  fullname: "Daniel Yacovi",
                  imgUrl: "",
                },
              },
            ],
            checklists: [
              {
                id: "YEhmF3",
                title: "Checklist",
                todos: [
                  {
                    id: "212jX3",
                    title: "Optimize API calls",
                    isDone: false,
                  },
                ],
              },
            ],
            members: [
              {
                _id: "u102",
                fullname: "Sean Mamistalov",
                color: "rgb(255, 152, 0)",
                imgUrl: "",
              },

              {
                _id: "u101",
                fullname: "Daniel Yacovi",
                color: "rgb(33, 150, 243)",
                imgUrl: "",
              },
            ],
            labels: [
              {
                id: "l105",
                title: "refactor",
                color: "#ff6b81",
              },
            ],
            byMember: {
              _id: "u102",
              fullname: "Sean Mamistalov",
              color: "rgb(255, 152, 0)",
              imgUrl: "",
            },
            style: {
              backgroundColor: "#26de81",
            },
          },
          {
            id: "c104",
            title: "Help me",
            archivedAt: 1589983468418,
            status: "inProgress",
            priority: "high",
            dueDate: "2024-09-24",
            description: "Please help me to fix this bug",
            comments: [
              {
                id: "ZdPnm",
                title: "also @yaronb please CR this",
                createdAt: 1590999817436,
                byMember: {
                  _id: "u101",
                  fullname: "Daniel Yacovi",
                  imgUrl: "",
                },
              },
            ],
            checklists: [
              {
                id: "YEhmF",
                title: "Checklist",
                todos: [
                  {
                    id: "212jX",
                    title: "To Do 1",
                    isDone: false,
                  },
                ],
              },
            ],
            members: [
              {
                _id: "u101",
                fullname: "Daniel Yacovi",
                color: "rgb(33, 150, 243)",
                imgUrl: "",
              },
            ],
            labels: [
              {
                id: "l103",
                title: "full of bugs",
                color: "#579dff",
              },
            ],
            byMember: {
              _id: "u103",
              fullname: "Pavel Yelsukov",
              color: "rgb(0, 150, 136)",
              imgUrl: "",
            },
            style: {
              backgroundColor: "#26de81",
            },
          },
        ],
        style: {},
      },
      {
        id: "g103",
        title: "In development",
        archivedAt: 1589983468418,
        tasks: [
          {
            id: "c105",
            title: "Update Documentation",
            archivedAt: null,
            status: "todo",
            priority: "low",
            dueDate: "2024-09-30",
            description: "Review and update project documentation.",
            comments: [],
            checklists: [
              {
                id: "YEhmF4",
                title: "Checklist",
                todos: [
                  {
                    id: "212jX4",
                    title: "Update README file",
                    isDone: false,
                  },
                ],
              },
            ],
            members: [],
            labels: [
              {
                id: "l106",
                title: "documentation",
                color: "#a55eea",
              },
            ],
            byMember: {
              _id: "u101",
              fullname: "Daniel Yacovi",
              color: "rgb(33, 150, 243)",
              imgUrl: "",
            },
            style: {
              backgroundColor: "#fed330",
            },
          },
          {
            id: "c106",
            title: "Implement CI/CD Pipeline",
            archivedAt: null,
            status: "todo",
            priority: "high",
            dueDate: "2024-09-28",
            description: "Set up continuous integration and delivery pipeline.",
            comments: [
              {
                id: "ZdPnm6",
                title: "This will improve our deployment process.",
                createdAt: 1590999817438,
                byMember: {
                  _id: "u102",
                  fullname: "Sean Mamistalov",
                  imgUrl: "",
                },
              },
            ],
            checklists: [
              {
                id: "YEhmF6",
                title: "Checklist",
                todos: [
                  {
                    id: "212jX6",
                    title: "Research CI/CD tools",
                    isDone: false,
                  },
                ],
              },
            ],
            members: [
              {
                _id: "u101",
                fullname: "Daniel Yacovi",
                color: "rgb(33, 150, 243)",
                imgUrl: "",
              },
            ],
            labels: [
              {
                id: "l107",
                title: "deployment",
                color: "#20bf6b",
              },
            ],
            byMember: {
              _id: "u103",
              fullname: "Pavel Yelsukov",
              color: "rgb(0, 150, 136)",
              imgUrl: "",
            },
            style: {
              backgroundColor: "#26de81",
            },
          },
        ],
        style: {},
      },
      {
        id: "g104",
        title: "Done",
        archivedAt: 1589983468418,
        tasks: [
          {
            id: "c107",
            title: "Setup Dev Environment",
            archivedAt: null,
            status: "done",
            priority: "medium",
            dueDate: "2024-09-21",
            description:
              "Configure development environment for new developers.",
            comments: [],
            checklists: [
              {
                id: "YEhmF7",
                title: "Checklist",
                todos: [
                  {
                    id: "212jX7",
                    title: "Install necessary tools",
                    isDone: true,
                  },
                ],
              },
            ],
            members: [],
            labels: [
              {
                id: "l108",
                title: "setup",
                color: "#4b7bec",
              },
            ],
            byMember: {
              _id: "u101",
              fullname: "Daniel Yacovi",
              color: "rgb(33, 150, 243)",
              imgUrl: "",
            },
            style: {
              backgroundColor: "#f7b731",
            },
          },
          {
            id: "c108",
            title: "Fix Logout Bug",
            archivedAt: null,
            status: "inProgress",
            priority: "medium",
            dueDate: "2024-09-26",
            description: "Resolve the issue where users can't log out.",
            comments: [
              {
                id: "ZdPnm8",
                title: "@pavel check the session timeout.",
                createdAt: 1590999817439,
                byMember: {
                  _id: "u102",
                  fullname: "Sean Mamistalov",
                  imgUrl: "",
                },
              },
            ],
            checklists: [
              {
                id: "YEhmF8",
                title: "Checklist",
                todos: [
                  {
                    id: "212jX8",
                    title: "Check session management",
                    isDone: false,
                  },
                ],
              },
            ],
            members: [],
            labels: [
              {
                id: "l109",
                title: "bug",
                color: "#ff4757",
              },
            ],
            byMember: {
              _id: "u103",
              fullname: "Pavel Yelsukov",
              color: "rgb(0, 150, 136)",
              imgUrl: "",
            },
            style: {
              backgroundColor: "#fd9644",
            },
          },
        ],
        style: {},
      },
      {
        id: "g105",
        title: "QA",
        tasks: [
          {
            id: "c109",
            title: "Create User Profiles",
            archivedAt: null,
            status: "todo",
            priority: "high",
            dueDate: "2024-09-27",
            description: "Implement user profile functionality.",
            comments: [],
            checklists: [
              {
                id: "YEhmF9",
                title: "Checklist",
                todos: [
                  {
                    id: "212jX9",
                    title: "Design profile layout",
                    isDone: false,
                  },
                ],
              },
            ],
            members: [
              {
                _id: "u103",
                fullname: "Pavel Yelsukov",
                color: "rgb(0, 150, 136)",
                imgUrl: "",
              },
            ],
            labels: [
              {
                id: "l110",
                title: "feature",
                color: "#1e90ff",
              },
            ],
            byMember: {
              _id: "u103",
              fullname: "Pavel Yelsukov",
              color: "rgb(0, 150, 136)",
              imgUrl: "",
            },
            style: {
              backgroundColor: "#26de81",
            },
          },
          {
            id: "c111",
            title: "Implement Notifications",
            archivedAt: null,
            status: "todo",
            priority: "medium",
            dueDate: "2024-09-30",
            description: "Add notification functionality for task updates.",
            comments: [
              {
                id: "ZdPnm11",
                title: "Make sure to include push notifications.",
                createdAt: 1590999817441,
                byMember: {
                  _id: "u101",
                  fullname: "Daniel Yacovi",
                  imgUrl: "",
                },
              },
            ],
            checklists: [
              {
                id: "YEhmF11",
                title: "Checklist",
                todos: [
                  {
                    id: "212jX11",
                    title: "Implement push notifications",
                    isDone: false,
                  },
                ],
              },
            ],
            members: [
              {
                _id: "u102",
                fullname: "Sean Mamistalov",
                color: "rgb(255, 152, 0)",
                imgUrl: "",
              },
            ],
            labels: [
              {
                id: "l111",
                title: "feature",
                color: "#4b7bec",
              },
            ],
            byMember: {
              _id: "u103",
              fullname: "Pavel Yelsukov",
              color: "rgb(0, 150, 136)",
              imgUrl: "",
            },
            style: {
              backgroundColor: "#f7b731",
            },
          },
        ],
        style: {},
      },
      {
        id: "g106",
        title: "Ready for Production",
        tasks: [
          {
            id: "c112",
            title: "Improve Accessibility",
            archivedAt: null,
            status: "inProgress",
            priority: "high",
            dueDate: "2024-10-01",
            description: "Ensure the app is accessible to all users.",
            comments: [],
            checklists: [
              {
                id: "YEhmF12",
                title: "Checklist",
                todos: [
                  {
                    id: "212jX12",
                    title: "Add screen reader support",
                    isDone: false,
                  },
                ],
              },
            ],
            members: [],
            labels: [
              {
                id: "l112",
                title: "accessibility",
                color: "#a55eea",
              },
            ],
            byMember: {
              _id: "u101",
              fullname: "Daniel Yacovi",
              color: "rgb(33, 150, 243)",
              imgUrl: "",
            },
            style: {
              backgroundColor: "#fd9644",
            },
          },
          {
            id: "c113",
            title: "Refactor Authentication",
            archivedAt: null,
            status: "todo",
            priority: "high",
            dueDate: "2024-10-02",
            description:
              "Refactor the authentication system for better security.",
            comments: [
              {
                id: "ZdPnm13",
                title: "Ensure compatibility with OAuth2.",
                createdAt: 1590999817443,
                byMember: {
                  _id: "u102",
                  fullname: "Sean Mamistalov",
                  imgUrl: "",
                },
              },
            ],
            checklists: [
              {
                id: "YEhmF13",
                title: "Checklist",
                todos: [
                  {
                    id: "212jX13",
                    title: "Implement token-based authentication",
                    isDone: false,
                  },
                ],
              },
            ],
            members: [
              {
                _id: "u103",
                fullname: "Pavel Yelsukov",
                color: "rgb(0, 150, 136)",
                imgUrl: "",
              },
            ],
            labels: [
              {
                id: "l113",
                title: "security",
                color: "#eb3b5a",
              },
            ],
            byMember: {
              _id: "u103",
              fullname: "Pavel Yelsukov",
              color: "rgb(0, 150, 136)",
              imgUrl: "",
            },
            style: {
              backgroundColor: "#26de81",
            },
          },
        ],
        style: {},
      },
    ],
    activities: [
      {
        id: "a101",
        title: "Changed Color",
        createdAt: 154514,
        byMember: {
          _id: "u101",
          fullname: "Daniel Yacovi",
          imgUrl: "",
        },
        group: {
          id: "g101",
          title: "Backlog Server",
        },
        task: {
          id: "c101",
          title: "Replace Logo",
        },
      },
    ],
    cmpsOrder: ["StatusPicker", "MemberPicker", "DatePicker"],
  },
  {
    _id: "b3",
    title: "PlanIt-example",
    isStarred: false,
    archivedAt: 1589983468418,
    createdBy: {
      _id: "u101",
      fullname: "Daniel Yacovi",
      imgUrl: "",
    },
    style: {
      background: "",
    },
    labels: [
      {
        id: "l101",
        title: "Done",
        color: "#4bce97",
      },
      {
        id: "l102",
        title: "Progress",
        color: "#9f8fef",
      },
      {
        id: "l103",
        title: "Full Of Bugs",
        color: "#579dff",
      },
      {
        id: "l104",
        title: "Check Before Done",
        color: "#f87168",
      },
      {
        id: "l105",
        title: "Next Round",
        color: "#fea362",
      },
      {
        id: "l106",
        title: "To Do",
        color: "#9f8fef",
      },
    ],
    members: [
      {
        _id: "u102",
        fullname: "Sean Mamistalov",
        color: "rgb(255, 152, 0)",
        imgUrl: "",
      },
      {
        _id: "u103",
        fullname: "Pavel Yelsukov",
        color: "rgb(0, 150, 136)",
        imgUrl: "",
      },
      {
        _id: "u101",
        fullname: "Daniel Yacovi",
        color: "rgb(33, 150, 243)",
        imgUrl: "",
      },
    ],
    groups: [
      {
        id: "g101",
        title: "Backlog Server",
        archivedAt: 1589983468418,
        tasks: [
          {
            id: "c101",
            title: "Fix Login Bug",
            archivedAt: null,
            status: "inProgress",
            priority: "high",
            dueDate: "2024-09-20",
            description: "Resolve the issue where users can't log in.",
            comments: [
              {
                id: "ZdPnm",
                title: "@seanm please review the login logic.",
                createdAt: 1590999817436,
                byMember: {
                  _id: "u101",
                  fullname: "Daniel Yacovi",
                  imgUrl: "",
                },
              },
            ],
            checklists: [
              {
                id: "YEhmF",
                title: "Checklist",
                todos: [
                  {
                    id: "212jX",
                    title: "Verify login error handling",
                    isDone: false,
                  },
                ],
              },
            ],
            members: [
              {
                _id: "u102",
                fullname: "Sean Mamistalov",
                color: "rgb(255, 152, 0)",
                imgUrl: "",
              },
            ],
            labels: [
              {
                id: "l103",
                title: "bug",
                color: "#ff4757",
              },
            ],
            byMember: {
              _id: "u103",
              fullname: "Pavel Yelsukov",
              color: "rgb(0, 150, 136)",
              imgUrl: "",
            },
            style: {
              backgroundColor: "#26de81",
            },
          },
          {
            id: "c102",
            title: "Implement Dark Mode",
            archivedAt: null,
            status: "todo",
            priority: "medium",
            dueDate: "2024-09-22",
            description: "Add a dark mode toggle to the settings.",
            comments: [],
            checklists: [
              {
                id: "YEhmF2",
                title: "Checklist",
                todos: [
                  {
                    id: "212jX2",
                    title: "Design dark mode color scheme",
                    isDone: false,
                  },
                ],
              },
            ],
            members: [
              {
                _id: "u103",
                fullname: "Pavel Yelsukov",
                color: "rgb(0, 150, 136)",
                imgUrl: "",
              },
              {
                _id: "u101",
                fullname: "Daniel Yacovi",
                color: "rgb(33, 150, 243)",
                imgUrl: "",
              },
            ],
            labels: [
              {
                id: "l104",
                title: "feature",
                color: "#1e90ff",
              },
            ],
            byMember: {
              _id: "u103",
              fullname: "Pavel Yelsukov",
              color: "rgb(0, 150, 136)",
              imgUrl: "",
            },
            style: {
              backgroundColor: "#fd9644",
            },
          },
        ],
        style: {},
      },
      {
        id: "g102",
        title: "Backlog Client",
        tasks: [
          {
            id: "c103",
            title: "Refactor Dashboard",
            archivedAt: null,
            status: "inProgress",
            priority: "high",
            dueDate: "2024-09-25",
            description: "Clean up the dashboard code and improve performance.",
            comments: [
              {
                id: "ZdPnm3",
                title: "This needs to be done ASAP.",
                createdAt: 1590999817437,
                byMember: {
                  _id: "u101",
                  fullname: "Daniel Yacovi",
                  imgUrl: "",
                },
              },
            ],
            checklists: [
              {
                id: "YEhmF3",
                title: "Checklist",
                todos: [
                  {
                    id: "212jX3",
                    title: "Optimize API calls",
                    isDone: false,
                  },
                ],
              },
            ],
            members: [
              {
                _id: "u102",
                fullname: "Sean Mamistalov",
                color: "rgb(255, 152, 0)",
                imgUrl: "",
              },

              {
                _id: "u101",
                fullname: "Daniel Yacovi",
                color: "rgb(33, 150, 243)",
                imgUrl: "",
              },
            ],
            labels: [
              {
                id: "l105",
                title: "refactor",
                color: "#ff6b81",
              },
            ],
            byMember: {
              _id: "u102",
              fullname: "Sean Mamistalov",
              color: "rgb(255, 152, 0)",
              imgUrl: "",
            },
            style: {
              backgroundColor: "#26de81",
            },
          },
          {
            id: "c104",
            title: "Help me",
            archivedAt: 1589983468418,
            status: "inProgress",
            priority: "high",
            dueDate: "2024-09-24",
            description: "Please help me to fix this bug",
            comments: [
              {
                id: "ZdPnm",
                title: "also @yaronb please CR this",
                createdAt: 1590999817436,
                byMember: {
                  _id: "u101",
                  fullname: "Daniel Yacovi",
                  imgUrl: "",
                },
              },
            ],
            checklists: [
              {
                id: "YEhmF",
                title: "Checklist",
                todos: [
                  {
                    id: "212jX",
                    title: "To Do 1",
                    isDone: false,
                  },
                ],
              },
            ],
            members: [
              {
                _id: "u101",
                fullname: "Daniel Yacovi",
                color: "rgb(33, 150, 243)",
                imgUrl: "",
              },
            ],
            labels: [
              {
                id: "l103",
                title: "full of bugs",
                color: "#579dff",
              },
            ],
            byMember: {
              _id: "u103",
              fullname: "Pavel Yelsukov",
              color: "rgb(0, 150, 136)",
              imgUrl: "",
            },
            style: {
              backgroundColor: "#26de81",
            },
          },
        ],
        style: {},
      },
      {
        id: "g103",
        title: "In development",
        archivedAt: 1589983468418,
        tasks: [
          {
            id: "c105",
            title: "Update Documentation",
            archivedAt: null,
            status: "todo",
            priority: "low",
            dueDate: "2024-09-30",
            description: "Review and update project documentation.",
            comments: [],
            checklists: [
              {
                id: "YEhmF4",
                title: "Checklist",
                todos: [
                  {
                    id: "212jX4",
                    title: "Update README file",
                    isDone: false,
                  },
                ],
              },
            ],
            members: [],
            labels: [
              {
                id: "l106",
                title: "documentation",
                color: "#a55eea",
              },
            ],
            byMember: {
              _id: "u101",
              fullname: "Daniel Yacovi",
              color: "rgb(33, 150, 243)",
              imgUrl: "",
            },
            style: {
              backgroundColor: "#fed330",
            },
          },
          {
            id: "c106",
            title: "Implement CI/CD Pipeline",
            archivedAt: null,
            status: "todo",
            priority: "high",
            dueDate: "2024-09-28",
            description: "Set up continuous integration and delivery pipeline.",
            comments: [
              {
                id: "ZdPnm6",
                title: "This will improve our deployment process.",
                createdAt: 1590999817438,
                byMember: {
                  _id: "u102",
                  fullname: "Sean Mamistalov",
                  imgUrl: "",
                },
              },
            ],
            checklists: [
              {
                id: "YEhmF6",
                title: "Checklist",
                todos: [
                  {
                    id: "212jX6",
                    title: "Research CI/CD tools",
                    isDone: false,
                  },
                ],
              },
            ],
            members: [
              {
                _id: "u101",
                fullname: "Daniel Yacovi",
                color: "rgb(33, 150, 243)",
                imgUrl: "",
              },
            ],
            labels: [
              {
                id: "l107",
                title: "deployment",
                color: "#20bf6b",
              },
            ],
            byMember: {
              _id: "u103",
              fullname: "Pavel Yelsukov",
              color: "rgb(0, 150, 136)",
              imgUrl: "",
            },
            style: {
              backgroundColor: "#26de81",
            },
          },
        ],
        style: {},
      },
      {
        id: "g104",
        title: "Done",
        archivedAt: 1589983468418,
        tasks: [
          {
            id: "c107",
            title: "Setup Dev Environment",
            archivedAt: null,
            status: "done",
            priority: "medium",
            dueDate: "2024-09-21",
            description:
              "Configure development environment for new developers.",
            comments: [],
            checklists: [
              {
                id: "YEhmF7",
                title: "Checklist",
                todos: [
                  {
                    id: "212jX7",
                    title: "Install necessary tools",
                    isDone: true,
                  },
                ],
              },
            ],
            members: [],
            labels: [
              {
                id: "l108",
                title: "setup",
                color: "#4b7bec",
              },
            ],
            byMember: {
              _id: "u101",
              fullname: "Daniel Yacovi",
              color: "rgb(33, 150, 243)",
              imgUrl: "",
            },
            style: {
              backgroundColor: "#f7b731",
            },
          },
          {
            id: "c108",
            title: "Fix Logout Bug",
            archivedAt: null,
            status: "inProgress",
            priority: "medium",
            dueDate: "2024-09-26",
            description: "Resolve the issue where users can't log out.",
            comments: [
              {
                id: "ZdPnm8",
                title: "@pavel check the session timeout.",
                createdAt: 1590999817439,
                byMember: {
                  _id: "u102",
                  fullname: "Sean Mamistalov",
                  imgUrl: "",
                },
              },
            ],
            checklists: [
              {
                id: "YEhmF8",
                title: "Checklist",
                todos: [
                  {
                    id: "212jX8",
                    title: "Check session management",
                    isDone: false,
                  },
                ],
              },
            ],
            members: [],
            labels: [
              {
                id: "l109",
                title: "bug",
                color: "#ff4757",
              },
            ],
            byMember: {
              _id: "u103",
              fullname: "Pavel Yelsukov",
              color: "rgb(0, 150, 136)",
              imgUrl: "",
            },
            style: {
              backgroundColor: "#fd9644",
            },
          },
        ],
        style: {},
      },
      {
        id: "g105",
        title: "QA",
        tasks: [
          {
            id: "c109",
            title: "Create User Profiles",
            archivedAt: null,
            status: "todo",
            priority: "high",
            dueDate: "2024-09-27",
            description: "Implement user profile functionality.",
            comments: [],
            checklists: [
              {
                id: "YEhmF9",
                title: "Checklist",
                todos: [
                  {
                    id: "212jX9",
                    title: "Design profile layout",
                    isDone: false,
                  },
                ],
              },
            ],
            members: [
              {
                _id: "u103",
                fullname: "Pavel Yelsukov",
                color: "rgb(0, 150, 136)",
                imgUrl: "",
              },
            ],
            labels: [
              {
                id: "l110",
                title: "feature",
                color: "#1e90ff",
              },
            ],
            byMember: {
              _id: "u103",
              fullname: "Pavel Yelsukov",
              color: "rgb(0, 150, 136)",
              imgUrl: "",
            },
            style: {
              backgroundColor: "#26de81",
            },
          },
          {
            id: "c111",
            title: "Implement Notifications",
            archivedAt: null,
            status: "todo",
            priority: "medium",
            dueDate: "2024-09-30",
            description: "Add notification functionality for task updates.",
            comments: [
              {
                id: "ZdPnm11",
                title: "Make sure to include push notifications.",
                createdAt: 1590999817441,
                byMember: {
                  _id: "u101",
                  fullname: "Daniel Yacovi",
                  imgUrl: "",
                },
              },
            ],
            checklists: [
              {
                id: "YEhmF11",
                title: "Checklist",
                todos: [
                  {
                    id: "212jX11",
                    title: "Implement push notifications",
                    isDone: false,
                  },
                ],
              },
            ],
            members: [
              {
                _id: "u102",
                fullname: "Sean Mamistalov",
                color: "rgb(255, 152, 0)",
                imgUrl: "",
              },
            ],
            labels: [
              {
                id: "l111",
                title: "feature",
                color: "#4b7bec",
              },
            ],
            byMember: {
              _id: "u103",
              fullname: "Pavel Yelsukov",
              color: "rgb(0, 150, 136)",
              imgUrl: "",
            },
            style: {
              backgroundColor: "#f7b731",
            },
          },
        ],
        style: {},
      },
      {
        id: "g106",
        title: "Ready for Production",
        tasks: [
          {
            id: "c112",
            title: "Improve Accessibility",
            archivedAt: null,
            status: "inProgress",
            priority: "high",
            dueDate: "2024-10-01",
            description: "Ensure the app is accessible to all users.",
            comments: [],
            checklists: [
              {
                id: "YEhmF12",
                title: "Checklist",
                todos: [
                  {
                    id: "212jX12",
                    title: "Add screen reader support",
                    isDone: false,
                  },
                ],
              },
            ],
            members: [],
            labels: [
              {
                id: "l112",
                title: "accessibility",
                color: "#a55eea",
              },
            ],
            byMember: {
              _id: "u101",
              fullname: "Daniel Yacovi",
              color: "rgb(33, 150, 243)",
              imgUrl: "",
            },
            style: {
              backgroundColor: "#fd9644",
            },
          },
          {
            id: "c113",
            title: "Refactor Authentication",
            archivedAt: null,
            status: "todo",
            priority: "high",
            dueDate: "2024-10-02",
            description:
              "Refactor the authentication system for better security.",
            comments: [
              {
                id: "ZdPnm13",
                title: "Ensure compatibility with OAuth2.",
                createdAt: 1590999817443,
                byMember: {
                  _id: "u102",
                  fullname: "Sean Mamistalov",
                  imgUrl: "",
                },
              },
            ],
            checklists: [
              {
                id: "YEhmF13",
                title: "Checklist",
                todos: [
                  {
                    id: "212jX13",
                    title: "Implement token-based authentication",
                    isDone: false,
                  },
                ],
              },
            ],
            members: [
              {
                _id: "u103",
                fullname: "Pavel Yelsukov",
                color: "rgb(0, 150, 136)",
                imgUrl: "",
              },
            ],
            labels: [
              {
                id: "l113",
                title: "security",
                color: "#eb3b5a",
              },
            ],
            byMember: {
              _id: "u103",
              fullname: "Pavel Yelsukov",
              color: "rgb(0, 150, 136)",
              imgUrl: "",
            },
            style: {
              backgroundColor: "#26de81",
            },
          },
        ],
        style: {},
      },
    ],
    activities: [
      {
        id: "a101",
        title: "Changed Color",
        createdAt: 154514,
        byMember: {
          _id: "u101",
          fullname: "Daniel Yacovi",
          imgUrl: "",
        },
        group: {
          id: "g101",
          title: "Backlog Server",
        },
        task: {
          id: "c101",
          title: "Replace Logo",
        },
      },
    ],
    cmpsOrder: ["StatusPicker", "MemberPicker", "DatePicker"],
  },
  {
    _id: "b4",
    title: "LetsDoIT",
    isStarred: false,
    archivedAt: 1589983468418,
    createdBy: {
      _id: "u103",
      fullname: "Pavel Yelsukov",
      imgUrl: "",
    },
    style: {
      background: "",
    },
    labels: [
      {
        id: "l101",
        title: "Done",
        color: "#4bce97",
      },
      {
        id: "l102",
        title: "Progress",
        color: "#9f8fef",
      },
      {
        id: "l103",
        title: "Full Of Bugs",
        color: "#579dff",
      },
      {
        id: "l104",
        title: "Check Before Done",
        color: "#f87168",
      },
      {
        id: "l105",
        title: "Next Round",
        color: "#fea362",
      },
      {
        id: "l106",
        title: "To Do",
        color: "#9f8fef",
      },
    ],
    members: [
      {
        _id: "u102",
        fullname: "Sean Mamistalov",
        color: "rgb(255, 152, 0)",
        imgUrl: "",
      },
      {
        _id: "u103",
        fullname: "Pavel Yelsukov",
        color: "rgb(0, 150, 136)",
        imgUrl: "",
      },
      {
        _id: "u101",
        fullname: "Daniel Yacovi",
        color: "rgb(33, 150, 243)",
        imgUrl: "",
      },
    ],
    groups: [
      {
        id: "g101",
        title: "Backlog Server",
        archivedAt: 1589983468418,
        tasks: [
          {
            id: "c101",
            title: "Fix Login Bug",
            archivedAt: null,
            status: "inProgress",
            priority: "high",
            dueDate: "2024-09-20",
            description: "Resolve the issue where users can't log in.",
            comments: [
              {
                id: "ZdPnm",
                title: "@seanm please review the login logic.",
                createdAt: 1590999817436,
                byMember: {
                  _id: "u101",
                  fullname: "Daniel Yacovi",
                  imgUrl: "",
                },
              },
            ],
            checklists: [
              {
                id: "YEhmF",
                title: "Checklist",
                todos: [
                  {
                    id: "212jX",
                    title: "Verify login error handling",
                    isDone: false,
                  },
                ],
              },
            ],
            members: [
              {
                _id: "u102",
                fullname: "Sean Mamistalov",
                color: "rgb(255, 152, 0)",
                imgUrl: "",
              },
            ],
            labels: [
              {
                id: "l103",
                title: "bug",
                color: "#ff4757",
              },
            ],
            byMember: {
              _id: "u103",
              fullname: "Pavel Yelsukov",
              color: "rgb(0, 150, 136)",
              imgUrl: "",
            },
            style: {
              backgroundColor: "#26de81",
            },
          },
          {
            id: "c102",
            title: "Implement Dark Mode",
            archivedAt: null,
            status: "todo",
            priority: "medium",
            dueDate: "2024-09-22",
            description: "Add a dark mode toggle to the settings.",
            comments: [],
            checklists: [
              {
                id: "YEhmF2",
                title: "Checklist",
                todos: [
                  {
                    id: "212jX2",
                    title: "Design dark mode color scheme",
                    isDone: false,
                  },
                ],
              },
            ],
            members: [
              {
                _id: "u103",
                fullname: "Pavel Yelsukov",
                color: "rgb(0, 150, 136)",
                imgUrl: "",
              },
              {
                _id: "u101",
                fullname: "Daniel Yacovi",
                color: "rgb(33, 150, 243)",
                imgUrl: "",
              },
            ],
            labels: [
              {
                id: "l104",
                title: "feature",
                color: "#1e90ff",
              },
            ],
            byMember: {
              _id: "u103",
              fullname: "Pavel Yelsukov",
              color: "rgb(0, 150, 136)",
              imgUrl: "",
            },
            style: {
              backgroundColor: "#fd9644",
            },
          },
        ],
        style: {},
      },
      {
        id: "g102",
        title: "Backlog Client",
        tasks: [
          {
            id: "c103",
            title: "Refactor Dashboard",
            archivedAt: null,
            status: "inProgress",
            priority: "high",
            dueDate: "2024-09-25",
            description: "Clean up the dashboard code and improve performance.",
            comments: [
              {
                id: "ZdPnm3",
                title: "This needs to be done ASAP.",
                createdAt: 1590999817437,
                byMember: {
                  _id: "u101",
                  fullname: "Daniel Yacovi",
                  imgUrl: "",
                },
              },
            ],
            checklists: [
              {
                id: "YEhmF3",
                title: "Checklist",
                todos: [
                  {
                    id: "212jX3",
                    title: "Optimize API calls",
                    isDone: false,
                  },
                ],
              },
            ],
            members: [
              {
                _id: "u102",
                fullname: "Sean Mamistalov",
                color: "rgb(255, 152, 0)",
                imgUrl: "",
              },

              {
                _id: "u101",
                fullname: "Daniel Yacovi",
                color: "rgb(33, 150, 243)",
                imgUrl: "",
              },
            ],
            labels: [
              {
                id: "l105",
                title: "refactor",
                color: "#ff6b81",
              },
            ],
            byMember: {
              _id: "u102",
              fullname: "Sean Mamistalov",
              color: "rgb(255, 152, 0)",
              imgUrl: "",
            },
            style: {
              backgroundColor: "#26de81",
            },
          },
          {
            id: "c104",
            title: "Help me",
            archivedAt: 1589983468418,
            status: "inProgress",
            priority: "high",
            dueDate: "2024-09-24",
            description: "Please help me to fix this bug",
            comments: [
              {
                id: "ZdPnm",
                title: "also @yaronb please CR this",
                createdAt: 1590999817436,
                byMember: {
                  _id: "u101",
                  fullname: "Daniel Yacovi",
                  imgUrl: "",
                },
              },
            ],
            checklists: [
              {
                id: "YEhmF",
                title: "Checklist",
                todos: [
                  {
                    id: "212jX",
                    title: "To Do 1",
                    isDone: false,
                  },
                ],
              },
            ],
            members: [
              {
                _id: "u101",
                fullname: "Daniel Yacovi",
                color: "rgb(33, 150, 243)",
                imgUrl: "",
              },
            ],
            labels: [
              {
                id: "l103",
                title: "full of bugs",
                color: "#579dff",
              },
            ],
            byMember: {
              _id: "u103",
              fullname: "Pavel Yelsukov",
              color: "rgb(0, 150, 136)",
              imgUrl: "",
            },
            style: {
              backgroundColor: "#26de81",
            },
          },
        ],
        style: {},
      },
      {
        id: "g103",
        title: "In development",
        archivedAt: 1589983468418,
        tasks: [
          {
            id: "c105",
            title: "Update Documentation",
            archivedAt: null,
            status: "todo",
            priority: "low",
            dueDate: "2024-09-30",
            description: "Review and update project documentation.",
            comments: [],
            checklists: [
              {
                id: "YEhmF4",
                title: "Checklist",
                todos: [
                  {
                    id: "212jX4",
                    title: "Update README file",
                    isDone: false,
                  },
                ],
              },
            ],
            members: [],
            labels: [
              {
                id: "l106",
                title: "documentation",
                color: "#a55eea",
              },
            ],
            byMember: {
              _id: "u101",
              fullname: "Daniel Yacovi",
              color: "rgb(33, 150, 243)",
              imgUrl: "",
            },
            style: {
              backgroundColor: "#fed330",
            },
          },
          {
            id: "c106",
            title: "Implement CI/CD Pipeline",
            archivedAt: null,
            status: "todo",
            priority: "high",
            dueDate: "2024-09-28",
            description: "Set up continuous integration and delivery pipeline.",
            comments: [
              {
                id: "ZdPnm6",
                title: "This will improve our deployment process.",
                createdAt: 1590999817438,
                byMember: {
                  _id: "u102",
                  fullname: "Sean Mamistalov",
                  imgUrl: "",
                },
              },
            ],
            checklists: [
              {
                id: "YEhmF6",
                title: "Checklist",
                todos: [
                  {
                    id: "212jX6",
                    title: "Research CI/CD tools",
                    isDone: false,
                  },
                ],
              },
            ],
            members: [
              {
                _id: "u101",
                fullname: "Daniel Yacovi",
                color: "rgb(33, 150, 243)",
                imgUrl: "",
              },
            ],
            labels: [
              {
                id: "l107",
                title: "deployment",
                color: "#20bf6b",
              },
            ],
            byMember: {
              _id: "u103",
              fullname: "Pavel Yelsukov",
              color: "rgb(0, 150, 136)",
              imgUrl: "",
            },
            style: {
              backgroundColor: "#26de81",
            },
          },
        ],
        style: {},
      },
      {
        id: "g104",
        title: "Done",
        archivedAt: 1589983468418,
        tasks: [
          {
            id: "c107",
            title: "Setup Dev Environment",
            archivedAt: null,
            status: "done",
            priority: "medium",
            dueDate: "2024-09-21",
            description:
              "Configure development environment for new developers.",
            comments: [],
            checklists: [
              {
                id: "YEhmF7",
                title: "Checklist",
                todos: [
                  {
                    id: "212jX7",
                    title: "Install necessary tools",
                    isDone: true,
                  },
                ],
              },
            ],
            members: [],
            labels: [
              {
                id: "l108",
                title: "setup",
                color: "#4b7bec",
              },
            ],
            byMember: {
              _id: "u101",
              fullname: "Daniel Yacovi",
              color: "rgb(33, 150, 243)",
              imgUrl: "",
            },
            style: {
              backgroundColor: "#f7b731",
            },
          },
          {
            id: "c108",
            title: "Fix Logout Bug",
            archivedAt: null,
            status: "inProgress",
            priority: "medium",
            dueDate: "2024-09-26",
            description: "Resolve the issue where users can't log out.",
            comments: [
              {
                id: "ZdPnm8",
                title: "@pavel check the session timeout.",
                createdAt: 1590999817439,
                byMember: {
                  _id: "u102",
                  fullname: "Sean Mamistalov",
                  imgUrl: "",
                },
              },
            ],
            checklists: [
              {
                id: "YEhmF8",
                title: "Checklist",
                todos: [
                  {
                    id: "212jX8",
                    title: "Check session management",
                    isDone: false,
                  },
                ],
              },
            ],
            members: [],
            labels: [
              {
                id: "l109",
                title: "bug",
                color: "#ff4757",
              },
            ],
            byMember: {
              _id: "u103",
              fullname: "Pavel Yelsukov",
              color: "rgb(0, 150, 136)",
              imgUrl: "",
            },
            style: {
              backgroundColor: "#fd9644",
            },
          },
        ],
        style: {},
      },
      {
        id: "g105",
        title: "QA",
        tasks: [
          {
            id: "c109",
            title: "Create User Profiles",
            archivedAt: null,
            status: "todo",
            priority: "high",
            dueDate: "2024-09-27",
            description: "Implement user profile functionality.",
            comments: [],
            checklists: [
              {
                id: "YEhmF9",
                title: "Checklist",
                todos: [
                  {
                    id: "212jX9",
                    title: "Design profile layout",
                    isDone: false,
                  },
                ],
              },
            ],
            members: [
              {
                _id: "u103",
                fullname: "Pavel Yelsukov",
                color: "rgb(0, 150, 136)",
                imgUrl: "",
              },
            ],
            labels: [
              {
                id: "l110",
                title: "feature",
                color: "#1e90ff",
              },
            ],
            byMember: {
              _id: "u103",
              fullname: "Pavel Yelsukov",
              color: "rgb(0, 150, 136)",
              imgUrl: "",
            },
            style: {
              backgroundColor: "#26de81",
            },
          },
          {
            id: "c111",
            title: "Implement Notifications",
            archivedAt: null,
            status: "todo",
            priority: "medium",
            dueDate: "2024-09-30",
            description: "Add notification functionality for task updates.",
            comments: [
              {
                id: "ZdPnm11",
                title: "Make sure to include push notifications.",
                createdAt: 1590999817441,
                byMember: {
                  _id: "u101",
                  fullname: "Daniel Yacovi",
                  imgUrl: "",
                },
              },
            ],
            checklists: [
              {
                id: "YEhmF11",
                title: "Checklist",
                todos: [
                  {
                    id: "212jX11",
                    title: "Implement push notifications",
                    isDone: false,
                  },
                ],
              },
            ],
            members: [
              {
                _id: "u102",
                fullname: "Sean Mamistalov",
                color: "rgb(255, 152, 0)",
                imgUrl: "",
              },
            ],
            labels: [
              {
                id: "l111",
                title: "feature",
                color: "#4b7bec",
              },
            ],
            byMember: {
              _id: "u103",
              fullname: "Pavel Yelsukov",
              color: "rgb(0, 150, 136)",
              imgUrl: "",
            },
            style: {
              backgroundColor: "#f7b731",
            },
          },
        ],
        style: {},
      },
      {
        id: "g106",
        title: "Ready for Production",
        tasks: [
          {
            id: "c112",
            title: "Improve Accessibility",
            archivedAt: null,
            status: "inProgress",
            priority: "high",
            dueDate: "2024-10-01",
            description: "Ensure the app is accessible to all users.",
            comments: [],
            checklists: [
              {
                id: "YEhmF12",
                title: "Checklist",
                todos: [
                  {
                    id: "212jX12",
                    title: "Add screen reader support",
                    isDone: false,
                  },
                ],
              },
            ],
            members: [],
            labels: [
              {
                id: "l112",
                title: "accessibility",
                color: "#a55eea",
              },
            ],
            byMember: {
              _id: "u101",
              fullname: "Daniel Yacovi",
              color: "rgb(33, 150, 243)",
              imgUrl: "",
            },
            style: {
              backgroundColor: "#fd9644",
            },
          },
          {
            id: "c113",
            title: "Refactor Authentication",
            archivedAt: null,
            status: "todo",
            priority: "high",
            dueDate: "2024-10-02",
            description:
              "Refactor the authentication system for better security.",
            comments: [
              {
                id: "ZdPnm13",
                title: "Ensure compatibility with OAuth2.",
                createdAt: 1590999817443,
                byMember: {
                  _id: "u102",
                  fullname: "Sean Mamistalov",
                  imgUrl: "",
                },
              },
            ],
            checklists: [
              {
                id: "YEhmF13",
                title: "Checklist",
                todos: [
                  {
                    id: "212jX13",
                    title: "Implement token-based authentication",
                    isDone: false,
                  },
                ],
              },
            ],
            members: [
              {
                _id: "u103",
                fullname: "Pavel Yelsukov",
                color: "rgb(0, 150, 136)",
                imgUrl: "",
              },
            ],
            labels: [
              {
                id: "l113",
                title: "security",
                color: "#eb3b5a",
              },
            ],
            byMember: {
              _id: "u103",
              fullname: "Pavel Yelsukov",
              color: "rgb(0, 150, 136)",
              imgUrl: "",
            },
            style: {
              backgroundColor: "#26de81",
            },
          },
        ],
        style: {},
      },
    ],
    activities: [
      {
        id: "a101",
        title: "Changed Color",
        createdAt: 154514,
        byMember: {
          _id: "u101",
          fullname: "Daniel Yacovi",
          imgUrl: "",
        },
        group: {
          id: "g101",
          title: "Backlog Server",
        },
        task: {
          id: "c101",
          title: "Replace Logo",
        },
      },
    ],
    cmpsOrder: ["StatusPicker", "MemberPicker", "DatePicker"],
  },
  {
    _id: "b5",
    title: "Wo0w-Proj",
    isStarred: false,
    archivedAt: 1589983468418,
    createdBy: {
      _id: "u103",
      fullname: "Pavel Yelsukov",
      imgUrl: "",
    },
    style: {
      background: "",
    },
    labels: [
      {
        id: "l101",
        title: "Done",
        color: "#4bce97",
      },
      {
        id: "l102",
        title: "Progress",
        color: "#9f8fef",
      },
      {
        id: "l103",
        title: "Full Of Bugs",
        color: "#579dff",
      },
      {
        id: "l104",
        title: "Check Before Done",
        color: "#f87168",
      },
      {
        id: "l105",
        title: "Next Round",
        color: "#fea362",
      },
      {
        id: "l106",
        title: "To Do",
        color: "#9f8fef",
      },
    ],
    members: [
      {
        _id: "u102",
        fullname: "Sean Mamistalov",
        color: "rgb(255, 152, 0)",
        imgUrl: "",
      },
      {
        _id: "u103",
        fullname: "Pavel Yelsukov",
        color: "rgb(0, 150, 136)",
        imgUrl: "",
      },
      {
        _id: "u101",
        fullname: "Daniel Yacovi",
        color: "rgb(33, 150, 243)",
        imgUrl: "",
      },
    ],
    groups: [
      {
        id: "g101",
        title: "Backlog Server",
        archivedAt: 1589983468418,
        tasks: [
          {
            id: "c101",
            title: "Fix Login Bug",
            archivedAt: null,
            status: "inProgress",
            priority: "high",
            dueDate: "2024-09-20",
            description: "Resolve the issue where users can't log in.",
            comments: [
              {
                id: "ZdPnm",
                title: "@seanm please review the login logic.",
                createdAt: 1590999817436,
                byMember: {
                  _id: "u101",
                  fullname: "Daniel Yacovi",
                  imgUrl: "",
                },
              },
            ],
            checklists: [
              {
                id: "YEhmF",
                title: "Checklist",
                todos: [
                  {
                    id: "212jX",
                    title: "Verify login error handling",
                    isDone: false,
                  },
                ],
              },
            ],
            members: [
              {
                _id: "u102",
                fullname: "Sean Mamistalov",
                color: "rgb(255, 152, 0)",
                imgUrl: "",
              },
            ],
            labels: [
              {
                id: "l103",
                title: "bug",
                color: "#ff4757",
              },
            ],
            byMember: {
              _id: "u103",
              fullname: "Pavel Yelsukov",
              color: "rgb(0, 150, 136)",
              imgUrl: "",
            },
            style: {
              backgroundColor: "#26de81",
            },
          },
          {
            id: "c102",
            title: "Implement Dark Mode",
            archivedAt: null,
            status: "todo",
            priority: "medium",
            dueDate: "2024-09-22",
            description: "Add a dark mode toggle to the settings.",
            comments: [],
            checklists: [
              {
                id: "YEhmF2",
                title: "Checklist",
                todos: [
                  {
                    id: "212jX2",
                    title: "Design dark mode color scheme",
                    isDone: false,
                  },
                ],
              },
            ],
            members: [
              {
                _id: "u103",
                fullname: "Pavel Yelsukov",
                color: "rgb(0, 150, 136)",
                imgUrl: "",
              },
              {
                _id: "u101",
                fullname: "Daniel Yacovi",
                color: "rgb(33, 150, 243)",
                imgUrl: "",
              },
            ],
            labels: [
              {
                id: "l104",
                title: "feature",
                color: "#1e90ff",
              },
            ],
            byMember: {
              _id: "u103",
              fullname: "Pavel Yelsukov",
              color: "rgb(0, 150, 136)",
              imgUrl: "",
            },
            style: {
              backgroundColor: "#fd9644",
            },
          },
        ],
        style: {},
      },
      {
        id: "g102",
        title: "Backlog Client",
        tasks: [
          {
            id: "c103",
            title: "Refactor Dashboard",
            archivedAt: null,
            status: "inProgress",
            priority: "high",
            dueDate: "2024-09-25",
            description: "Clean up the dashboard code and improve performance.",
            comments: [
              {
                id: "ZdPnm3",
                title: "This needs to be done ASAP.",
                createdAt: 1590999817437,
                byMember: {
                  _id: "u101",
                  fullname: "Daniel Yacovi",
                  imgUrl: "",
                },
              },
            ],
            checklists: [
              {
                id: "YEhmF3",
                title: "Checklist",
                todos: [
                  {
                    id: "212jX3",
                    title: "Optimize API calls",
                    isDone: false,
                  },
                ],
              },
            ],
            members: [
              {
                _id: "u102",
                fullname: "Sean Mamistalov",
                color: "rgb(255, 152, 0)",
                imgUrl: "",
              },

              {
                _id: "u101",
                fullname: "Daniel Yacovi",
                color: "rgb(33, 150, 243)",
                imgUrl: "",
              },
            ],
            labels: [
              {
                id: "l105",
                title: "refactor",
                color: "#ff6b81",
              },
            ],
            byMember: {
              _id: "u102",
              fullname: "Sean Mamistalov",
              color: "rgb(255, 152, 0)",
              imgUrl: "",
            },
            style: {
              backgroundColor: "#26de81",
            },
          },
          {
            id: "c104",
            title: "Help me",
            archivedAt: 1589983468418,
            status: "inProgress",
            priority: "high",
            dueDate: "2024-09-24",
            description: "Please help me to fix this bug",
            comments: [
              {
                id: "ZdPnm",
                title: "also @yaronb please CR this",
                createdAt: 1590999817436,
                byMember: {
                  _id: "u101",
                  fullname: "Daniel Yacovi",
                  imgUrl: "",
                },
              },
            ],
            checklists: [
              {
                id: "YEhmF",
                title: "Checklist",
                todos: [
                  {
                    id: "212jX",
                    title: "To Do 1",
                    isDone: false,
                  },
                ],
              },
            ],
            members: [
              {
                _id: "u101",
                fullname: "Daniel Yacovi",
                color: "rgb(33, 150, 243)",
                imgUrl: "",
              },
            ],
            labels: [
              {
                id: "l103",
                title: "full of bugs",
                color: "#579dff",
              },
            ],
            byMember: {
              _id: "u103",
              fullname: "Pavel Yelsukov",
              color: "rgb(0, 150, 136)",
              imgUrl: "",
            },
            style: {
              backgroundColor: "#26de81",
            },
          },
        ],
        style: {},
      },
      {
        id: "g103",
        title: "In development",
        archivedAt: 1589983468418,
        tasks: [
          {
            id: "c105",
            title: "Update Documentation",
            archivedAt: null,
            status: "todo",
            priority: "low",
            dueDate: "2024-09-30",
            description: "Review and update project documentation.",
            comments: [],
            checklists: [
              {
                id: "YEhmF4",
                title: "Checklist",
                todos: [
                  {
                    id: "212jX4",
                    title: "Update README file",
                    isDone: false,
                  },
                ],
              },
            ],
            members: [],
            labels: [
              {
                id: "l106",
                title: "documentation",
                color: "#a55eea",
              },
            ],
            byMember: {
              _id: "u101",
              fullname: "Daniel Yacovi",
              color: "rgb(33, 150, 243)",
              imgUrl: "",
            },
            style: {
              backgroundColor: "#fed330",
            },
          },
          {
            id: "c106",
            title: "Implement CI/CD Pipeline",
            archivedAt: null,
            status: "todo",
            priority: "high",
            dueDate: "2024-09-28",
            description: "Set up continuous integration and delivery pipeline.",
            comments: [
              {
                id: "ZdPnm6",
                title: "This will improve our deployment process.",
                createdAt: 1590999817438,
                byMember: {
                  _id: "u102",
                  fullname: "Sean Mamistalov",
                  imgUrl: "",
                },
              },
            ],
            checklists: [
              {
                id: "YEhmF6",
                title: "Checklist",
                todos: [
                  {
                    id: "212jX6",
                    title: "Research CI/CD tools",
                    isDone: false,
                  },
                ],
              },
            ],
            members: [
              {
                _id: "u101",
                fullname: "Daniel Yacovi",
                color: "rgb(33, 150, 243)",
                imgUrl: "",
              },
            ],
            labels: [
              {
                id: "l107",
                title: "deployment",
                color: "#20bf6b",
              },
            ],
            byMember: {
              _id: "u103",
              fullname: "Pavel Yelsukov",
              color: "rgb(0, 150, 136)",
              imgUrl: "",
            },
            style: {
              backgroundColor: "#26de81",
            },
          },
        ],
        style: {},
      },
      {
        id: "g104",
        title: "Done",
        archivedAt: 1589983468418,
        tasks: [
          {
            id: "c107",
            title: "Setup Dev Environment",
            archivedAt: null,
            status: "done",
            priority: "medium",
            dueDate: "2024-09-21",
            description:
              "Configure development environment for new developers.",
            comments: [],
            checklists: [
              {
                id: "YEhmF7",
                title: "Checklist",
                todos: [
                  {
                    id: "212jX7",
                    title: "Install necessary tools",
                    isDone: true,
                  },
                ],
              },
            ],
            members: [],
            labels: [
              {
                id: "l108",
                title: "setup",
                color: "#4b7bec",
              },
            ],
            byMember: {
              _id: "u101",
              fullname: "Daniel Yacovi",
              color: "rgb(33, 150, 243)",
              imgUrl: "",
            },
            style: {
              backgroundColor: "#f7b731",
            },
          },
          {
            id: "c108",
            title: "Fix Logout Bug",
            archivedAt: null,
            status: "inProgress",
            priority: "medium",
            dueDate: "2024-09-26",
            description: "Resolve the issue where users can't log out.",
            comments: [
              {
                id: "ZdPnm8",
                title: "@pavel check the session timeout.",
                createdAt: 1590999817439,
                byMember: {
                  _id: "u102",
                  fullname: "Sean Mamistalov",
                  imgUrl: "",
                },
              },
            ],
            checklists: [
              {
                id: "YEhmF8",
                title: "Checklist",
                todos: [
                  {
                    id: "212jX8",
                    title: "Check session management",
                    isDone: false,
                  },
                ],
              },
            ],
            members: [],
            labels: [
              {
                id: "l109",
                title: "bug",
                color: "#ff4757",
              },
            ],
            byMember: {
              _id: "u103",
              fullname: "Pavel Yelsukov",
              color: "rgb(0, 150, 136)",
              imgUrl: "",
            },
            style: {
              backgroundColor: "#fd9644",
            },
          },
        ],
        style: {},
      },
      {
        id: "g105",
        title: "QA",
        tasks: [
          {
            id: "c109",
            title: "Create User Profiles",
            archivedAt: null,
            status: "todo",
            priority: "high",
            dueDate: "2024-09-27",
            description: "Implement user profile functionality.",
            comments: [],
            checklists: [
              {
                id: "YEhmF9",
                title: "Checklist",
                todos: [
                  {
                    id: "212jX9",
                    title: "Design profile layout",
                    isDone: false,
                  },
                ],
              },
            ],
            members: [
              {
                _id: "u103",
                fullname: "Pavel Yelsukov",
                color: "rgb(0, 150, 136)",
                imgUrl: "",
              },
            ],
            labels: [
              {
                id: "l110",
                title: "feature",
                color: "#1e90ff",
              },
            ],
            byMember: {
              _id: "u103",
              fullname: "Pavel Yelsukov",
              color: "rgb(0, 150, 136)",
              imgUrl: "",
            },
            style: {
              backgroundColor: "#26de81",
            },
          },
          {
            id: "c111",
            title: "Implement Notifications",
            archivedAt: null,
            status: "todo",
            priority: "medium",
            dueDate: "2024-09-30",
            description: "Add notification functionality for task updates.",
            comments: [
              {
                id: "ZdPnm11",
                title: "Make sure to include push notifications.",
                createdAt: 1590999817441,
                byMember: {
                  _id: "u101",
                  fullname: "Daniel Yacovi",
                  imgUrl: "",
                },
              },
            ],
            checklists: [
              {
                id: "YEhmF11",
                title: "Checklist",
                todos: [
                  {
                    id: "212jX11",
                    title: "Implement push notifications",
                    isDone: false,
                  },
                ],
              },
            ],
            members: [
              {
                _id: "u102",
                fullname: "Sean Mamistalov",
                color: "rgb(255, 152, 0)",
                imgUrl: "",
              },
            ],
            labels: [
              {
                id: "l111",
                title: "feature",
                color: "#4b7bec",
              },
            ],
            byMember: {
              _id: "u103",
              fullname: "Pavel Yelsukov",
              color: "rgb(0, 150, 136)",
              imgUrl: "",
            },
            style: {
              backgroundColor: "#f7b731",
            },
          },
        ],
        style: {},
      },
      {
        id: "g106",
        title: "Ready for Production",
        tasks: [
          {
            id: "c112",
            title: "Improve Accessibility",
            archivedAt: null,
            status: "inProgress",
            priority: "high",
            dueDate: "2024-10-01",
            description: "Ensure the app is accessible to all users.",
            comments: [],
            checklists: [
              {
                id: "YEhmF12",
                title: "Checklist",
                todos: [
                  {
                    id: "212jX12",
                    title: "Add screen reader support",
                    isDone: false,
                  },
                ],
              },
            ],
            members: [],
            labels: [
              {
                id: "l112",
                title: "accessibility",
                color: "#a55eea",
              },
            ],
            byMember: {
              _id: "u101",
              fullname: "Daniel Yacovi",
              color: "rgb(33, 150, 243)",
              imgUrl: "",
            },
            style: {
              backgroundColor: "#fd9644",
            },
          },
          {
            id: "c113",
            title: "Refactor Authentication",
            archivedAt: null,
            status: "todo",
            priority: "high",
            dueDate: "2024-10-02",
            description:
              "Refactor the authentication system for better security.",
            comments: [
              {
                id: "ZdPnm13",
                title: "Ensure compatibility with OAuth2.",
                createdAt: 1590999817443,
                byMember: {
                  _id: "u102",
                  fullname: "Sean Mamistalov",
                  imgUrl: "",
                },
              },
            ],
            checklists: [
              {
                id: "YEhmF13",
                title: "Checklist",
                todos: [
                  {
                    id: "212jX13",
                    title: "Implement token-based authentication",
                    isDone: false,
                  },
                ],
              },
            ],
            members: [
              {
                _id: "u103",
                fullname: "Pavel Yelsukov",
                color: "rgb(0, 150, 136)",
                imgUrl: "",
              },
            ],
            labels: [
              {
                id: "l113",
                title: "security",
                color: "#eb3b5a",
              },
            ],
            byMember: {
              _id: "u103",
              fullname: "Pavel Yelsukov",
              color: "rgb(0, 150, 136)",
              imgUrl: "",
            },
            style: {
              backgroundColor: "#26de81",
            },
          },
        ],
        style: {},
      },
    ],
    activities: [
      {
        id: "a101",
        title: "Changed Color",
        createdAt: 154514,
        byMember: {
          _id: "u101",
          fullname: "Daniel Yacovi",
          imgUrl: "",
        },
        group: {
          id: "g101",
          title: "Backlog Server",
        },
        task: {
          id: "c101",
          title: "Replace Logo",
        },
      },
    ],
    cmpsOrder: ["StatusPicker", "MemberPicker", "DatePicker"],
  },
];

_createBoard();

// export const getProjectData = () => {
//   const storedData = localStorage.getItem('boards')
//   if (storedData) {
//     return new Promise(resolve => resolve(JSON.parse(storedData)))
//   } else {
//     localStorage.setItem('board', JSON.stringify(data))
//     return new Promise(resolve => resolve(data))
//   }
// }

async function query(filterBy = { title: "" }) {
  const boards = await storageService.query(STORAGE_KEY);
  const { title } = filterBy;

  if (title) {
    const regex = new RegExp(filterBy.title, "i");
    boards = boards.filter((board) => regex.test(board.group.title)); // || regex.test(board.description)
  }
  return boards;
}

async function getLabels(boardId) {
  try {
      const boards = await storageService.query(STORAGE_KEY);
      const board = boards.find(board => board._id === boardId);
      return board ? board.labels : [];
  } catch (err) {
      console.log('Failed to get labels:', err);
      return [];
  }
}

async function getStarredBoards() {
  const boards = await storageService.query(STORAGE_KEY);
  var starredBoards = boards.filter((board) => board.isStarred === true);
  if (!starredBoards) return;
  return starredBoards;
}

function getById(boardId) {
  return storageService.get(STORAGE_KEY, boardId);
}

async function remove(boardId) {
  await storageService.remove(STORAGE_KEY, boardId);
}

function save(board) {
  if (board._id) {
    return storageService.put(STORAGE_KEY, board);
  } else {
    return storageService.post(STORAGE_KEY, board);
  }
}

async function addBoardMsg(boardId, txt) {
  // Later, this is all done by the backend
  const board = await getById(boardId);

  const msg = {
    id: makeId(),
    by: userService.getLoggedinUser(),
    txt,
  };
  board.msgs.push(msg);
  await storageService.put(STORAGE_KEY, board);

  return msg;
}

function _createBoard() {
  let boards = loadFromStorage(STORAGE_KEY);
  if (!boards || !boards.length) {
    saveToStorage(STORAGE_KEY, data);
  }
}
