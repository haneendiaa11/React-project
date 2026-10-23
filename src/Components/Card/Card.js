
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import card_1 from '../../assets/card_1.jpg';
import './Card.css';

const cards = [
  {
    title: 'Lizard',
    description: 'Lizards are a widespread group of reptiles.',
  },
  {
    title: 'Animals',
    description: 'Discover different types of animals.',
  },
  {
    title: 'Nature',
    description: 'Explore the beauty of nature.',
  },
  {
    title: 'Wildlife',
    description: 'Learn about wildlife around the world.',
  },
  {
    title: 'Reptiles',
    description: 'Discover amazing reptiles.',
  },
  {
    title: 'Birds',
    description: 'Learn about different bird species.',
  },
];

export default function CustomCard() {
  return (
    <div className="cards">
      {cards.map((item, index) => (
        <Card className="custom-card" key={index}>
          <CardMedia
            component="img"
            height="180"
            image={card_1}
            alt={item.title}
          />

          <CardContent>
            <Typography variant="h5" gutterBottom>
              {item.title}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              {item.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>              
  );
}
