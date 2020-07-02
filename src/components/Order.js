import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const containerVariants = {
  hidden: {
    opacity: 0,
    x: '100vw'
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      mass: 0.4,
      damping: 8,
      duration: 0.7,
      when: 'beforeChildren',
      staggerChildren: 0.6
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

const childVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
}

const Order = ({ pizza }) => {

  return (
    <motion.div className='container order'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
    >

      <h2>Thanks bb :) You are my favorite bone boy </h2>

      <motion.p variants={childVariants}>You ordered some {pizza.base} bones</motion.p>
      <motion.div variants={childVariants}>
        {pizza.toppings.map(topping => <div key={topping}> {topping}!! </div>)}
      </motion.div>
    </motion.div>
  )
}

export default Order