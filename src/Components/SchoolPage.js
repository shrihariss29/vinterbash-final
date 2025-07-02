import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import srivv from "../assets/srivv.JPG";
import osagal from "../assets/osagal.jpg";
import sav from "../assets/sav.JPG";
import knms from "../assets/knms.JPG";
import santhanam from "../assets/santhanam.JPG";
import vignesh from "../assets/vignesh.JPG";
import rsk from "../assets/rsk.JPG";
import alphamat from "../assets/alphamat.JPG";
import stjoin from "../assets/stjoin.JPG";
import brindhavan from "../assets/brindhavan.JPG";
import chinmaya from "../assets/chinmaya.JPG";
import vigneshpublic from "../assets/vigneshpublic.JPG";
import aurobindo from "../assets/aurobindo.JPG";
import mgcv from "../assets/mgcv.JPG";
import alphacam from "../assets/alphacam.JPG";
import alphawisdom from "../assets/alphawisdom.JPG";
import boyshss from "../assets/boyshss.JPG";
const schoolLinks = {
    "Sri Vageesha Vidhyashram": {
        driveLink: 'https://drive.google.com/drive/folders/1kJxaV8lWQpIvs5cZG6GraXGfJ56u1hV8?usp=sharing',
        image: srivv
    },
    "Sri Vignesh Vidhyalaya": {
        driveLink: 'https://drive.google.com/drive/folders/1Q-01x4BLScHwbGeGplTLE6QmcFcQXc7o?usp=sharing',
        image: vignesh
    },
    "Sri Akilandeswari Vidhyalaya": {
        driveLink: 'https://drive.google.com/drive/folders/11BMzugLprXNTfPxVVj9oaRYgck66rqnV?usp=sharing',
        image: sav
    },
    "RSK Higher Secondary School": {
        driveLink: 'https://drive.google.com/drive/folders/1r8sQ1BHKw5rR2WVpCZ1pCnHodvAVuYt_?usp=sharing',
        image: rsk
    },
    "Alpha Plus Matriculation Higher Secondary School": {
        driveLink: 'https://drive.google.com/drive/folders/1j_NDDFH50s1XY4izyxqEHF8E41UreTq2?usp=sharing',
        image: alphamat
    },
    "ST. JOAN OF ARC INTERNATIONAL SCHOOL": {
        driveLink: 'https://drive.google.com/drive/folders/1kCxSxXkMS1Ihp9iHI49vt47_86EzAI3m?usp=sharing',
        image: stjoin
    },
    "Brindavan Vidyalaya": {
        driveLink: 'https://drive.google.com/drive/folders/1Ia3Nj0p5tK5sN-JrRO9-fWT1lK4Vt10n?usp=sharing',
        image: brindhavan
    },
    "Chinmaya Vidhyalaya": {
        driveLink: 'https://drive.google.com/drive/folders/1vig5uY8378KNSVJw8BcErmoQ3DSf8r19?usp=sharing',
        image: chinmaya
    },
    "Sri Vignesh Public School": {
        driveLink: 'https://drive.google.com/drive/folders/11P9YW2bI6Fzs9kiNNTu0WSgEDkXGXDNP?usp=sharing',
        image: vigneshpublic
    },
    "Santhanam Vidyalaya": {
        driveLink: 'https://drive.google.com/drive/folders/1CBpS_D65dPMo-C28ivTinnolGA0wTj5P?usp=sharing',
        image: santhanam
    },
    "Aurobindo International School": {
        driveLink: 'https://drive.google.com/drive/folders/1gXF1RFhljhjjnK_GWFGP7gGSqbKB4_nA?usp=sharing',
        image: aurobindo
    },
    "Mahathma Gandhi Centenary Vidhyalaya": {
        driveLink: 'https://drive.google.com/drive/folders/1EL5hJCE44h7yGnSsG4IB3veqeToKn0cZ?usp=sharing',
        image: mgcv
    },
    "Kamala Niketan Montessari School": {
        driveLink: 'https://drive.google.com/drive/folders/1XKSXD4GV0xV6Kse1I5_motQw_ezcHVFg?usp=sharing',
        image: knms
    },
    "Alpha Cambridge International": {
        driveLink: 'https://drive.google.com/drive/folders/1Jg1V-cizcRkwnbbPyOpr3_8J2cImjLgl?usp=sharing',
        image: alphacam
    },
    "Alpha Wisdom Vidhyashram": {
        driveLink: 'https://drive.google.com/drive/folders/13faomEErRKlXgOMxQWdXtg_DqOybKFFA?usp=sharing',
        image: alphawisdom
    },
    "Govt Boys School, Srirangam": {
        driveLink: 'https://drive.google.com/drive/folders/1kxed8UIh4P8nwwtFAHjXo3sDZopNDOki?usp=sharing',
        image: boyshss
    },
    "Old Student Association": {
        driveLink: 'https://drive.google.com/file/d/1GnkYNO1oSirCotaWj6zPIqUOLLTDl2az/view?usp=drive_link',
        image: osagal
    }
};

const SchoolPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const school = location.state ? location.state.school : null;

    useEffect(() => {
        if (!school) {
            navigate('/');
        } else if (school === "Old Student Association") {
            navigate('/osagallery');
        }
    }, [school, navigate]);

    if (!school || school === "Old Student Association") {
        return null;
    }

    const { driveLink, image } = schoolLinks[school] || {};

    return (
        <div className='schoolimage'>
            {image && <img src={image} alt={school} />}
            <h1 className='Leaderboard'>Thank you, {school}</h1>
            <p>Your support and cooperation has been immense for this edition of Vinterbash. We were much elated with your presence.
            So we have tried our best to give you the moments you spent with us. This is a new effort from us, doing it for the first time in Trichy.
            We've given the download link below. As the pictures are of highest quality, the file size will be large.</p>
            {driveLink ? (
                <a href={driveLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">View Photos</a>
            ) : (
                <p>Photos will be coming soon</p>
            )}
        </div>
    );
};

export default SchoolPage;
