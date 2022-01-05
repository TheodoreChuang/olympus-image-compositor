import React from "react";
import { Box, Button, Typography } from "@material-ui/core";
import twitterCircleWhite from "../assets/twitterCircleWhite.svg";
import discordLogo from "../assets/discord-logo.svg";

function ShareOnTwitter(props) {
  const urlString = () => {
    var text;
    if (props.inIndexCard) {
      text = "i'm gmi";
    } else {
      text = "i'm gmi";
    }
    return `https://twitter.com/intent/tweet?url=https://www.indexcoop.com/&text=${encodeURIComponent(text)}`;
  };

  const discordString = () => {
    return "https://discord.gg/indexcoop";
  };

  return (
    <Box display="flex" className="share-btns">
      <Button
        id="share-on-twitter-button"
        variant="contained"
        // color="primary"
        // onClick={handleCompleteAward}
        className="index-button"
        href={urlString()}
        target="_blank"
        data-text="w"
        data-hashtags="$GMI"
        // endIcon={<TwitterIcon />}
      >
        <Typography className="btn-text" style={{ marginRight: "6px" }}>
          Share on Twitter
        </Typography>
        <img alt="test" height="24" src={twitterCircleWhite} />
      </Button>
      <Button
        id="connect-on-discord-button"
        variant="contained"
        // color="primary"
        // onClick={handleCompleteAward}
        className="index-button"
        href={discordString()}
        target="_blank"
        data-text="w"
        data-hashtags="$GMI"
      >
        <img alt="test" height="24" src={discordLogo} />
      </Button>
    </Box>
  );
}

export default ShareOnTwitter;
