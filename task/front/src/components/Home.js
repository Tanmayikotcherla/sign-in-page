import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import Image1 from './images/gandhiji.jpg';
import Image2 from './images/nehru.jpg';
import Image3 from './images/bhagat singh.jpg';

function Home() {
    const navigate = useNavigate();
    const aiSectionRef = useRef(null);
    const dsSectionRef = useRef(null);
    const mlSectionRef = useRef(null);

    useEffect(() => {
        const token = localStorage.getItem('TOKEN');
        if (!token) {
            navigate('/signin');
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.clear();
        navigate('/signin');
    };

    const userEmail = localStorage.getItem('EMAIL');

    const scrollToSection = (sectionRef) => {
        if (sectionRef.current) {
            sectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const Body = () => {
        return (
            <div className="body">
                <h2>Independence day.</h2>
                <p>
                August 15th annually commemorates India’s freedom from British colonial rule in 1947. 
                The upcoming Independence Day 2023 marks the 77th celebration, where the Prime Minister raises the National Flag at Delhi’s Red Fort. This day symbolizes the end of a challenging fight for freedom, led by iconic figures like Gandhi, Bhagat Singh, and Subhash Chandra Bose.
                 It remains a pivotal moment in Indian history, honoring nonviolent civil disobedience and leadership.
                </p>

                <div className="image-container">
                    <a href="#ai-section" onClick={() => scrollToSection(aiSectionRef)}>
                        <img src={Image1} alt="Artificial Intelligence" />
                    </a>
                    <a href="#ds-section" onClick={() => scrollToSection(dsSectionRef)}>
                        <img src={Image2} alt="Data Science" />
                    </a>
                    <a href="#ml-section" onClick={() => scrollToSection(mlSectionRef)}>
                        <img src={Image3} alt="Machine Learning" />
                    </a>
                </div>

                <div ref={aiSectionRef} id="ai-section">
                    <h2>GANDHIJI</h2>
                    <p>
                    Mohandas Karamchand Gandhi was an Indian lawyer and anti-colonial nationalist who employed non-violent resistance in the campaign for India’s independence from British 
                Born in 1869 in Gujarat, India, Gandhi studied law at the Inner Temple in London.
 After unsuccessfully attempting to practise in India, he moved to South Africa in 1893, where he stayed for 21 years.
  It was in South Africa that Gandhi first used tactics of non-violent resistance to campaign for civil rights.
   This activism gained Gandhi the title Mahatma, meaning ‘great soul’. 
                    </p>
                </div>

                <div ref={dsSectionRef} id="ds-section">
                    <h2>JAWAHARLAL NEHRU</h2>
                    <p>
                    Jawaharlal Nehru was born on 14 November 1889 in Allahabad in British India. His father, Motilal Nehru (1861–1931), a self-made wealthy barrister who belonged to the Kashmiri Pandit community, served twice as president of the Indian National Congress, in 1919 and 1928.[4] His mother, Swarup Rani Thussu (1868–1938), who came from a well-known Kashmiri Brahmin family settled in Lahore,[5] was Motilal's second wife, his first having died in childbirth. Jawaharlal was the eldest of three children.[6] The elder of his two sisters, Vijaya Lakshmi, later became the first female president of the United Nations General Assembly.[7] His youngest sister, Krishna Hutheesing, became a noted writer and authored several books on her brother.[8][9]

Childhood
Photograph of Nehru and his parents
Jawaharlal with his parents Swarup Rani Nehru (left) and Motilal Nehru in the 1890s
Nehru described his childhood as a "sheltered and uneventful one". He grew up in an atmosphere of privilege in wealthy homes, including a palatial estate called the Anand Bhavan. His father had him educated at home by private governesses and tutors.[10] Influenced by the Irish theosophist Ferdinand T. Brooks' teaching,[11] Nehru became interested in science and theosophy.[12] A family friend, Annie Besant subsequently initiated him into the Theosophical Society at age thirteen. However, his interest in theosophy did not prove to be enduring, and he left the society shortly after Brooks departed as his tutor.[13] He wrote: "For nearly three years [Brooks] was with me and in many ways, he influenced me greatly".[12]

Nehru's theosophical interests induced him to study the Buddhist and Hindu scriptures.[14] According to B. R. Nanda, these scriptures were Nehru's "first introduction to the religious and cultural heritage of [India]....[They] provided Nehru the initial impulse for [his] long intellectual quest which culminated…in The Discovery of India."[14]
                    </p>
                </div>

                <div ref={mlSectionRef} id="ml-section">
                    <h2>BHAGAT SINGH</h2>
                    <p>
                        
                    Bhagat Singh, (born September 27, 1907, Lyallpur, western Punjab, India [now in Pakistan]—died March 23, 1931, Lahore [now in Pakistan]), revolutionary hero of the Indian independence movement.

Bhagat Singh attended Dayanand Anglo Vedic High School, which was operated by Arya Samaj (a reform sect of modern Hinduism), and then National College, both located in Lahore. He began to protest British rule in India while still a youth and soon fought for national independence. He also worked as a writer and editor in Amritsar for Punjabi- and Urdu-language newspapers espousing Marxist theories. He is credited with popularizing the catchphrase “Inquilab zindabad” (“Long live the revolution”).
In 1928 Bhagat Singh plotted with others to kill the police chief responsible for the death of Indian writer and politician Lala Lajpat Rai, one of the founders of National College, during a silent march opposing the Simon Commission. Instead, in a case of mistaken identity, junior officer J.P. Saunders was killed, and Bhagat Singh had to flee Lahore to escape the death penalty. In 1929 he and an associate lobbed a bomb at the Central Legislative Assembly in Delhi to protest the implementation of the Defence of India Act and then surrendered. He was hanged at the age of 23 for the murder of Saunders.
                    </p>
                </div>
            </div>
        );
    };

    return (
        <div className="App">
            <div className="dashboard">
                <div className="header">
                    <h1>FREEDOM FIGHTERS </h1>
                    <p>You are logged in as: <strong>{userEmail}</strong></p>
                    <button onClick={handleLogout} className="logout-button">Logout</button>
                </div>
                <Body />
            </div>
        </div>
    );
}

export default Home;