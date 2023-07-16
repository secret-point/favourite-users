import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  CardActions,
  Button,
} from "@mui/material";
import { useDispatch } from "react-redux";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { AVATAR_URL } from "helper/constants";
import { setFavorite } from "store/memberSlice";

const MemberCard = ({ member }) => {
  const dispatch = useDispatch();

  const setFavoriteHandler = () => {
    dispatch(setFavorite({ id: member.id }));
  };

  return (
    <Card sx={{ minWidth: 230 }}>
      <Box sx={{ background: "#3b3b3b", paddingY: 1 }}>
        <CardMedia
          sx={{
            height: 100,
            width: 100,
            borderRadius: "50%",
            borderStyle: "solid",
            borderColor: "#fff",
            borderWidth: 4,
            margin: "auto",
          }}
          image={`${AVATAR_URL}?img=${member.id}`}
        />
      </Box>
      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{ textAlign: "center" }}
        >
          {member.fullName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>City: </strong> {member.city}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Job: </strong>
          {member.jobTitle}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          position: "relative",
          top: "-230px",
          left: "177px",
          marginY: -2,
          padding: 0,
          margin: 0,
        }}
      >
        <Button
          sx={{
            "& .MuiTouchRipple-root": {
              width: "30px",
              height: "30px",
              left: "16px",
              top: "2px",
            },
          }}
          onClick={setFavoriteHandler}
        >
          {member.isFavorite ? (
            <FavoriteOutlinedIcon sx={{ color: "white" }} />
          ) : (
            <FavoriteBorderOutlinedIcon sx={{ color: "white" }} />
          )}
        </Button>
      </CardActions>
    </Card>
  );
};

export default MemberCard;
