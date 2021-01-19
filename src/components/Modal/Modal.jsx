import React from 'react';
import styles from './Modal.module.css'
import { motion } from 'framer-motion'

const Modal = ({ selectedImg, setSelectedImg }) => {
    // img가 아닌 backdrop 눌렀을 때만 모달 닫히기
    const handleClick = (e) => {
        if (e.target === e.currentTarget) { //e.target.classList.contains('backdrop')
            setSelectedImg(null)
        }
    }

    return (
        <motion.div
            className={styles.backdrop}
            onClick={handleClick}>
            <motion.img
                src={selectedImg}
                alt='enlarged'
                initial={{ y: "-100vh" }}
                animate={{ y: 0 }}
            />
        </motion.div>
    );
};

export default Modal;