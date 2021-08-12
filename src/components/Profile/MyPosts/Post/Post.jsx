import css from "./Post.module.css";

const Post = () => {
  return(
    <div className={css.post}>
        <div className="imgPost">
          <img src="https://cdn0.youla.io/files/images/780_780/5f/3e/5f3e67c87eab053c4d56898d-1.jpg" />
        </div>
        <div className={css.textPost}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, modi! Voluptates fugiat eius ab facere magni expedita nam ut, error minima illo porro necessitatibus neque atque, voluptate deleniti hic debitis inventore praesentium. Architecto earum deleniti amet quia hic inventore aperiam doloribus eius aliquid nulla fuga esse unde dignissimos, sint tempora velit repudiandae provident! Error fugit veritatis commodi et maiores numquam, distinctio, modi officia odit officiis magnam libero perspiciatis minima recusandae illo omnis sequi quasi tenetur quam expedita cum, suscipit dolor. Facere, esse ab veritatis, laborum sint, hic possimus quibusdam quia consectetur nesciunt provident maxime, placeat cum nulla unde expedita pariatur.
        </div>
    </div>
  );
}

export default Post;
