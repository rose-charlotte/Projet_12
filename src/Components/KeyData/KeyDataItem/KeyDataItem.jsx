import style from "./KeyDataItem.module.scss";

import PropTypes from "prop-types";

/**
 *
 * @param {object} props KeyDataItem PropTypes
 * @param {string} props.src Source image
 * @param {number} props.quantity Quantité
 * @param {string} props.name Nom
 * @returns {React.JSX.Element} Chiffre clé
 */
export function KeyDataItem(props) {
    const { src, quantity, name } = props;
    return (
        <article className={style.dataItem}>
            <img src={src} />
            <div className={style.dataItemText}>
                <h1 className={style.quantity}>
                    {quantity} {}
                </h1>
                <p className={style.name}>{name}</p>
            </div>
        </article>
    );
}

KeyDataItem.propTypes = {
    src: PropTypes.string,
    quantity: PropTypes.string,
    name: PropTypes.string,
};
