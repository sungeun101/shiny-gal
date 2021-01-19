import React, { useEffect } from 'react';
import useStorage from '../../hooks/useStorage'
import styles from './ProgressBar.module.css'
import { motion } from 'framer-motion'

const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file)

  // progress === 100 && setFile(null)
  useEffect(() => {
    url && setFile(null)
  }, [url, setFile])

  return (
    <motion.div
      className={styles.progressBar}
      initial={{ width: 0 }}
      animate={{ width: progress + '%' }}>
    </motion.div>
  )
};

export default ProgressBar;