import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const buttonVariants = {
  hover: {
    scale: 1.1,
    transition: { yoyo: 5, duration: 0.5 },
    textShadow: "2px 0px 8px rgb(255, 255, 255)",
    boxShadow: "0px 0px 8px rgb(255, 255, 255)"
  }
}

const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.6, duration: 1.0 }
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' }
  }
}

const Home = () => {
  return (
    <motion.div className="home container"
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <h3>Welcome to </h3>
      <motion.h2
        initial={{ opacity: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        animate={{ opacity: 1, fontSize: 50, color: '#ff2994', textShadow: "2px 0px 8px #D35FAE" }}
      >
        The BONE CLONE ZONE
      </motion.h2>
      <Link to="/base">
        <motion.button
          variants={buttonVariants}
          whileHover='hover'
          transition={{ duration: 0.3 }}
        >
          <p>Enter the Zone</p>
        </motion.button>
      </Link>
    </motion.div >
  )
}

export default Home