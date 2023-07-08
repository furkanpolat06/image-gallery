import "../styles/style.css";
const Picture = ({ veri }) => {
  return (
    <div><h1>Image Gallery</h1>
    <div className="pictures">
        
      {veri.map((item) => {
          const {
              photographer,
              src: { large },
            } = item;
            return (
                <div key={photographer} className="picture">
              
            <div className="imageContainer"><img src={large} alt="" /></div> 
            <div className="info">
            <p style={{color:"steelblue"}}>{photographer}</p>
            </div>
          </div>
        );
    })}
    </div>
    </div>
  );
};

export default Picture;
