import React, { useEffect, useState } from "react";
import "./style/CprofileStyle.scss";
import axios from "axios";

export function CprofileEdit() {
  const [consumerid, setConsumerId] = useState(localStorage.getItem("cId"));
  const [consumerName, setConsumerName] = useState("");
  const [consumerMob, setConsumerMob] = useState("");
  const [consumerImage, setConsumerImage] = useState("");
  const [consumerPass, setConsumerPaass] = useState("");
  const [consumerMail, setConsumerMail] = useState("");

  useEffect(() => {
    try {
      axios
        .get(`/consumer/getallshops/${consumerid}`)
        .then((res) => {
          console.log(res.data);
          setConsumerMail(res.data.mail);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log("from try catch", err);
    }
  }, [consumerid]);

  const handleName = (e) => {
    setConsumerName(e.target.value);
  };
  const handlemob = (e) => {
    setConsumerMob(e.target.value);
  };

  // const handleFileUpload = (event) => {
  //   const file = event.target.files[0];
  //   const reader = new FileReader();

  //   reader.readAsDataURL(file);
  //   reader.onload = () => {
  //     const base64String = reader.result
  //       .replace("data:", "")
  //       .replace(/^.+,/, "");
  //     // Do something with the base64String, like send it to the server
  //     setConsumerImage(base64String);
  //   };
  // };

  const handlePass = (e) => {
    setConsumerPaass(e.target.value);
  };

  const updateConsumer = (e) => {
    if (
      consumerid !== "" &&
      consumerName !== "" &&
      consumerMob !== "" &&
      // consumerImage !== "" &&
      consumerPass !== ""
    ) {
      try {
        axios
          .patch(`/consumer/update_consumer/${consumerid}`, {
            fName: consumerName,
            mobNo: consumerMob,
            password: consumerPass,
          })
          .then((res) => {
            console.log(res.data);
            alert("Updated Successfully");
          })
          .catch((err) => {
            console.log("From then catch", err);
            alert("try again !");
          });
      } catch (err) {
        console.log(err);
      }
    } else {
      alert("Please enter all the fileds");
    }
  };

  return (
    <div className="CprofileEdit">
      <div className="con-pro-container">
        <section className="con-profile-edit">
          <article className="inputs">
            <div className="title-cont">
              <p className="title">Update your profile</p>
            </div>
            <div className="fname">
              <label htmlFor="">Name</label>
              <input type="text" onChange={handleName} />
            </div>
            <div className="lname ">
              <label htmlFor="">Gmail</label>
              <input type="text" disabled value={consumerMail} />
            </div>
            <div className="mob">
              <label htmlFor="">Mobile</label>
              <input type="tel" maxLength={10} onChange={handlemob} />
            </div>
            {/* <div className="lname">
              <label htmlFor="">Image</label>
              <input type="file" onChange={handleFileUpload} />
            </div> */}
            <div className="lname">
              <label htmlFor="">Password</label>
              <input type="password" onChange={handlePass} />
            </div>
            <div className="btn-cont">
              <div className="btn" onClick={updateConsumer}>
                Submit
              </div>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}
