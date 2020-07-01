import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {
    opacity: 0,
    x: '100vw'
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'tween',
      delay: 0.2,
      duration: 0.7
    }
  }
}

const nextVariants = {
  hidden: {
    x: '-100vw'
  },
  visible: {
    x: 0,
    transition: {
      type: 'spring',
      stiffness: '40'
    }
  }
}

const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['finger bones', 'pelvic bones', 'crunchy bones', 'chewy bones', 'rat juice', 'bone bone']

  return (
    <motion.div className="toppings container"
      variants={containerVariants}
      initial='hidden'
      animate='visible'
    >

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

    </motion.div>
  )
}

export default Toppings