// src/pages/Predict.js

import "antd/dist/antd.min.css"; 
import { Button } from "antd";
import { AimOutlined } from '@ant-design/icons';

//import { Backdrop, Chip, CircularProgress, Grid, Stack } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

import { Avatar, Box, ImageListItem, ImageListItemBar } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

// [2023-02-17 18:52] --- import the required library for state management 
import { React, useState, useEffect } from 'react'; // eslint-disable-line 

function Predict(props) {
  // [2023-02-17 18:52] --- 1. Add the logic that will make the request to the Flask server, along with some state.
  const [file, setFile] = useState();
  const [filename, setFileName] = useState(); // [2023-02-25 21:16] use filename 
  const [prediction, setPrediction] = useState(null);
  const [filenameUrl, setFilenameUrl] = useState(null); // [2023-02-25 21:16] for preview 

  const onChange = e => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  // PASSED [2023-02-25 23:02] --- https://blog.logrocket.com/using-filereader-api-preview-images-react/
  useEffect(() => {
    let fileReader, isCancel = false;
    if (file) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          setFilenameUrl(result);
        }
      };
      fileReader.readAsDataURL(file);
    }
    return () => {
      isCancel = true; console.log(file);
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };

  }, [file]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    console.log(file);

    fetch('http://localhost:5000/upload', {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setPrediction(data);
      });
  };

  return (
    <>

      {/* [2023-02-17 18:52] --- 2. Add the form to use the functions and state defined. */}
      <form onSubmit={onSubmit}>
        <div className='custom-file'>
          

          <div style={{ padding: 20 }}>

          <Box
            sx={{
            bgcolor: "#E2E2E7",
            boxShadow: 0,
            borderRadius: 5,
            p: 2,
            minWidth: 100,
            }}
          >
            <Box sx={{ color: 'text.secondary' }}>
            <IconButton 
              color="primary" 
              size="large"
              aria-label="upload picture" 
              component="label">
            <input
              hidden
              type='file'
              className='custom-file-input'
              id='customFile'
              onChange={onChange} />
            
            <Avatar sx={{ bgcolor: 'lightsalmon', height: 52, width: 52 }} aria-label="recipe">
            <PhotoCamera sx={{ height: 38, width: 38 }} />
            </Avatar>
            </IconButton>
            <br/>
            </Box>

            <Box mt={2} sx={{ color: 'text.primary', fontSize: 10, fontWeight: 'medium' }}>
              press camera icon above to choose a file
            </Box>

            {file && 
            <Box mt={2}>
              
              <ImageListItem cols={1}>

            <img
              src={filenameUrl}
              width="100%"
              alt=""
              style={{ borderRadius: '0px 0px' }} 
            />
            <ImageListItemBar
              title={filename}
              subtitle=""
              actionIcon={
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.74)' }}
                  aria-label={`info about this image`}
                  size="large"
                >
                <InfoIcon />
                </IconButton>
              }
            />

              </ImageListItem>

            </Box>}

          </Box>

          </div>

        </div>

        {file && 
        <Button
          type="danger"
          shape="round"
          onClick={onSubmit}
          icon={<AimOutlined />} 
          size="large"
        >
          <input
            hidden
            type='submit'
            value='Upload'
            className='btn btn-primary btm-block mt-4' 
          />
            &nbsp;&nbsp;Check now
        </Button>
        }
      </form>

      {prediction && 
      <div style={{ paddingTop: 25 }}>
        foto ini menunjukkan pola kain:<br />
        {prediction && <h1>{prediction.message}</h1>}
      </div>
      }

      <div style={{ padding: 20 }}>

        <Box
          sx={{
            bgcolor: 'lightskyblue',
            boxShadow: 0,
            borderRadius: 5,
            p: 2,
            minWidth: 100,
          }}
        >
            <Box sx={{ color: 'text.secondary' }}>
            Lorem ipsum is typically a corrupted version of De finibus 
            bonorum et malorum, a 1st-century BC text by the Roman 
            statesman and philosopher Cicero, with words altered, 
            added, and removed to make it nonsensical and improper Latin.
            <br/><br/>
            Versions of the Lorem ipsum text have been used in 
            typesetting at least since the 1960s, when it was popularized 
            by advertisements for Letraset transfer sheets.[1] Lorem 
            ipsum was introduced to the digital world in the mid-1980s, 
            when Aldus employed it in graphic and word-processing templates 
            for its desktop publishing program PageMaker. Other popular 
            word processors, including Pages and Microsoft Word, have since 
            adopted Lorem ipsum,[2] as have many LaTeX packages,[3][4][5] 
            web content managers such as Joomla! and WordPress, and CSS 
            libraries such as Semantic UI.[6]
            </Box>
        </Box>
      </div>
      <br/><br/><br/><br/><br/><br/>
    </>
  );
}

export default Predict;
