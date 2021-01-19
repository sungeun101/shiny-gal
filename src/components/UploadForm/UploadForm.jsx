import React, { useState } from 'react'
import ProgressBar from '../ProgressBar/ProgressBar'
import styles from './UploadForm.module.css'

const UploadForm = () => {
    const [file, setFile] = useState(null)
    const [error, setError] = useState(null)

    const allowedtypes = ['image/png', 'image/jpeg']

    const handleChange = (e) => {
        let selected = e.target.files[0]

        if (selected && allowedtypes.includes(selected.type)) {
            setFile(selected)
            setError('')
        } else {
            setFile(null)
            setError('Please select an image file (png or jpeg)')
        }
    }

    return (
        <form className={styles.form}>
            <label className={styles.label}>
                <input type='file' onChange={handleChange} />
                <span>+</span>
            </label>
            <div className={styles.output}>
                {error && <div className={styles.error}>{error}</div>}
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile} />}
            </div>
        </form>
    )
};

export default UploadForm