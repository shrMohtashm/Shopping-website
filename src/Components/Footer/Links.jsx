import React from 'react'
import { Link } from 'react-router-dom';

export default function Links({path,title}) {
  return (
              <li>
                <Link to={path} target="_blank" className="text-white text-decoration-none">{title}</Link>
              </li>
  )
}
