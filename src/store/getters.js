export default {
    allShoes: (state) => state.listShoe,
    categories: (state) => state.categories,
    getShoeById: (state) => (id) =>
    {
        for (const shoe of state.listShoe) {
            if (shoe.id == id) return shoe;
        }
    },
    cartLen: (state) => state.cart.items.length,
    items: (state) => state.cart.items,
    getTotal: (state) =>
    {
        return () =>
        {
            let t = 0;
            for (const item of state.cart.items) {
                t += item.qty * item.stock.shoe.price;
            }
            return t;
        }
    }
}