import { useSelector } from "react-redux";
import BagItem from "./BagItem";
const BagSummary = () => {
  let totalMRP = 0;
  let totalDiscount = 0;
  let finalPayment = 0;
  const CONVENIENCE_FEES = 99;

  const bagItemsId = useSelector((state) => state.bag);
  const items = useSelector((state) => state.items);
  let totalItem = bagItemsId.length;
  const finalItems = items.filter((item) => {
    const itemIndex = bagItemsId.indexOf(item.id);
    return itemIndex >= 0;
  });
  finalItems.forEach((item) => {
    totalMRP += item.original_price;
    totalDiscount += item.original_price - item.current_price;
  });
  finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;
  return (
    <div className="bag-summary">
      <div className="bag-details-container">
        <div className="price-header">PRICE DETAILS ({totalItem} Items) </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹{totalDiscount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">₹99</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{finalPayment}</span>
        </div>
      </div>
      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </div>
  );
};

export default BagSummary;
