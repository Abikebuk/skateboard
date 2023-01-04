import './ProductPage.css'
import './Contact.scss'

function Contact() {    
    return (
        <div id='contacts'>
        <div className='container-fluid marginContacts'>
            <div className='row justify-content-center'>
                <div className='col-10'>
                    <ContactCard 
                        title={"ADRESSE"}
                        Data={Address}
                        isMap={true}
                    />                   
                </div>
                <div className='col-5'>
                    <ContactCard 
                        title={"MAIL"} 
                        Data={Mail}
                    />
                </div>
                <div className='col-5'>
                    <ContactCard 
                        title={"PHONE"}
                        Data={Phone}
                    />
                </div>
            </div>
        </div>
        </div>
    );
}

function ContactCard({title, isMap, Data}) {
    return (
    <div className={'product-card-wrapper'}>
        <div className={`product-card  ${isMap ? "mapAddress" : ""}`}>
            <div className={'content'}>
                <div className='col-auto'>
                    <div className='headerTitle'>
                        <h2>{title}</h2>
                    </div>
                </div>
                <div className='col'>
                    <Data />
                    {isMap ?
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.597159179907!2d2.291166715854191!3d48.8849556067896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66f91aa85bfb1%3A0xca6c403c8e457b76!2sIRIS%20-%20%C3%89cole%20sup%C3%A9rieure%20d&#39;informatique!5e0!3m2!1sfr!2sfr!4v1672839494267!5m2!1sfr!2sfr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        : null
                    }
                </div>
            </div>
        </div>
    </div>
    );
}

function Address(){
    return (
        <div>
            <h4>6-8 Imp. des 2 Cousins, 75017 Paris</h4>
        </div>
    )
}

function Phone(){
    return (
        <div className='cardPhoneMail'>
            <h4>01 21 22 23 24</h4>
        </div>
    )
}

function Mail(){
    return (
        <div className='cardPhoneMail'>
            <h4>CollantSkate@gmail.com</h4>
        </div>
    )
}

export default Contact;