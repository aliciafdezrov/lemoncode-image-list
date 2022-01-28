import React from 'react';
import * as classes from "./picture-grid-item.styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {styled} from '@mui/material/styles';
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import {PictureInfo} from "../../pictures-list.vm";
import {CartContext} from "../../../../core/cart/cart.context";

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
    const {selectedPictures, setSelectedPictures} = React.useContext(CartContext);

    const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            handleOnAddPicture(picture)
        } else {
            handleOnDeletePicture(picture)
        }
    }

    const handleOnAddPicture = (picture: PictureInfo) => {
        const entityList = [...selectedPictures];
        entityList.push(picture);
        setSelectedPictures(entityList);
    }

    const handleOnDeletePicture = (picture: PictureInfo) => {
        const entityList = [...selectedPictures];
        const picIndex = entityList.findIndex(pic => pic.id === picture.id);
        entityList.splice(picIndex, 1);
        setSelectedPictures(entityList);
    }

    return (
        <CustomizedCard sx={{width: 300}} className={`${classes.card} ${classes.fadeInCard}`}>
            <CardMedia
                component="img"
                width="260"
                height="300"
                image={picture.picUrl}
                alt={picture.title}
            />
            <CardContent sx={{minHeight: 136}} className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="div">
                    {picture.title}
                </Typography>

                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox onChange={handleChangeCheckbox} checked={picture.selected}/>}
                        label="Selected"/>
                </FormGroup>
            </CardContent>
        </CustomizedCard>
    );
};
