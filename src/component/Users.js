import {React,useState, useEffect} from "react";
import { db } from '../firebase-config'
import {  collection, getDocs } from "firebase/firestore";
import {  addDoc,doc,deleteDoc } from "firebase/firestore";
import  "./Users.css";

 function Users()
{
  let index=0
    const [newName,setNewName]= useState("");
    const [newLastName,setNewLastName]= useState("");
   const [newCin,setNewCin]= useState(0);
    const [newAdresse,setNewAdresse]= useState("");
    const [newNumTlf,setnewNumTlf]= useState(0);
    const [users,setUsers] = useState([]);
    const userCollectionRef = collection(db, "users");
    
    const createUser = async () => {
        await addDoc (userCollectionRef, { cin:newCin, nom: newName , prenom: newLastName , adresse: newAdresse , numTlf: newNumTlf });
    };

    useEffect(() => {
        const getUsers = async() => {
         const data =await getDocs(userCollectionRef);
         setUsers(data.docs.map((doc)=> ({ ...doc.data(), id: doc.id})));  
        };
        getUsers();
    },);
    const deleteUser =async(cin) =>{
        const userDoc = doc(db,"users",cin);
        
            await deleteDoc(userDoc);
        }
  
    
    return (
        <div>
                  <div className="text-center">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7VwKMBzWAeVOakD2qIIJYmmpAPNJU7-7uCw&usqp=CAU"
            style={{ width: '185px' }} alt="logo" />
          <h4 className="mt-1 mb-5 pb-1">Gestion des utilisateurs</h4>
        </div>
        <input placeholder="id"/>
     <input placeholder="cin"
      onChange={(event) => {
        setNewCin(event.target.value);}}/>
    <input placeholder="nom"
    onChange={(event) => {
        setNewName(event.target.value);}}/>
    <input placeholder="prenom"
    onChange={(event) => {
        setNewLastName(event.target.value);}}/>
    <input placeholder="adresse"
    onChange={(event) => {
        setNewAdresse(event.target.value);}}/>
    <input placeholder="numTlf"
    onChange={(event) => {
        setnewNumTlf(event.target.value);}}/>
    <button onClick={createUser}> creer utilisateur</button>

        
         {users.map((user) =>{
            return(
            <div>
                <div style={{ marginTop: "100px"}}>
                <table className="styled-table"  >
        <thead>
            <tr>
                <th style={{ textAlign: "center"}}>id</th>
                <th style={{ textAlign: "center"}}>cin</th>
                <th style={{ textAlign: "center"}}>nom</th>
                <th style={{ textAlign: "center"}}>prenom</th>
                <th style={{ textAlign: "center"}}>adresse</th>
                <th style={{ textAlign: "center"}}>numTlf</th>
                <th style={{ textAlign: "center"}}>action</th>
                </tr>
        </thead>
        <tbody>
          
              
            <tr className="last-of-type">
            <th scope="rows">{index=index+1} </th>
            <th>{user.cin}</th>
                <th>{user.nom}</th>
                <th>{user.prenom}</th>
                <th>{user.adresse}</th>
                <th>{user.numTlf}</th>
                <button   onClick={() =>{deleteUser(user.cin);}}> supprimer </button>
                <button> modifier</button>
                <button> voir</button>
            </tr>
          
        </tbody>
    </table>
                </div>
           
            
        </div>
            )
          } )}
             </div>
        
     );
        }
export default Users;
    
