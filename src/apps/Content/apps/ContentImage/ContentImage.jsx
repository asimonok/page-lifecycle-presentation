import React from 'react'
import styles from './ContentImage.module.css'

class ContentImage extends React.Component {
  state = {
    isLoaded: false,
  }
  imageRef = React.createRef()

  componentDidMount () {
    console.log('componentDidMount')
    if (window !== undefined) {
      setTimeout(() => {
        const options = {
          rootMargin: '0px',
          threshold: 1,
        }
        const observer = new IntersectionObserver(this.onChangeVisibilityOnViewport, options);
        observer.observe(this.imageRef.current);
      }, 0);
    }
  }

  onChangeVisibilityOnViewport = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const image = new Image();
        image.src = this.props.url;
        image.onload = () => {
          observer.unobserve(this.imageRef.current);
          this.setState({
            isLoaded: true,
          })
        }
      }
    });
  }

  render () {
    const { url, placeholderUrl } = this.props
    const { isLoaded } = this.state

    return (
      <div className={styles.root}>
        <img ref={this.imageRef} src={isLoaded ? url : placeholderUrl} className={`${styles.image} ${isLoaded && styles.loaded}`} />
      </div>
    )
  }
}

export default ContentImage
