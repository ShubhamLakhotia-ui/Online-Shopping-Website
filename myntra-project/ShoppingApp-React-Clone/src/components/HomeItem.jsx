import { useDispatch } from "react-redux";
import { bagSliceActions } from "../store/bagSlice.";
import { useSelector } from "react-redux";
import { IoMdAddCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";
const HomeItem = ({ item }) => {
  const dispatch = useDispatch();
  const bagItems = useSelector((store) => store.bag);
  const elementFound = bagItems.indexOf(item.id) >= 0;
  const handleAddToBag = () => {
    dispatch(bagSliceActions.addInitialItems(item.id));
  };

  const handleRemoveToBag = () => {
    dispatch(bagSliceActions.removeFromBag(item.id));
  };

  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {!elementFound ? (
        <button
          type="button"
          className="btn btn-add-bag btn-success"
          onClick={handleAddToBag}
        >
          <IoMdAddCircle /> Add to Bag
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-add-bag btn-danger"
          onClick={handleRemoveToBag}
        >
          <MdDelete /> Remove from Bag
        </button>
      )}
    </div>
  );
};

export default HomeItem;
