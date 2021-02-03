const convertImage = (imageFile) => {
    return new Promise((resolve) => {
        const reader = new FileReader();

        reader.onload = (event) => {
            resolve(event.target.result)
        };
        reader.readAsDataURL(imageFile);
    });
}

export const prepare = (payload, state) =>
    new Promise( async resolve => {

        const original = {
            type: payload.type,
            value: payload.value,
            status: 0,
            userExtId: state.user.externalIdentifier,
            created: Date.now()
        }

        if (original.type === "image") {
            original.value = await convertImage(original.value)
        }

        resolve ({
            toSend: {
                ...original,
                sessionExtId: state.conversation.selectedConversation.sessionExtId,
                receiverExtId: state.conversation.selectedConversation.contactExtId,
            },
            original: original
        })
    });
