import {useState} from 'react'

import {FaSearch} from 'react-icons/fa'

import NotFound from '../NotFound/Index'

import PlayListItem from '../PlayListItem/index'

import {
  BackgroundContainer,
  SingerContainer,
  SingerHeading,
  SingerParagraph,
  MusicPlayListItemsContainer,
  SearchContainer,
  SearchHeading,
  SearchInputIconContainer,
  SearchInput,
  MusicPlayListContainer,
  MusicPlayListItems,
} from './styledComponent'

import './index.css'

export default function MusicPlayList(props) {
  const {initialTracksList} = props
  const [userInput, setUserInput] = useState('')
  const [songList, setSongsList] = useState(initialTracksList)

  const deletedItemId = id => {
    const deletedSongList = songList.filter(eachItem => {
      if (eachItem.id !== id) {
        return eachItem
      }
      return null
    })

    setSongsList(deletedSongList)
  }

  const filteredPlayList = songList.filter(eachItem =>
    eachItem.name.toLowerCase().includes(userInput),
  )

  return (
    <BackgroundContainer>
      <SingerContainer>
        <SingerHeading>Ed Sheeran</SingerHeading>
        <SingerParagraph>Singer</SingerParagraph>
      </SingerContainer>
      <MusicPlayListItemsContainer>
        <SearchContainer>
          <SearchHeading>Songs Playlists</SearchHeading>
          <SearchInputIconContainer>
            <SearchInput
              type="search"
              placeholder="Search"
              onChange={event => setUserInput(event.target.value)}
            />
            <FaSearch className="icon" />
          </SearchInputIconContainer>
        </SearchContainer>
        <MusicPlayListContainer>
          {filteredPlayList.length !== 0 ? (
            <>
              <MusicPlayListItems>
                {filteredPlayList.map(eachItem => (
                  <PlayListItem
                    key={eachItem.id}
                    songsDetails={eachItem}
                    deletedItemId={deletedItemId}
                  />
                ))}
              </MusicPlayListItems>
            </>
          ) : (
            <NotFound />
          )}
        </MusicPlayListContainer>
      </MusicPlayListItemsContainer>
    </BackgroundContainer>
  )
}
