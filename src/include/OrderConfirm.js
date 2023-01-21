export default function (){
  const params = new URLSearchParams(window.location.search)
  const orderSuccess = params.get("orderSuccess")
  const orderId = params.get("orderId")

  if(!orderSuccess) return null;
  return (
    <div id={'order-confirm'}>
      {orderSuccess === 'success' ?
        <div className={'col-12'}>
          La commande  #{orderId} a été validée!
        </div> :
        <div className={'col-12'}>
          Il y a eu un problème à la validation de votre commande, veuillez réessayer.
        </div>
      }
    </div>
  )
}
