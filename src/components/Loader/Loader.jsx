import { ThreeDots } from 'react-loader-spinner';
import css from './Loader.module.css';
const Loader = () => {
  return (
    <button type="button" className={css.loader}>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#303f9f"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        visible={true}
      />
    </button>
  );
};
export default Loader;
