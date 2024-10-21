import React, { useRef } from 'react'

function StateSelector() {

  return (
    <div>
       <form>
        <label>select state</label>
        <select 
        onChange={(eo)=>{
            console.log(eo.target.value);
            let stateSelector = eo.target.value;
            if(eo.target.value == "Telangana"){
                console.log("Hyderabad")
            }else if(eo.target.value == "Andhra Pradesh"){
                console.log("Amaravathi")
            }else if(stateSelector == "Arunachal Pradesh"){
                console.log("Itanagar")
            }else if(stateSelector == "Assam"){
                console.log("Dispu")
            }else if(stateSelector == "Bihar"){
                console.log("Patna")
            }else if(stateSelector == "Chhattisgarh"){
                console.log("Raipur")
            }else if(stateSelector == "Goa"){
                console.log("Panaji")
            }else if(stateSelector == "Gujarat"){
                console.log(" Gandhinagar")
            }else if(stateSelector == "Haryana"){
                console.log("Chandigarh")
            }else if(stateSelector == "Himachal Pradesh"){
                console.log("Shimla")
            }else if(stateSelector == "Jharkhand"){
                console.log("Ranchi")
            }else if(stateSelector == "Karnataka"){
                console.log("Bengaluru")
            }else if(stateSelector == "Kerala"){
                console.log("Thiruvananthapura")
            }else if(stateSelector == "Madhya Pradesh"){
                console.log("Bhopal")
            }else if(stateSelector == "Maharashtra"){
                console.log("Mumbai")
            }else{
                console.log("Some other State")
            }

            switch (stateSelector){
                case "Telangana":
                    console.log("Hyderabad")

                break;
                case "Andhra Pradesh":
                    console.log("Amaravathi")

                break;
                case "Arunachal Pradesh":
                    console.log("Itanagar")

                break;
                case "Assam":
                    console.log("Dispu")

                break;
                case "Bihar":
                    console.log("Patna")

                break;
                case "Chhattisgarh":
                    console.log("Raipur")

                break;
                case "Goa":
                    console.log("Panaji")

                break;
                case "Gujarat":
                    console.log("Gandhinagar")

                break;
                case "Haryana":
                    console.log("Chandigarh")

                break;
                case "Himachal Pradesh":
                    console.log("Shimla")

                break;
                case "Jharkhand":
                    console.log("Ranchi")

                break;
                case "Karnataka":
                    console.log("Bengaluru")

                break;
                case "Kerala":
                    console.log("Thiruvananthapura")

                break;
                case "Madhya Pradesh":
                    console.log("Bhopal")

                break;
                case "Maharashtra":
                    console.log("Mumbai")

                break;

                default:
                    console.log("Some Other State")

                    break;
            }
        
               
        }}>
        
       
            <option>Telangana</option>
            <option>Andhra pradesh</option>
            <option>Arunachal Pradesh</option>
            <option>Assam</option>
            <option>Bihar</option>
            <option>Chhattisgarh</option>
            <option>Goa</option>
            <option>Gujarat</option>
            <option>Haryana</option>
            <option>Himachal Pradesh</option>
            <option>Jharkhand</option>
            <option>Karnataka</option>
            <option>Kerala</option>
            <option>Madhya Pradesh</option>
            <option>Maharashtra</option>
        </select>
       </form>
        </div>
  )
}

export default StateSelector