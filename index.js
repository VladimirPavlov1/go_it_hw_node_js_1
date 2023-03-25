
const contactsOperation = require("./contacts")
const yargs = require("yargs");
const {hideBin} = require("yargs/helpers");



const invokeAction  = async({action,id,name,email,phone})=>{

    switch(action){
        case "list":
          
            const contacts = await contactsOperation.listContacts();
            console.log(contacts)
            break; 
        case "get":
            const contact = await contactsOperation.getContactById(id);
            if(!contact){
                throw new Error(`Contact with id=${id} not found`)
            }
            console.log(contact)
            break;
        case "add":
            const newContact = await contactsOperation.addContact(name,email,phone);
            console.log(newContact);
            break;
        case "update":
            const updateContact = await contactsOperation.updateContactById(id,data);
            if(!updateContact){
                throw new Error(`Contact with id=${id} not found`)
            }
            console.log(updateContact)
            break;
        case "remove":
            const removeContact = await contactsOperation.removeContact(id);
            console.log(removeContact);
            break;
        default:
            console.log('Unknown action')
    }
        
}



const arr = hideBin(process.argv);

const {argv} = yargs(arr); 


invokeAction(argv)

// removeId="05olLMgyVQdWRwgKfg5J6";

// const removeData = {

//     name:"Cyrusyan Jacksonyuk",
//     email:"nibh@jacksonyuk.com",
//     phone:"(501) 222-2222"
    
// }



// invokeAction({action:"removeContact",id:removeId})

