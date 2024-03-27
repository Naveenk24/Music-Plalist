import {AiOutlineDelete} from 'react-icons/ai'

import {
  MusicPlayListItem,
  MusicItemImageContainer,
  ImageElement,
  ImageContentContainer,
  NameElement,
  GenreElement,
  MusicItemDeleteContainer,
  DurationElement,
  DeleteButton,
} from './styledComponent'

import './index.css'

export default function PlayListItem(props) {
  const {songsDetails, deletedItemId} = props
  const {id, imageUrl, name, genre, duration} = songsDetails
  const onDeleteTrack = () => {
    deletedItemId(id)
  }
  return (
    <MusicPlayListItem>
      <MusicItemImageContainer>
        <ImageElement src={imageUrl} alt="track" />
        <ImageContentContainer>
          <NameElement>{name}</NameElement>
          <GenreElement>{genre}</GenreElement>
        </ImageContentContainer>
      </MusicItemImageContainer>
      <MusicItemDeleteContainer>
        <DurationElement>{duration}</DurationElement>
        <DeleteButton
          type="button"
          data-testid="delete"
          onClick={onDeleteTrack}
        >
          <AiOutlineDelete className="delete-icon" />
        </DeleteButton>
      </MusicItemDeleteContainer>
    </MusicPlayListItem>
  )
}
