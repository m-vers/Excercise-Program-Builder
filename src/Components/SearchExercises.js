import React, { useEffect, useState} from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollBar from './HorizontalScrollBar';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExerciseData = async() => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      setBodyParts(['all', ...bodyPartsData]);
    }

    fetchExerciseData();
  }, []);

  const handleSearch = async() => {
    if(search) {
      const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      const searchedExercises = exerciseData.filter(
        exercise => exercise.name.toLowerCase().inlcudes(search)
        || exercise.target.toLowerCase().inlcudes(search)
        || exercise.equipment.toLowerCase().inlcudes(search)
        || exercise.bodyPart.toLowerCase().inlcudes(search)
      );
      console.log(searchedExercises);
      
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

      setSearch('');
      setExercises(searchedExercises);
    };
  };

  return (
    <Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>
      <Typography fontWeight='700px' mb='50px' textAlign='center'
      sx={{ fontSize: { lg: '44px', xs: '30px'}}}>Explore Exercises</Typography>

      <Box position='relative' mb='72px'>
        <TextField 
        sx={{
          input: { fontWeight: '700px', border: 'none', borderRadius: '4px'},
          width: { lg: '800px', xs: '350px' },
          backgroundColor: '#fff', 
          borderRadius: '4px'
        }}
        height='76px'
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
        placeholder='Search Exercises'
        type='text'
        />

        <Button className='search-btn'
        sx={{ 
          bgcolor: '#ff2625',
          color: '#fff',
          textTransform: 'none',
          width: { lg: '175px', xs: '80px' },
          fontSize: { lg: '20px',xs: '14px' },
          height: '56px',
          position: 'absolute',
          right: '0'
        }}onClick={handleSearch}>Search</Button>
      </Box>

      <Box sx={{position: 'relative', width: '100%', padding: '20px'}}>
        <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts/>
      </Box>
    </Stack>
  );
};

export default SearchExercises;