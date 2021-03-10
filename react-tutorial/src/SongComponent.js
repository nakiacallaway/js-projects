import './App.css';

const SongComponent = props => {
    console.log(props);
    return (
        <div className='stylish'>
            <h2>My favorite song is <a href={props.music.link} rel="noreferrer" target="_blank">{props.music.title}</a> by  {props.music.artist}.</h2>
            <h3>They create {props.music.genre}, and this song was released {props.music.released}</h3>
            
        </div>
    );
};

  export default SongComponent; 