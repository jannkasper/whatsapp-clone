export const prepare = (payload, state) =>
    new Promise( async resolve => {

        const original = {
            type: payload.type,
            value: payload.value,
            status: 0,
            userExtId: state.user.externalIdentifier,
            created: Date.now()
        }

        resolve({
            toSend: {
                ...original,
                sessionExtId: state.conversation.selectedConversation.sessionExtId,
                receiverExtId: state.conversation.selectedConversation.contactExtId,
            },
            original: original
        })
    })
