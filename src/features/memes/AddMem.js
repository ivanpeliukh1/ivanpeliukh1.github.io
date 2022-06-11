import { useState } from 'react';
import styles from './AddMem.module.css'
import './AddMem.module.css'
import { asyncAddMem } from './memSlice';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router';


function AddMeme () {
    const dispatch = useDispatch()
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);
    const [memTitle, setMemTitle] = useState('')
    const [isEmptyData, setIsEmptyData] = useState(false)
    const [redirect, setRedirect] = useState(false)

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsFilePicked(true);
    };

    

    const handleSubmission = () => {
        setIsEmptyData(false);
        if (selectedFile && memTitle) {
            dispatch(asyncAddMem({img: selectedFile, title: memTitle, upvotes: 0, downvotes: 0}))
            setRedirect(true)
        } else {
            setIsEmptyData(true)
        }
    };

    return(
    <div className={styles.file_selector_container}>
        <input
            className={styles.text_input}
            type='text'
            onChange={(e) => setMemTitle(e.target.value)}
            placeholder="Name mem"
        />
        <label
            htmlFor="file-upload"
            className={isFilePicked ? styles.file_selected : styles.file_not_selected}>
                {isFilePicked ? 'Image selected' : 'Select image'}
        </label>
        <input
            id="file-upload"
            style={{display: 'none'}}
            type="file"
            name="file"
            onChange={changeHandler}
        />
        {isEmptyData && <span className={styles.warning_message}>Fill all input lines</span>}
        {redirect && <Navigate to="/regular" replace />}
        <div className={styles.btn_add}>
            <button onClick={handleSubmission}>Add</button>
        </div>
    </div>
    )
}

export default AddMeme