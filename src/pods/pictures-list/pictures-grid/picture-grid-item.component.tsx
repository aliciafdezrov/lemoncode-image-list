import React from 'react';
import * as classes from "./picture-grid-item.styles";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {styled} from '@mui/material/styles';
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

const CustomizedCard = styled(Card)`
  background: #333333;
  color: white;

  :hover {
    background: #121212;
  }
`;

interface Props {
    picture: PictureInfo;
}

export const PictureGridItem: React.FC<Props> = (props) => {
    const {picture} = props;

    return (
        <CustomizedCard sx={{maxWidth: 300}} className={`${classes.card} ${classes.fadeInCard}`}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    width="300"
                    height="300"
                    image={picture.picUrl}
                    alt={picture.title}
                />
                <CardContent sx={{minHeight: 136}} className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="div">
                        {picture.title}
                    </Typography>

                    <FormGroup>
                        <FormControlLabel control={<Checkbox value={picture.selected}/>} label="Selected"/>
                    </FormGroup>
                </CardContent>
            </CardActionArea>
        </CustomizedCard>
    );
};