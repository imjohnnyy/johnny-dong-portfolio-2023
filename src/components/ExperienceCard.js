import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { ExperienceList } from './ExperienceList';

const ExperienceCard = () => {
  return (
    <div>
      {ExperienceList.map((experience, index) => {
        // Destructure the properties of each experience
        const { companyName, description, duration, role, skills } = experience;
        
        return (
          <Card key={index} className="flex mx-auto items-center justify-center w-[635px] h-[200px] max-lg:flex-col max-lg:w-[auto] max-lg:h-[200px] my-5">
            <CardContent>
              <Typography gutterBottom variant="h5" component="div"  className="flex items-center justify-center mx-auto">
                {companyName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {duration}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ marginTop: 1 }}>
                {role}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ marginTop: 1 }}>
                <strong>Description:</strong> <a href={description} target="_blank" rel="noopener noreferrer">{description}</a>
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ marginTop: 1 }}>
                <strong>Skills:</strong> {skills}
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default ExperienceCard;
