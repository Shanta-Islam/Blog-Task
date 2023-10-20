import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const MyCart = () => {
    const loadedStoreProducts = useLoaderData();
    const [items, setItems] = useState(loadedStoreProducts);
    // console.log(items)
    const handleDelete = id =>{
        console.log(id);
        fetch(`http://localhost:5000/product/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('deleted successfully');
                    // remove the user from the UI
                    const remainingUsers = items.filter(item => item._id !== id);
                    setItems(remainingUsers);
                }
            })
    }
    return (
        <div className="p-20">
            <h2 className="text-center">Cart Items: {loadedStoreProducts.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            
                            <th>Email</th>
                            <th>Product Name</th>
                            <th>Product Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map(item => <tr key={item._id}>
                                
                                <td>{item.email}</td>
                                <td>{item.productName}</td>
                                <td>{item.productPrice}</td>
                                <td>
                                    <button
                                        onClick={() => handleDelete(item._id)} className="btn">X</button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
            <Toaster/>
        </div >
    );
};

export default MyCart;