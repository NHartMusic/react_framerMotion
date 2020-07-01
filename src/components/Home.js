import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <motion.div className="home container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h3>Welcome to </h3>
      <motion.h2 animate={{ fontSize: 50, color: '#ff2994' }}>
        The BONE CLONE ZONE
      </motion.h2>
      <Link to="/base">
        <motion.button
          animate={{ scale: 0.7 }}
        >
          What Kinds of Bone Clones Do You Like to <motion.span animate={{ color: '#ff2994' }}>PLAY</motion.span> With?
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default Home