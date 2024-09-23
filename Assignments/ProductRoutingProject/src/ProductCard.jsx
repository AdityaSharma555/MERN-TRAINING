import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { Link } from 'react-router-dom';

export default function ProductCard({ id, title, description, price, category, image }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={image}
        title={title}
      />

      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
      </CardContent>

      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Price: ${price}
        </Typography>
      </CardContent>

      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Category: {category}
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small">Share</Button>
        <Link to={`/product/${id}`}>Show Details</Link>
      </CardActions>
    </Card>
  );
}
