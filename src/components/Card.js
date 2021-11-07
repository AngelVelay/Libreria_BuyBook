import React ,{useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import MoreInfo from './MoreInfo'

export default function MultiActionAreaCard({book}) {

 const {author,book_image, description,title} = book

 const [open, setOpen] = useState(false);

 const handleOpen = () => setOpen(true);
 const handleClose = () => setOpen(false);

 

  return (

    <Card sx={{ maxWidth: 400 ,color:'gray' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          width="150"
          image={book_image}
          sx={{ objectFit:'contain',marginTop:'10px'}}/>

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">{title}</Typography>
          <Typography variant="body2" color="text.secondary">{description}</Typography>
          <Typography variant="h6" color="text.primary" mt={2}>Autor: {author}</Typography>
        </CardContent>

      </CardActionArea>
      <CardActions>
        <Button 
            size="large" 
            variant="contained" 
            color="success"
            sx={{margin: ' 0 auto'}}
            onClick={handleOpen}>Ver mas</Button>

            {open&&<MoreInfo book={book} handleOpen={handleOpen} handleClose={handleClose} open={open}/>}
      </CardActions>

    </Card>
  );
}