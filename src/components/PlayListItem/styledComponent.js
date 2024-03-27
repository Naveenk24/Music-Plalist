import styled from 'styled-components'

export const MusicPlayListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`

export const MusicItemImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const ImageElement = styled.img`
  width: 100px;
`

export const ImageContentContainer = styled.div`
  margin-left: 20px;
`

export const NameElement = styled.p`
  color: #ffffff;
  font-weight: 500;
  line-height: 0.7;
`

export const GenreElement = styled.p`
  color: #3b82f6;
  font-weight: 400;
  line-height: 0.7;
`

export const MusicItemDeleteContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-right: 30px;
`

export const DurationElement = styled.p`
  color: #ffffff;
  margin-right: 10px;
`

export const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
`
