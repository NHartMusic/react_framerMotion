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

const Species = ({ addSpecies, pizza }) => {
  const type = ['Human Bones', 'Rat Bones', 'Jellyfish Bones', 'Ocelot Bones']

  return (
    <motion.div className="species container"
      variants={containerVariants}
      initial='hidden'
      animate='visible'
    >
      <h3>Step 1: Choose your Species</h3>
      <ul>
        {type.map(species => {
          let spanClass = pizza.species === species ? 'active' : '';
          return (
            <motion.li key={species} onClick={() => addSpecies(species)}
              whileHover={{ scale: 1.3, originX: 0, color: '#D35FAE' }}
              transition={{ type: 'spring', stiffness: '200' }}
            >
              <span className={spanClass}>{species}</span>
            </motion.li>
          )
        })}
      </ul>

      {pizza.species && (
        <motion.div className="next"
          variants={nextVariants}
        >
          <Link to="/toppings">
            <motion.button
              whileHover={{
                scale: 1.1,
                textShadow: "2px 0px 8px rgb(255, 255, 255)",
                boxShadow: "0px 0px 8px rgb(255, 255, 255)"
              }}
            >Next</motion.button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  )
}

export default Species