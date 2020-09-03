import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 10fr 1fr;
    grid-template-areas: 
        "header header header"
        ". main ."
    ;
    background: #fafafa;
    
    @media screen and (max-width: 500px) {
        grid-template-columns: .5fr 11fr .5fr;
    }
`
export const Header = styled.header`
    grid-area: header;
    background: tomato;
    display: grid;
    grid-template-columns: 1fr 3fr 7fr 1fr;
    grid-template-areas: ". brand nav .";
    padding: 20px 0;
    background: #5a95e8;

    @media screen and (max-width: 500px) {
        grid-template-columns: .5fr 4fr 7fr .5fr;
    }
`
export const Brand = styled.span`
    grid-area: brand;
    font-size: 24px;
    color: white;
    letter-spacing: 1px;
`
export const Nav = styled.nav`
    grid-area: nav;
    display: grid;
    justify-content: right;
    align-content: center;
`
export const List = styled.ul`
    list-style: none;
`
export const Item = styled.li`
    display: inline;
    margin-left: 20px;
    padding: 10px 10px;
    color: white;
    cursor: pointer;
    letter-spacing: 1px;

    @media screen and (max-width: 500px) {
        margin-left: 10px;
    }
`
export const Main = styled.main`
    grid-area: main;
    display: grid;
    margin-top: 20px;
    grid-template-columns: 1fr 10fr 1fr;

    @media screen and (max-width: 500px) {
        grid-template-columns: .5fr 11fr .5fr;
    }
`
export const Post = styled.div`
    grid-column: 2/3;
    display: grid;
    grid-template-areas: 
        "profile"
        "title"
        "date"
        "content"
    ;
    margin-bottom: 20px;
    padding: 40px 20px;
    border: 1px solid #f1f1f1;
    border-radius: 8px;
`
export const Profile = styled.div`
    grid-area: profile;
    display: grid;
    grid-template-columns: 60px calc(100% - 60px);
    grid-template-areas: "photo name";
    align-items: center;
`
export const Photo = styled.img`
    grid-area: photo;
    width: 50px;
    margin: auto;
    border-radius: 100%;
`
export const Name = styled.span`
    grid-area: name;
    font-weight: 600;
    letter-spacing: 1px;
    color: #313131;
    margin-left: 10px;
`
export const Title = styled.div`
    grid-area: title;
    margin-top: 20px;
    font-size: 25px;
`
export const DatePost = styled.small`
    grid-area: date;
    margin-top: 5px;
    color: grey;
`
export const Content = styled.div`
    grid-area: content;
    margin-top: 10px;
    font-size: 14px;
`
