function Contact()
{
    const ContactCard = ({orgname,designation,number}) => {
            return(
            <div className="contact-card">
            <h2>{orgname}</h2>
            <p>{designation}</p>
            <p>{number}</p>
          </div>
      );
    }
    return <div>
         <h1 className="Contacttext">Our organizers are just a call away!</h1>
         <h1 className="Contact">Event Organizers : </h1>
         <div className="contactgrid">
       <ContactCard orgname="Srinivasa Raghavan" designation="The Triquizzard Tournament 5.0" number="88254 08754" />
<ContactCard orgname="Saishravan" designation="Group Music - Music" number="89032 93249" />
<ContactCard orgname="Acchudan" designation="Turf Cricket - Sports" number="94874 73532" />
<ContactCard orgname="Charuprabha" designation="AR(T)ELIC - Live Art" number="94456 53091" />
<ContactCard orgname="Jayshrinivaas Balaji" designation="Nalla Otrainga da Reel uh" number="90874 76555" />
<ContactCard orgname="Subhashree" designation="Imitation Game - Dramatics" number="96006 72110" />
<ContactCard orgname="Hridaya" designation="Koodu Vittu Koodu - Thamizh" number="89030 50247" />
<ContactCard orgname="Akshay Kumar" designation="No Time to Solve " number="87549 25976" />
<ContactCard orgname="Sundar Kumar" designation="Ctrl + Alt + Decrypt - Tech" number="63792 55328" />
<ContactCard orgname="Srivasthan" designation="DOOMSDAY: The Final Frame" number="70101 84600" />
<ContactCard orgname="Jayshrinivaas Balaji" designation="Coronation - (Mr And Ms VinterBash)" number="90874 76555" />
<ContactCard orgname="Kishanth" designation="Vinter Kick-Off: 5-A Side Football" number="75988 58465" />
<ContactCard orgname="Jayavarshini" designation="Unnai Kaanathu..!!" number="93457 58850" />
<ContactCard orgname="Dhixitha" designation="DROP THE BEAT" number="63810 66216" />
<ContactCard orgname="Arvindh Lakshman" designation="Vinter FIFA 25 - Gaming (FIFA)" number="83004 75270" />
<ContactCard orgname="Subhashree" designation="Time Traveller's Theatre" number="96006 72110" />
<ContactCard orgname="Arvindh Lakshman" designation="Vinterbash-FIFA" number="83004 75270" />

        </div>
        <h1 className="Contact">Overall Coordinators :</h1>
        <div className="contactgrid">
        <ContactCard orgname="Srivasthan" designation="Overall Coordinator" number="70101 84600" />
        <ContactCard orgname="Amruthavarshan" designation="Overall Coordinator" number="70100 89170" />
        </div>
        <h1 className="Contact">Technical Coordinators :</h1>
        <div className="contactgrid">
        <ContactCard orgname="Arvindh Lakshman" designation="Technical Coordinator" number="83004 75270" />
        <ContactCard orgname="Shrihari" designation="Technical Coordinator" number="82205 32903" />
        <ContactCard orgname="Jayavanth" designation="Technical Coordinator" number="90808 32022"/>
        </div>
    </div>
}
export default Contact;