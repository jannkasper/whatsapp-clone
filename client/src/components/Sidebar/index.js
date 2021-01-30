import Sidebar from "./Sidebar";
import { connect } from "react-redux";

function sortByDate (a,b) {
    if (a.message === undefined) {
        return -1;
    } else if (b.message === undefined) {
            return 1;
    } else {
        return b.message.date - a.message.date
    }
}

const mapStateToProps = state => {
    const contactArray = state.conversation.conversationArray
        .filter(element => element.conversation && element.conversation.length > 0)
        .map(element => {
            return {
                ...state.contacts.contactArray.find(contact => contact.externalIdentifier === element.contactExtId),
                message: element.conversation.slice(-1)[0]
            }
        }).sort(sortByDate);
    debugger;
    return {
        selectedContact: state.contacts.selectedContact,
        contactArray: state.conversation.conversationArray
            .filter(element => element.conversation && element.conversation.length > 0)
            .map(element => {
                return {
                    ...state.contacts.contactArray.find(contact => contact.externalIdentifier === element.contactExtId),
                    message: element.conversation.slice(-1)[0]
                }
            }).sort(sortByDate),
    };
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)