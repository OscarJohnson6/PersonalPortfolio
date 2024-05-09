import React, { useState, useEffect } from 'react';
import '../css/styles.css';
import WrapperComponent from './WrapperComponent.jsx';

const AdminPage = () => {
    const searchParams = new URLSearchParams(window.location.search);
    const secretParam = searchParams.get('secretParam');

    const secretKey = 'mySecretKey';
    const [fanAccounts, setFanAccounts] = useState([]);
    const [emailToSearch, setEmailToSearch] = useState('');
    const [editingId, setEditingId] = useState(null);
    const [editedEmail, setEditedEmail] = useState('');

    const apiUrl = "http://localhost:8080/backend_war/portfolio/fanAccounts";

    useEffect(() => {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => setFanAccounts(data))
            .catch(error => console.error('Error fetching api fan accounts:', error));
    }, []);

    const searchFan = (emailToSearch) => {
        const searchUrl = `${apiUrl}/${emailToSearch}`;
        fetch(searchUrl)
            .then(response => response.json())
            .then(data => setFanAccounts(data))
            .catch(error => {
                console.error('Error searching for fan accounts:', error);
            });
    };

    const deleteFan = (id) => {
        const deleteUrl = `${apiUrl}/delete/${id}`;
        fetch(deleteUrl)
            .then(() => setFanAccounts(fanAccounts.filter(account => account.id !== id)))
            .catch(error => console.error('Error deleting fan account:', error));
    };

    const editFan = (id, updatedEmail) => {
        const editUrl = `${apiUrl}/update/${id}/${updatedEmail}`;
        fetch(editUrl)
            .then(() => {
                setFanAccounts(fanAccounts.map(account => {
                    if (account.id === id) {
                        return { ...account, userEmail: updatedEmail };
                    } else {
                        return account;
                    }
                }));
                setEditingId(null);
                setEditedEmail('');
            })
            .catch(error => console.error('Error editing fan account:', error));
    };

    const toggleEdit = (id, email) => {
        setEditingId(id);
        setEditedEmail(email);
    };

    const cancelEdit = () => {
        setEditingId(null);
        setEditedEmail('');
    };

    if (secretParam === secretKey) {
        return (
            <WrapperComponent
                components={[
                    <div>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            searchFan(emailToSearch);
                        }} className="mt-20">
                            <label className="font-bold text-xl" htmlFor="emailSearch">Search Fans By Email</label><br />
                            <input className="border-4 rounded mt-2 mb-2 mr-4" value={emailToSearch}
                                   onChange={(event) => setEmailToSearch(event.target.value)}
                                   type="text" name="emailSearch" id="emailSearch" placeholder="Search by email"/>
                            <button
                                className="border-2 border-gray-900 bg-gray-700 text-white px-1 rounded font-semibold
                                           hover:border-gray-400 hover:bg-gray-200/[.7] hover:text-gray-950"
                                type="submit" id="submitSearchButton">Search
                            </button>
                        </form>
                        <table className="mt-12 mb-56">
                            <thead>
                            <tr>
                                <th className="px-4 py-2">Id</th>
                                <th className="px-4 py-2">Email</th>
                                <th className="px-4 py-2">Modify</th>
                            </tr>
                            </thead>
                            <tbody>
                            {fanAccounts.map(account => (
                                <tr key={account.id}>
                                <td className="px-4 py-2">{account.id}</td>
                                    <td className="px-4 py-2">
                                        {editingId === account.id ? (
                                            <form onSubmit={(e) => {
                                                e.preventDefault();
                                                editFan(account.id, editedEmail);
                                            }}>
                                                <input
                                                    type="text"
                                                    value={editedEmail}
                                                    onChange={(email) => setEditedEmail(email.target.value)}
                                                    className="border-2 border-black mr-3"
                                                />
                                                <button className="px-1 font-medium mr-1 text-white rounded border-2 border-green-400 bg-green-500" type="submit">Save</button>
                                                <button className="px-1 font-medium text-white border-2 rounded border-red-500 bg-rose-600" type="button" onClick={cancelEdit}>Cancel</button>
                                            </form>
                                        ) : (
                                            account.userEmail
                                        )}
                                    </td>
                                    <td>
                                        <button className="mr-1 border-2 border-gray-900 bg-gray-700 text-white px-1 rounded font-semibold
                                                    hover:border-gray-400 hover:bg-gray-200/[.7] hover:text-gray-950"
                                                onClick={() => toggleEdit(account.id, account.userEmail)}>Edit
                                        </button>
                                        <button className="px-2 text-red-400 hover:text-red-600 font-semibold text-xl"
                                                onClick={() => deleteFan(account.id)}>X
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                ]}
            />
        );
    } else {
        return <h1>Access Denied. You don't have permission to view this page.</h1>;
    }
};

export default AdminPage;
