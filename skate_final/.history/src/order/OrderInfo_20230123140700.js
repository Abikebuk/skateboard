import { React, useParams } from 'react';
import './OrderInfo.css'

const OrderInfo = ({ invoiceData }) => {

    // const { id } = useParams();

    return (
        <div className="invoice">
            <div className="invoice-header">
                <div className="invoice-title">Facture</div>
                <div className="invoice-number">Numéro : {invoiceData.invoiceNumber}</div>
                <div className="invoice-date">Date : {invoiceData.invoiceDate}</div>
            </div>
            <div className="invoice-body">
                <div className="invoice-from">
                    <div className="invoice-from-title">De</div>
                    <div className="invoice-from-name">{invoiceData.fromName}</div>
                    <div className="invoice-from-address">{invoiceData.fromAddress}</div>
                    <div className="invoice-from-phone">Tél : {invoiceData.fromPhone}</div>
                </div>
                <div className="invoice-to">
                    <div className="invoice-to-title">À</div>
                    <div className="invoice-to-name">{invoiceData.toName}</div>
                    <div className="invoice-to-address">{invoiceData.toAddress}</div>
                    <div className="invoice-to-phone">Tél : {invoiceData.toPhone}</div>
                </div>
                <table className="invoice-table">
                    <thead>
                        <tr>
                            <th>Produit</th>
                            <th>Quantité</th>
                            <th>Prix</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {invoiceData.products.map((product, index) => (
              <tr key={index}>
                <td>{product.name}</td>
                <td>{product.quantity}</td>
                <td>{product.price}</td>
                <td>{product.total}</td>
              </tr>
            ))} */}
                        <td>name</td>
                        <td>quantity</td>
                        <td>price</td>
                        <td>total</td>
                    </tbody>
                </table>
            </div>
            <div className="invoice-footer">
                <div className="invoice-total">Total : {invoiceData.total}</div>
            </div>
        </div>
    );
};

export default OrderInfo;