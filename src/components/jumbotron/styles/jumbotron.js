import styled from 'styled-components/macro';

export const Item = styled.div`
    display:flex;
    border-bottom: 8px solid #22;
    padding: 50px 5%;
    color: white;
    overflow: hidden;
    `;
export const Inner = styled.div`
    display: flex;
    align-item: center;
    flex-direction: ${({direction}) => direction};
    justify-content: space-between;
    max-width: 1100px;
    margin: auto;
    width: 100%

    @media (max-width: 100px){
        flex-direction: column;
    }

`;
export const Container = styled.div`
  @media (max-width: 1000px) {
    ${Item}: last-of-type h2 {
      margin-bottom: 50px;
    }
  }
  // border-bottom: 8px solid #222;
  `;

export const Pane = styled.div`
 width: 50%;
 
 @media (max-width: 1000px) {
    width: 100%;
    padding: 0 45px;
    text-align: center;
  }
  border-bottom: 8px solid #222;
 `;

 
 export const Title = styled.h1`
    font-size: 50px;
    line-height: 1.1;
    margin-bottom: 8px;
    
    @media (max-width: 600px) {
        font-size: 35px;
      }
 `;
 export const SubTitle = styled.h2`
  font-size: 26px;
  font-weight: normal;
  line-height: normal;

  @media (max-width: 600px) {
    font-size: 10px;
  }
 `;
 export const Image = styled.img`
  max-width: 100%;
  height : auto;
 `;

 export const Line = styled.div`
  border: 10px solid red;
 `;
 



