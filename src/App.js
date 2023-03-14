import pic2 from './images/pic1.png';
import info from './info';

const data = {
        key : 1,
        name: "UserName1",
        age: 22,
        mobile_no: "7991120085",
        email: "abc@gmail.com",
}

function App() {
   const {name,age,mobile_no,email} = data;
  const renderinfo = (info, num) => {
    return info.map((data, index) => {
      const { event,performer,amount } = data;
      return (
        
        <div className="events" key={index}>
         <h4>Event:{event}</h4>
         <h4>Performer:{performer}</h4>
         <h4>Amount Paid:{amount}</h4>
         
        </div>
      );
    });
  };
  return (
    <>
      <div className="big-container">
        <div className="left-container">
             <img src={pic2} alt="profile-pic" className="profile-pic"/>
             <h4>Name: {name}</h4>
             <h4>Age: {age}</h4>
             <h4>Mobile No.: +91 {mobile_no}</h4>
             <h4>Email: {email}</h4>
        </div>
        <div className="right-container">
            <h2>Events enrolled</h2>
             <hr></hr>
            <div>
              {renderinfo(info,3)}
            </div>
        </div>
      </div>
    </>
  );
}

export default App;
