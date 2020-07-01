import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['finger bones', 'pelvic bones', 'crunchy bones', 'chewy bones', 'rat juice', 'bone bone']

  return (
    <div className="toppings container">

      <h3>Step 2: Choose Your Bones</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : ''
          return (
            <motion.li key={topping} onClick={() => addTopping(topping)}
              whileHover={{ scale: 1.3, originX: 0, color: '#D35FAE' }}
              transition={{ type: 'spring', stiffness: '200' }}
            >
              <span className={spanClass}>{topping}</span>
            </motion.li>
          )
        })}
      </ul>

      <Link to="/order">
        <button>
          Order
        </button>
      </Link>

    </div>
  )
}

export default Toppings