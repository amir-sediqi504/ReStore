import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@mui/material";
import { Product } from "../../App/models/product";
import { pink, red } from "@mui/material/colors";

interface Props{
    product: Product;
}
export default function ProductCard({product}: Props){
    return(
      
        <Card >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: pink[500] }} aria-label="recipe">
              
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
             
            </IconButton>
          }
          title={product.name}
         
        />
        <CardMedia
          component="img"
          height="194"
          image={product.pictureUrl}
          
          alt="Paella dish"
        />
        <CardContent>
          <Typography>
            ${product.price}          </Typography>
          <Typography variant="body2" color="text.secondary">
           {product.brand} / {product.type}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
            <Button size="small">Add to Cart</Button>
            <Button size="small">View</Button>
        </CardActions>
      </Card>
         
    )
}