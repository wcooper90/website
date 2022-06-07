import styled from 'styled-components'


export const Container = styled.div`
    width: 80%;
    min-height: 90vh;
    margin: auto;
    display: grid;
    justify-content: center;
    align-items: center;
    grid-column-gap: 20px;
    max-width: 1200px;
`
export const Container2 = styled.div`
    min-height: 10vh;
    width: 80%;
    margin: auto;
    display: grid;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: auto;
    grid-column-gap: 20px;
    max-width: 1200px;
`

export const Container3 = styled.div`
    width: 80%;
    margin: auto;
    justify-content: center;
    align-items: center;
    text-align: center;
    max-width: 1200px;
    padding-top:20px;
`

export const C3 = styled.div`
    width: 80%;
    min-height: 90vh;
    margin: auto;
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 5px;
    max-width: 1200px;
    padding-bottom: 10px;
    padding-top: 10px;
`

export const C2 = styled.div`
    width: 80%;
    min-height: 90vh;
    margin: auto;
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;
    max-width: 1200px;
    padding-bottom: 10px;
    padding-top: 10px;
`

export const C21 = styled.div`
    width: 80%;
    min-height: 90vh;
    margin: auto;
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: 33% 67%;
    grid-column-gap: 20px;
    max-width: 1200px;
    padding-bottom: 10px;
    padding-top: 10px;
`

export const C12 = styled.div`
    width: 80%;
    min-height: 90vh;
    margin: auto;
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: 67% 33%;
    grid-column-gap: 20px;
    max-width: 1200px;
    padding-bottom: 10px;
    padding-top: 10px;
`

export const C1 = styled.div`
    width: 80%;
    min-height: 10vh;
    margin: auto;
    display: grid;
    justify-content: center;
    align-items: center;
    grid-column-gap: 20px;
    max-width: 1200px;
    padding-bottom: 10px;
    padding-top: 10px;
`

export const Small = styled.div`
    font-size: 10px;

`

export const Card = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 1px 2px rgba(0,0,0,0.15);
  transition: box-shadow 0.3s ease-in-out;
  padding: 2em;
  border-radius: 10px;

  p {
   margin-top: 0px;
  }

  h3 {
    margin-bottom: 0px;
  }

  :hover {
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  }


`

export const Image = styled.img`
  width: 100%;
  height: auto;
  border: 5px solid #B594B6;
`

export const Image2 = styled.img`
  width: 70%;
  border: 5px solid #B594B6;
  border-radius: 50%;
  margin-bottom: 20px; 
`


export const Name = styled.h3`
  color: #555555;
  padding-top: 10px;
  font-weight: 1 !important;
`
export const Title = styled.p`
  color: rgba(31,45,61,0.5);
`

export const Bio = styled.p`
  color: rgba(43,46,50,.85);
  text-align: center;
`
// export const RowInner = styled.div`
//     display: grid;
//     align-content: center;
//     justify-items: center;
//     grid-template-columns: repeat(7, 1fr);
//     padding-top: 15px;
//     padding-bottom: 15px;
//     // padding-left: 5px;
//     // padding-right: 5px;
//     // grid-column-gap: 10px;
//     width: 100%;
//     min-height: 180px;

// `
