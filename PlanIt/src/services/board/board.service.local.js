
import { storageService } from '../async-storage.service'
import { makeId, saveToStorage } from '../util.service'
import { userService } from '../user'

const STORAGE_KEY = 'board'

export const boardService = {
  query,
  getById,
  save,
  remove,
  addBoardMsg
}
window.cs = boardService

const data = [
  {
    _id: 'b1',
    title: "Final Proj",
    isStarred: false,
    archivedAt: 1589983468418,
    createdBy: {
      _id: "u101",
      fullname: "Daniel Yacovi",
      imgUrl: "",
    },
    style: {
      backgroundImage: "",
    },
    labels: [
      {
        id: "l101",
        title: "Done",
        color: "#61bd4f",
      },
      {
        id: "l102",
        title: "Progress",
        color: "#9f8fef",
      },
    ],
    members: [
      {
        _id: "u102",
        fullname: "Sean Mamistalov",
        imgUrl: "",
      },
      {
        _id: "u103",
        fullname: "Pavel Yelsukov",
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
            title: "Replace logo",
          },
          {
            id: "c102",
            title: "Add Samples",
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
            title: "Do that",
            archivedAt: 1589983468418,
          },
          {
            id: "c104",
            title: "Help me",
            status: "inProgress",
            priority: "high",
            dueDate: "2024-09-24",
            description: "description",
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
            memberIds: ["u102"],
            labelIds: ["l101", "l102"],
            byMember: {
              _id: "u103",
              fullname: "Pavel Yelsukov",
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
            title: "Main home page",
          },
          {
            id: "c106",
            title: "Footer",
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
            title: "Login-cmp",
          },
          {
            id: "c108",
            title: "SCSS vars",
          },
        ],
        style: {},
      },
      {
        id: "g105",
        title: "QA",
        tasks: [
          {
            id: "c108",
            title: "Conduct User Testing",
            status: "pending",
            priority: "high",
          },
          {
            id: "c109",
            title: "Bug Fixes",
            status: "pending",
            priority: "high",
          },
        ],
        style: {},
      },
      {
        id: "g106",
        title: "Ready for Production",
        tasks: [
          {
            id: "c110",
            title: "Finalize Documentation",
            status: "pending",
          },
          {
            id: "c114",
            title: "Deploy to Staging",
            status: "pending",
            priority: "high",
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
    _id: 'b2',
    title: "Final Proj",
    isStarred: false,
    archivedAt: 1589983468418,
    createdBy: {
      _id: "u101",
      fullname: "Daniel Yacovi",
      imgUrl: "",
    },
    style: {
      backgroundImage: "",
    },
    labels: [
      {
        id: "l101",
        title: "Done",
        color: "#61bd4f",
      },
      {
        id: "l102",
        title: "Progress",
        color: "#9f8fef",
      },
    ],
    members: [
      {
        _id: "u102",
        fullname: "Sean Mamistalov",
        imgUrl: "",
      },
      {
        _id: "u103",
        fullname: "Pavel Yelsukov",
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
            title: "Replace logo",
          },
          {
            id: "c102",
            title: "Add Samples",
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
            title: "Do that",
            archivedAt: 1589983468418,
          },
          {
            id: "c104",
            title: "Help me",
            status: "inProgress",
            priority: "high",
            dueDate: "2024-09-24",
            description: "description",
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
            memberIds: ["u102"],
            labelIds: ["l101", "l102"],
            byMember: {
              _id: "u103",
              fullname: "Pavel Yelsukov",
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
            title: "Main home page",
          },
          {
            id: "c106",
            title: "Footer",
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
            title: "Login-cmp",
          },
          {
            id: "c108",
            title: "SCSS vars",
          },
        ],
        style: {},
      },
      {
        id: "g105",
        title: "QA",
        tasks: [
          {
            id: "c108",
            title: "Conduct User Testing",
            status: "pending",
            priority: "high",
          },
          {
            id: "c109",
            title: "Bug Fixes",
            status: "pending",
            priority: "high",
          },
        ],
        style: {},
      },
      {
        id: "g106",
        title: "Ready for Production",
        tasks: [
          {
            id: "c110",
            title: "Finalize Documentation",
            status: "pending",
          },
          {
            id: "c114",
            title: "Deploy to Staging",
            status: "pending",
            priority: "high",
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

_createBoard()


// export const getProjectData = () => {
//   const storedData = localStorage.getItem('boards')
//   if (storedData) {
//     return new Promise(resolve => resolve(JSON.parse(storedData)))
//   } else {
//     localStorage.setItem('board', JSON.stringify(data))
//     return new Promise(resolve => resolve(data))
//   }
// }


async function query(filterBy = { title: '' }) {
  var boards = JSON.parse(localStorage.getItem('boards'))
  if (boards) return boards
  boards = await storageService.query(STORAGE_KEY)
  const { title } = filterBy

  if (title) {
    const regex = new RegExp(filterBy.title, 'i')
    boards = boards.filter(board => regex.test(board.group.title)) // || regex.test(board.description)
  }
  return boards
}

function getById(boardId) {
  console.log('boardId:', boardId)
  return storageService.get(STORAGE_KEY, boardId)
}

async function remove(boardId) {
  // throw new Error('Nope')
  await storageService.remove(STORAGE_KEY, boardId)
}

function save(board) {
  console.log("🚀 ~ save ~ board:", board)

  if (board._id) {
    return storageService.put(STORAGE_KEY, board)
  } else {
    return storageService.post(STORAGE_KEY, board)
  }
}

async function addBoardMsg(boardId, txt) {
  // Later, this is all done by the backend
  const board = await getById(boardId)

  const msg = {
    id: makeId(),
    by: userService.getLoggedinUser(),
    txt
  }
  board.msgs.push(msg)
  await storageService.put(STORAGE_KEY, board)

  return msg
}

function _createBoard() {
  saveToStorage(STORAGE_KEY, data)
}