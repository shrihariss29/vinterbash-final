import { Link } from 'react-router-dom';
function Events()
{
    
    return <div>
    <div className="eventflex">
    <h1 className="eventwelcome"  >Welcome to Vinterbash Events</h1>
    <p>Whether you're curious about our lineup of exciting events, eager to delve into the intricacies of the game rules, or ready to effortlessly register, we have you covered! 
    Stay updated and prepare to unleash your creativity, wits and fun side as D-day gets closer. Watch this space for more details. </p>
<ol>
  <li>Koodu vittu koodu</li>
  <li>Ctrl + Alt + Decrypt</li>
  <li>DOOMSDAY: The Final Frame</li>
  <li>Coronation - (Mr And Ms VinterBash)</li>
  <li>Vinter Kick-Off: 5-A Side Football</li>
  <li>Unnai Kaanathu..!!</li>
  <li>No time to Solve</li>
  <li>Chordially Yours!</li>
  <li>Vinter Bowl-Out: Turf Cricket</li>
  <li>Ar(T)elic!</li>
  <li>Imitation Game</li>
  <li>Drop the Beat</li>
  <li>The Triquizzard Tournament 5.O</li>
  <li>Acoustic Nirvana</li>
  <li>Time Traveller's Theatre</li>
  <li>Vinter Goal-Rush: FIFA '25</li>
  <li>Nalla Otrainga da Reel-uh!</li>
</ol>

    </div>
    <div className="eventbuttonflex">
    <div className="rulebook">
    <p>Click here for the Official Rule book of Vinterbash '25</p>
    <a className="btn btn-primary register" id="rulesbutton" href="https://drive.google.com/file/d/1dbLAKlvko6JWJ6VD55A0DKsteko5o84k/view?usp=sharing " 
    target="_blank" rel="noreferrer">Rule Book</a>
    </div>
    <div className="rulebook">
    <p>Click here to register</p>
    <a className="btn btn-danger reg" href="/signIn">Register</a>
    </div>
    {/* <div className="rulebook">
    <p>Click here to register in the traditional way (Alternative)</p>
    <a className="btn btn-danger reg" href="https://forms.gle/WwwDnHGsNHjBmBJh8" target="_blank" rel="noreferrer">Register</a>
    </div> */}
    </div>
    </div>
}
export default Events;

