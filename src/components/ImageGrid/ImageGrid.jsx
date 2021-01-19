import React from 'react';
import useFirestore from '../../hooks/useFirestore';
import styles from './ImageGrid.module.css'
import { motion } from 'framer-motion'

const ImageGrid = ({ setSelectedImg }) => {
    const { docs } = useFirestore('images')

    return (
        <div className={styles.imgGrid}>
            { docs && docs.map(doc => (
                <motion.div
                    className={styles.imgWrap}
                    key={doc.id}
                    layout // If true, this component will automatically animate to its new position when its layout changes.
                    whileHover={{ opacity: 1 }}
                    onClick={() => setSelectedImg(doc.url)}>

                    <motion.img
                        src={doc.url}
                        alt="uploaded"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                    />
                </motion.div>
            ))}
        </div>
    );
};

export default ImageGrid