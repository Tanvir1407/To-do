import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

export default function Todos() {
  const todos = useSelector((state) => state.todos);
  const filters = useSelector(((state)=>state.filters));

  const statusFiltering = todo => {
          const { status } = filters;
          switch (status) {
            case 'Complete':
              return todo.completed;
            case "Incomplete":
              return !todo.completed;
            default:
              return true;
          }
  }
  const colorFiltering = todo => {
          const { colors } = filters;
          if (colors.length > 0) {
            return colors.includes(todo?.color)
          }
          return true;
  }
  
  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {todos
        .filter(statusFiltering)
        .filter(colorFiltering)
        .map(todo => <TodoItem todo={todo} key={todo.id} />)}
    </div>
  );
}
