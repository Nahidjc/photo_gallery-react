import React from 'react';

const UploadForm = () => {
    const handleUpload = (e) => {
        let selected = e.target.files[0];
        console.log(selected);
    }
    return (
        <div>
            <form action="">
                <input type="file" onChange={handleUpload} />
            </form>
        </div>
    );
};

export default UploadForm;