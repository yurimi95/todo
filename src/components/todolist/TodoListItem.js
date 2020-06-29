import React from "react";

const TodoListItem = ({todo}) => {
    const {text, checked} = todo;
    return (
        <div className ="TodoListItem">
            <div className={cn('checkbox', {checked})}>
                {checked ? "dd" : "ww"}
            </div>
            <div className="text">{text}</div>
            <div className="Remove"></div>
        </div>
    )
}

export defalut TodoListItem;