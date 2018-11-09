import React from 'react'
import ContentImage from './apps/ContentImage'
import styles from './Content.module.css'
import image1 from './images/1.jpeg'
import image1Placeholder from './images/1-placeholder.jpg'
import image2 from './images/2.jpeg'
import image2Placeholder from './images/2-placeholder.jpg'
import image3 from './images/3.jpeg'
import image3Placeholder from './images/3-placeholder.jpg'
import image4 from './images/4.jpeg'
import image4Placeholder from './images/4-placeholder.jpg'
import image5 from './images/5.jpeg'
import image5Placeholder from './images/5-placeholder.jpg'
import image6 from './images/6.jpg'
import image6Placeholder from './images/6-placeholder.jpg'

const Content = () => {
  console.log('content render')
  return (
    <section className={styles.root}>
      <h1>What is Lorem Ipsum?</h1>
      <ContentImage url={image1} placeholderUrl={image1Placeholder} />
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      <h2>Where does it come from?</h2>
      <ContentImage url={image2} placeholderUrl={image2Placeholder} />
      <p>Where does it come from?
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
      <ContentImage url={image3} placeholderUrl={image3Placeholder} />
      <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
      <h2>Why do we use it?</h2>
      <ContentImage url={image4} placeholderUrl={image4Placeholder} />
      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
      <h2>Where can I get some?</h2>
      <ContentImage url={image5} placeholderUrl={image5Placeholder} />
      <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
      <h2>Where does it come from?</h2>
      <ContentImage url={image6} placeholderUrl={image6Placeholder} />
      <p>Where does it come from?
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
      <footer className={styles.subscribe}>
        <button className={styles.button}>
          Subscribe
        </button>
      </footer>
    </section>
  )
}

export default Content
