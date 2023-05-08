interface Props {
  subtotal: number;
  discount: number;
}

export const CartResume = ({ subtotal, discount }: Props) => {
  const shouldDisplayDiscountValue = discount !== 0;
  const discountAmount = Math.ceil(subtotal * (discount / 100));

  const grandTotal = (subtotal - discountAmount).toFixed(2);

  return (
    <div className="p-5 ml-4 resume">
      <div className="is-flex is-justify-content-space-between is-align-items-center pb-4">
        <div className="has-text-grey-light has-text-weight-semibold">
          Subtotal
        </div>
        <div className="has-text-weight-bold">${subtotal}</div>
      </div>
      <div className="is-flex is-justify-content-space-between is-align-items-center">
        <div className="has-text-grey-light has-text-weight-semibold">
          Discount
        </div>
        <div className="has-text-grey-light has-text-weight-bold">
          ${discountAmount} {shouldDisplayDiscountValue && `(${discount}%)`}
        </div>
      </div>
      <hr className="my-4" />
      <div className="is-flex is-justify-content-space-between is-align-items-center pb-4">
        <div className="has-text-grey-light has-text-weight-semibold">
          Grand Total
        </div>
        <div className="has-text-weight-bold">${grandTotal}</div>
      </div>
      <button className="button is-dark is-fullwidth mt-3">CHECKOUT NOW</button>
    </div>
  );
};
