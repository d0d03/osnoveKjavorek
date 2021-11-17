import React from 'react';

const List = (props) => {

    return(
        <div>
            {`${props.listName}:`}
            {props.items.map((item)=> (<div>{item}</div>))}
        </div>
    )
}

export default List;