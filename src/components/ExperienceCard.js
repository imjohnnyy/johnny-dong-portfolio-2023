import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const ExperienceCard = () => {
  return (
    <Card className="flex mx-auto items-center justify-center w-[635px] h-[200px] max-lg:flex-col max-lg:w-[auto] max-lg:h-[200px] my-5">
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className="flex items-center justify-center mx-auto">
          UP Education
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Oct 2023 - Present
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ marginTop: 1 }}>
          Graduate Developer
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ marginTop: 1 }}>
          <strong>Description:</strong>description
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ marginTop: 1 }}>
          <strong>Skills:</strong> skills
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ExperienceCard;
