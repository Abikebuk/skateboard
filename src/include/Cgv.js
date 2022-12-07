import '../include/Cgv.scss';
import Sidebar from '../include/Sidebar'
import Header from '../include/Header'

function Cgv() {
  var nameCompagny = "CollantSkate"
  var urlCompagny = "www.collantskate.com"
  return (
    <div id={'home'}>
      <div className={'container-fluid p-0'}>
        <div className={'row p-0 m-0'}>
          <div className={'col-auto p-0'}>
            <Sidebar />
          </div>
          <div id={'content'} className={'col p-0'}>
            <Header ></Header>
            <div className={'container-fluid'}>
              <div className={'row'}>
                <div className='containerTot'>
                  <h1 className='title1'>Conditions Générales de Vente</h1>
                  <p className='container2'>
                    Les présentes conditions de vente sont conclues d’une part par la société <b>{nameCompagny}</b> dont le siège social est situé à Paris, 
                    immatriculée au Registre du Commerce et des Sociétés, ci-après la société dénommée <b>{nameCompagny}</b>, gérant du site <b>{nameCompagny}</b>, 
                    accessible à l'adresse <i>{urlCompagny}</i> et, d’autre part, par toute personne physique ou morale souhaitant procéder à un achat sur le site internet CollantSkate, 
                    accessible à l'adresse <i>{urlCompagny}</i> dénommée ci-après " l’acheteur ".
                  </p>

                  <h2>Article 1. Objet</h2>
                  <p className='container'>
                    Les présentes conditions de vente visent à définir les relations contractuelles entre l'entreprise <b>{nameCompagny}</b> et l’acheteur et les conditions applicables 
                    à tout achat effectué par le biais du site internet accessible à l'adresse <i>{urlCompagny}</i>. L’acquisition d’un produit à travers le présent site implique une acceptation 
                    sans réserve par l’acheteur des présentes conditions de vente dont l’acheteur reconnaît avoir pris connaissance préalablement à sa commande. Avant toute transaction, l’acheteur 
                    déclare d’une part que l’achat de produits sur le site accessible à l'adresse <i>{urlCompagny}</i> est sans rapport direct avec son activité professionnelle et est limité à une 
                    utilisation strictement personnelle et d’autre part avoir la pleine capacité juridique, lui permettant de s’engager au titre des présentes conditions générales de ventes. 
                    La société <b>{nameCompagny}</b> conserve la possibilité de modifier à tout moment ces conditions de ventes, afin de respecter toute nouvelle réglementation ou 
                    dans le but d'améliorer l’utilisation de son site. De ce fait, les conditions applicables seront celles en vigueur à la date de la commande par l’acheteur.
                  </p>

                  <h2>Article 2. Produits</h2>
                  <p className='container'>
                    Les produits proposés sont ceux qui figurent sur le site accessible à l'adresse <i>{urlCompagny}</i> de la société <b>{nameCompagny}</b>, 
                    dans la limite des stocks disponibles. La société <b>{nameCompagny}</b> se réserve le droit de modifier à tout moment l’assortiment de produits. 
                    Chaque produit est présenté sur le site internet sous forme d’un descriptif reprenant ses principales caractéristiques techniques. 
                    Les photographies sont les plus fidèles possibles mais n’engagent en rien le Vendeur. La vente des produits présentés dans le site accessible à l'adresse <i>{urlCompagny}</i> 
                    est destinée à tous les acheteurs résidants dans les pays qui autorisent pleinement l’entrée sur leur territoire de ces produits.
                  </p>

                  <h2>Article 3. Tarifs</h2>
                  <p className='container'>
                    Les prix figurant sur les fiches produits du catalogue internet et sont des prix en Euros (€) toutes taxes comprises (TTC) tenant compte de la TVA applicable au jour de la commande. 
                    Tout changement du taux de la TVA pourra être répercuté sur le prix des produits. La société <b>{nameCompagny}</b> se réserve le droit de modifier ses prix à tout moment, 
                    étant toutefois entendu que le prix figurant au catalogue le jour de la commande sera le seul applicable à l’acheteur. 
                    Les prix indiqués ne comprennent pas les frais de livraison, facturés en supplément du prix des produits achetés suivant le montant total de la commande. 
                    En France métropolitaine, pour toute commande supérieure ou égale à 50 euros TTC, les frais de port sont offerts ; pour toute commande inférieure à 50 euros TTC, 
                    un forfait de participation aux frais d’expédition sera facturé à l’acheteur d'un montant de 10 euros TTC.
                  </p>

                  <h2>Article 4. Commande et modalités de paiement</h2>
                  <p className='container'>
                    Avant toute commande, l’acheteur doit créer un compte sur le site accessible à l'adresse <i>{urlCompagny}</i>. 
                    La rubrique de création de compte est accessible directement depuis la barre de menu latérale. A chaque visite, l’acheteur, s’il souhaite commander ou consulter son compte 
                    (état des commandes, profil…), devra s’identifier à l’aide de ces informations. La société <b>{nameCompagny}</b> propose à l’acheteur de commander et régler 
                    ses produits en plusieurs étapes, avec 1 option de paiement :
                  </p>
                  <p className='container'>
                    <b>Paiement sécurisé par Stripe :</b> l’acheteur sélectionne les produits qu’il souhaite commander dans le « panier », modifie si besoin (quantités, références…),
                    vérifie l’adresse de livraison ou en renseigne une nouvelle. Puis, les frais de port sont calculés et soumis à l’acheteur, ainsi que le nom du transporteur. 
                    Ensuite, l’acheteur choisit le mode de paiement de son choix : « Paiement par Paypal ». 
                    L’étape suivante lui propose de vérifier l’ensemble des informations, prendre connaissance et accepter les présentes conditions générales de vente en cochant la case correspondante, 
                    puis l’invite à valider sa commande en cliquant sur le bouton « Confirmer ma commande ». 
                    Enfin, l’acheteur est redirigé sur l’interface sécurisée de paiement afin de renseigner en toute sécurité. 
                    Si le paiement est accepté, la commande est enregistrée et le contrat définitivement formé.
                    En cas d’utilisation frauduleuse de celle-ci, l’acheteur pourra exiger l’annulation du paiement par carte, les sommes versées seront alors recréditées ou restituées. 
                    La responsabilité du titulaire d’une carte bancaire n’est pas engagée si le paiement contesté a été prouvé effectué frauduleusement, à distance, sans utilisation physique de sa carte. 
                    Pour obtenir le remboursement du débit frauduleux et des éventuels frais bancaires que l’opération a pu engendrer, 
                    le porteur de la carte doit contester, par écrit, le prélèvement auprès de sa banque, dans les 70 jours suivant l’opération, 
                    voire 120 jours si le contrat le liant à celle-ci le prévoit. Les montants prélevés sont remboursés par la banque dans un délai maximum d’un mois après réception 
                    de la contestation écrite formée par le porteur. Aucun frais de restitution des sommes ne pourra être mis à la charge du titulaire.
                    La confirmation d’une commande entraîne acceptation des présentes conditions de vente, la reconnaissance d’en avoir parfaite connaissance 
                    et la renonciation à se prévaloir de ses propres conditions d’achat. L’ensemble des données fournies et la confirmation enregistrée vaudront preuve de la transaction. 
                    Si l’acheteur possède une adresse électronique et s’il l’a renseignée sur son bon de commande, la société <b>{nameCompagny}</b> lui communiquera par 
                    courrier électronique la confirmation de sa commande. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cgv;
