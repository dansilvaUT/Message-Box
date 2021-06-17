import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { connect } from 'react-redux';
import axios from 'axios';
import Submit from '../Buttons/Submit';
import './DropZone.scss';

const DropZone = (props) => {
    const [pic, setPic] = useState('');
    const { user_id } = props;
    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
        // setPic(acceptedFiles.path);
        updateProfilePic(user_id, acceptedFiles.path);
        console.log('d', acceptedFiles)
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
    console.log('user', props.user);

    const updateProfilePic = (id, pic) => {
        axios.post('/api/users/updatepic', { id, pic })
            .then(res => setPic(res.data))
            .catch(err => console.log(`Error: ${err.messafge}`));
    }
    //TODO FIX ISSUE WITH FILE
    return (
        <>
            <img src={pic} alt='description' />
            <div {...getRootProps()} className="drop-zone-container">
                <input {...getInputProps()} />
                {
                    isDragActive
                        ?
                        <p>Drop the files here ...</p>
                        :
                        <p>Drag 'n' drop some files here, or click to select files</p>
                }
            </div>
            {/* <Submit type="submit" func={}/> */}
        </>
    )
}

const mapStateToProps = reduxState => {
    return {
        user: reduxState.userReducer.user_id
    }
}

export default connect(mapStateToProps)(DropZone);