import css from "./Sitebar.module.css";

const Sitebar = (props) => {

  let frendsElem = props.sitebar.map( (frend) => {
    return (
      <div>
        <img className={css.imgAva} src={frend.urlAva} />
        <div>{frend.name}</div>
      </div>
    );
  });

  return(
    <div>
      <p>Frends</p>
      <div className={css.frends}>
        {frendsElem}
      </div>
    </div>
  );
}

export default Sitebar;
