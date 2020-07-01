import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <motion.div className="home container">
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
          whileHover={{
            scale: 1.1,
            textShadow: "2px 0px 8px rgb(255, 255, 255)",
            boxShadow: "0px 0px 8px rgb(255, 255, 255)"
          }}
          transition={{ duration: 0.3 }}
        >
          <p>Enter the Zone</p>
        </motion.button>
      </Link>
    </motion.div >
  )
}

export default Home