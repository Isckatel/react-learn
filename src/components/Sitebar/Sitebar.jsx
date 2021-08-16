import css from "./Sitebar1.module.css";

const Sitebar = (props) => {

  let frendsElem = props.sitebar.map( (frend) => {
    return (
      <div className={css.frend}>
        <img className={css.imgAva} src={frend.urlAva} />
        <div>{frend.name}</div>
      </div>
    );
  });

  return(
    <div>
      <p className={css.h}>Frends</p>
      <div className={css.frends}>
        {frendsElem}
      </div>
    </div>
  );
}

export default Sitebar;
