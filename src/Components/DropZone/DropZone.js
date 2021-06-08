import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import './DropZone.scss';

const DropZone = () => {
    const [pic, setPic] = useState('');
    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
        setPic(acceptedFiles.path);
        console.log('d', acceptedFiles)
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <div {...getRootProps()} className="drop-zone-container">
            <img src={pic} alt='description' />
            <input {...getInputProps()} />
            {
                isDragActive
                    ?
                    <p>Drop the files here ...</p>
                    :
                    <p>Drag 'n' drop some files here, or click to select files</p>
            }
        </div>
    )
}

export default DropZone;