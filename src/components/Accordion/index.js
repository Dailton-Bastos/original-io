import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import './styles.css'

function Accordion({ title, children }) {
  const [isOpen, setOpen] = useState(false)

  return (
    <div className="accordion">
      <div className='info'>
        <p
          className={`accordion-title ${isOpen ? "isOpen" : "" }`}
          onClick={() => setOpen(!isOpen)}
        >
          { title }
        </p>
        <ul className={`${isOpen ? "isOpen" : "" }`}>
          {children?.map((child) => (
            <li key={child}>
              <Link to='/'>{child}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Accordion