import React from "react";
import PlaylistItem from "../PlaylistItem";
import withLink from "../hoc/withLink";
import StyledPlaylistItems from "../styles/StyledPlaylistItems";

const PlaylistItemWithLink = withLink(PlaylistItem);

const PlaylistItems = ({ videos, active }) => {
  return (
    <StyledPlaylistItems>
      {videos.map(video => (
        <PlaylistItemWithLink
          key={video.id}
          video={video}
          active={video.id === active.id}
          played={video.played}
        />
      ))}
    </StyledPlaylistItems>
  );
};

export default PlaylistItems;
