import React from 'react'
import {
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  IconButton,
  Typography,
} from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Styled from './styles'

interface MealCardProps {}

const MealCard: React.FC<MealCardProps> = (props: MealCardProps) => {
  const [open, setOpen] = React.useState<boolean>(false)

  const handleExpandClick = (): void => {
    setOpen((prev) => !prev)
  }

  return (
    <Styled.MealCard>
      <CardHeader
        title="Meal Card"
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
      />
      <CardMedia
        component="img"
        image="https://source.unsplash.com/340x194/?food"
      />
      <CardActions>
        <IconButton onClick={handleExpandClick}>
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={open}>
        <CardContent>
          <Typography gutterBottom variant="body1">
            Ingredients
          </Typography>
          <Typography gutterBottom variant="body1">
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
            set aside for 10 minutes.
          </Typography>
          <Typography variant="body1">
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
            over medium-high heat. Add chicken, shrimp and chorizo, and cook,
            stirring occasionally until lightly browned, 6 to 8 minutes.
            Transfer shrimp to a large plate and set aside, leaving chicken and
            chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
            onion, salt and pepper, and cook, stirring often until thickened and
            fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2
            cups chicken broth; bring to a boil.MethodHeat 1/2 cup of the broth
            in a pot until simmering, add saffron and set aside for 10 minutes.
          </Typography>
        </CardContent>
      </Collapse>
    </Styled.MealCard>
  )
}

export default MealCard
