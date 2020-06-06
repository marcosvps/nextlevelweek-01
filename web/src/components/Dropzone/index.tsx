import React, {useCallback} from 'react';
import {useDropzone} from 'react-dropzone';
import './styles.css';
import {FiUpload} from 'react-icons/fi'
import { useState } from 'react';



interface Props {
    onFileUploaded: (file: File) => void;
}

const  Dropzone: React.FC<Props> = ({onFileUploaded}) => {


    const [selectedFileUrl, setSelectdFileUrl] = useState('');


    const onDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0];
        const fileUrl = URL.createObjectURL(file);

        setSelectdFileUrl(fileUrl);
        onFileUploaded(file)
    }, [onFileUploaded])
    const {getRootProps, getInputProps} = useDropzone({
        onDrop,
        accept: 'image/*'
        })

    return (
        <div className="dropzone" {...getRootProps()}>
            <input {...getInputProps()} accept="image/*"/>
            {
                selectedFileUrl
                    ? <img src={selectedFileUrl} alt="Point Thumbnail"/> 
                    : (
                        <p><FiUpload />Imagem do Estabelecimento</p>
                    )
            }
        </div>
    )
}

export default Dropzone;