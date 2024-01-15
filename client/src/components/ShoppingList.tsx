import { useAuthStore } from "../store/auth";

function ShoppingList(){
    const user = useAuthStore(state => state.user)
    return (
        <>
        <table className="table-auto border-spacing-2 border-collapse border border-slate-400">
            <caption className="caption-top">
                Table: Shopping List.
            </caption>
            <thead>
                <tr>
                    <th className="border border-slate-300">id</th>
                    <th className="border border-slate-300">Name</th>
                    <th className="border border-slate-300">Order Number</th>
                    <th className="border border-slate-300">Quantity</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="border border-slate-300">{user.id}</td>
                    <td className="border border-slate-300">{user.name}</td>
                    <td className="border border-slate-300">{user.last_name}</td>
                    <td className="border border-slate-300">{user.phone}</td>
                </tr>
            </tbody>
        </table>
        </>
    )
}

export default ShoppingList;