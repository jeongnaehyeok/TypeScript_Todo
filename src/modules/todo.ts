const ADD = 'todo/ADD' as const;
const DELETE = 'todo/DELETE' as const;
export const addTodo = (item: string) => ({ type: ADD, item });
export const deleteTodo = (index: string) => ({ type: DELETE, index });

type TodoAction = ReturnType<typeof addTodo> | ReturnType<typeof deleteTodo>;

function todo(state: string[] = [], action: TodoAction) {
  switch (action.type) {
    case ADD:
      return [...state, action.item];
    case DELETE:
      return [
        ...state.slice(0, Number(action.index)),
        ...state.slice(Number(action.index) + 1),
      ];
    default:
      return state;
  }
}

export default todo;
