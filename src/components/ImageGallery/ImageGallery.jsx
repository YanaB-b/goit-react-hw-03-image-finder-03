import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';
class ImageGallery extends Component {
  render() {
    return (
      <ul className={css.gallery}>
        {this.props.images.map(({ id, webformatURL, tags, largeImageURL }) => (
          <ImageGalleryItem
            id={id}
            key={id}
            webformatURL={webformatURL}
            tags={tags}
            onSelect={() => this.props.onSelect(largeImageURL)}
          />
        ))}
      </ul>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
export default ImageGallery;
