import styled from 'styled-components'

export const BackgroundContainer = styled.div`
  max-height: 100vh;
  display: flex;
  flex-direction: column;
`

export const SingerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png ');
  height: 44vh;
  width: 100vw;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

export const SingerHeading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: 400;
  line-height: 0;
  padding-left: 30px;
`
export const SingerParagraph = styled.p`
  color: #ffffff;
  line-height: 0;
  padding-left: 30px;
  margin-bottom: 33px;
`

export const MusicPlayListItemsContainer = styled.div`
  background-color: #152850;
  height: 56vh;
  padding: 0px 20px 0px 20px;
`

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const SearchHeading = styled.h1`
  color: #ffffff;
  font-family: 'Bree Serif';
  font-size: 20px;
  font-weight: 400;
`

export const SearchInputIconContainer = styled.div`
  border: 1px solid #cbd5e1;
  border-radius: 3px;
  width: 250px;
  height: 27px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 10px;
`

export const SearchInput = styled.input`
  width: 250px;
  height: 27px;
  background-color: transparent;
  border: none;
  outline: none;
  color: #ffffff;
  padding-left: 6px;
`

export const MusicPlayListContainer = styled.div`
  max-height: 45vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const MusicPlayListItems = styled.ul`
  list-style-type: none;
`
