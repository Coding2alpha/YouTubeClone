import { Stack, Box } from "@mui/material";
import ChannelDetail from "./ChannelDetail";

const Videos = ({ videos }) => {
  console.log(videos);
  return (
    <Stack direction="row" flexDirection={wrap} justifyContent="start" gap={2}>
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoID && <VideoCard video={item} />}
          {item.id.channelID && <ChannelDetail ChannelCard={item} />}
        </Box>
      ))}
    </Stack>
  );
};
export default Videos;
