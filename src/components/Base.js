import React from 'react';
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

const buttonVariants = {
  hover: {
    scale: 1.1,
    transition: { yoyo: 5, duration: 0.5 },
    textShadow: "2px 0px 8px rgb(255, 255, 255)",
    boxShadow: "0px 0px 8px rgb(255, 255, 255)"
  }
}

const Base = ({ addBase, pizza }) => {
  const type = ['Human Bones', 'Rat Bones', 'Jellyfish Bones', 'Ocelot Bones']

  return (
    <motion.div className="base container"
      variants={containerVariants}
      initial='hidden'
      animate='visible'
    >
      <h3>Step 1: Choose your base</h3>
      <ul>
        {type.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li key={base} onClick={() => addBase(base)}
              whileHover={{ scale: 1.3, originX: 0, color: '#D35FAE' }}
              transition={{ type: 'spring', stiffness: '200' }}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div className="next"
          variants={nextVariants}
        >
          <Link to="/toppings">
            <motion.button
              variants={buttonVariants}
              whileHover='hover'
            >
              Next</motion.button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  )
}

export default Base