import React from "react";
import "../styles/Home.scss";
import vg from "../assets/2.webp";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from 'react-icons/ai'

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechyStar</h1>
          <p>Solution to all your problem</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="graphics" />
        <div>
          <p>
            we are your one and only solution for the tech problem you face
            every day. we are leading tech company whose aim is to increase the
            problem solving ability in children{" "}
          </p>
        </div>
      </div>

      <div className="home3" id="about">

        <div>
          <h1>who we are?</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, suscipit. Ipsam 
            reprehenderit eum fuga quis officia necessitatibus deserunt nostrum cumque nihil non, 
            porro vitae eaque sequi deleniti architecto! Illo et quos quam enim dolorem at veniam hic qui,
             quibusdam deleniti, mollitia totam, consequuntur perferendis ducimus! Fugit aliquid quibusdam est 
             perferendis maiores quis doloribus vitae eligendi accusamus ex suscipit porro placeat blanditiis 
             inventore eveniet iusto at, rem, fuga architecto quaerat? Nam alias fugiat a explicabo nisi amet
              officiis dignissimos quaerat nemo! Blanditiis magnam quibusdam, labore saepe cumque laboriosam
               cum in culpa provident aliquid reiciendis exercitationem nobis iure quidem adipisci? Tempora 
               dolorum, excepturi aperiam dolorem harum tempore ipsum temporibus. Accusamus, ipsum dolores. 
               Cum magni dicta odio animi dolorem porro accusamus ea eum, et iusto aspernatur sequi! Enim eveniet
                dicta saepe dignissimos, aut sit magni? Eaque qui harum voluptate quos. Ducimus illum fuga sit 
                debitis in assumenda dolorum nihil laboriosam nisi vero,.</p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{animationDelay:"0.3s"}}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div style={{animationDelay:"0.5s"}}>
              <AiFillAmazonCircle />
              <p>Amazon</p>

            </div>
            <div style={{animationDelay:"0.7s"}}>
              <AiFillYoutube/>
              <p>Youtube</p>

            </div>
            <div style={{animationDelay:"0.7s"}}>
              <AiFillInstagram/>
              <p>Instagram</p>

            </div>
          </article>

        </div>


      </div>
    </>
  );
};

export default Home;
