import { Component } from 'react';
import PropTypes from 'prop-types';
import css from 'components/Modal/Modal.module.css';
class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handlePressESC);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handlePressESC);
  }

  handlePressESC = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleChange = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <div className={css.overlay} onClick={this.handleChange}>
        <div className={css.modal}>
          <img src={this.props.selectedImage} alt="" />
        </div>
      </div>
    );
  }
}
Modal.propTypes = {
  onClick: PropTypes.func.isRequired,
  selectedImage: PropTypes.string.isRequired,
};

export default Modal;
