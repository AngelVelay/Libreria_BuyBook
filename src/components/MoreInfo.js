import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CardMedia from '@mui/material/CardMedia';
import LinkBuy from './LinkBuy';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({book,handleClose,open}) {


  const {author,book_image, description,title,publisher} = book
  
  /*function refreshPage() {
    window.location.reload(false);
  }*/

  return (
    <div>
      
      <Modal
        open={open}
        onClose={handleClose}
        //onClick={refreshPage}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
        
        <CardMedia
          component="img"
          height="250"
          width="150"
          image={book_image}
          sx={{ objectFit:'contain',marginBottom:'20px'}}/>

          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ mt: 2  ,textAlign:'center', fontWeight: 'bold'}}>Titulo: {title}</Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }} >{description}</Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ mt: 2 }}> Autor: {author}</Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ mt: 2 }}> Editorial: {publisher}</Typography>
            
            <LinkBuy book={book}/>

        </Box>
      </Modal>
    </div>
  );
}
