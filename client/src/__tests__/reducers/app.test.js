import reducer from "../../reducers/app";

describe('App reducer', () => {
    it('should handle initial state', () => {
        const initialState = {
            openContactsNavigation: false,
        }
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should handle OPEN_CONTACTS_NAVIGATION', () => {
        const resultState = {
            openContactsNavigation: true,
        }
        expect(reducer({}, { type:'OPEN_CONTACTS_NAVIGATION', payload: {} }))
            .toEqual(resultState)
    })

    it('should handle CLOSE_CONTACTS_NAVIGATION', () => {
        const resultState = {
            openContactsNavigation: false,
        }
        expect(reducer({}, { type:'CLOSE_CONTACTS_NAVIGATION', payload: {} }))
            .toEqual(resultState)
    })
})

