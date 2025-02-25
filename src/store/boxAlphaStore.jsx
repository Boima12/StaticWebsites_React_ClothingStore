import { create } from 'zustand';

export const useBoxAlphaStore = create((set) => ({
    context_mainRef: null,
    setContext_mainRef: (ref) => set({ context_mainRef: ref }),

    productsRef: null,  
    setProductsRef: (ref) => set({ productsRef: ref }),

    contactsRef: null,
    setContactsRef: (ref) => set({ contactsRef: ref }),
}));
