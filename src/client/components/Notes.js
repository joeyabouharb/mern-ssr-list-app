import React from 'react'


export const Notes = (props) => {
 
    const {notes} = props;
    console.log(notes);
    const dom = (
    <div>
    {
      notes.map(({name, description, date}, index) => {
        <div key={index}>
        <span>{name} {description} {date}</span>
        </div>
      })
    }
    </div>
    )
    console.log(dom);
    return dom;
  }
